<template>
	<view>
		<view class="list-box">
			<view v-for="(item,index) in photoList" :key="index" :class="{'active':true}" :data-index="index" @tap="openDetail($event)"
			 :data-detail="item.id">
				<image :src="item.pic[0]" mode="aspectFill" lazy-load="true"></image>
				<view>{{item.foodName}}</view>
			</view>
		</view>
	</view>
</template>


<script>
	/* 过度动画 */
	import uniTransition from "@/components/uni-transition/uni-transition.vue"
	export default {
		data() {
			return {
				foodsPic: [],
				photoList: [],
				rows: 10,
				page: 1,
				isGet: true,
				loadTxt: "",
				currentCity:"",
			}
		},
		components: {uniTransition},
		onLoad() {
			this.getData();
			this.getPhoto();
		},
		onReachBottom() {
			this.getPhoto();
		},
		methods: {
			/* 获取当前城市的picList */
			async getData() {
				this.currentCity = uni.getStorageSync('city');
				console.log("当前城市"+this.currentCity.name);
				const res1 = await this.$myRequest({
					url: '/food/getlist'
				})
				for (var i = 0; i < res1.data.list.length; i++) {
					if (res1.data.list[i].city == this.currentCity.id) {
						this.foodsPic.push(res1.data.list[i])
					}
				}
			},
			/* 获取照片 */
			getPhoto() {
				
				if (!this.isGet) {
					
					return;
				}
				this.isGet = false;
				
				new Promise((success, error) => {
					
					/* 第一页弹出加载层 */
					if (this.page == 1) {
						uni.showLoading({
							title: '加载中',
							mask: true
						})
					} else {
						this.loadTxt = "正在加载中";
					}
					
					/* 无真实图片请求接口，由 setTimeout 模拟异步过程 */
					setTimeout(() => {
						/* 拼接图片路径字符串 */
						
						let list = [];
						for (let i = 0; i < this.foodsPic.length; i++) {
							list.push(this.foodsPic[(this.page - 1) * this.rows + i])
						}
						console.log(list);
						success(list);

					}, 1000);
				}).then((res) => {
					
					if (this.page == 1) {
						uni.hideLoading();
					}
					this.photoList = [...this.photoList, ...res];
					this.showImages();
				})
			},
			/* 显示照片 */
			showImages() {
				let index = (this.page - 1) * this.rows;
				let show = () => {
					if (index < this.photoList.length) {
						this.$set(this.photoList, "active", true);
						index++;
					} else {
						clearInterval(interval);
						this.loadTxt = "上拉加载更多";
						this.page++;
						this.isGet = true;
					}
				}

				let interval = setInterval(() => {
					show();
				}, 1000);
			},
			/* 点击图片，跳转至详情 */
			openDetail(e) {
				let index = e.currentTarget.dataset.detail;
				// console.log("点击" + index);
				uni.navigateTo({
					url: "detail?id=" + index,
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	page {
		background-color: #eee;
	}

	.header {
		font-size: 50upx;
	}

	.list-box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		align-content: flex-start;
		padding: 20upx 20upx 0 20upx;
		line-height: 30upx;
		font-size: 28upx;
		color: #333;

		&>view {
			background-color: #fff;
			width: 345upx;
			padding: 20upx;
			margin-bottom: 20upx;
			box-sizing: border-box;
			opacity: 0;
			transform: translateY(40upx);
			transition: all 0.3s ease-in-out 0s;

			&.active {
				opacity: 1;
				transform: translateY(0);
			}
		}

		image {
			width: 100%;
			height: 300upx;
			margin-bottom: 10upx;
		}
	}

	.load {
		line-height: 80upx;
		text-align: center;
		font-size: 24upx;
		color: #999;
		padding-bottom: 20rpx;
	}
</style>
