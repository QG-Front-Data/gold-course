<style>
.header-icon,
.nav-container a {
    font-size: 1.7em;

    color: #fff;
}
.nav-container > div {
    margin: 0 8px;
    padding: 0px 7px;
}
.header-container {
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: space-between;
}
.nav-container,
.header-container,
.header-context {
    display: flex;
}
.header-context {
    align-items: center;
}
.header-context {
    margin: 0 40px 0 0;

    cursor: pointer;
}
.logo {
    width: 166px;
}
.header-icon {
        margin: 0 0 0 10px;
        font-size: 1.9em;
}
.clicked-nav {
    border-bottom: 1px solid #fff;
}

</style>

<template>
    <div class="header-container">
        <img class="logo" src="../html/index/style/images/logo.png" />
        <div class="header-context">
            <div class="nav-container">
                <div v-for="item in data" v-bind:key="item.name">
                    <a :href='item.url' :class="item.class">{{item.name}}</a>
                </div>
                <!-- <div><a href="#">首页</a></div>
                <div><a href="#">申报书</a></div>
                <div><a href="#">教学团队</a></div>
                <div><a href="#">课程概要</a></div>
                <div><a href="#">课程资源</a></div>
                <div><a href="#">实践教学</a></div>
                <div><a href="#">课程特色</a></div>
                <div><a href="#">课程评价</a></div> -->
            </div>
            <Icon class="header-icon" type="md-search" />
        </div>
    </div>

</template>
<script>
	
import {mapState, mapActions} from 'vuex'

	export default {
        name: 'navheader',
		data(){
			return {
                data: [{
                    name: '首页',
                    class: null,
                    url:'https://qgstudio.org/course/html/#/'
                }, {
                    name: '申报书',
                    class: null,
                    url:'https://qgstudio.org/course/html/declaration.html'
                }, {
                    name: '教学团队',
                    class: null,
                    url:'https://qgstudio.org/course/html/teacher.html'
                }, {
                    name: '课程概要',
                    class: null,
                    url:'https://qgstudio.org/course/html/course.html'
                }, {
                    name: '课程资源',
                    class: null,
                    url:'https://qgstudio.org/course/html/coursesource.html'
                }, {
                    name: '实践教学',
                    class: null,
                    url:'https://qgstudio.org/course/html/practical.html'
                }, {
                    name: '课程特色',
                    class: null,
                    url:'https://qgstudio.org/course/html/feature.html'
                }, {
                    name: '课程评价',
                    class: null,
                    url:'https://qgstudio.org/course/html/evaluate.html'
                }
                , {
                    name: '十佳授课教师风采',
                    class: null,
                    url:'https://qgstudio.org/course/html/topten.html'
                }, {
                    name: '活动剪影',
                    class: null,
                    url:'https://qgstudio.org/course/html/activitycutting.html'
                }],
                // index: this.clicknav
			}
        },
        props: {clicknav: {
            required: true
        }},
		computed: {

			// 从这里引入 vueX 的 state 的变量到组件中用
			...mapState('user' ,{
				// 这里用到的是 es6 的函数写法
                'user': state => {
                    return state
				},
            }),
        },

		methods:{
		
        },

        mounted() {
            if (this.clicknav != null) {
                this.data[this.clicknav].class = 'clicked-nav'
            }
            // console.log(this.index)
        },
		created: function () {

        },


	}
</script>
