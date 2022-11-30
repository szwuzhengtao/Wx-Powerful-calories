// pages/message/message.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    birth: "1999-06-15",
		sex: 1,
		height: 1.82,
		weight: 70,
		targetWeight: 75,
		preferFood: "粥，鸡肉，鸡蛋",
		fitnessGoad: "增肌",
		todayRecipes: 4,
		yestRecipes: 3,
		sport: 122,
		recipsdTime: "2022-11-26",
		userName: "刘大壮",
	  userID: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
this.get();
  },
  get: function(){
    var app=getApp();
    var that = this;
      wx.request({
        url: 'http://localhost:8080/users/'+app.globalData.userId.toString(),
        method: 'GET', 
        header: {
          'content-type':  'application/json'
        },
        success: function(res:any) {
         
            that.setData({   
              birth: res.data.data.birth,
           
              height: res.data.data.height,
              weight: res.data.data.weight,
              targetWeight: res.data.data.targetWeight,
              preferFood: res.data.data.preferFood,
              fitnessGoad: res.data.data.fitnessGoad,
              todayRecipes: 4,
              yestRecipes: 3,
              sport: 122,
              recipsdTime: "2022-11-26",
              userName: res.data.data.userName,
              userID: 2
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

  }
})