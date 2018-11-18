
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
    min-width: 1200px;
    background: url('../style/images/bg5.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-right {
    height: 84vh;
    background: #fff;
    margin: 16px 0 0 0px;
    border: 2px solid #000;
    border-radius: 2em;
}
.container-left {
    height: 84vh;
    margin: 16px 0 0 0px;
    width: 20%;
    color:#000;
    overflow: hidden;
    display: flex;
    flex-direction: column;

}
.container-left-top {
    width: 100%;
    border: 2px solid #000;
    border-radius: 2em;
    background-color: #fff;
    height: 68%;
}

.container-left-top div {
    width: 85%;
    border-bottom: 2px dashed #000;
    margin: 0 auto;
    margin-top: 15px;
}
.container-left-bottom {
    width: 100%;
    background: #fff;
    margin: 16px 0 0 0px;
    border: 2px solid #000;
    border-radius: 2em;
    flex: 1;
}
.container-left-bottom section {
    width: 85%;
    margin: 0 auto;
}
.container-right {
    width: 62%;
    margin-left: 56px;
    color:#000;
    padding: 30px;
    overflow: auto;
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
    color: blue;
}
.title-commom {
    margin: 15px 0;
    cursor:pointer;
    font-size: 1.5em;
    font-weight: 500;
    padding-left: 10px;
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
.null {
    font-size: 1em;
}
.video {
        width: 86%;
}
.sources-container {
    display: flex;
    flex-direction: column;
   
}
.sources-container div {
    margin: 0 10px;
}
.sources-container a{
    font-size: 1.4em;
    line-height: 2em;
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
                   <div class="container-left-top">
                       <section>
                           <div>
                                <h1 class="title-choose title-commom" @click="chooseTitle(10)"><span v-bind:class="[chooseIndex == 10 ? 'isClicked' : 'null']">一、C语言概述</span></h1>
                            </div>
                            <div>
                                <h1 class="title-choose title-commom" @click="chooseTitle(11)"><span v-bind:class="[chooseIndex == 11 ? 'isClicked' : 'null']">二、基本数据类型</span></h1>
                            </div>
                            <div>
                                <h1 class="title-choose title-commom" @click="chooseTitle(12)"><span v-bind:class="[chooseIndex == 12 ? 'isClicked' : 'null']">三、顺序结构</span></h1>
                            </div>
                            <div>
                                <h1 class="title-choose title-commom" @click="chooseTitle(13)"><span v-bind:class="[chooseIndex == 13 ? 'isClicked' : 'null']">四、选择结构</span></h1>
                            </div>
                            <div>
                                <h1 class="title-choose title-commom" @click="chooseTitle(14)"><span v-bind:class="[chooseIndex == 14 ? 'isClicked' : 'null']">五、循环结构</span></h1>
                            </div>
                            <div>
                                <h1 class="title-choose title-commom" @click="chooseTitle(15)"><span v-bind:class="[chooseIndex == 15 ? 'isClicked' : 'null']">六、利用数组处理数据</span></h1>
                            </div>
                            <div>
                                <h1 class="title-choose title-commom" @click="chooseTitle(16)"><span v-bind:class="[chooseIndex == 16 ? 'isClicked' : 'null']">七、函数实现模块化</span></h1>
                            </div>
                            <div>
                                <h1 class="title-choose title-commom" @click="chooseTitle(17)"><span v-bind:class="[chooseIndex == 17 ? 'isClicked' : 'null']">八、指针的运用</span></h1>
                            </div>
                            <div style="border:none;">
                                <h1 class="title-choose title-commom" @click="chooseTitle(18)"><span v-bind:class="[chooseIndex == 18 ? 'isClicked' : 'null']">九、自定义数据类型</span></h1>
                            </div>
                       </section>
                   </div>
                   <div class="container-left-bottom">
                       <section>
                           <h1 class="title-choose title-commom" style="margin-bottom: 5px;"><h1 class="null">资源下载</h1></h1>
                            <div class="sources-container">
                                <div><a href='https://qgstudio.org/course/resources/teacher.zip' download>教材下载</a></div>
                                <div><a href='https://qgstudio.org/course/resources/source.zip' download>软件包下载</a></div>
                                <div><a href='https://qgstudio.org/course/resources/AnyviewC.rar' download>AnyviewC下载</a></div>
                                <div><a href='https://qgstudio.org/course/resources/AnyWork.apk' download>anyworkApp安装包下载</a></div>
                                <div><a href='https://qgstudio.org/course/resources/tc.rar' download>TC下载</a></div>
                            </div>
                       </section>
                   </div>
               </div>
               <!-- 第一章 -->
               <div class="container-right" v-if="chooseIndex == 10">
                   <h1>C语言概述</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        C语言告诉和算法初体验

                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        理解编程语言的特点;初步掌握在计算机上运行程序的方法；理解算法的概念和特性；能够用N-S流程图来表示算法。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[0].arrows.left" alt="" @click="prePage(0)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 0)">
                                <div v-for="(item, index) in chaperArr[0].renderArr" :number="index + chaperArr[0].currentIndex" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[0].arrows.right" alt="" @click="nextPage(0)">
                    </div>
                    <video class="video" controls :src="chaperArr[0].currentUrl"></video>

               </div>
               <!-- end第一章 -->

               <!-- 第二章 -->
               <div class="container-right" v-if="chooseIndex == 11">
                   <h1>数据类型</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        数据类型、运算符与表达式、简单程序设计

                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        在掌握基本数据类型的表示方法、运算符和表达式概念的基础上，能够进行简单的程序编写。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[1].arrows.left" alt="" @click="prePage(1)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 1)">
                                <div v-for="(item, index) in chaperArr[1].renderArr" :number="index + chaperArr[1].currentIndex" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[1].arrows.right" alt="" @click="nextPage(1)">
                    </div>
                    <video class="video" controls :src="chaperArr[1].currentUrl"></video>

               </div>
               <!-- end第二章 -->

               <!-- 第三章 -->
               <div class="container-right" v-if="chooseIndex == 12">
                   <h1>顺序结构</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        顺序程序设计

                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        理解基本的语句，如控制语句、赋值语句等；能够结合输入输出语句设计编写简单的程序。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[2].arrows.left" alt="" @click="prePage(2)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 2)">
                                <div v-for="(item, index) in chaperArr[2].renderArr" :number="index" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[2].arrows.right" alt="" @click="nextPage(2)">
                    </div>
                    <video class="video" controls :src="chaperArr[2].currentUrl"></video>

               </div>
               <!-- end第三章 -->

               <!-- 第四章 -->
               <div class="container-right" v-if="chooseIndex == 13">
                   <h1>选择结构</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        选择结构程序设计

                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        在了解关系运算符和关系表达式，逻辑运算符和逻辑表达式的基础上，能够编写具有选择结构的程序。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[3].arrows.left" alt="" @click="prePage(3)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 3)">
                                <div v-for="(item, index) in chaperArr[3].renderArr" :number="index" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[3].arrows.right" alt="" @click="nextPage(3)">
                    </div>
                    <video class="video" controls :src="chaperArr[3].currentUrl"></video>

               </div>
               <!-- end第四章 -->

                <!-- 第五章 -->
               <div class="container-right" v-if="chooseIndex == 14">
                   <h1>循环结构</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        循环控制

                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        能够区别多种循环，具备实现循环的能力，编写具有循环嵌套的程序。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[4].arrows.left" alt="" @click="prePage(4)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 4)">
                                <div v-for="(item, index) in chaperArr[4].renderArr" :number="index" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[4].arrows.right" alt="" @click="nextPage(4)">
                    </div>
                    <video class="video" controls :src="chaperArr[4].currentUrl"></video>

               </div>
               <!-- end第五章 -->

                <!-- 第六章 -->
               <div class="container-right" v-if="chooseIndex == 15">
                   <h1>利用数组处理数据</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        数组
                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        能够定义和引用一维数组、二维数组和字符数组；能够利用数组来设计相关程序。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[5].arrows.left" alt="" @click="prePage(5)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 5)">
                                <div v-for="(item, index) in chaperArr[5].renderArr" :number="index + chaperArr[5].currentIndex" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[5].arrows.right" alt="" @click="nextPage(5)">
                    </div>
                    <video class="video" controls :src="chaperArr[5].currentUrl"></video>

               </div>
               <!-- end第六章 -->
                <!-- 第七章 -->
               <div class="container-right" v-if="chooseIndex == 16">
                   <h1>函数实现模块化</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        函数

                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        掌握函数的定义和调用方法、变量的作用域和存储方式等概念；理解函数调用时参数传递的过程；能够区分值传递方式和地址传递；能够用函数实现模块化的程序设计。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[6].arrows.left" alt="" @click="prePage(6)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 6)">
                                <div v-for="(item, index) in chaperArr[6].renderArr" :number="index" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[6].arrows.right" alt="" @click="nextPage(6)">
                    </div>
                    <video class="video" controls :src="chaperArr[6].currentUrl"></video>

               </div>
               <!-- end第七章 -->
                <!-- 第八章 -->
               <div class="container-right" v-if="chooseIndex == 17">
                   <h1>指针的运针</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        指针

                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        能够理解和使用指针变量；能够设计通过指针引用数组和字符串以及指向函数的指针的程序。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[7].arrows.left" alt="" @click="prePage(7)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 7)">
                                <div v-for="(item, index) in chaperArr[7].renderArr" :number="index" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[7].arrows.right" alt="" @click="nextPage(7)">
                    </div>
                    <video class="video" controls :src="chaperArr[7].currentUrl"></video>

               </div>
               <!-- end第八章 -->
                <!-- 第九章 -->
               <div class="container-right" v-if="chooseIndex == 18">
                   <h1>数据类型</h1>
                    <p class="person-introduce">教育内容</p>
                    <p class=" person-context">
                        结构体与共用体
                    </p>
                    <p class="person-introduce">学生学习任务</p>
                    <p class=" person-context">
                        能够定义和使用结构体类型变量；能够定义和使用结构体数组；初步掌握用指针处理链表的方法；了解共用体和枚举类型的概念。

                    </p>
                    <p class="person-introduce">教学视频</p>
                    <div class="choose-chaper-container">
                        <img :src="chaperArr[8].arrows.left" alt="" @click="prePage(8)">
                        <div class="chaper-container">
                            <div @click="switchVideo($event, 8)">
                                <div v-for="(item, index) in chaperArr[8].renderArr" :number="index" :class="item.class">{{ item.name }}</div>
                            </div>
                        </div>
                        <img :src="chaperArr[8].arrows.right" alt="" @click="nextPage(8)">
                    </div>
                    <video class="video" controls :src="chaperArr[8].currentUrl"></video>

               </div>
               <!-- end第一章 -->
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
		name: 'coursesource',
		components:{navheader},
		data(){
			return {
                index: 4,
                chooseIndex: 10,
                arrows: {
                    left: {
                        blue: require('../style/images/left_blue.png'),
                        grey: require('../style/images/left_grey.png')
                    },
                    right: {
                        blue: require('../style/images/right_blue.png'),
                        grey: require('../style/images/right_grey.png')
                    }
                },
                // 数组的每一项的下标代表章数 - 1， 在每个项对象中的sections数组代表着节数，currentIndex是当前的第一个元素的下标
                // 只需要填写sections中的内容，就是具体那一章的每一节的内容来，下标是节数 - 1
                chaperArr: [
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '3-2-4 字符型数据',
                            url: '123',
                            class: 'choose-active'
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第1节',
                            url: '',
                        },
                        {
                            name: '第2节',
                            url: '',
                        },
                        {
                            name: '第3节',
                            url: '',
                        },
                        {
                            name: '第4节',
                            url: '',
                        },
                    ]
                },
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第1节',
                            url: '',
                        },
                        {
                            name: '第2节',
                            url: '',
                        },
                        {
                            name: '第3节',
                            url: '',
                        },
                        {
                            name: '第4节',
                            url: '',
                        },
                    ]
                },
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '3-2-4 字符型数据',
                            url: '3-2-4.mp4'
                        },
                        {
                            name: '3-2-5 浮点型数据',
                            url: '3-2-5.mp4'
                        },
                        {
                            name: '3-2-6 怎么确定常量的类型',
                            url: '3-2-6.mp4'
                        },
                        {
                            name: '3-2-7-1 运算符和表达式（上）',
                            url: '3-2-7-1.mp4',
                        },
                        {
                            name: '3-2-7-2 运算符和表达式（下）',
                            url: '3-2-7-2.mp4',
                        },
                        {
                            name: '3-3-1 C语句的作用和分类',
                            url: '3-3-1.mp4',
                        },
                        {
                            name: '3-3-2 最基本的语句-赋值语句',
                            url: '3-3-2.mp4',
                        },
                        {
                            name: '3-4-2 数据输入输出举例以及有关概念',
                            url: '3-4-2.mp4',
                        },
                        {
                            name: '3-4-3 用printf函数输出数据.',
                            url: '3-4-3.mp4',
                        },
                        {
                            name: '3-4-4 用scanf函数输入数据',
                            url: '3-4-4.mp4',
                        },
                        {
                            name: '3-4-5 字符串数据的输入与输出',
                            url: '3-4-5.mp4',
                        },
                    ]
                },
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '4-2-1 用if语句实现选择结构举例',
                            url: '4-2-1.mp4',
                        },
                        {
                            name: '4-2-2 if语句的一般形式',
                            url: '4-2-2.mp4',
                        },
                        {
                            name: '4-3 关系运算符和关系表达式',
                            url: '4-3.mp4',
                        },
                        {
                            name: '4-4-1 逻辑运算符及其优先次序',
                            url: '4-4-1.mp4',
                        },
                        {
                            name: '4-4-2 逻辑表达式',
                            url: '4-4-2.mp4',
                        },
                        {
                            name: '4-5 条件运算符和条件表达式',
                            url: '4-5.mp4',
                        },
                        {
                            name: '4-6 选择结构的嵌套',
                            url: '4-6.mp4',
                        },
                        {
                            name: '4-7 用switch语句实现多分支选择结构',
                            url: '4-7.mp4',
                        },
                        {
                            name: '4-8 选择结构程序综合举例',
                            url: '4-8.mp4'
                        }
                    ]
                },
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第1节',
                            url: '',
                        },
                        {
                            name: '第2节',
                            url: '',
                        },
                        {
                            name: '第3节',
                            url: '',
                        },
                        {
                            name: '第4节',
                            url: '',
                        },
                    ]
                },
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '第n节',
                            url: '',
                            class: 'choose-active',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第1节',
                            url: '',
                        },
                        {
                            name: '第2节',
                            url: '',
                        },
                        {
                            name: '第3节',
                            url: '',
                        },
                        {
                            name: '第4节',
                            url: '',
                        },
                    ]
                },
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第1节',
                            url: '',
                        },
                        {
                            name: '第2节',
                            url: '',
                        },
                        {
                            name: '第3节',
                            url: '',
                        },
                        {
                            name: '第4节',
                            url: '',
                        },
                    ]
                },
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第n节',
                            url: '',
                        },
                        {
                            name: '第1节',
                            url: '',
                        },
                        {
                            name: '第2节',
                            url: '',
                        },
                        {
                            name: '第3节',
                            url: '',
                        },
                        {
                            name: '第4节',
                            url: '',
                        },
                    ]
                },
                {
                    currentIndex: 0,
                    renderArr: [],
                    currentUrl: '',
                    arrows: {
                        left: require('../style/images/left_grey.png'),
                        right: require('../style/images/right_blue.png')
                    },
                    sections: [
                        {
                            name: '第3节',
                            url: '',
                        },
                        {
                            name: '第4节',
                            url: '',
                        },
                    ]
                },]
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
            },
            // chaperNumber 是章节数 - 1.
            nextPage(chaperNumber) {
                let chaper = this.chaperArr[chaperNumber],
                    sectionLen = chaper.sections.length,
                    currentIndex = chaper.currentIndex,
                    renderArr = [],
                    i;
                if (sectionLen <= 4) {
                    return;
                }
                if (currentIndex == sectionLen - 4) {
                    // 当翻到最后一页的时候
                    // 这里有一个箭头的切换颜色效果
                    this.changeArrowColor(chaperNumber);
                    return;
                }
                for (i = currentIndex + 1; i < currentIndex + 5; i++) {
                    renderArr.push(chaper.sections[i]);
                }
                chaper.currentIndex++;
                chaper.renderArr = renderArr;
                this.changeArrowColor(chaperNumber);
            },
            prePage(chaperNumber) {
                let chaper = this.chaperArr[chaperNumber],
                    sectionLen = chaper.sections.length,
                    currentIndex = chaper.currentIndex,
                    renderArr = [],
                    i;
                if (sectionLen <= 4) {
                    return;
                }
                if (currentIndex == 0) {
                    // 当翻到第一页的时候
                    // 这里有一个箭头的切换颜色效果
                    this.changeArrowColor(chaperNumber);
                    return;
                }
                for (i = currentIndex - 1; i < currentIndex + 3; i++) {
                    renderArr.push(chaper.sections[i]);
                }
                chaper.renderArr = renderArr;
                chaper.currentIndex--;
                this.changeArrowColor(chaperNumber);
            },
            changeArrowColor(chaperNumber) {
                let chaper = this.chaperArr[chaperNumber],
                    len = chaper.sections.length,
                    currentIndex = chaper.currentIndex,
                    arrowsModel = this.arrows;
                if (len <= 4) {
                    // 当长度小于4时候，两边都不能左右移动
                    chaper.arrows.left = arrowsModel.left.grey;
                    chaper.arrows.right = arrowsModel.right.grey;
                    return;
                }
                switch(currentIndex) {
                    case 0: {
                        chaper.arrows.left = arrowsModel.left.grey;
                        chaper.arrows.right = arrowsModel.right.blue;
                        break;
                    }
                    case (len - 4): {
                        chaper.arrows.left = arrowsModel.left.blue;
                        chaper.arrows.right = arrowsModel.right.grey;
                        break;
                    }
                    default: {
                        chaper.arrows.left = arrowsModel.left.blue;
                        chaper.arrows.right = arrowsModel.right.blue;
                    }
                }
            },
            changeItemStyle(chaperNumber, index) {
                // 修改选择后的样式
                let chaper = this.chaperArr[chaperNumber],
                    len = chaper.sections.length,
                    i,
                    currentIndex = chaper.currentIndex,
                    renderArr = [];
                for (i = 0; i < len; i++) {
                    chaper.sections[i].class = '';
                }
                chaper.sections[index].class = 'choose-active';
                if (chaper.sections.length >= 4) {
                    for (i = currentIndex; i < currentIndex + 4; i++) {
                        renderArr.push(chaper.sections[i]);
                    }
                } else {
                    for (i = 0; i < len; i++) {
                        renderArr.push(chaper.sections[i]);
                    }
                }

                chaper.renderArr = renderArr;
            },
            initVideoArr() {
                let i,
                    j,
                    chaperLen = this.chaperArr.length,
                    chaper,
                    chaperArr = this.chaperArr,
                    arrowsModel = this.arrows;
                for (i = 0; i < chaperLen; i++) {
                    chaper = chaperArr[i];
                    chaper.currentUrl = chaper.sections[0].url;
                    chaper.sections[0].class = 'choose-active';
                    if (chaper.sections.length <= 4) {
                        for (j = 0; j < chaper.sections.length; j++) {
                            chaper.renderArr.push(chaper.sections[j]);
                        }
                        chaper.arrows.left = arrowsModel.left.grey;
                        chaper.arrows.right = arrowsModel.right.grey;
                    } else {
                        for (j = 0; j < 4; j++) {
                            chaper.renderArr.push(chaper.sections[j]);
                        }
                    }
                }
            },
            switchVideo(event, chaperNumber) {
                let index = event.target.getAttribute('number'),
                    chaper = this.chaperArr[chaperNumber],
                    baseUrl = 'https://qgstudio.org/course/resources/video/';
                if (!index) {
                    // 事件委托，防止点击到除按钮之外的地方
                   return;
                }
                chaper.currentUrl = baseUrl + chaper.sections[index].url;
                // 修改样式
                this.changeItemStyle(chaperNumber, index);
            }
		},
		created: function () {
            this.initVideoArr();
        },
	}
</script>

<style scoped>
.container-left-top>section, .container-left-top {
    overflow: auto;
}
.choose-chaper-container {
    position: relative;
    width: 86%;
    height: 25px;
    margin-bottom: 15px;
    margin-left: 1%;
}
.choose-chaper-container>* {
    float: left;
}
.choose-chaper-container>img {
    display: block;
    width: 21px;
    height: 19px;
    margin: 2px 6px;
}
.choose-chaper-container>div {
    float: left;
}
.chaper-container {
    position: relative;
    width: 88%;
    height: 25px;
    overflow: hidden;
}
.chaper-container>div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25px;
}
.chaper-container>div>div {
    cursor: pointer;
    width: 23%;
    margin-left: 1%;
    margin-right: 1%;
    height: 25px;
    border-radius: 24px;
    background-color: #E4E4E4;
    text-align: center;
    line-height: 25px;
}
.choose-chaper-container img {
    cursor: pointer;
}
.choose-active {
    background-color: #4B8BF4!important;
    color: #fff;
}
</style>

