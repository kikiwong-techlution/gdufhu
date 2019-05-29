// pages/Mine/Mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    inputValue: '',    //搜索内容
    currentTab: 0,     //tab切换
    pageShow: false,
    searchPanelShow: false,
    open: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      //由于getUserInfo是网络请求，可能会在page.load之后才会返回
      //所以此处加入callback以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      //在没有open-type-getUserInfo版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
  },

  /**获取用户信息 */
  getUserInfo: function (event) {
    console.log(event)
    app.globalData.userInfo = event.detail.userInfo
    this.setData({
      userInfo: event.detail.userInfo,
      hasUserInfo: true
    })
  },


  /*搜索框切换面板*/
  onBindFocus: function () {
    this.setData({
      pageShow: true,
      searchPanelShow: true
    })
  },

  /*隐藏搜索面板 */
  onCancelImgTap: function () {
    this.setData({
      pageShow: false,
      searchPanelShow: false,
      inputValue: ''
    })
  },

  /*Navtab切换 */
  switchNav: function (event) {
    const that = this
    if (this.data.currentTab === event.target.dataset.current) {
      return false
    } else {
      that.setData({
        currentTab: event.target.dataset.current
      })
    }
  },

  swiperChange: function (event) {
    this.setData({
      currentTab: event.detail.current
    })
  },

  /**
  * 默认收藏夹
  */
  showitem: function () {
    this.setData({
      open: !this.data.open
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})