// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
     exed:0,
     caneat:1452,
     RcoEat:1452,
     all:454,
     lastdayeat:1351,
     lastdayrun:1224,
     breakfast:"鸡蛋、玉米、牛奶",
     lunch:"凉拌黄瓜、爆炒熊猫",
     dinner:"蒸熊掌、红烧老虎、卤狮子",
     extraFood:"番茄炒鸡、包子菜",
     hadex:[{ex:"跑步",ka:114},{ex:"跳绳",ka:241}]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getfood();
    this.geteat();
    this.getka();
  },
  onshow(){
    
    
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

test: function () {
	wx.navigateTo({
      url: "../p/p"
    })
},

getfood: function(){
  var app=getApp();
  var that = this;
    wx.request({
      url: 'http://localhost:8080/extrafood/'+app.globalData.recipeId.toString(),
      method: 'GET', 
      header: {
        'content-type':  'application/json'
      },
      success: function(res:any) {
       
          that.setData({ 
            breakfast:res.data.data.recipe.breakfast,
            lunch:res.data.data.recipe.lunch,
            dinner:res.data.data.recipe.dinner,
            extraFood:res.data.data.recipe.extraFood,
          }) 
          console.log(res.data)

       
      },
      fail: function() {
        wx.showToast({
          title: "网络连接失败",
          duration: 3000
        })
 
      },
    })

},
geteat: function(){
  var app=getApp();
  var that = this;
    wx.request({
      url: 'http://localhost:8080/users/consume/'+app.globalData.userId.toString(),
      method: 'GET', 
      header: {
        'content-type':  'application/json'
      },
      success: function(res:any) {
       
          that.setData({   
           caneat:res.data.data,
          }) 
          console.log(res.data)
        
       
      },
      fail: function() {
        wx.showToast({
          title: "网络连接失败",
          duration: 3000
        })
 
      },
    })

},

getka: function(){
  var that = this;
  var app=getApp();
    wx.request({
      url: 'http://localhost:8080/users/recom/'+app.globalData.userId.toString(),
      method: 'GET', 
      header: {
        'content-type':  'application/json'
      },
      success: function(res) {
       
          that.setData({   
           b : res.data,
          }) 
          console.log(res.data)
        
       
      },
      fail: function() {
        wx.showToast({
          title: "网络连接失败",
          duration: 3000
        })
 
      },
    })

},
getrecord:function(res){
  var that = this;
  var app=getApp();
    wx.request({
      url: 'http://localhost:8080/users/extrafood/calorie/'+app.globalData.userId.toString(),
      method: 'GET', 
      header: {
        'content-type':  'application/json'
      },
      success: function(res) {
       
          that.setData({   
           n : res.data,
          }) 
          console.log(res.data)
        
       
      },
      fail: function() {
        wx.showToast({
          title: "网络连接失败",
          duration: 3000
        })
 
      },
    })
}
})
