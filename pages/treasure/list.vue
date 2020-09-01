<template>
	<view class="list">
		<view class="item"  v-for="(item,index) in treasureList" :key="index" v-if="classId==item.classifyId">
			<view class="title text-bold">
				{{item.treasureName}}
			</view>
			<image class="pic" :src="item.img[0]" mode="widthFix"></image>
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
				treasureList:[],
			}
		},onLoad: function(option) {
			/* 分类id */
			this.classId = parseInt(option.id);
			this.getData()
		},
		methods:{
			async getData() {
				const res1 = await this.$myRequest({
					url: '/treasure/getlist'
				})
				for (var i = 0; i < res1.data.list.length; i++) {
					
					this.treasureList.push(res1.data.list[i])
				}
				console.log(this.treasureList[0].img);
			},
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
