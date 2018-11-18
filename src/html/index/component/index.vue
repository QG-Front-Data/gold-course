<style scoped src="../style/index.css"></style>
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
    height: 100vh;
}

.first-container {
    background: url("../style/images/bg.png");
    /* background-repeat: no-repeat; */
    /* background-size: 100% 100%; */
}
.second-container {
    background: url("../style/images/bg2.png");
    /* background-repeat: no-repeat; */
    /* background-size: 100% 100%; */
}
.third-container {
    background: url("../style/images/bg3.png");
    /* background-repeat: no-repeat; */
    /* background-size: 100% 100%; */
}
.four-container {
    background: url("../style/images/bg4.png");
}
.four-container,
.third-container,
.second-container,
.class-produce,
.first-container {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-size: cover; */
}
.first {
    position: absolute;
    top: 38%;

    margin: -92px 0 0 15%;

    color: #000;
}
.class-name {
    font-size: 6em;
}
.class {
    font-size: 7em;
    font-weight: 600;
}
.first button {
    margin: 152px 0 0 66px;
    border: none;
    border-radius: 2em;
    width: 54%;
    height: 78px;
    font-size: 2.3em;
    color: #fff;
    background-image: -webkit-gradient(linear, left top, right top, from(#39C3FF), to(#4F80FF));
    background-image: linear-gradient(to right, #39C3FF 0%, #4F80FF 100%);
    border: 4px solid #fff;
    outline: none;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    letter-spacing: 8px;
}
.class-produce {
    display: flex;

    padding: 68px 30px 20px 30px;

    /* background: url("../style/images/bg.png"); */

    align-items: center;
    flex-direction: column;
}
.class-title-cn {
    font-size: 5em;
    /* letter-spacing: 18px; */
}
.class-title-eng {
    font-size: 3em;
    /* letter-spacing: 4px; */
}
.class-title {
    text-align: center;
}
.teacher-context,
.video-context,
.class-context {
    display: flex;

    margin: 2vh 0 0 0;
    width: 84%;
    height: 60vh;

    justify-content: center;
}
.video-context {
    height: 64vh;
}
.class-context {
    border: 4px solid #000;
    border-radius: 2em;
}
.class-context-left {
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
    padding: 36px;

/* flex-grow: 1; */
    width: 50%;

    font-size: 2em;

    background: #fff;

    /* box-shadow: 0 0 12px 2px #aeabab; */
    /* border: 2px solid #000; */
}
.class-context-right {
    /* flex-grow: 1; */
    width: 50%;
}
.class-context-right img {
    width: 100%;
    height: 100%;
}
.video-context-left {
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
    padding: 24px 36px;
    width: 30%;

    background: #fff;
    overflow: auto;
}
.video-context-left h2 {
    font-size: 2.2em;

    color: #000;
}
.video-context-left > div {
    padding: 12px 0;

    font-size: 1.6em;
    letter-spacing: 4px;

    color: #000;

    border-bottom:1px dashed #000;
}
.video-context-right {
    flex-grow: 1;
}
.video-context-left button {
    margin: 14px 0 0 246px;
    border: 1px solid #fff;
    border-radius: 6px;
    width: 150px;
    height: 42px;

    font-size: 1.5em;

    color: #fff;
    background: none;
    outline: none;
    cursor: pointer;
    background: url('../style/images/download.png');
    background-size: 100% 100%;
}

/* .video-context-left button:hover  {
    background: url('../style/images/download.png');
    background-size: 100% 100%;

}
.video-context-left button:active {
    background: url('../style/images/download.png');
    background-size: 100% 100%;
} */
.video-context-right video {
    width: 100%;
    height: 100%;
}
.teacher-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 2px solid #000;
    padding: 10px;
    width: 23%;
    height: 200px;
    color: #000;
    -webkit-box-align: center;
    -ms-flex-align: center;
    /* align-items: center; */
    margin-right: 24px;
    background: #fff;
    overflow: auto;
}
.teacher-context {
    flex-wrap: wrap;
    justify-content: space-between;
    height: 69vh;
    justify-content: flex-start;
}
.teacher-item img {
    width: 35%;
    height: 90%;
}
.teacher-name {
    padding: 0 10px 0 16px;

    font-size: 2em;
    font-weight: 600;
}
.teacher-doctor {
    padding: 0 10px 0 26px;
}
.teacher-profession {
    padding: 0 10px 0 16px;

    font-size: 1.5em;
    font-weight: 600;
}
.botton-img {
    width: 40px;
    margin: 0 0 0 26px;
}
.clicked {
    font-weight: 600;
}
.down-arrow {
    width: 44px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -22px;
}
</style>
<template>
    <Layout>
        <Header class="header">
            <navheader  v-bind:clicknav="index"></navheader>
        </Header>
        <Content>
            <div class="container first-container">
                <div class="first">
                    <div class="class-name">C语言程序设计</div>
                    <div class="class">精品资源共享课</div>
                    <button @click="toanywork">在线测试
                        <img class="botton-img" src="../style/images/anywork@3x.png" >
                    </button>
                </div>
                <img class="down-arrow" src="../style/images/down-arrow.png">
            </div>
            <div class="container class-produce second-container">
                <div class="class-title">
                    <p class="class-title-cn">课程简介</p>
                    <p class="class-title-eng">course outline</p>
                </div>
                <div class="class-context">
                    <div class="class-context-left">
                        <p>C语言程序设计是高等院校计算机专业及相关专业重要的专业基础课，其目的是培养学生的程序设计理念、掌握程序设计的基础方法，为后续课程打下坚实基础</p>
                        <br>
                        <p>我们在多年讲授和使用C语言编程的基础上，深切感受到学习C语言程序设计不仅要掌握C语言的语法要点和编程规范，更重要的是要领会结构化程序设计思想，综合运用C语言知识开发大型程序，为此，我们在原有讲授的基础上，增加了“软件开发过程的内容”，希望通过程序设计，用一个较大规范的实例掌握运用软件工程的思想进行程序开发的一般过程。</p>
                    </div>
                    <div class="class-context-right">
                        <img src="../style/images/produce.png">
                    </div>
                </div>
            </div>
            <div class="container class-produce third-container">
                <div class="class-title">
                    <p class="class-title-cn">课程资源</p>
                    <p class="class-title-eng">course resources</p>
                </div>
                <div class="video-context">
                    <div class="video-context-left" >
                        <h2>课程内容</h2>
                        <div v-for="(item, index) in chapter" v-bind:key="item.chapterName" :class="item.class" v-on:click="changeVideo(index)">
                            <!-- <div v-on:click="changeVideo(index)"> -->
                                <span class="clicked">{{item.chapterName}}</span> 
                            &nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.name}}</span> 
                            <!-- </div> -->
                            
                        </div>
                        <!-- <div>第一章 C语言概述</div>
                        <div>第二章 数据类型</div>
                        <div>第三章 顺序结构</div>
                        <div>第四章 选择结构</div>
                        <div>第五章 循环结构</div> -->
                        <button>
                            <!-- <img src="../style/images/download.png"> -->
                        </button>
                    </div>
                    <div class="video-context-right">
                        <video controls></video>
                    </div>
                </div>
            </div>
            <div class="container class-produce four-container">
                <div class="class-title">
                    <p class="class-title-cn">师资团队</p>
                    <p class="class-title-eng">our reachers</p>
                </div>
                <div class="teacher-context">
                    <div class="teacher-item">
                        <img src="../style/images/xie.png">
                        <div class="teacher-item-container">
                            <div class="teacher-name">谢光强</div>
                            <div class="teacher-doctor">博士、副教授</div>
                            <div class="teacher-doctor">广东工业大学计算机学院副院长</div>
                            <div class="teacher-doctor">中国人工智能学会科普工作委员会委员</div>
                            <div class="teacher-profession">主要研究领域：</div>
                            <div class="teacher-doctor">人工智能、移动互联网、数据挖掘</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/wu.png">
                        <div class="teacher-item-container">
                            <div class="teacher-name">吴伟民</div>
                            <div class="teacher-doctor">教授、研究生导师</div>
                            <div class="teacher-doctor">广东工业大学计算机学院副院长</div>
                            <div class="teacher-doctor">广东省计算机学会常务理事、图像图形分会秘书长</div>
                            <div class="teacher-profession">主要研究领域：</div>
                            <div class="teacher-doctor">数据结构与算法、可视计算与虚拟机、系统介入与信息安全</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/an.png">
                        <div class="teacher-item-container">
                            <div class="teacher-name">曾安</div>
                            <div class="teacher-doctor">教授、博士</div>
                            <div class="teacher-doctor">广东工业大学计算机学院任教</div>
                            <div class="teacher-doctor">IEEE会员</div>
                            <div class="teacher-profession">主要研究领域：</div>
                            <div class="teacher-doctor">人工智能、数据挖掘</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/bo.png">
                        <div class="teacher-item-container">
                            <div class="teacher-name">谢国波</div>
                            <div class="teacher-doctor">教授、硕士生导师</div>
                            <div class="teacher-doctor">广东工业大学教学科研工作者</div>
                            <div class="teacher-doctor">广东省高端厨房电器企业重点实验室负责人</div>
                            <div class="teacher-profession">主要研究领域：</div>
                            <div class="teacher-doctor">混沌保密通信，云计算与大数据，基于机器视觉的高精度检测和测量</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/wei.png">
                        <div class="teacher-item-container">
                            <div class="teacher-name">林伟</div>
                            <div class="teacher-doctor">副教授</div>
                            <div class="teacher-doctor">广东工业大学计算机学院教师</div>
                            <!-- <div class="teacher-doctor">中国人工智能学会科普工作委员会委员</div> -->
                            <div class="teacher-profession">主要研究领域：</div>
                            <div class="teacher-doctor">计算机管理系统，嵌入式系统应用</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/yang.png">
                        <div class="teacher-item-container">
                            <div class="teacher-name">李杨</div>
                            <div class="teacher-doctor">博士，副教授</div>
                            <div class="teacher-doctor">广东工业大学计算机学院计算机科学系副主任</div>
                            <div class="teacher-doctor">广东省计算机学会大数据专业委员会会员</div>
                            <div class="teacher-profession">主要研究领域：</div>
                            <div class="teacher-doctor">人工智能、移动互联网、数据挖掘</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/zhu.png">
                        <div class="teacher-item-container">
                            <div class="teacher-name">朱清华</div>
                            <div class="teacher-doctor">博士、副教授</div>
                            <div class="teacher-doctor">广东工业大学计算机学院硕士生导师</div>
                            <div class="teacher-doctor">IEEE 高级会员，ACM会员</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/chen.png">
                        <div class="teacher-item-container">
                            <div class="teacher-name">陈云华</div>
                            <div class="teacher-doctor">博士</div>
                            <div class="teacher-doctor">广东工业大学计算机学院讲师</div>
                            <div class="teacher-doctor">CCF会员</div>
                            <div class="teacher-profession">主要研究领域：</div>
                            <div class="teacher-doctor">智能视频监控、面部表情识别、图像超分辨率、智能与软计算</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/ying.jpg">
                        <div class="teacher-item-container">
                            <div class="teacher-name">曾颖</div>
                            <div class="teacher-doctor">十佳青年授课教师</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/xuan.jpg">
                        <div class="teacher-item-container">
                            <div class="teacher-name">孙宣东</div>
                            <div class="teacher-doctor">ACM指导教师</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/hui.jpg">
                        <div class="teacher-item-container">
                            <div class="teacher-name">汪明慧</div>

                            <div class="teacher-profession">主要研究领域：</div>
                            <div class="teacher-doctor">基于可信计算技术的自助服务系统终端可信环境构建研究</div>
                        </div>
                    </div>
                    <div class="teacher-item">
                        <img src="../style/images/lu.jpg">
                        <div class="teacher-item-container">
                            <div class="teacher-name">路璐</div>
                            <div class="teacher-doctor">十佳青年授课教师</div>
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
		name: 'index',
		components:{navheader},
		data(){
			return {
                index: 0,
                chapter: [
                    {
                        chapterName: '第一章',
                        name: 'C语言概述',
                        class: 'clicked'
                    }, {
                        chapterName: '第二章',
                        name: '基本数据类型',
                        class: null
                    }, {
                        chapterName: '第三章',
                        name: '顺序结构',
                        class: null
                    }, {
                        chapterName: '第四章',
                        name: '选择结构',
                        class: null
                    }, {
                        chapterName: '第五章',
                        name: '循环结构',
                        class: null
                    }, {
                        chapterName: '第六章',
                        name: '利用数组处理数据',
                        class: null
                    }, {
                        chapterName: '第七章',
                        name: '函数实现模块化',
                        class: null
                    }, {
                        chapterName: '第八章',
                        name: '指针的运用',
                        class: null
                    }, {
                        chapterName: '第九章',
                        name: '自定义数据类型',
                        class: null
                    }
                ]
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
            changeVideo (index) {
                for (let i = 0; i < 9; i++) {
                    this.chapter[i].class = null
                }
                this.chapter[index].class = 'clicked'
            },
            toanywork () {
                window.open('https://qgstudio.org/anywork/html/login.html')
            }
		},
		created: function () {

        },


	}
</script>
