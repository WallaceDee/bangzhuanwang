//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [{
        url: '../../res/banner/banner01.jpg'
      },
      {
        url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'
      },
      {
        url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'
      },
      {
        url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      }
    ],
    category: [{
        name: '商标服务',
        iconUrl: '../../res/images/icon_shangbiaofuwu_normal.png'
      },
      {
        name: '专利服务',
        iconUrl: '../../res/images/icon_zhuanlifiwu_normal.png'
      },
      {
        name: '科技项目',
        iconUrl: '../../res/images/icon_kejixiangmu_normal.png'
      },
      {
        name: '版权服务',
        iconUrl: '../../res/images/icon_banquanfuwu_normal.png'
      },
      {
        name: '企业服务',
        iconUrl: '../../res/images/icon_qiyefuwu_normal.png'
      }
    ],
    hot: [{
        imgUrl: '../../res/tempImages/hot (1).jpg',
        title: '创业带动就业补贴',
        description: '员工社保补贴，最高三万'
      },
      {
        imgUrl: '../../res/tempImages/hot (2).jpg',
        title: '帮专高企成长计划',
        description: '申请知识产权，附赠高企申报'
      },
      {
        imgUrl: '../../res/tempImages/hot (3).jpg',
        title: '知识产权贯标认定',
        description: '百家案例，直接通过'
      },
      {
        imgUrl: '../../res/tempImages/hot (4).jpg',
        title: '专利分析布局申请',
        description: '让每一个专利都能为竞争服务'
      }
    ],
    service: [{
      icon: 'icon-w',
      name: '商标申请'
    }, {
      icon: 'icon-w',
      name: '商标变更'
    }, {
      icon: 'icon-w',
      name: '商标复审'
    }, {
      icon: 'icon-w',
      name: '涉外商标'
    }, {
      icon: 'icon-w',
      name: '商标交易'
    }, {
      icon: 'icon-w',
      name: '商标投资'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})