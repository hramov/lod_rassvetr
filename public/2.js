(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VCarousel/VCarousel.sass":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vuetify/src/components/VCarousel/VCarousel.sass ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.v-carousel__controls {\n  align-items: center;\n  background: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  list-style-type: none;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n.v-carousel__controls > .v-item-group {\n  flex: 0 1 auto;\n}\n.v-carousel__controls__item {\n  margin: 0 8px;\n}\n.v-carousel__controls__item .v-icon {\n  opacity: 0.5;\n}\n.v-carousel__controls__item--active .v-icon {\n  opacity: 1;\n  vertical-align: middle;\n}\n.v-carousel__controls__item:hover {\n  background: none;\n}\n.v-carousel__controls__item:hover .v-icon {\n  opacity: 0.8;\n}\n\n.v-carousel__progress {\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.v-carousel .v-window-item {\n  display: block;\n  height: inherit;\n  text-decoration: none;\n}\n\n.v-carousel--hide-delimiter-background .v-carousel__controls {\n  background: transparent;\n}\n\n.v-carousel--vertical-delimiters .v-carousel__controls {\n  height: 100% !important;\n  width: 50px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VWindow/VWindow.sass":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vuetify/src/components/VWindow/VWindow.sass ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-window__container {\n  height: inherit;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-window__container--is-active {\n  overflow: hidden;\n}\n.v-window__prev, .v-window__next {\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n  position: absolute;\n  margin: 0 16px;\n  top: calc(50% - 20px);\n  z-index: 1;\n}\n.v-window__prev .v-btn:hover, .v-window__next .v-btn:hover {\n  background: none;\n}\n.v-application--is-ltr .v-window__prev {\n  left: 0;\n}\n.v-application--is-rtl .v-window__prev {\n  right: 0;\n}\n.v-application--is-ltr .v-window__next {\n  right: 0;\n}\n.v-application--is-rtl .v-window__next {\n  left: 0;\n}\n.v-window--show-arrows-on-hover {\n  overflow: hidden;\n}\n.v-window--show-arrows-on-hover .v-window__next,\n.v-window--show-arrows-on-hover .v-window__prev {\n  transition: 0.2s transform cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev {\n  transform: translateX(-200%);\n}\n.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev {\n  transform: translateX(200%);\n}\n.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next {\n  transform: translateX(200%);\n}\n.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next {\n  transform: translateX(-200%);\n}\n.v-window--show-arrows-on-hover:hover .v-window__next,\n.v-window--show-arrows-on-hover:hover .v-window__prev {\n  transform: translateX(0);\n}\n.v-window-x-transition-enter-active, .v-window-x-transition-leave-active, .v-window-x-reverse-transition-enter-active, .v-window-x-reverse-transition-leave-active, .v-window-y-transition-enter-active, .v-window-y-transition-leave-active, .v-window-y-reverse-transition-enter-active, .v-window-y-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-window-x-transition-leave, .v-window-x-transition-leave-to, .v-window-x-reverse-transition-leave, .v-window-x-reverse-transition-leave-to, .v-window-y-transition-leave, .v-window-y-transition-leave-to, .v-window-y-reverse-transition-leave, .v-window-y-reverse-transition-leave-to {\n  position: absolute !important;\n  top: 0;\n  width: 100%;\n}\n.v-window-x-transition-enter {\n  transform: translateX(100%);\n}\n.v-window-x-transition-leave-to {\n  transform: translateX(-100%);\n}\n.v-window-x-reverse-transition-enter {\n  transform: translateX(-100%);\n}\n.v-window-x-reverse-transition-leave-to {\n  transform: translateX(100%);\n}\n.v-window-y-transition-enter {\n  transform: translateY(100%);\n}\n.v-window-y-transition-leave-to {\n  transform: translateY(-100%);\n}\n.v-window-y-reverse-transition-enter {\n  transform: translateY(-100%);\n}\n.v-window-y-reverse-transition-leave-to {\n  transform: translateY(100%);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCarousel/VCarousel.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VCarousel/VCarousel.sass */ "./node_modules/vuetify/src/components/VCarousel/VCarousel.sass");
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VWindow/VWindow */ "./node_modules/vuetify/lib/components/VWindow/VWindow.js");
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var _mixins_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/button-group */ "./node_modules/vuetify/lib/mixins/button-group/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Styles
 // Extensions

 // Components



 // Mixins
// TODO: Move this into core components v2.0

 // Utilities



/* harmony default export */ __webpack_exports__["default"] = (_VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  name: 'v-carousel',
  props: {
    continuous: {
      type: Boolean,
      default: true
    },
    cycle: Boolean,
    delimiterIcon: {
      type: String,
      default: '$delimiter'
    },
    height: {
      type: [Number, String],
      default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
      type: [Number, String],
      default: 6000,
      validator: value => value > 0
    },
    mandatory: {
      type: Boolean,
      default: true
    },
    progress: Boolean,
    progressColor: String,
    showArrows: {
      type: Boolean,
      default: true
    },
    verticalDelimiters: {
      type: String,
      default: undefined
    }
  },

  data() {
    return {
      internalHeight: this.height,
      slideTimeout: undefined
    };
  },

  computed: {
    classes() {
      return { ..._VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this),
        'v-carousel': true,
        'v-carousel--hide-delimiter-background': this.hideDelimiterBackground,
        'v-carousel--vertical-delimiters': this.isVertical
      };
    },

    isDark() {
      return this.dark || !this.light;
    },

    isVertical() {
      return this.verticalDelimiters != null;
    }

  },
  watch: {
    internalValue: 'restartTimeout',
    interval: 'restartTimeout',

    height(val, oldVal) {
      if (val === oldVal || !val) return;
      this.internalHeight = val;
    },

    cycle(val) {
      if (val) {
        this.restartTimeout();
      } else {
        clearTimeout(this.slideTimeout);
        this.slideTimeout = undefined;
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('hide-controls')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_7__["breaking"])('hide-controls', ':show-arrows="false"', this);
    }
  },

  mounted() {
    this.startTimeout();
  },

  methods: {
    genControlIcons() {
      if (this.isVertical) return null;
      return _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genControlIcons.call(this);
    },

    genDelimiters() {
      return this.$createElement('div', {
        staticClass: 'v-carousel__controls',
        style: {
          left: this.verticalDelimiters === 'left' && this.isVertical ? 0 : 'auto',
          right: this.verticalDelimiters === 'right' ? 0 : 'auto'
        }
      }, [this.genItems()]);
    },

    genItems() {
      const length = this.items.length;
      const children = [];

      for (let i = 0; i < length; i++) {
        const child = this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          staticClass: 'v-carousel__controls__item',
          attrs: {
            'aria-label': this.$vuetify.lang.t('$vuetify.carousel.ariaLabel.delimiter', i + 1, length)
          },
          props: {
            icon: true,
            small: true,
            value: this.getValue(this.items[i], i)
          }
        }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          props: {
            size: 18
          }
        }, this.delimiterIcon)]);
        children.push(child);
      }

      return this.$createElement(_mixins_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
        props: {
          value: this.internalValue,
          mandatory: this.mandatory
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, children);
    },

    genProgress() {
      return this.$createElement(_VProgressLinear__WEBPACK_IMPORTED_MODULE_4__["default"], {
        staticClass: 'v-carousel__progress',
        props: {
          color: this.progressColor,
          value: (this.internalIndex + 1) / this.items.length * 100
        }
      });
    },

    restartTimeout() {
      this.slideTimeout && clearTimeout(this.slideTimeout);
      this.slideTimeout = undefined;
      window.requestAnimationFrame(this.startTimeout);
    },

    startTimeout() {
      if (!this.cycle) return;
      this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6000);
    }

  },

  render(h) {
    const render = _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__["default"].options.render.call(this, h);
    render.data.style = `height: ${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["convertToUnit"])(this.height)};`;
    /* istanbul ignore else */

    if (!this.hideDelimiters) {
      render.children.push(this.genDelimiters());
    }
    /* istanbul ignore else */


    if (this.progress || this.progressColor) {
      render.children.push(this.genProgress());
    }

    return render;
  }

}));
//# sourceMappingURL=VCarousel.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VWindow/VWindowItem */ "./node_modules/vuetify/lib/components/VWindow/VWindowItem.js");
/* harmony import */ var _VImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/routable */ "./node_modules/vuetify/lib/mixins/routable/index.js");
// Extensions
 // Components

 // Utilities



 // Types

const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend({
  name: 'v-carousel-item',
  inheritAttrs: false,
  methods: {
    genDefaultSlot() {
      return [this.$createElement(_VImg__WEBPACK_IMPORTED_MODULE_1__["VImg"], {
        staticClass: 'v-carousel__item',
        props: { ...this.$attrs,
          height: this.windowGroup.internalHeight
        },
        on: this.$listeners,
        scopedSlots: {
          placeholder: this.$scopedSlots.placeholder
        }
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["getSlot"])(this))];
    },

    genWindowItem() {
      const {
        tag,
        data
      } = this.generateRouteLink();
      data.staticClass = 'v-window-item';
      data.directives.push({
        name: 'show',
        value: this.isActive
      });
      return this.$createElement(tag, data, this.genDefaultSlot());
    }

  }
}));
//# sourceMappingURL=VCarouselItem.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCarousel/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCarousel/index.js ***!
  \****************************************************************/
/*! exports provided: VCarousel, VCarouselItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VCarousel */ "./node_modules/vuetify/lib/components/VCarousel/VCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCarousel", function() { return _VCarousel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _VCarouselItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VCarouselItem */ "./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCarouselItem", function() { return _VCarouselItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  $_vuetify_subcomponents: {
    VCarousel: _VCarousel__WEBPACK_IMPORTED_MODULE_0__["default"],
    VCarouselItem: _VCarouselItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VWindow/VWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VWindow/VWindow.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VWindow/VWindow.sass */ "./node_modules/vuetify/src/components/VWindow/VWindow.sass");
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/touch */ "./node_modules/vuetify/lib/directives/touch/index.js");
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VItemGroup/VItemGroup */ "./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js");
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__["BaseItemGroup"].extend({
  name: 'v-window',

  provide() {
    return {
      windowGroup: this
    };
  },

  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: {
      type: Boolean,
      default: undefined
    },
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },

  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },

  computed: {
    isActive() {
      return this.transitionCount > 0;
    },

    classes() {
      return { ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__["BaseItemGroup"].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },

    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.$vuetify.rtl && axis === 'x' ? !this.internalReverse : this.internalReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },

    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },

    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },

    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },

    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },

    internalReverse() {
      return this.reverse ? !this.isReverse : this.isReverse;
    }

  },
  watch: {
    internalIndex: 'updateReverse'
  },

  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },

  methods: {
    genContainer() {
      const children = [this.$slots.default];

      if (this.showArrows) {
        children.push(this.genControlIcons());
      }

      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },

    genIcon(direction, icon, fn) {
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, [this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: {
          icon: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
        },
        on: {
          click: () => {
            this.changedByDelimiters = true;
            fn();
          }
        }
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: {
          large: true
        }
      }, icon)])]);
    },

    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }

      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }

      return icons;
    },

    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },

    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },

    next() {
      this.isReverse = this.$vuetify.rtl;
      /* istanbul ignore if */

      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },

    prev() {
      this.isReverse = !this.$vuetify.rtl;
      /* istanbul ignore if */

      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },

    updateReverse(val, oldVal) {
      if (this.changedByDelimiters) {
        this.changedByDelimiters = false;
        return;
      }

      this.isReverse = val < oldVal;
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };

    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }

    return h('div', data, [this.genContainer()]);
  }

}));
//# sourceMappingURL=VWindow.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VWindow/VWindowItem.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VWindow/VWindowItem.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/bootable */ "./node_modules/vuetify/lib/mixins/bootable/index.js");
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/groupable */ "./node_modules/vuetify/lib/mixins/groupable/index.js");
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/touch */ "./node_modules/vuetify/lib/directives/touch/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__["default"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_0__["default"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_1__["factory"])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },

  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },

  computed: {
    classes() {
      return this.groupClasses;
    },

    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }

      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }

  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },

    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.


      this.inTransition = false;

      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },

    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.


      this.inTransition = true;

      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["convertToUnit"])(this.windowGroup.$el.clientHeight);
      }

      this.windowGroup.transitionCount++;
    },

    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }

      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.


        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["convertToUnit"])(el.clientHeight);
      });
    }

  },

  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }

}));
//# sourceMappingURL=VWindowItem.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/button-group/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/button-group/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/VItemGroup/VItemGroup */ "./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js");
// Extensions

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (_components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__["BaseItemGroup"].extend({
  name: 'button-group',

  provide() {
    return {
      btnToggle: this
    };
  },

  computed: {
    classes() {
      return _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__["BaseItemGroup"].options.computed.classes.call(this);
    }

  },
  methods: {
    // Isn't being passed down through types
    genData: _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__["BaseItemGroup"].options.methods.genData
  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VCarousel/VCarousel.sass":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VCarousel/VCarousel.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--8-2!../../../../sass-loader/dist/cjs.js??ref--8-3!./VCarousel.sass */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VCarousel/VCarousel.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VWindow/VWindow.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VWindow/VWindow.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--8-2!../../../../sass-loader/dist/cjs.js??ref--8-3!./VWindow.sass */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VWindow/VWindow.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);