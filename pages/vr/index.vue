<template>
	<view class="container">
		<li v-for="(item,index) in options">
			<hm-news-card :options="item"></hm-news-card>
		 </li>
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
				options: [{
					img: '/static/image/hangzhou.jpg',
					title: '杭州',
					summary: '杭州介绍本地全景图杭州介绍本地全景图杭州介绍本地全景图杭州介绍本地全景图杭州介绍本地全景图杭州介绍本地全景图杭州介绍本地全景图',
					url: '../../hybrid/html/index.html',
					showComments: true,
					showLikes: true
				},{
					img: 'http://f.expoon.com/sub/user/logo/10/365788_364x216_2.jpg',
					title: '背景大学',
					summary: '网上全景图网上全景图网上全景图网上全景图网上全景图网上全景图网上全景图',
					url: 'http://www.expoon.com/6610/',
					showComments: true,
					showLikes: true
				},{
					img: 'http://f.expoon.com/sub/user/logo/88/972209_364x216_2.jpg',
					title: '上海',
					summary: '上海上海上海上海上海上海上海上海上海',
					url: 'http://www.expoon.com/19588/',
					showComments: true,
					showLikes: true
				}]
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
