global.webpackJsonp([2],{

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_iconfont_iconfont_css__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_iconfont_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_iconfont_iconfont_css__);





var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
	config: {
		"navigationBarBackgroundColor": "#ffffff",
		"navigationBarTitleText": "我的组合",
		usingComponents: {
			'ec-canvas': '../../../static/ec-canvas/ec-canvas'
		}
	}
});

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_88f516fe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(586);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(584)
}
var normalizeComponent = __webpack_require__(28)
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

/***/ 584:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_iconfont_iconfont_css__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_iconfont_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_iconfont_iconfont_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(121);
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
      ec1: {
        options: options1
      }
    };
  },


  methods: {},

  mounted: function mounted() {
    var time = __WEBPACK_IMPORTED_MODULE_1__utils_index__["c" /* formatTime */](new Date());
    var wxtime = __WEBPACK_IMPORTED_MODULE_1__utils_index__["d" /* formatWxTime */](new Date());
    this.time = time;
    this.wxtime = wxtime;
  }
});

/***/ }),

/***/ 586:
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
  }, [_c('span', [_vm._v("关注人数：4")]), _vm._v(" "), _c('span', [_vm._v("创建于2018.05.16")])]), _vm._v(" "), _c('div', {
    staticClass: "hdscnd"
  }, [_c('div', {
    staticClass: "hdwk"
  }, [_c('div', [_vm._v("日")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("0.00%")])]), _vm._v(" "), _c('div', {
    staticClass: "hdmnt"
  }, [_c('div', [_vm._v("月")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("2.44%")])]), _vm._v(" "), _c('div', {
    staticClass: "hdjz"
  }, [_c('div', [_vm._v("净值")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("1.0245")])])]), _vm._v(" "), _c('div', {
    staticClass: "hdtrd"
  }, [_c('span', [_vm._v("2.44")]), _vm._v("%总收益\n       ")])]), _vm._v(" "), _c('div', {
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
    staticClass: "dtjsr"
  }, [_c('div', {
    staticClass: "gpmz"
  }, [_vm._v("医药强势组合")]), _vm._v(" "), _c('div', {
    staticClass: "By"
  }, [_vm._v("By")]), _vm._v(" "), _c('div', {
    staticClass: "ycr"
  }, [_vm._v("王博士")])]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_vm._v("寻找有效投资组合")])])]), _vm._v(" "), _c('div', {
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
  }, [_c('div', {
    staticClass: "gpItem"
  }, [_c('div', {
    staticClass: "gp-name"
  }, [_c('div', {
    staticClass: "gpjtmz"
  }, [_vm._v("山西汾酒")]), _vm._v(" "), _c('div', {
    staticClass: "gp-code"
  }, [_vm._v("SH600809")])]), _vm._v(" "), _c('div', {
    staticClass: "gpxs"
  }, [_vm._v("4.96%")])]), _vm._v(" "), _c('div', {
    staticClass: "gpItem"
  }, [_c('div', {
    staticClass: "gp-name"
  }, [_c('div', {
    staticClass: "gpjtmz"
  }, [_vm._v("山西汾酒")]), _vm._v(" "), _c('div', {
    staticClass: "gp-code"
  }, [_vm._v("SH600809")])]), _vm._v(" "), _c('div', {
    staticClass: "gpxs"
  }, [_vm._v("4.96%")])]), _vm._v(" "), _c('div', {
    staticClass: "zcpz"
  }, [_vm._v("资产配置")])]), _vm._v(" "), _c('div', {
    staticClass: "echarts"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec1,
      "mpcomid": '0'
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
      "mpcomid": '1'
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
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "nickname"
  }, [_c('div', {
    staticClass: "wxname"
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '3'
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
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "nickname"
  }, [_c('div', {
    staticClass: "wxname"
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '5'
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

},[582]);
//# sourceMappingURL=main.js.map