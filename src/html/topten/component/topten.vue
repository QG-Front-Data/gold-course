
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
                       <h1 class="title-choose title-commom" @click="chooseTitle(10)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 10 ? 'isClicked' : null]">谢光强</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(11)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 11 ? 'isClicked' : null]">李杨</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(12)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 12 ? 'isClicked' : null]">路璐</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(13)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 13 ? 'isClicked' : null]">曾颖</span></h1>
                   </div>
               </div>
               <div class="container-right" v-if="chooseIndex == 10">
                   <div class="image-container">
                       <img src="../style/images/xie.png">
                   </div>
                   <h1>谢光强</h1>           
                   <p class="person-introduce">在教学方面所获奖项</p>
                   <p class="person-context">1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）</p>
                   <p class="person-context">2、2016 广东省第五届师德征文活动“二等奖”</p>
                   <p class="person-context">3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”</p>
                   <p class="person-context">4、2017 广东工业大学“师德标兵”</p>
                   <p class="person-context">5、2009 广东工业大学“十佳授课教师”</p>
                   <p class="person-context">6、2007 广东工业大学“学生最喜爱的教师”</p>
                   <p class="person-context">7、2012 广东工业大学“年度优秀教师”</p>
                   <p class="person-context">8、广东工业大学教学优秀“一等奖”（5次）</p>
                   <p class="person-context">9、广东工业大学教学优秀“一等奖”“二等奖”（4次）</p>
                   <p class="person-context">10、2011 广东工业大学“优秀指导老师”</p>
                   <p class="person-context">11、广东工业大学“优秀班主任”（2005-2008，2017）</p>
                   <p class="person-context">12、2007 计算机学院“师德先进个人”</p>
                   <p class="person-context">13、2009 广东工业大学“大学毕业生就业工作先进个人”</p>
                   <p class="person-context">14、2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”</p>
                   <p class="person-context">15、2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。</p>

                   <p class="person-introduce">获奖照片</p>
                   <img src="../style/images/xie1.jpg" alt="">
                   <img src="../style/images/xie2.jpg" alt="">
                   <img src="../style/images/xie3.jpg" alt="">
                   <img src="../style/images/xie4.jpg" alt="">
                   <img src="../style/images/1.png" alt="">
                   <img src="../style/images/2.png" alt="">
                   <img src="../style/images/3.png" alt="">
                   <img src="../style/images/4.png" alt="">
                   <img src="../style/images/5.png" alt="">
                   <img src="../style/images/6.png" alt="">
                   <img src="../style/images/7.png" alt="">
                   <img src="../style/images/8.png" alt="">
                   <img src="../style/images/9.png" alt="">
                   <img src="../style/images/10.png" alt="">
                   <img src="../style/images/11.png" alt="">
               </div>
               <div class="container-right" v-if="chooseIndex == 11">
                   <div class="image-container">
                       <img src="../style/images/yang.png">
                   </div>
                   <h1>李杨</h1>
                  
                   <p class="person-introduce">在教学方面所获奖项</p>
                        1 2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）<br>
                        2 2016 广东省第五届师德征文活动“二等奖”<br>
                        3 2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”<br>
                        4 2017 广东工业大学“师德标兵”<br>
                        5 2009 广东工业大学“十佳授课教师”<br>
                        6 2007 广东工业大学“学生最喜爱的教师”<br>
                        7 2012 广东工业大学“年度优秀教师”<br>
                        8广东工业大学教学优秀“一等奖”（5次）、<br>
                        9广东工业大学教学优秀“一等奖”“二等奖”（4次）<br>
                        9 2010 云浮市“科学技术奖二等奖”（排名第二）<br>
                        10 2013 广东工业大学“科研工作先进者”<br>
                        11 2011 广东工业大学“优秀指导老师”<br>
                        12广东工业大学“优秀班主任”（2005-2008，2017）<br>
                        13 2007 计算机学院“师德先进个人”<br>
                        14 2009 广东工业大学“大学毕业生就业工作先进个人”<br>
                        15 2015 广东工业大学“优秀工会积极分子”<br>
                        16 2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”<br>
                        17 2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。<br>
                        18.“计算机学院师德先进个人”<br>
                   <p class="person-introduce">获奖照片</p>
                   <img src="../style/images/li1.jpg" alt="">
                   <img src="../style/images/li2.jpg" alt="">

               </div>
               <div class="container-right" v-if="chooseIndex == 12">
                   <div class="image-container">
                       <img src="../style/images/lu.png">
                   </div>
                   <h1>路璐</h1>
                   
                   <p class="person-introduce">在教学方面所获奖项</p>
                        1.2014年获得广东工业大学十佳授课教师<br>
                        2.获得2014-2015学年度，广东工业大学教学优秀一等奖<br>
                        3.获得2015-2016学年度，广东工业大学教学优秀一等奖<br>
                    <p class="person-introduce">获奖照片</p>
                    <img src="../style/images/lu1.png" alt="">
                    <img src="../style/images/lu2.png" alt="">
               </div>
               <div class="container-right" v-if="chooseIndex == 13">
                    <div class="image-container">
                       <img src="../style/images/ying.jpg">
                   </div>
                   <h1>曾颖</h1>

                   <p class="person-introduce">在教学方面所获奖项</p>
                        1.获第6届广东工业大学“十佳青年授课教师“称号<br>
                        2.获教学优秀一等奖一次，二等奖两次<br>
                   <br>
                   <p class="person-introduce">获奖照片</p>
                   <img src="../style/images/ying1.jpg" alt="">
                   <img src="../style/images/ying2.jpg" alt="">
                   <img src="../style/images/ying3.png" alt="">
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
		name: 'topten',
		components:{
            navheader
        },
		data() {
			return {
                index: 8,
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
            },
		},
		created: function () {

        },


	}
</script>

<style scoped>
.container-right>img {
    display: block;
    margin: 0 auto;
    width: 80%;
}
</style>