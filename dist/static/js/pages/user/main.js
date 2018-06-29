global.webpackJsonp([2],{

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_iconfont_iconfont_css__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_iconfont_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_iconfont_iconfont_css__);





var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
	config: {
		"navigationBarBackgroundColor": "#78A0ED",
		"navigationBarTextStyle": "#fff",
		usingComponents: {
			'ec-canvas': '../../../static/ec-canvas/ec-canvas'
		}
	}
});

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_88f516fe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(591);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(589)
}
var normalizeComponent = __webpack_require__(22)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_88f516fe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\user\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88f516fe", Component.options)
  } else {
    hotAPI.reload("data-v-88f516fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 589:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_iconfont_iconfont_css__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_iconfont_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_iconfont_iconfont_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login__ = __webpack_require__(71);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var options1 = {
  backgroundColor: "#ffffff",
  color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
  series: [{
    label: {
      normal: {
        fontSize: 14
      }
    },
    type: 'pie',
    center: ['50%', '50%'],
    radius: [0, '60%'],
    data: [{
      value: 55,
      name: '北京'
    }, {
      value: 20,
      name: '武汉'
    }, {
      value: 10,
      name: '杭州'
    }, {
      value: 20,
      name: '广州'
    }, {
      value: 38,
      name: '上海'
    }],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 2, 2, 0.3)'
      }
    }
  }]
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      time: '',
      wxtime: '',
      list: '',
      curId: '',
      arrayList: [],
      ec1: {
        options: options1
      }
    };
  },


  methods: {
    splitData: function splitData() {
      var wxtime = __WEBPACK_IMPORTED_MODULE_1__utils_index__["c" /* formatWxTime */](new Date());
      this.wxtime = wxtime;

      var query = JSON.parse(this.$root.$mp.query.detail);
      var curId = query.itemId;
      var navTitle = query.itemName;
      this.curId = curId;
      wx.setNavigationBarTitle({
        title: navTitle
      });
    },
    loadData: function loadData() {
      var _this = this;

      var token = wx.getStorageSync('token');
      wx.request({
        url: __WEBPACK_IMPORTED_MODULE_1__utils_index__["d" /* host */] + ('forecast/pl/get_data_list/' + this.curId + '/latest'),
        header: {
          token: token
        },
        success: function success(res) {
          if (res.data.errcode == 41008) {
            __WEBPACK_IMPORTED_MODULE_2__components_login__["a" /* firstLogin */]();
          } else {
            if (res.data.count) {
              _this.list = res.data.data[0].data;
              _this.time = res.data.data[0].trade_date;
              for (var i = 0; i < _this.list.length; i++) {
                _this.arrayList[i] = (_this.list[i].weight * 100).toFixed(2);
              }
            }
          }
        }
      });
    }
  },

  mounted: function mounted() {
    this.splitData();
    this.loadData();
  }
});

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('scroll-view', {
    staticClass: "scroll",
    attrs: {
      "scroll-y": "true"
    }
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "hdfst"
  }, [_c('span', {
    staticClass: "followers"
  }, [_c('span', {
    staticClass: "follow-text"
  }, [_vm._v("4")]), _vm._v("人关注\n         ")]), _vm._v(" "), _c('span', {
    staticClass: "founded"
  }, [_c('span', {
    staticClass: "founded-text"
  }, [_vm._v("创建于")]), _vm._v(" "), _c('span', {
    staticClass: "found-date"
  }, [_vm._v("2018.05.16")])])]), _vm._v(" "), _c('div', {
    staticClass: "hdscnd"
  }, [_c('span', {
    staticClass: "total-text"
  }, [_vm._v("总收益")]), _c('span', {
    staticClass: "total-digital"
  }, [_vm._v("2.44")]), _vm._v("%\n       ")]), _vm._v(" "), _c('div', {
    staticClass: "hdtrd"
  }, [_c('div', {
    staticClass: "hdwk"
  }, [_c('div', {
    staticClass: "wk-text"
  }, [_vm._v("日")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("0.00%")])]), _vm._v(" "), _c('div', {
    staticClass: "hdmnt"
  }, [_c('div', {
    staticClass: "wk-text"
  }, [_vm._v("月")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("2.44%")])]), _vm._v(" "), _c('div', {
    staticClass: "hdjz"
  }, [_c('div', {
    staticClass: "wk-text"
  }, [_vm._v("净值")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("1.0245")])])])]), _vm._v(" "), _c('div', {
    staticClass: "data"
  }, [_c('div', {
    staticClass: "dtshow"
  }, [_c('div', {
    staticClass: "dtmnt"
  }, [_c('div', [_vm._v("月收益排名（沪深）")]), _vm._v(" "), _c('div', {
    staticClass: "dtsz"
  }, [_vm._v("跑赢"), _c('span', [_vm._v("71%")]), _vm._v("组合")])]), _vm._v(" "), _c('div', {
    staticClass: "dtsy"
  }, [_c('div', [_vm._v("是余额收益的")]), _vm._v(" "), _c('div', {
    staticClass: "dtsz"
  }, [_c('span', [_vm._v("21%")])])])]), _vm._v(" "), _c('div', {
    staticClass: "dtjs"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "gpdc"
  }, [_c('div', {
    staticClass: "gpbt"
  }, [_c('div', {
    staticClass: "gpsubt"
  }, [_vm._v("最新调仓"), _c('span', {
    staticClass: "gp-time"
  }, [_vm._v("("), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.time))]), _vm._v(")")])]), _vm._v(" "), _c('div', {
    staticClass: "gpmore"
  }, [_vm._v("更多>>")])]), _vm._v(" "), _c('div', {
    staticClass: "gpItemContainer"
  }, [_vm._l((_vm.list), function(items, index) {
    return _c('div', {
      key: index,
      staticClass: "gpItem"
    }, [_c('div', {
      staticClass: "gp-name"
    }, [_c('div', {
      staticClass: "gpjtmz"
    }, [_vm._v(_vm._s(items.asset_name))]), _vm._v(" "), _c('div', {
      staticClass: "gp-code"
    }, [_vm._v(_vm._s(items.asset_code))])]), _vm._v(" "), _c('div', {
      staticClass: "gpxs"
    }, [_c('span', {
      staticClass: "weight-before"
    }, [_vm._v(_vm._s(items.weight_before) + "%")]), _vm._v(" "), _c('span', {
      staticClass: "weight-code"
    }, [_vm._v("->")]), _vm._v(" "), _c('span', {
      staticClass: "weight"
    }, [_vm._v(_vm._s(_vm.arrayList[index]) + "%")])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "zcpz"
  }, [_vm._v("资产配置")])], 2), _vm._v(" "), _c('div', {
    staticClass: "echarts"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec1,
      "mpcomid": '1'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "chart"
  }, [_c('div', {
    staticClass: "chartTb"
  }, [_vm._v("收益率走势")]), _vm._v(" "), _c('div', {
    staticClass: "echarts"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec1,
      "mpcomid": '2'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "yhcz"
  }, [_c('div', {
    staticClass: "userItem"
  }, [_c('div', {
    staticClass: "grxx"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "nickname"
  }, [_c('div', {
    staticClass: "wxname"
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "wxtime"
  }, [_vm._v(_vm._s(_vm.wxtime))])])]), _vm._v(" "), _c('div', {
    staticClass: "userxw"
  }, [_vm._v("我刚刚调整了雪球组合")]), _vm._v(" "), _c('div', {
    staticClass: "gjl"
  }, [_c('div', {
    staticClass: "forwarding"
  }, [_c('text', {
    staticClass: "iconfont icon-zhuanfa"
  }), _vm._v(" "), _c('span', [_vm._v("转发")])]), _vm._v(" "), _c('div', {
    staticClass: "comment"
  }, [_c('text', {
    staticClass: "iconfont icon-pinglun"
  }), _vm._v(" "), _c('span', [_vm._v("评论")])]), _vm._v(" "), _c('div', {
    staticClass: "reward"
  }, [_c('text', {
    staticClass: "iconfont icon-dashang"
  }), _vm._v(" "), _c('span', [_vm._v("打赏")])])])]), _vm._v(" "), _c('div', {
    staticClass: "userItem"
  }, [_c('div', {
    staticClass: "grxx"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '5'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "nickname"
  }, [_c('div', {
    staticClass: "wxname"
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "wxtime"
  }, [_vm._v(_vm._s(_vm.wxtime))])])]), _vm._v(" "), _c('div', {
    staticClass: "userxw"
  }, [_vm._v("我刚刚调整了雪球组合")]), _vm._v(" "), _c('div', {
    staticClass: "gjl"
  }, [_c('div', {
    staticClass: "forwarding"
  }, [_c('text', {
    staticClass: "iconfont icon-zhuanfa"
  }), _vm._v(" "), _c('span', [_vm._v("转发")])]), _vm._v(" "), _c('div', {
    staticClass: "comment"
  }, [_c('text', {
    staticClass: "iconfont icon-pinglun"
  }), _vm._v(" "), _c('span', [_vm._v("评论")])]), _vm._v(" "), _c('div', {
    staticClass: "reward"
  }, [_c('text', {
    staticClass: "iconfont icon-dashang"
  }), _vm._v(" "), _c('span', [_vm._v("打赏")])])])])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-88f516fe", esExports)
  }
}

/***/ })

},[587]);
//# sourceMappingURL=main.js.map