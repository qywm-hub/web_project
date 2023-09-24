(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/log_reg/log_reg"],{

/***/ 34:
/*!***************************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/main.js?{"page":"pages%2Flog_reg%2Flog_reg"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _log_reg = _interopRequireDefault(__webpack_require__(/*! ./pages/log_reg/log_reg.vue */ 35));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_log_reg.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 35:
/*!********************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/pages/log_reg/log_reg.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log_reg.vue?vue&type=template&id=cbb9f58c& */ 36);
/* harmony import */ var _log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log_reg.vue?vue&type=script&lang=js& */ 38);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _log_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log_reg.vue?vue&type=style&index=0&lang=css& */ 40);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/log_reg/log_reg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/*!***************************************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/pages/log_reg/log_reg.vue?vue&type=template&id=cbb9f58c& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./log_reg.vue?vue&type=template&id=cbb9f58c& */ 37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_template_id_cbb9f58c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 37:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/study/AndroidTestFile/uni-app/final_project/pages/log_reg/log_reg.vue?vue&type=template&id=cbb9f58c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 38:
/*!*********************************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/pages/log_reg/log_reg.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./log_reg.vue?vue&type=script&lang=js& */ 39);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 39:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/study/AndroidTestFile/uni-app/final_project/pages/log_reg/log_reg.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      // 控制登录或是注册是否显示
      showLogin: true,
      // 登录或注册按钮是否加粗
      loginFontWeight: 'bold',
      registerFontWeight: '',
      login_mobile: '',
      login_password: '',
      reg_password: '',
      mobile: '',
      code: '',
      codeText: '获取验证码',
      codeDisabled: false,
      userlist: []
    };
  },
  onLoad: function onLoad() {},
  methods: {
    isValidMobile: function isValidMobile(username) {
      return true;
    },
    isValidCode: function isValidCode(code) {
      return true;
    },
    // 显示登陆信息
    showLoginFunction: function showLoginFunction() {
      this.showLogin = true, this.loginFontWeight = 'bold'; // 设置登录字体加粗
      this.registerFontWeight = '';
    },
    // 显示注册页
    showRegisterFunction: function showRegisterFunction() {
      this.showLogin = false;
      this.loginFontWeight = ''; // 设置注册字体加粗
      this.registerFontWeight = 'bold';
    },
    login: function login() {
      // if(this.login_mobile === '18850547797' && this.login_password === '723809'){
      //   uni.switchTab({
      //     url:'/pages/read_data/read_data',
      //   })	
      //   console.log(this.login_mobile, this.login_password);
      // } else if(this.login_mobile !== '18850547797' && this.login_password !== '723809') {
      //   uni.showToast({
      //     title: '手机号和密码均输入错误',
      //     icon: 'none',
      //     duration: 2000
      //   });
      //   this.login_mobile = '';
      //   this.login_password = '';
      // } else if(this.login_mobile !== '18850547797') {
      //   uni.showToast({
      //     title: '手机号输入错误',
      //     icon: 'none',
      //     duration: 20000
      //   });
      //   this.login_mobile = '';
      // } else {
      //   uni.showToast({
      //     title: '密码输入错误',
      //     icon: 'none',
      //     duration: 2000
      //   });

      // this.login_password = '';
      // }
      for (var i = 0; i < this.userlist.length; i++) {
        if (this.login_mobile == this.userlist[i].username) {
          if (this.login_password == this.userlist[i].password) {
            uni.switchTab({
              url: '/pages/read_data/read_data'
            });
            console.log(this.login_mobile, this.login_password);
          } else {
            uni.showToast({
              title: '密码输入错误',
              icon: 'none',
              duration: 2000
            });
            this.login_mobile = '';
            this.login_password = '';
          }
        }
      }
    },
    generateCode: function generateCode(length) {
      var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var code = '';
      for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * chars.length);
        code += chars[index];
      }
      return code;
    },
    sendCode: function sendCode() {
      var _this = this;
      if (this.codeDisabled) {
        return;
      }
      this.codeDisabled = true;
      var count = 10;
      this.codeText = count + '秒后重试';
      var timer = setInterval(function () {
        count--;
        _this.codeText = count + '秒后重试';
        if (count === 0) {
          clearInterval(timer);
          _this.codeText = '获取验证码';
          _this.codeDisabled = false;
        }
      }, 1000);
      this.code = this.generateCode(4);
    },
    refreshCode: function refreshCode() {
      var _this2 = this;
      this.code = '';
      this.codeDisabled = true;
      var count = 3;
      this.codeText = count + '秒后刷新';
      var timer = setInterval(function () {
        count--;
        _this2.codeText = count + '秒后刷新';
        if (count === 0) {
          clearInterval(timer);
          _this2.codeText = '获取验证码';
          _this2.codeDisabled = false;
        }
      }, 1000);
      this.code = this.generateCode(4);
    },
    reg: function reg() {
      // 验证手机号和验证码是否正确，这里省略具体实现
      if (!this.isValidMobile(this.mobile)) {
        uni.showToast({
          title: '手机号格式不正确',
          icon: 'none'
        });
        return;
      }
      if (!this.isValidCode(this.code)) {
        uni.showToast({
          title: '验证码不正确',
          icon: 'none'
        });
        return;
      }
      // 提交注册信息到后端进行处理
      // ...
      var that = this;
      var temp = {
        username: that.mobile,
        password: that.reg_password
      };
      that.userlist.push(temp);
      uni.showToast({
        title: '注册成功',
        icon: 'success'
      });
      console.log(that.userlist);
      this.showLogin = true;
    },
    mounted: function mounted() {
      // 检查本地存储中是否存在已经登录过的账号和密码
      var username = localStorage.getItem('username');
      var password = localStorage.getItem('password');
      if (username && password) {
        // 自动登录
        // ...
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 40:
/*!*****************************************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/pages/log_reg/log_reg.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./log_reg.vue?vue&type=style&index=0&lang=css& */ 41);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_log_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/study/AndroidTestFile/uni-app/final_project/pages/log_reg/log_reg.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[34,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/log_reg/log_reg.js.map