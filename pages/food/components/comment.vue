<template>
	<view>
		<view class="uni-article__comment">
			<view class="uni-article__comment-box" v-for="comment in commentData" :key="comment.id">
				<view class="article-meta">
					<view class="article-header-image">
						<image class="image" :src="comment.author.portrait" mode="widthFix"></image>
					</view>
					<view class="article-header-content">
						<view class="article-header-title">
							<text>{{comment.author.name}}</text>
						</view>
						<view class="article-header-info"> {{comment.pubDate||''}}</view>
					</view>
				</view>
				<view class="uni-article__comment-centent">
					<user-reply v-if="comment.refer.length > 0" :digest="comment.refer"></user-reply>
					{{comment.content}}
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import userReply from '@/components/reply/reply.vue'
	export default {
		props:{
			commentData:{
				type:Array
			}
		},
		components: {
			userReply
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.article-meta {
		padding: 20rpx 20rpx;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-header-image {
		width: 60rpx;
		height: 60rpx;
		flex-shrink: 0;
		/* border-radius: 50%; */
		overflow: hidden;
	}

	.article-header-image .image {
		width: 100%;
		height: 100%;
	}

	.article-header-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 10px;
		font-size: 24rpx;
		line-height: 1;
		width: 100%;
		/* height: 60rpx; */
	}

	.article-header-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 26rpx;
		line-height: 2;
		color: #000;
	}

	.article-header-info {
		font-size: 24rpx;
		line-height: 1;
	}

	.article-top {
		display: flex;
		align-items: flex-end;
		font-size: 26rpx;
		line-height: 1;
		color: #999;
	}

	.article-top .image {
		width: 30rpx;
		margin-left: 5rpx;
	}

	.uni-article__comment-title {
		width: 100%;
		line-height: 3;
		font-size: 28rpx;
		color: #666;
		background: #f5f5f5;
		padding-left: 20rpx;
	}

	.uni-article__comment-centent {
		border-bottom: 1px #eee solid;
		padding: 0 20rpx;
		padding-left: 95rpx;
		padding-bottom: 20rpx;
		font-size: 14px;
		color: #333;
	}
</style>
