// pages/design/design.ts
Page({

  /**
   * 页面的初始数据
   */
  
      data: {
        currentValue: 20,
      },
     
    

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
  test: function () {
    var app=getApp();
   
   var that = this;
     wx.request({
       url: 'http://localhost:8080/users/extrafood/recipe/'+app.globalData.recipeId.toString(),
       method: 'GET', 
       header: {
         'content-type':  'application/json'
       },
       success: function(res:any) {
        app.globalData.recipeId=res.data.data;
       },
       fail: function() {
         wx.showToast({
           title: "网络连接失败",
           duration: 3000
         })
  
       },
     })
 
    wx.redirectTo({
        url: "../index/index"
      })}
      
}
)