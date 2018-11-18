
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
    padding: 25px 0 0px 30px;
    height: auto;
    display: flex;

}
.teacher-name h2 {
    line-height: 1.5em;
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
.back-container {
    cursor: pointer;
    margin-bottom: 10px;
    color: blue;
}
.teacher-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 2px solid #000;
    padding: 10px;
    width: 31%;
    height: 200px;
    color: #000;
    -webkit-box-align: center;
    -ms-flex-align: center;
    /* align-items: center; */
    margin-right: 10px;
    background: #fff;
    overflow: auto;
    margin-bottom: 20px;
    cursor: pointer;
}
.teacher-context {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: auto;
}
.teacher-item img {
    width: 35%;
    height: 90%;
}
.teacher-name-2 {
    padding: 0 10px 0 16px;

    font-size: 1.5em;
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
.award-img {
    display: block;
    width: 80%;
    margin: 0 auto;
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
                       <h1 class="title-choose" style="cursor:pointer"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 14 ? 'isClicked' : null]" @click="chooseTitle(14)">师资团队</span></h1>
                       
                       <div class="teacher-name" >
                           <h2 v-bind:class="[chooseIndex == 0 ? 'isClicked' : null]" @click="chooseTitle(0)"> 课程负责人：</h2>
                       </div>
                       <div class="teacher-name" >
                            <h2 v-bind:class="[(chooseIndex == 15 || (chooseIndex > 0 && chooseIndex < 11)) ? 'isClicked' : null]" @click="chooseTitle(15)">骨干教师：</h2>
                       </div>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(11)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 11 ? 'isClicked' : null]">教学改革与研究</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(12)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 12 ? 'isClicked' : null]">教师竞赛获奖</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(13)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 13 ? 'isClicked' : null]">学生竞赛获奖</span></h1>
                   </div>
               </div>
               <!-- 谢光强 -->
               
               <div class="container-right" v-if="chooseIndex == 0">
                   <div class="back-container">
                       <h3 @click="chooseTitle(14)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/xie.png">
                   </div>
                   <h1>谢光强</h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">谢光强，博士，副教授，广东工业大学计算机学院副院长，中国人工智能学会科普工作委员会委员、中国人工智能学会知识工程与分布智能专业委员会青年委员、CCF计算机应用专业委员会通信委员、广东省青年科学家协会第四届理事、广东省科技咨询专家库专家、CCF YOCSEF 广州委员、广东省计算机学会大数据专业委员会委员、广东省电子政务大数据专家委员会专家，广东省科技咨询专家库专家，广东省高等学校"千百十工程"培养对象、广东工业大学创新行动计划专家委员会委员。</p>
                   <p class="person-context">主要研究领域为人工智能、移动互联网、数据挖掘。主持和参加国家自然科学基金、省市科技等各类项目30余项，申请专利和软件著作权33项，获授权23项，发表论文20余篇。个人共获各类省、市、校奖项40余项，指导学生获各类科技竞赛奖项140余项，其中省级以上奖项50余项，其中被评选为广东工业大学“学生最喜爱的教师”、“十佳授课教师”、“师德标兵”、“年度优秀教师” ，获得“先进科技工作者”、“教学优秀一等奖”、“计算机学院师德先进个人”等荣誉称号。</p>
                   <p class="person-context">一、主持1项省精品资源共享课，3项校教育教学改革项目, 参与的教改成果《与产业深度融合全程融入的大学生创新创业教育改革与实践》，获得了2017年广东省教育教学成果奖（高等教育）“一等奖”。</p>
                   <p class="person-context">二、主持研发的一项科技成果《质量计量信息一体化网络平台》通过成果鉴定，为省内首创，获得云浮市级科技进步奖二等奖,该成果推广到多个国家级、地市级产品质量检测机构。负责国内首部石材企业信用等级的划分与评定标准的设计工作，编制了广东省地方标准《石材生产企业信用等级的划分与评定》,为国内石材企业信用评级提出标准，主持研发了配套的《石材企业信用评级网络平台》，实现石材企业信用的网络化实时自动评级，广东省3000多家石材企业信用数据都将纳入平台进行管理，为广东省石材企业信用实现标准化、信息化提供了重要支撑。 </p>
                   <p class="person-context">三、指导学生获各类科技竞赛奖项140余项，省级以上奖项50余项，指导学生获得第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛"特等奖"（全国共三项）、第十二届"挑战杯"全国大学生课外学术科技作品竞赛终审决赛"一等奖"，均刷新了学校在"挑战杯"竞赛中获奖层次的记录！指导的大学生科技成果受到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，2017年5月，项目组接受了广东卫视专访并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中作为头条播出，作品获广东省教育厅推荐，代表广东省参加2017第十届全国大学生创新创业年会。</p>
                   <p class="person-context">四、创建了学生科研创新团队“QG工作室”，大力提高学生科研创新、团队协作能力，工作室被评为广东工业大学“标志性获奖团队”；申请国家大学生创新创业训练计划、广东省大学生科技创新培育专项(重点)资金等项目30多项。“QG工作室”获得了由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金共同设立的，以邓小平同志命名的大学生“小平科技创新团队”称号，广东省共有两个团队获得此项称号，全国共50个大学生科技创新团队获得此项称号。</p>
                   <p class="person-context">五、培养的学生多人获得“国家一等奖学金”等各类奖学金、获得“广东工业大学十佳优秀学业大学生”称号3人（人数约占当年毕业生总数的千分之一），“广东工业大学十佳创新之星”称号2人，“广东工业大学十佳自强不息大学生”提名奖1人。</p>
                   <p class="person-context">六、培养的大部分学生进入了华为、阿里巴巴、百度、腾讯、京东等知名IT公司工作，获得用人单位的肯定和好评！其中指导的毕业生，曾获得了"百度最佳个人"（该奖项颁发为一年一度，颁发给百度优秀杰出员工，名额每年只有五个）、“腾讯最佳员工”（人数约占腾讯员工数的5%）、“腾讯微信事业群绩效突出者”（人数约占微信事业群1700人的10%）。</p>
                   
                   <p class="person-introduce">主要荣誉</p>
                   <p class="person-context">1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）</p>
                   <p class="person-context">2、2016 广东省第五届师德征文活动“二等奖”</p>
                   <p class="person-context">3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”</p>
                   <img class="award-img" src="../style/awards/3.png" alt="">
                   <p class="person-context">4、2017 广东工业大学“师德标兵”</p>
                   <img class="award-img" src="../style/awards/2.png" alt="">
                   <p class="person-context">5、2009 广东工业大学“十佳授课教师”</p>
                   <img class="award-img" src="../style/awards/1.png" alt="">
                   <p class="person-context">6、2007 广东工业大学“学生最喜爱的教师”</p>
                   <p class="person-context">7、2012 广东工业大学“年度优秀教师”</p>
                   <p class="person-context">8、广东工业大学教学优秀“一等奖”（5次）</p>
                   <img class="award-img" src="../style/awards/4.png" alt="">
                   <img class="award-img" src="../style/awards/5.png" alt="">
                   <img class="award-img" src="../style/awards/6.png" alt="">
                   <img class="award-img" src="../style/awards/7.png" alt="">
                   <p class="person-context">9、广东工业大学教学优秀“二等奖”（4次）</p>
                   <img class="award-img" src="../style/awards/8.png" alt="">
                   <img class="award-img" src="../style/awards/9.png" alt="">
                   <img class="award-img" src="../style/awards/10.png" alt="">
                   <img class="award-img" src="../style/awards/11.png" alt="">
                   <p class="person-context">10、2010 云浮市“科学技术奖二等奖”（排名第二）</p>
                   <p class="person-context">11、2013 广东工业大学“科研工作先进者”</p>
                   <p class="person-context">12、2011 广东工业大学“优秀指导老师”</p>
                   <p class="person-context">13、广东工业大学“优秀班主任”（2005-2008，2017）</p>
                   <p class="person-context">14、2007 计算机学院“师德先进个人”</p>
                   <p class="person-context">15、2009 广东工业大学“大学毕业生就业工作先进个人”</p>
                   <p class="person-context">16、2015 广东工业大学“优秀工会积极分子”</p>
                   <p class="person-context">17、2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”</p>
                   <p class="person-context">18、2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。</p>
                    
                   <p class="person-introduce">指导学生获奖</p>
                   <p class=" person-page">1. 大学生“小平科技创新团队”（全国50支，广东省2支）<br>
                        2. 第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛，“特等奖”（全国共三项）<br>
                        3. 第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛，“一等奖”<br>
                        4.“挑战杯”广东省大学生课外学术科技作品竞赛，“特等奖”3项<br>
                        5.“挑战杯”广东省大学生课外学术科技作品竞赛，“一等奖”3项、“二等奖”1项<br>
                        6 .“挑战杯-创青春"广东大学生创业大赛，银奖<br>
                        7.全国高校移动互联网应用创新大赛“二等奖”1项、“三等奖”1项。<br>
                        8.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛全国总决赛，JAVA软件开发、嵌入式设计与开发组，“三等奖”各1项<br>
                        9.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛广东省赛区C/C++程序设计、JAVA软件开发、嵌入式设计与开发组，“一等奖”5项，“二等奖”10项，“三等奖”10项<br>
                        10. 泛珠三角大学生计算机作品赛，“铜奖”1项，“优胜奖”1项<br>
                        11.广东省“高校杯”软件设计竞赛，“一等奖”1项、“二等奖”5项<br>
                        12.广东省计算机专业本科大学生毕业作品赛，“一等奖”4项，“二等奖”1项<br>
                        13.广东省大学生数字图像图形创作大赛，“一等奖”3项，“二等奖”2项<br>
                        14.广东省高校移动互联网应用开发创意大赛“金奖”1项，“银奖”1项<br>
                        15.广东省大学生电子设计竞赛，“二等奖”1项，“三等奖”2项<br>
                        16. 广东省大学生“合泰杯”单片机应用设计邀请赛，“二等奖”2项<br>
                        17. 广东省“粤嵌杯”大学生嵌入式与物联网设计大赛，“二等奖”1项，“三等奖”2项<br>
                        18. 广东省粤港澳大学生计算机软件应用大赛，“二等奖”和“最佳用户体验奖”<br>
                        19. 广东省Java程序员竞赛“三等奖”<br>
                        20. 广东省C程序员竞赛“二等奖”、“三等奖”<br>
                    </p>
                    <p class="person-introduce">知识产权</p>
                    <p class=" person-page">
                        1.一种基于控制器的并行打印系统， 发明专利，专利申请号：201710321442.x<br>
                        2.一种嵌入式系统及单色位图压缩、主机， 发明专利，专利申请号：201710422841.5<br>
                        3.一种求救方法、智能头盔、终端及系统， 发明专利，专利申请号：201710404316.0<br>
                        4.一种车祸监测方法及装置，专利申请号：发明专利，201710403952.1<br>
                        5.一种可穿戴设备电源管理方法及装置， 发明专利，专利申请号：201710404701.5<br>
                        6.一种基于体感设备的康复训练评估方法及系统， 发明专利，专利申请号：201710533108.0<br>
                        7.一种基于控制器的并行打印系统， 实用新型专利，专利申请号：201720511717.1<br>
                        8.一种嵌入式系统及单色位图压缩主机， 实用新型专利，专利申请号：201720659842.7<br>
                        9.一种智能急救头盔， 实用新型专利，专利申请号：201720626760.2<br>
                        10.一种车祸监测系统， 实用新型专利，专利申请号：201720632265.2<br>
                        11.一种可穿戴设备电源管理装置， 实用新型专利，专利申请号：201720632371.0<br>
                        12.一种基于体感设备的康复训练评估系统， 实用新型专利， 专利申请号：201720802908.3<br>
                        13.一款头盔内部硬件构造专利，外观专利， 专利申请号：2017302528844<br>
                        14.订单集群打印系统，计算机软件著作权，软著登记号：2017SR267145<br>
                        15.移动订单管理及打印系统，计算机软件著作权，软著登记号：2017SR274760<br>
                        16.微型控制打印系统，计算机软件著作权，软著登记号：2017SR274774<br>
                        17.智能急救头盔系统，计算机软件著作权，软著登记号：2017SR287905<br>
                        18.智能急救头盔APP软件，计算机软件著作权，软著登记号：2017SR288722<br>
                        19.康复训练及评估平台，计算机软件著作权，软著登记号：2017SR385752<br>
                        20.康复训练及评估移动管理系统，计算机软件著作权，软著登记号：2017SR385305<br>
                        21.一种电子药盒及其管理系统，发明专利，200910258397.3<br>
                        22.多功能便携式数据拷贝装置，实用新型专利，201110180046.8<br>
                        23.建筑楼宇声光质量检测模拟系统，计算机软件著作权，软著登记号：2011R11L029047<br>
                        24.企业缴费一卡通综合管理平台软件，计算机软件著作权，软著登记号：2011SR071360<br>
                        25.质量计量信息一体化管理平台软件，计算机软件著作权，软著登记号：2010SR000003<br>
                        26.3D虚拟场景编辑系统，计算机软件著作权，软著登记号：2009SR061272<br>
                        27.数字化虚拟场景实时漫游系统，计算机软件著作权，软著登记号：2009SR061274<br>
                        28.一种电子药盒，实用新型专利，200920291910.4<br>
                        29.一种无线智能家电语音控制系统，发明专利，专利申请号：200910213857.0<br>
                        30.一种交互式投影的检测系统，实用新型专利，专利申请号：200920194269.2<br>

                    </p>
                    <p class="person-introduce">学术活动</p>
                    <p class="person-context">
                        2013年6月30日，参加了“CCF YOCSEF广州分论坛十周年庆典暨华南大数据高峰论坛活动”，活动在广东工业大学大学城校区（大学城外环西路100号）大讲堂圆弧报告厅隆重举行。具体会议说明网址：http://www.scholat.com/teamwork/showPostMessage.html?id=127&teamId=297   
                    </p>
                    <p class="person-context">
                        参加了在广西南宁，广西大学召开的全国智能信息处理学术会议（NCIIP, National Conference on Intelligent Information Processing），该会议由中国人工智能学会知识工程与分布式智能专业委员会与中国计算机学会人工智能与模式识别专业委员会主办，2年举办一次，本届会议于2013 年 7 月 26 日至7 月28日举行，作为主持人主持了分组报告4B：智能决策与智能系统分组，宣读了论文《基于Krause多智能体一致性模型的研究》。本次会议收到稿件507篇，最后期刊录用200篇，录用率为39.4%。会议网址：http://nciip2013.gxu.edu.cn/
                    </p>
                    <p class="person-context">
                        参加了在北京召开的中国计算机学会人工智能会议，该会议由中国计算机学会主办，中国计算机学会人工智能与模式识别专业委员会协办，每两年召开一次。本届会议于2013 年 7 月 31 日至 8 月 2 日在北京举行，会议由北京航空航天大学计算机学院承办。参加分组报告会8：人工智能应用II，宣读了论文《多智能体一致性协议可视化仿真平台的研究》。本次会议收到稿件307篇，最后期刊录用93篇，录用率为30.3%。会议网址：http://www.ccfai2013.org/
                    </p>
                    <p class="person-context">
                        2013年8月17日，参加了CCF YOCSEF广州分论坛 “大数据与SDN”学术报告会，报告会在广州大学城中山大学信息科学与技术学院召开。本次活动由中山大学信息科学与技术学院承办，报告会由中山大学信息科学与技术学院吴迪博士与潘嵘博士共同组织。本次报告会邀请到四位分别来自学术界与工业界的嘉宾围绕“大数据与SDN”这一主题展开了精彩的演讲。美国纽约大学刘勇老师首先作了如何在微博系统上面向大规模用户群体进行在线投票推荐的报告；然后，华中科技大学刘方明老师介绍了软件定义的云数据中心网络中存在的机遇、挑战与尝试；接着，西安交通大学的胡成臣老师介绍了西安交大所开发的SDN开源硬件平台；最后，深圳科加诺DataKM运营总监郑伟先生用一些企业中的大数据案例来分析大数据的应用价值，并探讨大数据的本质精神。具体说明见网址：http://www.scholat.com/teamwork/showPostMessage.html?id=180&teamId=297
                    </p>

                    <p class="person-introduce">研究兴趣</p>
                    <P class="person-context">人工智能 , 移动互联网 ,数据挖掘</P>
               </div>
               <!-- end谢光强 -->
               <!-- 吴伟民 -->
                <div class="container-right" v-if="chooseIndex == 1">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/wu.png">
                   </div>
                   <h1>吴伟民</h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">吴伟民，国务院政府特殊津贴专家，全国高等学校计算机教育研究会理事，广东省计算机学会常务理事。与清华大学严蔚敏教授合著的数据结构系列教材是全国考研指定教材和高校主流教材，在海内外发行400余万册，荣获国家级普通高校优秀教材特等奖，相关成果获国家级科技进步三等奖。主要研究领域：计算机系统软件与系统结构，计算机系统逆向和介入工程技术及工具，数据结构与可视计算，程序设计语言和编译系统，虚拟机和虚拟化技术，程序可视化运行、调试与测评，智能系统与电器，嵌入式系统等。其他主要获奖：广东省教学成果二等奖、电子工业部科技成果二等奖、霍英东青年教师三等奖、曾宪梓高师教师三等奖、广东省计算机学会特等奖等。</p>
                   
                   <p class="person-introduce">教育背景</p>
                   <p class=" person-page">
                        1997.09-1998.01,1997.9-1998.1 清华大学计算机科学与技术系研究课题访问学者<br>
                        1993.05-1993.12,1993.5-1993.12 新西兰奥克兰大学计算机科学系高级访问学者<br>
                        1983.09-1984.07,1983.9-1984.7 清华大学计算机科学与技术系进修教师，担任助教工作<br>
                        1975.09-1978.06,1975.9-1978.6 华南师范大学数学系数学专业<br>
                    </p>
                    <p class="person-introduce">工作经历</p>
                    <p class=" person-page">
                        1998.07-now,1998.7起 广东工业大学计算机学院，历任副教授、教授，研究生导师(1999年起)，副院长(2006.12起)<br>
                        1978.07-1998.06,1978.7-1998.6 华南师范大学计算机系，历任助教、讲师、副教授，副系主任（1992-1996）<br>
                    </p>
                    <p class="person-introduce">主要荣誉</p>
                    <p class="person-context">
                        1997.07 广东省计算机学会首届安利电脑科技奖特等奖，排名1/1  
                    </p>
                    <p class="person-context">
                        1997.06 广东省教学成果二等奖，排名1/5
                    </p>
                    <p class="person-context">
                        1996.12 国家级科技进步三等奖，排名2/2
                    </p>
                    <p class="person-context">
                        1993.11 霍英东青年教师奖三等奖，排名1/1
                    </p>
                    <p class="person-context">
                        1993.10 国务院政府特殊津贴专家
                    </p>
                    <p class="person-context">
                        1993.02 国家级普通高等学院优秀教材特等奖，排名2/3
                    </p>
                    <p class="person-introduce">学术活动</p>
                    <p class="person-context">
                        2006.12-now,计算机学院副院长；广东省计算机学会常务理事、图像图形分会秘书长
                    </p>
                    <p class="person-introduce">教学信息</p>
                    <p class="person-context">
                        数据结构，编译原理，等
                    </p>    
                    <p class="person-context">
                        虚拟机技术，可视计算，等
                    </p>  
                    <p class="person-introduce">研究兴趣</p>
                    <P class="person-context">数据结构与算法 可视计算与虚拟机 系统介入与信息安全 智能电器与应用系统</P>
               </div>
               <!-- end吴伟民 -->
               <!-- 曾安 -->
                <div class="container-right" v-if="chooseIndex == 2">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/an.png">
                   </div>
                   <h1>曾安</h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">曾安, 教授、博士，IEEE会员，校级“千百十人才工程”培养对象。</p>
                   <p class="person-context">在华南理工大学获得计算机应用技术工学博士学位，IEEE会员，校级“千百十人才工程”培养对象，副教授。十几年来一直致力于人工智能，数据挖掘和概率统计理论与方法的研究及其应用。先后作为主要参与者参加过多项国家自然科学基金，省自然科学基金。并主持完成过省自然科学基金。在IEEE Intelligent Systems (ISSN: 1541-1672)、 IEEE Transactions on Systems Man and Cybernetics (ISSN: 1083-4427)、 Lecture Notes in Computer Science (ISSN: 0302-9743)、电子学报、机械工程学报、IEEE SMC、IJCNN （International Joint Conference on Neural Networks）等国内外著名期刊或会议上发表了10多篇论文，并全部被SCI或EI索引。</p>
                   <p class="person-introduce">教育背景</p>
                   <p class=" person-page">
                        2002.09-2005.07,2002.9－2005.7 华南理工大学 工学博士<br>
                        1999.09-2002.07,1999.9－2002.7 华南理工大学 工学硕士<br>
                        1995.09-1999.07,1995.9－1999.7 南昌航空工业学院 学士<br>

                    </p>
                    <p class="person-introduce">工作经历</p>
                    <p class=" person-page">
                        2005.07-now,2005年7月－至今 广东工业大学计算机学院任教<br>
                    </p>
                    <p class="person-introduce">主要论文</p>
                    <p class="person-context">
                        1.ZENG An, GAO Qi-gang, PAN Dan. A Global Unsupervised Data Discretization Algorithm based on Collective Correlation Coefficient. In: Proceedings of The 24th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE'11), Lecture Notes in Artificial Intelligence (LNAI), U.S.A, June 28- July 1, 2011.  
                    </p>
                    <p class="person-context">
                        2.Zeng An, Pan Dan, Zheng Qilun, Peng Hong, Knowledge Acquisition Approach Based on Rough Set and Principal Component Analysis, IEEE Intelligent Systems, Vol. 21, No. 2, 2006, pp. 78-85.
                    </p>
                    <p class="person-context">
                        3.Zeng An, Pan Dan, He Jian-bin, Prediction of MHC II-binding Peptides Using Rough Set-based Rule Sets Ensemble, Applied Intelligence，Vol.27, No.2, 2007, pp. 153-166.
                    </p>
                    <p class="person-context">
                        4.Pan Dan, Zheng Qilun, Zeng An, Hu Jin-song, A Novel Self-Optimizing Approach for Knowledge Acquisition, IEEE Transactions on Systems, Man And Cybernetics- Part A: Systems and Humans, Vol.32, No.4, July 2002, pp. 505-514.
                    </p>
                    <p class="person-context">
                        5.曾安, 郑启伦, 潘丹, 彭宏. 基于排序学习前向掩蔽模型的快速增量学习算法. 电子学报. 2004, Vol.32, No.12, pp.2051-2055.
                    </p>
                    <p class="person-context">
                        6.Zeng An, Pan Dan, He Jian-bin, Yu Yong-quan., A Rule Sets Ensemble for Predicting MHC II-Binding Peptides, In: Proceedings of The 19th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE'06), Lecture Notes in Artificial Intelligence (LNAI 4031), Annecy, France, June 27-30, 2006, pp. 353-362.
                    </p>
                    <p class="person-context">
                        7.Zeng An, Pan Dan, Yu Yong-quan, Zeng Bi, Rule Induction for Prediction
                    </p>
                    <p class="person-introduce">学术活动</p>
                    <p class="person-context">
                        2011.01-now,IEEE会员，校级“千百十人才工程”培养对象
                    </p>
                     
                    <p class="person-introduce">研究兴趣</p>
                    <P class="person-context">人工智能 , 数据挖掘和概率统计理论与方法的研究及其在医学临床诊断和金融数据分析中的应用</P>
               </div>
               <!-- end曾安 -->
               <!-- 谢国波 -->
               <div class="container-right" v-if="chooseIndex == 3">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/bo.png">
                   </div>
                   <h1>谢国波</h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">1977年出生，男，汉族，广东工业大学计算机学院教授、硕士生导师。目前，主要从事网络与分布式系统、复杂系统的分析与建模应用、基于DSP和FPGA平台的混沌信号产生与保密通信技术、信息网格研究领域的教学和科研工作，在相关领域，有较为丰富的理论和实践经验，主持和参与过多项相关科研项目。近3年主持的科研项目广东省教育部产学研、广东省科技计划等项目10多项。</p>
                   
                   <p class="person-introduce">学科领域</p>
                   <p class=" person-page">
                        科学学位：<br>
                        计算机科学与技术 软件工程 计算机软件与理论 计算机应用技术<br>
                        专业学位：<br>
                        计算机技术 软件工程<br>
                    </p>
                    <p class="person-introduce">工作经历</p>
                    <p class=" person-page">
                       2006.01-now,毕业至今一直在广东工业大学从事教学科研工作<br>
                    </p>
                    <p class="person-introduce">主要荣誉</p>
                    <p class="person-page">
                        1.广东工业大学科技先进工作者<br>
                        2.吴文俊人工智能科学技术进步三等奖  <br>
                    </p>
                    
                    <p class="person-introduce">学术活动</p>
                    <p class="person-context">
                        1.2011.01-now,广东省高端厨房电器企业重点实验室负责人
                    </p>
                     <p class="person-introduce">主要论文</p>
                    <p class="person-context">
                        2.（包括：代表性著作及论文、获奖及专利等）在国内外期刊发表论文多篇
                    </p>
                     <p class="person-introduce">教学信息</p>
                    <p class="person-context">
                        3.《操作系统》，《C程序设计》 隶属于计算机学院网络空间安全系
                    </p>
                    <p class="person-context">
                        4.为本科生和研究生讲授了下面的课程：软件工程，软件需求分析，数据库，计算机网络，操作系统，数据结构，网络安全，计算机原理，分布式操作系统与实时操作系统，计算机系统的建模与分析，实时系统，计算机高新技术
                    </p>
                     <p class="person-introduce">科研项目</p>
                    <p class="person-context">
                        1.新型通道式安检机的关键技术研究及其产业化,省部产学研结合项目,项目编号：2012B091100497，下达文号：粤财教[2012]393号，下达单位：广东省科技厅，项目起止时间：2012.7.1-2014.12.31，
                    </p>
                    <p class="person-context">
                        2.厨房生活垃圾处理器关键技术研究及其产业化,广东省重大科技专项项目,项目编号：2012A080103010，下达文号：粤科规划字[2012]99号，下达单位：广东省科技厅，项目起止时间：2012.3.1-2014.12.31，项目经费：120万元，主持。
                    </p>
                    <p class="person-context">
                        3.全自动大型高效节能纸箱印刷开槽模切生产线成套设备关键技术的研发及其产业化 ,广东省粤港关键领域重点突破项目,项目编号：2012A080107007，下达文号：粤科高字[2012]197号，下达单位：广东省科技厅，项目起止时间：2012.10.1-2014.12.31，项目经费：150万元，校方主持人。
                    </p>
                    <p class="person-context">
                        4.不锈钢制品抛光机器人的研制及其产业化,省部产学研结合项目,项目编号：2012B091100191，下达文号：粤财教[2012]393号，下达单位：广东省科技厅，项目起止时间：2012.5.1-2014.12.31，项目经费：50万元，主持。
                    </p>
                    <p class="person-context">
                       5.广东省高端厨房电器技术企业重点实验室，广东省企业重点实验室建设项目，项目编号：2011A091000046，下达文号：粤财教[2011]508号，下达单位：广东省科技厅，项目起止时间：2011.3.1-2013.2.28，项目经费：100万元，主持。
                    </p>
                    <p class="person-context">
                        6.五华县棉洋水果专业镇技术创新服务平台建设，专业镇中小微企业公共服务平台建设工程，项目编号：2012B091400020， 下达单位：广东省科技厅，项目经费：50万，项目起止时间：2013.01.01-2014.12.31,校方主持。
                    </p>

                    <p class="person-introduce">知识产权</p>
                    <p class="person-context">软件版权3项。</p>

                    <p class="person-introduce">研究兴趣</p>
                    <P class="person-context">混沌保密通信，云计算与大数据，基于机器视觉的高精度检测和测量</P>
               </div>
               <!-- end谢国波 -->
               <!-- 李杨 -->
                <div class="container-right" v-if="chooseIndex == 4">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/yang.png">
                   </div>
                   <h1>李杨</h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">李杨，博士，副教授，计算机科学系副主任，CCF会员、 CCF YOCSEF广州委员、中关村大数据产业联盟会员、 广东省计算机学会大数据专业委员会会员。主持和参加国家自然科学基金、省市科技等各类项目13项，获专利授权10项，其中发明专利1项，在国际期刊、会议和核心期刊发表论文10多篇。个人共获各类省、市、校奖项30多项，其中被评选为广东工业大学 “十佳授课教师”，获得“先进科技工作者”、“年度优秀教师” 、“计算机学院师德先进个人”等荣誉称号。获得市级科技进步奖“二等奖”1项，指导学生获各类国家、省级、校级奖项30多项。曾获邀为中关村大数据联盟“大数据100分”论坛作大数据安全相关的学术报告，引起了大数据研究者和从业者的广泛关注。</p>
                   <p class="person-introduce">学科领域</p>
                   <p class=" person-page">
                        1.科学学位： 计算机科学与技术软件工程<br>
                        2.专业学位： 计算机技术软件工程<br>
                    </p>
                    <p class="person-introduce">学术兼职</p>
                    <p class=" person-page">

                        1.CCF会员<br>
                        2.CCF YOCSEF广州委员<br>
                        3.中关村大数据产业联盟会员<br>
                        4.广东省计算机学会大数据专业委员会会员<br>

                    </p>
                    <p class="person-introduce">主要荣誉</p>
                    <p class=" person-page">

                        一、个人获奖<br>
                        1.广东工业大学“十佳授课教师”<br>
                        2.广东工业大学“年度优秀教师”<br>
                        3.云浮市“科学技术奖二等奖”<br>
                        4.广东工业大学“科研工作先进者”<br>
                        5.广东工业大学教学优秀“一等奖”，“二等奖”<br>
                        6.广东工业大学“优秀指导老师”<br>
                        7.广东工业大学“优秀工会积极分子”<br>
                        8.广东工业大学年度考核“优秀”<br>
                        9.广东工业大学“优秀班主任”<br>
                        10.“计算机学院师德先进个人”<br>
                        二、指导学生获奖<br>
                        1.第十二届“挑战杯”广东大学生课外学术科技作品竞赛终审决赛，特等奖<br>
                        2.第十二届“挑战杯”广东大学生课外学术科技作品竞赛终审决赛，一等奖<br>
                        3.第二十二届广东省高校软件作品设计竞赛（华资高校杯），二等奖<br>
                        4.2012年广东省大学生电子设计竞赛，三等奖<br>
                        5.第五届“挑战杯”广东工业大学课外学术科技作品竞赛，一等奖2项<br>
                        6.第五届“挑战杯”广东工业大学课外学术科技作品竞赛，二等奖1项<br>
                        7.第五届“挑战杯”广东工业大学课外学术科技作品竞赛，三等奖2项<br>
                        8.2008、2013年指导毕业设计“创新奖”<br>
                        9.2013年国家级大学生创新创业训练项目<br>
                        10.2012年广东省大学生创新创业训练项目<br>
                        11.2014年广东省大学生创新创业训练项目<br>


                    </p>
                    <p class="person-introduce">主要论文</p>
                    <p class="person-page">
                        1. 李杨 *，郝志峰，肖燕珊，袁淦钊，谢光强.差分隐私DPE k-means数据聚合下的多维数据可视化[J].小型微型计算机系统，2013,34(7):1637-1640<br>
                        2. 李杨 *，郝志峰，谢光强,袁淦钊.质量度量指标驱动的数据聚合与多维数据可视化[J]. 智能系统学报，2013,8(4):299-304<br>
                        3. 李杨 *，杨春燕，李立希.企业资源矛盾问题分析与求解系统设计与实现[J].哈尔滨工业大学学报，2006,38(7):1195-1198<br>
                        4. 李杨 *，郝志峰，温雯，谢光强. 差分隐私保护k-means聚类方法研究[J].计算机科学,2013,40(3):287-290<br>
                        5. 李杨 *，温雯，谢光强.差分隐私保护研究综述[J].计算机应用研究,2012,29(9) :3201-3205<br>
                        6. Li Yang *, Xie Guangqiang,Li Xiaomei , Liu Hua. Dependent function interval parameters training algorithm based on DBSCAN clustering[C]. Proceedings of the 31st Chinese Control Conference, CCC 2012:7709-7712（EI：20130716024809）<br>

                    </p>
                    
                    <p class="person-introduce">科研项目</p>
                    <p class="person-page">
                        1.广东省专业镇中小微企业服务平台项目，面向不锈钢产业的质量检测公共服务平台(项目编号：13ZK0119)<br>
                        2.广东质检院综合业务管理信息系统检验系统开发(项目编号：13HK0182)<br>
                        3.韶关企业缴费一卡通综合管理平台（项目编号：2010014）<br>
                        4.质量计量网络信息管理系统（项目编号：2007082）<br>
                        5.质量信息一体化平台（项目编号：2007068）<br>
                        6.质量计量业务管理平台（项目编号：2007067）<br>
                        7.石材企业信用评级软件平台（项目编号：2011185）<br>
                        8.石材企业信用等级评定标准关键技术及总体方案设计（项目编号：2011183）<br>
                        9.质量计量信息一体化平台运行优化研究（项目编号：2011184）<br>
                        10.企业可拓智能决策支持系统的设计与实现（项目编号：20066007）<br>
                        11.基于最大间隔的多示例学习算法设计与分析（项目编号：12ZK0245）<br>
                        12.基于可拓数据挖掘的客户价值研究（项目编号：100230）<br>
                        13.不锈钢特色产业产学研合作创新平台（项目编号：13ZK0120）<br>

                    </p>
                     
                    <p class="person-introduce">知识产权</p>
                    <p class="person-page">
                        1.一种电子药盒及其管理系统，发明专利，200910258397.3，2012.01<br>
                        2.多功能便携式数据拷贝装置，实用新型，201110180046.8，2012.01<br>
                        3.基于Android的移动协同办公系统，计算机软件著作权，软著登字第0551454号，2013.05<br>
                        4.高校课程自主学习平台系统，计算机软件著作权，软著登字第0550394号，2013.05<br>
                    </p>

                    <p class="person-introduce">指导团队</p>
                    <P class="person-page">
                        1.数据挖掘与信息检索实验室<br>
                        2.数据结构与可视计算学生工作室（负责人、指导教师）<br>
                        3.QG工作室（指导教师）<br>
                    </P>
               </div>
               <!-- end李杨 -->
               <!-- 陈云华 -->
                <div class="container-right" v-if="chooseIndex == 5">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/chen.png">
                   </div>
                   <h1>陈云华</h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">陈云华，女，博士，CCF会员。武汉测绘科技大学学士，武汉大学硕士，广东工业大学博士，现为广东工业大学计算机学院讲师。主要研究方向为智能视频监控、面部表情识别、图像超分辨率、智能与软计算等。近年来在国内外著名刊物发表学术论文14篇，申请和获得专利2项，获得软件著作权1项，主持承担省部级项目4项、企业项目1项，作为主要成员参与10多项项目的研发，所主持的项目经费超过400万元。</p>
                   
                   <p class="person-introduce">教育背景</p>
                   <p class=" person-page">
                        2007/09 - 2013/07，广东工业大学，控制理论与控制工程专业，博士<br>
                        2000/09 - 2003/07，武汉大学，计算机应用技术专业，硕士<br>
                        1996/09 - 2000/07，武汉测绘科技大学，计算机软件专业，学士<br>

                    </p>
                    <p class="person-introduce">工作经历</p>
                    <p class=" person-page">
                        2003/09至今，广东工业大学大学计算机学院教师

                    </p>
                    <p class="person-introduce">主要荣誉</p>
                    <p class="person-context">
                        1.中国软件行业协会嵌入式系统分会中国嵌入式系统产业联盟“嵌入式Linux系统开发最具潜力讲师”
                    </p>
                    <p class="person-context">
                        2.“粤嵌杯”广东省大学生嵌入式与物联网设计大赛“一等奖”
                    </p>
                    <p class="person-context">
                        3.广东工业大学教学优秀“二等奖”
                    </p>
                    <p class="person-context">
                        4.广东工业大学毕业生就业工作“先进个人”
                    </p>
                    <p class="person-context">
                        5.广东工业大学毕业设计（论文）创新奖
                    </p>
                    <p class="person-context">
                        6.广东工业大学年度考核“优秀”
                    </p>
                    <p class="person-introduce">学术活动</p>
                    <p class="person-context">
                        2006.12-now,计算机学院副院长；广东省计算机学会常务理事、图像图形分会秘书长
                    </p>
                    <p class="person-introduce">主要论文</p>
                    <p class="person-page">
                        1.精神疲劳可拓模型与求解策略，计算机科学.2015.<br>
                        2.基于嘴巴特征点曲线拟合的哈欠检测, 计算机工程与科学，2014.<br>
                        3.基于多策略融合的亚像素精度立体匹配研究，计算机应用与软件，2014.<br>
                        4.基于限制广播的ZigBee分布式动态能量均衡协议，传感技术学报，2014.<br>
                        5.精神疲劳实时监测中多面部特征时序分类模型，中国图象图形学报，2013.<br>
                        6.基于面部视觉特征的精神疲劳可拓辨识模型，计算机科学，2013.<br>
                        7.面向精神疲劳监测的实用虹膜定位方法，微电子学与计算机，2013.<br>
                        8.基于眼动参数云融合模型的疲劳检测方法，计算机科学与设计，2013.<br>
                        9.基于J2EE与ArcGIS的测绘成果管理系统研究与实现，微电子学与计算机，2011.<br>
                        10.基于J2EE与ArcIMS的WebGIS研究与应用，微电子学与计算机，2010.<br>
                        11.一种改进的双群进化规划算法，计算机工程，2010.<br>
                        12.Extension evaluation method and its application in waste organic gas treatment.Proceedings of ACTEA 2009.<br>
                        13.Extension detecting technology and the implementing method for its application in engineering.Proceedings of ICMLC 2009.<br>
                        14.Application of granular computing in extension criminal reconnaissance system.Proceedings of GrC 2007.<br>
                        15.一种基于新型遗传算法的块运动估计算法，计算机工程与应用，2005.<br>
                        16.一种结合时域信息的量化误差模型，微机发展，2004.<br>

                    </p> 
                    <p class="person-introduce">学术领域</p>
                    <p class="person-page">
                        1.科学学位：信号与信息处理计算机科学与技术<br>  
                        2.专业学位：计算机技术软件工程<br>
                    </p>
                    <p class="person-introduce">科研项目</p>
                    <p class="person-page">
                        1.低质量监控视频人脸超分辨率算法研究，广东省自然科学基金项目，2014/10-2017/10.<br>
                        2.适用于恶劣环境的视频监控系统开发与产业化，广东省科技计划项目，2014/1-2016/12.<br>
                        3.支持小间距LED显示的多屏实时处理器系统的研发，广州市科技计划项目，2014/10-2016/10.<br>
                        4.兴宁市水口镇中小微企业信息化公共服务平台建设，广东省科技计划项目，2014/1-2016/10<br>
                        5.基于眼动分析的驾驶员分心检测系统的研制，广东省科技计划国际合作项目，2011/1-2013/12.<br>
                        6.基于Android的数字家庭综合业务服务开放平台研究与开发，广州市科技计划项目，2011/7-2014/7.<br>
                        7.面向社区医疗服务的物联网应用系统研究与开发，广州市黄埔区科技计划，2011/1-2014/1.<br>
                        8.运动会比赛项目管理系统，企业项目，2010/10-2013/10。<br>
                        9.基于3G的售后服务行业物联网应用系统研究与开发，广东省教育部产学研合作项目，2010/9-2013/9.<br>
                    </p>  

                    <p class="person-introduce">学术兼职</p>
                    <p class="person-context">CCF会员</p>

                    <p class="person-introduce">教学活动</p>
                    <p class="person-page">
                        1.基于S3C6410的驾驶疲劳检测系统研究与实现，大学生创新创业训练项目，2012/9-2013/9.<br>
                        2.基于S3C6410的远程音视频同步监控系统，大学生创新创业训练项目，2012/9-2013/9.<br>
                        3.便携式跟踪定位器设计与实现，广东工业大学合生珠江大学生创新性实验项目，2011/9-2012/9.<br>
                        4.基于云存储的移动视频监控系统，广东省大学生创新实验项目，2010/9-2011/9.<br>
                        5.参与《程序设计》课程建设及教改项目1项.<br>
                    </p>

                    <p class="person-introduce">知识产权</p>
                    <p class="person-page">
                        1.面部特征点快速定位方法，中国，201410487599.6<br>
                        2.一种面向社区医疗服务的智能手持终端，中国，CN203290884 U<br>
                        3.驾驶疲劳检测和预警软件(原始取得)，登记号：2014SR020060<br>

                    </p>
                    <p class="person-introduce">指导团队</p>
                    <P class="person-context">智美乐视觉</P>
                    <p class="person-introduce">研究兴趣</p>
                    <P class="person-context">视频监控 , 面部表情识别 , 图像超分辨率 , 智能与软计算</P>
               </div>
               <!-- end陈云华 -->
               <!-- 林伟 -->
                <div class="container-right" v-if="chooseIndex == 6">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/wei.png">
                   </div>
                   <h1>林伟</h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">副教授 主要研究涉及计算机管理系统，嵌入式系统应用，信息处理及智能化技术，模糊控制技术，网络技术等多方面的硬件和软件的设计，擅长硬件设计和底层软件设计。教学方面主要承担单片原理，嵌入式系统，计算机控制的教学。</p>
                   
                    <p class="person-introduce">学术领域</p>
                    <p class="person-page">
                        科学学位： 计算机应用技术计算机软件与理论计算机科学与技术<br>
                        专业学位： 计算机技术软件工程<br>
                    </p>

                   <p class="person-introduce">教育背景</p>
                   <p class=" person-page">
                        1989.09-1991.07, 1991年于广东工学院自动化研究生毕业<br>
                        1985.09-1988.07, 1988年于湖南大学电气工程系自动化专业本科毕业<br>

                    </p>
                    <p class="person-introduce">工作经历</p>
                    <p class=" person-page">
                        1991.07-now, 1991年7月开始广东工业大学计算机学院任教<br>

                    </p>
                    <p class="person-introduce">主要荣誉</p>
                    <p class="person-context">
                         “DW系列微电脑多功能模糊控制蒸炖煲”98广州科技进步2等奖
                    </p>

                    <p class="person-introduce">主要论文</p>
                    <p class="person-page">
                        1."高速图像采集和传输系统设计"《现代计算机》2009-12<br>
                        2."Adaptive Neural-based Fuzzy Inference System Approach applied to Steering Control"《Lecture Notes in Computer Science》2009.5<br>
                        3."基于物理层隔离的单向文件轮渡系统的设计及应用"《计算机安全》2009.1<br>
                        4."基于AVR的长度自动测量系统的设计"《微计算机信息》2009.1<br>

                    </p>
                    <p class="person-introduce">主要著作</p>
                    <p class="person-context">
                        1.《廉价单片机原理及应用》，北京航空航天大学出版社
                    </p>    
                    <p class="person-context">
                        2.《单片微型机原理及开发应用》，广东高等教育出版社
                    </p> 
                    <p class="person-introduce">科研项目</p>
                    <P class="person-page">
                        1.智能高效节能多功能电控压力锅的研制及产业化（省部级产学研）<br>
                        2.电力制造设备研究与开发<br>
                        3.企业ERP管理软件开发。<br>
                        4.广东省南方电力局培训管理系统设计<br>
                        5.基于ARM嵌入式技术视觉定位系统设计<br>
                        6.LonWork网络系统应用设计<br>
                        7.LonWork智能节点设计<br>
                        8.智能家居网络系统设计<br>
                        9.工厂自动化控制系统设计<br>
                        10.电力线载波数字通讯控制器设计<br>
                        11.家用电器模糊控制的检测技术<br>
                    </P>
                    <p class="person-introduce">研究兴趣</p>
                    <P class="person-context">智能工程 , 嵌入式系统 , 计算机控制</P>
               </div>
               <!-- end林伟 -->
               <!-- 汪明慧 -->
                <div class="container-right" v-if="chooseIndex == 7">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/hui.jpg">
                   </div>
                   <h1>汪明慧</h1>
                   
                   <p class="person-introduce">指导获奖</p>
                   <p class="person-context">海上丝绸之路动态历史地理信息系统 第六届挑战杯特等奖</p>
                   
                   
                    <p class="person-introduce">研究兴趣</p>
                    <P class="person-context">基于可信计算技术的自助服务系统终端可信环境构建研究</P>
               </div>
               <!-- end汪明慧 -->
                <!-- 曾颖  -->
                <div class="container-right" v-if="chooseIndex == 8">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/ying.jpg">
                   </div>
                   <h1>曾颖 </h1>
                   
                    <p class="person-introduce">主要荣誉</p>
                    <p class="person-context">1.自2012年起承担《程序设计》课程教学工作，获第6届广东工业大学“十佳青年授课教师“称号</p>
                    <p class="person-context">2.获广东工业大学教学优秀一等奖1次</p>
                    <p class="person-context">3.获广东工业大学教学优秀二等奖2次</p>


                   <p class="person-introduce">科研项目</p>
                   <p class="person-context">面向纺织精密数控设备的综合服务平台建设,项目编号：2013B011304007，下达文号：粤科规财字[2014]205号，广东省数控一代机械产品创新应用示范工程专项资金项目审批，项目经费：100万元，主持。</p>
                   
                   <p class=""></p>
               </div>
               <!-- end曾颖  -->
                <!-- 孙宣东  -->
                <div class="container-right" v-if="chooseIndex == 9">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/xuan.jpg">
                   </div>
                   <h1>孙宣东</h1>
                    <p class="person-introduce">科研项目</p>
                    <p class="person-page">
                        1.分组等重码实验平台研究与实现（项目编号201211845053）<br>
                        2.基于GE码的新型分布式存储系统研究与实现 <br>
                        3.面向福利彩票行业的数据存储备份系统研究<br>
                        4.ACM在线学习与测试平台的建设与应用<br>
                    </p>  
                    <p class="person-introduce">指导学生获奖</p>
                    <img class="award-img" src="../style/awards/sun3.png" alt="">
                    <img class="award-img" src="../style/awards/sun2.png" alt="">
                    <img class="award-img" src="../style/awards/sun1.png" alt="">
                    <img class="award-img" src="../style/awards/sun4.png" alt="">
               </div>
               <!-- end孙宣东  -->
                <!-- 朱清华   -->
                <div class="container-right" v-if="chooseIndex == 10">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/zhu.png">
                   </div>
                   <h1>朱清华 </h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">朱清华，博士，副教授，硕士生导师，IEEE 高级会员，ACM会员. 2014/10~2015/10，2017/09~2018/09, 在美国新泽西理工学院(New Jersey Institute of Technology)任访问学者。</p>
                   <p class="person-context">研究领域包括：离散事件系统、Petri网理论及应用、优化调度算法（应用背景：半导体制造、云计算）。</p>
                   <p class="person-introduce">教育背景</p>
                   <p class=" person-page">
                        1997.09-1998.01,1997.9-1998.1 清华大学计算机科学与技术系研究课题访问学者<br>
                        1993.05-1993.12,1993.5-1993.12 新西兰奥克兰大学计算机科学系高级访问学者<br>
                        1983.09-1984.07,1983.9-1984.7 清华大学计算机科学与技术系进修教师，担任助教工作<br>
                        1975.09-1978.06,1975.9-1978.6 华南师范大学数学系数学专业<br>
                    </p>
                    <p class="person-introduce">工作经历</p>
                    <p class=" person-page">
                        2003-至今，广东工业大学计算机学院；<br>
                        2014/10-2015/10，在美国新泽西理工学院(www.njit.edu)电气与计算机工程系任访问学者, 与该系杰出教授MengChu  Zhou (IEEE Fellow, AAAS Fellow)开展合作研究。<br>
                        1997-2000，江西财经大学信息管理学院计算机系；<br>

                    </p>
                    <p class="person-introduce">学科领域</p>
                    <p class="person-context">
                        科学学位：计算机科学与技术 软件工程  
                    </p>
                    <p class="person-context">
                        专业学位：计算机技术软件工程
                    </p>
                    
                    <p class="person-introduce">学术研究</p>
                    <p class="person-context">
                        1.目前在研课题包括：本人负责的1项国家自然科学基金面上项目(2017~2020)和2项广东省自然科学基金项目。曾参与多项国家自然科学基金项目的研究工作。主持或作为技术负责人完成了多个企业web信息系统、网络安全软件的研究与开发。
                    </p>
                    <p class="person-context">2.在IEEE Transactions等期刊、IEEE国际会议上发表10多篇论文(均被SCI或EI检索)。</p>
                    <p class="person-context">3.研究领域：优化调度（半导体制造、云计算）、离散事件系统、Petri网理论及应用。</p>
                    <p class="person-context">4.代表成果：发现半导体芯片制造系统(multi-cluster tools)存在1-晶圆(1-wafer)调度及其存在的充要条件，提出了求解能达生产周期下界的1-晶圆周期调度的高效算法。</p>
                    <p class="person-introduce">学术兼职</p>
                    <p class="person-page">
                        担任如下期刊的审稿人：<br>
                        1.IEEE Transactions on Semiconductor Manufacturing (SCI检索),<br>
                        2.Journal of Intelligent Manufacturing (SCI检索) ,<br>
                        3.IEEE Access (SCI检索) ,<br>
                        4.IEEE/CAA Journal of Automatica Sinica (SCI检索) ,<br>
                        5.控制理论与应用 (EI检索)。<br>
                        6.担任波兰国家自然科学基金OPUS项目评审员。<br>
                        7.担任如下国际会议的分会主席/程序委员会(PC)成员或技术委员会成员：<br>
                        分会主席： 2017 IEEE International Conference on Robotics and Automation, Singapore, May 2017<br>
                        程序委员会成员： (1)2017 IEEE International Conference on Networking, Sensing and Control (Calabria, Italy); (2)2017 International Conference on Modeling, Simulation and Control of Discrete Event Systems (Yilan, Taiwan)<br>
                        技术委员会成员：Human Centered Transportation Systems Technical Committee, IEEE SMC Society。<br>
                    </p>  

                    <p class="person-introduce">主要论文</p>
                    <p class="person-page">
                        期刊论文:<br>
                        [1] QingHua Zhu, MengChu Zhou, Yan Qiao, and NaiQi  Wu. Petri Net Modeling and Scheduling  of a Close-Down Process for Time-Constrained Single-Arm Cluster Tools. IEEE  Transactions on Systems, Man, and Cybernetics:  Systems, accepted, to appear<br>
                        [2] Q. H. Zhu, N.  Q. Wu, Y. Qiao, and M. C. Zhou. Optimal Scheduling of Complex Multi-cluster Tools based on Timed  Resource-oriented Petri Nets. IEEE Access, vol. 4, pp. 2096 – 2109, Apr. 2016 (http://ieeexplore.ieee.org/abstract/document/7445820/)<br>
                        [3] Q. H. Zhu, N. Q. Wu, Y.  Qiao, and M. C. Zhou. Scheduling of Single-Arm Multi-cluster Tools With Wafer Residency Time Constraints in  Semiconductor Manufacturing. IEEE Transactions on  Semiconductor Manufacturing, vol. 28,  no.1, pp. 117-125, Feb. 2015<br>
                        [4] Q. H. Zhu, N. Q. Wu, Y.  Qiao, and M. C. Zhou. Petri Net-Based Optimal One-Wafer Scheduling of Single-Arm Multi-Cluster Tools in  Semiconductor Manufacturing. IEEE Transactions on  Semiconductor Manufacturing, vol. 26,  no. 4, pp. 578~591, Nov. 2013. (http://ieeexplore.ieee.org/abstract/document/6579732/)<br>
                        [5] 朱清华，伍乃骐，滕少华 . 半导体制造中多组合设备的Petri网建模及死锁分析. 东南大学学报,2010,40(11) Sup. II :267-271 .<br>
                        [6] 朱清华，伍乃骐，滕少华. 多组合设备调度控制的研究综述. 控制理论与应用,2010,27(10):   1369-1375.<br>
                        [7] 朱清华, 陈剑云. 分布式SCADA系统的UML建模分析设计. 计算机工程, 2005, 31(6): 218-221<br>
                        会议论文：<br>
                        [1] QingHua Zhu, Mengchu  Zhou, Yan Qiao, and Naiqi Wu. Scheduling Close-down Processes Subject to Wafer Residency Constraints for Single-arm  Cluster Tools. 2015 IEEE International Conference on System, Man,  and Cybernetics, Hongkong, Oct. 2015,  pp. 521-526<br>
                        [2] QingHua Zhu, Yan  Qiao and MengChu Zhou. Petri Net Modeling and One-Wafer Scheduling of Single-Arm Tree-like Multi-Cluster Tools. 2015 IEEE International Conference on Automation Science and  Engineering, Sweden, Aug. 2015, pp. 292-297<br>
                        [3] QingHua Zhu, NaiQi Wu, Yan Qiao, and MengChu  Zhou. Modeling and Schedulability  Analysis of Single-Arm Multi-Cluster Tools with Residency Time Constraints via Petri Nets. 2014 IEEE International Conference on Automation Science and Engineering, Taipei,  Taiwan, Aug. 2014, pp. 81-86.<br>
                        [4] QingHua Zhu, NaiQi  Wu, Yan Qiao, and MengChu Zhou. Petri Net Modeling and One-Wafer Scheduling of Single-Arm Multi-Cluster Tools. 2013 IEEE International  Conference on Automation Science and Engineering,Madison, Wisconsin, Aug. 2013, pp. 862-867.<br>
                        [5] QingHua Zhu, NaiQi  Wu, Yan Qiao, and MengChu Zhou. Scheduling of Single-Arm Multi-Cluster Tools to Achieve the Minimum  Cycle Time. 2013 IEEE International  Conference on Robotics and Automation, Karlsruhe, Germany, May 2013, pp. 3555-3560. （中国计算机学会推荐B类高水平会议）<br>
                    </p>

                    <p class="person-introduce">教学活动</p>
                    <p class="person-page">
                        本科生课程：C语言程序设计，Java程序设计，面向对象的系统分析与设计
                    </p>

                    <!-- <p class="person-introduce">会议论文</p>
                    <P class="person-page">
                        [1] QingHua Zhu, Mengchu  Zhou, Yan Qiao, and Naiqi Wu. Scheduling Close-down Processes Subject to Wafer Residency Constraints for Single-arm  Cluster Tools. 2015 IEEE International Conference on System, Man,  and Cybernetics, Hongkong, Oct. 2015,  pp. 521-526<br>
                        [2] QingHua Zhu, Yan  Qiao and MengChu Zhou. Petri Net Modeling and One-Wafer Scheduling of Single-Arm Tree-like Multi-Cluster Tools. 2015 IEEE International Conference on Automation Science and  Engineering, Sweden, Aug. 2015, pp. 292-297<br>
                        [3] QingHua Zhu, NaiQi Wu, Yan Qiao, and MengChu  Zhou. Modeling and Schedulability  Analysis of Single-Arm Multi-Cluster Tools with Residency Time Constraints via Petri Nets. 2014 IEEE International Conference on Automation Science and Engineering, Taipei,  Taiwan, Aug. 2014, pp. 81-86.<br>
                        [4] QingHua Zhu, NaiQi  Wu, Yan Qiao, and MengChu Zhou. Petri Net Modeling and One-Wafer Scheduling of Single-Arm Multi-Cluster Tools. 2013 IEEE International  Conference on Automation Science and Engineering,Madison, Wisconsin, Aug. 2013, pp. 862-867.<br>
                        [5] QingHua Zhu, NaiQi  Wu, Yan Qiao, and MengChu Zhou. Scheduling of Single-Arm Multi-Cluster Tools to Achieve the Minimum  Cycle Time. 2013 IEEE International  Conference on Robotics and Automation, Karlsruhe, Germany, May 2013, pp. 3555-3560. （中国计算机学会推荐B类高水平会议）<br>
                    </P>   -->
                    <p class="person-introduce">科研项目</p>
                    <P class="person-page">
                        [1] 国家自然科学基金面上项目，多组合设备晶圆加工复杂瞬态过程的优化调度方法(2017-2020)，(61673123)<br>
                        [2] 广东省自然科学基金,半导体制造中小批量晶圆切换生产过程的优化调度(2016-2019),(2016A030313702)<br>
                        [3] 广东省自然科学基金,半导体芯片制造中线性多组合设备的调度优化(2015-2017),(2014A030310118)<br>
                        另外，主持或作为技术负责人完成了多个企业web信息系统、网络安全软件的研究与开发。<br>

                    </P>
               </div>
               <!-- end朱清华   -->
               <!-- start路璐 -->
               <div class="container-right" v-if="chooseIndex == 16">
                   <div class="back-container">
                       <h3 @click="chooseTitle(15)">&lt;&lt;返回上一级</h3>
                   </div>
                   <div class="image-container">
                       <img src="../style/images/lu.jpg">
                   </div>
                   <h1>路璐</h1>
                   <p class="person-introduce">主要荣誉</p>
                   <p class="person-context">1.2014年获得广东工业大学十佳授课教师</p>
                   <p class="person-context">2.获得2014-2015学年度，广东工业大学教学优秀一等奖</p>
                   <p class="person-context">3.获得2015-2016学年度，广东工业大学教学优秀一等奖</p>
                   <p class="person-introduce">指导获奖</p>
                   <p class="person-page">
                        1.指导大学生创新创业项目两项（国家级、省级各一项）,2012年<br>
                        2.以校第二完成人身份参与的广东省现代信息服务业发展专项资金项目《广业车盟电子商务综合信息服务平台》荣获广东省科学技术进步三等奖，2013<br>
                        3.2013年计算机学院青年教师教学竞赛，获一等奖<br>
                        4.2012-2013学年度考核优秀<br>
                        5.获得2015-2016学年度，广东工业大学教学优秀一等奖<br>
                        6.获得2014-2015学年度，广东工业大学教学优秀一等奖<br>
                        7.2015年公开发表”基于CDIO模式的数据库课程设计教学改革与实践”教改文章一篇<br>
                        8.获得2016年教学改革项目“基于android的数据库移动学习交互平台的研究与实践”省级立项1项。<br>
                        9.2017年公开发表“软件工程专业五位一体培养体系的探索与实践”教改文章一篇<br>
                        10.2018年公开发表“基于Android的数据库移动学习系统的设计与实现” 教改文章一篇<br>
                   </p>
               </div>
               <!-- end路璐 -->
                <!-- 教学改革与研究   -->
                <div class="container-right" v-if="chooseIndex == 11">
                   
                   <!-- <div class="image-container">
                       <img src="../style/images/chen.png">
                   </div> -->
                   <h1>广东工业大学计算机学院教学改革项目列表（省级、校级）： </h1>
                   
                   <p class="person-introduce">教改项目</p>
                   <p class=" person-page" >
                         <Table border :columns="columns1" :data="data1"></Table>
                    </p>
                     <p class="person-introduce">指导大学生创新创业训练项目</p>
                    <p class=" person-page" style="text-align: center;">
                        <img src="../style/images/1.png" alt="" >
                        <img src="../style/images/2.png" alt="" >
                        <img src="../style/images/3.png" alt="" >   
                    </p>
                    <p class="person-introduce">研究成果：专利和软著</p>   
                    <p class=" person-page" >
                        1.一种基于控制器的并行打印系统， 发明专利，专利申请号：201710321442.x <br>
                        2.一种嵌入式系统及单色位图压缩、主机， 发明专利，专利申请号：201710422841.5 <br>
                        3.一种求救方法、智能头盔、终端及系统， 发明专利，专利申请号：201710404316.0<br>
                        4.一种车祸监测方法及装置，专利申请号：发明专利，201710403952.1<br>
                        5.一种可穿戴设备电源管理方法及装置， 发明专利，专利申请号：201710404701.5<br>
                        6.一种基于体感设备的康复训练评估方法及系统， 发明专利，专利申请号：201710533108.0<br>
                        7.一种基于控制器的并行打印系统， 实用新型专利，专利申请号：201720511717.1<br>
                        8.一种嵌入式系统及单色位图压缩主机， 实用新型专利，专利申请号：201720659842.7<br>
                        9.一种智能急救头盔， 实用新型专利，专利申请号：201720626760.2<br>
                        10.一种车祸监测系统， 实用新型专利，专利申请号：201720632265.2<br>
                        11.一种可穿戴设备电源管理装置， 实用新型专利，专利申请号：201720632371.0<br>
                        12.一种基于体感设备的康复训练评估系统， 实用新型专利， 专利申请号：201720802908.3<br>
                        13.一款头盔内部硬件构造专利，外观专利， 专利申请号：2017302528844<br>
                        14.订单集群打印系统，计算机软件著作权，软著登记号：2017SR267145<br>
                        15.移动订单管理及打印系统，计算机软件著作权，软著登记号：2017SR274760<br>
                        16.微型控制打印系统，计算机软件著作权，软著登记号：2017SR274774<br>
                        17.智能急救头盔系统，计算机软件著作权，软著登记号：2017SR287905<br>
                        18.智能急救头盔APP软件，计算机软件著作权，软著登记号：2017SR288722<br>
                        19.康复训练及评估平台，计算机软件著作权，软著登记号：2017SR385752<br>
                        20.康复训练及评估移动管理系统，计算机软件著作权，软著登记号：2017SR385305<br>
                      
                    </p>
                    <p class="person-introduce">研究成果：教改论文</p>   
                    <p class=" person-page" >
                        1.2015年，”基于CDIO模式的数据库课程设计教学改革与实践”，2015年5期<br>
                        2.2017年，“软件工程专业五位一体培养体系的探索与实践”，2017年28期<br>
                    </p>
                     <p class=" person-page" style="text-align: center;">
                        <img src="../style/images/5.png" alt="" >
                        <img src="../style/images/6.png" alt="" >
                        <img src="../style/images/7.png" alt="" >   
                        <img src="../style/images/8.png" alt="" >
                    </p>
                    <p style="text-align: center;">
                        <img src="../style/images/4.png">
                    </p>
                    
                    

                   
               </div>
               <!-- end教学改革与研究   -->
               <!-- 教师竞赛获奖-->
                <div class="container-right" v-if="chooseIndex == 12">

                   <p class="person-introduce">谢光强：</p>
                   <p class=" person-page">
                        2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）<br>
                        2016 广东省第五届师德征文活动“二等奖”<br>
                        2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”<br>
                        2018 广东工业大学“师德标兵”<br>
                        2009 广东工业大学“十佳授课教师”<br>
                        2007 广东工业大学“学生最喜爱的教师”<br>
                        2012 广东工业大学“年度优秀教师”<br>
                        广东工业大学教学优秀“一等奖”（5次）、<br>
                        广东工业大学教学优秀“一等奖”“二等奖”（4次）<br>
                        2010 云浮市“科学技术奖二等奖”（排名第二）<br>
                        2013 广东工业大学“科研工作先进者”<br>
                        2011 广东工业大学“优秀指导老师”<br>
                        广东工业大学“优秀班主任”（2005-2008，2017）<br>
                        2007 计算机学院“师德先进个人”<br>
                        2009 广东工业大学“大学毕业生就业工作先进个人”<br>
                        2015 广东工业大学“优秀工会积极分子”<br>
                        2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”<br>
                        2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。<br>

                    </p>
                    <p class="person-introduce">吴伟民： </p>
                    <p class=" person-page">
                        1997.07 广东省计算机学会首届安利电脑科技奖特等奖，排名1/1<br>
                        1997.06 广东省教学成果二等奖，排名1/5<br>
                        1996.12 国家级科技进步三等奖，排名2/2<br>
                        1993.12 曾宪梓高等师范院校教师奖三等奖，排名1/1<br>
                        1993.11 霍英东青年教师奖三等奖，排名1/1<br>
                        1993.10 国务院政府特殊津贴专家<br>
                        1993.02 国家级普通高等学院优秀教材特等奖，排名2/3<br>

                    </p>
                    <p class="person-introduce">谢国波： </p>
                    <p class=" person-page">
                        广东工业大学科技先进工作者<br>
                        吴文俊人工智能科学技术进步三等奖<br>
                    </p>
                    <p class="person-introduce">曾颖： </p>
                    <p class=" person-page">
                        2016.01 广工工业大学“十佳授课教师”<br>
                        广东工业大学教学优秀“一等奖”（1次）<br>
                        广东工业大学教学优秀“二等奖”（2次）<br>
                    </p>
                     <p class="person-introduce">路璐： </p>
                    <p class=" person-page">
                        2014年获得广东工业大学十佳授课教师<br>
                        2014-2015学年度 广东工业大学教学优秀“一等奖”<br>
                        2015-2016学年度 广东工业大学教学优秀“一等奖”<br>
                    </p>
                    <p class="person-introduce">林伟： </p>
                    <p class=" person-page">
                        “DW系列微电脑多功能模糊控制蒸炖煲”98广州科技进步2等奖<br>
                    </p>
                    <p class="person-introduce">李杨： </p>
                    <p class=" person-page">
                        广东工业大学“十佳授课教师”<br>
                        广东工业大学“年度优秀教师”<br>
                        云浮市“科学技术奖二等奖”<br>
                        广东工业大学“科研工作先进者”<br>
                        广东工业大学教学优秀“一等奖”，“二等奖”<br>
                        广东工业大学“优秀指导老师”<br>
                        广东工业大学“优秀工会积极分子”<br>
                        广东工业大学年度考核“优秀”<br>
                        广东工业大学“优秀班主任”<br>
                        “计算机学院师德先进个人”<br>
                    </p>
                    <p class="person-introduce">陈云华： </p>
                    <p class=" person-page">
                        中国软件行业协会嵌入式系统分会中国嵌入式系统产业联盟“嵌入式Linux系统开发最具潜力讲师”<br>

                        “粤嵌杯”广东省大学生嵌入式与物联网设计大赛“一等奖”<br>

                        广东工业大学教学优秀“二等奖”<br>

                        广东工业大学毕业生就业工作“先进个人”<br>

                        广东工业大学毕业设计（论文）创新奖<br>

                        广东工业大学年度考核“优秀”<br>
                    </p>
                    <p class="person-introduce">孙宣东： </p>
                    <p class=" person-page">
                        分组等重码实验平台研究与实现（项目编号201211845053）<br>
                        基于GE码的新型分布式存储系统研究与实现 <br>
                        面向福利彩票行业的数据存储备份系统研究<br>
                        ACM在线学习与测试平台的建设与应用<br>
                    </p>
                   

               </div>
               <!-- end教师竞赛获奖  -->
               <!--学生竞赛获奖-->
                <div class="container-right" v-if="chooseIndex == 13">
                   

                   
                   <!-- <p class="person-introduce">QG工作室：</p> -->
                   <p class=" person-page">
                        1. 大学生“小平科技创新团队”（全国50支，广东省2支）<br>
                        2. 第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛，“特等奖”（全国共三项）<br>
                        3. 第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛，“一等奖”<br>
                        4.“挑战杯”广东省大学生课外学术科技作品竞赛，“特等奖”3项<br>
                        5.“挑战杯”广东省大学生课外学术科技作品竞赛，“一等奖”3项、“二等奖”1项<br>
                        6 .“挑战杯-创青春"广东大学生创业大赛，银奖<br>
                        7.全国高校移动互联网应用创新大赛“二等奖”1项、“三等奖”1项。<br>
                        8.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛全国总决赛，JAVA软件开发、嵌入式设计与开发组，“三等奖”各1项<br>
                        9.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛广东省赛区C/C++程序设计、JAVA软件开发、嵌入式设计与开发组，“一等奖”5项，“二等奖”10项，“三等奖”10项<br>
                        10. 泛珠三角大学生计算机作品赛，“金奖”1项，“铜奖”3项，“优胜奖”1项<br>
                        11.广东省“高校杯”软件设计竞赛，“一等奖”2项、“二等奖”5项<br>
                        12.广东省计算机专业本科大学生毕业作品赛，“一等奖”4项，“二等奖”1项<br>
                        13.广东省大学生数字图像图形创作大赛，“一等奖”3项，“二等奖”2项<br>
                        14.广东省高校移动互联网应用开发创意大赛“金奖”1项，“银奖”1项<br>
                        15.广东省大学生电子设计竞赛，“二等奖”1项，“三等奖”2项<br>
                        16. 广东省大学生“合泰杯”单片机应用设计邀请赛，“二等奖”2项<br>
                        17. 广东省“粤嵌杯”大学生嵌入式与物联网设计大赛，“二等奖”1项，“三等奖”2项<br>
                        18. 广东省粤港澳大学生计算机软件应用大赛，“二等奖”和“最佳用户体验奖”<br>
                        19. 广东省Java程序员竞赛“三等奖”<br>
                        20. 广东省C程序员竞赛“二等奖”、“三等奖”<br>
                        21. 全国大学生软件测试大赛“二等奖”1项，“三等奖”2项<br>

                    </p>

                    <!-- <p class="person-introduce">ACM：</p> -->
                    <p class="person-context">
                        我校在2016年国际大学生程序设计竞赛亚洲区中国区总决赛，最终取得6金5银7铜的好成绩，在全国参赛高校中名列前茅，奖牌数和金牌数均创我校参加该项赛事以来的最好成绩。
                    </p>
               </div>
               <!-- end学生竞赛获奖  -->
                <!--老师的头像-->
                <div class="container-right" v-if="chooseIndex == 14">
                   <div class="teacher-context">
                        <div class="teacher-item" @click="chooseTitle(0)">
                            <img src="../style/images/xie.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">谢光强</div>
                                <div class="teacher-doctor">博士、副教授</div>
                                <div class="teacher-doctor">广东工业大学计算机学院副院长</div>
                                <div class="teacher-doctor">中国人工智能学会科普工作委员会委员</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">人工智能、移动互联网、数据挖掘</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(1)">
                            <img src="../style/images/wu.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">吴伟民</div>
                                <div class="teacher-doctor">教授、研究生导师</div>
                                <div class="teacher-doctor">广东工业大学计算机学院副院长</div>
                                <div class="teacher-doctor">广东省计算机学会常务理事、图像图形分会秘书长</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">数据结构与算法、可视计算与虚拟机、系统介入与信息安全</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(2)">
                            <img src="../style/images/an.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">曾安</div>
                                <div class="teacher-doctor">教授、博士</div>
                                <div class="teacher-doctor">广东工业大学计算机学院任教</div>
                                <div class="teacher-doctor">IEEE会员</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">人工智能、数据挖掘</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(3)">
                            <img src="../style/images/bo.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">谢国波</div>
                                <div class="teacher-doctor">教授、硕士生导师</div>
                                <div class="teacher-doctor">广东工业大学教学科研工作者</div>
                                <div class="teacher-doctor">广东省高端厨房电器企业重点实验室负责人</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">混沌保密通信，云计算与大数据，基于机器视觉的高精度检测和测量</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(6)">
                            <img src="../style/images/wei.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">林伟</div>
                                <div class="teacher-doctor">副教授</div>
                                <div class="teacher-doctor">广东工业大学计算机学院教师</div>
                                <!-- <div class="teacher-doctor">中国人工智能学会科普工作委员会委员</div> -->
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">计算机管理系统，嵌入式系统应用</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(4)">
                            <img src="../style/images/yang.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">李杨</div>
                                <div class="teacher-doctor">博士，副教授</div>
                                <div class="teacher-doctor">广东工业大学计算机学院计算机科学系副主任</div>
                                <div class="teacher-doctor">广东省计算机学会大数据专业委员会会员</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">人工智能、移动互联网、数据挖掘</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(10)">
                            <img src="../style/images/zhu.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">朱清华</div>
                                <div class="teacher-doctor">博士、副教授</div>
                                <div class="teacher-doctor">广东工业大学计算机学院硕士生导师</div>
                                <div class="teacher-doctor">IEEE 高级会员，ACM会员</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(5)">
                            <img src="../style/images/chen.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">陈云华</div>
                                <div class="teacher-doctor">博士</div>
                                <div class="teacher-doctor">广东工业大学计算机学院讲师</div>
                                <div class="teacher-doctor">CCF会员</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">智能视频监控、面部表情识别、图像超分辨率、智能与软计算</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(8)">
                            <img src="../style/images/ying.jpg">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">曾颖</div>
                                <div class="teacher-doctor">十佳青年授课教师</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(9)">
                            <img src="../style/images/xuan.jpg">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">孙宣东</div>
                                <div class="teacher-doctor">ACM指导教师</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(7)">
                            <img src="../style/images/hui.jpg">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">汪明慧</div>

                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">基于可信计算技术的自助服务系统终端可信环境构建研究</div>
                            </div>
                        </div> 
                        <div class="teacher-item" @click="chooseTitle(16)">
                            <img src="../style/images/lu.jpg">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">路璐</div>
                                <div class="teacher-doctor">十佳青年授课教师</div>
                            </div>
                        </div>
                    </div>
               </div>
               <!-- end老师的头像  -->
               <!--老师的头像-->
                <div class="container-right" v-if="chooseIndex == 15">
                   <div class="teacher-context">
                        <div class="teacher-item" @click="chooseTitle(1)">
                            <img src="../style/images/wu.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">吴伟民</div>
                                <div class="teacher-doctor">教授、研究生导师</div>
                                <div class="teacher-doctor">广东工业大学计算机学院副院长</div>
                                <div class="teacher-doctor">广东省计算机学会常务理事、图像图形分会秘书长</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">数据结构与算法、可视计算与虚拟机、系统介入与信息安全</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(2)">
                            <img src="../style/images/an.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">曾安</div>
                                <div class="teacher-doctor">教授、博士</div>
                                <div class="teacher-doctor">广东工业大学计算机学院任教</div>
                                <div class="teacher-doctor">IEEE会员</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">人工智能、数据挖掘</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(3)">
                            <img src="../style/images/bo.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">谢国波</div>
                                <div class="teacher-doctor">教授、硕士生导师</div>
                                <div class="teacher-doctor">广东工业大学教学科研工作者</div>
                                <div class="teacher-doctor">广东省高端厨房电器企业重点实验室负责人</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">混沌保密通信，云计算与大数据，基于机器视觉的高精度检测和测量</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(6)">
                            <img src="../style/images/wei.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">林伟</div>
                                <div class="teacher-doctor">副教授</div>
                                <div class="teacher-doctor">广东工业大学计算机学院教师</div>
                                <!-- <div class="teacher-doctor">中国人工智能学会科普工作委员会委员</div> -->
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">计算机管理系统，嵌入式系统应用</div>
                        </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(4)">
                            <img src="../style/images/yang.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">李杨</div>
                                <div class="teacher-doctor">博士，副教授</div>
                                <div class="teacher-doctor">广东工业大学计算机学院计算机科学系副主任</div>
                                <div class="teacher-doctor">广东省计算机学会大数据专业委员会会员</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">人工智能、移动互联网、数据挖掘</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(10)">
                            <img src="../style/images/zhu.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">朱清华</div>
                                <div class="teacher-doctor">博士、副教授</div>
                                <div class="teacher-doctor">广东工业大学计算机学院硕士生导师</div>
                                <div class="teacher-doctor">IEEE 高级会员，ACM会员</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(5)">
                            <img src="../style/images/chen.png">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">陈云华</div>
                                <div class="teacher-doctor">博士</div>
                                <div class="teacher-doctor">广东工业大学计算机学院讲师</div>
                                <div class="teacher-doctor">CCF会员</div>
                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">智能视频监控、面部表情识别、图像超分辨率、智能与软计算</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(8)">
                            <img src="../style/images/ying.jpg">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">曾颖</div>
                                <div class="teacher-doctor">十佳青年授课教师</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(9)">
                            <img src="../style/images/xuan.jpg">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">孙宣东</div>
                                <div class="teacher-doctor">ACM指导教师</div>
                            </div>
                        </div>
                        <div class="teacher-item" @click="chooseTitle(7)">
                            <img src="../style/images/hui.jpg">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">汪明慧</div>

                                <div class="teacher-profession">主要研究领域:</div>
                                <div class="teacher-doctor">基于可信计算技术的自助服务系统终端可信环境构建研究</div>
                            </div>
                        </div> 
                        <div class="teacher-item" @click="chooseTitle(16)">
                            <img src="../style/images/lu.jpg">
                            <div class="teacher-item-container">
                                <div class="teacher-name-2">路璐</div>
                                <div class="teacher-doctor">十佳青年授课教师</div>
                            </div>
                        </div>
                    </div>
               </div>
               <!-- end老师的头像  -->
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
		name: 'teacher',
		components:{navheader},
		data(){
			return {
                columns1: [
                    {
                        title: '序号',
                        key: 'num'
                    },
                    {
                        title: '时间',
                        key: 'time'
                    },
                    {
                        title: '教改项目名称',
                        key: 'project'
                    },
                    {
                        title: '负责人',
                        key: 'person'
                    },
                    {
                        title: '项目级别',
                        key: 'grade'
                    }
                   
                ],
                data1: [
                    {
                        num: '1',
                        time: 2015,
                        project: '广东省精品资源共享课《程序设计》',
                        grade: '省级',
                        person: '谢光强'

                    },
                    {
                        num: '2',
                        time: 2016,
                        project: '广东省教学改革项目《基于android的数据库移动学习交互平台的研究与实践》',
                        grade: '省级',
                        person: '路璐'
                    },
                    {
                        num: '3',
                        time: 2015,
                        project: '《高水平实验教学示范中心建设的探索与研究》',
                        grade: '校级',
                        person: '谢光强'
                    },
                    {
                        num: '4',
                        time: 2014,
                        project: '《挑战杯竞赛为平台培养大学生创新能力的探索和研究》',
                        grade: '校级',
                         person: '谢光强'
                    }
                ],
                // columns2: [
                //     {
                //         title: '序号',
                //         key: 'num'
                //     },
                //     {
                //         title: '年份',
                //         key: 'time'
                //     },
                //     {
                //         title: '项目编号',
                //         key: 'projectNum'
                //     },
                //     {
                //         title: '项目名称',
                //         key: 'project'
                //     },
                //     {
                //         title: '负责人',
                //         key: 'person'
                //     },
                //     {
                //         title: '指导老师',
                //         key: 'teacher'
                //     },
                //     {
                //         title: '项目级别',
                //         key: 'grade'
                //     }
                   
                // ],
                // data2: [
                //     {
                //         num: '1',
                //         time: 2018,
                //         projectNum: 201811845026,
                //         project: '基于半监督学习的节能推荐方案研究',
                //         grade: '国家级',
                //         preson: '郑臣河',
                //         teacher: '谢光强'

                //     },
                //     {
                //         num: '2',
                //         time: 2016,
                //         project: '广东省教学改革项目《基于android的数据库移动学习交互平台的研究与实践》',
                //         grade: '省级',
                //         person: '路璐'
                //     },
                //     {
                //         num: '3',
                //         time: 2015,
                //         project: '《高水平实验教学示范中心建设的探索与研究》',
                //         grade: '校级',
                //         person: '谢光强'
                //     },
                //     {
                //         num: '4',
                //         time: 2014,
                //         project: '《挑战杯竞赛为平台培养大学生创新能力的探索和研究》',
                //         grade: '校级',
                //          person: '谢光强'
                //     }
                // ],
                index: 2,
                chooseIndex: 14,
                teachers: [{
                    name: '谢光强',
                    class: 'isClicked'
                }, {
                    name: '吴伟民',
                    class: null,
                }, {
                    name: '曾安',
                    class: null,
                }, {
                    name: '谢国波',
                    class: null,
                }, {
                    name: '李杨',
                    class: null,
                }, {
                    name: '陈云华',
                    class: null,
                }, {
                    name: '林伟',
                    class: null,
                }, {
                    name: '汪明慧',
                    class: null,
                }, {
                    name: '曾颖',
                    class: null,
                }, {
                    name: '孙宣东',
                    class: null,
                }, {
                    name: '朱清华',
                    class: null,
                }],

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
                for (let i = 0; i < 11; i++) {
                    this.teachers[i].class = 'null'
                }
                if (index < 11) {
                    this.chooseIndex = index
                    this.teachers[index].class = 'isClicked'
                } else {
                    this.chooseIndex = index
                }
            }
		},
		created: function () {

        },


	}
</script>
