<template>
	<view class="hot">
		<view class="cu-bar justify-center bg-white">
			<view class="action sub-title">
				<text class="text-xl text-bold text-green">热门景点</text>
				<text class="bg-green" style="width:2rem"></text>
				<!-- last-child选择器-->
			</view>
		</view>
		<view class="cu-list grid col-3 big">
			<view class="cu-item" @click="returnDetail(1)">
				<view class="tag bg-yellow">
					top1
				</view>
				<view class="introduce">
					是鲁迅诞生和青少年时期生活过的故土
				</view>
				<view class="bg-img-lg flex  align-end justify-end" style="background-image: url(../../static/image/hangzhou.jpg);">
					<view class="name padding-xs text-white">
						<view class="padding-xs text-lg text-bold">
							鲁迅故里
						</view>
					</view>
				</view>
	
			</view>
			<view class="cu-item" @click="returnDetail(2)">
				<view class="tag bg-yellow">
					top2
				</view>
				<view class="bg-img-lg flex  align-end justify-end" style="background-image: url(../../static/image/shaoxing.jpg);">
					<view class="name padding-xs text-white align-end">
						<view class="padding-xs text-lg text-bold">
							大禹陵
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item" @click="returnDetail(3)">
				<view class="tag bg-yellow">
					top3
				</view>
				<view class="bg-img-lg flex  align-end justify-end" style="background-image: url(../../static/image/jiaxing.jpg);">
					<view class="name padding-xs text-white">
						<view class="padding-xs text-lg text-bold">
							新昌大佛寺
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-list grid col-4 small">
			<view class="cu-item" @click="returnDetail(4)">
				<view class="tag bg-yellow">
					top4
				</view>
				<view class="bg-img-sm flex align-end justify-end" style="background-image: url(../../static/image/zhoushan.jpg);">
					<view class="name padding-xs text-white">
						<view class="padding-xs text-sm text-bold">
							五洩景区
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item" @click="returnDetail(5)">
				<view class="tag bg-yellow">
					top5
				</view>
				<view class="bg-img-sm flex  align-end justify-end" style="background-image: url(../../static/image/ningbo.jpg);">
					<view class="name padding-xs text-white align-end">
						<view class="padding-xs text-sm text-bold">
							吼山名胜区
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item" @click="returnDetail(6)">
				<view class="tag bg-yellow">
					top6
				</view>
				<view class="bg-img-sm flex  align-end justify-end" style="background-image: url(../../static/image/jinhua.jpg);">
					<view class="name padding-xs text-white">
						<view class="padding-xs text-sm text-bold">
							东湖
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item" @click="returnDetail(-1)">
				<!-- <view class="tag bg-yellow">
					top3
				</view> -->
				<view class="bg-img-sm flex  align-end justify-end" style="background-image: url(../../static/image/lishui.jpg);">
					<view class="name padding-xs text-white">
						<view class="padding-xs text-sm text-bold">
							更多
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name:"SearchHot",
		data() {
			return{
				data:""
			}
		},
		methods:{
			returnDetail(data) {
				console.log(data);
				if (data > 0) {
					uni.navigateTo({
						url: "/pages/tourist/Deatil?id=" + data
					})
				} else {
					uni.navigateTo({
						url: "/pages/tourist/tourist"
					})
				}
			
			}
		}
	}
</script>

<style lang="scss" scoped>
	.iconfont {
		font-size: 1.8em;
	}
	
	.big {
		.bg-img-lg {
			background-size: cover;
			height: 300rpx;
		}
	
		.cu-item {
			padding: 0;
		}
	}
	
	.small {
		margin-top: 0;
	
		.bg-img-sm {
			background-size: cover;
			height: 200rpx;
		}
	
		.cu-item {
			padding: 0;
		}
	}
	
	.cu-item {
		position: relative;
	
	}
	
	.name {
		width: 100%;
		text-align: right;
		background-color: rgba($color: #000000, $alpha: 0.2);
	}
	
	.introduce {
		position: absolute;
		top: 100rpx;
		color: #FFFFFF;
	}
	
	
	.tag {
		z-index: 10;
		position: absolute;
		top: 10;
		left: 0;
		padding: 8rpx;
		color: #FFFFFF;
	}
</style>
