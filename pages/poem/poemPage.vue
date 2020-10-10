<template>
	<view class="poemPage">
		<view class="header">
			<view class="title text-center">梦游天姥吟留别</view>
		</view>
		<br>
		<view class="text-center">
			<image src="../../static/image/libai2.jpg" mode="widthFix"></image>
		</view>
		<br>
		<view class="padding-lr introduce">
			《梦游天姥吟留别》是唐代大诗人李白的诗作。这是一首记梦诗，也是一首游仙诗。此诗以记梦为由，抒写了对光明、自由的渴求，对黑暗现实的不满，表现了蔑视权贵、不卑不屈的叛逆精神。诗人运用丰富奇特的想象和大胆夸张的手法，组成一幅亦虚亦实、亦幻亦真的梦游图。全诗构思精密，意境雄伟，内容丰富曲折，形象辉煌流丽，感慨深沉激烈，富有浪漫主义色彩。其在形式上杂言相间，兼用骚体，不受律束，笔随兴至，体制解放，堪称绝世名作。
		</view>
		<br>
		<view class="text-bold text-center">
			梦游天姥吟留别
		</view>
		<br>
		<view class="box">
			<view class="content">
				海客谈瀛洲，烟涛微茫信难求；<br>
				越人语天姥，云霞明灭或可睹。<br>
				天姥连天向天横，势拔五岳掩赤城。<br>
				天台四万八千丈，对此欲倒东南倾。<br>
				我欲因之梦吴越，一夜飞度镜湖月。<br>
				湖月照我影，送我至剡溪。<br>
				谢公宿处今尚在，渌水荡漾清猿啼。<br>
				脚著谢公屐，身登青云梯。<br>
				半壁见海日，空中闻天鸡。<br>
				千岩万转路不定，迷花倚石忽已暝。<br>
				熊咆龙吟殷岩泉，栗深林兮惊层巅。<br>
				云青青兮欲雨，水澹澹兮生烟。<br>
				列缺霹雳，丘峦崩摧。<br>
				洞天石扉，訇然中开。<br>
				青冥浩荡不见底，日月照耀金银台。<br>
				霓为衣兮风为马，云之君兮纷纷而来下。<br>
				虎鼓瑟兮鸾回车，仙之人兮列如麻。<br>
				忽魂悸以魄动，恍惊起而长嗟。<br>
				惟觉时之枕席，失向来之烟霞。<br>
				世间行乐亦如此，古来万事东流水。<br>
				别君去兮何时还？且放白鹿青崖间。<br>
				须行即骑访名山。<br>
				安能摧眉折腰事权贵，使我不得开心颜！<br>
			</view>
		</view>
		<br>
		<view class="text-center">
			<image src="../../static/image/libai.jpg" mode="widthFix"></image>
		</view>
		<view class="relevant padding-lr"  align="left">
			相关城市
		</view>
	
		<uni-card title="新昌" extra="天姥山" note="绍兴·新昌">
			<view>
				<view class="image-box">
					<image class="image" mode="aspectFill" src="../../static/image/dafosi.jpg" />
				</view>
				<view class="content-box">
					<text class="content-box-text">新昌风光秀丽，胜迹众多，是浙东唐诗之路、佛教之游的枢纽，享有“东南眉目”之美称。李白魂牵梦绕的天姥山就坐落于此。新昌拥有大佛寺、穿岩十九峰、沃洲湖三大省级风景名胜区。</text>
				</view>
			</view>
		</uni-card>
		<uni-card title="嵊州" extra="剡溪" note="绍兴·嵊州">
			<view>
				<view class="image-box">
					<image class="image" mode="aspectFill" src="../../static/image/shengzhou.jpg" />
				</view>
				<view class="content-box">
					<text class="content-box-text">嵊州历史悠久，山水秀美，孕育了蜚声海内外的越剧，涌现了经济学家人口学家马寅初、音乐家任光、越剧表演艺术家袁雪芬众姐妹和世界围棋冠军马晓春等一大批国际名人，使嵊州成为”越剧之乡”、“围棋之乡”、“唐诗之路”、“领带之乡”、“茶叶之乡”、“竹编之乡”的一颗耀眼明珠。</text>
				</view>
			</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.poemPage {
		background-image: url("~@/static/image/poemBG.jpg");
		background-size: 100% 100%;
		min-height: 600px;
	}

	.header {
		background-image: url("~@/static/image/huajuan.png");

		width: 100%;
		background-size: 100% 100%;
	}

	.title {
		height: 100px;
		line-height: 100px;
		font-size: 20px;
	}
	.box{
		 display: flex;
		 justify-content:center ;
	}
	.relevant{
		margin-top: 20px;
		font-size: 20px;
	}
	.introduce{
		text-indent: 2em;
	}
</style>
