let app = getApp()
var i=0
Page({
  data: {
    userInfo: {},
    navs: [
      {
        image: '../../assets/home_entity.png',
        text: '历史成绩',
        datasource: "history/history" 
      },

      {
        image: '../../assets/home_play.png',
        text: '去考试',
        datasource: "todo/todo" 
      },
      {
        image: '../../assets/home_door.png',
        text: '排名',
        datasource: "sort/sort" 
      }
    ]},
  onLoad() {
    app.getUserInfo(userInfo => {
      this.setData({
        userInfo: userInfo
      })
    })
  },
  navToPage(event) {
    let route = event.currentTarget.dataset.route
    wx.navigateTo({
      url: route
    })
  },
  clickTest(e){
    console.log(i++)
  }
})