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
      title: '商标服务',
      color: '#f95f72',
      list: [{
        icon: 'icon-icon_shangbiaoshenqi',
        name: '商标申请'
      }, {
        icon: 'icon-icon_shangbiaogenghu',
        name: '商标变更'
      }, {
        icon: 'icon-icon_shangbiaofushen',
        name: '商标复审'
      }, {
        icon: 'icon-icon_shewaishangbiao',
        name: '涉外商标'
      }, {
        icon: 'icon-icon_shangbiaojiaoyi',
        name: '商标交易'
      }, {
        icon: 'icon-icon_shangbiaotouzi_',
        name: '商标投资'
      }]
    },
    {
      title: '专利服务',
      color: '#22cdc4',
      list: [{
        icon: 'icon-icon_famingshenqing_',
        name: '发明专利'
      }, {
        icon: 'icon-icon_shiyongshenqing',
        name: '实用申请'
      }, {
        icon: 'icon-icon_waiguanshenqing',
        name: '外观申请'
      }, {
        icon: 'icon-icon_PCTzhuanli_norm',
        name: 'PCT专利'
      }, {
        icon: 'icon-icon_guwendaojia_nor',
        name: '顾问到家'
      }, {
        icon: 'icon-icon_zhuanlifenxi_no',
        name: '专利分析'
      }]
    },
    {
      title: '科技项目',
      color: '#588ddf',
      list: [{
        icon: 'icon-icon_gaoqirending_no',
        name: '高企认定'
      }, {
        icon: 'icon-icon_kejixiaojuren_n',
        name: '科技小巨人'
      }, {
        icon: 'icon-icon_qiyeyanfajigou_1',
        name: '研发机构'
      }, {
        icon: 'icon-icon_gaopinrending_n',
        name: '高品认定'
      }, {
        icon: 'icon-icon_zhuanlichanyehu',
        name: '专利产业化'
      }, {
        icon: 'icon-icon_jiajikouchuhoub1',
        name: '加计扣除'
      }]
    },
    {
      title: '版权服务',
      color: '#99b6f7',
      list: [{
        icon: 'icon-icon_ruanjianzhuzuoq',
        name: '软件著作权'
      }, {
        icon: 'icon-icon_meishuzuopin_no',
        name: '美术作品'
      }, {
        icon: 'icon-icon_wenzizuopin_nor',
        name: '文字作品'
      }]
    },
    {
      title: '体系认证',
      color: '#9ed662',
      list: [{
        icon: 'icon-icon_zhiliangtix',
        name: 'ISO9001',
        label: '质量体系'
      }, {
        icon: 'icon-icon_Zxinxianqu',
        name: 'ISO14001',
        label: '信息安全体系'
      }, {
        icon: 'icon-icon_huanjngtix',
        name: 'ISO27001',
        label: '环境体系'
      }]
    }, {
      title: '企业服务',
      color: '#ffb741',
      list: [{
        icon: 'icon-icon_xiaochegnxu_nor',
        name: '小程序开发'
      }, {
        icon: 'icon-icon_visheji_normal',
        name: '企业VI设计'
      }, {
        icon: 'icon-icon_logosheji_norma',
        name: 'Logo设计'
      }]
    }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})