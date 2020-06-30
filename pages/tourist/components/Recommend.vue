<template>
	<view class="content">
		<view class="title">
			<view class="font">
				景点推荐
			</view>
		</view>
		<view class="list">
			<view class="left">
				<view class="img-box">
					<image src="../../../static/image/logo.png" mode="aspectFill" class="img"></image>
				</view>
			</view>
			<view class="right">
				<view class="way">
					西湖-雷峰塔-武林广场
				</view>
				<view class="explain">
					西湖美景，雷锋高耸，武林繁闹，杭职书香，弗雷德美食店铺林立。
				</view>
			</view>
			<view class="mark">
				亲子游
			</view>
		</view>
		<view class="list">
			<view class="left">
				<view class="img-box">
					<image src="../../../static/image/logo.png" mode="aspectFill" class="img"></image>
				</view>
			</view>
			<view class="right">
				<view class="way">
					西湖-雷峰塔-武林广场-杭州职业技术学院-弗雷德广场
				</view>
				<view class="explain">
					西湖美景，雷锋高耸，武林繁闹，杭职书香，弗雷德美食店铺林立。
				</view>
			</view>
			<view class="mark">
				亲子游
			</view>
		</view>
		<view class="list">
			<view class="left">
				<view class="img-box">
					<image src="../../../static/image/logo.png" mode="aspectFill" class="img"></image>
				</view>
			</view>
			<view class="right">
				<view class="way">
					西湖-雷峰塔-武林广场-杭州职业技术学院-弗雷德广场-天街-西湖文化中心
				</view>
				<view class="explain">
					西湖美景，雷锋高耸，武林繁闹，杭职书香，弗雷德美食店铺林立。
				</view>
			</view>
			<view class="mark">
				亲子游
			</view>
		</view>
	</view>
</template>

<script>
export default{
	name: 'TouristRecommend'
}
</script>

<style lang="stylus" scoped>
	.content
		margin 4% 2% 4% 2%;
		padding 2% 1% 2% 1%
		background-color #F8F8F8;
		border-radius 20rpx;
		overflow auto;
		.title
			margin 1% 1% 2% 1%;
			padding 0 1% 1% 1%;
			border-bottom 2rpx solid #C0C0C0;
			.font
				color #555555;
				font-size 32rpx;
		.list
			width 98%;
			margin 2% 1%;
			border 2rpx solid #C0C0C0;
			border-radius 12rpx;
			overflow auto;
			height 0;
			position relative;
			padding-bottom 20%;
			.left
				float left;
				margin 0 1%;
				width 20%;
				height 100%;
				position absolute;
				.img-box
					width 100%;
					height 100%;
					.img
						margin 5%;
						width 90%;
						height 90%;
			.right
				float left;
				width 78%;
				margin-left 22%;
				height 100%;
				position absolute;
				.way
					position absolute;
					color #5F5F5F;
					margin 2% 0;
					width 75%;
					overflow hidden;
					word-break break-all;  /* break-all(允许在单词内换行。) */
					text-overflow ellipsis;  /* 超出部分省略号 */
					display -webkit-box; /** 对象作为伸缩盒子模型显示 **/
					-webkit-box-orient vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
					-webkit-line-clamp 2; /** 显示的行数 **/
					top 2%;
				.explain
					position absolute;
					color #66AFE9;
					width 100%;
					overflow hidden;
					word-break break-all;  /* break-all(允许在单词内换行。) */
					text-overflow ellipsis;  /* 超出部分省略号 */
					display -webkit-box; /** 对象作为伸缩盒子模型显示 **/
					-webkit-box-orient vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
					-webkit-line-clamp 1; /** 显示的行数 **/
					margin-bottom 2%;
					bottom 2%;
					
			.mark
				width 15%;
				position absolute;
				padding 1% 1%;
				color #FFFFFF;
				background-color #ff9575;
				text-align center;
				top 0;
				right 0;
</style>
