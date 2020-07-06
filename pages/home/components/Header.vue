<template>
	<view class="header">
		<view class="cu-bar search">
			<view class="search-form round" @tap="gotoLunBo">
				<text class="cuIcon-search"></text>
				<text>搜城市/酒店/景点/美食</text>
			</view>
			<view class="action">
				<view class="iconfont add">&#xe6cd;</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeHeader',
		data() {
			return {
				InputBottom: 0
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			gotoLunBo() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			}
		}
	}
</script>

<style>
	.add {
		color: #fff;
	}
</style>
