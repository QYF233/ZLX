<template>
	<view>
		<view v-for="article in articles" :key="article.id">
			<text-only 
				v-if="article.photo === ''"
				:id="article.id"
				:title="article.title"
				:author="article.author"
				:text="article.text"
				:date="article.date">
			</text-only>
			<text-photo 
				v-if="article.photo !== ''"
				:id="article.id" 
				:title="article.title"
				:author="article.author"
				:text="article.text"
				:photo="article.photo"
				:date="article.date">
			</text-photo>
		</view>
		<view class="foot">
			<view class="foot-left"> </view>
			 没有了
			<view class="foot-right"> </view>
		</view>
	</view>
</template>

<script>
	import textPhoto from './components/text-photo.vue'
	import textOnly from './components/text-only.vue'
	export default {
		name:'Locations',
		components:{
			textPhoto,
			textOnly
		},
		onLoad: function (options) {
			
		},
		onPullDownRefresh() {
			uni.vibrateShort()
			setTimeout(function () {
				uni.stopPullDownRefresh({
					success:function(){
						uni.showToast({
							title:'刷新成功',
							icon:'none',
							position:'bottom'
						})
					}
				});
			}, 300);
		},
		data() {
			return {
				articles:[
					{
						id:10001,
						title:'超详细杭州旅行攻略之西湖景点自由行篇',
						author:'乐宸游小羊',
						photo:'https://pic3.zhimg.com/v2-71eaff66299d9d788f2285e62ba0d84e_r.jpg?source=172ae18b',
						text:'杭州是个浪漫美丽的地方，“上有天堂，下有苏杭”，“江南忆，最忆是杭州。山寺月中寻桂子，郡亭枕上看潮头。何日更重游”足以体现人们对杭州的喜爱。杭州，中国七大古都之一，拥有自秦朝设县治以来已有2200多年的历史。杭州拥有着两个国家级风景名胜区——西湖风景名胜区、“两江两湖”风景名胜区；两个国家级自然保护区——天目山、清凉峰自然保护区；七个国家森林公园——千岛湖、大奇山、午潮山、富春江、青山湖、半山和桐庐瑶琳森林公园；一个国家级旅游度假区——之江国家旅游度假区；全国首个国家级湿地——西溪国家湿地公园。杭州还有全国重点文物保护单位25个、国家级博物馆9个。而在这么多的景点中，杭州西湖则是杭州的代表。',
						date:'2020-7-7'
					},
					{
						id:10002,
						title:'杭州旅游攻略(附夜景攻略)',
						author:'亦雨清晨',
						photo:'',
						text:'“上有天堂，下有苏杭”。钱塘江源，西子湖畔，杭州自古以来就有“人间天堂”的美誉。自然风景令无数游客魂牵梦萦。杭州也是座历史文化底蕴十分深厚的城市。西湖十景：苏堤春晓、曲苑风荷、平湖秋月、断桥残雪（啊~~~许仙、白娘子的凄美爱情故事）、柳浪闻莺、花港观鱼、雷峰夕照、双峰插云、南屏晚钟、三潭印月（一元纸币反面的景色就是三潭印月）',
						date:'2020-6-7'
					},
					{
						id:10003,
						title:'西湖最强游玩攻略',
						author:'萌萌的薯片',
						photo:'',
						text:'西湖可以玩一整天，先走走断桥，然后去雷峰塔那，（雷峰塔可以坐电梯上去）下来后再坐船去三潭印月，（船票成人55，其中船票35岛的门票20，船票是包括来回的，上岛随便玩，然后可以选择东南西北四个方向坐船在回去，当然4个发现到达的地方不一样，可以去湖滨，少年宫等等地方）欣赏一元人民币的美，',
						date:'2020-6-23'
					},
					{
						id:10004,
						title:'杭州西湖一日游',
						author:'一只努力探索的猪',
						photo:'https://picb.zhimg.com/80/v2-8a2f630a3290d008208f3cf1f948f844_720w.jpg',
						text:'每年都要飞几次上海，偶尔会一个人找些地方逛下，所以对上海的了解还好，吃的基本上都吃过了。南方的城市好像都差不多，南京路步行街就像广州的上下九，金融中心就像广州的珠江新城CBD，外滩和豫园初次相遇倒是会有些惊喜。上海周边的城市一直没有机会，其中一个很想去的地方便是西湖了。为什么想去？就是因为很出名啊！难道这个理由还不够充分吗哈哈哈哈哈',
						date:'2020-7-20'
					},
					{
						id:10005,
						title:'初游杭州，一天玩转西湖美景',
						author:'Hi驴友',
						photo:'https://pic3.zhimg.com/80/v2-8cfa149f57297bf5f63ceab2d4c12a31_720w.jpg',
						text:'都说西湖烟雨如酒柳如烟，那有夜夜的月圆。断桥残雪、南屏晚钟、三潭印月...你有一万个理由来西湖，只有一个理由不来，就是来了不想走，走了还想来。西湖处于杭州市中，在里面却找不到任何的喧嚣烦闷，西湖带给你的，不止于安静放松，它能带给你一种归宿感。',
						date:'2019-7-8'
					},
					{
						id:10006,
						title:'超详细杭州旅行攻略之西湖景点自由行篇',
						author:'乐宸游小羊',
						photo:'https://pic3.zhimg.com/v2-71eaff66299d9d788f2285e62ba0d84e_r.jpg?source=172ae18b',
						text:'杭州是个浪漫美丽的地方，“上有天堂，下有苏杭”，“江南忆，最忆是杭州。山寺月中寻桂子，郡亭枕上看潮头。何日更重游”足以体现人们对杭州的喜爱。杭州，中国七大古都之一，拥有自秦朝设县治以来已有2200多年的历史。杭州拥有着两个国家级风景名胜区——西湖风景名胜区、“两江两湖”风景名胜区；两个国家级自然保护区——天目山、清凉峰自然保护区；七个国家森林公园——千岛湖、大奇山、午潮山、富春江、青山湖、半山和桐庐瑶琳森林公园；一个国家级旅游度假区——之江国家旅游度假区；全国首个国家级湿地——西溪国家湿地公园。杭州还有全国重点文物保护单位25个、国家级博物馆9个。而在这么多的景点中，杭州西湖则是杭州的代表。',
						date:'2020-5-7'
					},
					{
						id:10007,
						title:'杭州旅游攻略(附夜景攻略)',
						author:'亦雨清晨',
						photo:'',
						text:'“上有天堂，下有苏杭”。钱塘江源，西子湖畔，杭州自古以来就有“人间天堂”的美誉。自然风景令无数游客魂牵梦萦。杭州也是座历史文化底蕴十分深厚的城市。西湖十景：苏堤春晓、曲苑风荷、平湖秋月、断桥残雪（啊~~~许仙、白娘子的凄美爱情故事）、柳浪闻莺、花港观鱼、雷峰夕照、双峰插云、南屏晚钟、三潭印月（一元纸币反面的景色就是三潭印月）',
						date:'2020-7-7'
					},
					{
						id:10008,
						title:'西湖最强游玩攻略',
						author:'萌萌的薯片',
						photo:'',
						text:'西湖可以玩一整天，先走走断桥，然后去雷峰塔那，（雷峰塔可以坐电梯上去）下来后再坐船去三潭印月，（船票成人55，其中船票35岛的门票20，船票是包括来回的，上岛随便玩，然后可以选择东南西北四个方向坐船在回去，当然4个发现到达的地方不一样，可以去湖滨，少年宫等等地方）欣赏一元人民币的美，',
						date:'2020-7-7'
					},
					{
						id:10009,
						title:'杭州西湖一日游',
						author:'一只努力探索的猪',
						photo:'https://picb.zhimg.com/80/v2-8a2f630a3290d008208f3cf1f948f844_720w.jpg',
						text:'每年都要飞几次上海，偶尔会一个人找些地方逛下，所以对上海的了解还好，吃的基本上都吃过了。南方的城市好像都差不多，南京路步行街就像广州的上下九，金融中心就像广州的珠江新城CBD，外滩和豫园初次相遇倒是会有些惊喜。上海周边的城市一直没有机会，其中一个很想去的地方便是西湖了。为什么想去？就是因为很出名啊！难道这个理由还不够充分吗哈哈哈哈哈',
						date:'2020-7-7'
					},
					{
						id:10010,
						title:'初游杭州，一天玩转西湖美景',
						author:'Hi驴友',
						photo:'https://pic3.zhimg.com/80/v2-8cfa149f57297bf5f63ceab2d4c12a31_720w.jpg',
						text:'都说西湖烟雨如酒柳如烟，那有夜夜的月圆。断桥残雪、南屏晚钟、三潭印月...你有一万个理由来西湖，只有一个理由不来，就是来了不想走，走了还想来。西湖处于杭州市中，在里面却找不到任何的喧嚣烦闷，西湖带给你的，不止于安静放松，它能带给你一种归宿感。',
						date:'2020-7-7'
					}
					
				]
			}
		}
	}
</script>

<style>
	.foot {
		text-align: center;
		color: #c5c5c5;
	}
	.foot-left,.foot-right{
		display: inline-block;
		height: 0;
		width: 20%;
		border-top: 1px solid #c5c5c5;
		margin: 10rpx 10rpx;
	}
</style>
