let app = getApp()
let data = require('../examData.js')
var subject ='';
var i = 0;
// todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    modalHidden2:true,
    rightAnswerHidden:true,
    rightAnser:'',
    disabled:false,
    beginTime:new Date(),
    // submitText:'',
    // "desc":'',
    // "type":'',
    checkOrRadio:'radio',
    checkboxShow:'none',
    radioShow:'block',
    items:[] 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    i=0
    subject = data.mtData()
    this.setsubjectdata()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data)
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
  setsubjectdata:function(){
    for(var s=0;s<subject[i].Answer.length;s++){
      if(subject[i].selected.indexOf(subject[i].Answer[s].name) >=0){
        subject[i].Answer[s].checked ='true'

      }else{
        subject[i].Answer[s] = { "value": subject[i].Answer[s].value,
          "name": subject[i].Answer[s].name}
      }
    }



    this.setData({
      desc: (i + 1) + '.' + subject[i].Desc + '(' + subject[i].Fraction+'分)',
      type: subject[i].type,
      checkboxShow: subject[i].type == '多选' ? 'block' : 'none',
      radioShow: subject[i].type == '多选' ? 'none' : 'block',
      items: subject[i].Answer,
      rightAnser: subject[i].RightAnswer
    })
  },
  tap_start: function (e) {
    // touchstart事件 
    this.data.mark = this.data.newmark = e.touches[0].pageX;
  },
  tap_drag: function (e) {
    // touchmove事件 
    /* 
     * 手指从左向右移动 
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标 
     */
    this.data.newmark = e.touches[0].pageX;
    if (this.data.mark+10 < this.data.newmark) {
      this.istoright = true;
    }
    /* 
     * 手指从右向左移动 
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标 
     */
    if (this.data.mark-10 > this.data.newmark) {
      this.istoright = false;
    }
    this.data.mark = this.data.newmark;
  },
  tap_end: function (e) {
    // touchend事件 
    this.data.mark = 0;
    this.data.newmark = 0;
    
    if (this.istoright) {
     if(i<=0){
       this.setData({
         modalText:"已经是第一题了！",
         modalHidden: false
       })
       }else{
         i--;
         this.setsubjectdata()
       }
    } else if(this.istoright==false){
      if(i>=subject.length){
        this.setData({
          modalText: "已经是最后一题了！",
          modalHidden: false
        })
      }else{
        i++
        this.setsubjectdata()
      }
    }
    this.istoright = null
  },
  checkboxchange:function(e){
    var selected = '';
    for(var s=0;s<e.detail.value.length;s++){
      selected +=e.detail.value[s];
    }
    subject[i].selected = selected;
  },
  radiochange:function(e){
    subject[i].selected = e.detail.value;
  },

  modalChange2: function (e) {
    this.setData({
      modalHidden: true
    })
  },
  submit:function(e){
    this.setData({
      modalHidden2:false,
      submitText:'确认提交吗？'
    })
  },
  confirm:function(e){
    this.setData({
      modalHidden2:true,
      disabled:true
    })
    var sort = 0;
    for(var s=0;s<subject.length;s++){
      if (subject[s].selected != null && subject[s].selected !=''){
        if (subject[s].selected == subject[s].RightAnswer){
          sort += subject[s].Fraction;
        } else if (subject[s].RightAnswer.indexOf(subject[s].selected)>=0){
          sort += subject[s].Fraction/2;
        }
      }
    }
    var spanTime = ((new Date()).getTime()-
     (new Date(this.data.beginTime)).getTime())/1000/60;
    spanTime = spanTime.toFixed(2)
    // console.log((new Date()).getTime)

    this.setData({
      modalText:'提交成功！您的分数为'+sort+"分,耗时:"+spanTime+"分",
      modalHidden:false,
      rightAnswerHidden:false
    })




  },
  cancel:function(e){
    this.setData({
      modalHidden2: true
    })
  }
})
