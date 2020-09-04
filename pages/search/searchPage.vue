<template>
	<view class="">
		<zy-search :is-focus="false"  :show-want="false" :showHis="false" :valueText="data"
		  @getSearchText="data"></zy-search>
		<uni-card class="card" @click="clickCard" isShadow>
			<image class="content-img" src="../../static/image/hangzhou.jpg" mode="widthFix"></image>
			<view class="content-text">
				<view class="title">
					{{data}}
				</view>
			</view>
		</uni-card>
	</view>
</template>
<script>
	import zySearch from './components/Search.vue'
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniCard,
			zySearch,
			uniNavBar
		},
		data() {
			return {
				data: ''
			}
		},
		onLoad: function(option) {
			this.data = option.data;
		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	.card{
		
	}
	.content-img {
		width: 200rpx;
	}
</style>
