
<style>
.footer {
    font-size: 1.3em;
    text-align: center;

    color: #fff;
    background-color: #26b9b1;
}
.header {
    display: flex;

    position: fixed;
    z-index: 99;

    width: 100%;
    min-width: 1217px;

    background: rgba(81, 90, 110, .8);

    align-items: center;
}
.footer-span {
    margin: 0 0 0 94px;
}
.container {
    position: relative;

    width: 100%;
    min-height: 100vh;

    background: url('../style/images/bg5.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-right,
.container-left {
    height: 84vh;
    background: #fff;
    border: 2px solid #000;
    border-radius: 2em;
    margin: 16px 0 0 0px;
}
.container-left {
    width: 20%;
    padding: 36px 0 0 24px;
    color:#000;
}
.container-right {
    width: 62%;
    margin-left: 56px;
    color:#000;
        padding: 30px;
        overflow: auto;
}
.pointer {
    color: #000;
    background: #000;
    border-radius: 5em;
    font-size: 0.1em;
    margin: 0 20px 0 0;
    letter-spacing: 0;
}
.title-choose {
        display: flex;
    align-items: center;
    letter-spacing: 6px;
    /* padding: 0 0 0 24px; */
}
.teacher-name {
    display: flex;
    flex-flow: wrap;
    padding: 20px 0 0px 22px;
    height: 166px;
}
.teacher-name div {
    width: 60px;
    text-align: center;
    font-size: 1.3em;
    cursor: pointer;
}
.isClicked {
    /* text-decoration: underline; */
    border-bottom: 2px solid #000;
}
.title-commom {
    margin: 20px 0;
    cursor:pointer;
}
.image-container {
    width: 160px;
    height: 20vh;
    float: right;
    margin: 36px 40px 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
}
.image-container img {
    width: 94%;
    height: 94%;
}
.person-introduce {
    color:#26b9b1;
    margin: 10px 0;
    font-size: 1.3em;
}
.container-right h1{
 font-size: 2.5em;
}
.person-context {
    text-indent:2em;
}

.person-page {
    padding: 0 0 0 2em;
}
.learn {
    margin: 24px;
    font-size: 1.4em;
    display: inline-block;
}
</style>
<template>
    <Layout>
        <Header class="header">
            <navheader  v-bind:clicknav="index"></navheader>
        </Header>
        <Content>
           <div class="container">
               <div class="container-left">
                   <div >
                       <h1 class="title-choose title-commom" @click="chooseTitle(10)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 10 ? 'isClicked' : null]">活动剪影</span></h1>
                   </div>
               </div>
               <!-- 课程简介 -->
               <div class="container-right" v-if="chooseIndex == 10">
                    <div class="img-container">
                       <img v-bind:src="getTeachIMG" alt="">
                    </div>
                    <div class="arrows-container" v-if="true" >
                        <div class="turn-page-container" >
                            <div>
                                <img :src="teachDisplay.leftArrow" @click="preImage" alt="">
                                <span>{{ teachDisplay.currentPage }}</span><span>/{{ teachDisplay.images.length }}</span>
                                <img :src="teachDisplay.rightArrow" @click="nextImage" alt="">
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </Content>
        <Footer class="footer">
            <span>@版权所有</span>
            <span class="footer-span">广东工业大学计算机学院QG工作室</span>
        </Footer>
    </Layout>
</template>
<script>
	
import {mapState, mapActions} from 'vuex'
import navheader from '../../../components/navheader.vue'
	export default {
		name: 'activitycutting',
		components:{
            navheader
        },
		data() {
			return {
                index: 9,
                chooseIndex: 10,
                teachDisplay: {
                    images: [
                        require('../style/images/1.jpg'),
                        require('../style/images/2.jpg'),
                        require('../style/images/3.jpg'),
                        require('../style/images/4.jpg'),
                        require('../style/images/5.jpg'),
                        require('../style/images/6.jpg'),
                        require('../style/images/7.jpg'),
                        require('../style/images/8.jpg'),
                        require('../style/images/9.jpg'),
                        require('../style/images/10.jpg'),
                        require('../style/images/11.jpg'),
                        require('../style/images/12.jpg'),
                        require('../style/images/13.jpg'),
                        require('../style/images/14.jpg'),
                        require('../style/images/15.jpg'),
                        require('../style/images/16.jpg'),
                        require('../style/images/17.jpg'),
                        require('../style/images/18.jpg'),
                        require('../style/images/19.jpg'),
                        require('../style/images/20.jpg'),
                    ],
                    currentPage: 1,
                    currentImage: require('../style/images/1.jpg'),
                    leftArrow: require('../style/images/left_grey.png'),
                    rightArrow: require('../style/images/right_blue.png')
                },
                arrows: {
                    left: {
                        blue: require('../style/images/left_blue.png'),
                        grey: require('../style/images/left_grey.png'),
                    },
                    right: {
                        blue: require('../style/images/right_blue.png'),
                        grey: require('../style/images/right_grey.png'),
                    }
                }
			}
        },
        mounted() {

        },
		computed: {
			// 从这里引入 vueX 的 state 的变量到组件中用
			...mapState('user' ,{
				// 这里用到的是 es6 的函数写法
                'user': state => {
                    return state
				},
            }),
            getTeachIMG() {
                return this.teachDisplay.currentImage;
            }
		},
		methods:{
            chooseTitle (index) {
                this.chooseIndex = index
            },
            nextImage() {
                let currentPage = parseInt(this.teachDisplay.currentPage) - 1,
                    len = this.teachDisplay.images.length;
                if (currentPage == len - 1) {
                    // 到达最后一张的时候，并不会继续往下翻页
                    return;
                }
                this.teachDisplay.currentImage = this.teachDisplay.images[currentPage + 1];
                this.teachDisplay.currentPage = (currentPage + 2).toString();
                this.arrowsStyle();
            },
            preImage() {
                let currentPage = parseInt(this.teachDisplay.currentPage) - 1,
                    len = this.teachDisplay.images.length;
                    // arrows = this.evaluations;
                if (currentPage == 0) {
                    // 到达第一张的时候，并不会继续往下翻页
                    return;
                }
                this.teachDisplay.currentImage = this.teachDisplay.images[currentPage - 1];
                this.teachDisplay.currentPage = (currentPage).toString();
                this.arrowsStyle();
            },
            arrowsStyle() {
                // 切换评论的按钮按钮样式
                let displayObj = this.teachDisplay,
                    len = displayObj.images.length.toString();
                switch(displayObj.currentPage) {
                    case '1' : {
                        displayObj.leftArrow = this.arrows.left.grey;  
                        break;
                    }
                    case len : {
                        displayObj.rightArrow = this.arrows.right.grey;  
                        break;
                    }
                    default: {
                        displayObj.rightArrow = this.arrows.right.blue;  
                        displayObj.leftArrow = this.arrows.left.blue;  
                    }
                }
            },
		},
		created: function () {

        },


	}
</script>

<style scoped>
.img-container {
    width: 100%;
}
.img-container::after {
    content: "";
    clear: both;
    display: block;
}
.img-container>img {
    display: block;
    width: 80%;
    margin: 0 auto;
}
.turn-page-container>div {
    display: flex;
    float: right;
    width: 200px;
    height: 21px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
}
.turn-page-container>div>img {
    cursor: pointer;
    margin: 0 15px;
    cursor: pointer;
}
.comment-img img {
    width: 80%;
}
</style>