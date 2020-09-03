<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view v-for="(item,index) in options" :key="index">
			<hm-news-card :options="item"></hm-news-card>
		</view>
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
				options: []	
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				const res1 = await this.$myRequest({
					url: '/vr/getlist'
				})
				for (var i = 0; i < res1.data.list.length; i++) {
					console.log(res1.data);
					this.options.push(res1.data.list[i])
				}
			},
			onClick: function(e) {
				console.log('onClick');
			}
		}
	}
</script>
<style lang="stylus" scoped>
</style>
