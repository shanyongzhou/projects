// sort.js
let data = require('sortData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['最高分由高到低', '最高分由低到高', '平均分由高到低', '平均分由低到高', '考试次数由高到低', '考试次数由低到高', '总耗时由高到低', '总耗时由低到高', '平均耗时由高到低', '平均分数由低到高'],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var date = new Date();
    var endDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    date.setMonth(date.getMonth() - 1);
    var startDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var da = data.mtData()
    this.setData({
      startDate: startDate,
      endDate: endDate,
      sorts:data.mtData()
    })

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
  bindEndDateChange:function(e){
    var da = data.mtData();
    this.setData({
      endDate : e.detail.value,
      sorts:da
    })
    
  },
  bindStartDateChange: function (e) {
    var da = data.mtData();
    this.setData({
      startDate: e.detail.value,
      sorts: da
    })
  },
  bindPickerChange:function(e){
    //console.log(e)
    var startDate = this.data.startDate;
    var endDate = this.data.endDate;
    var da = data.mtData();
    this.setData({
      sorts:da
    })
  }
})