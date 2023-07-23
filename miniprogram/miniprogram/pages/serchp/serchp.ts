// pages/serchp/serchp.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
          i:'-1',
          focus:true,
          t:'kun'
  },

  onLoad: function (options) {
  
    this.setData({
      id: options.id,
      focus:true,
      history:[{id:0,p:"大白菜"},{id:0,p:"蘑菇"}],
      recommend:[{id:0,name:"鸡蛋",p:"../image/egg@1x.png",ka:144},
      {id:0,name:"牛奶",p:"../image/milk.png",ka:54},
      {id:0,name:"胡萝卜",p:"../image/carrot.png",ka:43},
      {id:0,name:"牛肉",p:"../image/beef@1x.png",ka:125},
                ],
    get:{id:0,name:"鸡蛋",p:"../image/egg@1x.png",ka:144}
    })
     
  },
serch:function(data:any){
  console.log(data.detail.value.t)
this.setData(
{ focus: false,
  t:data.detail.value.t
}
)
},
 add:function(e:any){
  var id = e.currentTarget.dataset.id;
  wx.request({
    url : "https://www.",
    method: "POST",
    data: {
      foodid: this.data.t,
      id:id,
      i:parseInt(this.data.i)
    },
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function (res) {
      console.log(res.data);
      wx.navigateBack({
        delta: 1  //小程序关闭当前页面返回上一页面
      })
      wx.showToast({
        title: '评教成功！',
        icon: 'success',
        duration: 2000
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
