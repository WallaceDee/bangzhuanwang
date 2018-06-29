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
              icon: 'icon-shangbiao_icon_shang5',
              name: '商标更换'
            },
            {
              icon: 'icon-shangbiao_icon_shang15',
              name: '商标转让'
            },
            {
              icon: 'icon-shangbiao_icon_shang8',
              name: '商标异议'
            },
            {
              icon: 'icon-shangbiao_icon_shang7',
              name: '商标复审'
            },
            {
              icon: 'icon-shangbiao_icon_shang',
              name: '商标撤销'
            },
            {
              icon: 'icon-shangbiao_icon_shang13',
              name: '商标无效'
            },
            {
              icon: 'icon-shangbiao_icon_shang3',
              name: '商标续展'
            },
            {
              icon: 'icon-shangbiao_icon_shang14',
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
          subList: [{
              icon: 'icon-madrid',
              name: '马德里国际商标',
              color: '#5EAA90'
            },
            {
              icon: 'icon-shangbiao_icon_meigu1',
              name: '美国商标',
              color: '#09305B'
            },
            {
              icon: 'icon-germany',
              name: '德国商标'
            },
            {
              icon: 'icon-shangbiao_icon_riben1',
              name: '日本商标',
              color: '#F94F4F'
            },
            {
              icon: 'icon-korea',
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
          }, {
            icon: 'icon-fenlei_icon_zhuanlib',
            name: '专利驳回复审'
          }, {
            icon: 'icon-fenlei_icon_zhuluxia',
            name: '著录项目变更'
          }, {
            icon: 'icon-fenlei_icon_nianfeim',
            name: '年费免费监控'
          }, {
            icon: 'icon-fenlei_icon_zhuanlin',
            name: '专利年费代缴'
          }, {
            icon: 'icon-fenlei_icon_zhuanliw1',
            name: '专利无效宣告'
          }, {
            icon: 'icon-fenlei_icon_zhuanliw',
            name: '专利无效宣告'
          }]
        }, {
          subTitle: '专利增值服务',
          color: '#22CDC4',
          subList: [{
            icon: 'icon-zhuanli_icon_zhuanle',
            name: '专利分析套餐'
          }, {
            icon: 'icon-zhuanli_icon_guwenda',
            name: '顾问到家'
          }, {
            icon: 'icon-zhuanli_icon_zhuanli',
            name: '专利评估'
          }, {
            icon: 'icon-zhuanli_icon_wangluo',
            name: '网络专利维权'
          }, {
            icon: 'icon-zhuanli_icon_zhuanli2',
            name: '专利交易'
          }, {
            icon: 'icon-zhuanli_icon_zhuanli1',
            name: '专利检索'
          }, {
            icon: 'icon-zhuanli_icon_zhuanli3',
            name: '专利技术产业化申报'
          }, {
            icon: 'icon-zhuanli_icon_qiyezhu',
            name: '企业专利导航预警申报'
          }]
        }, {
          subTitle: '国际专利服务',
          subList: [{
              icon: 'icon-zhuanli_icon_PCTzhua',
              name: 'PCT专利申请',
              color: '#5AC3FF'
            }, {
              icon: 'icon-shangbiao_icon_oumen',
              name: '欧盟专利申请',
              color: '#5A8DEE'
            },
            {
              icon: 'icon-shangbiao_icon_meigu1',
              name: '美国专利申请',
              color: '#09305B'
            },
            {
              icon: 'icon-zhuanli_icon_aodaliy',
              name: '澳大利亚专利申请',
              color: '#5D92F7'
            },
            {
              icon: 'icon-korea',
              name: '韩国专利申请'
            },
            {
              icon: 'icon-shangbiao_icon_riben1',
              name: '日本专利申请',
              color: '#F94F4F'
            }
          ]
        }]
      }, {
        title: "科技项目",
        list: [{
          subTitle: '普惠性项目',
          color: '#588DDF',
          subList: [{
            icon: 'icon-kejixiangmu_icon_chu',
            name: '创业带动就业补贴'
          }, {
            icon: '.icon-kejixiangmu_icon_chu1',
            name: '高新技术企业认定'
          }, {
            icon: 'icon-kejixiangmu_icon_gao',
            name: '高新技术企业培育'
          }, {
            icon: 'icon-kejixiangmu_icon_kej',
            name: '科技小巨人'
          }, {
            icon: 'icon-kejixiangmu_icon_yan',
            name: '研发加计扣除'
          }, {
            icon: 'icon-kejixiangmu_icon_yan1',
            name: '研发经费投入后补助'
          }, {
            icon: 'icon-kejixiangmu_icon_zhi',
            name: '知识产权贯标认定'
          }, {
            icon: 'icon-kejixiangmu_icon_gao1',
            name: '高新技术产品认定'
          }, {
            icon: 'icon-kejixiangmu_icon_qiy',
            name: '企业研发机构建设'
          }, {
            icon: 'icon-kejixiangmu_icon_zhi1',
            name: '知识产权授权补贴'
          }]
        }, {
          subTitle: '竞争性项目',
          color: '#F95F72',
          subList: [{
            icon: 'icon-kejixiangmu_icon_cha',
            name: '产学研协同转向'
          }, {
            icon: 'icon-kejixiangmu_icon_gua1',
            name: '广东省企业技术中心认定'
          }, {
            icon: 'icon-kejixiangmu_icon_shi',
            name: '市级企业技术中心认定'
          }, {
            icon: 'icon-kejixiangmu_icon_gua',
            name: '广东省工程技术研究中心认定'
          }, {
            icon: 'icon-kejixiangmu_icon_chu2',
            name: '穿新标杆百家企业'
          }, {
            icon: 'icon-kejixiangmu_icon_zho',
            name: '产业技术重大攻关计划'
          }]
        }, {
          subTitle: '资质类项目',
          color: '#588DDF',
          subList: [{
            icon: 'icon-kejixiangmu_icon_jis',
            name: '技术先进性服务企业认定'
          }, {
            icon: 'icon-kejixiangmu_icon_gua3',
            name: '广东省创新企业'
          }, {
            icon: 'icon-kejixiangmu_icon_gua2',
            name: '广东省名牌产品'
          }]
        }]
      }, {
        title: "版权服务",
        list: [{
          subTitle: '版权服务',
          color: '#99B6F7',
          subList: [{
            icon: 'icon-banquanfuwu_icon_rua2',
            name: '软件著作权登记'
          }, {
            icon: 'icon-banquanfuwu_icon_mei',
            name: '美术作品登记'
          }, {
            icon: 'icon-banquanfuwu_icon_wen',
            name: '文字作品登记'
          }, {
            icon: 'icon-banquanfuwu_icon_rua3',
            name: '软件产品测试报告'
          }, {
            icon: 'icon-banquanfuwu_icon_rua',
            name: '软件产品认定'
          }, {
            icon: 'icon-banquanfuwu_icon_rua1',
            name: '软件企业认定'
          }]
        }]
      },
      {
        title: "体系认证",
        list: [{
          subTitle: '体系认证服务',
          color: '#9ED662',
          subList: [{
            icon: 'icon-tixirenzheng_icon_IS',
            name: 'ISO9001体系认证'
          }, {
            icon: 'icon-tixirenzheng_icon_IS2',
            name: 'ISO14001体系认证'
          }, {
            icon: 'icon-tixirenzheng_icon_IS1',
            name: 'ISO127001体系认证'
          }, {
            icon: 'icon-tixirenzheng_icon_AA',
            name: 'AAA信用认证'
          }, {
            icon: 'icon-tixirenzheng_icon_sh',
            name: '守合同重信用认证'
          }, {
            icon: 'icon-tixirenzheng_icon_ji',
            name: '计算机信息系统集成'
          }, {
            icon: 'icon-tixirenzheng_icon_CM',
            name: 'CMMI'
          }, {
            icon: 'icon-tixirenzheng_icon_CC',
            name: 'CCC认证'
          }, {
            icon: 'icon-tixirenzheng_icon_IC',
            name: 'ICP许可证'
          }, {
            icon: 'icon-tixirenzheng_icon_we',
            name: '文网文'
          }]
        }]
      }, {
        title: "企业服务",
        list: [{
          subTitle: '创新服务',
          color: '#FFB741',
          subList: [{
            icon: 'icon-qiyefuwu_icon_logosh',
            name: 'LOGO设计'
          }, {
            icon: 'icon-qiyefuwu_icon_qiyevi',
            name: '企业VI设计'
          }, {
            icon: 'icon-qiyefuwu_icon_xiaoch',
            name: '小程序开发'
          }, {
            icon: 'icon-qiyefuwu_icon_xiaoch1',
            name: '网站建设'
          }]
        }]
      }
    ]
  },
  switchTabs: function(e) {
    //获取触发事件组件的dataset属性  
    var _datasetId = e.target.dataset.id;
    if (_datasetId !== undefined) {
      var _obj = {};
      _obj.curHdIndex = _datasetId;
      _obj.curBdIndex = _datasetId;
      this.setData({
        tabArr: _obj
      });
    }
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