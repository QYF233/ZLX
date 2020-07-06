<template>
	<view class="location">
		<view class="left">
			<view class="up">
				<view class="city" v-if="city!=''">{{city}}</view>
				<view class="city" v-else>定位中...</view>
				<text class="iconfont">&#xe658;</text>
			</view>
			<view class="temp">
				<text class="iconfont">&#xe646;</text>
				<template v-if="low!=''&&high!=''">{{wetherType}} <text class="low">{{low}}</text>~<text class="hight">{{high}}</text></template>
				<text v-else>正在获取天气...</text>
			</view>
		</view>
		<view class="right">
			<button class="cu-btn round"><text class="iconfont">&#xe61c;</text>看旅图</button>
		</view>
	</view>
</template>

<script>
export default{
	name: 'HomeLocation',
	data(){
		return {
			city:'',
			low:'',
			high:'',
			wetherType:''
		}
	},
	beforeCreate() {
		uni.getLocation({
			geocode:true,
			type:'gcj02',
			success: (res) => {
				if(res.address){
					this.city = res.address.city
					uni.request({
						url:'http://wthrcdn.etouch.cn/weather_mini',
						data:{city:this.city},
						success:(result)=>{
							if(result.statusCode===200){
								let data = result.data.data
								let wether = data.forecast
								let today = wether[0]
								this.low = today.low.split(' ')[1]
								this.high = today.high.split(' ')[1]
								this.wetherType = today.type
							}
						}
					 })
				}
			}
		})
	}
}
</script>

<style lang="stylus" scoped>
	.location{
		left: 0;
		display: flex;
		height: 200rpx;
		width: 100%;
		flex-direction: column;
	}
	.up{
		display: flex;
	}
	.city{
		font-size: 80rpx;
		color: #fff;
		margin-left: 60rpx;
		margin-top: 30rpx;
		height: 110rpx;
		line-height: 110rpx;
	}
	.up .iconfont{
		color: #fff;
		margin-top: 30rpx;
		font-size: 40rpx;
		margin-left:10rpx;
		height: 110rpx;
		line-height: 110rpx;
	}
	.temp{
		font-size: 32rpx;
		margin-left: 60rpx;
		color: #fff;
	}
	.temp .iconfont{
		margin-right: 10rpx;
	}
	.right
		position: absolute;
		right: 0;
		margin: 90rpx 60rpx 0 0;
		width 168rpx
		height: 50rpx;
		line-height 50rpx;
		color: #fff;
		border-radius: 50rpx;

</style>
