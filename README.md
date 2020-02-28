# weapp-profile-mask
![小程序二维码](https://github.com/CrabMen/weapp-profile-mask/blob/master/gh_372c3545effc_258.jpg)


最近看了点小程序相关的东西，所以想自己弄一个简单的小程序，闲逛github看到了[大佬的仓库](https://github.com/idealclover/Wear-A-Mask)，正好可以实战一下小程序，非常感谢``idealclover``开源所做的贡献。

用到的知识点和坑

1. 用到了云存储用来存储视频，将视频下载到本地并存储，减少用户对云服务配额的消耗
2. 使用rich-text组件，正确佩戴口罩和正确洗手的页面下方的文字均采用自己编辑的html，然后经过压缩后赋值给.js中的数据用来模拟网络请求
3. 使用了小程序的weui-miniprogram（dialog和actionsheet），其中dialog未用到
4. 使用wx保存本地数据
5. 获取用户信息报错问题，采用官方推荐的button标签且open-type="getUserInfo”（一开始方案，是将微信头像选项放到actionsheet中，但是偶发性会报错获取不到微信头像）
6. 获取用户头像模糊问题，微信默认返会的头像url默认默认是132，如果想获取高清头像，需要将返会的url中末尾的132换做0
7. 在使用微信头像进行图片合成时候，需要下载微信头像，这时候需要将https://wx.qlogo.cn加入到downloadFile合法域名
8. 中间用到了跨页面传值，通过wx保存数据跨页面获取传值和通过wx.navigateTo的url传值也都使用到了
9. 通过onShareAppMessage方法自定义页面的分享文案以及图片

最近在家办公，一般使用零碎的时间来写，为期大概一周的样子。小程序是2月25号下午提交的审核，凌晨两点多的时候通过审核，2月26日上午发布的




