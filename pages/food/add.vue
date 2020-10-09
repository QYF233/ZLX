<template>
	<view class="add">
		<form @submit="send">
			<input type="text" placeholder="输入名称" name="foodName">
			<input type="text" placeholder="输入介绍" name="introduce">
			<input type="text" placeholder="输入图片地址" name="pic" maxlength="-1"/>
			<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
				<input type="text" class="hidden" name="city" placeholder="城市" :value="index<0?'':array[index].id">
				<input type="text" disabled placeholder="城市" :value="index<0?'':array[index].name">
			</picker>
			<!-- <textarea type="text" placeholder="输入详情" name="detail"/> -->
			
			<br>
			<button form-type="submit" type="primary" size="mini">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [],
				index: -1,
			}
		},
		methods:{
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			send(e) {
				uni.request({
					url:this.websiteUrl + "food/insert",
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data:e.detail.value,
					success(res) {
						uni.navigateBack({
							delta:1
						})
					}
				})
			}
		},
		onLoad() {
			uni.request({
				url:this.websiteUrl + 'city/listcity',
				success: (res) => {
					this.array = res.data
					
				}
			})
		}
	}
</script>

<style>
	input,textarea {
		border: 1px solid #d5d5d5;
		caret-color: #DC143C;
		padding: 0 20rpx;
		margin-top: 55rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		height: 70rpx;
	}
	textarea {
		height: 150rpx;
		width: 100%;
	}
	.add {
		padding: 0 40rpx;
	}
	.hidden {
		display: none;
	}
</style>
