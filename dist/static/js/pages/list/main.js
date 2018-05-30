global.webpackJsonp([2],{

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(19);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
	config: {
		"navigationBarBackgroundColor": "#ffffff",
		"navigationBarTitleText": "我的预测",
		usingComponents: {
			'ec-canvas': '../../../static/ec-canvas/ec-canvas'
		}
	}
});

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0f1b8d94_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0f1b8d94_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\list\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f1b8d94", Component.options)
  } else {
    hotAPI.reload("data-v-0f1b8d94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var options2 = {
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
var options3 = {
  color: ['#37a2da'],
  parallelAxis: [{ dim: 0, name: 'Price' }, { dim: 1, name: 'Net Weight' }, { dim: 2, name: 'Amount' }, {
    dim: 3,
    name: 'Score',
    type: 'category',
    data: ['Excellent', 'Good', 'OK', 'Bad']
  }],
  parallel: {
    left: 40,
    right: 80,
    top: 50,
    bottom: 20,
    parallelAxisDefault: {
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666'
      },
      nameTextStyle: {
        color: '#666'
      }
    }
  },
  series: {
    type: 'parallel',
    lineStyle: {
      width: 4
    },
    data: [[12.99, 100, 82, 'Good'], [9.99, 80, 77, 'OK'], [20, 120, 60, 'Excellent'], [3.2, 40, 70, 'OK']]
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      selected: '',
      ec1: {
        options: options1
      },
      ec2: {
        options: options2
      },
      ec3: {
        options: options3
      }
    };
  },


  methods: {
    selectItem: function selectItem(item) {
      this.selected = item;
    }
  },

  mounted: function mounted() {}
});

/***/ }),

/***/ 22:
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
  }, [_c('div', [_vm._v("周")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("60%")])]), _vm._v(" "), _c('div', {
    staticClass: "hdmnt"
  }, [_c('div', [_vm._v("月")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("70%")])]), _vm._v(" "), _c('div', {
    staticClass: "hdjz"
  }, [_c('div', [_vm._v("净值")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("1.0245")])]), _vm._v(" "), _c('div', {
    staticClass: "hdfz"
  }, [_c('div', [_vm._v("高于沪深300指")]), _vm._v(" "), _c('div', {
    staticClass: "hdsz"
  }, [_vm._v("5%")])])]), _vm._v(" "), _c('div', {
    staticClass: "hdtrd"
  }, [_c('span', [_vm._v("56")]), _vm._v("%准确率，累计"), _c('span', [_vm._v("25")]), _vm._v("天跑赢沪深300指数\n\t  ")])]), _vm._v(" "), _c('div', {
    staticClass: "data"
  }, [_c('div', {
    staticClass: "dtshow"
  }, [_c('div', {
    staticClass: "dtdy"
  }, [_c('div', [_vm._v("日准确排名")]), _vm._v(" "), _c('div', {
    staticClass: "dtsz"
  }, [_vm._v("跑赢"), _c('span', [_vm._v("61%")]), _vm._v("预测")])]), _vm._v(" "), _c('div', {
    staticClass: "dtmnt"
  }, [_c('div', [_vm._v("月准确排名")]), _vm._v(" "), _c('div', {
    staticClass: "dtsz"
  }, [_vm._v("跑赢"), _c('span', [_vm._v("71%")]), _vm._v("预测")])])]), _vm._v(" "), _c('div', {
    staticClass: "dtjs"
  }, [_c('span', {
    staticClass: "gpmz"
  }, [_vm._v("医药跑赢沪深300")]), _vm._v(" "), _c('span', {
    staticClass: "By"
  }, [_vm._v("By")]), _vm._v(" "), _c('span', {
    staticClass: "ycr"
  }, [_vm._v("王博士")])])]), _vm._v(" "), _c('div', {
    staticClass: "chart"
  }, [_c('div', {
    staticClass: "bt"
  }, [_vm._v("医药组合跑赢沪深300")]), _vm._v(" "), _c('div', {
    staticClass: "chartContainer"
  }, [_c('div', {
    staticClass: "chartPick"
  }, [_c('div', [_vm._v("走势对比（日）:")]), _vm._v(" "), _c('div', {
    staticClass: "dpick"
  }, [_c('div', {
    staticClass: "pickItem",
    class: {
      active: _vm.selected == 'day'
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.selectItem('day')
      }
    }
  }, [_vm._v("日\n        \t")]), _vm._v(" "), _c('div', {
    staticClass: "pickItem",
    class: {
      active: _vm.selected == 'week'
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.selectItem('week')
      }
    }
  }, [_vm._v("周\n        \t")]), _vm._v(" "), _c('div', {
    staticClass: "pickItem",
    class: {
      active: _vm.selected == 'month'
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.selectItem('month')
      }
    }
  }, [_vm._v("月\n        \t")])])]), _vm._v(" "), _c('div', {
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
    staticClass: "chartTb"
  }, [_c('div', {
    staticClass: "syl"
  }, [_vm._v("收益率(日):")]), _vm._v(" "), _c('div', {
    staticClass: "echarts"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec2,
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "fxsy"
  }, [_c('div', [_vm._v("收益率累计日高于沪深300指数，胜率%")]), _vm._v(" "), _c('div', [_vm._v("近日每日连续高于沪深300指数")])])]), _vm._v(" "), _c('div', {
    staticClass: "chartTb"
  }, [_c('div', {
    staticClass: "syl"
  }, [_vm._v("回撤率(日):")]), _vm._v(" "), _c('div', {
    staticClass: "echarts"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec2,
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "fxsy"
  }, [_c('div', [_vm._v("回撤率累计日高于沪深300指数，胜率%")]), _vm._v(" "), _c('div', [_vm._v("近日每日连续高于沪深300指数")])])]), _vm._v(" "), _c('div', {
    staticClass: "chartContainer"
  }, [_c('div', {
    staticClass: "syl"
  }, [_vm._v("资产配置(日):")]), _vm._v(" "), _c('div', {
    staticClass: "echarts"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec3,
      "mpcomid": '3'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "chartContainer"
  }, [_c('div', {
    staticClass: "syl"
  }, [_vm._v("行业配置仅股票(日):")]), _vm._v(" "), _c('div', {
    staticClass: "echarts"
  }, [_c('ec-canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "ec": _vm.ec3,
      "mpcomid": '4'
    }
  })], 1)])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f1b8d94", esExports)
  }
}

/***/ })

},[18]);
//# sourceMappingURL=main.js.map