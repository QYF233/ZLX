<template>
    <view>
        <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
            <swiper class="swiper-box" @change="change" :autoplay="autoplay">
                <swiper-item v-for="(item ,index) in info" :key="index">
                    <!-- <image :src="item.content" mode=""></image> -->
					<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="128" height="128" t="1593174153034" p-id="1374" version="1.1"><path d="M 810 203.8 H 213.7 c -33 0 -59.8 26.8 -59.8 59.8 v 496.1 c 0 33 26.8 59.8 59.8 59.8 h 596.2 c 33 0 59.8 -26.8 59.8 -59.8 V 263.5 c 0.1 -32.9 -26.7 -59.7 -59.7 -59.7 Z m -596.3 48.5 H 810 c 6.1 0 11.2 5.1 11.2 11.2 v 428.2 L 638 429 c -7.4 -10.7 -20.2 -17.2 -33.7 -17.2 c -13.6 0 -26.2 6.5 -33.6 17.2 L 440.8 616.4 l -71.7 -77 c -8.3 -9 -20.6 -13.7 -33.1 -12.8 c -12.6 0.8 -24 7.2 -30.9 17.1 L 202.5 691.9 V 263.5 c 0 -6.1 5.1 -11.2 11.2 -11.2 Z m 0 0" p-id="1375" /><path d="M 316.2 411.8 c 30.2 0 54.8 -24.6 54.8 -54.8 c 0 -30.2 -24.6 -54.8 -54.8 -54.8 c -30.2 0 -54.8 24.6 -54.8 54.8 c 0 30.3 24.6 54.8 54.8 54.8 Z m 0 -71.6 c 9.3 0 16.9 7.6 16.9 16.9 c 0 9.3 -7.5 16.9 -16.9 16.9 c -9.3 0 -16.9 -7.6 -16.9 -16.9 c 0.2 -9.3 7.7 -16.9 16.9 -16.9 Z m 0 0" p-id="1376" /></svg>
                </swiper-item>
            </swiper>
        </uni-swiper-dot>
    </view>
</template>
 
<script>
    import uniSwiperDot from '@/pages/treasure/components/uni-swiper-dot/uni-swiper-dot.vue'
    export default {
        components:{ 
            uniSwiperDot
        },
        data() {
            return {
                autoplay:true,
                info: [{
                    content: ''
                }, {
                    content: ''
                }, {
                    content: ''
                }],
                current: 3,
                mode: 'default',
            }
        },
        methods: {
            change(e) {
                this.current = e.detail.current;
            }
        }
    }
</script>
 
<style>
    .swiper-box {
        border-radius: 0rpx;
        padding: 0px;
    }
	svg{
		width: 100%;
	}
</style>