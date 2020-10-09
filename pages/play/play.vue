<template>
    <view>
        <canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
    </view>
</template>
<script>
export default {
    onReady: function (e) {
       this.createCanvasContext();
    },
    methods: {
		createCanvasContext(){
			var context = uni.createCanvasContext('firstCanvas')
			
			context.setStrokeStyle("#00ff00")
			context.setLineWidth(5)
			context.rect(0, 0, 200, 200)
			context.stroke()
			context.draw()
		}
    }
}
</script>
<style  lang="stylus" scoped>
</style>