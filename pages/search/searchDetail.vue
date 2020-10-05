<template>
	<view class="container">
		<view class="vedio">
			<video id="myVideo" src="http://cdn.kikohk.top/shaoxing.mp4" object-fit:fill enable-danmu danmu-btn controls></video>
		</view>
		<view class="head flex justify-between">
			<view class="left">
				<h1 class="title">绍兴</h1>
			<span class="little">21-35℃</span>
			</view>
			
			<navigator url="./cityMap" class="text-right">
				<span class="text-right">查看地图</span>
			</navigator>
		</view>
		<view class="body">
			<view style="text-indent: 2em;">
				<p>绍兴，简称“越”，古称越州，是浙江省地级市，国务院批复确定的中国具有江南水乡特色的文化和生态旅游城市 [1]
					。截至2018年，全市下辖3个区、1个县、代管2个县级市，总面积8274.79平方千米，常住人口503.5万人，城镇人口335.33万人，城镇化率66.6%，常住外来人口达79万人。 [2-3]
				</p>
				<p>
					绍兴地处中国华东地区、浙江省中北部、杭州湾南岸，东连宁波市，南临台州市和金华市，西接杭州市，北隔钱塘江与嘉兴市相望，是长三角城市群重要城市、环杭州湾大湾区核心城市 [4] 、杭州都市圈副中心城市 [5]
					。位于东经119°53′03"至121°13′38"、北纬29°13′35"至30°17′30"之间，属于亚热带季风气候，温暖湿润，四季分明。
				</p>
				<p>
					绍兴已有2500多年建城史，是首批国家历史文化名城、联合国人居奖城市，中国优秀旅游城市，国家森林城市，中国民营经济最具活力城市，也是著名的水乡、桥乡、酒乡、书法之乡、名士之乡。绍兴素称“文物之邦、鱼米之乡”。著名的文化古迹有兰亭、禹陵、鲁迅故里、沈园、柯岩、蔡元培故居、周恩来祖居、秋瑾故居、马寅初故居、王羲之故居、贺知章故居等。
				</p>
				<p>
					2017年，绍兴市复查确认继续保留全国文明城市荣誉称号。 [7] 2017年中国地级市全面小康指数排名第16 [8] 。2018年12月，被评为中国大陆最佳地级城市第7名，
					中国创新力最强的30个城市之一。2018年重新确认国家卫生城市（区）。 [9] 绍兴市是“无废城市”建设试点城市。
				</p>
			</view>

			<view class="box1" v-for="(item,index) in intro" :key="index">
				<view class="box2 flex padding-xs justify-center margin-lr" :class="{ 'solid-bottom': index+1<intro.length}">
					<view class="left1 text-bold justify-start" style="width: 40%;">
						<text>{{item.way}}</text>
					</view>
					<view class="right1 justify-end" style="width: 40%;">
						<text>{{item.ans}}</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				intro: [{
					way: '中文名',
					ans: '绍兴市'
				}, {
					way: '面积',
					ans: '8279平方公里'
				}, {
					way: '外文名',
					ans: 'Shaoxing City'
				}, {
					way: '人口数量',
					ans: '503.5万人'
				}, {
					way: '别    名',
					ans: '会稽、山阴、越州'
				}, {
					way: '地理位置',
					ans: '杭州湾畔'
				}, {
					way: '面    积',
					ans: '8274.79 km²'
				}, {
					way: '行政区类别',
					ans: '地级市'
				}, {
					way: '气候条件',
					ans: '亚热带季风气候'
				}, {
					way: '著名景点',
					ans: '兰亭、鲁迅故里等'
				}, {
					way: '所属地区',
					ans: '中国华东地区'
				}, {
					way: '市委书记',
					ans: '马卫光'
				}, {
					way: '市    长',
					ans: '盛阅春'
				}, {
					way: '邮政区码',
					ans: '312000'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.vedio {
		width: 100%;
		text-align: center;
	}
	#myVideo {
		width: 100%;
	}
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.body {
		padding-top: 10px;
	}

	.title {
		margin-left: 25rpx;
		margin-bottom: 10rpx;
	}

	.little {
		font-size: small;
		color: #444;
		margin-left: 45rpx;
	}

	.head {
		border-bottom: 1px solid #999;
	}

	.left {
		width: 50%;
		float: left;
		font-weight: bold;
	}

	.right {
		text-align: left;
		width: 50%;
		float: right;
		color: #999;
	}

	.clearfix:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;

	}

	.box {
		width: 80%;
		margin: auto;
		margin-top: 25rpx;
	}

	.way {
		padding-left: 40%;
		margin-top: 10rpx;
		border-top: 1px solid #888;
	}

	.intro {
		padding-left: 20%;
		margin-top: 10rpx;
		border-top: 1px solid #888;
	}

	.box2:after {
		border-bottom: 1px solid #999;
	}

	.margin-lr {
		margin-left: 30px;
		margin-right: 30px;
	}
</style>
