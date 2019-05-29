// pages/Home/Home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',    //搜索内容
    currentTab:0,     //tab切换
    pageShow:true,
    searchPanelShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /*搜索框切换面板*/
  onBindFocus: function () {
    this.setData({
      pageShow:false,
      searchPanelShow:true
    })
  },

  /*隐藏搜索面板 */
  onCancelImgTap: function () {
    this.setData({
      pageShow:true,
      searchPanelShow:false,
      inputValue:''
    })
  },

  /*Navtab切换 */
  switchNav: function (event) {
    var that = this
    if (this.data.currentTab === event.target.dataset.current) {
      return false
    }else {
      that.setData({
        currentTab:event.target.dataset.current,
      })
    }
  },

  swiperChange: function (event) {
    this.setData({
      currentTab:event.detail.current
    })
  },

  /*提问页面跳转 */
  onTabJump: function () {
    wx.navigateTo({
      url: '../Home/Quiz/Quiz',
      success: function () {
        console.log('Jump success')
      },
      fail: function () {
        console.log('Jump fail')
      },
      complete: function () {
        console.log('Jump complete')
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },
  pageLifetimes: {
    show () {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})