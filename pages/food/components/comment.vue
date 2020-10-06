<template>
	<view class="content-ques">
		<!-- <five-commentlist :commentList="commentList" @clickPraise="clickPraiseSig" @clickDelete="clickDeleteSig"></five-commentlist> -->
		<!-- 
		@param: commentList展示的评论列表数据
		@method: clickPraise 点赞评论
		@method: clickDelete 删除父级评论
		@method: clickRecommentChild 点赞子评论
		@method: clickDeleteChild 删除子评论
		 -->
		<five-mul-commentlist :commentList="commentList" @clickPraise="clickPraiseComment" @clickDelete="clickDeleteComment"
		 @clickDeleteChild="clickDeleteCommentChild" @clickRecomment="clickRecomment" @clickRecommentChild="clickRecommentChild"></five-mul-commentlist>
		<view class="view-conmment-send-bottom">
			<view class=" view-comment-textarea" @click="clickComment()">
				<view class="textarea-comment">写评论…</view>
			</view>
		</view>
		<five-comment ref="detailComment" @sendComment="sendComment" :placeholder="placeholder"></five-comment>
	</view>
</template>

<script>
	/**
	 * 注：
	 * 1. 评论详情 、回复评论及回复子评论功能实际是调用接口实现，在这里只为实现效果，逻辑无参考价值
	 */
	import data from '@/common/data';
	import dateUtils from '@/common/utils/dateUtils.js';
	export default {
		data() {
			return {
				detailInfo: data.detailInfo,
				//评论组件相关
				commentList: data.commentList,
				placeholder: '请输入评论内容…',
				commentParam: {},
			};
		},
		onLoad: function(e) {
			this.getData(); //获取数据
			this.getComment(); //获取评论列表
		},
		/* onShow: function() {
			this.getData(); //获取数据
			this.getComment(); //获取评论列表
		}, */
		methods: {
			/**
			 * 获取用户信息
			 */
			getData() {
				// this.detailInfo = data.dataInfo;
			},
			/**
			 * 获取评论详情
			 */
			getComment() {
				// this.commentList = data.dataInfo
			},

			/**
			 * 回复问题
			 */
			clickComment() {
				this.commentParam = {
					COMMENT_TIME: this.getTime(),
					FIRSTNICKNAME: '网友666666',
					CHILD_ANWSER_LIST: [],
					IS_PRAISE: null,
					PRAISE_NUM: 0,
					CANDELETE: 1,
					HEADIMGURL: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1340127580,1407454083&fm=26&gp=0.jpg',
					SECONDNICKNAME: null
				};
				this.$refs.detailComment.open();
			},
			/**
			 * 详情点赞
			 * @param {Object} isPraise
			 */
			clickPraise(isPraise) {
				let praiseParam = '1';
				let praiseNum = parseInt(this.detailInfo.PRAISE_NUM);
				switch (isPraise) {
					case '0':
						praiseParam = '1';
						praiseNum++;
						break;
					case '1':
						praiseParam = '0';
						praiseNum--;
						break;
				}
				this.detailInfo.IS_PRAISE = praiseParam;
				this.detailInfo.PRAISE_NUM = praiseNum--;
			},

			/**
			 *  查看图片大图
			 * @param {Object} images
			 * @param {Object} index
			 */
			cliclImage(images, index) {
				uni.previewImage({
					urls: images,
					current: index,
					longPressActions: {
						itemColor: '#12B368',
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			/**
			 * 删除详情
			 */
			clickDeleteDetail() {
				uni.showModal({
					title: '提示',
					content: '确定要删除吗？',
					confirmColor: '#12B368',
					success: function(res) {
						/* 调用接口删除 */
					}
				});
			},
			/**
			 * 点赞多级评论
			 * @param {Object} item
			 */
			clickPraiseComment(item) {
				//只能点赞不能取消
				if (item.IS_PRAISE == '1') {
					return;
				}
				item.IS_PRAISE = '1';
				item.PRAISE_NUM++;
			},
			/**
			 * 删除多级评论
			 */
			clickDeleteComment(item) {
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '确定要删除评论吗？',
					confirmColor: '#12B368',
					success: function(res) {
						/* 调用接口删除 */
						if (res.confirm == true) {
							for (var i = 0; i < _this.commentList.length; i++) {
								console.log(_this.commentList[i]);
								if (_this.commentList[i] == item) {
									_this.commentList.splice(i, 1)
								}
							}
						}
					}
				});
			},
			/**
			 * 删除多级子评论
			 */
			clickDeleteCommentChild(item) {
				console.log("999");
				var _this = this;
				console.log(item);
				uni.showModal({
					title: '提示',
					content: '确定要删除评论吗？',
					confirmColor: '#12B368',
					success: function(res) {
						/* 调用接口删除 */
						if (res.confirm == true) {
							for (var i = 0; i < _this.commentList.length; i++) {
								for (var j = 0; j < _this.commentList[i].CHILD_ANWSER_LIST.length; j++) {
									if (_this.commentList[i].CHILD_ANWSER_LIST[j] == item) {
										_this.commentList[i].CHILD_ANWSER_LIST.splice(j, 1)
									}
								}
							}
						}
					}
				});

			},

			/**
			 * 回复 评论
			 * @param {Object} item
			 */
			clickRecomment(item) {
				console.log("回复 评论1");
				this.commentParam = {};
				console.log("回复 评论2");
				this.$refs.detailComment.open();
				console.log("回复 评论3");
				this.placeholder = '回复' + item.FIRSTNICKNAME + ':';
				console.log("回复 评论4");
			},
			/**
			 * 回复评论的评论
			 * @param {Object} item
			 */
			clickRecommentChild(item) {
				console.log("回复评论的评论");
				this.commentParam = {};
				this.$refs.detailComment.open();
				this.placeholder = '回复' + item.FIRSTNICKNAME + ':';
			},
			/**
			 * 删除单级评论
			 */
			clickDeleteSig(item) {
				console.log("shanch8");
				uni.showModal({
					title: '提示',
					content: '确定要删除评论吗？',
					confirmColor: '#12B368',
					success: function(res) {
						/* 调用接口删除 */
						console.log(this.item);
					}
				});
			},
			/**
			 * 点赞单级评论
			 */
			clickPraiseSig(item) {
				//只能点赞不能取消
				if (item.IS_PRAISE == '1') {
					return;
				}
				item.IS_PRAISE = '1';
				item.PRAISE_NUM++;
			},
			/**
			 * 发送评论
			 * @param {Object} result
			 */
			sendComment(result) {
				console.log("发送评论");
				this.commentParam.COMMENT = result;
				this.commentList.push(this.commentParam);
				// console.log(this.commentList);
			},
			getTime: function() {

				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
				return timer;
			},
			/* 删除评论调用接口 */
			async delComment(item) {
				for (var i = 0; i < this.commentList.length; i++) {
					console.log(this.commentList[i]);
					if (this.commentList[i] == item) {
						this.commentList.splice(i, 1)
					}
				}
			}
		}
	};
</script>

<style lang="scss">
	@import '@/common/css/iconfont.css';

	page,
	.content-ques {
		background-color: $view-bg-color;
	}

	.view-delete-detail {
		flex: 1;
		display: flex;
		font-size: 26rpx;
	}

	.bottom-item {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 80rpx;

		.bottom-item-image {
			font-size: 40rpx;
			color: $uni-text-color;
		}

		.bottom-item-text {
			font-size: $uni-font-size-sm;
			margin-left: 20rpx;
			color: $uni-text-color;
		}
	}

	.view-content-content {
		background-color: white;
		flex-direction: column;
		padding: 30rpx 30rpx 0 30rpx;
	}

	.view-header {
		display: flex;
		align-items: center;
		flex-direction: row;

		.image-photo {
			height: 90rpx;
			width: 90rpx;
			background-color: $view-bg-color;
			border: 1px solid #f6f6f6;
			border-radius: 45rpx;
			margin-right: 30rpx;
		}

		.header-txt {
			display: flex;
			flex-direction: column;
			color: $uni-text-color-grey;
			line-height: 1.5;
			justify-content: center;
			font-size: $uni-font-size-sm;

			.name {
				color: #004261;
				font-weight: bold;
				font-size: $uni-font-size-base;
			}
		}
	}

	.sub {
		color: $uni-text-color-grey;
		font-size: $uni-font-size-sm;
	}

	.item-desc {
		color: $uni-text-color;
		line-height: 1.6;
		font-size: $uni-font-size-base;
		margin-top: 20rpx;
	}

	.item-imgs {
		margin: 20rpx 0;
		display: flex;
		flex-direction: row;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;

		.image-imgs {
			border-radius: 10rpx;
			background-color: $view-bg-color;
			height: 220rpx;
			width: 220rpx;
			margin: 1px 4rpx;
		}
	}

	.view-conmment-send-bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: row;
		background-color: white;
		border-top: 1px solid $view-bg-color;
	}

	.view-comment-textarea {
		background-color: $uni-bg-color-grey;
		border-radius: 40rpx;
		padding: 15rpx 20rpx;
		margin: 25rpx 20rpx;
		width: 80%;
		flex: 1;
		align-items: center;
	}

	.textarea-comment {
		padding: 0;
		// width: 100%;
		height: 100%;
		font-size: $uni-font-size-base;
		// color: $uni-text-color;
		color: $uni-text-sub-color;
	}

	.icon-comment {
		font-size: 46rpx;
		color: $uni-text-color;
		margin: 0 30rpx 0 5rpx;
	}

	.view-btn-comment {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: $uni-font-size-base;
		color: white;
		height: 70rpx;
		width: 120rpx;
		border-radius: 10rpx;
		background-color: $theme-color;
		font-weight: 500;
	}

	.textarea-bottom {
		background-color: white;
		padding: 20rpx;
	}
</style>
