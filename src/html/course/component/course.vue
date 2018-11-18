
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
                       <h1 class="title-choose title-commom" @click="chooseTitle(10)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 10 ? 'isClicked' : null]">课程简介</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(11)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 11 ? 'isClicked' : null]">教学大纲</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(12)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 12 ? 'isClicked' : null]">学习指南</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(13)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 13 ? 'isClicked' : null]">课程安排</span></h1>
                   </div>
               </div>
               <!-- 课程简介 -->
               <div class="container-right" v-if="chooseIndex == 10">
                   
                   <p class="person-context">本课程是计算机学院各专业必修的专业基础课，课程以课堂教学为主，辅以实验教学，使学生通过本课程的学习后，能全面掌握编程语言所有主要的语言元素，包括各数据类型，流程控制和标准函数库，并熟练地掌握结构化程序设计和变参数的函数功能设计，具备初步的高级语言程序设计能力。</p>
                   
               </div>
               <!-- end课程简介 -->
                <!-- 教学大纲   -->
                <div class="container-right" v-if="chooseIndex == 11">
                   
                   <!-- <div class="image-container">
                       <img src="../style/images/chen.png">
                   </div> -->
                   <h1>广东工业大学计算机学院教学改革项目列表（省级、校级）： </h1>
                   
                   <p class="person-introduce">一、课程简介</p>
                   <p class=" person-context">
                        本课程是计算机学院各专业必修的专业基础课，课程以课堂教学为主，辅以实验教学，使学生通过本课程的学习后，能全面掌握编程语言所有主要的语言元素，包括各数据类型，流程控制和标准函数库，并熟练地掌握结构化程序设计和变参数的函数功能设计，具备初步的高级语言程序设计能力。
                    </p>
                   <p class="person-introduce">二、课程目标与毕业要求</p>
                   <p class=" person-context">
                        1.	了解面向过程的程序设计技术和方法，掌握C语言的基本语法、基本语句、基本控制结构以及自顶向下结构化程序设计的基本方法，具备初步的高级语言程序设计能力，能够意识到算法、良好的程序、设计风格以及实践在本课程学习中的重要性。（支撑毕业要求指标点1.2）
                    </p>
                    <p class=" person-context">
                        2.	具备一定的软件开发能力，能够熟练使用编程语言，针对具体问题进行分析和编码，用编程语言设计程序解决实际问题。（支撑毕业要求指标点3.3）
                    </p>
                    <p class=" person-context">
                        3.	具备熟练应用编程语言集成环境和开发工具进行程序的编写、编译与调试的能力，具备一定的自学能力和能够利用计算机网络获取新知识、新技术的能力，为将来从事软件研制开发打下坚实的基础。（支撑毕业要求指标点5.1）
                    </p>
                    <p class="person-introduce">三 、教材及参考书目</p>
                   <p class=" person-page">
                        [1] 谭浩强编，《C程序设计（第四版）》，清华大学出版社，2010年出版<br>
                        [2] 谭浩强，《C程序设计题解与上机指导（第四版）》，清华大学出版社，2010年出版<br>
                        [3] 谭浩强，《C程序设计试题汇编》，清华大学出版社，2004年出版<br>

                    </p>
                    <a href="https://qgstudio.org/course/resources/2.doc" class="learn" download>教学大纲下载</a>
               </div>
               <!-- end教学大纲   -->
               <!-- 学习指南-->
                <div class="container-right" v-if="chooseIndex == 12">
                     <p class="person-introduce">一、课程特点</p>
                    <p class=" person-context">
                        本课程是计算机学院各专业必修的专业基础课，课程以课堂教学为主，辅以实验教学，使学生通过本课程的学习后，能全面掌握编程语言所有主要的语言元素，包括各数据类型，流程控制和标准函数库，并熟练地掌握结构化程序设计和变参数的函数功能设计，具备初步的高级语言程序设计能力。
                    </p>
                     <p class="person-introduce">二、课程目标（要求）</p>
                    <p class=" person-context">
                        了解面向过程的程序设计技术和方法，掌握C语言的基本语法、基本语句、基本控制结构以及自顶向下结构化程序设计的基本方法，具备初步的高级语言程序设计能力，能够意识到算法、良好的程序、设计风格以及实践在本课程学习中的重要性。
                    </p>
                    <p class=" person-context">
                        具备一定的软件开发能力，能够熟练使用编程语言，针对具体问题进行分析和编码，用编程语言设计程序解决实际问题。
                    </p>
                    <p class=" person-context">
                        具备熟练应用编程语言集成环境和开发工具进行程序的编写、编译与调试的能力，具备一定的自学能力和能够利用计算机网络获取新知识、新技术的能力，为将来从事软件研制开发打下坚实的基础。
                    </p>

                    <a href="https://qgstudio.org/course/resources/learn.docx" class="learn" download>学习指南下载</a>
               </div>
               <!-- end学习指南  -->
               <!--课程规划-->
                <div class="container-right" v-if="chooseIndex == 13">
                    <a href="https://qgstudio.org/course/resources/schedual.doc" class="learn" download>课程规划下载</a>
               </div>
               <!-- end课程规划  -->
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
		name: 'course',
		components:{navheader},
		data(){
			return {
                index: 3,
                chooseIndex: 10,


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
		},
		methods:{
            chooseTitle (index) {
                    this.chooseIndex = index

            }
		},
		created: function () {

        },


	}
</script>
