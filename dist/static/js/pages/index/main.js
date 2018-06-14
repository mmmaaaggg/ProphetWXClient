global.webpackJsonp([1],{

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(255);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
	config: {
		pages: [],
		usingComponents: {
			'wxc-icon': "../../../static/@minui/wxc-icon/index/index"
		}
	}
});

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_90a90d1c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(569);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(256)
}
var normalizeComponent = __webpack_require__(31)
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

/***/ 256:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__ = __webpack_require__(557);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var chart = null;

var upColor = '#00da3c';
var downColor = '#ec0000';

function splitData(rawData) {
    var categoryData = [];
    var values = [];
    var volumes = [];
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
        volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? -1 : 1]);
    }

    return {
        categoryData: categoryData,
        values: values,
        volumes: volumes
    };
}

function calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data.values[i - j][1];
        }
        result.push(+(sum / dayCount).toFixed(3));
    }
    return result;
}

/* harmony default export */ __webpack_exports__["a"] = ({

    components: {
        mpvueEcharts: __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__["a" /* default */]
    },

    data: function data() {
        return {
            listData: {},
            echarts: __WEBPACK_IMPORTED_MODULE_0_echarts__,
            onInit: this.initChart

        };
    },


    methods: {
        initChart: function initChart(canvas, width, height) {
            chart = __WEBPACK_IMPORTED_MODULE_0_echarts__["init"](canvas, null, {
                width: width,
                height: height
            });
            canvas.setChart(chart);
            return chart;
        },
        loadData: function loadData() {
            var that = this;
            wx.request({
                url: 'https://prophets.top/asset/candle/index/000300.SH',
                success: function success(res) {
                    var rawData = res.data.data;
                    var data = splitData(rawData);
                    var options = {
                        backgroundColor: '#fff',
                        animation: false,
                        legend: {
                            top: 5,
                            left: 'center',
                            data: ['index', 'A', 'B', 'C', 'D']
                        },
                        axisPointer: {
                            link: { xAxisIndex: 'all' },
                            label: {
                                backgroundColor: '#777'
                            }
                        },
                        toolbox: {
                            show: false
                        },
                        brush: {
                            xAxisIndex: 'all',
                            brushLink: 'all',
                            outOfBrush: {
                                colorAlpha: 0.1
                            }
                        },
                        visualMap: {
                            show: false,
                            seriesIndex: 5,
                            dimension: 2,
                            pieces: [{
                                value: 1,
                                color: downColor
                            }, {
                                value: -1,
                                color: upColor
                            }]
                        },
                        grid: [{
                            left: '13%',
                            right: '8%',
                            height: '50%',
                            top: '16%'
                        }, {
                            left: '13%',
                            right: '8%',
                            top: '65%',
                            height: '14%'
                        }],
                        xAxis: [{
                            type: 'category',
                            data: data.categoryData,
                            scale: true,
                            boundaryGap: false,
                            axisLine: { onZero: false },
                            splitLine: { show: false },
                            axisTick: { show: false },
                            axisLabel: { show: false },
                            splitNumber: 20,
                            min: 'dataMin',
                            max: 'dataMax',
                            axisPointer: {
                                z: 100
                            }
                        }, {
                            type: 'category',
                            gridIndex: 1,
                            data: data.categoryData,
                            scale: true,
                            boundaryGap: false,
                            axisLine: { onZero: false },
                            splitNumber: 20,
                            min: 'dataMin',
                            max: 'dataMax'
                        }],
                        yAxis: [{
                            scale: true,
                            splitArea: {
                                show: true
                            }
                        }, {
                            scale: true,
                            gridIndex: 1,
                            splitNumber: 2,
                            axisLabel: { show: false },
                            axisLine: { show: false },
                            axisTick: { show: false },
                            splitLine: { show: false }
                        }],

                        series: [{
                            name: 'index',
                            type: 'candlestick',
                            data: data.values,
                            itemStyle: {
                                normal: {
                                    color: downColor,
                                    color0: upColor,
                                    borderColor: null,
                                    borderColor0: null
                                }
                            }
                        }, {
                            name: 'A',
                            type: 'line',
                            data: calculateMA(5, data),
                            smooth: true,
                            lineStyle: {
                                color: '#E866CC'
                            }
                        }, {
                            name: 'B',
                            type: 'line',
                            data: calculateMA(10, data),
                            smooth: true,
                            lineStyle: {
                                color: '#9234EF'
                            }
                        }, {
                            name: 'C',
                            type: 'line',
                            data: calculateMA(20, data),
                            smooth: true,
                            lineStyle: {
                                color: '#20627E'
                            }
                        }, {
                            name: 'D',
                            type: 'line',
                            data: calculateMA(30, data),
                            smooth: true,
                            lineStyle: {
                                color: '#DE871E'
                            }
                        }, {
                            name: 'Volume',
                            type: 'bar',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            data: data.volumes
                        }]
                    };
                    console.log(options.series[2].data);
                    chart.setOption(options);
                }
            });
        },

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
            var that = this;
            var token = wx.getStorageSync('token');
            if (token) {
                console.log(token);
                that.ConfirmLogin(token);
            } else {
                that.firstLogin();
            }
        },
        ConfirmLogin: function ConfirmLogin(token) {
            var that = this;
            wx.request({
                url: 'https://prophets.top/auth/has_login',
                header: {
                    token: token
                },
                success: function success() {
                    that.loadData();
                }
            });
        },
        firstLogin: function firstLogin() {
            var that = this;
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
                                wx.setStorageSync('token', res.data.token);
                                that.login();
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

    mounted: function mounted() {
        var _this = this;

        this.login();
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
    created: function created() {}
});

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_echarts_vue__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_39210b28_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_echarts_vue__ = __webpack_require__(568);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(558)
}
var normalizeComponent = __webpack_require__(31)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-39210b28"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_echarts_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_39210b28_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_echarts_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-echarts\\src\\echarts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] echarts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39210b28", Component.options)
  } else {
    hotAPI.reload("data-v-39210b28", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 558:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wx_canvas__ = __webpack_require__(567);

//
//
//
//
//
//
//
//
//
//
//
//



var chart = void 0;
var ctx = void 0;

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    echarts: {
      required: true,
      type: Object,
      default: function _default() {
        return null;
      }
    },
    onInit: {
      required: true,
      type: Function,
      default: null
    },
    canvasId: {
      type: String,
      default: 'ec-canvas'
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    disableTouch: {
      type: Boolean,
      default: false
    }
  },
  onReady: function onReady() {
    if (!this.echarts) {
      console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" ' + 'canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>');
      return;
    }

    if (!this.lazyLoad) this.init();
  },

  methods: {
    init: function init() {
      var _this = this;

      var version = wx.version.version.split('.').map(function (n) {
        return parseInt(n, 10);
      });
      var isValid = version[0] > 1 || version[0] === 1 && version[1] > 9 || version[0] === 1 && version[1] === 9 && version[2] >= 91;
      if (!isValid) {
        console.error('微信基础库版本过低，需大于等于 1.9.91。' + '参见：https://github.com/ecomfe/echarts-for-weixin' + '#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82');
        return;
      }

      if (!this.onInit) {
        console.warn('请传入 onInit 函数进行初始化');
        return;
      }

      var canvasId = this.canvasId;

      ctx = wx.createCanvasContext(canvasId);

      var canvas = new __WEBPACK_IMPORTED_MODULE_1__wx_canvas__["a" /* default */](ctx, canvasId);

      this.echarts.setCanvasCreator(function () {
        return canvas;
      });

      var query = wx.createSelectorQuery();
      query.select('.ec-canvas').boundingClientRect(function (res) {
        if (!res) {
          setTimeout(function () {
            return _this.init();
          }, 50);
          return;
        }
        chart = _this.onInit(canvas, res.width, res.height);
      }).exec();
    },
    canvasToTempFilePath: function canvasToTempFilePath(opt) {
      var canvasId = this.canvasId;


      ctx.draw(true, function () {
        wx.canvasToTempFilePath(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          canvasId: canvasId
        }, opt));
      });
    },
    touchStart: function touchStart(e) {
      if (!this.disableTouch && chart && e.mp.touches.length > 0) {
        var touch = e.mp.touches[0];
        chart._zr.handler.dispatch('mousedown', {
          zrX: touch.x,
          zrY: touch.y
        });
        chart._zr.handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
      }
    },
    touchMove: function touchMove(e) {
      if (!this.disableTouch && chart && e.mp.touches.length > 0) {
        var touch = e.mp.touches[0];
        chart._zr.handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
      }
    },
    touchEnd: function touchEnd(e) {
      if (!this.disableTouch && chart) {
        var touch = e.mp.changedTouches ? e.mp.changedTouches[0] : {};
        chart._zr.handler.dispatch('mouseup', {
          zrX: touch.x,
          zrY: touch.y
        });
        chart._zr.handler.dispatch('click', {
          zrX: touch.x,
          zrY: touch.y
        });
      }
    }
  }
});

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.canvasId) ? _c('canvas', {
    staticClass: "ec-canvas",
    attrs: {
      "canvasId": _vm.canvasId,
      "eventid": '0'
    },
    on: {
      "touchstart": _vm.touchStart,
      "touchmove": _vm.touchMove,
      "touchend": _vm.touchEnd,
      "error": _vm.error
    }
  }) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39210b28", esExports)
  }
}

/***/ }),

/***/ 569:
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
  }, [_c('mpvue-echarts', {
    attrs: {
      "echarts": _vm.echarts,
      "onInit": _vm.onInit,
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

},[254]);
//# sourceMappingURL=main.js.map