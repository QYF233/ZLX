<template>
	<view class="header">
		<view class="cu-bar search">
			<view class="search-form round solid line-gray">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索你想要的美食"
				 confirm-type="search"></input>
			</view>
			<view class="grid ">
				<view class="text-center select-city ">
					<button class="cu-btn round line-gray" >选择城市</button>
				</view>
			</view>
			<!-- <view class="right">
				<view class="search_select uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input city">{{array[index]}}</view>
					</picker>
				</view>
			</view> -->

		</view>
	</view>
</template>

<script>
	export default {
		name: 'SearchTool',
		data() {
			return {
				title: 'picker',
				array: ['选择城市', '杭州市', '宁波市', '温州市', '嘉兴市', '湖州市', '绍兴市', '金华市', '衢州市', '舟山市', '丽水市'],
				index: 0
			}
		},
		methods: {

		},
	}
</script>

<style>
	.search {
		margin: 40rpx 0rpx 20rpx 40rpx;
		display: flex;
	}

	.search_box {
		border-radius: 50rpx;
		background-color: #fff;
		width: 65%;
		height: 75rpx;
		line-height: 75rpx;
		flex: auto;
		padding: 4rpx 35rpx 4rpx 35rpx;
		color: #666;
		border: 2px solid #007AFF;
	}

	.icon {
		float: right;

	}

	.right {
		flex: none;
	}

	.search_select {
		height: 75rpx;
		line-height: 75rpx;
	}

	.city {
		margin: 0 10rpx;
	}
</style>
