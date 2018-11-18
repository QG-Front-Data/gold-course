import types from '../types/user'
import Vue from 'vue'
import { myAxios, IP } from '@/utils/interaction'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem
// console.log("+++", types);
// const namespaced = true;
const state = {
  userName: '',
  account: '',
  // admin: 0, // 0：管理员，1：普通用户
  role: null, // 1是游客，2是成员，3是秘书，4是行政助手，5是宣传助手，6是活动助手，7是超级管理员
  location: null
}

const getters = {

}

const actions = {
  // [types.actions.loginoutloginout]: (context, data) => {
  //   // context: commit,dispatch,getters,state
  //   return new Promise((resolve, reject) => {
  //     myAxios({
  //       method: 'GET',
  //       url: 'login/logout',
  //       headers: {'Content-Type': 'application/json'}
  //     }).then(function (res) {
  //       // res = JSON.parse(JSON.stringify(res))
  //       // if (res.data.state === 200) {
  //       //   context.commit(types.mutations.setInfo, res.data.data)
  //         resolve(res.data.data)
  //       // } else if (res.data.state === 0) {
  //       //   resolve(res.data.data)
  //       // } else {
  //       //   this.$Notice.error({
  //       //     title: '请求失败',
  //       //     desc: '请求失败请刷新页面'
  //       //   })
  //       // }
  //     }).catch(function (err) {
  //       reject(err)
  //     })
  //   })
  // },
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
