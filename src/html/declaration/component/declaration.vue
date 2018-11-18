
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
                       <h1 class="title-choose title-commom" @click="chooseTitle(10)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 10 ? 'isClicked' : null]">申报书</span></h1>
                   </div>
               </div>
               <div class="container-right" v-if="chooseIndex == 10">
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
                   <img src="../style/images/12.png" alt="">
                   <img src="../style/images/13.png" alt="">
                   <img src="../style/images/14.png" alt="">
                   <img src="../style/images/15.png" alt="">
                   <img src="../style/images/16.png" alt="">
                   <img src="../style/images/17.png" alt="">
                   <img src="../style/images/18.png" alt="">
                   <img src="../style/images/19.png" alt="">
                   <img src="../style/images/20.png" alt="">
                   <img src="../style/images/21.png" alt="">
                   <img src="../style/images/22.png" alt="">
                   <img src="../style/images/23.png" alt="">
                   <img src="../style/images/24.png" alt="">
                   <img src="../style/images/25.png" alt="">
                   <img src="../style/images/26.png" alt="">
                   <img src="../style/images/27.png" alt="">
                   <img src="../style/images/28.png" alt="">
                   <img src="../style/images/29.png" alt="">
                   <img src="../style/images/30.png" alt="">
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
		name: 'declaration',
		components:{
            navheader
        },
		data() {
			return {
                index: 1,
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