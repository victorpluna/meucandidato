/***************************

	01 - CSS Browser Selector
	02 - Easing

***************************/



/* 01 - CSS Browser Selector */
/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);



/* 02  - Easing*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});



// uniform js
(function(a){a.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:true,idPrefix:"uniform",resetSelector:false,autoHide:true},elements:[]};if(a.browser.msie&&a.browser.version<7){a.support.selectOpacity=false}else{a.support.selectOpacity=true}a.fn.uniform=function(k){k=a.extend(a.uniform.options,k);var d=this;if(k.resetSelector!=false){a(k.resetSelector).mouseup(function(){function l(){a.uniform.update(d)}setTimeout(l,10)})}function j(l){$el=a(l);$el.addClass($el.attr("type"));b(l)}function g(l){a(l).addClass("uniform");b(l)}function i(o){var m=a(o);var p=a("<div>"),l=a("<span>");p.addClass(k.buttonClass);if(k.useID&&m.attr("id")!=""){p.attr("id",k.idPrefix+"-"+m.attr("id"))}var n;if(m.is("a")||m.is("button")){n=m.text()}else{if(m.is(":submit")||m.is(":reset")||m.is("input[type=button]")){n=m.attr("value")}}n=n==""?m.is(":reset")?"Reset":"Submit":n;l.html(n);m.css("opacity",0);m.wrap(p);m.wrap(l);p=m.closest("div");l=m.closest("span");if(m.is(":disabled")){p.addClass(k.disabledClass)}p.bind({"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(r){if(a(r.target).is("span")||a(r.target).is("div")){if(o[0].dispatchEvent){var q=document.createEvent("MouseEvents");q.initEvent("click",true,true);o[0].dispatchEvent(q)}else{o[0].click()}}}});o.bind({"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass)}});a.uniform.noSelect(p);b(o)}function e(o){var m=a(o);var p=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){p.hide()}p.addClass(k.selectClass);if(k.useID&&o.attr("id")!=""){p.attr("id",k.idPrefix+"-"+o.attr("id"))}var n=o.find(":selected:first");if(n.length==0){n=o.find("option:first")}l.html(n.html());o.css("opacity",0);o.wrap(p);o.before(l);p=o.parent("div");l=o.siblings("span");o.bind({"change.uniform":function(){l.text(o.find(":selected").html());p.removeClass(k.activeClass)},"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"keyup.uniform":function(){l.text(o.find(":selected").html())}});if(a(o).attr("disabled")){p.addClass(k.disabledClass)}a.uniform.noSelect(l);b(o)}function f(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.checkboxClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{l.addClass(k.checkedClass)}},"mousedown.uniform touchbegin.uniform":function(){o.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function c(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.radioClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{var p=k.radioClass.split(" ")[0];a("."+p+" span."+k.checkedClass+":has([name='"+a(n).attr("name")+"'])").removeClass(k.checkedClass);l.addClass(k.checkedClass)}},"mousedown.uniform touchend.uniform":function(){if(!a(n).is(":disabled")){o.addClass(k.activeClass)}},"mouseup.uniform touchbegin.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform touchend.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function h(q){var o=a(q);var r=a("<div />"),p=a("<span>"+k.fileDefaultText+"</span>"),m=a("<span>"+k.fileBtnText+"</span>");if(!o.css("display")=="none"&&k.autoHide){r.hide()}r.addClass(k.fileClass);p.addClass(k.filenameClass);m.addClass(k.fileBtnClass);if(k.useID&&o.attr("id")!=""){r.attr("id",k.idPrefix+"-"+o.attr("id"))}o.wrap(r);o.after(m);o.after(p);r=o.closest("div");p=o.siblings("."+k.filenameClass);m=o.siblings("."+k.fileBtnClass);if(!o.attr("size")){var l=r.width();o.attr("size",l/10)}var n=function(){var s=o.val();if(s===""){s=k.fileDefaultText}else{s=s.split(/[\/\\]+/);s=s[(s.length-1)]}p.text(s)};n();o.css("opacity",0).bind({"focus.uniform":function(){r.addClass(k.focusClass)},"blur.uniform":function(){r.removeClass(k.focusClass)},"mousedown.uniform":function(){if(!a(q).is(":disabled")){r.addClass(k.activeClass)}},"mouseup.uniform":function(){r.removeClass(k.activeClass)},"mouseenter.uniform":function(){r.addClass(k.hoverClass)},"mouseleave.uniform":function(){r.removeClass(k.hoverClass);r.removeClass(k.activeClass)}});if(a.browser.msie){o.bind("click.uniform.ie7",function(){setTimeout(n,0)})}else{o.bind("change.uniform",n)}if(o.attr("disabled")){r.addClass(k.disabledClass)}a.uniform.noSelect(p);a.uniform.noSelect(m);b(q)}a.uniform.restore=function(l){if(l==undefined){l=a(a.uniform.elements)}a(l).each(function(){if(a(this).is(":checkbox")){a(this).unwrap().unwrap()}else{if(a(this).is("select")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is(":radio")){a(this).unwrap().unwrap()}else{if(a(this).is(":file")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is("button, :submit, :reset, a, input[type='button']")){a(this).unwrap().unwrap()}}}}}a(this).unbind(".uniform");a(this).css("opacity","1");var m=a.inArray(a(l),a.uniform.elements);a.uniform.elements.splice(m,1)})};function b(l){l=a(l).get();if(l.length>1){a.each(l,function(m,n){a.uniform.elements.push(n)})}else{a.uniform.elements.push(l)}}a.uniform.noSelect=function(l){function m(){return false}a(l).each(function(){this.onselectstart=this.ondragstart=m;a(this).mousedown(m).css({MozUserSelect:"none"})})};a.uniform.update=function(l){if(l==undefined){l=a(a.uniform.elements)}l=a(l);l.each(function(){var n=a(this);if(n.is("select")){var m=n.siblings("span");var p=n.parent("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.html(n.find(":selected").html());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":checkbox")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":radio")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":file")){var p=n.parent("div");var o=n.siblings(k.filenameClass);btnTag=n.siblings(k.fileBtnClass);p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);o.text(n.val());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":submit")||n.is(":reset")||n.is("button")||n.is("a")||l.is("input[type=button]")){var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}}}}}})};return this.each(function(){if(a.support.selectOpacity){var l=a(this);if(l.is("select")){if(l.attr("multiple")!=true){if(l.attr("size")==undefined||l.attr("size")<=1){e(l)}}}else{if(l.is(":checkbox")){f(l)}else{if(l.is(":radio")){c(l)}else{if(l.is(":file")){h(l)}else{if(l.is(":text, :password, input[type='email']")){j(l)}else{if(l.is("textarea")){g(l)}else{if(l.is("a")||l.is(":submit")||l.is(":reset")||l.is("button")||l.is("input[type=button]")){i(l)}}}}}}}}})}})(jQuery);

//image map hightligth
(function($) {
	var has_VML, has_canvas, create_canvas_for, add_shape_to, clear_canvas, shape_from_area,
		canvas_style, hex_to_decimal, css3color, is_image_loaded, options_from_area;

	has_VML = document.namespaces;
	has_canvas = !!document.createElement('canvas').getContext;

	if(!(has_canvas || has_VML)) {
		$.fn.maphilight = function() { return this; };
		return;
	}
	
	if(has_canvas) {
		hex_to_decimal = function(hex) {
			return Math.max(0, Math.min(parseInt(hex, 16), 255));
		};
		css3color = function(color, opacity) {
			return 'rgba('+hex_to_decimal(color.substr(0,2))+','+hex_to_decimal(color.substr(2,2))+','+hex_to_decimal(color.substr(4,2))+','+opacity+')';
		};
		create_canvas_for = function(img) {
			var c = $('<canvas style="width:'+img.width+'px;height:'+img.height+'px;"></canvas>').get(0);
			c.getContext("2d").clearRect(0, 0, c.width, c.height);
			return c;
		};
		var draw_shape = function(context, shape, coords, x_shift, y_shift) {
			x_shift = x_shift || 0;
			y_shift = y_shift || 0;
			
			context.beginPath();
			if(shape == 'rect') {
				// x, y, width, height
				context.rect(coords[0] + x_shift, coords[1] + y_shift, coords[2] - coords[0], coords[3] - coords[1]);
			} else if(shape == 'poly') {
				context.moveTo(coords[0] + x_shift, coords[1] + y_shift);
				for(i=2; i < coords.length; i+=2) {
					context.lineTo(coords[i] + x_shift, coords[i+1] + y_shift);
				}
			} else if(shape == 'circ') {
				// x, y, radius, startAngle, endAngle, anticlockwise
				context.arc(coords[0] + x_shift, coords[1] + y_shift, coords[2], 0, Math.PI * 2, false);
			}
			context.closePath();
		}
		add_shape_to = function(canvas, shape, coords, options, name) {
			var i, context = canvas.getContext('2d');
			
			// Because I don't want to worry about setting things back to a base state
			
			// Shadow has to happen first, since it's on the bottom, and it does some clip /
			// fill operations which would interfere with what comes next.
			if(options.shadow) {
				context.save();
				if(options.shadowPosition == "inside") {
					// Cause the following stroke to only apply to the inside of the path
					draw_shape(context, shape, coords);
					context.clip();
				}
				
				// Redraw the shape shifted off the canvas massively so we can cast a shadow
				// onto the canvas without having to worry about the stroke or fill (which
				// cannot have 0 opacity or width, since they're what cast the shadow).
				var x_shift = canvas.width * 100;
				var y_shift = canvas.height * 100;
				draw_shape(context, shape, coords, x_shift, y_shift);
				
				context.shadowOffsetX = options.shadowX - x_shift;
				context.shadowOffsetY = options.shadowY - y_shift;
				context.shadowBlur = options.shadowRadius;
				context.shadowColor = css3color(options.shadowColor, options.shadowOpacity);
				
				// Now, work out where to cast the shadow from! It looks better if it's cast
				// from a fill when it's an outside shadow or a stroke when it's an interior
				// shadow. Allow the user to override this if they need to.
				var shadowFrom = options.shadowFrom;
				if (!shadowFrom) {
					if (options.shadowPosition == 'outside') {
						shadowFrom = 'fill';
					} else {
						shadowFrom = 'stroke';
					}
				}
				if (shadowFrom == 'stroke') {
					context.strokeStyle = "rgba(0,0,0,1)";
					context.stroke();
				} else if (shadowFrom == 'fill') {
					context.fillStyle = "rgba(0,0,0,1)";
					context.fill();
				}
				context.restore();
				
				// and now we clean up
				if(options.shadowPosition == "outside") {
					context.save();
					// Clear out the center
					draw_shape(context, shape, coords);
					context.globalCompositeOperation = "destination-out";
					context.fillStyle = "rgba(0,0,0,1);";
					context.fill();
					context.restore();
				}
			}
			
			context.save();
			
			draw_shape(context, shape, coords);
			
			// fill has to come after shadow, otherwise the shadow will be drawn over the fill,
			// which mostly looks weird when the shadow has a high opacity
			if(options.fill) {
				context.fillStyle = css3color(options.fillColor, options.fillOpacity);
				context.fill();
			}
			// Likewise, stroke has to come at the very end, or it'll wind up under bits of the
			// shadow or the shadow-background if it's present.
			if(options.stroke) {
				context.strokeStyle = css3color(options.strokeColor, options.strokeOpacity);
				context.lineWidth = options.strokeWidth;
				context.stroke();
			}
			
			context.restore();
			
			if(options.fade) {
				$(canvas).css('opacity', 0).animate({opacity: 1}, 100);
			}
		};
		clear_canvas = function(canvas) {
			canvas.getContext('2d').clearRect(0, 0, canvas.width,canvas.height);
		};
	} else {   // ie executes this code
		create_canvas_for = function(img) {
			return $('<var style="zoom:1;overflow:hidden;display:block;width:'+img.width+'px;height:'+img.height+'px;"></var>').get(0);
		};
		add_shape_to = function(canvas, shape, coords, options, name) {
			var fill, stroke, opacity, e;
			fill = '<v:fill color="#'+options.fillColor+'" opacity="'+(options.fill ? options.fillOpacity : 0)+'" />';
			stroke = (options.stroke ? 'strokeweight="'+options.strokeWidth+'" stroked="t" strokecolor="#'+options.strokeColor+'"' : 'stroked="f"');
			opacity = '<v:stroke opacity="'+options.strokeOpacity+'"/>';
			if(shape == 'rect') {
				e = $('<v:rect name="'+name+'" filled="t" '+stroke+' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:'+coords[0]+'px;top:'+coords[1]+'px;width:'+(coords[2] - coords[0])+'px;height:'+(coords[3] - coords[1])+'px;"></v:rect>');
			} else if(shape == 'poly') {
				e = $('<v:shape name="'+name+'" filled="t" '+stroke+' coordorigin="0,0" coordsize="'+canvas.width+','+canvas.height+'" path="m '+coords[0]+','+coords[1]+' l '+coords.join(',')+' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:'+canvas.width+'px;height:'+canvas.height+'px;"></v:shape>');
			} else if(shape == 'circ') {
				e = $('<v:oval name="'+name+'" filled="t" '+stroke+' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:'+(coords[0] - coords[2])+'px;top:'+(coords[1] - coords[2])+'px;width:'+(coords[2]*2)+'px;height:'+(coords[2]*2)+'px;"></v:oval>');
			}
			e.get(0).innerHTML = fill+opacity;
			$(canvas).append(e);
		};
		clear_canvas = function(canvas) {
			$(canvas).find('[name=highlighted]').remove();
		};
	}
	
	shape_from_area = function(area) {
		var i, coords = area.getAttribute('coords').split(',');
		for (i=0; i < coords.length; i++) { coords[i] = parseFloat(coords[i]); }
		return [area.getAttribute('shape').toLowerCase().substr(0,4), coords];
	};

	options_from_area = function(area, options) {
		var $area = $(area);
		return $.extend({}, options, $.metadata ? $area.metadata() : false, $area.data('maphilight'));
	};
	
	is_image_loaded = function(img) {
		if(!img.complete) { return false; } // IE
		if(typeof img.naturalWidth != "undefined" && img.naturalWidth === 0) { return false; } // Others
		return true;
	};

	canvas_style = {
		position: 'absolute',
		left: 0,
		top: 0,
		padding: 0,
		border: 0
	};
	
	var ie_hax_done = false;
	$.fn.maphilight = function(opts) {
		opts = $.extend({}, $.fn.maphilight.defaults, opts);
		
		if(!has_canvas && $.browser.msie && !ie_hax_done) {
			document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
			var style = document.createStyleSheet();
			var shapes = ['shape','rect', 'oval', 'circ', 'fill', 'stroke', 'imagedata', 'group','textbox'];
			$.each(shapes,
				function() {
					style.addRule('v\\:' + this, "behavior: url(#default#VML); antialias:true");
				}
			);
			ie_hax_done = true;
		}
		
		return this.each(function() {
			var img, wrap, options, map, canvas, canvas_always, mouseover, highlighted_shape, usemap;
			img = $(this);

			if(!is_image_loaded(this)) {
				// If the image isn't fully loaded, this won't work right.  Try again later.
				return window.setTimeout(function() {
					img.maphilight(opts);
				}, 200);
			}

			options = $.extend({}, opts, $.metadata ? img.metadata() : false, img.data('maphilight'));

			// jQuery bug with Opera, results in full-url#usemap being returned from jQuery's attr.
			// So use raw getAttribute instead.
			usemap = img.get(0).getAttribute('usemap');

			map = $('map[name="'+usemap.substr(1)+'"]');

			if(!(img.is('img,input[type="image"]') && usemap && map.size() > 0)) {
				return;
			}

			if(img.hasClass('maphilighted')) {
				// We're redrawing an old map, probably to pick up changes to the options.
				// Just clear out all the old stuff.
				var wrapper = img.parent();
				img.insertBefore(wrapper);
				wrapper.remove();
				$(map).unbind('.maphilight').find('area[coords]').unbind('.maphilight');
			}

			wrap = $('<div></div>').css({
				display:'block',
				background:'url("'+this.src+'")',
				position:'relative',
				padding:0,
				width:this.width,
				height:this.height
				});
			if(options.wrapClass) {
				if(options.wrapClass === true) {
					wrap.addClass($(this).attr('class'));
				} else {
					wrap.addClass(options.wrapClass);
				}
			}
			img.before(wrap).css('opacity', 0).css(canvas_style).remove();
			if($.browser.msie) { img.css('filter', 'Alpha(opacity=0)'); }
			wrap.append(img);
			
			canvas = create_canvas_for(this);
			$(canvas).css(canvas_style);
			canvas.height = this.height;
			canvas.width = this.width;
			
			mouseover = function(e) {
				var shape, area_options;
				area_options = options_from_area(this, options);
				if(
					!area_options.neverOn
					&&
					!area_options.alwaysOn
				) {
					shape = shape_from_area(this);
					add_shape_to(canvas, shape[0], shape[1], area_options, "highlighted");
					if(area_options.groupBy) {
						var areas;
						// two ways groupBy might work; attribute and selector
						if(/^[a-zA-Z][\-a-zA-Z]+$/.test(area_options.groupBy)) {
							areas = map.find('area['+area_options.groupBy+'="'+$(this).attr(area_options.groupBy)+'"]');
						} else {
							areas = map.find(area_options.groupBy);
						}
						var first = this;
						areas.each(function() {
							if(this != first) {
								var subarea_options = options_from_area(this, options);
								if(!subarea_options.neverOn && !subarea_options.alwaysOn) {
									var shape = shape_from_area(this);
									add_shape_to(canvas, shape[0], shape[1], subarea_options, "highlighted");
								}
							}
						});
					}
					// workaround for IE7, IE8 not rendering the final rectangle in a group
					if(!has_canvas) {
						$(canvas).append('<v:rect></v:rect>');
					}
				}
			}

			$(map).bind('alwaysOn.maphilight', function() {
				// Check for areas with alwaysOn set. These are added to a *second* canvas,
				// which will get around flickering during fading.
				if(canvas_always) {
					clear_canvas(canvas_always);
				}
				if(!has_canvas) {
					$(canvas).empty();
				}
				$(map).find('area[coords]').each(function() {
					var shape, area_options;
					area_options = options_from_area(this, options);
					if(area_options.alwaysOn) {
						if(!canvas_always && has_canvas) {
							canvas_always = create_canvas_for(img[0]);
							$(canvas_always).css(canvas_style);
							canvas_always.width = img[0].width;
							canvas_always.height = img[0].height;
							img.before(canvas_always);
						}
						area_options.fade = area_options.alwaysOnFade; // alwaysOn shouldn't fade in initially
						shape = shape_from_area(this);
						if (has_canvas) {
							add_shape_to(canvas_always, shape[0], shape[1], area_options, "");
						} else {
							add_shape_to(canvas, shape[0], shape[1], area_options, "");
						}
					}
				});
			});
			
			$(map).trigger('alwaysOn.maphilight').find('area[coords]')
				.bind('mouseover.maphilight', mouseover)
				.bind('mouseout.maphilight', function(e) { clear_canvas(canvas); });
			
			img.before(canvas); // if we put this after, the mouseover events wouldn't fire.
			
			img.addClass('maphilighted');
		});
	};
	$.fn.maphilight.defaults = {
		fill: true,
		fillColor: '000000',
		fillOpacity: 0.2,
		stroke: true,
		strokeColor: 'cacaca',
		strokeOpacity: 1,
		strokeWidth: 1,
		fade: true,
		alwaysOn: false,
		neverOn: false,
		groupBy: false,
		wrapClass: true,
		// plenty of shadow:
		shadow: false,
		shadowX: 0,
		shadowY: 0,
		shadowRadius: 6,
		shadowColor: '000000',
		shadowOpacity: 0.8,
		shadowPosition: 'outside',
		shadowFrom: false
	};
})(jQuery);
