<template>
	<view>
		<!-- <cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block><block slot="content">聊天</block></cu-custom> -->
		<view class="cu-chat">
			<view v-for="(item,index) in dataList" :key="index" v-if="item.foodId==foodId">
				<view class="cu-item self" v-if="item.self==0">
					<view class="main">
						<view class="content bg-green shadow">
							<text>{{item.comment}}</text>
						</view>
					</view>
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
					<view class="date">{{item.time}}</view>
				</view>
				<view class="cu-item" v-else>
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
					<view class="main">
						<view class="content shadow">
							<text>{{item.comment}}</text>
						</view>
					</view>
					<view class="date">{{item.time}}</view>
				</view>
			</view>
			<!-- 
				<view class="none" v-if="!this.commentNum">
					没有任何评论
				</view> 
			-->
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<!-- <view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view> -->
			<input class="solid-bottom inputComment" :value="inputValue" :adjust-position="false" :focus="false" maxlength="300"
			 cursor-spacing="10" @focus="InputFocus" @blur="InputBlur"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow" @click="sendComment">发送</button>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			foodId: "",
			inputValue: ""
		},
		data() {
			return {
				InputBottom: 0,
				dataList: [{
						foodId: 1,
						self: 0,
						comment: "这个我吃过，炒鸡好吃啊！",
						time: "2020年11月12日 12:30"
					},
					{
						foodId: 1,
						self: 1,
						comment: "好吃好吃",
						time: "2020年11月11日 14:00"
					},
					{
						foodId: 1,
						self: 1,
						comment: "不错不错",
						time: "2020年11月11日 14:00"
					},
					{
						foodId: 2,
						self: 1,
						comment: "这个味道也还行",
						time: "2020年11月12日 12:30"
					},
					{
						foodId: 2,
						self: 0,
						comment: "太棒了！",
						time: "2020年11月11日 14:00"
					},
					{
						foodId: 2,
						self: 1,
						comment: "不错不错",
						time: "2020年11月11日 14:00"
					}
				],
				pageHeight: ""
			};
		},
		onLoad(option) {
			/* for (var i = 0; i < this.dataList.length; i++) {
				this.commentNum = false;
				this.list.push(this.dataList[i])
			}
			console.log(this.commentNum); */
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0;
				this.inputValue = e.detail.value;
			},
			sendComment(e) {
				console.log('发送评论:' + this.inputValue);
				this.dataList.push({
					foodId: this.foodId,
					self: 0,
					comment: this.inputValue,
					time: "2020年9月11日 19:50"
				})
				this.inputValue = ''
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 99999,
						duration: 200
					});
				}, 50);
			},
			scrollToBottom() {
				let that = this;
				let query = uni.createSelectorQuery();
				query.selectAll('.m-item').boundingClientRect();
				query.select('#scrollview').boundingClientRect();
				query.exec((res) => {
					that.style.mitemHeight = 0;
					res[0].forEach((rect) => that.style.mitemHeight = that.style.mitemHeight + rect.height + 40) //获取所有内部子元素的高度
					if (that.style.mitemHeight > (that.style.contentViewHeight - 100)) { //判断子元素高度是否大于显示高度
						that.scrollTop = that.style.mitemHeight - that.style.contentViewHeight //用子元素的高度减去显示的高度就获益获得序言滚动的高度
					}
				})
			}
		}
	}
</script>

<style>
	page {
		padding-bottom: 100upx;
	}
	.cu-chat{
		margin-bottom: 100rpx;
	}
</style>
