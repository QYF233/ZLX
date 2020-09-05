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
				<view class="left">其他</view>
				<view class="right">
					<input type="text" class="special_input">
				</view>
			</view>
			<view class="option-100">
				<view class="left">范围</view>
				<picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" @cancel="bindMultiPickerCancel" :value="multiIndex" :range="multiArray">
					<view class="right">
						{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}
					</view>
				</picker>
			</view>
			<view class="option-100">
				<view class="left">开始时间</view>
				<view class="right">
					<biaofun-datetime-picker class="picker_datetime" :defaultValue="startDatetime"  :start="start_startDatetime" @change="startDatetimeChange"></biaofun-datetime-picker>
					<!-- <view class="picker_date">
						<picker mode="date" :value="start_date" :start="startDate" :end="endDate" @change="bindStartDateChange">
							<view class="uni-input">{{start_date}}</view>
						</picker>
					</view>
					<view class="picker_time">
						<picker mode="time" :value="start_time" @change="bindStartTimeChange">
							<view class="uni-input">{{start_time}}</view>
						</picker>
					</view> -->
				</view>
			</view>
			<view class="option-100">
				<view class="left">结束时间</view>
				<view class="right">
					<biaofun-datetime-picker class="picker_datetime" :defaultValue="endDatetime" :start="start_endDatetime" @change="endDatetimeChange"></biaofun-datetime-picker>
					<!-- <view class="picker_date">
						<picker mode="date" :value="end_date" :start="startDate" :end="endDate" @change="bindEndDateChange">
							<view class="uni-input">{{end_date}}</view>
						</picker>
					</view>
					<view class="picker_time">
						<picker mode="time" :value="end_time" @change="bindEndTimeChange">
							<view class="uni-input">{{end_time}}</view>
						</picker>
					</view> -->
				</view>
			</view>
			<view class="option-50">
				<view class="button-box">
					<button class="button-reset" form-type="reset">&nbsp;清空表单&nbsp;</button>
				</view>
			</view>
			<view class="option-50">
				<view class="button-box">
					<button class="button-search" form-type="submit">&nbsp;开始查询&nbsp;</button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	import biaofunDatetimePicker from '@/components/biaofun-datetime-picker/biaofun-datetime-picker.vue';
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	export default {
		name: 'TouristSearch',
		data() {
			const currentDate = this.getDate({
				format: true
			})
			const currentTime = this.getTime();
			const currentDatetime = this.getDatetime();
			return {
				types: ['亲子游', '蜜月游', '团建游', '毕业游'],
				number: ['1人', '2-4人', '5-10人', '11-20人', '21-30人', '30-50人', '50人以上'],
				preferences: ['娱乐', '美食', '参观'],
				index_types: 0,
				index_number: 0,
				index_preferences: 0,
				multiArray: [
					['杭州市', '宁波市', '温州市', '嘉兴市', '湖州市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
					['杭州市', '上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '富阳区', '桐庐县', '淳安县', '建德市', '临安市']
				],
				city: [
					['杭州市', '上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '富阳区', '桐庐县', '淳安县', '建德市', '临安市'],
					['宁波市', '海曙区', '江东区', '江北区', '北仑区', '镇海区', '鄞州区', '象山县', '宁海县', '余姚市', '慈溪市', '奉化市'],
					['温州市', '鹿城区', '龙湾区', '瓯海区', '洞头区', '永嘉县', '平阳县', '苍南县', '文成县', '泰顺县', '瑞安市', '乐清市'],
					['嘉兴市', '南湖区', '秀洲区', '嘉善县', '海盐县', '海宁市', '平湖市', '桐乡市'],
					['湖州市', '吴兴区', '南浔区', '德清县', '长兴县', '安吉县'],
					['绍兴市', '越城区', '柯桥区', '上虞区', '新昌县', '诸暨市', '嵊州市'],
					['金华市', '婺城区', '金东区', '武义县', '浦江县', '磐安县', '兰溪市', '义乌市', '东阳市', '永康市'],
					['衢州市', '柯城区', '衢江区', '常山县', '开化县', '龙游县', '江山市'],
					['舟山市', '定海区', '普陀区', '岱山县', '嵊泗县'],
					['台州市', '椒江区', '黄岩区', '路桥区', '玉环县', '三门县', '天台县', '仙居县', '温岭市', '临海市'],
					['丽水市', '莲都区', '青田县', '缙云县', '遂昌县', '松阳县', '云和县', '庆元县', '景宁畲族自治县', '龙泉市']
				],
				multiIndex: [0, 0],
				reMultiIndex: [0, 0],
				start_date: currentDate,
				start_time: currentTime,
				end_date: currentDate,
				end_time: currentTime,
				
				startDatetime: currentDatetime,
				endDatetime: currentDatetime,
				start_startDatetime: currentDatetime,
				start_endDatetime: currentDatetime,
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
			bindMultiPickerChange: function(e) {
				this.reMultiIndex = this.multiIndex = e.detail.value
			},
			bindMultiPickerColumnChange: function(e) {
				switch(e.detail.column){
					case 0:
						this.multiArray[1] = this.city[e.detail.value];
						this.multiIndex = [e.detail.value, 0];
						break;
					case 1:
						this.multiIndex = [this.multiIndex[0], e.detail.value];
						break;
				}
			},
			bindMultiPickerCancel: function(e) {
				this.multiArray[1] = this.city[this.reMultiIndex[0]];
				this.multiIndex = this.reMultiIndex
			},
			startDatetimeChange: function(e) {
				var temp = e.f1 + ' ' + e.hh + ':' + e.mm;
				if(temp > this.endDatetime){
					this.endDatetime = temp;
				}
			},
			endDatetimeChange: function(e) {
				var temp = e.f1 + ' ' + e.hh + ':' + e.mm;
				if(temp < this.startDatetime){
					this.startDatetime = temp;
				}
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
					year = year - 2;
				} else if (type === 'end') {
					year = year + 2;
				}
				
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			getTime() {
				const date = new Date();
				let hour = date.getHours();
				let mninute = date.getMinutes();
				hour = hour > 9 ? hour : '0' + hour;
				mninute = mninute > 9 ? mninute : '0' + mninute;
				return `${hour}:${mninute}`;
			},
			getDatetime(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let hour = date.getHours();
				let mninute = date.getMinutes();
				
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				hour = hour > 9 ? hour : '0' + hour;
				mninute = mninute > 9 ? mninute : '0' + mninute;
				
				return `${year}-${month}-${day} ${hour}:${mninute}`;
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
		margin 20rpx 20rpx 50rpx 20rpx;
		padding 10rpx;
		background-color #FFFFFF;
		border-radius 10rpx;
		overflow auto;
		box-shadow 10rpx 10rpx 25rpx #CCCCCC;
		.title
			margin 0 20rpx 20rpx 20rpx;
			padding 10rpx;
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
				width 30%;
				height 60rpx;
				line-height 60rpx;
				text-align center;
			.right
				.input
					float left;
					border 2rpx solid #F37B1D;
					border-radius 12rpx;
					background-color #FFFFFF;
					width 65%;
					height 56rpx;
					line-height 56rpx;
					text-align center;
				.special_input
					float left;
					border 2rpx solid #F37B1D;
					border-radius 12rpx;
					background-color #FFFFFF;
					width 65%+1rpx;
					height 58rpx;
					line-height 58rpx;
					text-align center;
			.button-box
				margin 10rpx 20rpx;
				.button-reset
					background #EFEFEF;
					color #AAAAAA;
					line-height 70rpx;
					font-size 30rpx;
					height 70rpx;
					box-shadow 4rpx 4rpx 10rpx #CCCCCC;
				.button-search
					background #F37B1D;
					color #FFFFFF;
					line-height 70rpx;
					font-size: 30rpx;
					height 70rpx;
					box-shadow 4rpx 4rpx 10rpx #ff6400;
		.option-100
			float left;
			width 100%;
			margin 10rpx 0;
			.left
				float left;
				display block;
				width 30%;
				height 60rpx;
				line-height 60rpx;
				text-align center;
			.right
				float left;
				border 2rpx solid #F37B1D;
				border-radius 12rpx;
				padding 0 2rpx;
				background-color #FFFFFF;
				width 67%;
				height 56rpx;
				line-height 56rpx;
				text-align center;
				// .picker_datetime
				.picker_date
					float left;
					width 60%;
				.picker_time
					float left;
					width 40%;
</style>
