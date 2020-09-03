<template>
	<view class="tellus">
		<h1>联系我们</h1>
		<view class="connect">
			<ul>
				<li>
					<view class="iconfont">&#xe615;</view>
					<view class="text">***********@163.com</view>
					<view class="action">
						<button size="mini" type="primary" @click="copy('**********@163.com')">复制</button>
					</view>
				</li>
				<li>
					<view class="iconfont">&#xe6d4;</view>
					<view class="text">*******</view>
					<view class="action">
						<button size="mini" type="primary" @click="makecall">拨打</button>
					</view>
				</li>
				<li>
					<view class="iconfont">&#xe60f;</view>
					<view class="text">******</view>
					<view class="action">
						<button size="mini" type="primary" @click="copy('******')">复制</button>
					</view>
				</li>
				<li>
					<view class="iconfont">&#xe61f;</view>
					<view class="text">******</view>
					<view class="action">
						<button size="mini" type="primary" @click="copy('******')">复制</button>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			makecall(){
				uni.makePhoneCall({
				    phoneNumber: '*******'
				});
			},
			copy(content){
				uni.setClipboardData({
				    data: content
				});
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.tellus{
		margin-top: 100rpx;
	}
	.iconfont{
		font-size: 20px;
	}
	h1 {
		font-size: 20px;
		text-align: center;
	}
	li{
		height: 100rpx;
		display: flex;
		line-height: 100rpx;
	}
	.text {
		font-size: 18px;
		padding-left: 20rpx;
	}
	.action {
		margin: 20rpx 20rpx;
	}
</style>
