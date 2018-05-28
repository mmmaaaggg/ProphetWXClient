global.webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
	config: {
		pages: [],
		usingComponents: {
			'ec-canvas': '../../../static/ec-canvas/ec-canvas',
			'wxc-icon': "../../../static/@minui/wxc-icon/dist/index"
		}
	}
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_90a90d1c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
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
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
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


var options = {
  backgroundColor: "#fff",
  color: ["#37A2DA", "#67E0E3", "#9FE6B8"],

  tooltip: {
    trigger: 'axis'
  },
  legend: {

    data: ['A商品', 'B商品', 'C商品']
  },
  grid: {
    containLabel: true
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    x: 'center',
    type: 'value'
  },
  series: [{
    name: 'A商品',
    type: 'line',
    smooth: true,
    data: [18, 36, 65, 30, 78, 40, 33]
  }, {
    name: 'B商品',
    type: 'line',
    smooth: true,
    data: [12, 50, 51, 35, 70, 30, 20]
  }, {
    name: 'C商品',
    type: 'line',
    smooth: true,
    data: [10, 30, 31, 50, 40, 20, 10]
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

    onCollect: function onCollect(items) {
      items.collectionstatus = !items.collectionstatus;
    },

    login: function login() {
      wx.login({
        success: function success(res) {
          if (res.code) {
            //发起网络请求
            console.log(res.code);
            wx.request({
              url: 'https://prophets.top/auth/login',
              //url: 'http://127.0.0.1:6060/wx/login',
              data: {
                code: res.code
              },
              header: { "Content-Type": "application/x-www-form-urlencoded" },
              method: 'GET',

              success: function success(res) {
                console.log(res.openid);
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
      url: 'http://10.0.3.66:5000/forecast/get_pl_info_list/1?_=1526623084166',
      //url: 'http://127.0.0.1:6060/list',
      header: {
        'content-type': 'application/json' // 默认值  
      },
      method: 'GET',
      success: function success(res) {
        _this.listData = res.data;
      },
      fail: function fail() {
        console.log("fail");
      },
      complete: function complete() {}
    });
  },

  created: function created() {
    //wx.checkSession({
    //fail: function () {
    this.login();
    //}
    // })
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "subcontainer"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "bgcontainer"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.listData.data), function(items, index) {
    return _c('div', {
      key: _vm.pl_id,
      staticClass: "tr bg-g"
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
        "eventid": '0-' + index
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
        "type": "star",
        "mpcomid": '2-' + index
      }
    }) : _c('wxc-icon', {
      staticClass: "collected",
      attrs: {
        "size": "40",
        "type": "star-active",
        "mpcomid": '1-' + index
      }
    })], 1)])])
  })], 2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tr bg-w"
  }, [_c('div', {
    staticClass: "th"
  }, [_vm._v("预测名称")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("起止日期")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("准确率")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("预言家")])])
}]
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
],[8]);
//# sourceMappingURL=main.js.map