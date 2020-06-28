<template>
	<view class="box">
		<view class="TreasureImage" v-for="(item,index) in info" :key = 'index'>
			<view class="item">
				<view class="url">
					<image :src="item.url"></image>
				</view>
				<view class="name">{{item.name}}</view>
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
				    url:require('../../../static/tsImage/1.jpg')
				}, {
					name: '科技馆',
				    url:require('../../../static/tsImage/2.jpg')
				}, {
					name: '展览馆',
				    url:require('../../../static/tsImage/3.jpg')
				},
				{
					name: '纪念馆',
				    url:require('../../../static/tsImage/4.jpg')
				},
				{
					name: '名人故居',
				    url:require('../../../static/tsImage/5.jpg')
				},
				{
					name: '手工艺品',
				    url:require('../../../static/tsImage/6.jpg')
				}],
			}
		}
	}
</script>

<style>
	.box{
		margin-top: 10px;
	}
	.TreasureImage{
		border-radius: 0rpx;
		padding: 0px;
		width: 50%;
		display: inline-flex;
		flex-direction: row;
	}
	.item{
		width: 100%;
		margin: 0 5px;
	}
	image{
		width: 100%;
	}
	.name{
		text-align: center;
		font-size: 20px;
	}
</style>
