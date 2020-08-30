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
				text:''
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
				//上传到后端,并返回到前一个页面
				let flag = false;
				let imageURL = "";
				let a=0
				for (let i of this.imgs) {
					let image = [];
					let f = {
						name:'image',
						uri:i
					}
					image.push(f)
				uni.uploadFile({
						url:'http://pan.kikohk.top/api/upload',
						files:image,
						formData:{
							token:"0a5720cd20c9fcb79b953227de819793",
						},
						success: (res) => {
							let dataJson = JSON.parse(res.data);
							console.log(dataJson);
							if(dataJson.code=="500"){
								// alert("上传失败");
								flag=false;
							}else{
								// alert("上传成功!");
								flag=true;
								console.log("URL:"+dataJson.data.url);
								imageURL += dataJson.data.url+",";
								console.log("imageURL:"+imageURL);
							}
							
						}
					});
				}
				/* uploadTask.onProgressUpdate((res) => {
				            console.log('上传进度' + res.progress);
				            console.log('已经上传的数据长度' + res.totalBytesSent);
				            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
				
				            // 测试条件，取消上传任务。
				            if (res.progress > 50) {
				                uploadTask.abort();
				            }
				        }); */
				console.log();
				if(flag){
					console.log("chengg");
					this.insert(imageURL);
				}
			},
			insert(imageURL){
				imageURL=imageURL.substring(0,imageURL.length-1);
				let loginUser = uni.getStorageSync('user').id
				console.log("imageURL:"+imageURL);
				/* uni.request({
					url:this.websiteUrl + 'photo/insert',
					data:{
						images:imageURL,
						content:this.text,
						postUser:loginUser,
						date: new Date()
					},
					success: (res) => {
						console.log("end"+res);
					}
				}) */
				this.cancel()
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
