<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="img-box">
			<image class="poem" src="../../static/image/zhejiang.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: ""

			}
		},
		methods: {
			getHeight() {
				uni.getSystemInfo({
					success: function(res) {
						console.log(res.screenHeight);
					}
				});
			}

		}

	}
</script>

<style lang="stylus" scoped>
	// .img-box{
	// 	height: 100%;
	// 	width: 100%;
	// 	background-image: url('../../static/image/zhejiang.png');
	// 	background-repeat:no-repeat;
	// 	background-size: cover;
	// }
	.poem {
		width 100%;
	}
</style>
