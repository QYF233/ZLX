<template>
	<view class="info">
		<view class="top">
			<view class="left">
				<view class="">
					<h1>{{spot.title}}</h1>(国家{{spot.grade}}级旅游景区)
				</view>
				<view style="margin-top: 10rpx;">
					<text class="tags">“{{spot.tags}}”</text>
				</view>
			</view>
			<view class="right">
				<view class="right_top">
					<view class="score">{{spot.score}}</view>
					<view class="total">
						/5
					</view>
				</view>
				<view class="start">
					<uni-rate :value="4" :size="18" :is-fill="false" />
				</view>
				<view class="right_bottom">
					共{{spot.commentCount}}条评论<text class="iconfont">&#xe628;</text>
				</view>
			</view>
		</view>

		<view class="introduction">
			<h3>简介</h3>
			<sunui-grand :content="spot.introduction" :bg="bg"></sunui-grand>
		</view>
		<view class="more">
			<view class="cost">
				<text class="iconfont">&#xe62a;</text><text class="time">门票：{{spot.cost}}</text>
			</view>
			<view class="mid">
				<text class="iconfont">&#xe606;</text><text class="time">{{spot.openTime}}</text>
			</view>
			<view class="bottom">
				<text class="iconfont">&#xe612;</text><text class="address">{{spot.address}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	import SunuiGrand from "@/components/sunui-grand/sunui-grand.vue"
	import UniRate from "@/components/uni-rate/uni-rate.vue"
	export default {
		components: {
			UniRate,
			SunuiGrand
		},
		props: {
			spot: Object
		},
		data() {
			return {
				bg: "#ffffff",
				content: "西湖古称“钱塘湖”，又名“西子湖”，古代诗人苏轼就对它评价道：“欲把西湖比西子，淡妆浓抹总相宜。”西湖形态为近于等轴的多边形，湖面被孤山及苏堤、白堤两条人工堤分割为5个子湖区，子湖区间由桥孔连通，各部分的湖水不能充分掺混，造成各湖区水质差异，大部分径流补给先进入西侧3个子湖区，再进入外西湖；湖水总面积5.593平方公里;，总容积1．10亿立方米，平均水深1．97 米；西湖底质是一种有机质含量特别高的湖沼相沉积，属于粉砂质粘土或粉砂质亚粘土，最上层皆为藻骸腐泥层（黑色有机质粘土），中层泥炭层或沼泽土，最下层为基底粉砂层；入湖河流部是短小的溪涧，主要补水河流为金沙涧、龙泓涧和长桥溪泄流。西湖，是一首诗，一幅天然图画，一个美丽动人的故事，不论是多年居住在这里的人还是匆匆而过的旅人，无不为这天下无双的美景所倾倒。 阳春三月，莺飞草长。苏白两堤，桃柳夹岸。两边是水波潋滟，游船点点，远处是山色空蒙，青黛含翠。此时走在堤上，你会被眼前的景色所惊叹，甚至心醉神驰，怀疑自己是否进入了世外仙境。 而西湖的美景不仅春天独有，夏日里接天莲碧的荷花，秋夜中浸透月光的三潭，冬雪后疏影横斜的红梅，更有那烟柳笼纱中的莺啼，细雨迷蒙中的楼台------无论你在何时来，都会领略到不同寻常的风采。 西湖十景形成于南宋时期，基本围绕西湖分布，有的就位于湖上。苏堤春晓、曲苑风荷、平湖秋月、断桥残雪、柳浪闻莺、花港观鱼、雷峰夕照、双峰插云、南屏晚钟、三潭印月，西湖十景个擅其胜，组合在一起又能代表古代西湖胜景精华，所以无论杭州本地人还是外地山水客都津津乐道，先游为快。 新西湖十景是一九八五年经过杭州市民及各地群众积极参与评选，并由专家评选委员会反复斟酌后确定的，它们是：云栖竹径、满陇桂雨、虎跑梦泉、龙井问茶、九溪烟树、吴山天风、阮墩环碧、黄龙吐翠、玉皇飞云、宝石流霞。 其它景点还有保叔挺秀、长桥旧月、古塔多情、湖滨绿廊、花圃烂漫、金沙风情、九里云松、梅坞茶景、西山荟萃、太子野趣、植物王国、中山遗址、灵隐佛国、岳王墓庙.",
			}
		}
	}
</script>

<style>
	.info {
		margin: 0 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}

	h1 {
		font-size: 26px;
	}

	.top {
		padding: 20rpx;
		margin: 20rpx 0;
		display: flex;
	}

	.left {
		width: 65%;
		border-right: 1px solid #E5E5E5;
	}

	.right {
		width: 34%;
	}

	.total {
		line-height: 35px;
		padding-left: 5rpx;
		color: #B5B5B5;
	}

	.score {
		color: #0081FF;
		font-size: 26px;
		font-weight: bold;
	}

	.right_top {
		display: flex;
		padding-left: 50rpx;
	}

	.start {
		padding-left: 25rpx;
	}

	.right_bottom {
		font-size: 12px;
		padding-left: 25rpx;
	}

	.tags {
		color: #007AFF;
	}

	.introduction {
		margin: 10rpx 20rpx;
		border-top: 1px solid #F5F5F5;
		border-bottom: 1px solid #F5F5F5;
		min-height: 80rpx;

	}

	.more {
		margin-top: 100rpx;
	}

	.cost {
		margin: 10rpx 20rpx;
		border-top: 1px solid #F5F5F5;
		border-bottom: 1px solid #F5F5F5;
		line-height: 80rpx;
		min-height: 80rpx;
		/* font-size: 24px; */
	}

	.mid {
		margin: 10rpx 20rpx;
		border-top: 1px solid #F5F5F5;
		border-bottom: 1px solid #F5F5F5;
		line-height: 80rpx;
		min-height: 80rpx;
	}

	.bottom {
		margin: 10rpx 20rpx;
		line-height: 80rpx;
		min-height: 80rpx;
	}

	.ticket,
	.time,
	.address {
		padding-left: 20rpx;
		/* font-weight: bold; */
		font-size: 24px;
	}
</style>
