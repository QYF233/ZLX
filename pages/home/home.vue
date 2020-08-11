<template>
	<view>
		<view class="content" :style="'background-image:url('+ citybackgroundImage +')'" >
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<home-header></home-header>
			<home-location :city="cityname" :weatherType="weatherType" :low="low" :high="high"></home-location>
			<home-icon></home-icon>
			<view v-if="currentCity !== cityname && currentCity!==''" class="switch">
				当前定位显示你在“{{currentCity}}”<view class="switch_btn" @click="switchToCurrentCity">切换</view>
			</view>				
			<h1>发现浙里</h1>
			<waterfalls-flow :wfList='list' @itemTap="choose"></waterfalls-flow>
		</view>
	</view>
</template>

<script>
	const data = require('@/common/json/recommendData.json')
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
				cityname:'正在定位...',
				citybackgroundImage:'',
				low:'',
				high:'',
				currentCity:''
			}
		},
		onLoad() {
			uni.$on('homeLoadList',this.homeLoadList)		//监听城市改变
			this.getLocation()
			let city = uni.getStorageSync("city")
			if(city){
				this.cityname = city.name
				this.citybackgroundImage = city.backgroundImage
				this.getWeather()
				this.loadList()
			 } 
		},
		methods:{
			loadList(){
				this.list = []
				setTimeout(()=>{
					this.list = this.list.concat(data.list)
				},200)
			},
			switchToCurrentCity(){
				this.getCityObject(this.currentCity)
				this.loadList()
			},
			homeLoadList(city){
				if(city.name !== this.cityname){
					this.cityname = city.name
					this.citybackgroundImage = city.backgroundImage
					this.getWeather()
					this.loadList()
				}
			},
			appendList(){
				uni.showLoading({
					title:"正在加载"
				})
				setTimeout(()=>{
					this.list = this.list.concat(data.list)
					uni.hideLoading()
				},200)
			},
			choose(data){
				uni.navigateTo({
					url:data.url
				})
			},
			getCityObject(cityName){
				uni.request({
					url:this.websiteUrl + 'city/getcity?name=' + cityName,
					success: (res) => {
						var city = {
							name:res.data.name,
							backgroundImage:res.data.backgroundPicture
						}
						uni.setStorage({
							key:"city",
							data:city
						})
				 		this.cityname = city.name
				 		this.citybackgroundImage = city.backgroundImage
						this.getWeather()
					}
				})
			},
			getLocation(){
				this.cityname = '正在定位...'
				this.high = ''
				this.low = ''
				uni.getLocation({
					geocode: true,
					type: 'gcj02',
					success: (res) => {
						if (res.address) {
							let cityName = res.address.city
							this.currentCity = cityName
							let storageCity = uni.getStorageSync('city')
							if(!storageCity) {
								this.getCityObject(cityName)
								this.loadList()
							}
						}
					}
				})
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
		onReachBottom() {
			this.appendList()
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
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
	.switch {
		font-size: 16px;
		color: #FFFFFF;
		background-color: rgba(0,0,0,0.2);
		margin: 0 20rpx;
		border-radius: 10rpx;
		display: flex;
		height: 70rpx;
		line-height: 70rpx;
		padding: 0 10rpx;
		position: relative;
	}
	.switch_btn {
		position: absolute;
		right: 30rpx;
		background-color: #007AFF;
		width: 100rpx;
		text-align: center;
		border-radius: 5px;
		height: 50rpx;
		line-height: 50rpx;
		margin: 5px 0;
	}
</style>
