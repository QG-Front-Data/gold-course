
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
</style>
<template>
    <Layout>
        <Header class="header">
            <navheader  v-bind:clicknav="index"></navheader>
        </Header>
        <Content>
           <div class="container">
               <div class="container-left">
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(10)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 10 ? 'isClicked' : null]">课程评价</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(11)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 11 ? 'isClicked' : null]">反馈与实践调查</span></h1>
                   </div>
               </div>
               <!-- 课程简介 -->
               <div class="container-right" v-if="chooseIndex == 10">
                   

                    <div class="img-container comment-img">
                       <img v-bind:src="getCommentIMG" alt="">
                    </div>
                    <div class="arrows-container" v-if="true" >
                        <div class="turn-page-container" >
                            <div>
                                <img :src="comments.leftArrow" @click="preComment" alt="">
                                <span>{{ comments.currentPage }}</span><span>/{{ comments.fileNameArr.length }}</span>
                                <img :src="comments.rightArrow" @click="nextComment" alt="">
                            </div>
                        </div>
                    </div>

               </div>
               <!-- end课程简介 -->
                <!-- 教学大纲   -->
                <div class="container-right" v-if="chooseIndex == 11">

                    <div class="img-container">
                       <img v-bind:src="getEvaluationIMG" alt="">
                    </div>
                    <div class="arrows-container" v-if="true" >
                        <div class="turn-page-container" >
                            <div>
                                <img :src="evaluations.leftArrow" @click="preEvaluation" alt="">
                                <span>{{ evaluations.currentPage }}</span><span>/{{ evaluations.fileNameArr.length }}</span>
                                <img :src="evaluations.rightArrow" @click="nextEvaluation" alt="">
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
		name: 'evaluate',
		components:{navheader},
		data(){
			return {
                index: 7,
                chooseIndex: 10,
                evaluations: {
                    fileNameArr: [
                        require('../style/evaluations/1.png'),
                        require('../style/evaluations/2.png'),
                        require('../style/evaluations/3.png'),
                        require('../style/evaluations/4.png'),
                        require('../style/evaluations/5.png'),
                        require('../style/evaluations/6.png'),
                        require('../style/evaluations/7.png'),
                        require('../style/evaluations/8.png'),
                        require('../style/evaluations/9.png'),
                    ],
                    currentImage: require('../style/evaluations/1.png'),
                    currentPage: '1',
                    leftArrow: require('../style/images/grey_left_icon.png'),
                    rightArrow: require('../style/images/blue_right_icon.png')
                },
                comments: {
                    fileNameArr: [
                        require('../style/comment/1.jpg'),
                        require('../style/comment/2.jpg'),
                        require('../style/comment/3.jpg'),
                        require('../style/comment/4.jpg'),
                        require('../style/comment/5.jpg'),
                        require('../style/comment/6.jpg'),
                        require('../style/comment/7.jpg'),
                        require('../style/comment/8.jpg'),
                        require('../style/comment/9.jpg'),
                    ],
                    currentImage: require('../style/comment/1.jpg'),
                    currentPage: '1',
                    leftArrow: require('../style/images/grey_left_icon.png'),
                    rightArrow: require('../style/images/blue_right_icon.png')
                },
                arrows: {
                    left: {
                        blue: require('../style/images/blue_left_icon.png'),
                        grey: require('../style/images/grey_left_icon.png'),
                    },
                    right: {
                        blue: require('../style/images/blue_right_icon.png'),
                        grey: require('../style/images/grey_right_icon.png'),
                    }
                },
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
            getEvaluationIMG() {
                return this.evaluations.currentImage;
            },
            getCommentIMG() {
                return this.comments.currentImage;
            }
        },
        watch: {

        },
		methods:{
            chooseTitle (index) {
                this.chooseIndex = index;
            },
            nextEvaluation () {
                let currentPage = parseInt(this.evaluations.currentPage) - 1,
                    len = this.evaluations.fileNameArr.length;
                if (currentPage == len - 1) {
                    // 到达最后一张的时候，并不会继续往下翻页
                    return;
                }
                this.evaluations.currentImage = this.evaluations.fileNameArr[currentPage + 1];
                this.evaluations.currentPage = (currentPage + 2).toString();
                this.arrowsStyle(1);
            },
            preEvaluation() {
                let currentPage = parseInt(this.evaluations.currentPage) - 1,
                    len = this.evaluations.fileNameArr.length;
                    // arrows = this.evaluations;
                if (currentPage == 0) {
                    // 到达第一张的时候，并不会继续往下翻页
                    return;
                }
                this.evaluations.currentImage = this.evaluations.fileNameArr[currentPage - 1];
                this.evaluations.currentPage = (currentPage).toString();
                this.arrowsStyle(1);
            },
            arrowsStyle(mode) {
                // 切换评论的按钮按钮样式
                // 1.是回馈表的
                // 2.是评论的
                let arrows;
                if (mode == 1) {
                    arrows = this.evaluations;
                } else {
                    arrows = this.comments;
                }
                switch(arrows.currentPage) {
                    case '1' : {
                        arrows.leftArrow = this.arrows.left.grey;  
                        break;
                    }
                    case this.evaluations.fileNameArr.length.toString() : {
                        arrows.rightArrow = this.arrows.right.grey;  
                        break;
                    }
                    default: {
                        arrows.rightArrow = this.arrows.right.blue;  
                        arrows.leftArrow = this.arrows.left.blue;  
                    }
                }
            },
            nextComment () {
                let currentPage = parseInt(this.comments.currentPage) - 1,
                    len = this.comments.fileNameArr.length;
                if (currentPage == len - 1) {
                    // 到达最后一张的时候，并不会继续往下翻页
                    return;
                }
                this.comments.currentImage = this.comments.fileNameArr[currentPage + 1];
                this.comments.currentPage = (currentPage + 2).toString();
                this.arrowsStyle(2);
            },
            preComment() {
                let currentPage = parseInt(this.comments.currentPage) - 1,
                    len = this.comments.fileNameArr.length;
                    // arrows = this.evaluations;
                if (currentPage == 0) {
                    // 到达第一张的时候，并不会继续往下翻页
                    return;
                }
                this.comments.currentImage = this.comments.fileNameArr[currentPage - 1];
                this.comments.currentPage = (currentPage).toString();
                this.arrowsStyle(2);
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
