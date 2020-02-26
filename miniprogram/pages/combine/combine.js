// pages/combine/combine.js
const app = getApp();
Page({
  data: {},

  onUnload: function () {
    clearTimeout(this.timer)
  },


  onLoad: function (options) {
    console.log(options.image)


    wx.getImageInfo({
      src: options.image,
      success: res => {
        this.bgPic = res.path;
        this.draw();
      }
    });

    // this.bgPic = options.image

    wx.showLoading();

    this.timer = setTimeout(() => {
      wx.hideLoading();
    }, 2000);

    // this.draw()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  draw() {
    let scale = wx.globalData.scale;
    let rotate = wx.globalData.rotate;
    let hat_center_x = wx.globalData.hat_center_x;
    let hat_center_y = wx.globalData.hat_center_y;
    let currentHatId = wx.globalData.currentHatId;
    const pc = wx.createCanvasContext("myCanvas");
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const hat_size = 100 * scale;

    console.log(hat_size)

    pc.clearRect(0, 0, windowWidth, 300);
    pc.drawImage(this.bgPic, windowWidth / 2 - 150, 0, 300, 300);
    pc.translate(hat_center_x, hat_center_y);
    pc.rotate((rotate * Math.PI) / 180);
    const maskUrl = `../../images/${currentHatId}.png`
    console.log(maskUrl)
    pc.drawImage(
      maskUrl,
      -hat_size / 2,
      -hat_size / 2,
      hat_size,
      hat_size
    );
    pc.draw();
  },
  savePic() {
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    wx.canvasToTempFilePath({
      x: windowWidth / 2 - 150,
      y: 0,
      height: 300,
      width: 300,
      canvasId: "myCanvas",
      success: res => {
        wx.globalData.successPic = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: res => {
            let options = {
              title: "保存成功~~",
              duration: 1500,
              mask: false,
              icon: 'none'
            }
            wx.showToast(options);
          },
          fail(e) {
            console.log("err:" + e);
          }
        });
      }
    });
  },

  onShareAppMessage: function () {
    let successPic = wx.globalData.successPic
      ? wx.globalData.successPic
      : "../../images/icon.png";
    return {
      title: "既然自己买不到口罩,不如先给头像戴个口罩~~~",
      imageUrl: successPic,
      path: "/pages/home/home",
      success: function (res) { }
    };
  }
});
