Component({
  properties: {

  },
  data: {
    userlist: [
      {
        type: '我的创作',
        amount: 4
      },
      {
        type: '关注',
        amount: 3
      },
      {
        type: '收藏',
        amount: 2
      },
      {
        type: '最近浏览',
        amount: 1
      }
    ]
  },
  lifetimes: {
    attached: function() {
      
    }
  }
})