<template>
	<view class="content">
		<view class="title">
			<view class="font">
				景点查询
			</view>
		</view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="option-50">
				<view class="left">类别</view>
				<view class="right">
					<picker @change="bindTypesChange" :value="index_types" :range="types" class="input">
						<view class="uni-input">{{types[index_types]}}</view>
					</picker>
				</view>
			</view>
			<view class="option-50">
				<view class="left">人数</view>
				<view class="right">
					<picker @change="bindNumberChange" :value="index_number" :range="number" class="input">
						<view class="uni-input">{{number[index_number]}}</view>
					</picker>
				</view>
			</view>
			<view class="option-50">
				<view class="left">偏好</view>
				<view class="right">
					<picker @change="bindPreferencesChange" :value="index_preferences" :range="preferences" class="input">
						<view class="uni-input">{{preferences[index_preferences]}}</view>
					</picker>
				</view>
			</view>
			<view class="option-50">
				<view class="left">范围</view>
				<view class="right">
					<input type="text" class="special_input">
				</view>
				<!-- <view class="right">
					<picker mode="multiSelector" bindchange="bindMultiPickerChange" bindcolumnchange="bindMultiPickerColumnChange" value="{{multiIndex}}" range="{{multiArray}}">
					　　<view class="uni-input">{{multiArray[0][multiIndex[0]]}} > {{multiArray[1][multiIndex[1]]}}</view>
					</picker>
				</view> -->
			</view>
			<view class="option-100">
				<view class="left">开始时间</view>
				<view class="right">
					<view class="picker_date">
						<picker mode="date" :value="start_date" :start="startDate" :end="endDate" @change="bindStartDateChange">
							<view class="uni-input">{{start_date}}</view>
						</picker>
					</view>
					<view class="picker_time">
						<picker mode="time" :value="start_time" @change="bindStartTimeChange">
							<view class="uni-input">{{start_time}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="option-100">
				<view class="left">结束时间</view>
				<view class="right">
					<view class="picker_date">
						<picker mode="date" :value="end_date" :start="startDate" :end="endDate" @change="bindEndDateChange">
							<view class="uni-input">{{end_date}}</view>
						</picker>
					</view>
					<view class="picker_time">
						<picker mode="time" :value="end_time" @change="bindEndTimeChange">
							<view class="uni-input">{{end_time}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="option-100">
				<view class="button button-upperPart">
					<button style="background: #F37B1D; color: #FFFFFF;" form-type="submit" size="default">&nbsp;开始查询&nbsp;</button>
				</view>
				<view class="button">
					<button style="background: #EFEFEF; color: #AAAAAA;" form-type="reset" size="default">&nbsp;清空表单&nbsp;</button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
export default{
	name: 'TouristSearch',
	data() {
		const currentDate = this.getDate({
			format: true
		})
		const currentTime = this.getTime();
		return {
			types: ['亲子游', '蜜月游', '团建游', '毕业游'],
			number: ['1人', '2-4人', '5-10人', '11-20人', '21-30人', '30-50人', '50人以上'],
			preferences: ['娱乐', '美食', '参观'],
			index_types: 0,
			index_number: 0,
			index_preferences: 0,
			start_date: currentDate,
			start_time: currentTime,
			end_date: currentDate,
			end_time: currentTime
		}
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	methods: {
		bindTypesChange: function(e) {
			this.index_types = e.target.value
		},
		bindNumberChange: function(e) {
			this.index_number = e.target.value
		},
		bindPreferencesChange: function(e) {
			this.index_preferences = e.target.value
		},
		bindStartDateChange: function(e) {
			this.start_date = e.target.value
		},
		bindStartTimeChange: function(e) {
			this.start_time = e.target.value
		},
		bindEndDateChange: function(e) {
			this.end_date = e.target.value
		},
		bindEndTimeChange: function(e) {
			this.end_time = e.target.value
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		getTime(){
			const date = new Date();
			let hour = date.getHours();
			let mninute = date.getMinutes();
			hour = hour > 9 ? hour : '0' + hour;
			mninute = mninute > 9 ? mninute : '0' + mninute;
			return `${hour}:${mninute}`;
		},
		formSubmit: function(e) {
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			var formdata = e.detail.value
			uni.showModal({
				content: '表单数据内容：' + JSON.stringify(formdata),
				showCancel: false
			});
		},
		formReset: function(e) {
			this.index_types = 0;
			this.index_number = 0;
			this.index_preferences = 0;
			this.start_date = this.end_date = this.getDate();
			this.start_time = this.end_time = this.getTime();
		}
	}
}
</script>

<style lang="stylus" scoped>
	.content
		margin 20rpx;
		padding 10rpx;
		background-color #FFFFFF;
		border-radius 10rpx;
		overflow auto;
		.title
			margin 0 20rpx 20rpx 20rpx;
			padding 10rpx;
			border-bottom 2rpx solid #F37B1D;
			.font
				color #555555;
				font-size 32rpx;
		.option-50
			float left;
			width 50%
			margin 10rpx 0;
			.left
				float left;
				display block;
				width 35%;
				height 60rpx;
				line-height 60rpx;
				text-align center;
			.right
				.input
					float left;
					border 2rpx solid #F37B1D;
					border-radius 12rpx;
					background-color #FFFFFF
					width 60%;
					height 56rpx;
					line-height 56rpx;
					text-align center;
				.special_input
					float left;
					border 2rpx solid #F37B1D;
					border-radius 12rpx;
					background-color #FFFFFF
					width 60%+1rpx;
					height 58rpx;
					line-height 58rpx;
					text-align center;
		.option-100
			float left;
			width 100%
			margin 10rpx 0;
			.left
				float left;
				display block;
				width 35%;
				height 60rpx;
				line-height 60rpx;
				text-align center;
			.right
				float left;
				border 2rpx solid #F37B1D;
				border-radius 12rpx;
				padding 0 2rpx;
				background-color #FFFFFF
				width 62%;
				height 56rpx;
				line-height 56rpx;
				text-align center;
				.picker_date
					float left;
					width 60%
				.picker_time
					float left;
					width 40%;
			.button
				margin 10rpx 20rpx;
			.button-upperPart
				margin-bottom 15rpx;
	// .content
	// 	margin 4% 2% 4% 2%;
	// 	padding 2% 1% 2% 1%
	// 	background-color #FFFFFF;
	// 	border-radius 20rpx;
	// 	overflow auto;
	// 	.title
	// 		margin 1% 1% 2% 1%;
	// 		padding 0 1% 1% 1%;
	// 		border-bottom 2rpx solid #F37B1D;
	// 		.font
	// 			color #555555;
	// 			font-size 32rpx;
	// 	.option-50
	// 		float left;
	// 		width 50%
	// 		margin 1% 0 1% 0;
	// 		.left
	// 			float left;
	// 			display block;
	// 			width 35%;
	// 			height 50rpx;
	// 			line-height 50rpx;
	// 			text-align center;
	// 		.right
	// 			.input
	// 				float left;
	// 				border 2rpx solid #F37B1D;
	// 				border-radius 12rpx;
	// 				background-color #FFFFFF
	// 				width 60%;
	// 				height 46rpx;
	// 				line-height 46rpx;
	// 				text-align center;
	// 	.option-100
	// 		float left;
	// 		width 100%
	// 		margin 1% 0 1% 0;
	// 		.left
	// 			float left;
	// 			display block;
	// 			width 35%;
	// 			height 50rpx;
	// 			line-height 50rpx;
	// 			text-align center;
	// 		.right
	// 			float left;
	// 			border 2rpx solid #F37B1D;
	// 			border-radius 12rpx;
	// 			padding 0 2rpx;
	// 			background-color #FFFFFF
	// 			width 62%;
	// 			height 46rpx;
	// 			line-height 46rpx;
	// 			text-align center;
	// 			.picker_date
	// 				float left;
	// 				width 60%
	// 			.picker_time
	// 				float left;
	// 				width 40%;
	// 		.button
	// 			// float right;
	// 			margin-right 2%;
	// 		.button-upperPart
	// 			margin-bottom 2%;
</style>
