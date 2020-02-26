// miniprogram/pages/mask/mask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    localFilePath: '',
html:`<h2 style="text-align:left;"><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span style="background-color:#FFFFFF;font-size:16px;"><span style="background-color:#FFFFFF;font-size:16px;"><span style="background-color:#FFFFFF;font-size:16px;"><span style="background-color:#FFFFFF;font-size:16px;"><span style="background-color:#FFFFFF;font-size:16px;"><span style="background-color:#FFFFFF;font-size:16px;"><span style="background-color:#FFFFFF;font-size:16px;"><span style="background-color:#FFFFFF;font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span style="font-size:16px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>正确戴口罩的方法：</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h2><p style="text-align:left;"><br/></p><p><span style="color:#666666;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span style="font-size:12px;color:#666666;"><span><span><span><span><span><span><span><span><span style="background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"></span></span><span style="font-size:12px;"><span style="font-size:12px;"><span style="color:#333333;font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>1.&nbsp;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;"><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>一次性口罩是医用普通外科口罩，有正反两面。</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span><span><span><span><span><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span>2.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>正面的应该应该是蓝色面朝外，颜色浅的朝里，贴紧脸部。</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span><span><span><span><span><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span>3.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>不仅如此，口罩还分上下，内有金属条摸起来较硬的一边为上端。</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span><span><span><span><span><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span>4.另外</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>，正确的步骤应该有，洗：清洗双手，以免手不干净污染口罩内面。</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><br/></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;font-size:12px;"><span style="color:#333333;font-size:12px;"><span style="color:#333333;font-size:12px;"><span style="color:#333333;font-size:12px;"><span style="color:#333333;font-size:12px;"><span style="color:#333333;font-size:12px;"><span style="color:#333333;font-size:12px;"><span style="color:#333333;font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>5.&nbsp;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;"><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>总体还要注意挂：将口罩横贴在脸部口鼻上，用双手将一对的绳子挂在耳朵上。</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="font-size:12px;"><span style="font-size:12px;"><span><span><span><span><br/></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:12px;background-color:#FFFFFF;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="font-size:12px;color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span style="color:#333333;"><span><span><span><span><span><span><span><span><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span>6.&nbsp;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>其次是拉，双手同时向上下方向将口罩褶皱拉开，是口罩能够完全的覆盖口鼻和下巴。</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><br/></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><span style="font-size:12px;"><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>7.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>最后压：用双手的食指压紧鼻梁两侧的金属条</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>，使口罩上端能够紧贴鼻梁。</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span style="font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span><span><span><span><span><span><span><span><span><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span><span style="font-size:12px;"><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><h2><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span style="background-color:#FFFFFF;font-size:16px;"><span><span><span><span><br/></span></span></span></span></span></span></h2><h2><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><span style="background-color:#FFFFFF;font-size:16px;"><span><span><span><span>正确摘口罩的方法</span></span></span></span></span></span></h2><p><br/></p><p><span style="color:#666666;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span style="background-color:#FFFFFF;"></span><span style="color:#333333;"><span><span><span><span>1.&nbsp;</span></span></span></span></span></span><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span><span><span><span>摘口罩的时候，先摘下串联挂住耳朵的绳子或者朔料环（左右或者右边都可以）</span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><br/></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span><span><span><span>2.&nbsp;如果戴眼镜的话，注意另一只手扶住眼镜以免挂掉眼镜</span></span></span></span><span><span><span><span></span></span></span></span></span></p><p><span style="color:#333333;font-family:&quot;font-size:16px;background-color:#FFFFFF;"><br/></span></p><p><span style="color:#333333;font-family:&quot;font-size:12px;background-color:#FFFFFF;"><span><span><span><span>3.然后摘掉其他垂直的挂绳，抓住挂绳反向折叠口罩后进行适当消毒然后替换，整个过程不要用手触碰口罩朝外的一面</span></span></span></span><span><span><span><span></span></span></span></span></span></p><div><span><span><br/></span></span></div><br/></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>`
  },
  downloadVideoFile: function () {
    wx.showLoading();
    wx.cloud.downloadFile({
      fileID: "cloud://crabman-m9f2t.6372-crabman-m9f2t-1301244457/videos/mask.mp4"
    }).then(res => {
      wx.setStorageSync('maskFilePath', res.tempFilePath);
      this.setData({
        localFilePath: res.tempFilePath
      })
      wx.hideLoading();
    })
  },
  getFilePath: function () {
    const value = wx.getStorageSync('maskFilePath')
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