<template>
	<view class="post">
		<view class="top_input">
			<textarea :value="text" placeholder="这一刻的想法" class="textarea" @input="input" auto-focus="true" />
			<view class="counter">
				{{counter}}/140
			</view>
		</view>
		<view class="btns">
			<button type="warn" size="mini" class="cancel" @click="cancel">取消</button>
			<button type="primary" size="mini" class="send" @click="send">发送</button>
		</view>
		<view class="imgs">
			<view class="img_container">
				<view :style="'background-image:url('+ item +')'" 
				v-for="(item,index) in imgs" :key="index" @click="previewImage(index)" class="img"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				imgs:[],
				text:'',
				lock:true
			}
		},
		methods:{
			input(data){
				this.text = data.target.value
			},
			cancel(){
				uni.navigateBack({
					delta:1
				})
			},
			send(){
				if(this.lock) {
					this.lock = false
					uni.showLoading({
						title:"正在上传"
					})
					//上传到后端,并返回到前一个页面
					let files = []
					let a=0
					for (let i of this.imgs) {
						let f = {
							name:'image' + a++,
							uri:i
						}
						files.push(f)
					}
					let loginUser = uni.getStorageSync('user').id
					uni.uploadFile({
						url:this.websiteUrl + 'photo/insert',
						files:files,
						name:'photo',
						formData:{
							content:this.text,
							postUser:loginUser,
							size:this.imgs.length
						},
						success: (res) => {
							uni.hideLoading()
							this.cancel()
						}
					})
				}
				
			},
			previewImage(index) {
				uni.previewImage({
					urls:this.imgs,
					current:index,
					indicator:'number',
					longPressActions:{}
				})
			}
		},
		computed:{
			counter(){
				return this.text.length
			}
		},
		onLoad(e) {
			this.imgs = this.imgs.concat(JSON.parse(decodeURIComponent(e.imgs)))
		}
	}
</script>

<style>
	.post {
		padding: 20rpx;
		height: 100%;
	}
	.textarea {
		background-color: #FFFFFF;
		width: 100%;
		border-radius: 5px;
		padding: 8rpx
	}
	.btns{
		margin-top: 20rpx;
		height: 50rpx;
	}
	.send {
		position: absolute;
		right: 40rpx;
	}
	.cancel {
		position: absolute;
		left: 40rpx;
	}
	.imgs{
		margin-top: 40rpx;
		width: 100%;
		position: relative;
		height: 0;
		padding-bottom: 100%;
	}
	.img_container{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.img{
		width: calc(94% / 3);  /* calc里面的运算符两边要空格 */
		height: calc(94% / 3);
		margin: 3px;
		overflow: hidden;
		float: left;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
