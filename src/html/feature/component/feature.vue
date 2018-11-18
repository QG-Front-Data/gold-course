
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

  background: rgba(81, 90, 110, 0.8);

  align-items: center;
}
.footer-span {
  margin: 0 0 0 94px;
}
.container {
  position: relative;

  width: 100%;
  min-height: 100vh;

  background: url("../style/images/bg5.png");
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
  color: #000;
}
.container-right {
  width: 62%;
  margin-left: 56px;
  color: #000;
  padding: 30px;
  overflow: auto;
}
.container-right ul {
  list-style: none;
  font-size: 16px;
  padding: 10px 0 0 17px;
}
.container-right li {
  padding: 10px 0;
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
  cursor: pointer;
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
  color: #26b9b1;
  margin: 10px 0;
  font-size: 1.3em;
}
.container-right h1 {
  font-size: 2.5em;
}
.person-context {
  text-indent: 2em;
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
                   <div >
                       <h1 class="title-choose title-commom" @click="chooseTitle(10)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 10 ? 'isClicked' : null]">经典案例</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(11)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 11 ? 'isClicked' : null]">专题讲座</span></h1>
                   </div>
                   <!-- <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(12)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 12 ? 'isClicked' : null]">学习指南</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(13)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 13 ? 'isClicked' : null]">课程规划</span></h1>
                   </div> -->
               </div>
               <!-- 经典案例 -->
               <div class="container-right" v-if="chooseIndex == 10">
                    <h1>《C语言程序设计》经典案例</h1>
                    <ul>
                        <li><a :href="fileIP + 'chapter2.docx'" download="">第二章 数据类型、运算符与表达式、简单程序设计</a></li>
                        <li><a :href="fileIP + 'chapter3.docx'" download="">第三章 顺序程序设计</a></li>
                        <li><a :href="fileIP + 'chapter4.docx'" download="">第四章 选择结构程序设计</a></li>
                        <li><a :href="fileIP + 'chapter5.docx'" download="">第五章 循环控制</a></li>
                        <li><a :href="fileIP + 'chapter6.docx'" download="">第六章 数组</a></li>
                        <li><a :href="fileIP + 'chapter7.docx'" download="">第七章 函数</a></li>
                        <li><a :href="fileIP + 'chapter9.docx'" download="">第九章 指针</a></li>
                        <li><a :href="fileIP + 'chapter10.docx'" download="">第十章 结构体与共用体</a></li>
                    </ul>
               </div>
               <!-- end经典案例 -->
                <!-- 专题讲座   -->
                <div class="container-right" v-if="chooseIndex == 11">
                   <h1>《C语言程序设计》经典案例</h1>
                    <ul>
                        <li><a href="http://www.cnblogs.com/sapvip/archive/2008/06/19/1225109.html" target="_blank">专题一：编译原理讲解</a></li>
                        <li><a href="https://blog.csdn.net/sunayxin/article/details/74089989" target="_blank">专题二：操作系统讲解</a></li>
                        <li><a href="https://www.bilibili.com/video/av10610680/" target="_blank">专题三：TCP/IP协议</a></li>
                        <li><a href="https://www.jianshu.com/p/8bf773e80c9d" target="_blank">专题四：C语言循环控制语句</a></li>
                        <li><a href="https://www.imooc.com/learn/249" target="_blank">专题五：C语言基础课程</a></li>
                        <li><a href="https://www.cnblogs.com/likebeta/archive/2012/06/16/2551780.html" target="_blank">专题六：C语言文件读取与保存</a></li>
                        <li><a href="https://www.jianshu.com/p/f54547d24221" target="_blank">专题七：C语言数组讲解（一）</a></li>
                        <li><a href="https://www.jianshu.com/p/43b01bba91f5" target="_blank">专题七：C语言数组讲解（二）</a></li>
                        <li><a href="https://www.cnblogs.com/clover-toeic/p/3851102.html" target="_blank">专题八：C语言预处理详解</a></li>
                        <li><a href="https://blog.csdn.net/soonfly/article/details/51131141" target="_blank">专题九：C语言指针详解</a></li>
                        <li><a href="https://blog.csdn.net/huqinweI987/article/details/23625823" target="_blank">专题十：C结构体详解</a></li>
                        <li><a href="https://www.imooc.com/learn/611" target="_blank">专题十一：数据结构课程（一）</a></li>
                        <li><a href="https://www.imooc.com/learn/519" target="_blank">专题十一：数据结构课程（二）</a></li>
                        <li><a href="https://www.imooc.com/learn/673" target="_blank">专题十一：数据结构课程（三）</a></li>
                        <li><a href="https://www.iqiyi.com/w_19ru2v9ohd.html" target="_blank">专题十二：计算机网络课程</a></li>
                    
                    </ul>
               </div>
               <!-- end专题讲座   -->
           </div>
        </Content>
        <Footer class="footer">
            <span>@版权所有</span>
            <span class="footer-span">广东工业大学计算机学院QG工作室</span>
        </Footer>
    </Layout>
</template>
<script>
import { mapState, mapActions } from "vuex";
import navheader from "../../../components/navheader.vue";
export default {
  name: "feature",
  components: { navheader },
  data() {
    return {
      index: 6,
      chooseIndex: 10,
      fileIP: 'https://qgstudio.org/course/resources/feature/'
    };
  },
  mounted() {},
  computed: {
    // 从这里引入 vueX 的 state 的变量到组件中用
    ...mapState("user", {
      // 这里用到的是 es6 的函数写法
      user: state => {
        return state;
      }
    })
  },
  methods: {
    chooseTitle(index) {
      this.chooseIndex = index;
    }
  },
  created: function() {}
};
</script>
