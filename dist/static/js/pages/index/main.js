global.webpackJsonp([3],{

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(73);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
	config: {
		pages: [],
		usingComponents: {
			'ec-canvas': '../../../static/ec-canvas/ec-canvas',
			'wxc-icon': "../../../static/@minui/wxc-icon/index/index"
		}
	}
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_90a90d1c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(76);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(74)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_90a90d1c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90a90d1c", Component.options)
  } else {
    hotAPI.reload("data-v-90a90d1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


var options = {
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
      ec: {
        // 传 options
        options: options
      },
      listData: {}
    };
  },


  methods: {

    handleBg: function handleBg() {
      wx.navigateTo({ url: "/pages/chart/main" });
    },

    handleCb: function handleCb() {
      wx.navigateTo({ url: "/pages/combination/main" });
    },


    onCollect: function onCollect(items) {
      items.collectionstatus = !items.collectionstatus;
      wx.showToast({
        title: items.collectionstatus ? "收藏成功" : "收藏取消",
        duration: 1000,
        icon: "sucess",
        make: true
      });
    },

    login: function login() {
      wx.login({
        success: function success(res) {
          if (res.code) {
            //发起网络请求
            //console.log(res.code)
            wx.request({
              url: 'https://prophets.top/auth/login',
              //url: 'http://127.0.0.1:6060/wx/login',
              data: {
                code: res.code
              },
              header: { "Content-Type": "application/x-www-form-urlencoded" },
              method: 'GET',

              success: function success(res) {
                console.log(res.data.openid);
                wx.request({
                  url: 'https://prophets.top/auth/has_login',
                  header: {
                    token: res.data.token
                  },
                  success: function success(res) {
                    console.log(res.data);
                  }
                });
                if (res.data.openid) {
                  wx.setStorageSync('openid', res.data.openid);
                } else {
                  console.log('请求失败！' + res.errMsg);
                }
              }
            });
          }
        },
        fail: function fail(error) {
          console.log("request fail");
        }
      });
    }
  },

  onLoad: function onLoad(res) {
    var _this = this;

    wx.request({
      //url: 'https://www.prophets.top/forecast/get_cmp_data_list/all', 
      url: 'http://127.0.0.1:6060/list',
      header: {
        'content-type': 'application/json' // 默认值  
      },
      method: 'GET',
      success: function success(res) {
        _this.listData = res.data.data;
      },
      fail: function fail() {
        console.log("fail");
      },
      complete: function complete() {}
    });
  },

  created: function created() {
    wx.checkSession({
      fail: function fail() {
        this.login();
      }
    });
  }
});

/***/ }),

/***/ 76:
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
    staticClass: "chartContainer"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tapContainer trTap"
  }, [_c('div', {
    staticClass: "blog vertify"
  }, [_c('div', {
    staticClass: "wxcIcon vertifyIcon"
  }, [_c('wxc-icon', {
    staticClass: "feedback",
    attrs: {
      "size": "45",
      "type": "feedback",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "bg-right",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.handleBg
    }
  }, [_c('div', {
    staticClass: "bg-item digita"
  }, [_vm._v("320")]), _vm._v(" "), _c('div', {
    staticClass: "bg-item blogitem"
  }, [_vm._v("待验证")])])]), _vm._v(" "), _c('div', {
    staticClass: "blog vertified"
  }, [_c('div', {
    staticClass: "wxcIcon vertifiedIcon"
  }, [_c('wxc-icon', {
    staticClass: "rate",
    attrs: {
      "size": "45",
      "type": "rate",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "bg-right",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.handleCb
    }
  }, [_c('div', {
    staticClass: "bg-item digita"
  }, [_vm._v("120")]), _vm._v(" "), _c('div', {
    staticClass: "bg-item blogitem"
  }, [_vm._v("已验证")])])]), _vm._v(" "), _c('div', {
    staticClass: "blog attention"
  }, [_c('div', {
    staticClass: "wxcIcon attentionIcon"
  }, [_c('wxc-icon', {
    staticClass: "star",
    attrs: {
      "size": "45",
      "type": "star",
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "bg-right"
  }, [_c('div', {
    staticClass: "bg-item digita"
  }, [_vm._v("142")]), _vm._v(" "), _c('div', {
    staticClass: "bg-item blogitem"
  }, [_vm._v("关注预言")])])])]), _vm._v(" "), _c('div', {
    staticClass: "tbContainer"
  }, [_c('div', {
    staticClass: "tr bg-t"
  }, [_c('div', {
    staticClass: "th"
  }, [_vm._v("预测名称")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("起止日期")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("准确率")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("预言家")])]), _vm._v(" "), _vm._l((_vm.listData.data), function(items, index) {
    return _c('div', {
      key: _vm.pl_id,
      staticClass: "tr bg-c"
    }, [_c('div', {
      staticClass: "td name td-cell"
    }, [_vm._v("\n        " + _vm._s(items.name) + "\n      ")]), _vm._v(" "), _c('div', {
      staticClass: "td"
    }, [_c('div', {
      staticClass: "td-date"
    }, [_c('div', {
      staticClass: "date"
    }, [_vm._v(_vm._s(items.date_from))]), _vm._v(" "), _c('div', {
      staticClass: "date"
    }, [_vm._v(_vm._s(items.date_to))])])]), _vm._v(" "), _c('div', {
      staticClass: "td td-cell"
    }, [_vm._v("\n        " + _vm._s(items.access_type) + "\n      ")]), _vm._v(" "), _c('div', {
      staticClass: "td td-cell collection"
    }, [_c('div', {
      staticClass: "username"
    }, [_vm._v("\n          " + _vm._s(items.username) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "button-collection",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.onCollect(items)
        }
      }
    }, [(items.collectionstatus) ? _c('wxc-icon', {
      staticClass: "collected",
      attrs: {
        "size": "40",
        "type": "star-active",
        "mpcomid": '5-' + index
      }
    }) : _c('wxc-icon', {
      staticClass: "collected",
      attrs: {
        "size": "40",
        "type": "star",
        "mpcomid": '4-' + index
      }
    })], 1)])])
  })], 2)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-90a90d1c", esExports)
  }
}

/***/ })

},[72]);
//# sourceMappingURL=main.js.map