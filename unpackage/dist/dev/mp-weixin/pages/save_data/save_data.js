(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/save_data/save_data"],{

/***/ 64:
/*!*******************************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/main.js?{"page":"pages%2Fsave_data%2Fsave_data"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _save_data = _interopRequireDefault(__webpack_require__(/*! ./pages/save_data/save_data.vue */ 65));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_save_data.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 65:
/*!************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/pages/save_data/save_data.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save_data.vue?vue&type=template&id=05dc86c0& */ 66);
/* harmony import */ var _save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save_data.vue?vue&type=script&lang=js& */ 68);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _save_data_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save_data.vue?vue&type=style&index=0&lang=css& */ 70);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/save_data/save_data.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/*!*******************************************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/pages/save_data/save_data.vue?vue&type=template&id=05dc86c0& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./save_data.vue?vue&type=template&id=05dc86c0& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_template_id_05dc86c0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 67:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/study/AndroidTestFile/uni-app/final_project/pages/save_data/save_data.vue?vue&type=template&id=05dc86c0& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 68:
/*!*************************************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/pages/save_data/save_data.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./save_data.vue?vue&type=script&lang=js& */ 69);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/study/AndroidTestFile/uni-app/final_project/pages/save_data/save_data.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 93));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 95));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      text: '',
      content: '',
      isReadSuccess: false,
      nfc: null
    };
  },
  methods: {
    writeData: function writeData() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var record, message;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.text) {
                  _context.next = 3;
                  break;
                }
                alert('请输入要写入的内容');
                return _context.abrupt("return");
              case 3:
                if (_this.nfc) {
                  _context.next = 6;
                  break;
                }
                _context.next = 6;
                return _this.initNfc();
              case 6:
                _context.prev = 6;
                // 创建写入的数据对象
                record = new NDEFRecord({
                  mimeType: 'text/plain',
                  data: _this.text
                });
                message = new NDEFMessage([record]); // 将数据写入 NFC 标签
                _context.next = 11;
                return _this.nfc.write(message);
              case 11:
                _this.showToast('写入成功');
                _context.next = 18;
                break;
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](6);
                console.error('写入失败：', _context.t0);
                _this.showToast('写入失败');
              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 14]]);
      }))();
    },
    readData: function readData() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.nfc) {
                  _context2.next = 3;
                  break;
                }
                _context2.next = 3;
                return _this2.initNfc();
              case 3:
                _context2.prev = 3;
                // 监听 NFC 标签读取事件
                _this2.nfc.onreading = function (event) {
                  var message = event.message;
                  var data = message.records[0].data;
                  _this2.content = data;
                  _this2.isReadSuccess = true;
                  _this2.showToast('读取成功');
                };

                // 启动监听
                _context2.next = 7;
                return _this2.nfc.scan({
                  keepSessionOpen: true
                });
              case 7:
                _context2.next = 14;
                break;
              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](3);
                console.error('读取失败：', _context2.t0);
                _this2.isReadSuccess = false;
                _this2.showToast('读取失败');
              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 9]]);
      }))();
    },
    initNfc: function initNfc() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _yield$navigator$perm, state;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                if (!('NDEFReader' in window)) {
                  _context3.next = 15;
                  break;
                }
                _context3.next = 4;
                return navigator.permissions.query({
                  name: 'nfc'
                });
              case 4:
                _yield$navigator$perm = _context3.sent;
                state = _yield$navigator$perm.state;
                if (!(state !== 'granted')) {
                  _context3.next = 9;
                  break;
                }
                alert('请允许使用 NFC 功能');
                return _context3.abrupt("return");
              case 9:
                // 获取 NFC 标签对象
                _this3.nfc = new NDEFReader();
                _context3.next = 12;
                return _this3.nfc.scan();
              case 12:
                console.log('NFC 初始化成功');
                _context3.next = 16;
                break;
              case 15:
                alert('当前浏览器不支持 NFC 功能');
              case 16:
                _context3.next = 22;
                break;
              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](0);
                console.error('NFC 初始化失败：', _context3.t0);
                alert('NFC 初始化失败');
              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 18]]);
      }))();
    },
    showToast: function showToast(message) {
      // 显示提示信息的逻辑
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 70:
/*!*********************************************************************************************************************!*\
  !*** E:/study/AndroidTestFile/uni-app/final_project/pages/save_data/save_data.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../MS_edge_download/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./save_data.vue?vue&type=style&index=0&lang=css& */ 71);
/* harmony import */ var _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_MS_edge_download_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_save_data_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/study/AndroidTestFile/uni-app/final_project/pages/save_data/save_data.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[64,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/save_data/save_data.js.map