<template>
	<view class="comment">
		<view class="comment-left">
			<view class="usericon">
				<image :src="comment.user.icon" class="icon">
			</view>
		</view>
		<view class="comment-right">
			<view class="user">
				<view class="username">
					{{comment.user.name}}
					<view class="time">
						{{comment.time}}
					</view>
				</view>
			</view>
			<view class="context">
				{{comment.context}}
			</view>
			<view class="del_btn" @click="deleteComment" v-show="currentUserId === comment.user.id">
				删除
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"Comment",
		props:{
			comment:Object,
			currentUserId:Number
		},
		methods:{
			deleteComment(){
				this.$emit('deleteComment',this.comment.id)
			}
		}
	}
</script>

<style>
	.comment-right {
		width: 100%;
		margin-left: 15rpx;
		border-bottom: 1px solid #E5E5E5;
		padding-bottom: 20rpx;
	}
	.comment{
		display: flex;
	}
	.username{
		font-weight: bold;
		font-size: 16px;
	}
	.context{
		margin-top: 10rpx;
	}
	.usericon .icon{
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}
	.time {
		font-weight: normal;
		font-size: 12px;
		color: #B5B5B5;
		margin-top: 10rpx;
	}
	.del_btn {
		color: #007AFF;
	}
</style>
