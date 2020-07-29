<template>
	<view>
		<view class="content" :style="'background-image:url('+ citybackgroundImage +')'" >
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<home-header></home-header>
			<home-location :city="cityname" :weatherType="weatherType" :low="low" :high="high" @getLocation="getLocation"></home-location>
			<home-icon></home-icon>
			<h1>发现浙里</h1>
			<waterfalls-flow :wfList='list' @itemTap="choose"></waterfalls-flow>
		</view>
	</view>
</template>

<script>
	const data = require('@/common/json/recommendData.json')
	const cityList = require('@/common/json/citys.json').citys
	import HomeHeader from './components/Header'
	import HomeLocation from './components/Location'
	import HomeIcon from './components/Icon'
	import HomeFind from './components/Find'
	import WaterfallsFlow from '@/components/WaterfallsFlow/WaterfallsFlow.vue'
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeLocation,
			HomeIcon,
			HomeFind,
			WaterfallsFlow
		},
		data() {
			return {
				list:[],
				weatherType:'',
				cityid:0,
				lastcityid:0, //改变城市之前的城市id 用于根据城市id获取瀑布流内容
				cityname:'正在定位...',
				citybackgroundImage:'',
				low:'',
				high:''
			}
		},
		methods:{
			getList(){
				setTimeout(()=>{
					this.list = this.list.concat(data.list)
					uni.hideLoading()
				},200)
				console.log("getList")
			},
			choose(data){
				uni.navigateTo({
					url:data.url
				})
			},
			getCityObject(cityName){
				for (let city of cityList){
					if(city.name === cityName){
						this.cityname = city.name
						this.cityid = city.id
						this.citybackgroundImage = city.backgroundImage
						break
					}
				}
			},
			getLocation(){
				uni.removeStorageSync("city")
				this.cityname = '正在定位...'
				this.high = ''
				this.low = ''
				setTimeout(()=>{
					uni.getLocation({
						geocode: true,
						type: 'gcj02',
						success: (res) => {
							if (res.address) {
								let cityName = res.address.city
								this.getCityObject(cityName)
								this.getWeather()
								if(this.cityid !== this.lastcityid){ //城市改变 重新加载瀑布流
									this.getList()
									this.lastcityid = this.cityid
								}
							}
						}
					})
				},300)
			},
			
			getWeather(){
				uni.request({
					url: 'http://wthrcdn.etouch.cn/weather_mini',
					data: {
						city: this.cityname
					},
					success: (result) => {
						if (result.data.status===1000) {
							let data = result.data.data
							let wether = data.forecast
							let today = wether[0]
							this.low = today.low.split(' ')[1]
							this.high = today.high.split(' ')[1]
							this.weatherType = today.type
						}
					}
				})
			}
		},
		onShow(){
			let city = uni.getStorageSync("city")
			if(city){
				this.cityid = city.id
				this.cityname = city.name
				this.citybackgroundImage = city.backgroundImage
				this.getWeather()
				if(this.cityid !== this.lastcityid){  //第一次onShow时一定为true
					this.getList()
					this.lastcityid = this.cityid
				}
			}else if(this.cityid===0){
				this.getLocation()
			}
		},
		onReachBottom() {
			uni.showLoading({
				title:"正在加载" 
			})
			this.getList()
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		background: url('@/static/image/ningbo.png');
		background-repeat: no-repeat;
		background-size: contain;
	}
	h1 {
		font-size: 18px;
		margin-left: 20rpx;
	}
	.temp {
		text-align: center;
	}
</style>
