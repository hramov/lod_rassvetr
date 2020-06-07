(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SinglePollComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/SinglePollComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: "",
      title: "",
      content: "",
      options: [],
      isEdit: false,
      new_title: "",
      description: "",
      new_content: "",
      status: true,
      answer: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/singlePoll/' + this.$route.params.id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(function (response) {
      console.log(response.data);
      _this.id = response.data.poll.id;
      _this.title = response.data.poll.title;
      _this.description = response.data.poll.description;
      _this.content = response.data.poll.content;
      _this.status = response.data.status;
      _this.answer = response.data.answers[0].user_answer;

      if (_this.answer == 0) {
        _this.answer = "Против";
      } else {
        _this.answer = "За";
      }
    })["catch"](function (e) {
      return console.log(e);
    });
  },
  methods: {
    yes: function yes() {
      var _this2 = this;

      axios.get('/api/answer/' + this.$route.params.id + '/' + 1, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(function (response) {
        console.log(response);

        _this2.$router.push({
          name: '/'
        });
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    no: function no() {
      var _this3 = this;

      axios.get('/api/answer/' + this.$route.params.id + '/' + 0, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(function (response) {
        console.log(response);

        _this3.$router.push({
          name: '/'
        });
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    deletePoll: function deletePoll() {
      var _this4 = this;

      axios.get('/api/deletePoll/' + this.$route.params.id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(function (response) {
        console.log(response);

        _this4.$router.push('/polls');
      });
    },
    editPoll: function editPoll() {
      this.$nextTick(function () {
        this.isEdit = true;
      });
    },
    savePoll: function savePoll() {
      this.$nextTick(function () {
        var _this5 = this;

        this.isEdit = false;
        axios.post('/api/updatePoll/' + this.$route.params.id, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }, {
          new_title: this.new_title,
          new_content: this.new_content
        }).then(function (response) {
          _this5.title = _this5.new_title;
          _this5.content = _this5.new_content;
          console.log(response);
        })["catch"](function (e) {
          console.log(e);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.block-id-pall[data-v-1daa742f] {\n        width: 55px;\n        height: 44px;\n        border: 1px solid #3399FE;\n}\n.wrap-pall[data-v-1daa742f] {\n        border: 1px solid #3399FE;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SinglePollComponent.vue?vue&type=template&id=1daa742f&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/SinglePollComponent.vue?vue&type=template&id=1daa742f&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "a",
            {
              staticClass: "btn btn-primary",
              on: {
                click: function($event) {
                  return _vm.$router.go(-1)
                }
              }
            },
            [_vm._v("Назад")]
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { lg: "6" } }, [
            _c("h1", { staticClass: "display-1" }, [_vm._v(_vm._s(_vm.title))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "d-flex align-center" },
        [
          _c(
            "v-col",
            { attrs: { lg: "10" } },
            [
              _c(
                "v-chip",
                { attrs: { color: "#3399FE", "text-color": "white" } },
                [_vm._v("\n                + 20 баллов\n            ")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text--secondary" }, [
                _vm._v("за участие в голосовании")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "justify-end d-flex", attrs: { lg: "2" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "justify-center d-flex block-id-pall subtitle-1 align-center"
                },
                [
                  _vm._v("\n                ID "),
                  _c("span", { staticClass: "id-pall" }, [_vm._v("123")])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { staticClass: "wrap-pall", attrs: { lg: "12" } },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { lg: "3" } }, [
                        _c("h2", { staticClass: "headline" }, [
                          _vm._v("Вопрос 1")
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { lg: "12" } }, [
                        _c("p", { staticClass: "title" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.description) +
                              "\n                        "
                          )
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { lg: "12" } }, [
                        _c("strong", { staticClass: "font-weight-black" }, [
                          _vm._v("А вы поддерживаете это предложение?")
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "12" } },
                        [
                          _c(
                            "v-expansion-panels",
                            _vm._l(1, function(item, i) {
                              return _c(
                                "v-expansion-panel",
                                { key: i },
                                [
                                  _c("v-expansion-panel-header", [
                                    _vm._v("Подробнее")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-expansion-panel-content", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.content) +
                                        "\n                                "
                                    )
                                  ])
                                ],
                                1
                              )
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { lg: "12" } }, [
                        _c("h3", { staticClass: "title" }, [
                          _vm._v("Лидеры мнений")
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "6" } },
                        _vm._l(4, function(item, i) {
                          return _c("v-avatar", {
                            key: i,
                            staticClass: "mr-3",
                            attrs: { size: "84" }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { lg: "12" } }, [
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "form-control",
                            staticStyle: { "text-decoration": "none" },
                            on: {
                              click: function($event) {
                                return _vm.yes()
                              }
                            }
                          },
                          [_vm._v('Вариант "За"')]
                        ),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "form-control",
                            staticStyle: { "text-decoration": "none" },
                            attrs: { href: "" },
                            on: {
                              click: function($event) {
                                return _vm.no()
                              }
                            }
                          },
                          [_vm._v('Вариант "Против"')]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-row"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", [
            _c(
              "a",
              { staticClass: "btn btn-primary", on: { click: _vm.editPoll } },
              [_vm._v("Редактировать")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "btn btn-danger", on: { click: _vm.deletePoll } },
              [_vm._v("Удалить")]
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/SinglePollComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/SinglePollComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SinglePollComponent_vue_vue_type_template_id_1daa742f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SinglePollComponent.vue?vue&type=template&id=1daa742f&scoped=true& */ "./resources/assets/js/components/SinglePollComponent.vue?vue&type=template&id=1daa742f&scoped=true&");
/* harmony import */ var _SinglePollComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SinglePollComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/SinglePollComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SinglePollComponent_vue_vue_type_style_index_0_id_1daa742f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css& */ "./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SinglePollComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SinglePollComponent_vue_vue_type_template_id_1daa742f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SinglePollComponent_vue_vue_type_template_id_1daa742f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1daa742f",
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["VAvatar"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VExpansionPanel: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_8__["VExpansionPanel"],VExpansionPanelContent: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_8__["VExpansionPanelContent"],VExpansionPanelHeader: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_8__["VExpansionPanelHeader"],VExpansionPanels: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_8__["VExpansionPanels"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/SinglePollComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/SinglePollComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/SinglePollComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SinglePollComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SinglePollComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_style_index_0_id_1daa742f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SinglePollComponent.vue?vue&type=style&index=0&id=1daa742f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_style_index_0_id_1daa742f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_style_index_0_id_1daa742f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_style_index_0_id_1daa742f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_style_index_0_id_1daa742f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_style_index_0_id_1daa742f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/SinglePollComponent.vue?vue&type=template&id=1daa742f&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/SinglePollComponent.vue?vue&type=template&id=1daa742f&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_template_id_1daa742f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SinglePollComponent.vue?vue&type=template&id=1daa742f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SinglePollComponent.vue?vue&type=template&id=1daa742f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_template_id_1daa742f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePollComponent_vue_vue_type_template_id_1daa742f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);