<template>
	<view class="imagecontent">

		<movable-area scale-area class="movable-area">
			<movable-view class="movable-view" direction="all" scale="true" scale-min="1" scale-max="4" :scale-value="scale"
			 @dblclick="dblclick">
				<image class="lookimg" src="../../static/image/ditu_zj.png" mode="widthFix"></image>
				<!-- <canvas style="width: 500px; height: 500px;" canvas-id="pointCanvas" id="pointCanvas"></canvas> -->

				<view class="" v-for="(item,index) in locale" :key='index'>
					<span class="city" id="shaoxing" @click="gotoDetail(item.url)" :style="'top:'+item.top+'px;left:'+item.left+'px;'">
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
				locale: [{
					top: 150,
					left: 170,
					name: "杭州",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 160,
					left: 140,
					name: "西湖区",
					url: "../search/searchDetail",
					flag: true
				}, {
					top: 160,
					left: 180,
					name: "萧山",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 180,
					left: 200,
					name: "柯桥",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 190,
					left: 210,
					name: "越城",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 215,
					left: 205,
					name: "嵊州",
					url: "../search/searchDetail",
					flag: true
				}, {
					top: 225,
					left: 230,
					name: "新昌",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 250,
					left: 235,
					name: "天台",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 270,
					left: 245,
					name: "临海",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 290,
					left: 260,
					name: "椒江",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 173,
					left: 250,
					name: "余姚",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 185,
					left: 280,
					name: "宁波",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 155,
					left: 255,
					name: "慈溪",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 288,
					left: 210,
					name: "仙居",
					url: "../search/searchDetail",
					flag: false
				}, {
					top: 283,
					left: 240,
					name: "黄岩",
					url: "../search/searchDetail",
					flag: false
				}]
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
					ctx.arc(lo.x, lo.y, 2, 0, 2 * Math.PI);
					ctx.fillText(lo.name, lo.x + 4, lo.y + 2);
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
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
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
