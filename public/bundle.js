/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: ROUTE_POINT_TYPES, ROUTE_POINT_DESTINATIONS, ROUTE_POINT_OPTIONS, ROUTE_POINT_DESCRIPTION_SENTENCES, ROUTE_POINT_PHOTO_PLACEHOLDER, UpdateType, UserAction, FilterType, SortingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_POINT_TYPES", function() { return ROUTE_POINT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_POINT_DESTINATIONS", function() { return ROUTE_POINT_DESTINATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_POINT_OPTIONS", function() { return ROUTE_POINT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_POINT_DESCRIPTION_SENTENCES", function() { return ROUTE_POINT_DESCRIPTION_SENTENCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_POINT_PHOTO_PLACEHOLDER", function() { return ROUTE_POINT_PHOTO_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateType", function() { return UpdateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return UserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingType", function() { return SortingType; });
const ROUTE_POINT_TYPES = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];

const ROUTE_POINT_DESTINATIONS = [`Amsterdam`, `Chamonix`, `Geneva`, `London`, `Reykjavik`, `Tokio`, `Paris`, `Los Angeles`];

const ROUTE_POINT_OPTIONS = [
  {
    name: `Order Uber`,
    forTypes: [`Bus`, `Drive`]
  },
  {
    name: `Add luggage`,
    forTypes: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Flight`]
  },
  {
    name: `Switch to comfort class`,
    forTypes: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Flight`]
  },
  {
    name: `Add meal`,
    forTypes: [`Train`, `Ship`, `Flight`]
  },
  {
    name: `Choose seats`,
    forTypes: [`Flight`, `Restaurant`]
  },
  {
    name: `Travel by train`,
    forTypes: [`Taxi`, `Bus`, `Transport`, `Drive`, `Flight`]
  },
  {
    name: `Rent a car`,
    forTypes: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`]
  },
  {
    name: `Add breakfest`,
    forTypes: [`Check-in`]
  },
  {
    name: `Book Tickets`,
    forTypes: [`Bus`, `Train`, `Ship`, `Flight`]
  },
  {
    name: `Lunch in city`,
    forTypes: [`Check-in`]
  }
];

const ROUTE_POINT_DESCRIPTION_SENTENCES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const ROUTE_POINT_PHOTO_PLACEHOLDER = `http://picsum.photos/248/152?r=`;

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};

const UserAction = {
  UPDATE_ROUTE_POINT: `UPDATE_ROUTE_POINT`,
  DELETE_ROUTE_POINT: `DELETE_ROUTE_POINT`,
  ADD_ROUTE_POINT: `ADD_ROUTE_POINT`
};

const FilterType = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`
};

const SortingType = {
  DAY: `day`,
  TIME: `time`,
  PRICE: `price`,
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_route_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/route-point.js */ "./src/mock/route-point.js");
/* harmony import */ var _presenters_route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenters/route.js */ "./src/presenters/route.js");
/* harmony import */ var _model_route_points_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/route-points.js */ "./src/model/route-points.js");
/* harmony import */ var _presenters_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenters/filter.js */ "./src/presenters/filter.js");
/* harmony import */ var _model_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/filter.js */ "./src/model/filter.js");






const ROUTE_ITEM_COUNT = 15;

const routeMainInfoElement = document.querySelector(`.trip-main`);
const routeEventsElement = document.querySelector(`.trip-events`);

const routePoints = new Array(ROUTE_ITEM_COUNT).fill().map(_mock_route_point_js__WEBPACK_IMPORTED_MODULE_0__["generateRoutePoint"]);

const routePointsModel = new _model_route_points_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
routePointsModel.setRoutePoints(routePoints);

const filterModel = new _model_filter_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

const routePresenter = new _presenters_route_js__WEBPACK_IMPORTED_MODULE_1__["default"](routeMainInfoElement, routeEventsElement, routePointsModel, filterModel);
const filterPresenter = new _presenters_filter_js__WEBPACK_IMPORTED_MODULE_3__["default"](routeMainInfoElement.querySelector(`.trip-controls`), filterModel);

routePresenter.init();
filterPresenter.init();

document.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  routePresenter.createRoutePoint();
});



/***/ }),

/***/ "./src/mock/route-point.js":
/*!*********************************!*\
  !*** ./src/mock/route-point.js ***!
  \*********************************/
/*! exports provided: getId, BLANK_ROUTE_POINT, getOptions, getDescription, getPhotos, generateRoutePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLANK_ROUTE_POINT", function() { return BLANK_ROUTE_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return getDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhotos", function() { return getPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRoutePoint", function() { return generateRoutePoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const getId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const BLANK_ROUTE_POINT = {
  type: `Flight`,
  destination: ``,
  options: [],
  description: ``,
  photos: [],
  times: {},
  price: null,
  isFavorite: false
};

const getOptions = (type) => {
  const options = [];
  const randomPrice = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(0, 20) * 5;

  for (let i = 0; i < _const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_OPTIONS"].length; i++) {
    if (_const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_OPTIONS"][i].forTypes.indexOf(type) !== -1) {
      options.push(
          {
            optionName: _const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_OPTIONS"][i].name,
            optionPrice: randomPrice,
            isSelected: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(0, 1))
          }
      );
    }
  }

  return options;
};

const getDescription = () => {
  const MAX_QUANTITY = 5;
  const quantity = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(1, MAX_QUANTITY);
  const sentences = _const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_DESCRIPTION_SENTENCES"].slice();

  let description = ``;

  for (let i = 1; i <= quantity; i++) {
    const randomIndex = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(0, sentences.length - 1);
    description += (i === 1) ? sentences[randomIndex] : ` ` + sentences[randomIndex];
    sentences.splice(randomIndex, 1);
  }

  return description;
};

const getPhotos = () => {
  const MAX_QUANTITY = 4;
  const quantity = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(1, MAX_QUANTITY);
  const link = _const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_PHOTO_PLACEHOLDER"];
  const photos = [];

  for (let i = 1; i <= quantity; i++) {
    photos.push(`${link}${Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(0, 9)}`);
  }

  return photos;
};

const getTimes = () => {
  const MAX_MINUTES_GAP = 2160;

  const startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(1, MAX_MINUTES_GAP / 5) * 5, `minute`).toDate();
  const endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startTime).add(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(1, MAX_MINUTES_GAP / 5) * 5, `minute`).toDate();

  return {
    startTime,
    endTime,
  };
};

const generateRoutePoint = () => {
  const type = _const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_TYPES"][Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(0, _const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_TYPES"].length - 1)];

  return {
    id: getId(),
    type,
    destination: _const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_DESTINATIONS"][Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(0, _const_js__WEBPACK_IMPORTED_MODULE_2__["ROUTE_POINT_DESTINATIONS"].length - 1)],
    options: getOptions(type),
    description: getDescription(),
    photos: getPhotos(),
    times: getTimes(),
    price: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(0, 20) * 5,
    isFavorite: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])())
  };
};


/***/ }),

/***/ "./src/model/filter.js":
/*!*****************************!*\
  !*** ./src/model/filter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./src/utils/observer.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



class Filter extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._activeFilter = _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].EVERYTHING;
  }

  setFilter(updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  getFilter() {
    return this._activeFilter;
  }
}


/***/ }),

/***/ "./src/model/route-points.js":
/*!***********************************!*\
  !*** ./src/model/route-points.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoutePoints; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./src/utils/observer.js");


class RoutePoints extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._routePoints = [];
  }

  setRoutePoints(routePoints) {
    this._routePoints = routePoints.slice();
  }

  getRoutePoints() {
    return this._routePoints;
  }

  updateRoutePoint(updateType, update) {
    const index = this._routePoints.findIndex((routePoint) => routePoint.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting route point`);
    }

    this._routePoints = [
      ...this._routePoints.slice(0, index),
      update,
      ...this._routePoints.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  deleteRoutePoint(updateType, update) {
    const index = this._routePoints.findIndex((routePoint) => routePoint.id === update.id);

    if (index === -1) {
      throw new Error(`Can't delete unexisting route point`);
    }

    this._routePoints = [
      ...this._routePoints.slice(0, index),
      ...this._routePoints.slice(index + 1)
    ];

    this._notify(updateType);
  }

  addRoutePoint(updateType, update) {
    this._routePoints = [
      update,
      ...this._routePoints
    ];

    this._notify(updateType, update);
  }
}


/***/ }),

/***/ "./src/presenters/filter.js":
/*!**********************************!*\
  !*** ./src/presenters/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");




class Filter {
  constructor(filterContainer, filterModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;

    this._handleModelChange = this._handleModelChange.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._currentFilter = null;
    this._filterComponent = null;

    this._filterModel.addObserver(this._handleModelChange);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new _view_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"](filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._filterContainer, this._filterComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filterComponent, prevFilterComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilterComponent);
  }

  _handleModelChange() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(_const_js__WEBPACK_IMPORTED_MODULE_1__["UpdateType"].MINOR, filterType);
  }

  _getFilters() {
    return [
      {
        type: _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].EVERYTHING,
        name: `Everything`
      },
      {
        type: _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].FUTURE,
        name: `Future`
      },
      {
        type: _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].PAST,
        name: `Past`
      }
    ];
  }
}


/***/ }),

/***/ "./src/presenters/new-route-point.js":
/*!*******************************************!*\
  !*** ./src/presenters/new-route-point.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewRoutePoint; });
/* harmony import */ var _view_editing_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/editing-form.js */ "./src/view/editing-form.js");
/* harmony import */ var _mock_route_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/route-point.js */ "./src/mock/route-point.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./src/const.js");






class NewRoutePoint {
  constructor(routePointListComponent, changeData) {
    this._routePointListComponent = routePointListComponent;
    this._changeData = changeData;

    this._routePointEditFormComponent = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init() {
    if (this._routePointEditFormComponent !== null) {
      return;
    }

    this._routePointEditFormComponent = new _view_editing_form_js__WEBPACK_IMPORTED_MODULE_0__["default"](_mock_route_point_js__WEBPACK_IMPORTED_MODULE_1__["BLANK_ROUTE_POINT"], true);
    this._routePointEditFormComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._routePointEditFormComponent.setDeleteClickHandler(this._handleDeleteClick);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._routePointListComponent, this._routePointEditFormComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].AFTERBEGIN);

    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  destroy() {
    if (this._routePointEditFormComponent === null) {
      return;
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._routePointEditFormComponent);
    this._routePointEditFormComponent = null;

    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _handleFormSubmit(routePoint) {
    this._changeData(
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].ADD_ROUTE_POINT,
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MAJOR,
        Object.assign({id: Object(_mock_route_point_js__WEBPACK_IMPORTED_MODULE_1__["getId"])()}, routePoint));
    this.destroy();
  }

  _handleDeleteClick() {
    this.destroy();
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.destroy();
    }
  }
}


/***/ }),

/***/ "./src/presenters/route-point.js":
/*!***************************************!*\
  !*** ./src/presenters/route-point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoutePoint; });
/* harmony import */ var _view_route_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/route-point.js */ "./src/view/route-point.js");
/* harmony import */ var _view_editing_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/editing-form.js */ "./src/view/editing-form.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./src/const.js");





const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

class RoutePoint {
  constructor(routePointListComponent, changeData, changeMode) {
    this._routePointListComponent = routePointListComponent;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._routePointComponent = null;
    this._routePointEditFormComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleRollupClick = this._handleRollupClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
  }

  init(routePoint) {
    this._routePoint = routePoint;

    const prevRoutePointComponent = this._routePointComponent;
    const prevRoutePointEditFormComponent = this._routePointEditFormComponent;

    this._routePointComponent = new _view_route_point_js__WEBPACK_IMPORTED_MODULE_0__["default"](routePoint);
    this._routePointEditFormComponent = new _view_editing_form_js__WEBPACK_IMPORTED_MODULE_1__["default"](routePoint);

    this._routePointComponent.setRollupClickHandler(this._handleRollupClick);
    this._routePointComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._routePointEditFormComponent.setRollupClickHandler(this._handleRollupClick);
    this._routePointEditFormComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._routePointEditFormComponent.setDeleteClickHandler(this._handleDeleteClick);

    if (prevRoutePointComponent === null || prevRoutePointEditFormComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._routePointListComponent, this._routePointComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._routePointComponent, prevRoutePointComponent);
    }

    if (this._mode === Mode.EDITING) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._routePointEditFormComponent, prevRoutePointEditFormComponent);
    }

    if (prevRoutePointComponent !== null || prevRoutePointEditFormComponent !== null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevRoutePointComponent);
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevRoutePointEditFormComponent);
    }
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._routePointComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._routePointEditFormComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  _replaceCardToForm() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._routePointEditFormComponent, this._routePointComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToCard() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._routePointComponent, this._routePointEditFormComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _handleRollupClick() {
    if (this._mode === Mode.DEFAULT) {
      this._replaceCardToForm();
      return;
    }

    if (this._mode === Mode.EDITING) {
      this._replaceFormToCard();
    }
  }

  _handleFavoriteClick() {
    this._changeData(
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_ROUTE_POINT,
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MINOR,
        Object.assign(
            {},
            this._routePoint,
            {isFavorite: !this._routePoint.isFavorite}
        )
    );
  }

  _handleDeleteClick(routePoint) {
    this._changeData(
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].DELETE_ROUTE_POINT,
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MAJOR,
        routePoint
    );
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._routePointEditFormComponent.reset(this.routePoint);
      this._replaceFormToCard();
    }
  }

  _handleFormSubmit(routePoint) {
    this._changeData(_const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MAJOR, routePoint);
    this._replaceFormToCard();
  }
}


/***/ }),

/***/ "./src/presenters/route.js":
/*!*********************************!*\
  !*** ./src/presenters/route.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Route; });
/* harmony import */ var _view_route_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/route-info.js */ "./src/view/route-info.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_price_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/price.js */ "./src/view/price.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_route_point_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/route-point-list.js */ "./src/view/route-point-list.js");
/* harmony import */ var _view_no_route_point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/no-route-point.js */ "./src/view/no-route-point.js");
/* harmony import */ var _route_point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-point.js */ "./src/presenters/route-point.js");
/* harmony import */ var _new_route_point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-route-point.js */ "./src/presenters/new-route-point.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/filter.js */ "./src/utils/filter.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);













class Route {
  constructor(routeMainInfoContainer, routeEventsContainer, routePointsModel, filterModel) {
    this._routeMainInfoContainer = routeMainInfoContainer;
    this._routeEventsContainer = routeEventsContainer;
    this._routePointPresenter = {};
    this._routePointsModel = routePointsModel;
    this._filterModel = filterModel;
    this._currentSortingType = _const_js__WEBPACK_IMPORTED_MODULE_10__["SortingType"].DAY;

    this._sortingComponent = null;

    this._menuComponent = new _view_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._routePointListComponent = new _view_route_point_list_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._noRoutePointComponent = new _view_no_route_point_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

    this._handleViewChange = this._handleViewChange.bind(this);
    this._handleModelChange = this._handleModelChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortingTypeChange = this._handleSortingTypeChange.bind(this);

    this._routePointsModel.addObserver(this._handleModelChange);
    this._filterModel.addObserver(this._handleModelChange);

    this._newRoutePointPresenter = new _new_route_point_js__WEBPACK_IMPORTED_MODULE_7__["default"](this._routePointListComponent, this._handleViewChange);
  }

  init() {
    this._renderRoute();
  }

  createRoutePoint() {
    this._currentSortingType = _const_js__WEBPACK_IMPORTED_MODULE_10__["SortingType"].DAY;
    this._filterModel.setFilter(_const_js__WEBPACK_IMPORTED_MODULE_10__["UpdateType"].MAJOR, _const_js__WEBPACK_IMPORTED_MODULE_10__["FilterType"].EVERYTHING);

    this._newRoutePointPresenter.init();
  }

  _getRoutePoints() {
    const filterType = this._filterModel.getFilter();
    const routePoints = this._routePointsModel.getRoutePoints();
    const filteredRoutePoints = _utils_filter_js__WEBPACK_IMPORTED_MODULE_9__["filter"][filterType](routePoints);

    switch (this._currentSortingType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["SortingType"].DAY:
        return filteredRoutePoints.sort((routePointA, routePointB) => {
          return dayjs__WEBPACK_IMPORTED_MODULE_11___default()(routePointA.times.startTime) - dayjs__WEBPACK_IMPORTED_MODULE_11___default()(routePointB.times.startTime);
        });
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["SortingType"].TIME:
        return filteredRoutePoints.sort((routePointA, routePointB) => {
          return (dayjs__WEBPACK_IMPORTED_MODULE_11___default()(routePointB.times.endTime) - dayjs__WEBPACK_IMPORTED_MODULE_11___default()(routePointB.times.startTime)) - (dayjs__WEBPACK_IMPORTED_MODULE_11___default()(routePointA.times.endTime) - dayjs__WEBPACK_IMPORTED_MODULE_11___default()(routePointA.times.startTime));
        });
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["SortingType"].PRICE:
        return filteredRoutePoints.sort((routePointA, routePointB) => {
          return routePointB.price - routePointA.price;
        });
    }

    return filteredRoutePoints;
  }

  _handleViewChange(actionType, updateType, update) {
    switch (actionType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["UserAction"].UPDATE_ROUTE_POINT:
        this._routePointsModel.updateRoutePoint(updateType, update);
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["UserAction"].DELETE_ROUTE_POINT:
        this._routePointsModel.deleteRoutePoint(updateType, update);
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["UserAction"].ADD_ROUTE_POINT:
        this._routePointsModel.addRoutePoint(updateType, update);
    }
  }

  _handleModelChange(updateType, data) {
    this._newRoutePointPresenter.destroy();

    switch (updateType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["UpdateType"].PATCH:
        this._routePointPresenter[data.id].init(data);
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["UpdateType"].MINOR:
        this._clearRoutePoints();
        this._renderRoute(false);
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["UpdateType"].MAJOR:
        this._clearRoute();
        this._renderRoute(true);
        break;
    }
  }

  _handleModeChange() {
    Object
      .values(this._routePointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleSortingTypeChange(sortingType) {
    if (this._currentSortingType === sortingType) {
      return;
    }

    this._currentSortingType = sortingType;
    this._clearRoutePoints();
    this._renderRoute(false);
  }

  _renderRoute(updateRouteMainInfo = true) {
    const routePoints = this._getRoutePoints();

    if (updateRouteMainInfo) {
      this._renderRouteMainInfo(routePoints);
      this._renderSorting();
      this._renderRoutePointList();
    }

    if (routePoints.length === 0) {
      this._renderNoRoutePoint();
      return;
    }

    this._renderRoutePoints(routePoints);
  }

  _renderRouteMainInfo(routePoints) {
    this._renderRouteInfo(routePoints);
    this._renderRoutePrice(routePoints);
    this._renderMenu();
  }

  _renderRouteInfo(routePoints) {
    this._routeInfoComponent = new _view_route_info_js__WEBPACK_IMPORTED_MODULE_0__["default"](routePoints);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._routeMainInfoContainer, this._routeInfoComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].AFTERBEGIN);
  }

  _renderRoutePrice(routePoints) {
    this._routePriceComponent = new _view_price_js__WEBPACK_IMPORTED_MODULE_2__["default"](routePoints);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._routeInfoComponent, this._routePriceComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  }

  _renderMenu() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._routeMainInfoContainer.querySelector(`h2:first-child`), this._menuComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].AFTER);
  }

  _renderRoutePointList() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._routeEventsContainer, this._routePointListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  }

  _renderNoRoutePoint() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._routeEventsContainer, this._noRoutePointComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  }

  _renderSorting() {
    if (this._sortingComponent !== null) {
      this._sortingComponent = null;
    }

    this._sortingComponent = new _view_sorting_js__WEBPACK_IMPORTED_MODULE_3__["default"](this._currentSortingType);
    this._sortingComponent.setSortingTypeChangeHandler(this._handleSortingTypeChange);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._routeEventsContainer, this._sortingComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  }

  _renderRoutePoints(routePoints) {
    for (let i = 0; i < routePoints.length; i++) {
      this._renderRoutePoint(routePoints[i]);
    }
  }

  _renderRoutePoint(routePoint) {
    const routePointPresenter = new _route_point_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._routePointListComponent, this._handleViewChange, this._handleModeChange);
    routePointPresenter.init(routePoint);
    this._routePointPresenter[routePoint.id] = routePointPresenter;
  }

  _clearRoutePoints() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._noRoutePointComponent);

    Object
      .values(this._routePointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._routePointPresenter = {};
  }

  _clearRoute() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._menuComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._routeInfoComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._routePriceComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._sortingComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._routePointListComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._noRoutePointComponent);

    this._clearRoutePoints();
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInt, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const getRandomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


/***/ }),

/***/ "./src/utils/filter.js":
/*!*****************************!*\
  !*** ./src/utils/filter.js ***!
  \*****************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const isPastRoutePoint = (endTime) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endTime));
};

const isFutureRoutePoint = (startTime) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startTime).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_0___default()());
};

const filter = {
  [_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].EVERYTHING]: (routePoints) => routePoints.filter(() => true),
  [_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].FUTURE]: (routePoints) => routePoints.filter((routePoint) => isFutureRoutePoint(routePoint.times.startTime)),
  [_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].PAST]: (routePoints) => routePoints.filter((routePoint) => isPastRoutePoint(routePoint.times.endTime))
};


/***/ }),

/***/ "./src/utils/observer.js":
/*!*******************************!*\
  !*** ./src/utils/observer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
class Observer {
  constructor() {
    this._observers = [];
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  removeObserver(observer) {
    this._observers = this._observers.filter((existedObserver) => existedObserver !== observer);
  }

  _notify(event, payload) {
    this._observers.forEach((observer) => observer(event, payload));
  }
}


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTER: `after`
};

const render = (targetNode, element, place) => {
  if (targetNode instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    targetNode = targetNode.getElem();
  }

  if (element instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    element = element.getElem();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      targetNode.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      targetNode.append(element);
      break;
    case RenderPosition.AFTER:
      targetNode.after(element);
      break;
  }
};

const replace = (newNode, oldNode) => {
  if (oldNode instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldNode = oldNode.getElem();
  }

  if (newNode instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newNode = newNode.getElem();
  }

  const parent = oldNode.parentElement;

  if (oldNode === null || newNode === null || parent === null) {
    throw new Error(`Can't replace existing elements`);
  }

  parent.replaceChild(newNode, oldNode);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElem().remove();
  component.removeElem();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract class, only concrete one.`);
    }

    this._elem = null;
    this._handlers = {};
  }

  getTemplate() {
    if (new.target === Abstract) {
      throw new Error(`Abstract method not imlemented: ${this.getTemplate.name}`);
    }
  }

  getElem() {
    if (!this._elem) {
      this._elem = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._elem;
  }

  removeElem() {
    this._elem = null;
  }
}


/***/ }),

/***/ "./src/view/editing-form.js":
/*!**********************************!*\
  !*** ./src/view/editing-form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoutePointEditForm; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart.js */ "./src/view/smart.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _mock_route_point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock/route-point.js */ "./src/mock/route-point.js");






const getRoutePointDetailsTemplate = (options, description, photos) => {
  return options.length !== 0 || description || photos.length !== 0 ? `<section class="event__details">
    ${createRoutePointOffersTemplate(options)}

    ${description || photos ? `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      ${description ? `<p class="event__destination-description">${description}</p>` : ``}
      ${createRoutePointPhotosTemplate(photos)}
    </section>` : ``}
  </section>` : ``;
};

const createRoutePointTypeSelectorTemplate = (routePointType) => {
  return `<div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${routePointType.toLowerCase()}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>

        ${_const_js__WEBPACK_IMPORTED_MODULE_3__["ROUTE_POINT_TYPES"].map((type) => `<div class="event__type-item">
          <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}"${type === routePointType ? ` checked` : ``}>
          <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
        </div>`).join(``)}
      </fieldset>
    </div>
  </div>`;
};

const createRoutePointDestinationTemplate = (routePointDestination) => {
  return `<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${routePointDestination ? routePointDestination : ``}" list="destination-list-1">
  <datalist id="destination-list-1">
    ${_const_js__WEBPACK_IMPORTED_MODULE_3__["ROUTE_POINT_DESTINATIONS"].map((destination) => `<option value="${destination}"></option>`)}
  </datalist>`;
};

const createRoutePointOffersTemplate = (routePointOptions) => {
  const optionId = new Map([
    [`Order Uber`, `uber`],
    [`Add luggage`, `luggage`],
    [`Switch to comfort class`, `comfort`],
    [`Add meal`, `meal`],
    [`Choose seats`, `seats`],
    [`Travel by train`, `train`],
    [`Rent a car`, `car`],
    [`Add breakfest`, `breakfest`],
    [`Book Tickets`, `tickets`],
    [`Lunch in city`, `lunch`]
  ]);

  return (routePointOptions.length !== 0) ? `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">
    ${routePointOptions.map((option) => `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${optionId.get(option.optionName)}-1" type="checkbox" name="event-offer-${optionId.get(option.optionName)}"${option.isSelected ? ` checked` : ``}>
      <label class="event__offer-label" for="event-offer-${optionId.get(option.optionName)}-1">
        <span class="event__offer-title">${option.optionName}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">50</span>
      </label>
    </div>`).join(``)}
  </section>` : ``;
};

const createRoutePointPhotosTemplate = (routePointPhotos) => {
  return (routePointPhotos.length !== 0) ? `<div class="event__photos-container">
    <div class="event__photos-tape">
      ${routePointPhotos.map((photo) => `<img class="event__photo" src="${photo}" alt="Event photo"></img>`).join(``)}
    </div>
  </div>` : ``;
};

const createEditFormTemplate = (routePoint, isNewRoutePoint) => {
  const {type, destination, times, price, options, description, photos} = routePoint;

  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        ${type ? createRoutePointTypeSelectorTemplate(type) : createRoutePointTypeSelectorTemplate(_const_js__WEBPACK_IMPORTED_MODULE_3__["ROUTE_POINT_TYPES"][Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(0, _const_js__WEBPACK_IMPORTED_MODULE_3__["ROUTE_POINT_TYPES"].length - 1)])}

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type ? type : ``}
          </label>
          ${createRoutePointDestinationTemplate(destination)}
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${times ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.startTime).format(`DD/MM/YY hh:mm`) : ``}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${times ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.endTime).format(`DD/MM/YY hh:mm`) : ``}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price ? price : ``}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">${isNewRoutePoint ? `Cancel` : `Delete`}</button>
        ${isNewRoutePoint ? `` : `<button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>`}
      </header>
      ${getRoutePointDetailsTemplate(options, description, photos)}
    </form>
  </li>`;
};

class RoutePointEditForm extends _smart_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(routePoint, isNewRoutePoint) {
    super();
    this._data = RoutePointEditForm.parseRoutePointToData(routePoint);
    this._isNewRoutePoint = isNewRoutePoint;

    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._typeCheckboxClicktHandler = this._typeCheckboxClicktHandler.bind(this);
    this._destinationInputChangeHandler = this._destinationInputChangeHandler.bind(this);
    this._rollupClickHandler = this._rollupClickHandler.bind(this);
    this._deleteClickHandler = this._deleteClickHandler.bind(this);
    this._priceInputChangeHandler = this._priceInputChangeHandler.bind(this);

    this._setInnerHandlers();
  }

  reset(routePoint) {
    this.updateData(
        RoutePointEditForm.parseRoutePointToData(routePoint)
    );
  }

  getTemplate() {
    return createEditFormTemplate(this._data, this._isNewRoutePoint);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();

    const destinationInput = this.getElem().querySelector(`.event__input--destination`);
    const priceInput = this.getElem().querySelector(`.event__input--price`);

    if (_const_js__WEBPACK_IMPORTED_MODULE_3__["ROUTE_POINT_DESTINATIONS"].indexOf(destinationInput.value) === -1) {
      destinationInput.setCustomValidity(`Указать можно только назначения из списка`);
      return;
    } else {
      destinationInput.setCustomValidity(``);
    }

    if (priceInput.value !== `` && Number.isInteger(+priceInput.value)) {
      priceInput.setCustomValidity(``);
    } else {
      priceInput.setCustomValidity(`Укажите целое число`);
      return;
    }

    this._handlers.formSubmit(RoutePointEditForm.parseDataToRoutePoint(this._data));
  }

  _rollupClickHandler(evt) {
    evt.preventDefault();
    this._handlers.rollupClick();
  }

  _deleteClickHandler(evt) {
    evt.preventDefault();
    this._handlers.deleteClick(RoutePointEditForm.parseDataToRoutePoint(this._data));
  }

  setFormSubmitHandler(handler) {
    this._handlers.formSubmit = handler;
    this.getElem().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }

  setRollupClickHandler(handler) {
    this._handlers.rollupClick = handler;
    this.getElem().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._rollupClickHandler);
  }

  setDeleteClickHandler(handler) {
    this._handlers.deleteClick = handler;
    this.getElem().querySelector(`.event__reset-btn`).addEventListener(`click`, this._deleteClickHandler);
  }

  _typeCheckboxClicktHandler(evt) {
    evt.preventDefault();
    evt.target.closest(`.event__type-item`).querySelector(`input[type='radio']`).checked = true;

    const typeToggle = this.getElem().querySelector(`.event__type-toggle`);
    let type = this.getElem().querySelector(`.event__type-input:checked`).value;

    type = type[0].toUpperCase() + type.slice(1);

    typeToggle.checked = !typeToggle.checked;

    this.updateData({
      type,
      options: Object(_mock_route_point_js__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(type)
    });
  }

  _destinationInputChangeHandler(evt) {
    evt.preventDefault();

    if (_const_js__WEBPACK_IMPORTED_MODULE_3__["ROUTE_POINT_DESTINATIONS"].indexOf(evt.target.value) === -1) {
      evt.target.setCustomValidity(`Указать можно только назначения из списка`);
    } else {
      evt.target.setCustomValidity(``);

      this.updateData({
        destination: evt.target.value,
        description: Object(_mock_route_point_js__WEBPACK_IMPORTED_MODULE_4__["getDescription"])(),
        photos: Object(_mock_route_point_js__WEBPACK_IMPORTED_MODULE_4__["getPhotos"])()
      });
    }
  }

  _priceInputChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      price: Number(evt.target.value)
    });
  }

  _setInnerHandlers() {
    this.getElem().querySelector(`.event__type-list`).addEventListener(`click`, this._typeCheckboxClicktHandler);
    this.getElem().querySelector(`.event__input--destination`).addEventListener(`change`, this._destinationInputChangeHandler);
    this.getElem().querySelector(`.event__input--price`).addEventListener(`change`, this._priceInputChangeHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setFormSubmitHandler(this._handlers.formSubmit);
    this.setDeleteClickHandler(this._handlers.deleteClick);
  }

  static parseRoutePointToData(routePoint) {
    return Object.assign(
        {},
        routePoint,
        {}
    );
  }

  static parseDataToRoutePoint(data) {
    return Object.assign({}, data);
  }
}


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilterItemTemplate = (filterItem, currentFilter) => {
  const {type, name} = filterItem;

  return `<div class="trip-filters__filter">
    <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${type === currentFilter ? `checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
  </div>`;
};

const createFilterTemplate = (filters, currentFilter) => {
  const filterItemsTemplate = filters
    .map((filter) => createFilterItemTemplate(filter, currentFilter))
    .join(``);

  return `<form class="trip-filters" action="#" method="get">
    ${filterItemsTemplate}

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
};

class Filter extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filters, currentFilter) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilter;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFilterTemplate(this._filters, this._currentFilter);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._handlers.filterTypeChange(evt.target.value);
  }

  setFilterTypeChangeHandler(handler) {
    this._handlers.filterTypeChange = handler;
    this.getElem().addEventListener(`change`, this._filterTypeChangeHandler);
  }
}


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMenuTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;
};

class Menu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMenuTemplate();
  }
}


/***/ }),

/***/ "./src/view/no-route-point.js":
/*!************************************!*\
  !*** ./src/view/no-route-point.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoRoutePoint; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoRoutePointTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class NoRoutePoint extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoRoutePointTemplate();
  }
}


/***/ }),

/***/ "./src/view/price.js":
/*!***************************!*\
  !*** ./src/view/price.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoutePrice; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createRoutePriceTemplate = () => {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>`;
};

class RoutePrice extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createRoutePriceTemplate();
  }
}


/***/ }),

/***/ "./src/view/route-info.js":
/*!********************************!*\
  !*** ./src/view/route-info.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Route; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const getDestinationsString = (routePoints) => {
  const routeDestinations = routePoints.map((routePoint) => routePoint.destination);
  let uniqueDestinations = [];

  for (let destination of routeDestinations) {
    if (!uniqueDestinations.includes(destination)) {
      uniqueDestinations.push(destination);
    }
  }

  return (uniqueDestinations.length === 3) ? `${routeDestinations[0]} &mdash; ${routeDestinations[1]} &mdash; ${routeDestinations[2]}` : `${routeDestinations[0]} &mdash; ... &mdash; ${routeDestinations[routeDestinations.length - 1]}`;
};

const getDate = (routePoints) => {
  const isSameMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(routePoints[0].startTime).month() === dayjs__WEBPACK_IMPORTED_MODULE_0___default()(routePoints[routePoints.length - 1].endTime).month();

  return isSameMonth ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(routePoints[routePoints.length - 1].times.endTime).format(`DD`) : dayjs__WEBPACK_IMPORTED_MODULE_0___default()(routePoints[routePoints.length - 1].times.endTime).format(`MMM DD`);
};

const createRouteInfoTemplate = (routePoints) => {
  const isRoutePoints = (routePoints.length !== 0);

  routePoints = routePoints.slice().sort((a, b) => a.times.startTime - b.times.startTime);

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${isRoutePoints ? getDestinationsString(routePoints) : ``}</h1>

      <p class="trip-info__dates">${isRoutePoints ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(routePoints[0].times.startTime).format(`MMM DD`) : ``}&nbsp;&mdash;&nbsp;${isRoutePoints ? getDate(routePoints) : ``}</p>
    </div>
  </section>`;
};

class Route extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(routePoints) {
    super();
    this._routePoints = routePoints;
  }

  getTemplate() {
    return createRouteInfoTemplate(this._routePoints);
  }
}


/***/ }),

/***/ "./src/view/route-point-list.js":
/*!**************************************!*\
  !*** ./src/view/route-point-list.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoutePointList; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createRoutePointListTemplate = () => {
  return `<ul class="trip-events__list">
  </ul>`;
};

class RoutePointList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createRoutePointListTemplate();
  }
}


/***/ }),

/***/ "./src/view/route-point.js":
/*!*********************************!*\
  !*** ./src/view/route-point.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoutePoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const getDuration = (times) => {
  const duration = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.endTime).diff(times.startTime, `minute`);
  const durationDays = Math.floor(duration / 60 / 24);
  const durationHours = Math.floor((duration - durationDays * 24 * 60) / 60);
  const durationMinutes = duration - durationDays * 24 * 60 - durationHours * 60;
  let formattedDuration = ``;

  if (durationDays >= 1) {
    formattedDuration += `${durationDays}D `;
  }

  if (durationHours >= 1) {
    formattedDuration += `${durationHours}H `;
  }

  formattedDuration += `${durationMinutes}M`;

  return formattedDuration;
};

const createSelectedOptionsTemplate = (options) => {
  return (options.some((option) => option.isSelected)) ? `<ul class="event__selected-offers">
    ${options.filter((option) => option.isSelected).map((option) => `<li class="event__offer">
      <span class="event__offer-title">${option.optionName}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${option.optionPrice}</span>
    </li>`).join(``)}
  </ul>` : ``;
};

const createRoutePointTemplate = (routePoint) => {
  const {type, destination, options, times, price, isFavorite} = routePoint;

  const selectedOptionsTemplate = createSelectedOptionsTemplate(options);

  const favoriteClassName = isFavorite ? `event__favorite-btn event__favorite-btn--active` : `event__favorite-btn`;

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.startTime).format(`YYYY-MM-DD`)}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.startTime).format(`MMM DD`)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.startTime).format(`YYYY-MM-DDTHH:mm`)}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.startTime).format(`HH:mm`)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.endTime).format(`YYYY-MM-DDTHH:mm`)}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(times.endTime).format(`HH:mm`)}</time>
        </p>
        <p class="event__duration">${getDuration(times)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${selectedOptionsTemplate}
      <button class="${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

class RoutePoint extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(routePoint) {
    super();
    this._routePoint = routePoint;
    this._rollupClickHandler = this._rollupClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createRoutePointTemplate(this._routePoint);
  }

  _rollupClickHandler(evt) {
    evt.preventDefault();
    this._handlers.rollupClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._handlers.favoriteClick();
  }

  setRollupClickHandler(handler) {
    this._handlers.rollupClick = handler;
    this.getElem().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._rollupClickHandler);
  }

  setFavoriteClickHandler(handler) {
    this._handlers.favoriteClick = handler;
    this.getElem().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class Smart extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  updateData(update, dataUpdate) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
        {},
        this._data,
        update
    );

    if (dataUpdate) {
      return;
    }

    this.updateElement();
  }

  updateElement() {
    let prevElement = this.getElem();
    const parent = prevElement.parentElement;
    this.removeElem();

    const newElement = this.getElem();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  restoreHandlers() {
    throw new Error(`Abstract method not implemented: restoreHandlers`);
  }
}


/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortingForm; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createSortingFormTemplate = (currentSortingType) => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_0__["SortingType"].DAY}" type="radio" name="trip-sort" value="sort-day" ${currentSortingType === _const_js__WEBPACK_IMPORTED_MODULE_0__["SortingType"].DAY ? `checked` : ``}>
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_0__["SortingType"].TIME}" type="radio" name="trip-sort" value="sort-time" ${currentSortingType === _const_js__WEBPACK_IMPORTED_MODULE_0__["SortingType"].TIME ? `checked` : ``}>
      <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_0__["SortingType"].PRICE}" type="radio" name="trip-sort" value="sort-price" ${currentSortingType === _const_js__WEBPACK_IMPORTED_MODULE_0__["SortingType"].PRICE ? `checked` : ``}>
      <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`;
};

class SortingForm extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(currentSortingType) {
    super();

    this._currentSortingType = currentSortingType;

    this._sortingTypeChangeHandler = this._sortingTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortingFormTemplate(this._currentSortingType);
  }

  _sortingTypeChangeHandler(evt) {
    evt.preventDefault();

    this._handlers.sortingTypeChange(evt.target.closest(`.trip-sort__item`).querySelector(`input`).dataset.sortType);
  }

  setSortingTypeChangeHandler(handler) {
    this._handlers.sortingTypeChange = handler;
    this.getElem().addEventListener(`change`, this._sortingTypeChangeHandler);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map