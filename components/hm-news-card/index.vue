<template>
	<div class="hm-news-card" @tap="showVR">
		<div class="container">
			<div class="box">
				<img class="img" :src="options.img" />
				<span class="title">{{ options.vrName }}</span>
				<span class="summary">{{ options.content }}</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HmNewsCard',
		props: {
			dataId: {
				type: String,
				default: 'hm-news-card'
			},
			options: {
				type: Object,
				default: function() {
					return {};
				}
			}
		},
		data() {
			return {};
		},
		methods: {
			showVR() {
				console.log("this.options.url"+this.options.url);
				uni.navigateTo({
					url: "vr?url="+this.options.url,
				})
			}
		}
	};
</script>
<style>
	@import './index.response.css';
</style>
