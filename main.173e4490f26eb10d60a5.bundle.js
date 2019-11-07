(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(37),__webpack_require__(36),__webpack_require__(9),__webpack_require__(85),__webpack_require__(86);var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(59),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(25),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__),_src__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(40);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var Confirm=function(_React$Component){function Confirm(){var _getPrototypeOf2,_this,obj,key,value,self,call;!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Confirm);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return self=this,call=(_getPrototypeOf2=_getPrototypeOf(Confirm)).call.apply(_getPrototypeOf2,[this].concat(args)),_this=!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call,obj=_assertThisInitialized(_this),value=function(){var _this$props=_this.props,dialog=_this$props.dialog,options=_this$props.options;dialog.confirm(options).then((function(){return console.log("clicked ok")})).catch((function(){return console.log("clicked cancel")}))},(key="handleClick")in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Confirm,_React$Component),Constructor=Confirm,(protoProps=[{key:"render",value:function(){var classes=this.props.classes;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a,{variant:"outlined",color:"primary",className:classes.button,onClick:this.handleClick},"Open Confirm Dialog")}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Confirm;var Constructor,protoProps,staticProps}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);Confirm.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,dialog:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object])},Confirm.defaultProps={options:"This is the default confirm!"},__webpack_exports__.a=Object(_src__WEBPACK_IMPORTED_MODULE_9__.b)()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)((function(theme){return{button:{margin:2*theme.spacing.unit}}}))(Confirm)),Confirm.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Confirm",props:{options:{defaultValue:{value:"'This is the default confirm!'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},classes:{type:{name:"object"},required:!0,description:""},dialog:{type:{name:"object"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/Confirm.js"]={name:"Confirm",docgenInfo:Confirm.__docgenInfo,path:"stories/components/Confirm.js"})},155:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(37),__webpack_require__(36),__webpack_require__(9),__webpack_require__(85),__webpack_require__(86);var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(59),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(25),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__),_src__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(40);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var Alert=function(_React$Component){function Alert(){var _getPrototypeOf2,_this,obj,key,value,self,call;!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Alert);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return self=this,call=(_getPrototypeOf2=_getPrototypeOf(Alert)).call.apply(_getPrototypeOf2,[this].concat(args)),_this=!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call,obj=_assertThisInitialized(_this),value=function(){var _this$props=_this.props,dialog=_this$props.dialog,options=_this$props.options;dialog.alert(options).then((function(){return console.log("clicked ok")}))},(key="handleClick")in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Alert,_React$Component),Constructor=Alert,(protoProps=[{key:"render",value:function(){var classes=this.props.classes;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a,{variant:"outlined",color:"primary",className:classes.button,onClick:this.handleClick},"Open Alert Dialog")}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Alert;var Constructor,protoProps,staticProps}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);Alert.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,dialog:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object])},Alert.defaultProps={options:"This is the default alert!"},__webpack_exports__.a=Object(_src__WEBPACK_IMPORTED_MODULE_9__.b)()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)((function(theme){return{button:{margin:2*theme.spacing.unit}}}))(Alert)),Alert.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Alert",props:{options:{defaultValue:{value:"'This is the default alert!'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},classes:{type:{name:"object"},required:!0,description:""},dialog:{type:{name:"object"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/Alert.js"]={name:"Alert",docgenInfo:Alert.__docgenInfo,path:"stories/components/Alert.js"})},255:function(module,exports,__webpack_require__){__webpack_require__(256),__webpack_require__(353),module.exports=__webpack_require__(354)},279:function(module,exports){},354:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(74);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function(){__webpack_require__(466)}),module)}.call(this,__webpack_require__(188)(module))},40:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(37),__webpack_require__(126),__webpack_require__(219),__webpack_require__(467),__webpack_require__(38),__webpack_require__(50),__webpack_require__(36),__webpack_require__(32),__webpack_require__(39),__webpack_require__(51),__webpack_require__(9),__webpack_require__(85),__webpack_require__(86),__webpack_require__(202),__webpack_require__(187);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),Dialog=__webpack_require__(69),Dialog_default=__webpack_require__.n(Dialog),DialogActions=__webpack_require__(73),DialogActions_default=__webpack_require__.n(DialogActions),DialogContent=__webpack_require__(71),DialogContent_default=__webpack_require__.n(DialogContent),DialogContentText=__webpack_require__(72),DialogContentText_default=__webpack_require__.n(DialogContentText),DialogTitle=__webpack_require__(70),DialogTitle_default=__webpack_require__.n(DialogTitle),Button=__webpack_require__(25),Button_default=__webpack_require__.n(Button);function AlertDialog(props){var open=props.open,_onClose=props.onClose,onExited=props.onExited,title=props.title,message=props.message,ok=props.ok;return react_default.a.createElement(Dialog_default.a,{fullWidth:!0,open:open,onClose:function(){return _onClose()},onExited:onExited,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-message"},react_default.a.createElement(DialogTitle_default.a,{id:"alert-dialog-title"},title),react_default.a.createElement(DialogContent_default.a,null,react_default.a.createElement(DialogContentText_default.a,{id:"alert-dialog-message"},message)),react_default.a.createElement(DialogActions_default.a,null,react_default.a.createElement(Button_default.a,{onClick:function(){return _onClose()},color:ok.color,variant:ok.variant,autoFocus:!0},ok.text)))}AlertDialog.propTypes={open:prop_types_default.a.bool.isRequired,onClose:prop_types_default.a.func.isRequired,onExited:prop_types_default.a.func.isRequired,title:prop_types_default.a.string,message:prop_types_default.a.node,ok:prop_types_default.a.objectOf({text:prop_types_default.a.string,color:prop_types_default.a.string,variant:prop_types_default.a.string})},AlertDialog.defaultProps={open:!1,title:"",ok:{text:"OK",color:"primary",variant:"text"}};var components_AlertDialog=AlertDialog;function ConfirmDialog(props){var open=props.open,_onClose=props.onClose,onExited=props.onExited,title=props.title,message=props.message,ok=props.ok,cancel=props.cancel;return react_default.a.createElement(Dialog_default.a,{fullWidth:!0,open:open,onClose:function(){return _onClose(!1)},onExited:onExited,"aria-labelledby":"confirm-dialog-title","aria-describedby":"confirm-dialog-message"},react_default.a.createElement(DialogTitle_default.a,{id:"confirm-dialog-title"},title),react_default.a.createElement(DialogContent_default.a,null,react_default.a.createElement(DialogContentText_default.a,{id:"confirm-dialog-message"},message)),react_default.a.createElement(DialogActions_default.a,null,react_default.a.createElement(Button_default.a,{onClick:function(){return _onClose(!1)},color:cancel.color,variant:cancel.variant},cancel.text),react_default.a.createElement(Button_default.a,{onClick:function(){return _onClose(!0)},color:ok.color,variant:ok.variant,autoFocus:!0},ok.text)))}AlertDialog.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{open:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},ok:{defaultValue:{value:"{\n  text: 'OK',\n  color: 'primary',\n  variant: 'text'\n}",computed:!1},type:{name:"objectOf",value:{name:"custom",raw:"{\n  text: PropTypes.string,\n  color: PropTypes.string,\n  variant: PropTypes.string\n}"}},required:!1,description:""},onClose:{type:{name:"func"},required:!0,description:""},onExited:{type:{name:"func"},required:!0,description:""},message:{type:{name:"node"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlertDialog.js"]={name:"AlertDialog",docgenInfo:AlertDialog.__docgenInfo,path:"src/components/AlertDialog.js"}),ConfirmDialog.propTypes={open:prop_types_default.a.bool.isRequired,onClose:prop_types_default.a.func.isRequired,onExited:prop_types_default.a.func.isRequired,title:prop_types_default.a.string,message:prop_types_default.a.node,ok:prop_types_default.a.objectOf({text:prop_types_default.a.string,color:prop_types_default.a.string,variant:prop_types_default.a.string}),cancel:prop_types_default.a.objectOf({text:prop_types_default.a.string,color:prop_types_default.a.string,variant:prop_types_default.a.string})},ConfirmDialog.defaultProps={open:!1,title:"",ok:{text:"OK",color:"primary",variant:"text"},cancel:{text:"Cancel",color:"primary",variant:"text"}};var components_ConfirmDialog=ConfirmDialog;ConfirmDialog.__docgenInfo={description:"",methods:[],displayName:"ConfirmDialog",props:{open:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},ok:{defaultValue:{value:"{\n  text: 'OK',\n  color: 'primary',\n  variant: 'text'\n}",computed:!1},type:{name:"objectOf",value:{name:"custom",raw:"{\n  text: PropTypes.string,\n  color: PropTypes.string,\n  variant: PropTypes.string\n}"}},required:!1,description:""},cancel:{defaultValue:{value:"{\n  text: 'Cancel',\n  color: 'primary',\n  variant: 'text'\n}",computed:!1},type:{name:"objectOf",value:{name:"custom",raw:"{\n  text: PropTypes.string,\n  color: PropTypes.string,\n  variant: PropTypes.string\n}"}},required:!1,description:""},onClose:{type:{name:"func"},required:!0,description:""},onExited:{type:{name:"func"},required:!0,description:""},message:{type:{name:"node"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConfirmDialog.js"]={name:"ConfirmDialog",docgenInfo:ConfirmDialog.__docgenInfo,path:"src/components/ConfirmDialog.js"});var withStateHandlers=__webpack_require__(253),withStateHandlers_default=__webpack_require__.n(withStateHandlers),TextField=__webpack_require__(254),TextField_default=__webpack_require__.n(TextField);function PromptDialog(props){var open=props.open,_onClose=props.onClose,onExited=props.onExited,title=props.title,message=props.message,ok=props.ok,cancel=props.cancel,required=props.required,defaultValue=props.defaultValue,value=props.value,handleChange=props.handleChange;return react_default.a.createElement(Dialog_default.a,{fullWidth:!0,open:open,onClose:function(){return _onClose(null)},onExited:onExited,"aria-labelledby":"prompt-dialog-title","aria-describedby":"prompt-dialog-message"},react_default.a.createElement(DialogTitle_default.a,{id:"prompt-dialog-title"},title),react_default.a.createElement(DialogContent_default.a,null,react_default.a.createElement(DialogContentText_default.a,{id:"prompt-dialog-message"},message),react_default.a.createElement(TextField_default.a,{id:"prompt-dialog-text-field",onChange:handleChange,defaultValue:defaultValue,required:!0,margin:"dense",fullWidth:!0,autoFocus:!0})),react_default.a.createElement(DialogActions_default.a,null,react_default.a.createElement(Button_default.a,{onClick:function(){return _onClose(null)},color:cancel.color,variant:cancel.variant},cancel.text),react_default.a.createElement(Button_default.a,{onClick:function(){return _onClose(value)},color:ok.color,variant:ok.variant,disabled:required&&!value},ok.text)))}PromptDialog.propTypes={open:prop_types_default.a.bool.isRequired,onClose:prop_types_default.a.func.isRequired,onExited:prop_types_default.a.func.isRequired,title:prop_types_default.a.string,message:prop_types_default.a.node,ok:prop_types_default.a.objectOf({text:prop_types_default.a.string,color:prop_types_default.a.string,variant:prop_types_default.a.string}),cancel:prop_types_default.a.objectOf({text:prop_types_default.a.string,color:prop_types_default.a.string,variant:prop_types_default.a.string}),required:prop_types_default.a.bool,defaultValue:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]),value:prop_types_default.a.string,handleChange:prop_types_default.a.func.isRequired},PromptDialog.defaultProps={open:!1,title:"",ok:{text:"OK",color:"primary",variant:"text"},cancel:{text:"Cancel",color:"primary",variant:"text"},required:!1};var components_PromptDialog=withStateHandlers_default()((function(_ref){return{value:_ref.defaultValue}}),{handleChange:function(){return function(event){return{value:event.target.value}}}})(PromptDialog);PromptDialog.__docgenInfo={description:"",methods:[],displayName:"PromptDialog",props:{open:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},ok:{defaultValue:{value:"{\n  text: 'OK',\n  color: 'primary',\n  variant: 'text'\n}",computed:!1},type:{name:"objectOf",value:{name:"custom",raw:"{\n  text: PropTypes.string,\n  color: PropTypes.string,\n  variant: PropTypes.string\n}"}},required:!1,description:""},cancel:{defaultValue:{value:"{\n  text: 'Cancel',\n  color: 'primary',\n  variant: 'text'\n}",computed:!1},type:{name:"objectOf",value:{name:"custom",raw:"{\n  text: PropTypes.string,\n  color: PropTypes.string,\n  variant: PropTypes.string\n}"}},required:!1,description:""},required:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onClose:{type:{name:"func"},required:!0,description:""},onExited:{type:{name:"func"},required:!0,description:""},message:{type:{name:"node"},required:!1,description:""},defaultValue:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""},handleChange:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PromptDialog.js"]={name:"PromptDialog",docgenInfo:PromptDialog.__docgenInfo,path:"src/components/PromptDialog.js"});var src_DialogContext=react_default.a.createContext({dialog:{}});function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var DialogProvider_DialogProvider=function(_React$PureComponent){function DialogProvider(){var _getPrototypeOf2,_this,self,call;!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DialogProvider);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return self=this,call=(_getPrototypeOf2=_getPrototypeOf(DialogProvider)).call.apply(_getPrototypeOf2,[this].concat(args)),_this=!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call,_defineProperty(_assertThisInitialized(_this),"state",{alertDialog:null,confirmDialog:null,promptDialog:null}),_defineProperty(_assertThisInitialized(_this),"handleAlertDialogClose",(function(value){var alertDialog=_this.state.alertDialog;return _this.setState({alertDialog:_objectSpread({},alertDialog,{open:!1})}),alertDialog.resolve(value)})),_defineProperty(_assertThisInitialized(_this),"handleConfirmDialogClose",(function(value){var confirmDialog=_this.state.confirmDialog;return _this.setState({confirmDialog:_objectSpread({},confirmDialog,{open:!1})}),value?confirmDialog.resolve(value):confirmDialog.reject()})),_defineProperty(_assertThisInitialized(_this),"handlePromptDialogClose",(function(value){var promptDialog=_this.state.promptDialog;return _this.setState({promptDialog:_objectSpread({},promptDialog,{open:!1})}),value?promptDialog.resolve(value):promptDialog.reject()})),_defineProperty(_assertThisInitialized(_this),"handleExited",(function(){_this.setState({alertDialog:null,confirmDialog:null,promptDialog:null})})),_defineProperty(_assertThisInitialized(_this),"alert",(function(options){return"string"==typeof options?new Promise((function(resolve,reject){_this.setState({alertDialog:{message:options,resolve:resolve,reject:reject,open:!0}})})):new Promise((function(resolve,reject){_this.setState({alertDialog:_objectSpread({},options,{resolve:resolve,reject:reject,open:!0})})}))})),_defineProperty(_assertThisInitialized(_this),"confirm",(function(options){return"string"==typeof options?new Promise((function(resolve,reject){_this.setState({confirmDialog:{message:options,resolve:resolve,reject:reject,open:!0}})})):new Promise((function(resolve,reject){_this.setState({confirmDialog:_objectSpread({},options,{resolve:resolve,reject:reject,open:!0})})}))})),_defineProperty(_assertThisInitialized(_this),"prompt",(function(options){return"string"==typeof options?new Promise((function(resolve,reject){_this.setState({promptDialog:{message:options,resolve:resolve,reject:reject,open:!0}})})):new Promise((function(resolve,reject){_this.setState({promptDialog:_objectSpread({},options,{resolve:resolve,reject:reject,open:!0})})}))})),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(DialogProvider,_React$PureComponent),Constructor=DialogProvider,(protoProps=[{key:"render",value:function(){var children=this.props.children,_this$state=this.state,alertDialog=_this$state.alertDialog,confirmDialog=_this$state.confirmDialog,promptDialog=_this$state.promptDialog,dialog={alert:this.alert,confirm:this.confirm,prompt:this.prompt};return react_default.a.createElement(src_DialogContext.Provider,{value:{dialog:dialog}},children,alertDialog&&react_default.a.createElement(components_AlertDialog,_extends({},alertDialog,{open:alertDialog.open,onClose:this.handleAlertDialogClose,onExited:this.handleExited})),confirmDialog&&react_default.a.createElement(components_ConfirmDialog,_extends({},confirmDialog,{open:confirmDialog.open,onClose:this.handleConfirmDialogClose,onExited:this.handleExited})),promptDialog&&react_default.a.createElement(components_PromptDialog,_extends({},promptDialog,{open:promptDialog.open,onClose:this.handlePromptDialogClose,onExited:this.handleExited})))}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),DialogProvider;var Constructor,protoProps,staticProps}(react_default.a.PureComponent),src_DialogProvider=DialogProvider_DialogProvider;function withDialog_extends(){return(withDialog_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}DialogProvider_DialogProvider.__docgenInfo={description:"",methods:[{name:"handleAlertDialogClose",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"handleConfirmDialogClose",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"handlePromptDialogClose",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"handleExited",docblock:null,modifiers:[],params:[],returns:null},{name:"alert",docblock:null,modifiers:[],params:[{name:"options",type:null}],returns:null},{name:"confirm",docblock:null,modifiers:[],params:[{name:"options",type:null}],returns:null},{name:"prompt",docblock:null,modifiers:[],params:[{name:"options",type:null}],returns:null}],displayName:"DialogProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/DialogProvider.js"]={name:"DialogProvider",docgenInfo:DialogProvider_DialogProvider.__docgenInfo,path:"src/DialogProvider.js"});var src_withDialog=function(){return function(WrappedComponent){return function(props){return react_default.a.createElement(src_DialogContext.Consumer,null,(function(_ref){var dialog=_ref.dialog;return react_default.a.createElement(WrappedComponent,withDialog_extends({dialog:dialog},props))}))}}};__webpack_require__.d(__webpack_exports__,"a",(function(){return src_DialogProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return src_withDialog}))},466:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40),_components_Alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(155),_components_Confirm__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(109),_components_Prompt__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(89);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Alert",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,null,story())})).add("basic usage",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_3__.a,null)})).add("with title and message",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_3__.a,{options:{title:"Alert Dialog",message:"This is alert dialog message."}})})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Confirm",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,null,story())})).add("basic usage",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Confirm__WEBPACK_IMPORTED_MODULE_4__.a,null)})).add("with title and message",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Confirm__WEBPACK_IMPORTED_MODULE_4__.a,{options:{title:"Confirm Dialog",message:"This is confirm dialog message."}})})).add("changing button color and variant",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Confirm__WEBPACK_IMPORTED_MODULE_4__.a,{options:{title:"Confirm Dialog",message:"This is confirm dialog message.",ok:{text:"Yes",color:"primary",variant:"contained"},cancel:{text:"No",color:"secondary",variant:"outlined"}}})})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Prompt",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,null,story())})).add("basic usage",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Prompt__WEBPACK_IMPORTED_MODULE_5__.a,null)})).add("with title and message",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Prompt__WEBPACK_IMPORTED_MODULE_5__.a,{options:{title:"Prompt Dialog",message:"This is prompt dialog message."}})})).add("with required",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Prompt__WEBPACK_IMPORTED_MODULE_5__.a,{options:{title:"Prompt Dialog",message:"This is prompt dialog message.",required:!0}})})).add("with default value",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Prompt__WEBPACK_IMPORTED_MODULE_5__.a,{options:{title:"Prompt Dialog",message:"This is prompt dialog message.",defaultValue:"Bob",required:!0}})}))}.call(this,__webpack_require__(188)(module))},89:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(37),__webpack_require__(36),__webpack_require__(9),__webpack_require__(85),__webpack_require__(86);var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(59),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(25),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__),_src__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(40);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var Prompt=function(_React$Component){function Prompt(){var _getPrototypeOf2,_this,obj,key,value,self,call;!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Prompt);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return self=this,call=(_getPrototypeOf2=_getPrototypeOf(Prompt)).call.apply(_getPrototypeOf2,[this].concat(args)),_this=!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call,obj=_assertThisInitialized(_this),value=function(){var _this$props=_this.props,dialog=_this$props.dialog,options=_this$props.options;dialog.prompt(options).then((function(value){return console.log("clicked ok",value)})).catch((function(){return console.log("clicked cancel")}))},(key="handleClick")in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Prompt,_React$Component),Constructor=Prompt,(protoProps=[{key:"render",value:function(){var classes=this.props.classes;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a,{variant:"outlined",color:"primary",className:classes.button,onClick:this.handleClick},"Open Prompt Dialog")}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Prompt;var Constructor,protoProps,staticProps}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);Prompt.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,dialog:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object])},Prompt.defaultProps={options:"This is the default prompt!"},__webpack_exports__.a=Object(_src__WEBPACK_IMPORTED_MODULE_9__.b)()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)((function(theme){return{button:{margin:2*theme.spacing.unit}}}))(Prompt)),Prompt.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Prompt",props:{options:{defaultValue:{value:"'This is the default prompt!'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},classes:{type:{name:"object"},required:!0,description:""},dialog:{type:{name:"object"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/Prompt.js"]={name:"Prompt",docgenInfo:Prompt.__docgenInfo,path:"stories/components/Prompt.js"})}},[[255,1,2]]]);
//# sourceMappingURL=main.173e4490f26eb10d60a5.bundle.js.map