<!-- 寻吃 -->
<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- 城市名称 -->
		<food-header :currentCity="currentCity"></food-header>
		<!-- 美食列表 -->
		<view class="list-box">
			<view v-for="(item,index) in photoList" :key="index" :class="{'active':item.active}" :data-index="index" @tap="openDetail($event)"
			 :data-detail="item.id">
				<image :src="item.pic[0]" mode="aspectFill" lazy-load="true"></image>
				<view>{{item.foodName}}</view>
			</view>
		</view>
		<view class="load">{{loadTxt}}</view>
	</view>
</template>

<script>
	import foodHeader from './components/Header.vue'
	import foodList from './components/FoodList.vue'
	export default {
		name: 'food',
		data() {
			return {
				foodsPic: [],
				photoList: [],
				rows: 6,
				page: 1,
				isGet: true,
				loadTxt: "",
				currentCity: "",
				flag: true,
			}
		},
		components: {
			foodHeader,
			foodList,
		},
		onLoad() {
			this.getData();
			this.getPhoto();
		},
		onReachBottom() {
			this.getPhoto();
		},
		methods: {
			async getData() {
				this.currentCity = uni.getStorageSync('city');
				const res1 = await this.$myRequest({
					url: 'food/getlist'
				})
				for (var i = 0; i < res1.data.list.length; i++) {
					if (res1.data.list[i].city == this.currentCity.id) {
						this.foodsPic.push(res1.data.list[i])
					}
				}
			},
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
						for (let i = 0; i < this.rows; i++) {
							if (this.foodsPic[(this.page - 1) * this.rows + i] == null) {
								break;
							}
							list.push(this.foodsPic[(this.page - 1) * this.rows + i])
						}
						success(list);

					}, 200);

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
						this.$set(this.photoList[index], "active", true);
						index++;
					} else {
						if (this.photoList.length < this.foodsPic.length) {
							clearInterval(interval);
							this.loadTxt = "上拉加载更多";
							this.page++;
							this.isGet = true;
						} else {
							this.loadTxt = "没有更多了";
						}
					}
				}
				let interval = setInterval(() => {
					show();
				}, 100);
			},
			/* 点击图片，跳转至详情 */
			openDetail(e) {
				let index = e.currentTarget.dataset.detail;
				uni.navigateTo({
					url: "detail?id=" + index,
				})
			}
		}
	}
</script>

<style lang="scss">
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
