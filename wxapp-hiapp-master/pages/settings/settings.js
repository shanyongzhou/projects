let app = getApp()

Page({
  data:{
    abouthidden:"",
    userInfo: {}
  },
  onReady(){
    this.setData({
      abouthidden: "none"
    })
  },


  onLoad() {
    app.getUserInfo(userInfo => {
      this.setData({
        userInfo: userInfo,
      })
    })
  },
  navToPage(event) {
    let route = event.currentTarget.dataset.route
    wx.navigateTo({
      url: route
    })
  }
})
