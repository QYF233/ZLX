<template>
	<view>
		 <web-view :webview-styles="webviewStyles" :src="url"></web-view>
		 <!-- <web-view :webview-styles="webviewStyles" src="/hybrid/html/ThreeJSPanorama/index.html"></web-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:"",
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		onLoad: function(option) {
			console.log(option.url);
			this.url = option.url;
		}
	}
</script>

<style lang="stylus" scoped>

</style>
