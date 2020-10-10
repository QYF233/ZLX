<template>
	<view class="imagecontent">

		<movable-area scale-area class="movable-area">
			<movable-view class="movable-view" direction="all" scale="true" scale-min="1" scale-max="4" :scale-value="scale"
			 @dblclick="dblclick">
				<image class="lookimg" src="../../static/image/ditu_zj8.png" mode="widthFix"></image>
				<!-- <canvas style="width: 500px; height: 500px;" canvas-id="pointCanvas" id="pointCanvas"></canvas> -->

				<view class="" v-for="(item,index) in locale" :key='index'>
					<span class="city" id="shaoxing" @click="gotoDetail(item.url)" :style="'top:'+item.top+'%;left:'+item.left+'%;'">
						<view class="" v-if="item.flag">
							<view class="cityName">{{item.name}}</view>
							<view class="circle"></view>
						</view>
						<view class="" v-else>
							<view class="circle"></view>
							<view class="cityName">{{item.name}}</view>
						</view>
					</span>
				</view>
			</movable-view>
		</movable-area>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				scale: 1,
				ShopName: "123",
				locale: [
					/* 浙东唐诗之路 */
					{
						top: 31.5,
						left: 45.2,
						name: "杭州",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 33,
						left: 36,
						name: "西湖区",
						url: "../search/searchDetail",
						flag: true
					}, {
						top: 33.5,
						left: 47,
						name: "萧山",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 35,
						left: 55,
						name: "柯桥",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 37,
						left: 56,
						name: "越城",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 41,
						left: 55,
						name: "嵊州",
						url: "../search/searchDetail",
						flag: true
					}, {
						top: 43.5,
						left: 63,
						name: "新昌",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 48,
						left: 64,
						name: "天台",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 51.5,
						left: 66,
						name: "临海",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 53,
						left: 75.5,
						name: "椒江",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 35.3,
						left: 69.5,
						name: "余姚",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 38,
						left: 77.5,
						name: "宁波",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 32.2,
						left: 70,
						name: "慈溪",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 53.5,
						left: 58,
						name: "仙居",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 55,
						left: 72,
						name: "黄岩",
						url: "../search/searchDetail",
						flag: false
					},
					/* 钱塘江唐诗之路 */
					{
						top: 36,
						left: 37,
						name: "富阳",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 39,
						left: 33,
						name: "桐庐",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 42.5,
						left: 30,
						name: "建德",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 42.5,
						left: 20,
						name: "淳安",
						url: "../search/searchDetail",
						flag: false
					},
					{
						top: 50.5,
						left: 36,
						name: "金华",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 47,
						left: 35,
						name: "兰溪",
						url: "../search/searchDetail",
						flag: false
					}, {
						top: 51.5,
						left: 20,
						name: "衢州",
						url: "../search/searchDetail",
						flag: false
					},
					/* 瓯江山水诗路 */
					{
						top: 58,
						left: 25,
						name: "遂昌",
						url: "../search/searchDetail",
						flag: false
					},
					{
						top: 61,
						left: 29,
						name: "松阳",
						url: "../search/searchDetail",
						flag: false
					},
					{
						top: 60,
						left: 34,
						name: "莲都",
						url: "../search/searchDetail",
						flag: false
					}
				]
			};
		},
		onLoad() {

		},
		onReady: function(e) {
			this.createCanvasContext();
		},
		methods: {
			dblclick() {
				if (this.scale == 10) {
					this.scale = 1;
				} else {
					this.scale = 10;
				}
			},
			createCanvasContext() {
				var ctx = uni.createCanvasContext('pointCanvas');
				ctx.setStrokeStyle("#aa5500")
				ctx.setLineWidth(1)
				ctx.font = "8px sans-serif"

				for (var i = 0; i < this.locale.length; i++) {
					/* 开始画点 */
					var lo = this.locale[i];
					ctx.beginPath();
					ctx.arc(lo.left, lo.top, 2, 0, 2 * Math.PI);
					ctx.fillText(lo.name, lo.left + 4, lo.top + 2);
					ctx.closePath();
					/* 结束画点 */
					ctx.stroke()
				}

				// ctx.draw()
			},
			gotoDetail(url) {
				uni.navigateTo({
					url: url
				})
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.movable-view {
		position relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1300rpx;
		width: 750rpx;
		text-align: center;
	}

	.movable-area {
		height: 100%;
		width: 100%;
		position: fixed;
		overflow: hidden;
	}

	.movable-view image {
		width: 100%;
	}

	.lookimg {
		display: block;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}

	.imagecontent {
		width: 100%;
		height: 100%;
		background: rgba(240, 235, 229, 1);
		top: 0;
		position: fixed;
	}

	.city {
		position: absolute;
		text-decoration: none;
		color #000000;
		font-size 8px;
	}

	.circle {
		height 5px;
		width 5px;
		line-height 5px;
		border-radius 50%;
		border: 1px solid #aa5500;
		display inline-block;
		margin-right 2px;
	}

	.cityName {
		display inline-block;
		margin-right 2px;
	}

	// #hangzhou {
	// 	position: absolute;
	// 	top 200px;
	// 	left 200px;

	// }

	// #shaoxing {
	// 	position: absolute;
	// 	top 150px;
	// 	left 200px;
	// }
</style>
