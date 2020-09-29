<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.images" style="border-radius: 5px;"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top text-bold">
							{{value.name}}
						</view>
						<view class="uni-media-list-text-bottom">
							<view class="start">
								<uni-rate :value="4" :size="15" :is-fill="false" />
							</view>
							<text>{{value.city}}</text>
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
				listData: [],
			}
		},
		onLoad() {
			this.getData();
			console.log(this.listData);
		},
		onPullDownRefresh() {

		},
		onReachBottom() {},
		methods: {
			getData() {
				this.listData = [{
						images: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598267868393&di=8bbaa6855edc4fa3a0273ba4795f448a&imgtype=0&src=http%3A%2F%2Fp.yhres.com%2Fhost%2F2017%2F04%2F06%2F1491492346147390.jpg-q75hm",
						name: "宁波汤圆",
						city: "宁波",
						time: ""
					},
					{
						images: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598267868393&di=8bbaa6855edc4fa3a0273ba4795f448a&imgtype=0&src=http%3A%2F%2Fp.yhres.com%2Fhost%2F2017%2F04%2F06%2F1491492346147390.jpg-q75hm",
						name: "片儿川",
						city: "杭州",
						time: ""
					}
				]
			}
		},
	}
</script>

<style lang="stylus" scoped>
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
		line-height: 74upx;
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
