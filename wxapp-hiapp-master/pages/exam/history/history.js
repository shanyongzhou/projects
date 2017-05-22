// history.js
let app = getApp()
let data = require('historyData.js')
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
    var newData = data.mtData();
    var finaData = [];
    for(var i=0;i<newData.length;i++){
      finaData.push({
        color: newData[i].Fraction >= 60 ? '#90EE90' :'#FFA54F',
        image: newData[i].Fraction >= 60 ? '../../../assets/airline.png' : '../../../assets/airline.png',
        title: newData[i].date,
        subTitle: newData[i].Fraction,
        Fraction: newData[i].consuming
      })
    }
    this.setData({
      items:finaData
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
  
  }
})