<template>
	<div class="hm-news-card" @tap="showVR">
		<div class="container">
			<div class="box">
				<img class="img" :src="options.img" />
				<span class="title">{{ options.title }}</span>
				<span class="summary">{{ options.summary }}</span>
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
				console.log("clihihiohhooy");
				uni.navigateTo({
					url: "vr",
				})
			}
		}
	};
</script>
<style>
	@import './index.response.css';
</style>
