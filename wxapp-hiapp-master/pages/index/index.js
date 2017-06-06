//wx-drawer
const MENU_WIDTH_SCALE = 0.4;
var app = getApp()
var countTooGetLocation = 0;
var total_micro_second = 0;
var startTask = 0;//判断是否已经开始任务
var totalSecond = 0;
var oriMeters = 0.0;
Page({
  data: {
    ui: {
      windowWidth: 0,
      menuWidth: 0,
      offsetLeft: 0,
      tStart: true,
    },
    clock: '',
    isLocation: false,
    latitude: 0,
    longitude: 0,
    markers: [],
    polyline: [{ points: [], color: '#A020F0',width:3}],
    covers: [],
    meters: 0.00,
    startTime: (new Date()),
    endTime: null,
    startDisabled:false,
    stopDisabled:true
  },
  onLoad() {
    try {
      app.getUserInfo(userInfo => {
        this.setData({
          userInfo: userInfo,
        })
      })

      let res = wx.getSystemInfoSync()
      this.windowWidth = res.windowWidth;
      this.windowHeight = res.windowHeight;
      this.data.ui.menuWidth = this.windowWidth * MENU_WIDTH_SCALE;
      this.data.ui.offsetLeft = 0;
      this.data.ui.windowWidth = res.windowWidth;
      this.setData({ ui: this.data.ui, mapHeight: this.windowHeight * 0.87 });
      this.getLocation()
    } catch (e) {
    }
  },
 
  handlerPageTap(e) {
    let {ui} = this.data;
    if (ui.offsetLeft != 0) {
      ui.offsetLeft = 0;
      this.setData({ ui: ui })
    }
  },
  handlerAvatarTap(e) {
    let {ui} = this.data;
    if (ui.offsetLeft == 0) {
      ui.offsetLeft = ui.menuWidth;
      this.setData({ ui: ui })
    }else{
      ui.offsetLeft =0;
      this.setData({ ui: ui })
    }
  },
  navToPage(event) {
    let route = event.currentTarget.dataset.route
    wx.navigateTo({
      url: route
    })
  },
  setMarkers:function(){
    var that = this
    wx.getLocation({

      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        var maker = {
          latitude: res.latitude,
          longitude: res.longitude,
          iconPath:startTask==1?'../../assets/start.png':'../../assets/end.png'
        }
        var markers = that.data.markers;
        markers.push(maker);
        that.setData({
          markers:markers
        })
      }
    });
  },
  //****************************
  getLocation: function () {
    var that = this
    wx.getLocation({

      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {


        //make datas 
        var newPoint = {
          latitude: res.latitude,
          longitude: res.longitude,

        };
        var polyline = that.data.polyline;
        if(startTask ==1){
          polyline[0].points.push(newPoint);
        }

        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          polyline: polyline
        });
      },
    })
  },
  //****************************
  startTask: function () {
    if (startTask == 1) {
      return;
    }

    this.setData({
      markers: [],
      polyline: [{ points: [], color: '#A020F0', width: 3 }]
    })


    startTask = 1;
    this.setData({
      startDisabled:true,
      stopDisabled:false,
      startTime:new Date()});
    this.setMarkers();
    count_down(this);
    
  },


  //****************************
  stopTask: function () {
    startTask = 0;
    this.setData({ 
      startDisabled: false, 
      stopDisabled: true,
      endTime:(new Date()) })
    this.setMarkers();
    var markers = this.data.markers;
    console.log(markers);
    var polyline = this.data.polyline;
    console.log(polyline);
    console.log(this.data.startTime);
    console.log(this.data.endTime)
   
  },

})

function getDistance(lat1, lng1, lat2, lng2) {
  var dis = 0;
  var radLat1 = toRadians(lat1);
  var radLat2 = toRadians(lat2);
  var deltaLat = radLat1 - radLat2;
  var deltaLng = toRadians(lng1) - toRadians(lng2);
  var dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
  return dis * 6378137;

  function toRadians(d) { return d * Math.PI / 180; }
}

function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}




/* 毫秒级倒计时 */
function count_down(that) {

  if (startTask == 0) {
    return;
  }



  if (countTooGetLocation >= 5000) { //1000为1s
    that.getLocation();
    countTooGetLocation = 0;
  }


  setTimeout
  setTimeout(function () {
    countTooGetLocation += 10;
    count_down(that);
  }
    , 10
  )
}
