// pages/home/home.js

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {

    hatCenterX: wx.getSystemInfoSync().windowWidth / 2,
    hatCenterY: 150,

    handleCenterX: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
    handleCenterY: 200,

    hatSize: 100,

    scale: 1,
    rotate: 0,

    selectedMaskIndex: 0,

    selectedImg: '../../images/example.png',
    ScreenWidth: wx.globalData.screenWidth,
    showActionsheet: false,
    groups: [
      // { text: '使用微信头像', value: 1 },
      { text: '从相册中选择', value: 2 },
      { text: '使用相机拍照', value: 3 }
    ]
  },
  share: function () {

  },


  onReady() {
    this.hat_center_x = this.data.hatCenterX;
    this.hat_center_y = this.data.hatCenterY;
    this.handle_center_x = this.data.handleCenterX;
    this.handle_center_y = this.data.handleCenterY;

    this.scale = this.data.scale;
    this.rotate = this.data.rotate;

    this.touch_target = "";
    this.start_x = 0;
    this.start_y = 0;
  },

  navToHands: function () {

    wx.navigateTo({
      url: '../../pages/hands/hands',
      success: (result) => {
      },
    });

  },

  navToMask: function () {
    wx.navigateTo({
      url: '../../pages/mask/mask',
      success: (result) => {

      },
    });
  },


  selectMaskAction: function (evt) {
    console.log(evt)
    this.setData({
      selectedMaskIndex: evt.target.dataset.idx
    })
  },


  chooseImgAction: function () {
    this.setData({
      showActionsheet: true
    })
  },
  generateImgAction: function () {
    wx.globalData.scale = this.scale;
    wx.globalData.rotate = this.rotate;
    wx.globalData.hat_center_x = this.hat_center_x;
    wx.globalData.hat_center_y = this.hat_center_y;
    wx.globalData.currentHatId = this.data.selectedMaskIndex;


    wx.navigateTo({
      url: `../combine/combine?image=${this.data.selectedImg}`
    });
  },

  close: function () {
    this.setData({
      showActionsheet: false
    })
  },

  onGotUserInfo: function (e) {

    var url = e.detail.userInfo.avatarUrl;
    url = url.split('/');
    if (url[url.length - 1] == 132) {
      url[url.length - 1] = 0;
    }
    url = url.join('/');
    this.setData({
      selectedImg: url
    })
  },

  btnClick(e) {
    const { value } = e.detail

    if (value == 2) {
      wx.chooseImage({
        count: 1,
        sizeType: ['original'],
        sourceType: ['album'],
        success: (result) => {
          console.log(result)
          this.setData({ selectedImg: result.tempFilePaths[0] })
        },
      });

    } else if (value == 3) {
      wx.chooseImage({
        sizeType: ['original'],
        sourceType: ['camera'],
        success: (result) => {
          console.log(result)
          this.setData({ selectedImg: result.tempFilePaths[0] })
        },
      });

    }
    this.close()
  },

  touchStart(e) {
    if (e.target.id == "mask") {
      this.touch_target = "mask";
    } else if (e.target.id == "handle") {
      this.touch_target = "handle";
    } else {
      this.touch_target = "";
    }

    if (this.touch_target != "") {
      this.start_x = e.touches[0].clientX;
      this.start_y = e.touches[0].clientY;
    }
  },
  touchEnd(e) {
    this.hat_center_x = this.data.hatCenterX;
    this.hat_center_y = this.data.hatCenterY;

    this.handle_center_x = this.data.handleCenterX;
    this.handle_center_y = this.data.handleCenterY;

    this.touch_target = "";
    this.scale = this.data.scale;
    this.rotate = this.data.rotate;
  },
  touchMove(e) {
    var current_x = e.touches[0].clientX;
    var current_y = e.touches[0].clientY;
    var moved_x = current_x - this.start_x;
    var moved_y = current_y - this.start_y;
    if (this.touch_target == "mask") {
      this.setData({
        hatCenterX: this.data.hatCenterX + moved_x,
        hatCenterY: this.data.hatCenterY + moved_y,
        handleCenterX: this.data.handleCenterX + moved_x,
        handleCenterY: this.data.handleCenterY + moved_y
      });
    }
    if (this.touch_target == "handle") {
      this.setData({
        handleCenterX: this.data.handleCenterX + moved_x,
        handleCenterY: this.data.handleCenterY + moved_y,
      });
      let diff_x_before = this.handle_center_x - this.hat_center_x;
      let diff_y_before = this.handle_center_y - this.hat_center_y;
      let diff_x_after = this.data.handleCenterX - this.hat_center_x;
      let diff_y_after = this.data.handleCenterY - this.hat_center_y;
      let distance_before = Math.sqrt(
        diff_x_before * diff_x_before + diff_y_before * diff_y_before
      );
      let distance_after = Math.sqrt(
        diff_x_after * diff_x_after + diff_y_after * diff_y_after
      );
      let angle_before =
        (Math.atan2(diff_y_before, diff_x_before) / Math.PI) * 180;
      let angle_after =
        (Math.atan2(diff_y_after, diff_x_after) / Math.PI) * 180;
      this.setData({
        scale: (distance_after / distance_before) * this.scale,
        rotate: angle_after - angle_before + this.rotate
      });
    }
    this.start_x = current_x;
    this.start_y = current_y;
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

})


