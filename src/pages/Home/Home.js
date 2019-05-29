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
      url: 'Quiz/Quiz',
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
  /*回答详情跳转*/
  onTapToRecommend: function (event) {
    // var answerId = event.currentTarget.dataset.answerId
    // wx.navigateTo({
    //   url: 'Recommend/Recommend?id=' + answerId,
    // })
    wx.navigateTo({
      url: 'Recommend/Recommend'
    })
  },

  /*热榜问题跳转*/
  onTapToHot: function (event) {
    // var hotId = event.currentTarget.dataset.hotId
    // console.log(hotId)
    // wx.navigateTo({
    //   url: 'Hot/Hot?id=' + hotId,
    // })
    wx.navigateTo({
      url: 'Hot/Hot'
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
})
