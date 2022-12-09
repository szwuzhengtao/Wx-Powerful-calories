// pages/love/love.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
     sports:[{sport:"跑步"},{sport:"跑2步"},{sport:"跑3步"},{sport:"跑步"},{sport:"跑2步"},{sport:"跑3步"}],
     
     diseaseList: [
      {diseaseCode: "S90.8", diseaseName: "跑步", checked: false},
      {diseaseCode: "R05", diseaseName: "跑步", checked: false},
      {diseaseCode: "P29.3", diseaseName: "跑步", checked: false},
      {diseaseCode: "J39.9", diseaseName: "跑步", checked: false},
      {diseaseCode: "J31.0", diseaseName: "跑步", checked: false},
      {diseaseCode: "A37.1", diseaseName: "跑步", checked: false},
      {diseaseCode: "N32.1", diseaseName: "跑步", checked: false},
      {diseaseCode: "C17.3", diseaseName: "跑步", checked: false},
      {diseaseCode: "A16.9", diseaseName: "跑步", checked: false},
      {diseaseCode: "A16.1", diseaseName: "跑步", checked: false}
  ]
  
},

/**
 * 疾病选择切换 
 */
diseaseSwitch: function (options) {
  let that = this;
  // 按钮索引
  var index = options.currentTarget.dataset.index;
  // 索引对应内容
  var item = that.data.diseaseList[index];
  // 选中，未选中状态切换
  item.checked = !item.checked;
  // 更新
  that.setData({
    diseaseList: that.data.diseaseList
  });
    

  },
  test: function () {
    wx.navigateTo({
        url: "../design/design"
      })
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

  }
})