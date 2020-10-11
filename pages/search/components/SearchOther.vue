<template>
	<view class="">
		<view class="uni-list">
			{{listData.title}}
		    <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key"
		        @click="goDetail(value)">
		        <view class="uni-media-list">
		            <image class="uni-media-list-logo" :src="value.image"></image>
		            <view class="uni-media-list-body">
		                <view class="uni-media-list-text-top text-bold">{{value.title}}</view>
		                <view class="uni-media-list-text-bottom">
		                    <text>热度：100</text>
		                    <text>杭州</text>
		                </view>
		            </view>
		        </view>
		    </view>
		</view>
	</view>
</template>
<script>
export default{
	name:"SearchOther",
	components:{
	},
	props:{
		listData:[]
	},
	data() {
		return {
			list: [],
			data: '',
			banner: {},
			last_id: "",
			reload: false,
		}
	},
	onLoad: function(data) {
		this.listData = data.listData;
		console.log("thisdata");
		console.log(this.listData);
		// this.getData();
	},
	methods:{
		 goDetail: function(e) {
		    let detail = {
		        author_name: e.cityCultureName,
		        image: e.images,
		        id: e.id,
		        post_id: e.id,
		        published_at: e.time,
		        title: e.title,
				describe: e.describe
		    }
		    uni.navigateTo({
		        url: "/pages/detail?detailDate=" + encodeURIComponent(JSON.stringify(
		            detail))
		    })
		},
	}
}
</script>
<style lang="stylus" scoped>
	.banner {
	    height: 360upx;
	    overflow: hidden;
	    position: relative;
	    background-color: #ccc;
	}
	
	.banner-img {
	    width: 100%;
	}
	
	.banner-title {
	    max-height: 84upx;
	    overflow: hidden;
	    position: absolute;
	    left: 30upx;
	    bottom: 30upx;
	    width: 90%;
	    font-size: 32upx;
	    font-weight: 400;
	    line-height: 42upx;
	    color: white;
	    z-index: 11;
	}
	
	.uni-list {
	    background-color: #FFFFFF;
	    position: relative;
	    width: 100%;
	    display: flex;
	    flex-direction: column;
	}
	
	.uni-list:after {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list::before {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    top: 0;
	    left: 0;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list-cell {
	    position: relative;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	}
	
	.uni-list-cell-hover {
	    background-color: #eee;
	}
	
	.uni-list-cell::after {
	    position: absolute;
	    z-index: 3;
	    right: 0;
	    bottom: 0;
	    left: 30upx;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list .uni-list-cell:last-child::after {
	    height: 0upx;
	}
	
	/* 图文列表 */
	.uni-media-list {
	    padding: 22upx 30upx;
	    box-sizing: border-box;
	    display: flex;
	    width: 100%;
	    flex-direction: row;
	}
	
	.uni-navigate-right.uni-media-list {
	    padding-right: 74upx;
	}
	
	.uni-pull-right {
	    flex-direction: row-reverse;
	}
	
	.uni-pull-right>.uni-media-list-logo {
	    margin-right: 0upx;
	    margin-left: 20upx;
	}
	
	.uni-media-list-logo image {
	    height: 100%;
	    width: 100%;
	}
	
	
	.uni-media-list-text-bottom {
	    width: 100%;
	    line-height: 30upx;
	    font-size: 26upx;
	    color: #8f8f94;
	}
	
	.uni-media-list-logo {
	    width: 180upx;
	    height: 140upx;
	    margin-right: 20upx;
	}
	
	.uni-media-list-body {
	    display: flex;
	    flex: 1;
	    flex-direction: column;
	    justify-content: space-between;
	    align-items: flex-start;
	    overflow: hidden;
	    height: auto;
	}
	
	.uni-media-list-text-top {
	    width: 100%;
	    line-height: 36upx;
	    font-size: 30upx;
	    height: 74upx;
	    overflow: hidden;
		
	}
	
	.uni-media-list-text-bottom {
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	}
</style>