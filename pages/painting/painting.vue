<template>
	<view>
<<<<<<< HEAD
=======
	
>>>>>>> 37188093bb0ae6d2c72f8ec2d1b940360337cf2c
		<swiperImg 
		:swiperList="swiperList" 
		:indicatorDots="true" 
		:autoplay="false" 
		:interval="2000" 
		:duration="500" />
	</view>
</template>
<script>
	import swiperImg from '@/components/swiper/swiper.vue'
	export default {
		components: {
			swiperImg
		},
		data() {
			return {
<<<<<<< HEAD
				swiperList: []
=======
				swiperList: [{
						img: '/static/image/painting.jpg',
						title: '《富春山居图》',
						content: '中国十大名画元·黄公望《富春山居图》纵33厘米，横636.9厘米，纸本，水墨。始画于至正七年(1347)，于至正十年完成。该中国十大名画于清代顺治年间曾遭火焚，断为两段，前半卷被另行装裱，重新定名为《剩山图》，现藏浙江省博物馆。被誉为浙江博物馆“镇馆之宝”。《富春山居图》是元代画坛宗师、“元四家”之首黄公望晚年的杰作，也是中国古代水墨山水画的巅峰之笔，在中国传统山水画中所取得的艺术成就，可谓空前绝后，历代莫及。'
					},
					{
						img: '/static/image/painting1.jpg',
						title: '《启航——中国共产党成立》',
						content: '油画《启航——中共一大会议》采用写实主义的手法，再现了中共一大南湖会议的历史瞬间：毛泽东、董必武、何叔衡、张国焘、李达等13位一大代表正在登船。在画面中，毛泽东处于构图的中心，身着蓝色长衫，肩挎包袱，正站在船头回首眺望，显得意气风发。'
					},
					{
						img: '/static/image/painting2.jpg',
						title: '《三潭映月》',
						content: '三潭印月是西湖十景之一，被誉为“西湖第一胜境”，三潭印月是西湖中最大的岛屿，风景秀丽、景色清幽，尤三潭印明月的景观享誉中外。主要景点“开网亭”“闲放台”“先贤祠”“迎翠轩”“花鸟厅”“我心相印亭”“曲桥”“九狮石”等。岸上金桂婆娑，柳绿花明，与雕栏画栋的建筑相映成趣。具有湖中有岛，岛中有湖，园中有园，曲回多变，步移景新的江南水上庭园的艺术特色。人民币一元纸币的背面采用三潭印月的盛景，可见三潭印月在我国风景名胜中也占据极其重要的标志作用。'
					}, {
						img: '/static/image/painting4.jpg',
						title: '《断桥残雪》',
						content: '“西湖图卷”是中国宋代画家李嵩的国画作品，这幅西湖图未必是自古以来描绘西湖笔法最精湛的画卷，但却是最能说明古代西湖全貌的作品.工笔画虽比不上水墨写意，但作为人肉照相机，李嵩做到了.据厉鹗“南宋院画录”卷五记载，朱元璋曾在这幅“西湖图”上题跋赞赏，作为一个没接受过义务制教育、靠自学脱盲的太祖皇帝，平时很知趣，极少在外卖弄文艺，而这好像是人们所知的朱元璋，对于绘画作品的唯一直接评论.'
					},
				],
>>>>>>> 37188093bb0ae6d2c72f8ec2d1b940360337cf2c
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				uni.showLoading({
					title: '加载中'
				});
				const res1 = await this.$myRequest({
					url: 'painting/getlist'
				})
				uni.hideLoading();
				console.log(this.swiperList);
				for (var i = 0; i < res1.data.list.length; i++) {
					this.swiperList.push(res1.data.list[i])
				}
				console.log(this.swiperList);
			}
		}
	}
</script>



<style  lang="stylus" scoped>

</style>
