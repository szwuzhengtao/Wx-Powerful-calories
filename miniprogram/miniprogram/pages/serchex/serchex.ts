// pages/serchex/serchex.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'-1',
    focus:true,
    history:[{id:0, p:"自行车"},{id:0,p:"跑步"}],
recommend:[{id:0,name:"羽毛球",ka:144,t:30},
{id:0,name:"跳绳",ka:54,t:30},
{id:0,name:"跑步（慢）",ka:43,t:30},
{id:0,name:"跑步（快）",ka:125,t:30},
          ],
get:{id:0,name:"跳绳",ka:144,t:30},
t:"kun",
},

onLoad() {



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