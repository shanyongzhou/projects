// patrol.js
let data = require('patrolData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    var startDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    date.setDate(date.getDate() + 7);
    var endDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    
    this.setData({
      startDate: startDate,
      endDate: endDate,
      detail: data.mtData()
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
  onItemClick:function(){

  },
  bindEndDateChange: function (e) {
    var da = data.mtData();
    this.setData({
      endDate: e.detail.value,
      sorts: da
    })

  },
  bindStartDateChange: function (e) {
    var da = data.mtData();
    this.setData({
      startDate: e.detail.value,
      sorts: da
    })
  },
  navToPage(event) {
    let route = event.currentTarget.dataset.route;
    wx.navigateTo({
      url: route
    })
  }
})