// pages/p/p.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    p:"鸡蛋",
    p2:100,
    p1:200,
    breakfast:[
     {eat:"鸡蛋",ka:100},
     {eat:"玉米",ka:200},
     {eat:"牛奶",ka:200}
    ],
    lunch:[
      {eat:"凉拌黄瓜",ka:100},
      {eat:"爆炒熊猫",ka:200}
    ],
    dinner:[
      {eat:"鸡蛋",ka:100},
      {eat:"玉米",ka:200},
      {eat:"牛奶",ka:200}
    ],
    extre:[
      {eat:"凉拌黄瓜",ka:100},
      {eat:"爆炒熊猫",ka:200}
    ],

    num1:3,
    num2:2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getfood();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

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
              breakfast : res.data.data.bf,
              lunch:res.data.data.lunch,
              dinner:res.data.data.dinner,
              
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
  get: function(){
    var app=getApp();
    var that = this;
      wx.request({
        url: 'http://localhost:8080/extrafood/'+app.globalData.recipeId.toString(),
        method: 'PUT', 
        header: {
          'content-type':  'application/json'
        },
        success: function(res) {
         
            that.setData({   
              mnue : res.data,
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
})