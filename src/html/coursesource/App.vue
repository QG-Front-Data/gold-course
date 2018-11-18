<template>
  <div id="app">
    <order-coursesource></order-coursesource>
  </div>
</template>

<script>
import coursesource from './component/coursesource'
export default {
    name: 'app',
    components: {
			// 什么要用到的其他组件
		'order-coursesource': coursesource
	},
}
</script>
<style  scoped src="../../assets/css/normalize.css"></style>
<style>
#app {
  /*color: #999;*/
  font-family: '微软雅黑';
  font-style: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  margin: 0;
  /*background: linear-gradient(to right, #d79bec -36%, #868de6);*/
  min-height: 600px;
  min-width: 1200px;
  width: 100%;
  height: 100%;
}

body.orderbox{
  background: white;
}
html,#app{
  width: 100%;
  height: 100%;
}
</style>
