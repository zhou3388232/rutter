
window.addEventListener = window.addEventListener || function (e, f) { window.attachEvent('on' + e, f); };
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
if ( ! Object.create ) {
  Object.create = function(proto, props) {
    if (typeof props !== "undefined") {
      throw "The multiple-argument version of Object.create is not provided by this browser and cannot be shimmed.";
    }
    function ctor() { }

    ctor.prototype = proto;
    return new ctor();
  };
}
if ( ! Array.prototype.filter ) {
  Array.prototype.filter = function(fun/*, thisArg*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}
if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    A = new Array(len);
    k = 0;
    while (k < len) {

      var kValue, mappedValue;
      if (k in O) {
        kValue = O[k];
        mappedValue = callback.call(T, kValue, k, O);
        A[k] = mappedValue;
      }
      k++;
    }
    return A;
  };
}
/*! iCheck v1.0.1 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
if ( 'function' != typeof(jQuery.fn.iCheck) ) {
  !function(a){function b(a,b,e){var f=a[0],g=/er/.test(e)?p:/bl/.test(e)?n:l,h=e==q?{checked:f[l],disabled:f[n],indeterminate:"true"==a.attr(p)||"false"==a.attr(o)}:f[g];if(/^(ch|di|in)/.test(e)&&!h)c(a,g);else if(/^(un|en|de)/.test(e)&&h)d(a,g);else if(e==q)for(g in h)h[g]?c(a,g,!0):d(a,g,!0);else b&&"toggle"!=e||(b||a[u]("ifClicked"),h?f[r]!==k&&d(a,g):c(a,g))}function c(b,c,e){var q=b[0],u=b.parent(),v=c==l,x=c==p,y=c==n,z=x?o:v?m:"enabled",A=f(b,z+g(q[r])),B=f(b,c+g(q[r]));if(!0!==q[c]){if(!e&&c==l&&q[r]==k&&q.name){var C=b.closest("form"),D='input[name="'+q.name+'"]',D=C.length?C.find(D):a(D);D.each(function(){this!==q&&a(this).data(i)&&d(a(this),c)})}x?(q[c]=!0,q[l]&&d(b,l,"force")):(e||(q[c]=!0),v&&q[p]&&d(b,p,!1)),h(b,v,c,e)}q[n]&&f(b,w,!0)&&u.find("."+j).css(w,"default"),u[s](B||f(b,c)||""),y?u.attr("aria-disabled","true"):u.attr("aria-checked",x?"mixed":"true"),u[t](A||f(b,z)||"")}function d(a,b,c){var d=a[0],e=a.parent(),i=b==l,k=b==p,q=b==n,u=k?o:i?m:"enabled",v=f(a,u+g(d[r])),x=f(a,b+g(d[r]));!1!==d[b]&&((k||!c||"force"==c)&&(d[b]=!1),h(a,i,u,c)),!d[n]&&f(a,w,!0)&&e.find("."+j).css(w,"pointer"),e[t](x||f(a,b)||""),q?e.attr("aria-disabled","false"):e.attr("aria-checked","false"),e[s](v||f(a,u)||"")}function e(b,c){b.data(i)&&(b.parent().html(b.attr("style",b.data(i).s||"")),c&&b[u](c),b.off(".i").unwrap(),a(v+'[for="'+b[0].id+'"]').add(b.closest(v)).off(".i"))}function f(a,b,c){return a.data(i)?a.data(i).o[b+(c?"":"Class")]:void 0}function g(a){return a.charAt(0).toUpperCase()+a.slice(1)}function h(a,b,c,d){d||(b&&a[u]("ifToggled"),a[u]("ifChanged")[u]("if"+g(c)))}var i="iCheck",j=i+"-helper",k="radio",l="checked",m="un"+l,n="disabled",o="determinate",p="in"+o,q="update",r="type",s="addClass",t="removeClass",u="trigger",v="label",w="cursor",x=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);a.fn[i]=function(f,g){var h='input[type="checkbox"], input[type="'+k+'"]',m=a(),o=function(b){b.each(function(){var b=a(this);m=b.is(h)?m.add(b):m.add(b.find(h))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(f))return f=f.toLowerCase(),o(this),m.each(function(){var c=a(this);"destroy"==f?e(c,"ifDestroyed"):b(c,!0,f),a.isFunction(g)&&g()});if("object"!=typeof f&&f)return this;var w=a.extend({checkedClass:l,disabledClass:n,indeterminateClass:p,labelHover:!0,aria:!1},f),y=w.handle,z=w.hoverClass||"hover",A=w.focusClass||"focus",B=w.activeClass||"active",C=!!w.labelHover,D=w.labelHoverClass||"hover",E=0|(""+w.increaseArea).replace("%","");return("checkbox"==y||y==k)&&(h='input[type="'+y+'"]'),-50>E&&(E=-50),o(this),m.each(function(){var f=a(this);e(f);var g=this,h=g.id,m=-E+"%",o=100+2*E+"%",o={position:"absolute",top:m,left:m,display:"block",width:o,height:o,margin:0,padding:0,background:"#fff",border:0,opacity:0},m=x?{position:"absolute",visibility:"hidden"}:E?o:{position:"absolute",opacity:0},p="checkbox"==g[r]?w.checkboxClass||"icheckbox":w.radioClass||"i"+k,y=a(v+'[for="'+h+'"]').add(f.closest(v)),F=!!w.aria,G=i+"-"+Math.random().toString(36).substr(2,6),H='<div class="'+p+'" '+(F?'role="'+g[r]+'" ':"");F&&y.each(function(){H+='aria-labelledby="',this.id?H+=this.id:(this.id=G,H+=G),H+='"'}),H=f.wrap(H+"/>")[u]("ifCreated").parent().append(w.insert),o=a('<ins class="'+j+'"/>').css(o).appendTo(H),f.data(i,{o:w,s:f.attr("style")}).css(m),w.inheritClass&&H[s](g.className||""),w.inheritID&&h&&H.attr("id",i+"-"+h),"static"==H.css("position")&&H.css("position","relative"),b(f,!0,q),y.length&&y.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i",function(c){var d=c[r],e=a(this);if(!g[n]){if("click"==d){if(a(c.target).is("a"))return;b(f,!1,!0)}else C&&(/ut|nd/.test(d)?(H[t](z),e[t](D)):(H[s](z),e[s](D)));if(!x)return!1;c.stopPropagation()}}),f.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(a){var b=a[r];return a=a.keyCode,"click"==b?!1:"keydown"==b&&32==a?(g[r]==k&&g[l]||(g[l]?d(f,l):c(f,l)),!1):("keyup"==b&&g[r]==k?!g[l]&&c(f,l):/us|ur/.test(b)&&H["blur"==b?t:s](A),void 0)}),o.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(a){var c=a[r],d=/wn|up/.test(c)?B:z;if(!g[n]){if("click"==c?b(f,!1,!0):(/wn|er|in/.test(c)?H[s](d):H[t](d+" "+B),y.length&&C&&d==z&&y[/ut|nd/.test(c)?t:s](D)),!x)return!1;a.stopPropagation()}})})}}(window.jQuery||window.Zepto);
}
if ( 'function' != typeof(jQuery.fn.selecter) ) {
  !function(a,b){"use strict";function c(b){b=a.extend({},x,b||{}),null===w&&(w=a("body"));for(var c=a(this),e=0,f=c.length;f>e;e++)d(c.eq(e),b);return c}function d(b,c){if(!b.hasClass("selecter-element")){c=a.extend({},c,b.data("selecter-options")),c.external&&(c.links=!0);var d=b.find("option, optgroup"),g=d.filter("option"),h=g.filter(":selected"),n=""!==c.label?-1:g.index(h),p=c.links?"nav":"div";c.tabIndex=b[0].tabIndex,b[0].tabIndex=-1,c.multiple=b.prop("multiple"),c.disabled=b.is(":disabled");var q="<"+p+' class="selecter '+c.customClass;v?q+=" mobile":c.cover&&(q+=" cover"),q+=c.multiple?" multiple":" closed",c.disabled&&(q+=" disabled"),q+='" tabindex="'+c.tabIndex+'">',c.multiple||(q+='<span class="selecter-selected'+(""!==c.label?" placeholder":"")+'">',q+=a("<span></span").text(r(""!==c.label?c.label:h.text(),c.trim)).html(),q+="</span>"),q+='<div class="selecter-options">',q+="</div>",q+="</"+p+">",b.addClass("selecter-element").after(q);var s=b.next(".selecter"),u=a.extend({$select:b,$allOptions:d,$options:g,$selecter:s,$selected:s.find(".selecter-selected"),$itemsWrapper:s.find(".selecter-options"),index:-1,guid:t++},c);e(u),o(n,u),void 0!==a.fn.scroller&&u.$itemsWrapper.scroller(),u.$selecter.on("touchstart.selecter click.selecter",".selecter-selected",u,f).on("click.selecter",".selecter-item",u,j).on("close.selecter",u,i).data("selecter",u),u.$select.on("change.selecter",u,k),v||(u.$selecter.on("focus.selecter",u,l).on("blur.selecter",u,m),u.$select.on("focus.selecter",u,function(a){a.data.$selecter.trigger("focus")}))}}function e(b){for(var c="",d=b.links?"a":"span",e=0,f=0,g=b.$allOptions.length;g>f;f++){var h=b.$allOptions.eq(f);if("OPTGROUP"===h[0].tagName)c+='<span class="selecter-group',h.is(":disabled")&&(c+=" disabled"),c+='">'+h.attr("label")+"</span>";else{var i=h.val();h.attr("value")||h.attr("value",i),c+="<"+d+' class="selecter-item',h.is(":selected")&&""===b.label&&(c+=" selected"),h.is(":disabled")&&(c+=" disabled"),c+='" ',c+=b.links?'href="'+i+'"':'data-value="'+i+'"',c+=">"+a("<span></span>").text(r(h.text(),b.trim)).html()+"</"+d+">",e++}}b.$itemsWrapper.html(c),b.$items=b.$selecter.find(".selecter-item")}function f(c){c.preventDefault(),c.stopPropagation();var d=c.data;if(!d.$select.is(":disabled"))if(a(".selecter").not(d.$selecter).trigger("close.selecter",[d]),v){var e=d.$select[0];if(b.document.createEvent){var f=b.document.createEvent("MouseEvents");f.initMouseEvent("mousedown",!1,!0,b,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(f)}else e.fireEvent&&e.fireEvent("onmousedown")}else d.$selecter.hasClass("closed")?g(c):d.$selecter.hasClass("open")&&i(c)}function g(b){b.preventDefault(),b.stopPropagation();var c=b.data;if(!c.$selecter.hasClass("open")){var d=c.$selecter.offset(),e=w.outerHeight(),f=c.$itemsWrapper.outerHeight(!0),g=c.index>=0?c.$items.eq(c.index).position():{left:0,top:0};d.top+f>e&&c.$selecter.addClass("bottom"),c.$itemsWrapper.show(),c.$selecter.removeClass("closed").addClass("open"),w.on("click.selecter-"+c.guid,":not(.selecter-options)",c,h),void 0!==a.fn.scroller?c.$itemsWrapper.scroller("scroll",c.$itemsWrapper.find(".scroller-content").scrollTop()+g.top,0).scroller("reset"):c.$itemsWrapper.scrollTop(c.$itemsWrapper.scrollTop()+g.top)}}function h(b){b.preventDefault(),b.stopPropagation(),0===a(b.currentTarget).parents(".selecter").length&&i(b)}function i(a){a.preventDefault(),a.stopPropagation();var b=a.data;b.$selecter.hasClass("open")&&(b.$itemsWrapper.hide(),b.$selecter.removeClass("open bottom").addClass("closed"),w.off(".selecter-"+b.guid))}function j(b){b.preventDefault(),b.stopPropagation();var c=a(this),d=b.data;if(!d.$select.is(":disabled")){if(d.$itemsWrapper.is(":visible")){var e=d.$items.index(c);o(e,d),p(d)}d.multiple||i(b)}}function k(b,c){var d=a(this),e=b.data;if(!c&&!e.multiple){var f=e.$options.index(e.$options.filter("[value='"+s(d.val())+"']"));o(f,e),p(e)}}function l(b){b.preventDefault(),b.stopPropagation();var c=b.data;c.$select.is(":disabled")||c.multiple||(c.$selecter.addClass("focus").on("keydown.selecter"+c.guid,c,n),a(".selecter").not(c.$selecter).trigger("close.selecter",[c]))}function m(b){b.preventDefault(),b.stopPropagation();var c=b.data;c.$selecter.removeClass("focus").off("keydown.selecter"+c.guid+" keyup.selecter"+c.guid),a(".selecter").not(c.$selecter).trigger("close.selecter",[c])}function n(b){var c=b.data;if(13===b.keyCode)c.$selecter.hasClass("open")&&(i(b),o(c.index,c)),p(c);else if(!(9===b.keyCode||b.metaKey||b.altKey||b.ctrlKey||b.shiftKey)){b.preventDefault(),b.stopPropagation();var d=c.$items.length-1,e=c.index<0?0:c.index;if(a.inArray(b.keyCode,u?[38,40,37,39]:[38,40])>-1)e+=38===b.keyCode||u&&37===b.keyCode?-1:1,0>e&&(e=0),e>d&&(e=d);else{var f,g,h=String.fromCharCode(b.keyCode).toUpperCase();for(g=c.index+1;d>=g;g++)if(f=c.$options.eq(g).text().charAt(0).toUpperCase(),f===h){e=g;break}if(0>e)for(g=0;d>=g;g++)if(f=c.$options.eq(g).text().charAt(0).toUpperCase(),f===h){e=g;break}}e>=0&&o(e,c)}}function o(a,b){var c=b.$items.eq(a),d=c.hasClass("selected"),e=c.hasClass("disabled");if(!e){if(-1===a&&""!==b.label)b.$selected.html(b.label);else if(d)b.multiple&&(b.$options.eq(a).prop("selected",null),c.removeClass("selected"));else{{var f=c.html();c.data("value")}b.multiple?b.$options.eq(a).prop("selected",!0):(b.$selected.html(f).removeClass("placeholder"),b.$items.filter(".selected").removeClass("selected"),b.$select[0].selectedIndex=a),c.addClass("selected")}(!d||b.multiple)&&(b.index=a)}}function p(a){a.links?q(a):(a.callback.call(a.$selecter,a.$select.val(),a.index),a.$select.trigger("change",[!0]))}function q(a){var c=a.$select.val();a.external?b.open(c):b.location.href=c}function r(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}function s(a){return a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1")}var t=0,u=b.navigator.userAgent.toLowerCase().indexOf("firefox")>-1,v=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(b.navigator.userAgent||b.navigator.vendor||b.opera),w=null,x={callback:a.noop,cover:!1,customClass:"",label:"",external:!1,links:!1,trim:0},y={defaults:function(b){return x=a.extend(x,b||{}),a(this)},disable:function(b){return a(this).each(function(c,d){var e=a(d).next(".selecter").data("selecter");if(e)if("undefined"!=typeof b){var f=e.$items.index(e.$items.filter("[data-value="+b+"]"));e.$items.eq(f).addClass("disabled"),e.$options.eq(f).prop("disabled",!0)}else e.$selecter.hasClass("open")&&e.$selecter.find(".selecter-selected").trigger("click.selecter"),e.$selecter.addClass("disabled"),e.$select.prop("disabled",!0)})},enable:function(b){return a(this).each(function(c,d){var e=a(d).next(".selecter").data("selecter");if(e)if("undefined"!=typeof b){var f=e.$items.index(e.$items.filter("[data-value="+b+"]"));e.$items.eq(f).removeClass("disabled"),e.$options.eq(f).prop("disabled",!1)}else e.$selecter.removeClass("disabled"),e.$select.prop("disabled",!1)})},destroy:function(){return a(this).each(function(b,c){var d=a(c).next(".selecter").data("selecter");d&&(d.$selecter.hasClass("open")&&d.$selecter.find(".selecter-selected").trigger("click.selecter"),void 0!==a.fn.scroller&&d.$selecter.find(".selecter-options").scroller("destroy"),d.$select[0].tabIndex=d.tabIndex,d.$select.off(".selecter").removeClass("selecter-element").show(),d.$selecter.off(".selecter").remove())})},refresh:function(){return a(this).each(function(b,c){var d=a(c).next(".selecter").data("selecter");if(d){var f=d.index;d.$allOptions=d.$select.find("option, optgroup"),d.$options=d.$allOptions.filter("option"),d.index=-1,f=d.$options.index(d.$options.filter(":selected")),e(d),o(f,d)}})}};a.fn.selecter=function(a){return y[a]?y[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?this:c.apply(this,arguments)},a.selecter=function(a){"defaults"===a&&y.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery,window);
}
if ( 'function' != typeof(jQuery.fn.stepper) ) {
  !function(a){"use strict";function b(b){b=a.extend({},k,b||{});for(var d=a(this),e=0,f=d.length;f>e;e++)c(d.eq(e),b);return d}function c(b,c){if(!b.hasClass("stepper-input")){c=a.extend({},c,b.data("stepper-options"));var e=parseFloat(b.attr("min")),f=parseFloat(b.attr("max")),g=parseFloat(b.attr("step"))||1;b.addClass("stepper-input").wrap('<div class="stepper '+c.customClass+'" />').after('<span class="stepper-arrow up">'+c.labels.up+'</span><span class="stepper-arrow down">'+c.labels.down+"</span>");var h=b.parent(".stepper"),j=a.extend({$stepper:h,$input:b,$arrow:h.find(".stepper-arrow"),min:void 0===typeof e||isNaN(e)?!1:e,max:void 0===typeof f||isNaN(f)?!1:f,step:void 0===typeof g||isNaN(g)?1:g,timer:null},c);j.digits=i(j.step),b.is(":disabled")&&h.addClass("disabled"),h.on("touchstart.stepper mousedown.stepper",".stepper-arrow",j,d).data("stepper",j)}}function d(b){b.preventDefault(),b.stopPropagation(),e(b);var c=b.data;if(!c.$input.is(":disabled")&&!c.$stepper.hasClass("disabled")){var d=a(b.target).hasClass("up")?c.step:-c.step;c.timer=g(c.timer,125,function(){f(c,d,!1)}),f(c,d),a("body").on("touchend.stepper mouseup.stepper",c,e)}}function e(b){b.preventDefault(),b.stopPropagation();var c=b.data;h(c.timer),a("body").off(".stepper")}function f(a,b){var c=parseFloat(a.$input.val()),d=b;void 0===typeof c||isNaN(c)?d=a.min!==!1?a.min:0:a.min!==!1&&c<a.min?d=a.min:d+=c;var e=(d-a.min)%a.step;0!==e&&(d-=e),a.min!==!1&&d<a.min&&(d=a.min),a.max!==!1&&d>a.max&&(d-=a.step),d!==c&&(d=j(d,a.digits),a.$input.val(d).trigger("change"))}function g(a,b,c){return h(a),setInterval(c,b)}function h(a){a&&(clearInterval(a),a=null)}function i(a){var b=String(a);return b.indexOf(".")>-1?b.length-b.indexOf(".")-1:0}function j(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}var k={customClass:"",labels:{up:"Up",down:"Down"}},l={defaults:function(b){return k=a.extend(k,b||{}),a(this)},destroy:function(){return a(this).each(function(){var b=a(this).data("stepper");b&&(b.$stepper.off(".stepper").find(".stepper-arrow").remove(),b.$input.unwrap().removeClass("stepper-input"))})},disable:function(){return a(this).each(function(){var b=a(this).data("stepper");b&&(b.$input.attr("disabled","disabled"),b.$stepper.addClass("disabled"))})},enable:function(){return a(this).each(function(){var b=a(this).data("stepper");b&&(b.$input.attr("disabled",null),b.$stepper.removeClass("disabled"))})}};a.fn.stepper=function(a){return l[a]?l[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?this:b.apply(this,arguments)},a.stepper=function(a){"defaults"===a&&l.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery,this);
}/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice;this.listeners=this.listeners||{},a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")});var f=e.filter("[aria-selected=true]");f.length>0?f.first().trigger("mouseenter"):e.first().trigger("mouseenter")})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&d.setClasses()}),b.on("unselect",function(){b.isOpen()&&d.setClasses()}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-d.$results.scrollTop()+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){
var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},l,j),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&""!==a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");if(void 0!==f&&(this.createTag=f),b.call(this,c,d),a.isArray(e))for(var g=0;g<e.length;g++){var h=e[g],i=this._normalizeItem(h),j=this.option(i);this.$element.append(j)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(a,b,c){function d(a){e.trigger("select",{data:a})}var e=this;b.term=b.term||"";var f=this.tokenizer(b,this.options,d);f.term!==b.term&&(this.$search.length&&(this.$search.val(f.term),this.$search.focus()),b.term=f.term),a.call(this,b,c)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=(this.$container.position(),this.$container.offset());f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom};if("static"!==this.$dropdownParent[0].style.position){var m=this.$dropdownParent.offset();l.top-=m.top,l.left-=m.left}c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(){d._handleSelectOnClose()})},a.prototype._handleSelectOnClose=function(){var a=this.getHighlightedResults();if(!(a.length<1)){var b=a.data("data");null!=b.element&&b.element.selected||null==b.element&&b.selected||this.trigger("select",{data:b})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend({},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this._sync=c.bind(this._syncAttributes,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._sync);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._sync)}),this._observer.observe(this.$element[0],{attributes:!0,subtree:!1})):this.$element[0].addEventListener&&this.$element[0].addEventListener("DOMAttrModified",b._sync,!1)},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._sync),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&this.$element[0].removeEventListener("DOMAttrModified",this._sync,!1),this._sync=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d;return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2.");var e=Array.prototype.slice.call(arguments,1);d=c[b].apply(c,e)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});(function (api, $, _) {
  api.Control.prototype.onChangeActive = function ( active, args ) {
    if ( args.unchanged )
      return;
    if ( this.container[0] && ! $.contains( document, this.container[0] ) ) {
      this.container.toggle( active );
      if ( args.completeCallback ) {
        args.completeCallback();
      }
    } else if ( active ) {
      this.container.slideDown( args.duration, args.completeCallback );
    } else {
      this.container.slideUp( args.duration, args.completeCallback );
    }
  };
  if ( 'function' == typeof api.Section ) {
    var _original_section_initialize = api.Section.prototype.initialize;
    api.Section.prototype.initialize = function( id, options ) {
      _original_section_initialize.apply( this, [id, options] );
      var section = this;

      this.expanded.callbacks.add( function( _expanded ) {
        if ( ! _expanded )
          return;

      var container = section.container.closest( '.wp-full-overlay-sidebar-content' ),
            content = section.container.find( '.accordion-section-content' );
        _resizeContentHeight = function() {
          content.css( 'height', container.innerHeight() );
      };
        _resizeContentHeight();
        $( window ).on( 'resize.customizer-section', _.debounce( _resizeContentHeight, 110 ) );
      });
    };
  }
  var contx = new api.Values();
  contx.create('current');
  api.contx = contx;
  var sidebar_insights = new api.Values();
  sidebar_insights.create('candidates');//will store the sidebar candidates on preview refresh
  sidebar_insights.create('actives');//will record the refreshed active list of active sidebars sent from the preview
  sidebar_insights.create('inactives');
  sidebar_insights.create('registered');

  api.sidebar_insights = sidebar_insights;
  var _old_initialize = api.PreviewFrame.prototype.initialize;
  api.PreviewFrame.prototype.initialize = function( params, options ) {
    _old_initialize.call( this, params, options );
    this.bind('houston-widget-settings', function(data) {
        var _candidates = _.filter( data.registeredSidebars, function( sb ) {
          return ! _.findWhere( _wpCustomizeWidgetsSettings.registeredSidebars, { id: sb.id } );
        });

        var _inactives = _.filter( data.registeredSidebars, function( sb ) {
          return ! _.has( data.renderedSidebars, sb.id );
        });

        _inactives = _.map( _inactives, function(obj) {
          return obj.id;
        });

        var _registered = _.map( data.registeredSidebars, function(obj) {
          return obj.id;
        });

        api.sidebar_insights('actives').set( data.renderedSidebars );
        api.sidebar_insights('inactives').set( _inactives );
        api.sidebar_insights('registered').set( _registered );
        api.sidebar_insights('candidates').set( _candidates );
    });


    this.bind( 'context-ready', function(data ) {
      api.contx('current').set( data );
    });

  };//initialize
  api.contx('current').callbacks.add( function( e, o) {
  });
  api.sidebar_insights('candidates').callbacks.add( function(_candidates) {
    if ( ! _.isArray(_candidates) )
      return;
    _.map( _candidates, function( _sidebar ) {
      if ( ! _.isObject(_sidebar) )
        return;
      if ( api.section.has("sidebar-widgets-" +_sidebar.id ) )
        return;
      api.HUWidgetAreasControl.prototype.addWidgetSidebar( {}, _sidebar );
      if ( _.has( api.sidebar_insights('actives').get(), _sidebar.id ) && api.section.has("sidebar-widgets-" +_sidebar.id ) )
        api.section( "sidebar-widgets-" +_sidebar.id ).activate();
    });
  });
})( wp.customize , jQuery, _);
var HUBaseControlMethods = HUBaseControlMethods || {};

(function (api, $, _) {
  $.extend( HUBaseControlMethods, {

    initialize: function( id, options ) {
      var control = this;
      api.Control.prototype.initialize.call( control, id, options );
      this.css_attr = _.has( options.params , 'css_attr') ? options.params.css_attr : {};
      $.extend( control, {
        viewTemplateEl : 'customize-control-' + options.params.type + '-view',
        viewContentTemplateEl : 'customize-control-' + options.params.type + '-view-content',
      } );
    },
    getTemplateEl : function( type, model ) {
      var control = this, _el;
      switch(type) {
        case 'view' :
          _el = control.viewTemplateEl;
          break;
        case 'view-content' :
          _el = control.viewContentTemplateEl;
          break;
      }
      if ( _.isEmpty(_el) ) {
        console.log('No valid template has been found in getTemplateEl()');
      } else {
        return _el;
      }
    },
    addActions : function( event_map, new_event ) {
      new_event_map = _.clone( this[event_map] );
      new_event_map.push( new_event );
      this[event_map] = new_event_map;
    },
    refreshPreview : function( obj ) {
      this.previewer.refresh();
    },


    _capitalize : function( string ) {
      if( ! _.isString(string) )
        return string;
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    _truncate : function( string, n, useWordBoundary ){
      var isTooLong = string.length > n,
          s_ = isTooLong ? string.substr(0,n-1) : string;
          s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
      return  isTooLong ? s_ + '...' : s_;
    }
    }//HUBaseControlMethods
  );//$.extend

})( wp.customize , jQuery, _);var HUDynamicMethods = HUDynamicMethods || {};

(function (api, $, _) {
  $.extend( HUDynamicMethods, {
    initialize: function( id, options ) {

      var control = this;
      api.HUBaseControl.prototype.initialize.call( control, id, options );
      this.view_event_map = [
        {
          trigger   : 'click keydown',
          selector  : [ '.' + options.params.css_attr.display_alert_btn, '.' + options.params.css_attr.cancel_alert_btn ].join(','),
          name      : 'toggle_remove_alert',
          actions   : ['toggleRemoveAlertVisibility']
        },
        {
          trigger   : 'click keydown',
          selector  : '.' + options.params.css_attr.remove_view_btn,
          name      : 'remove_model',
          actions   : ['removeModel', 'destroyView' ]
        },
        {
          trigger   : 'click keydown',
          selector  : [ '.' + options.params.css_attr.edit_view_btn, '.' + options.params.css_attr.view_title ].join(','),
          name      : 'edit_view',
          actions   : ['renderViewContent', 'setViewVisibility']
        },
        {
          trigger   : 'view_rendered:view_content_event_map',
          name      : 'view_content_setup',
          actions   : ['setupViewListeners']
        },


      ];

      this.view_content_event_map = [
        {
          trigger   : 'propertychange change click keyup input colorpickerchange',//colorpickerchange is a custom colorpicker event @see method setupColorPicker => otherwise we don't
          selector  : 'input[data-type], select[data-type]',
          name      : 'set_input_value',
          actions   : ['detectInputChange', 'updateModel' ]
        }
      ];


      this.control_event_map = [
        {
          trigger   : 'click keydown',
          selector  : '.' + options.params.css_attr.add_view_btn, //'.hu-add-new',
          name      : 'add_model',
          actions   : ['closeAllViews', 'addModel'],
        },
        {
          trigger   : 'model_added',
          name      : 'render_view',
          actions   : ['renderView','writeViewTitle']
        },
        {
          trigger   : 'model_updated',
          name      : 'update_model_in_collection',
          actions   : ['updateCollection', 'writeViewTitle', 'sendModel']
        },
        {
          trigger   : 'model_removed',
          name      : 'remove_model_in_collection',
          actions   : 'updateCollection'
        },
        {
          trigger   : 'view_rendered:view_event_map',
          name      : 'setup_view',
          actions   : [ 'setupViewListeners', 'makeSortable' ]
        },
        {
          trigger   : 'view_rendered:new',
          name      : 'user_added_view_setup',
          actions   : ['renderViewContent', 'setViewVisibility']
        },
        {
          trigger   : 'views_sorted',
          name      : 'sort_collection',
          actions   : ['sortCollection', 'closeAllViews', 'closeAllAlerts']
        },
      ];
      this.savedModels = api(this.id).get();
      this.model = { id : '', title : '' };
      this.collection = [];
      $.extend( control, {
        viewAlertEl : 'customize-control-' + options.params.type + '-alert',
      } );
      this.hu_views = new api.Values();
    },
    ready : function() {
      var control = this;
      api.bind( 'ready', function() {
        control.setupListeners( control.control_event_map , { dom_el : control.container } );
        control.fetchSavedCollection();
        control.listenToCollectionUpdates();
      });
      control.container.trigger('ready');
    },//ready()

  });//$.extend()

})( wp.customize, jQuery, _ );var HUDynamicMethods = HUDynamicMethods || {};


(function (api, $, _) {
  $.extend( HUDynamicMethods, {
    addModel : function( obj, key ) {
      model =  ( _.has( obj, 'model') && _.has( obj.model, 'id' ) ) ? obj.model : this._initNewModel( obj.model || {} );
      key   = 'undefined' == typeof(key) ? key : false;
      this.updateCollection( { model : model }, key );
      this.container.trigger( 'model_added', { model : model , dom_event : obj.dom_event } );
      if ( _.has(obj, 'dom_event') && ! _.has(obj.dom_event, 'isTrigger') )
        this.container.trigger( 'model_added_by_user', { model : model , dom_event : obj.dom_event } );
      if ( 'postMessage' == api(this.id).transport && _.has( obj, 'dom_event') && ! _.has( obj.dom_event, 'isTrigger' ) )
        this.previewer.refresh();

    },
    updateModel : function( obj ) {
      var control = this;
      var $_changed_input   = $(obj.dom_event.currentTarget, obj.dom_el ),
          _changed_prop     = $_changed_input.attr('data-type'),
          _new_val          = $( $_changed_input, obj.dom_el ).val(),
          _new_model        = _.clone(obj.model);//initialize it to the current value
      _new_model[_changed_prop] = _new_val;
      control.container.trigger( 'model_updated' , { model : _new_model , changed_prop : _changed_prop } );
      obj.dom_el.trigger( _changed_prop + ':changed', { model : _new_model } );
    },


    removeModel : function( obj ) {
      var control = this,
          _new_collection = _.clone(control.collection);

      _new_collection = _.without( _new_collection, _.findWhere( _new_collection, {id: obj.model.id }) );
      control.container.trigger( 'model_removed' , { collection : _new_collection, model : _.findWhere( control.collection, {id: obj.model.id }) } );
    },
    getDefaultModel : function( id ) {
      return $.extend( _.clone(this.model), { id : id || '' } );
    },
    _normalizeModel : function( model, key ) {
      if ( ! _.isObject(model) )
        return;
      model = this._initNewModel(model, key);

      return model;
    },
    _initNewModel : function( _model , _next_key ) {
      var control = this,
          _new_model = { id : '' },
          _id;
      _next_key = 'undefined' != typeof(_next_key) ? _next_key : _.size( control.collection );

      if ( _.isNumber(_next_key) ) {
        _id = control.params.type + '_' + _next_key;
      }
      else {
        _id = _next_key;
        _next_key = 0;
      }

      if ( _model && ! _.isEmpty( _model) )
        _new_model = $.extend( _model, { id : _id } );
      else
        _new_model = this.getDefaultModel( _id );
      if ( _.has(_new_model, 'id') && ! _.isEmpty( _new_model.id) && ! _.findWhere( control.collection, { id : _id }) ) {
        _.map( control.model , function( value, property ){
          if ( ! _.has(_new_model, property) )
            _new_model[property] = value;
        });

        return _new_model;
      }
      return control._initNewModel( _new_model, _next_key + 1);
    },
    sendModel : function( obj ) {
      var _changed = obj.changed_prop;
      this.previewer.send( 'sub_setting', {
        set_id : this.id,
        model_id : obj.model.id,
        changed_prop : _changed,
        value : obj.model[_changed]
      });
    },
  });//$.extend()

})( wp.customize, jQuery, _);var HUDynamicMethods = HUDynamicMethods || {};


(function (api, $, _) {
  $.extend( HUDynamicMethods, {
    fetchSavedCollection : function() {
      var control = this;
      _.map( control.savedModels, function( model, key ) {
        model = control._normalizeModel(model, _.has( model, 'id' ) ? model.id : key );
        if ( false === model ) {
          console.log('A model could not be added in : ', control.id );
          return;
        }
        control.addModel( { model : model }, key);
      });
    },
    listenToCollectionUpdates : function() {
      var control = this, candidate_for_db;
      control.container.on('collection_updated', function( e, obj ) {
        if ( ! _.has(obj, "collection" ) || ! _.isArray(obj.collection) ) {
          console.log('setting not updated, no valid value provided');
          return;
        }
        candidate_for_db = control.filterCollectionBeforeAjax(obj.collection);
        api(control.id).set(obj.collection);

      });
    },
    filterCollectionBeforeAjax : function(candidate_for_db) {
      return candidate_for_db;
    },
    updateCollection : function( obj, key ) {
      var _new_collection = _.clone( this.collection ),
          control = this;
      if ( _.has( obj, 'collection' ) ) {
        control.collection = obj.collection;
        control.container.trigger( 'collection_updated', { collection : control.collection } );
        return;
      }
      var _key = ( 'undefined' == typeof(key) ) ? false : key,
          model = _.clone(obj.model);
      if ( false !== _key ) {
        if ( _.isObject( _new_collection[key] ) )
          _new_collection[key] = model;
        else {
          _new_collection.push(model);
        }
      }
      else {
        if ( _.findWhere( _new_collection, { id : model.id } ) ) {
          _.map( control.collection, function( _model, _ind ) {
            if ( _model.id != model.id )
              return;
            _new_collection[_ind] = model;
          });
        }
        else {
          _new_collection.push(model);
        }
      }//else
      this.collection = _new_collection;
      this.container.trigger( 'collection_updated', { collection : _new_collection, model : model } );
    },
    sortCollection : function( obj ) {
      var control = this,
          _new_collection = [],
          _index = 0;

      $( '.' + control.css_attr.inner_view, control.container ).each( function() {
        var _model = _.findWhere( control.collection, {id: $(this).attr('data-id') });
        if ( ! _model )
          return;

        _new_collection[_index] = _model;

        _index ++;
      });
      if ( 0 === _new_collection.length )
        return;
      control.container.trigger( 'collection_updated', {collection : _new_collection} );
      if ( 'postMessage' == api(this.id).transport )
        this.previewer.refresh();
    },


    getModel : function(model) {
      var control = this;
      _model = _.findWhere( control.collection, {id: model.id} );
      if ( false !== _model )
        return _model;
      return model;
    }
  });//$.extend()

})( wp.customize, jQuery, _);var HUDynamicMethods = HUDynamicMethods || {};

(function (api, $, _) {
  $.extend( HUDynamicMethods, {
    renderView : function( obj ) {
      var control = this,
          model = _.clone(obj.model),
          isManuallyAdded = ! _.has( obj.dom_event, 'isTrigger' );
      if ( 0 === $( '#tmpl-' + control.getTemplateEl( 'view', model ) ).length )
        return this;


      var view_template = wp.template( control.getTemplateEl( 'view', model ) );
      if ( ! view_template  || ! control.container )
        return this;
      var $_view_el = $('li[data-id="' + model.id + '"]').length ? $('li[data-id="' + model.id + '"]') : $('<li>', { class : control.css_attr.inner_view, 'data-id' : model.id,  id : model.id } ),
          _refreshed = $('li[data-id="' + model.id + '"]').length ? true : false;

      if ( ! $('li[data-id="' + model.id + '"]').length ) {
        $( '.' + control.css_attr.views_wrapper , control.container).append( $_view_el );
        $( view_template( model ) ).appendTo( $_view_el );
      } else {
        $_view_el.html( view_template( model ) );
      }
      control.hu_views.create(model.id);
      control.hu_views(model.id).set('closed');
      control.hu_views(model.id).callbacks.add( function( to, from ) {
        control._toggleViewExpansion( model.id, to );
      });
      var $_dom_el = ( _.has(obj, 'dom_el') && -1 != obj.dom_el.length ) ? obj.dom_el : control.container;
      $_dom_el.trigger(
        'view_rendered:view_event_map', {
          model : model,
          dom_el : $_view_el,
          dom_event : obj.dom_event,
          refreshed : _refreshed
        }
      );
      if ( ! _.has( obj.dom_event, 'isTrigger' ) ) {
         $_dom_el.trigger(
          'view_rendered:new', {
            model : model,
            dom_el : $_view_el,
            dom_event : obj.dom_event,
          }
        );
      }

      return this;
    },
    renderViewContent : function( obj ) {
      if( _.has(obj, 'dom_el') && ! _.isEmpty( $('.' + this.css_attr.view_content, obj.dom_el ).html() ) )
        return true;
      var control = this,
          model = _.clone(obj.model);
      if ( 0 === $( '#tmpl-' + control.getTemplateEl( 'view-content', model ) ).length )
        return this;

      var  view_content_template = wp.template( control.getTemplateEl( 'view-content', model ) );
      if ( ! view_content_template || ! control.container )
        return this;
      $( view_content_template( model )).appendTo( $('.' + control.css_attr.view_content, obj.dom_el ) );
      obj.dom_el.trigger(
        'view_rendered:view_content_event_map', {
          model : model,
          dom_el : obj.dom_el,
          dom_event : obj.dom_event,
        }
      );

      return this;
    },
    destroyView : function (obj) {
      obj.dom_el.fadeOut( {
        duration : 400,
        done : function() {
          $(this).remove();
        }
      });
      this.hu_views.remove(obj.model.id);

      this.container.trigger( 'view_removed', obj );
      if ( 'postMessage' == api(this.id).transport )
        this.previewer.refresh();
    },
    writeViewTitle : function( obj ) {
      var _model = _.clone(obj.model);
          _title = this._capitalize( _model.title );
      _title = this._truncate(_title, 20);
      $( '.' + this.css_attr.view_title , '#' + obj.model.id ).text(_title );
    },
    getViewEl : function( model_id ) {
      var control = this;
      return $( '[data-id = "' + model_id + '"]', control.container );
    },
    makeSortable : function(obj) {
      if ( wp.media.isTouchDevice || ! $.fn.sortable )
        return;

      var control = this;
      $( '.' + control.css_attr.views_wrapper, control.container ).sortable( {
          handle: '.' + control.css_attr.view_header ,
          update: function( event, ui ) {
            control.container.trigger( 'views_sorted' );
          }
        }
      );
    },
    setViewVisibility : function(obj) {
      var control = this;

      if ( "view_rendered:new" == obj.event.trigger ) {
        control.hu_views(obj.model.id).set( 'expanded' );
      } else {
        control.closeAllViews(obj.model.id);
        control.hu_views(obj.model.id).set( 'expanded' == control.hu_views(obj.model.id).get() ? 'closed' : 'expanded' );
      }
    },
    closeAllViews : function(model_id) {
      var control = this,
          _filtered_collection = _.filter( _.clone( control.collection ) , function( mod) { return mod.id != model_id; });

      _.map( _filtered_collection, function(_model) {
        if ( control.hu_views.has(_model.id) && 'expanded' == control.hu_views(_model.id).get() )
          control.hu_views( _model.id).set( 'closed' ); // => will fire the cb _toggleViewExpansion
       } );
    },
    _toggleViewExpansion : function( model_id, status, duration ) {
      var control = this;
      $( '.' + control.css_attr.view_content , control.getViewEl(model_id) ).slideToggle( {
          duration : duration || 200,
          done : function() {
            var _is_expanded = 'closed' != status;

            control.getViewEl(model_id).toggleClass('open' , _is_expanded );
            control.closeAllAlerts();
            $(this).siblings().find('.' + control.css_attr.edit_view_btn).toggleClass('active' , _is_expanded );
            var $_view_el = control.getViewEl(model_id);

            setTimeout( function() {
              if ( 'expanded' == status ) {
                if ( ( $_view_el.offset().top + $_view_el.height() ) > $(window.top).height() ) {
                  $('.wp-full-overlay-sidebar-content').animate({
                      scrollTop:  $_view_el.offset().top - $_view_el.height() - 50
                  }, 400);
                }
              }
            }, 50);

          }//done callback
        } );
    },
    closeAllAlerts : function() {
      var control = this;
      $('.' + control.css_attr.remove_alert_wrapper, control.container ).each( function() {
        if ( $(this).hasClass('open') ) {
          $(this).slideToggle( {
            duration : 100,
            done : function() {
              $(this).toggleClass('open' , false );
              $(this).siblings().find('.' + control.css_attr.display_alert_btn).toggleClass('active' , false );
            }
          } );
        }
      });
    },
    toggleRemoveAlertVisibility : function(obj) {
      var control = this,
          $_alert_el = $( '.' + control.css_attr.remove_alert_wrapper, obj.dom_el ),
          $_clicked = obj.dom_event;
      this.closeAllViews();
      $('.' + control.css_attr.remove_alert_wrapper, control.container ).not($_alert_el).each( function() {
        if ( $(this).hasClass('open') ) {
          $(this).slideToggle( {
            duration : 200,
            done : function() {
              $(this).toggleClass('open' , false );
              $(this).siblings().find('.' + control.css_attr.display_alert_btn).toggleClass('active' , false );
            }
          } );
        }
      });
      var alert_template = wp.template( control.viewAlertEl );
      if ( ! alert_template  || ! control.container )
        return this;

      $_alert_el.html( alert_template( obj.model ) );
      $_alert_el.slideToggle( {
        duration : 200,
        done : function() {
          var _is_open = ! $(this).hasClass('open') && $(this).is(':visible');
          $(this).toggleClass('open' , _is_open );
          $( obj.dom_el ).find('.' + control.css_attr.display_alert_btn).toggleClass( 'active', _is_open );
        }
      } );
    },





    detectInputChange : function( obj ) {
      var $_changed_input   = $(obj.dom_event.currentTarget, obj.dom_el ),
          _changed_prop     = $_changed_input.attr('data-type'),
          _new_val          = $( $_changed_input, obj.dom_el ).val(),
          _old_val          = _new_val;
      if ( _.has(obj.model, _changed_prop ) )
        _old_val = obj.model[_changed_prop];
      if (  _new_val == _old_val )
        return false;//Break the action chain and don't update the model

      return true;
    }

  });//$.extend()

})( wp.customize, jQuery, _);var HUDynamicMethods = HUDynamicMethods || {};

(function (api, $, _) {
  $.extend( HUDynamicMethods, {
    setupViewListeners : function(obj) {
      if ( ! _.has(obj, 'event') || ! _.has(obj.event, 'trigger') || ! _.has( this, obj.event.trigger.split(':')[1] ) ) {
        console.log('No event map was found in setup view listeners. Event triggered by : ' + obj.event. trigger );
        return;
      }
      var _obj = _.clone(obj),
          _evt_map = obj.event.trigger.split(':')[1];

      if ( obj.refreshed )
        return;
      this.setupListeners( this[_evt_map] , _obj );
    },
    setupListeners : function( event_map , obj ) {
      var control = this;
      _.map( event_map , function( _event ) {
        obj.dom_el.on( _event.trigger , _event.selector, function( e, event_params ) {
          if ( api.utils.isKeydownButNotEnterEvent( e ) ) {
            return;
          }
          e.preventDefault(); // Keep this AFTER the key filter above
          var _obj = _.clone(obj);
          if ( _.has(_obj, 'model') ) {
            _obj.model = control.getModel( _obj.model );
          }
          $.extend( _obj, { event : _event, dom_event : e } );
          $.extend( _obj, event_params );
          control.executeEventActionChain( _obj );
        });//.on()

      });//_.map()
    },
    executeEventActionChain : function( obj ) {
      var control = this;
      if ( ! _.has( obj, 'event' ) || ! _.has( obj.event, 'actions' ) ) {
        console.log( 'No obj.event or no obj.event.actions properties found in control.executeEventActionChain()' );
        return;
      }
      if ( 'function' === typeof(obj.event.actions) )
        return obj.event.actions(obj);
      if ( ! _.isArray(obj.event.actions) )
        obj.event.actions = [ obj.event.actions ];
      var _break = false;
      _.map( obj.event.actions, function( _cb ) {

        if ( _break )
          return;

        if ( 'function' != typeof( control[_cb] ) ) {
          console.log( 'The action : ' + _cb + ' has not been found when firing event : ' + obj.event.selector );
          return;
        }
        var $_dom_el = ( _.has(obj, 'dom_el') && -1 != obj.dom_el.length ) ? obj.dom_el : control.container;

        $_dom_el.trigger('before_' + _cb, _.omit( obj, 'event') );
          var _cb_return = control[_cb](obj);
          if ( false === _cb_return )
            _break = true;
        $_dom_el.trigger('after_' + _cb, _.omit( obj, 'event') );

      });//_.map
    }
  });//$.extend()

})( wp.customize, jQuery, _);var HUMultiInputMethods = HUMultiInputMethods || {};

(function (api, $, _) {

  $.extend( HUMultiInputMethods , {
    initialize: function( id, options ) {
      var control = this;
      api.HUBaseControl.prototype.initialize.call( control, id, options );
      control.model = api(control.id).get();
    },


    ready: function() {
      var control  = this;
      api.bind( 'ready', function() {
        control.renderView();
        control.setupColorPicker();
      });
    },


    setupColorPicker : function() {
      var control  = this;

      $('.' + control.css_attr.multi_input_wrapper, control.container).find('[data-input-type="color"]').find('input').wpColorPicker( {
        change : function( e, o ) {
          $(this).val($(this).wpColorPicker('color'));
          $(this).trigger('colorpickerchange');
        }
      });
    },


    setupImageUploader : function() {
      var control  = this;
      console.log('IN SETUP IMAGE', $('.' + control.css_attr.multi_input_wrapper, control.container).find('[data-input-type="upload"]' ) );
      if ( 0 === $( '#tmpl-customize-control-media-content' ).length )
        return this;

      console.log('wp.template( control.viewContentTemplateEl )', wp.template( '#tmpl-customize-control-media-content' ) );
      var view_template = wp.template( 'customize-control-media-content' );
      if ( ! view_template  || ! control.container )
        return this;
      var $_view_el = $('.' + control.css_attr.multi_input_wrapper, control.container).find('[data-input-type="upload"]' ).find('.hu-input');


      if ( ! $_view_el.length )
        return;
      $_view_el.append( view_template( {}) );
    },

    getDefaultModel : function() {

    },
    renderView : function() {
      var control = this,
          model = control.model;
      if ( 0 === $( '#tmpl-' + control.viewContentTemplateEl ).length )
        return this;

      var view_template = wp.template( control.viewContentTemplateEl );
      if ( ! view_template  || ! control.container )
        return this;
      var $_view_el = $('.' + control.css_attr.multi_input_wrapper, control.container);

      if ( _.isEmpty($_view_el.html() ) ) {
        $_view_el.append( control.getViewContent() );
      } else {
        $_view_el.html( control.getViewContent() );
      }
      return this;
    },
    getViewContent : function() {
      var control = this,
          model = control.model;
      if ( 0 === $( '#tmpl-' + control.viewContentTemplateEl ).length )
        return this;

      var  view_content_template = wp.template( control.viewContentTemplateEl );
      if ( ! view_content_template || ! control.container )
        return this;
      return $( view_content_template( model ));

    },



  });//$.extend

})( wp.customize, jQuery, _);var TCMultiplePickerMethods = TCMultiplePickerMethods || {};

(function (api, $, _) {
  $.extend( TCMultiplePickerMethods , {
    ready: function() {
      var control  = this,
          _select  = this.container.find('select');
      _select.on('change', function(e){
        if ( 0 === $(this).find("option:selected").length )
          control.setting.set([]);
      });
    }
  });//$.extend

})( wp.customize, jQuery, _);var TCCroppedImageMethods = TCCroppedImageMethods || {};

(function (api, $, _) {
  if ( 'function' != typeof wp.media.controller.Cropper  || 'function' != typeof api.CroppedImageControl  )
    return;
    wp.media.controller.TCCustomizeImageCropper = wp.media.controller.Cropper.extend({
      doCrop: function( attachment ) {
        var cropDetails = attachment.get( 'cropDetails' ),
            control = this.get( 'control' );

        cropDetails.dst_width  = control.params.dst_width;
        cropDetails.dst_height = control.params.dst_height;

        return wp.ajax.post( 'crop-image', {
            wp_customize: 'on',
            nonce: attachment.get( 'nonces' ).edit,
            id: attachment.get( 'id' ),
            context: control.id,
            cropDetails: cropDetails
        } );
      }
    });
    $.extend( TCCroppedImageMethods , {
      initFrame: function() {

        var l10n = _wpMediaViewsL10n;

        this.frame = wp.media({
            button: {
                text: l10n.select,
                close: false
            },
            states: [
                new wp.media.controller.Library({
                    title: this.params.button_labels.frame_title,
                    library: wp.media.query({ type: 'image' }),
                    multiple: false,
                    date: false,
                    priority: 20,
                    suggestedWidth: this.params.width,
                    suggestedHeight: this.params.height
                }),
                new wp.media.controller.TCCustomizeImageCropper({
                    imgSelectOptions: this.calculateImageSelectOptions,
                    control: this
                })
            ]
        });

        this.frame.on( 'select', this.onSelect, this );
        this.frame.on( 'cropped', this.onCropped, this );
        this.frame.on( 'skippedcrop', this.onSkippedCrop, this );
      },
      onSelect: function() {
        var attachment = this.frame.state().get( 'selection' ).first().toJSON();
        if ( ! ( attachment.mime && attachment.mime.indexOf("image") > -1 ) ){
          this.frame.trigger( 'content:error' );
          return;
        }
        if ( ( _.contains( ['image/svg+xml', 'image/gif'], attachment.mime ) ) || //do not crop gifs or svgs
                this.params.width === attachment.width && this.params.height === attachment.height && ! this.params.flex_width && ! this.params.flex_height ) {
            this.setImageFromAttachment( attachment );
            this.frame.close();
        } else {
            this.frame.setState( 'cropper' );
        }
      },
    });//Method definition

})( wp.customize, jQuery, _);var TCUploadMethods = TCUploadMethods || {};

(function (api, $, _) {
  $.extend( TCUploadMethods, {
    ready: function() {
      var control = this;

      this.params.removed = this.params.removed || '';

      this.success = $.proxy( this.success, this );

      this.uploader = $.extend({
        container: this.container,
        browser:   this.container.find('.tc-upload'),
        success:   this.success,
        plupload:  {},
        params:    {}
      }, this.uploader || {} );

      if ( control.params.extensions ) {
        control.uploader.plupload.filters = [{
          title:      api.l10n.allowedFiles,
          extensions: control.params.extensions
        }];
      }

      if ( control.params.context )
        control.uploader.params['post_data[context]'] = this.params.context;

      if ( api.settings.theme.stylesheet )
        control.uploader.params['post_data[theme]'] = api.settings.theme.stylesheet;

      this.uploader = new wp.Uploader( this.uploader );

      this.remover = this.container.find('.remove');
      this.remover.on( 'click keydown', function( event ) {
        if ( event.type === 'keydown' &&  13 !== event.which ) // enter
          return;
        control.setting.set( control.params.removed );
        event.preventDefault();
      });

      this.removerVisibility = $.proxy( this.removerVisibility, this );
      this.setting.bind( this.removerVisibility );
      this.removerVisibility( this.setting.get() );
    },
    success: function( attachment ) {
      this.setting.set( attachment.get('id') );
    },
    removerVisibility: function( to ) {
      this.remover.toggle( to != this.params.removed );
    }
  });//method definition

})( wp.customize, jQuery, _);var HULayoutSelectMethods = HULayoutSelectMethods || {};

(function (api, $, _) {
  $.extend( HULayoutSelectMethods , {
    ready: function() {
      this.setupSelect();
    },


    setupSelect : function( obj ) {
      var control = this;
          $_select  = this.container.find('select');

      function addImg( state ) {
        if (! state.id) { return state.text; }
        if ( ! _.has( control.params.layouts, state.element.value ) )
          return;

        var _layout_data = control.params.layouts[state.element.value],
            _src = _layout_data.src,
            _title = _layout_data.label,
            $state = $(
          '<img src="' + _src +'" class="hu-layout-img" title="' + _title + '" /><span class="hu-layout-title">' + _title + '</span>'
        );
        return $state;
      }
      $_select.select2( {
          templateResult: addImg,
          templateSelection: addImg,
          minimumResultsForSearch: Infinity
      });
    },
  });//$.extend

})( wp.customize, jQuery, _);var HUBackgroundMethods = HUBackgroundMethods || {};
(function (api, $, _) {
  $.extend( HUBackgroundMethods , {
    initialize: function( id, options ) {
      var control = this;
      api.HUBaseControl.prototype.initialize.call( control, id, options );
    },

    ready: function() {
      this.setupSelect();
    },


    setupSelect : function( obj ) {
      var control = this;
          $_select  = this.container.find('select');

      function addImg( state ) {
        if (! state.id) { return state.text; }
        if ( ! _.has( control.params.layouts, state.element.value ) )
          return;

        var _layout_data = control.params.layouts[state.element.value],
            _src = _layout_data.src,
            _title = _layout_data.label,
            $state = $(
          '<img src="' + _src +'" class="hu-layout-img" title="' + _title + '" /><span class="hu-layout-title">' + _title + '</span>'
        );
        return $state;
      }
      $_select.select2( {
          templateResult: addImg,
          templateSelection: addImg,
          minimumResultsForSearch: Infinity
      });
    },
  });//$.extend

})( wp.customize, jQuery, _);//extends api.HUDynamicControl

var HUWidgetAreasMethods = HUWidgetAreasMethods || {};

(function (api, $, _) {
  $.extend( HUWidgetAreasMethods, {
    initialize: function( id, options ) {
      api.HUDynamicControl.prototype.initialize.call( this, id, options );

      var control = this;
      control.addActions(
        'control_event_map',
        {
            trigger   : 'after_writeViewTitle',
            actions   : [ 'writeSubtitleInfos' ]
        }
      );
      control.addActions(
        'control_event_map',
        {
            trigger   : 'before_setupViewListeners',
            name      : 'before_setupViewListeners',
            actions   : [ 'setupSelect' ]
        }
      );
      control.addActions(
        'control_event_map',
        {
            trigger   : 'after_sendModel',
            actions   : ['updateSectionTitle','setModelUpdateTimer']
        }
      );
      control.addActions(
        'control_event_map',
        {
            trigger   : 'model_added_by_user',
            actions   : ['addWidgetSidebar']
        }
      );

      control.addActions(
        'control_event_map',
        {
            trigger   : 'model_removed',
            actions   : ['removeWidgetSidebar']
        }
      );

      control.addActions(
        'control_event_map',
        {
            trigger   : 'widget_zone_created',
            actions   : ['scrollToNewZone']
        }
      );
      control.contexts = _.has( options.params , 'sidebar_contexts') ? options.params.sidebar_contexts : {};
      control.context_match_map = {
        is_404 : '404',
        is_category : 'archive-category',
        is_home : 'home',
        is_page : 'page',
        is_search : 'search',
        is_single : 'single'
      };
      control.savedModels = _.union(
        _.has(control.params, 'default_zones') ? control.params.default_zones : [],
        control.savedModels
      );

      control.locations = _.has( options.params , 'sidebar_locations') ? options.params.sidebar_locations : {};
      control.model = {
        id : '',
        title : 'Widget Zone',
        contexts : ['_all_'],
        locations : ['s1'],
        description : ''
      };
      var fixTopMargin = new api.Values();
      fixTopMargin.create('fixed_for_current_session');
      fixTopMargin.create('value');

      api.section('sidebars_create_sec').fixTopMargin = fixTopMargin;
      api.section('sidebars_create_sec').fixTopMargin('fixed_for_current_session').set(false);
      api.panel('widgets').expanded.callbacks.add( function(expanded) {
        var _top_margin = api.panel('widgets').container.find( '.control-panel-content' ).css('margin-top');
        api.section('sidebars_create_sec').fixTopMargin('value').set( _top_margin );

        var _section_content = api.section('sidebars_create_sec').container.find( '.accordion-section-content' ),
          _panel_content = api.panel('widgets').container.find( '.control-panel-content' ),
          _set_margins = function() {
            _section_content.css( 'margin-top', '' );
            _panel_content.css('margin-top', api.section('sidebars_create_sec').fixTopMargin('value').get() );
          };
        api.bind( 'pane-contents-reflowed', _.debounce( function() {
          _set_margins();
        }, 150 ) );

      } );
      api.section('sidebars_create_sec').expanded.callbacks.add( function(expanded) {
        var section =  api.section('sidebars_create_sec'),
            container = section.container.closest( '.wp-full-overlay-sidebar-content' ),
            content = section.container.find( '.accordion-section-content' ),
            overlay = section.container.closest( '.wp-full-overlay' ),
            backBtn = section.container.find( '.customize-section-back' ),
            sectionTitle = section.container.find( '.accordion-section-title' ).first(),
            headerActionsHeight = $( '#customize-header-actions' ).height(),
            resizeContentHeight, expand, position, scroll;
        if ( expanded ) {
          overlay.removeClass( 'section-open' );
          content.css( 'height', 'auto' );
          sectionTitle.attr( 'tabindex', '0' );
          content.css( 'margin-top', '' );
          container.scrollTop( 0 );
        }

        control.closeAllViews();

        content.slideToggle();
      });
      api.sidebar_insights('registered').callbacks.add( function( _registered_zones ) {
        _.map(control.collection, function( _model ) {
          if ( ! control.getViewEl(_model.id).length )
            return;

          control.getViewEl(_model.id).css('display' , _.contains( _registered_zones, _model.id ) ? 'block' : 'none' );
        });
      });

      api.sidebar_insights('inactives').callbacks.add( function( _inactives_zones ) {
        _.map(control.collection, function( _model ) {
          if ( ! control.getViewEl(_model.id).length )
            return;

          if ( _.contains( _inactives_zones, _model.id ) ) {
            control.getViewEl( _model.id ).addClass('inactive');
            if ( ! control.getViewEl( _model.id ).find('.hu-inactive-alert').length )
              control.getViewEl( _model.id ).find('.hu-view-title').prepend('<span class="hu-inactive-alert">[inactive] </span>');
          }
          else {
            control.getViewEl( _model.id ).removeClass('inactive');
            if ( control.getViewEl( _model.id ).find('.hu-inactive-alert').length )
              control.getViewEl( _model.id ).find('.hu-inactive-alert').remove();
          }
        });
      });

    },//initialize
    getTemplateEl : function( type, model ) {
      var control = this, _el;
      if ( 'view' == type ) {
        type = ( _.has(model, 'is_builtin') && model.is_builtin ) ? 'view-reduced' : type;
      } else if ( 'view-content' == type ) {
        type = ( _.has(model, 'is_builtin') && model.is_builtin ) ? 'view-content-reduced' : type;
      }

      switch(type) {
        case 'view' :
          _el = control.viewTemplateEl;
          break;
        case 'view-content' :
          _el = control.viewContentTemplateEl;
          break;
        case 'view-reduced' :
          _el = 'customize-control-' + control.params.type + '-view-reduced';
          break;
        case 'view-content-reduced' :
          _el = 'customize-control-' + control.params.type + '-view-content-reduced';
          break;

      }
      if ( _.isEmpty(_el) ) {
        console.log('No valid template has been found in getTemplateEl()');
      } else {
        return _el;
      }
    },
    listenToCollectionUpdates : function() {
      var control = this;
      control.container.on('collection_updated', function( e, obj ) {
        if ( ! _.has(obj, "collection" ) || ! _.isArray(obj.collection) ) {
          console.log('setting not updated, no valid value provided');
          return;
        }
        api(control.id).set(obj.collection);

      });
    },
    writeSubtitleInfos : function(obj) {
      var control = this,
          _model = _.clone(obj.model),
          $_view = this.getViewEl(_model.id),
          _locations = [],
          _contexts = [],
          _html = '';

      if ( ! $_view.length )
        return;
      _model.locations =_.isString(_model.locations) ? [_model.locations] : _model.locations;
      _.map( _model.locations, function( loc ) {
          if ( _.has( control.locations , loc ) )
            _locations.push(control.locations[loc]);
          else
            _locations.push(loc);
        }
      );

      _model.contexts =_.isString(_model.contexts) ? [_model.contexts] : _model.contexts;
      _.map( _model.contexts, function( con ) {
          if ( _.has( control.contexts , con ) )
            _contexts.push(control.contexts[con]);
          else
            _contexts.push(con);
        }
      );
      var _locationText = HUControlParams.translatedStrings.locations,
          _contextText = HUControlParams.translatedStrings.contexts,
          _notsetText = HUControlParams.translatedStrings.notset;

      _locations = _.isEmpty( _locations ) ? '<span style="font-weight: bold;">' + _notsetText + '</span>' : _locations.join(', ');
      _contexts = _.isEmpty( _contexts ) ? '<span style="font-weight: bold;">' + _notsetText + '</span>' : _contexts.join(', ');

      _html = '<u>' + _locationText + '</u> : ' + _locations + ' <strong>|</strong> <u>' + _contextText + '</u> : ' + _contexts;

      if ( ! $('.hu-zone-infos', $_view ).length ) {
        var $_zone_infos = $('<div/>', {
          class : 'hu-zone-infos',
          html : _html
        });
        $( '.' + control.css_attr.view_buttons, $_view ).after($_zone_infos);
      } else {
        $('.hu-zone-infos', $_view ).html(_html);
      }

    },
    scrollToNewZone  : function( obj ) {
      var $_view_el = this.getViewEl(obj.model.id);

      $('.wp-full-overlay-sidebar-content').animate({
            scrollTop:  $_view_el.offset().top - $_view_el.height()
      }, 700);

    },
    getDefaultModel : function(id) {
      var control = this,
          _default = _.clone( control.model ),
          _default_contexts = _default.contexts;
      return $.extend( _default, {
          title : 'Widget Zone ' +  ( _.size(control.collection)*1 + 1 ),
          contexts : control._getMatchingContexts( _default_contexts )
        });
    },
    _getMatchingContexts : function( defaults ) {
      var control = this,
          _current = api.contx('current').get(),
          _matched = _.filter(control.context_match_map, function( hu, wp ) { return true === _current[wp]; });

      return _.isEmpty( _matched ) ? defaults : _matched;

    },

    setupSelect : function( obj ) {
      var control = this;
      _.map( control.contexts, function( title, key ) {
        var _attributes = {
              value : key,
              html: title
            };
        if ( key == obj.model.contexts || _.contains( obj.model.contexts, key ) )
          $.extend( _attributes, { selected : "selected" } );

        $( 'select[data-type="contexts"]', obj.dom_el ).append( $('<option>', _attributes) );
      });
      _.map( control.locations, function( title, key ) {
        var _attributes = {
              value : key,
              html: title
            };

        if ( key == obj.model.locations || _.contains( obj.model.locations, key ) )
          $.extend( _attributes, { selected : "selected" } );

        $( 'select[data-type="locations"]', obj.dom_el ).append( $('<option>', _attributes) );
      });
      $( 'select[data-type="contexts"], select[data-type="locations"]', obj.dom_el ).select2();
    },
    setModelUpdateTimer : function(obj) {
      var control = this;
      clearTimeout( $.data(this, 'modelUpdateTimer') );
      $.data(
        this,
        'modelUpdateTimer',
        setTimeout( function() {
          control.refreshPreview();
        } , 1000)
      );//$.data
    },
    updateSectionTitle : function(obj) {
      var _sidebar_id = 'sidebar-widgets-' + obj.model.id,
          _new_title  = obj.model.title;
      if ( ! api.section.has(_sidebar_id) )
        return;
      $('.accordion-section-title', api.section(_sidebar_id).container ).text(_new_title);
      $('.customize-section-title h3', api.section(_sidebar_id).container ).html(
        '<span class="customize-action">' + api.section(_sidebar_id).params.customizeAction + '</span>' + _new_title
      );

    },
    addWidgetSidebar : function( obj, sidebar_data ) {
      if ( ! _.isObject(obj) && isEmpty(sidebar_data) ) {
        console.log('No valid input were provided to add a new Widget Zone.');
        return;
      }
      var _model        = ! _.isEmpty(obj) ? _.clone(obj.model) : sidebar_data;
          _new_sidebar  = _.isEmpty(obj) ? sidebar_data : $.extend(
            _.clone( _.findWhere( api.Widgets.data.registeredSidebars, { id: "primary" } ) ),
            {
              name : _model.title,
              id : _model.id
            }
          );
      api.Widgets.registeredSidebars.add( _new_sidebar );
      var _params = $.extend(
        _.clone( api.section("sidebar-widgets-primary").params ),
        {
          id : "sidebar-widgets-" + _model.id,
          instanceNumber: _.max(api.settings.sections, function(sec){ return sec.instanceNumber; }).instanceNumber + 1,
          sidebarId: _new_sidebar.id,
          title: _new_sidebar.name,
          description : 'undefined' != typeof(sidebar_data) ? sidebar_data.description : api.section("sidebar-widgets-primary").params.description,
          priority: _.max( _.omit( api.settings.sections, 'sidebars_create_sec'), function(sec){ return sec.instanceNumber; }).priority + 1,
        }
      );

      api.section.add( _params.id, new api.sectionConstructor[ _params.type ]( _params.id ,{ params : _params } ) );
      api.settings.sections[ _params.id ] = _params.id;
      var _new_set_id = 'sidebars_widgets['+_model.id+']',
          _new_set    = $.extend(
            _.clone( api.settings.settings['sidebars_widgets[primary]'] ),
            {
              value:[]
            }
          );
      api.settings.settings[ _new_set_id ] = _new_set;
      api.create( _new_set_id, _new_set_id, _new_set.value, {
        transport: _new_set.transport,
        previewer: api.previewer,
        dirty: false
      } );
      var _cloned_control = $.extend(
            _.clone( api.settings.controls['sidebars_widgets[primary]'] ),
            {
              settings : { default : _new_set_id }
            }),
          _new_control = {};
      _.map( _cloned_control, function( param, key ) {
        if ( 'string' == typeof(param) ) {
          param = param.replace('primary', _model.id );
        }
        _new_control[key] = param;
      });
      _new_control.instanceNumber = _.max(api.settings.controls, function(con){ return con.instanceNumber; }).instanceNumber + 1;
      api.settings.controls[_new_set_id] = _new_control;
      api.control.add( _new_set_id, new api.controlConstructor[ _new_control.type ]( _new_set_id, {
        params: _new_control,
        previewer: api.previewer
      } ) );
      if ( _.has(this, 'container') )
        this.container.trigger( 'widget_zone_created', { model : _model, section_id : "sidebar-widgets-" + _model.id , setting_id : _new_set_id });

    },//addWidgetSidebar
    removeWidgetSidebar : function(obj) {
      api.Widgets.registeredSidebars.remove( obj.model.id );
      if ( api.section.has("sidebar-widgets-" + obj.model.id) ) {
        api.section("sidebar-widgets-" + obj.model.id).container.remove();
        api.section.remove( "sidebar-widgets-" + obj.model.id );
        delete api.settings.sections[ "sidebar-widgets-" + obj.model.id ];
      }
      if ( api.has('sidebars_widgets['+obj.model.id+']') ) {
        api.remove( 'sidebars_widgets['+obj.model.id+']' );
        delete api.settings.settings['sidebars_widgets['+obj.model.id+']'];
      }
      if ( api.control.has('sidebars_widgets['+obj.model.id+']') ) {
        api.control( 'sidebars_widgets['+obj.model.id+']' ).container.remove();
        api.control.remove( 'sidebars_widgets['+obj.model.id+']' );
        delete api.settings.controls['sidebars_widgets['+obj.model.id+']'];
      }
      this.container.trigger('widget_zone_removed', { model : obj.model, section_id : "sidebar-widgets-" + obj.model.id , setting_id : 'sidebars_widgets['+obj.model.id+']' });
    }


  });//$.extend()

})( wp.customize, jQuery, _);//extends api.HUDynamicControl

var HUSocialMethods = HUSocialMethods || {};

(function (api, $, _) {
  $.extend( HUSocialMethods, {
    initialize: function( id, options ) {
      api.HUDynamicControl.prototype.initialize.call( this, id, options );

      var control = this;

      this.social_icons = [
        '500px',
        'adn',
        'amazon',
        'android',
        'angellist',
        'apple',
        'behance',
        'behance-square',
        'bitbucket',
        'bitbucket-square',
        'black-tie',
        'btc',
        'buysellads',
        'chrome',
        'codepen',
        'codiepie',
        'connectdevelop',
        'contao',
        'dashcube',
        'delicious',
        'delicious',
        'deviantart',
        'digg',
        'dribbble',
        'dropbox',
        'drupal',
        'edge',
        'empire',
        'expeditedssl',
        'facebook',
        'facebook',
        'facebook-f (alias)',
        'facebook-official',
        'facebook-square',
        'firefox',
        'flickr',
        'fonticons',
        'fort-awesome',
        'forumbee',
        'foursquare',
        'get-pocket',
        'gg',
        'gg-circle',
        'git',
        'github',
        'github',
        'github-alt',
        'github-square',
        'git-square',
        'google',
        'google',
        'google-plus',
        'google-plus-square',
        'google-wallet',
        'gratipay',
        'hacker-news',
        'houzz',
        'instagram',
        'internet-explorer',
        'ioxhost',
        'joomla',
        'jsfiddle',
        'lastfm',
        'lastfm-square',
        'leanpub',
        'linkedin',
        'linkedin',
        'linkedin-square',
        'linux',
        'maxcdn',
        'meanpath',
        'medium',
        'mixcloud',
        'modx',
        'odnoklassniki',
        'odnoklassniki-square',
        'opencart',
        'openid',
        'opera',
        'optin-monster',
        'pagelines',
        'paypal',
        'pied-piper',
        'pied-piper-alt',
        'pinterest',
        'pinterest-p',
        'pinterest-square',
        'product-hunt',
        'qq',
        'rebel',
        'reddit',
        'reddit-alien',
        'reddit-square',
        'renren',
        'rss',
        'rss-square',
        'safari',
        'scribd',
        'sellsy',
        'share-alt',
        'share-alt-square',
        'shirtsinbulk',
        'simplybuilt',
        'skyatlas',
        'skype',
        'slack',
        'slideshare',
        'soundcloud',
        'spotify',
        'stack-exchange',
        'stack-overflow',
        'steam',
        'steam-square',
        'stumbleupon',
        'stumbleupon',
        'stumbleupon-circle',
        'tencent-weibo',
        'trello',
        'tripadvisor',
        'tumblr',
        'tumblr-square',
        'twitch',
        'twitter',
        'twitter',
        'twitter-square',
        'usb',
        'viacoin',
        'vimeo',
        'vimeo-square',
        'vine',
        'vk',
        'weibo',
        'weixin',
        'whatsapp',
        'wikipedia-w',
        'windows',
        'wordpress',
        'xing',
        'xing-square',
        'yahoo',
        'yahoo',
        'y-combinator',
        'yelp',
        'youtube',
        'youtube-play',
        'youtube-square'
      ];
      this.addActions(
        'control_event_map',
        {
            trigger   : 'after_renderViewContent',
            name      : 'after_renderViewContent',
            actions   : [ 'setupSelect', 'setupColorPicker', 'setupIcheck' ]
        }
      );

      this.addActions(
        'view_event_map',
        {
            trigger   : 'social-icon:changed',
            actions   : [ 'updateViewInputs' ]
        }
      );
      this.model = {
        id : '',
        title :  _.contains(control.social_icons,'rss') ? HUControlParams.translatedStrings.rss : this._capitalize( this.social_icons[0]) ,
        'social-icon' : 'fa-' + ( _.contains(control.social_icons,'rss') ? 'rss' : control.social_icons[0] ),
        'social-link' : '',
        'social-color' : HUControlParams.defaultSocialColor,
        'social-target' : 1
      };
    },


    _buildTitle : function( title, icon, color ) {
      title = title || this._capitalize( this.social_icons[0]);
      title = this._truncate(title, 20);
      icon = icon || 'fa-' + this.social_icons[0];
      color = color || HUControlParams.defaultSocialColor;

      return '<div><span class="fa ' + icon + '" style="color:' + color + '"></span> ' + title + '</div>';
    },
    writeViewTitle : function( obj ) {
      $( '.' + this.css_attr.view_title , '#' + obj.model.id ).html(
        this._buildTitle( obj.model.title, obj.model['social-icon'], obj.model['social-color'] )
      );
    },
    updateViewInputs : function( obj ) {
      var control     = this,
          _new_model  = _.clone(obj.model),
          _new_title  = control._capitalize( obj.model['social-icon'].replace('fa-', '') ),
          _new_color  = HUControlParams.defaultSocialColor;

      $('input[data-type="title"]', obj.dom_el ).val( _new_title );
      $('input[data-type="social-link"]', obj.dom_el ).val( '' );
      $('input[data-type="social-color"]', obj.dom_el ).wpColorPicker('color', _new_color );
      _new_model.title = _new_title;
      _new_model['social-link'] = '';
      _new_model['social-color'] = _new_color;
      control.container.trigger( 'model_updated' , { model : _new_model , changed_prop : 'title' } );
    },


    setupSelect : function( obj ) {
      var control = this;
      _.map( control.social_icons, function( icon_name ) {
        var _value = 'fa-' + icon_name.toLowerCase(),
            _attributes = {
              value : _value,
              html: control._capitalize(icon_name)
            };
        if ( _value == obj.model['social-icon'] )
          $.extend( _attributes, { selected : "selected" } );

        $( 'select[data-type="social-icon"]', obj.dom_el ).append( $('<option>', _attributes) );
      });

      function addIcon( state ) {
        if (! state.id) { return state.text; }
        var $state = $(
          '<span class="fa ' + state.element.value.toLowerCase() + '">&nbsp;&nbsp;' + state.text + '</span>'
        );
        return $state;
      }
      $( 'select[data-type="social-icon"]', obj.dom_el ).select2( {
          templateResult: addIcon,
          templateSelection: addIcon
      });
    },


    setupColorPicker : function( obj ) {
      $( 'input[data-type="social-color"]', obj.dom_el ).wpColorPicker( {
        defaultColor : 'rgba(255,255,255,0.7)',
        change : function( e, o ) {
          $(this).val(o.color.toString());
          $(this).trigger('colorpickerchange');
        }
      });
    },

    setupIcheck : function( obj ) {
      $( 'input[type=checkbox]', obj.dom_el ).each( function(e) {
        if ( 0 !== $(this).closest('div[class^="icheckbox"]').length )
          return;

        $(this).iCheck({
          checkboxClass: 'icheckbox_flat-grey',
          checkedClass: 'checked',
          radioClass: 'iradio_flat-grey',
        })
        .on( 'ifChanged', function(e){
          $(this).val( false === $(this).is(':checked') ? 0 : 1 );
          $(e.currentTarget).trigger('change');
        });
      });
    }

  });//$.extend()

})( wp.customize, jQuery, _);
(function (api, $, _) {
  api.HUBaseControl           = api.Control.extend( HUBaseControlMethods || {} );
  api.HUDynamicControl        = api.HUBaseControl.extend( HUDynamicMethods || {} );
  api.HUMultiInputControl     = api.HUBaseControl.extend( HUMultiInputMethods || {} );

  api.HUWidgetAreasControl    = api.HUDynamicControl.extend( HUWidgetAreasMethods || {} );
  api.HUSocialControl         = api.HUDynamicControl.extend( HUSocialMethods || {} );

  api.TCUploadControl         = api.Control.extend( TCUploadMethods || {} );
  api.HULayoutControl         = api.Control.extend( HULayoutSelectMethods || {} );
  api.TCMultiplePickerControl = api.Control.extend( TCMultiplePickerMethods || {} );

  $.extend( api.controlConstructor, {
    hu_upload     : api.TCUploadControl,
    hu_sidebars   : api.HUWidgetAreasControl,
    hu_socials    : api.HUSocialControl,
    tc_multiple_picker : api.TCMultiplePickerControl,
    hu_layouts    : api.HULayoutControl,
    hu_multi_input : api.HUMultiInputControl
  });

  if ( 'function' == typeof api.CroppedImageControl ) {
    api.TCCroppedImageControl   = api.CroppedImageControl.extend( TCCroppedImageMethods || {} );

    $.extend( api.controlConstructor, {
      hu_cropped_image : api.TCCroppedImageControl
    });
  }

})( wp.customize, jQuery, _);(function (api, $, _) {

  var $_nav_section_container,
      translatedStrings = HUControlParams.translatedStrings || {};

  api.bind( 'ready' , function() {
    _setControlVisibilities();
  } );
  var _setControlVisibilities = function() {
    _.map( _controlDependencies , function( opts , setId ) {
      _prepare_visibilities( setId, opts );
    });
    _handleFaviconNote();
  };
  var _controlDependencies = {
    'dynamic-styles' : {
      controls: [
        'boxed',
        'font',
        'container-width',
        'sidebar-padding',
        'color-1',
        'color-2',
        'color-topbar',
        'color-header',
        'color-header-menu',
        'image-border-radius',
        'body-background',

      ],
      callback : function (to) {
        return '0' !== to && false !== to && 'off' !== to;
      },
    },
    'blog-heading-enabled' : {
      controls: [
        'blog-heading',
        'blog-subheading'
      ],
      callback : function (to) {
        return '0' !== to && false !== to && 'off' !== to;
      },
    },
    'featured-posts-enabled' : {
      controls: [
        'featured-category',
        'featured-posts-count',
        'featured-slideshow',
        'featured-slideshow-speed',
        'featured-posts-include'
      ],
      callback : function (to) {
        return '0' !== to && false !== to && 'off' !== to;
      },
    },
    'featured-slideshow' : {
      controls: [
        'featured-slideshow-speed'
      ],
      callback : function (to) {
        return '0' !== to && false !== to && 'off' !== to;
      },
    },
    'about-page' : {
      controls: [
        'help-button'
      ],
      callback : function (to) {
        return '0' !== to && false !== to && 'off' !== to;
      },
    },
    'page_for_posts' : {
       controls: [
         'tc_blog_restrict_by_cat'
       ],
       callback : function (to) {
         return '0' !== to;
       },
    },
    'show_on_front' : {
      controls: [
        'tc_blog_restrict_by_cat'
      ],
      callback : function (to) {
        if ( 'posts' == to )
          return true;
        if ( 'page' == to )
          return '0' !== api( _build_setId('page_for_posts') ).get() ;
        return false;
      },
    }
  };

  var wp_builtin_settings = [
    'page_for_posts',
    'show_on_front',
    'blogname',
    'blogdescription'
  ];
  var _build_setId = function ( name ) {
    if ( _.has( wp_builtin_settings, name ) )
      return name;
    return -1 == name.indexOf( 'hu_theme_options') ? [ 'hu_theme_options[' , name  , ']' ].join('') : name;
  };
  var _get_dependants = function( setId ) {
    if ( ! _controlDependencies[setId] )
      return [];
    var _dependants = _controlDependencies[setId];

    if ( _dependants.show && _dependants.hide )
      return _.union(_dependants.show.controls , _dependants.hide.controls);
    if ( _dependants.show && ! _dependants.hide )
      return _dependants.show.controls;
    if ( ! _dependants.show && _dependants.hide )
      return _dependants.hide.controls;

    return _dependants.controls;
  };
  var _get_visibility_action = function ( setId , depSetId ) {
    if ( ! _controlDependencies[setId] )
      return 'both';
    var _dependants = _controlDependencies[setId];
    if ( _dependants.show && -1 != _.indexOf( _dependants.show.controls, depSetId ) )
      return 'show';
    if ( _dependants.hide && -1 != _.indexOf( _dependants.hide.controls, depSetId ) )
      return 'hide';
    return 'both';
  };


  var _get_visibility_cb = function( setId , _action ) {
    if ( ! _controlDependencies[setId] )
      return;
    var _dependants = _controlDependencies[setId];
    if ( ! _dependants[_action] )
      return _dependants.callback;
    return (_dependants[_action]).callback;
  };


  var _check_cross_dependant = function( setId, depSetId ) {
    if ( ! _controlDependencies[setId] )
      return true;
    var _dependants = _controlDependencies[setId];
    if ( ! _dependants.cross || ! _dependants.cross[depSetId] )
      return true;
    var _cross  = _dependants.cross[depSetId],
        _id     = _cross.master,
        _cb     = _cross.callback;

    _id = _build_setId(_id);
    return _cb( api.instance(_id).get() );
  };
  var _prepare_visibilities = function( setId, o ) {
    api( _build_setId(setId) , function (setting) {
      var _params = {
        setting   : setting,
        setId : setId,
        controls  : _get_dependants(setId),
      };
      _.map( _params.controls , function( depSetId ) {
        _set_single_dependant_control_visibility( depSetId , _params);
      } );
    });
  };
  var _set_single_dependant_control_visibility = function( depSetId , _params ) {
    api.control( _build_setId(depSetId) , function (control) {
      var _visibility = function (to) {
        var _action   = _get_visibility_action( _params.setId , depSetId ),
            _callback = _get_visibility_cb( _params.setId , _action ),
            _bool     = false;

        if ( 'show' == _action && _callback(to, depSetId, _params.setId ) )
          _bool = true;
        if ( 'hide' == _action && _callback(to, depSetId, _params.setId ) )
          _bool = false;
        if ( 'both' == _action )
          _bool = _callback(to, depSetId, _params.setId );
        _bool = _check_cross_dependant( _params.setId, depSetId ) && _bool;
        control.container.toggle( _bool );
      };//_visibility()



      _visibility( _params.setting.get() );
      _params.setting.bind( _visibility );
    });
  };
  var _handleFaviconNote = function() {
    if ( ! api.has('site_icon') || ! api.control('site_icon') || ( api.has(_build_setId('favicon')) && 0 === + api( _build_setId('favicon') ).get() ) || + api('site_icon').get() > 0 )
      return;

    var _oldDes     = api.control('site_icon').params.description;
        _newDes     = ['<strong>' , translatedStrings.faviconNote || '' , '</strong><br/><br/>' ].join('') + _oldDes;
    _printFaviconNote(_newDes );
    api('site_icon').callbacks.add( function(to) {
      if ( +to > 0 ) {
        api.control('site_icon').container.find('.description').text(_oldDes);
        if ( api.has( _build_setId('favicon') ) )
          api( _build_setId('favicon') ).set("");
      }
      else {
        _printFaviconNote(_newDes );
      }
    });
  };
  var _printFaviconNote = function( _newDes ) {
    api.control('site_icon').container.find('.description').html(_newDes);
  };

})( wp.customize, jQuery, _);//DOM READY :
(function (wp, $) {
  $( function($) {
    var api = wp.customize || api;
    var _build_setId = function ( name ) {
      return -1 == name.indexOf( 'hu_theme_options') ? [ 'hu_theme_options[' , name  , ']' ].join('') : name;
    };

    var _build_control_id = function( _control ) {
      return [ '#' , 'customize-control-hu_theme_options-', _control ].join('');
    };
    $('.accordion-section').not('.control-panel').click( function () {
      _recenter_current_section($(this));
    });

    function _recenter_current_section( section ) {
      var $siblings               = section.siblings( '.open' );
      if ( 0 !== $siblings.length &&  $siblings.offset().top < 0 ) {
        $('.wp-full-overlay-sidebar-content').animate({
              scrollTop:  - $('#customize-theme-controls').offset().top - $siblings.height() + section.offset().top + $('.wp-full-overlay-sidebar-content').offset().top
        }, 700);
      }
    }//end of fn
    $('input[type=checkbox]').not('input[id*="widget"]').each( function() {
      if ( 0 === $(this).val() || '0' == $(this).val() || 'off' == $(this).val() || _.isEmpty($(this).val() ) ) {
        $(this).prop('checked', false);
      } else {
        $(this).prop('checked', true);
      }
      if ( 0 !== $(this).closest('div[class^="icheckbox"]').length )
        return;

      $(this).iCheck({
        checkboxClass: 'icheckbox_flat-grey',
        radioClass: 'iradio_flat-grey',
      })
      .on( 'ifChanged', function(e){
        $(this).val( false === $(this).is(':checked') ? 0 : 1 );
        $(e.currentTarget).trigger('change');
      });
    });
    $('select[data-customize-setting-link]').not('.no-selecter-js')
      .each( function() {
        $(this).selecter({
        });
    });
    $('input[type="number"]').stepper();
    _render_rate_czr();

    function _render_rate_czr() {
      var _cta = _.template(
          $( "script#rate-czr" ).html()
      );
      $('#customize-footer-actions').append( _cta() );
    }
    if ( $('.control-panel-widgets').find('.accordion-section-title').first().length ) {
      $('.control-panel-widgets').find('.accordion-section-title').first().prepend(
        $('<span/>', {class:'fa fa-magic'} )
      );
    }
    if ( $('#accordion-panel-hu-content-panel').find('.accordion-section-title').first().length ) {
      $('#accordion-panel-hu-content-panel').find('.accordion-section-title').first().append(
        $('<span/>', { html : ' ( Home, Blog, Layout, Sidebars, Slideshows, ... )' } ).css('font-style', 'italic').css('font-size', '14px')
      );
    }
  });//end of $( function($) ) dom ready

})( wp, jQuery);
