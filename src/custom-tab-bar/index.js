Component({
  data: {
    selected: 0,
    color: '#fff',
    selectedColor: '#136DFF',
    list: [{
      pagePath: '/pages/Home/Home',
      iconPath: '/images/icon_Home.png',
      selectedIconPath: '/images/icon_Home_HL.png',
      text: '首页'
    }, {
      pagePath: '/pages/Mine/Mine',
      iconPath: '/images/icon_Mine.png',
      selectedIconPath: '/images/icon_Mine_HL.png',
      text: '我的'
    }]
  },
  methods: {
    switchTab (e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
