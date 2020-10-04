<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="banner" @click="goDetail(banner)">
			<image class="banner-img" :src="this.bannerImg"></image>
			<view class="banner-title">{{banner.cityCultureName}}</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" v-if="key > 0"
			 @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.images"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top text-bold">{{value.cityCultureName}}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{value.city}}</text>
							<text>{{value.time}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var dateUtils = require('../../common/util.js').dateUtils;
	export default {
		data() {
			return {
				banner: {},
				bannerImg:"",
				listData: [],
				last_id: "",
				reload: false,
			}
		},
		onLoad() {
			this.getBanner();
			this.getList();
			// this.getData();
		},
		onPullDownRefresh() {
			this.reload = true;
			this.last_id = "";
			this.getBanner();
			this.getList();
		},
		onReachBottom() {
			this.getList();
		},
		methods: {
			async getData() {
				const res = await this.$myRequest({
					url: 'atmosphere/getlist'
				})
				this.banner = res.data.list[0];
				for (var i = 1; i < res.data.list.length; i++) {
					this.listData.push(res.data.list[i])
				}
			},
			/* 跳转到详细页面 */
			goDetail: function(e) {
				const img = ''
				if(e.images instanceof Array){
					//应对banner的图片是数组问题
					this.img = e.images[0]
				}else{
					this.img = e.images
				}
				let detail = {
					author_name: e.cityCultureName,
					image: this.img,
					id: e.id,
					post_id: e.id,
					published_at: e.time,
					title: e.cityCultureName,
					describe: e.describe
				}
				uni.navigateTo({
					url: "detail?detailDate=" + encodeURIComponent(JSON.stringify(
						detail))
				})
			},
			/* 获取第一个数据 */
			getBanner() {
				let data = {};
				uni.request({
					url: 'http://zlx.kikohk.top/atmosphere/list',
					success: (data) => {
						// console.log("**************************");
						uni.stopPullDownRefresh();
						if (data.statusCode == 200) {
							this.banner = data.data.list[0];
							this.bannerImg = this.banner.images[0]
							// this.bannerImg = "http://img.zjol.com.cn/mlf/dzw/zxlypd/xw14873/lyjsb/202010/W020201003387460049677.png"
						}
					},
					fail: (data, code) => {}
				})
			},
			getList() {
				var data = {};
				if (this.last_id) { //说明已有数据，目前处于上拉加载
					data.minId = this.last_id;
					data.time = new Date().getTime() + "";
					data.pageSize = 10;
				}
				uni.request({
					url: 'http://zlx.kikohk.top/atmosphere/list',
					success: (data) => {
						if (data.statusCode == 200) {
							// console.log(data);
							let list = this.setTime(data.data.list);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.last_id = list[list.length - 1].id;
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				})
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach((e) => {
					newItems.push({
						cityCultureName: e.cityCultureName,
						city: "杭州",
						id: e.id,
						// time: "2020年"+e.time,
						time: e.time,
						describe: e.describe,
						images: e.images[0]
					});
				});
				return newItems;
			}
		},
	}
</script>

<style lang="stylus" scoped>

	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 0upx;
		bottom: 0upx;
		width: 100%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: #FFFFFF;
		font-weight bold;
		z-index: 11;
		background-color: rgba(#999999, 0.5);
		padding: 20rpx 0 10rpx 20rpx;
		height: 84rpx;
		letter-spacing: 10rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list::before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-cell-hover {
		background-color: #eee;
	}

	.uni-list-cell::after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list .uni-list-cell:last-child::after {
		height: 0upx;
	}

	/* 图文列表 */
	.uni-media-list {
		padding: 22upx 30upx;
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: row;
	}

	.uni-navigate-right.uni-media-list {
		padding-right: 74upx;
	}

	.uni-pull-right {
		flex-direction: row-reverse;
	}

	.uni-pull-right>.uni-media-list-logo {
		margin-right: 0upx;
		margin-left: 20upx;
	}

	.uni-media-list-logo image {
		height: 100%;
		width: 100%;
	}


	.uni-media-list-text-bottom {
		width: 100%;
		line-height: 30upx;
		font-size: 26upx;
		color: #8f8f94;
	}

	.uni-media-list-logo {
		width: 180upx;
		height: 140upx;
		margin-right: 20upx;
	}

	.uni-media-list-body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
		height: auto;
	}

	.uni-media-list-text-top {
		width: 100%;
		line-height: 36upx;
		font-size: 30upx;
		height: 74upx;
		overflow: hidden;

	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
