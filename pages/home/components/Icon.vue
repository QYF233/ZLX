<template>
		<view class="box cu-list grid margin col-4 no-border" :style="{backgroundImage: 'url('+imgUrl+')'}">
			
			<view class="icon-b cu-item" v-for="(item,index) in iconListBig" :key = 'index'>
				<navigator :url='item.url' open-type="navigate" class="item">
					<!-- <view class="iconfont tubiaozhizuomoban_fengjing" :style="{color:item.color}">{{item.icon}}</view> -->
					<view :class="'t-icon iconfont ' + item.clas" style="width: 64rpx; height: 64rpx;"></view>
					<view class="name">{{item.name}}</view>
				</navigator>
			</view>
			
		</view>
</template>

<script>
	export default {
		name: 'HomeIcon',
		props: {
			cityId: '',
			imgUrl:""
		},
		data() {
			return {
				iconListBig: [{
				  icon: '\ue60b',
				  color: '#fbbd08',
				  name: '寻吃',
				  url: '/pages/food/food',
				  clas: 'iconmeishi1'
				},{
				  icon: '\ue608',
				  color: '#0081ff',
				  name: '寻游',
				  url: '/pages/locations/locations',
				  clas: 'iconlvyougonglve'
				},{
				  icon: '\ueb55',
				  color: '#39b54a',
				  name: '寻景',
				  url: '/pages/tourist/tourist',
				  clas: 'iconjingdian1'
				},{
				  icon: '\ue681',
				  color: '#6739b6',
				  name: '寻意',
				  url: '/pages/atmosphere/atmosphere',
				  clas: 'iconwenhua'
				},{
				  icon: '\ue65d',
				  color: '#9c26b0',
				  name: '寻乐',
				  url: '/pages/play/play',
				  clas: 'iconshoubing'
				},{
				  icon: '\ueb57',
				  color: '#f37b1d',
				  name: '寻宝',
				  url: '/pages/treasure/treasure',
				  clas: 'iconbowuguan2'
				},{
				  icon: '\ue62d',
				  color: '#8799a3',
				  name: '寻画',
				  url: '/pages/painting/painting',
				  clas: 'iconzhaopian'
				},{
				  icon: '\ue62f',
				  color: '#1cbbb4',
				  name: '寻境',
				  url: '/pages/vr/index',
				  clas: 'iconiconfont-zhutizuizhong-'
				}],
				imageURL:''
			}
		},
		mounted() {
			// this.getUrl()
		},
		methods: {
			getUrl(){
				console.log(this.cityId);
				if(this.cityId==1){
					this.imageURL = "/static/image/homeBG3.jpg";
				}else{
					this.imageURL = "/static/image/homeBG7.jpg";
				}
			},
			homeLoadList(city) {
				if (city.name !== this.cityname) {
					this.cityname = city.name
					this.citybackgroundImage = city.backgroundImage
					this.getWeather()
					this.loadList()
				}
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.box
		// background-image: url("~@/static/image/homeBG7.jpg");
		background-size: 100% 100%;
		background-color: #FFF;
		border-radius: 20rpx;	
		.item
			.name
				font-size .9em
			.iconfont
				font-size: 60rpx;
				margin: 20rpx 20rpx;
</style>
