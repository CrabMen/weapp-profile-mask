# weapp-profile-mask

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
