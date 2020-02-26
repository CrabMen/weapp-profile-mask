// miniprogram/pages/hands/hands.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    localFilePath: '',
    html: `<h3 style="text-align:center;"><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><span><span>正确的洗手方法：</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h3><p style="text-align:center;"><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#666666;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span><span><span><span><span><span><span><span><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"></span></span><span><span><span style="color:#333333;"><span><span>1.掌心相对</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span>2.手心对手背</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span>3.掌心对掌心</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span>4.指尖关节在掌心旋转</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><br/></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span>5.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="font-family:&quot;font-size:12px;background-color:#FFFFFF;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span>大拇指在掌心旋转</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:12px;background-color:#FFFFFF;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span>6.五指并拢在手掌</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:12px;background-color:#FFFFFF;color:#999999;"><span style="background-color:#FFFFFF;color:#999999;font-size:12px;"><span style="background-color:#FFFFFF;color:#999999;font-size:12px;"><span style="background-color:#FFFFFF;color:#999999;font-size:12px;"><span style="background-color:#FFFFFF;color:#999999;font-size:12px;"><span style="background-color:#FFFFFF;color:#999999;font-size:12px;"><span style="background-color:#FFFFFF;color:#999999;font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span><span><span><span>注意：洗手时间不得低于15秒</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><br/></p><p><br/></p>`
  },

  downloadVideoFile: function () {
    wx.showLoading();
    wx.cloud.downloadFile({
      fileID: "cloud://crabman-m9f2t.6372-crabman-m9f2t-1301244457/videos/hands.mp4"
    }).then(res => {
      wx.setStorageSync('handsFilePath', res.tempFilePath);
      this.setData({
        localFilePath: res.tempFilePath
      })
      wx.hideLoading();
    })
  },

  getFilePath: function () {
    const value = wx.getStorageSync('handsFilePath')
    if (value) {
      this.setData({
        localFilePath: value
      })
    } else {
      console.log('本地未缓存,重新下载....')
      this.downloadVideoFile()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFilePath()
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