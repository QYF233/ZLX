<template>
	<!-- <view class="box">
		<view class="TreasureImage" v-for="(item,index) in info" :key = 'index'>
			<view class="item">
				<view class="url">
					<image :src="item.url"></image>
				</view>
				<view class="name">{{item.name}}</view>
			</view>
		</view>
	</view> -->
	<view class="box">
		<view class="bg-img bg-mask flex align-center pic" v-bind:style="{ 'background-image': 'url(' + item.url + ')'}"
		v-for="(item,index) in info" :key = 'index'>
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					{{item.name}}
				</view>
				<view class="padding-xs text-lg">
					{{item.tip}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'TreasureImage',
		data() {
			return {
				info: [{
						name: '博物馆',
						url: require('../../../static/tsImage/1.jpg'),
						tip:'museum'
					}, {
						name: '科技馆',
						url: require('../../../static/tsImage/2.jpg'),
						tip:'Science and Technology Museum'
					}, {
						name: '展览馆',
						url: require('../../../static/tsImage/3.jpg'),
						tip:'Exhibition Hall'
					},
					{
						name: '纪念馆',
						url: require('../../../static/tsImage/4.jpg'),
						tip:'Memorial Hall'
					},
					{
						name: '名人故居',
						url: require('../../../static/tsImage/5.jpg'),
						tip:'Former residence of celebrities'
					},
					{
						name: '手工艺品',
						url: require('../../../static/tsImage/6.jpg'),
						tip:'Handicrafts'
					}
				],
			}
		}
	}
</script>

<style>
	.box {
		/* margin-top: 10px; */
	}
	.pic{
		height: 414upx;
		/* margin-top: 20rpx; */
	}
</style>
