<template>
	<view class="imagecontent">

		<movable-area scale-area class="movable-area">
			<movable-view class="movable-view" direction="all" scale="true" scale-min="1" scale-max="4" :scale-value="scale"
			 @dblclick="dblclick">
				<image class="lookimg" src="../../static/image/ditu_zj.png" mode="widthFix"></image>
				<canvas style="width: 500px; height: 500px;" canvas-id="pointCanvas" id="pointCanvas"></canvas>

				<view class="" v-for="(item,index) in locale" :key = 'index'>
					<span class="city" id="shaoxing" @click="gotoDetail" :style="'top:'+item.x+'px;left:'+item.y+'px;'">
						<view class="circle"></view>
						<view class="cityName">{{item.name}}</view>
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
					x: 180,
					y: 180,
					name: "杭州"
				}, {
					x: 90,
					y: 200,
					name: "绍兴"
				}, {
					x: 90,
					y: 300,
					name: "温州"
				}]
			};
		},
		onLoad() {},
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
			gotoDetail() {
				uni.navigateTo({
					url: "../search/searchDetail"
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
