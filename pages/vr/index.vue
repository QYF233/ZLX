<template>
	<view class="container">
		<hm-news-card :options="options"></hm-news-card>
		<hm-news-card :options="options"></hm-news-card>
		<hm-news-card :options="options"></hm-news-card>
	</view>
</template>
<script>
	import HmNewsCard from '@/components/hm-news-card/index.vue'
	export default {
		name: "vr",
		components: {
			HmNewsCard
		},
		props: {

		},
		data() {
			return {
				options: {
					img: '/static/image/hangzhou.jpg',
					title: '杭州',
					author: '作者',
					date: '16 MAY 2016',
					summary: '杭州介绍杭州介绍杭州介绍杭州介绍',
					comments: "14 评论",
					likes: "254 喜欢",
					url: '',
					showComments: true,
					showLikes: true
				}
			}
		},
		methods: {
			onClick: function(e) {
				console.log('onClick');
			},
			showVR(){
				console.log("clisk");
				/* uni.navigateTo({
					url:'../vr'
				}) */
			}
		}
	}
</script>
<style>
</style>
