<template>
	<view class="list">
		<view class="item"  v-for="(item,index) in data" :key="index" v-if="classId==item.id">
			<view class="title text-bold">
				{{item.name}}
			</view>
			<image class="pic" :src="item.pic" mode=""></image>
			<view class="place text-gray text-ABC">
				{{item.place}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'list',
		components: {

		},
		data() {
			return {
				classId:"",
				data:[
					{
						id:"1",
						name:"浙江省博物馆",
						place:"杭州市下城区西湖文化广场A区",
						pic:"../../static/tsImage/1.jpg"
					},
					{
						id:"1",
						name:"杭州市博物馆",
						place:"杭州市下城区西湖文化广场A区",
						pic:"../../static/tsImage/1.jpg"
					},
					{
						id:"2",
						name:"杭州市科技馆",
						place:"杭州市下城区西湖文化广场A区",
						pic:"../../static/tsImage/1.jpg"
					},
					{
						id:"2",
						name:"浙江省科技馆",
						place:"杭州市下城区西湖文化广场A区",
						pic:"../../static/tsImage/1.jpg"
					}
				],
			}
		},onLoad: function(option) {
			/* 分类id */
			this.classId = parseInt(option.id);
		},
		methods:{
			
		}
	}
</script>

<style>
	
	.item {
		/* margin: 20rpx 40rpx; */
		padding: 20rpx 20rpx;
		position: relative;
	}

	.item:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 0px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #919191;
	}

	.title {
		font-size: 18px;
		font-weight: 900;
		color: #333333;
		line-height: 80rpx;
		/* padding: 0 16px; */
	}
	.pic {
		width: 100%;
		height: 180px;
		border-radius: 8px;
	}
	.place {
		margin: 5px 0;
	}
</style>
