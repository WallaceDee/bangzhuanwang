// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuVisible: false,
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
    categoryList: [{
      title: "商标申请",
      list: [{
        subTitle: '商标基础服务',
        color: '#F95F72',
        subList: [{
          icon: 'icon-shangbiao_icon_shang4',
            name: '商标注册'
          },
          {
            icon: 'icon-shangbiao_icon_shang6',
            name: '商标更换'
          },
          {
            icon: 'icon-shangbiao_icon_shang7',
            name: '商标转让'
          },
          {
            icon: 'icon-shangbiao_icon_shang5',
            name: '商标异议'
          },
          {
            icon: 'icon-shangbiao_icon_shang8',
            name: '商标复审'
          },
          {
            icon: 'icon-shangbiao_icon_shang',
            name: '商标撤销'
          },
          {
            icon: 'icon-shangbiao_icon_shang10',
            name: '商标无效'
          },
          {
            icon: 'icon-shangbiao_icon_shang3',
            name: '商标续展'
          },
          {
            icon: 'icon-shangbiao_icon_shang11',
            name: '商标许可备案'
          },
          {
            icon: 'icon-shangbiao_icon_bufas',
            name: '补发商标证书'
          }
        ]
      }, {
        subTitle: '商标增值服务',
        color: '#65C3F9',
        subList: [{
          icon: 'icon-shangbiao_icon_shang12',
            name: '商标投资'
          },
          {
            icon: 'icon-shangbiao_icon_shang1',
            name: '商标交易'
          },
          {
            icon: 'icon-shangbiao_icon_shang14',
            name: '商标设计'
          },
          {
            icon: 'icon-shangbiao_icon_shang15',
            name: '商标诊断'
          }
        ]
      }, {
        subTitle: '国际商务服务',
        color: '#65C3F9',
        subList: [{
            icon: '.icon-as',
            name: '马德里国际商标'
          },
          {
            icon: 'icon-shangbiao_icon_meigu1',
            name: '美国商标',
            color:'#09305B'
          },
          {
            icon: '.icon-as',
            name: '德国商标'
          },
          {
            icon: 'icon-shangbiao_icon_riben1',
            name: '日本商标',
            color: '#F94F4F'
          },
          {
            icon: '.icon-as',
            name: '韩国商标'
          },
          {
            icon: 'icon-shangbiao_icon_riben1',
            name: '香港商标',
            color: '#F94F4F'
          },
          {
            icon: 'icon-shangbiao_icon_aomen',
            name: '澳门商标',
            color: '#FACB52'
          },
          {
            icon: 'icon-shangbiao_icon_taiwa',
            name: '台湾商标',
            color: '#38ACC2'
          },
          {
            icon: 'icon-shangbiao_icon_oumen',
            name: '欧盟商标',
            color: '#5A8DEE'
          },
          {
            icon: 'icon-shangbiao_icon_qitas',
            name: '其他商标',
            color: '#5A8DEE'
          }
        ]
      }]
    }, {
      title: "专利服务",
      list: [{
        subTitle: '专利基础服务',
        color: '#F9DA61',
        subList: [{
          icon: 'icon-fenlei_icon_famingzh',
          name: '发明申请专利'
        }, {
          icon: 'icon-fenlei_icon_shiyongz',
          name: '实用新型申请'
          }, {
            icon: 'icon-fenlei_icon_waiguanz',
            name: '外观设计申请'
          }]
      }]
    }]
  },
  switchTabs: function(e) {
    //获取触发事件组件的dataset属性  
    var _datasetId = e.target.dataset.id;
    console.log("----" + _datasetId + "----");
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    });
  },
  switchMenu: function() {
    this.menuVisible = !this.menuVisible
    this.setData({
      menuVisible: this.menuVisible
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})