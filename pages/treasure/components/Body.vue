<template>
	<view>
		<view class="box">
			<view class="bg-img bg-mask flex align-center pic" v-bind:style="{ 'background-image': 'url(' + item.url + ')'}"
			 v-for="(item,index) in info" :key='index' @tap="onClick(item.id)">
				<view class="padding-xl text-white">
					<view class="padding-xs text-xxl text-bold">
						{{item.name}}
					</view>
					<view class="padding-xs text-lg text-Abc">
						{{item.tip}}
					</view>
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
						id: 1,
						name: '博物馆',
						url: require('../../../static/tsImage/1.jpg'),
						tip: 'museum'
					}, {
						id: 2,
						name: '科技馆',
						url: require('../../../static/tsImage/2.jpg'),
						tip: 'Science and Technology Museum'
					}, {
						id: 3,
						name: '展览馆',
						url: require('../../../static/tsImage/3.jpg'),
						tip: 'Exhibition Hall'
					},
					{
						id: 4,
						name: '纪念馆',
						url: require('../../../static/tsImage/4.jpg'),
						tip: 'Memorial Hall'
					},
					{
						id: 5,
						name: '名人故居',
						url: require('../../../static/tsImage/5.jpg'),
						tip: 'Former residence of celebrities'
					},
					{
						id: 6,
						name: '手工艺品',
						url: require('../../../static/tsImage/6.jpg'),
						tip: 'Handicrafts'
					}
				],
			}
		},
		methods: {
			onClick($event) {
				uni.navigateTo({
					url:"/pages/treasure/detail?id="+$event,
				})
			}
		}
	}
</script>

<style>
	.box {
		/* margin-top: 10px; */
	}

	.pic {
		height: 414upx;
		/* margin-bottom: 20rpx; */
	}
</style>
