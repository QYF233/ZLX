<template>
	<view class="list-container">
		<view id="wf-list" class="list" v-for="(list,listIndex) of viewList" :key="listIndex">
            <view class="item" v-for="(item,index) of list.list" :key="index" @click="sendBack(item)">
                <image class="image" @load="handleViewRender(listIndex,index)" @error="handleViewRender(listIndex,index)" :src="item.image" mode="widthFix"></image>
				<h1 v-if="item.title">
					{{item.title}}
				</h1>
                <view class="desc">{{item.content}}</view>
				<view class="user" v-if="item.user">
					<view class="user_icon">
						<image :src="item.user.avatar" class="icon"></image>
					</view>
					{{item.user.name}}
				</view>
				<view class="type">
					{{item.type}}
				</view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
        props:{
            list:{
                type:Array, //实际请求获取的列表数据
            }
        },
		data() {
			return {
                viewList:[{list:[]},{list:[]}],  //展示到视图的列表数据
                everyNum:2
			}
		},
		methods: {
			sendBack(item){
				this.$emit('sendBack',item)
			},
            init(){
                this.viewList = [{list:[]},{list:[]}];
                setTimeout(()=>{
                    this.handleViewRender(0,0)
                },0)
            },
			handleViewRender(x,y){
                // console.log(x,y);
                // const num = (x+1)*(y+1);
                // console.log(num%(this.everyNum));
                // console.log(num);
                // if((num%(this.everyNum))!==0&&num!==1)return;
                // console.log(num,'----');
                const index = this.viewList.reduce((total,current)=>total + current.list.length,0)
                if(index>this.list.length-1) {
                    // 加载完成触发事件并返回加载过的图片数
                    this.$emit('finishLoad',index)
                    return
                };
                const query = uni.createSelectorQuery().in(this);
                let listFlag = 0;
                query.selectAll('#wf-list').boundingClientRect(data => {
                    listFlag = data[0].bottom - data[1].bottom<=0?0:1;
                    this.viewList[listFlag].list.push(this.list[index])
                    // this.list.slice(index,index+this.everyNum).forEach((item,index)=>{
                    //     const flag = listFlag===0?index&1:Number(!(index&1))
                    //     this.viewList[flag].list.push(item)
                    // })
                }).exec()
            },
		},
        mounted() {
            if(this.list.length){
                this.init()
            }
        }
	}
</script>

<style scoped>
    .list-container {
		display: flex;
        justify-content: space-between;
        align-items:flex-start;
        padding: 0 24rpx;
        padding-top: 30rpx;
	} 
	.list{
		width: calc(50% - 8rpx);
		display: flex;
		flex-direction: column;
	}    
	.item{
		margin-bottom: 20rpx;
		border-radius: 10rpx;
		background-color: #FFF;
	}		
	.image{
		width: 100%;
		border-radius: 10rpx;
	}
	.desc{
		padding :16rpx;
		font-size: 16px
	}
	.user{
		display: flex;
		margin: 0 10rpx;
	}
	.icon {
		width: 45rpx;
		height: 45rpx;
		border-radius: 50%;
	}
	.user_icon {
		margin-right: 5rpx;
	}	
	h1{
		font-size: 18px;
		margin: 0 20rpx;
	}
	.type {
		color: #B5B5B5;
		float: right;
		margin:0 10rpx 10rpx 0;
	}
</style>