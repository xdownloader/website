/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});
/*! Lity - v2.3.1 - 2018-04-20
* http://sorgalla.com/lity/
* Copyright (c) 2015-2018 Jan Sorgalla; Licensed MIT */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=b(a,require("jquery")):a.lity=b(a,a.jQuery||a.Zepto)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a){var b=B();return N&&a.length?(a.one(N,b.resolve),setTimeout(b.resolve,500)):b.resolve(),b.promise()}function d(a,c,d){if(1===arguments.length)return b.extend({},a);if("string"==typeof c){if(void 0===d)return void 0===a[c]?null:a[c];a[c]=d}else b.extend(a,c);return this}function e(a){for(var b,c=decodeURI(a.split("#")[0]).split("&"),d={},e=0,f=c.length;e<f;e++)c[e]&&(b=c[e].split("="),d[b[0]]=b[1]);return d}function f(a,c){return a+(a.indexOf("?")>-1?"&":"?")+b.param(c)}function g(a,b){var c=a.indexOf("#");return-1===c?b:(c>0&&(a=a.substr(c)),b+a)}function h(a){return b('<span class="lity-error"/>').append(a)}function i(a,c){var d=c.opener()&&c.opener().data("lity-desc")||"Image with no description",e=b('<img src="'+a+'" alt="'+d+'"/>'),f=B(),g=function(){f.reject(h("Failed loading image"))};return e.on("load",function(){if(0===this.naturalWidth)return g();f.resolve(e)}).on("error",g),f.promise()}function j(a,c){var d,e,f;try{d=b(a)}catch(a){return!1}return!!d.length&&(e=b('<i style="display:none !important"/>'),f=d.hasClass("lity-hide"),c.element().one("lity:remove",function(){e.before(d).remove(),f&&!d.closest(".lity-content").length&&d.addClass("lity-hide")}),d.removeClass("lity-hide").after(e))}function k(a){var c=J.exec(a);return!!c&&o(g(a,f("https://www.youtube"+(c[2]||"")+".com/embed/"+c[4],b.extend({autoplay:1},e(c[5]||"")))))}function l(a){var c=K.exec(a);return!!c&&o(g(a,f("https://player.vimeo.com/video/"+c[3],b.extend({autoplay:1},e(c[4]||"")))))}function m(a){var c=M.exec(a);return!!c&&(0!==a.indexOf("http")&&(a="https:"+a),o(g(a,f("https://www.facebook.com/plugins/video.php?href="+a,b.extend({autoplay:1},e(c[4]||""))))))}function n(a){var b=L.exec(a);return!!b&&o(g(a,f("https://www.google."+b[3]+"/maps?"+b[6],{output:b[6].indexOf("layer=c")>0?"svembed":"embed"})))}function o(a){return'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+a+'"/></div>'}function p(){return z.documentElement.clientHeight?z.documentElement.clientHeight:Math.round(A.height())}function q(a){var b=v();b&&(27===a.keyCode&&b.options("esc")&&b.close(),9===a.keyCode&&r(a,b))}function r(a,b){var c=b.element().find(G),d=c.index(z.activeElement);a.shiftKey&&d<=0?(c.get(c.length-1).focus(),a.preventDefault()):a.shiftKey||d!==c.length-1||(c.get(0).focus(),a.preventDefault())}function s(){b.each(D,function(a,b){b.resize()})}function t(a){1===D.unshift(a)&&(C.addClass("lity-active"),A.on({resize:s,keydown:q})),b("body > *").not(a.element()).addClass("lity-hidden").each(function(){var a=b(this);void 0===a.data(F)&&a.data(F,a.attr(E)||null)}).attr(E,"true")}function u(a){var c;a.element().attr(E,"true"),1===D.length&&(C.removeClass("lity-active"),A.off({resize:s,keydown:q})),D=b.grep(D,function(b){return a!==b}),c=D.length?D[0].element():b(".lity-hidden"),c.removeClass("lity-hidden").each(function(){var a=b(this),c=a.data(F);c?a.attr(E,c):a.removeAttr(E),a.removeData(F)})}function v(){return 0===D.length?null:D[0]}function w(a,c,d,e){var f,g="inline",h=b.extend({},d);return e&&h[e]?(f=h[e](a,c),g=e):(b.each(["inline","iframe"],function(a,b){delete h[b],h[b]=d[b]}),b.each(h,function(b,d){return!d||(!(!d.test||d.test(a,c))||(f=d(a,c),!1!==f?(g=b,!1):void 0))})),{handler:g,content:f||""}}function x(a,e,f,g){function h(a){k=b(a).css("max-height",p()+"px"),j.find(".lity-loader").each(function(){var a=b(this);c(a).always(function(){a.remove()})}),j.removeClass("lity-loading").find(".lity-content").empty().append(k),m=!0,k.trigger("lity:ready",[l])}var i,j,k,l=this,m=!1,n=!1;e=b.extend({},H,e),j=b(e.template),l.element=function(){return j},l.opener=function(){return f},l.options=b.proxy(d,l,e),l.handlers=b.proxy(d,l,e.handlers),l.resize=function(){m&&!n&&k.css("max-height",p()+"px").trigger("lity:resize",[l])},l.close=function(){if(m&&!n){n=!0,u(l);var a=B();if(g&&(z.activeElement===j[0]||b.contains(j[0],z.activeElement)))try{g.focus()}catch(a){}return k.trigger("lity:close",[l]),j.removeClass("lity-opened").addClass("lity-closed"),c(k.add(j)).always(function(){k.trigger("lity:remove",[l]),j.remove(),j=void 0,a.resolve()}),a.promise()}},i=w(a,l,e.handlers,e.handler),j.attr(E,"false").addClass("lity-loading lity-opened lity-"+i.handler).appendTo("body").focus().on("click","[data-lity-close]",function(a){b(a.target).is("[data-lity-close]")&&l.close()}).trigger("lity:open",[l]),t(l),b.when(i.content).always(h)}function y(a,c,d){a.preventDefault?(a.preventDefault(),d=b(this),a=d.data("lity-target")||d.attr("href")||d.attr("src")):d=b(d);var e=new x(a,b.extend({},d.data("lity-options")||d.data("lity"),c),d,z.activeElement);if(!a.preventDefault)return e}var z=a.document,A=b(a),B=b.Deferred,C=b("html"),D=[],E="aria-hidden",F="lity-"+E,G='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',H={esc:!0,handler:null,handlers:{image:i,inline:j,youtube:k,vimeo:l,googlemaps:n,facebookvideo:m,iframe:o},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'},I=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,J=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,K=/(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,L=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,M=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,N=function(){var a=z.createElement("div"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return b[c];return!1}();return i.test=function(a){return I.test(a)},y.version="2.3.1",y.options=b.proxy(d,y,H),y.handlers=b.proxy(d,y,H.handlers),y.current=v,b(z).on("click.lity","[data-lity]",y),y});
(function() {
  var App;

  App = {
    init: function() {
      this.tmdb = {
        api_key: 'be7463424e04e25654a938f9a9951509',
        query_params: 'language=es-US&page=1&region=US&append_to_response=videos',
        base_uri: 'https://api.themoviedb.org/3/',
        images_uri: 'http://image.tmdb.org/t/p',
        timeout: 5000,
        image_size: '/w342',
        backdrop_size: '/w780',
        no_api: 'https://i.imgur.com/wBM0IWa.jpg'
      };
      this.set_handlers();
      return this.load_upcoming();
    },
    set_handlers: function() {
      $('body').on('touch click', '.movie-card', (function(_this) {
        return function(e) {
          return _this.load_movie_info($(e.currentTarget).attr('data-movie-id'));
        };
      })(this));
      $('body').on('touch click', '#modal-container', (function(_this) {
        return function(e) {
          $(e.currentTarget).addClass('out');
          return $('body').removeClass('modal-active');
        };
      })(this));
      $('body').on('touch click', '[data-action="nowplaying"]', (function(_this) {
        return function(e) {
          return _this.load_nowplaying();
        };
      })(this));
      $('body').on('touch click', '[data-action="upcoming"]', (function(_this) {
        return function(e) {
          return _this.load_upcoming();
        };
      })(this));
      $('#search').click((function(_this) {
        return function(e) {
          return _this.search();
        };
      })(this));
      return $('#query').keydown((function(_this) {
        return function(e) {
          if (e.keyCode === 13) {
            return _this.search();
          }
        };
      })(this));
    },
    api_call: function(url, method, query, cb) {
      var api_call_params;
      api_call_params = {};
      api_call_params.api_key = this.tmdb.api_key;
      api_call_params.language = 'en-US';
      api_call_params.region = 'US';
      api_call_params.append_to_response = 'videos';
      if (query !== '') {
        api_call_params.query = query;
      }
      return $.getJSON("" + url + method, api_call_params, function(data) {
        return cb(data);
      });
    },
    load_upcoming: function() {
      return this.api_call(this.tmdb.base_uri, 'movie/upcoming', '', (function(_this) {
        return function(data) {
          var ref;
          if (((ref = data.results) != null ? ref.length : void 0) > 0) {
            return _this.load_movies(data.results, true);
          } else {
            return alert('No results');
          }
        };
      })(this));
    },
    load_nowplaying: function() {
      return this.api_call(this.tmdb.base_uri, 'movie/now_playing', '', (function(_this) {
        return function(data) {
          var ref;
          if (((ref = data.results) != null ? ref.length : void 0) > 0) {
            return _this.load_movies(data.results, false);
          } else {
            return alert('No results');
          }
        };
      })(this));
    },
    search: function() {
      return this.api_call(this.tmdb.base_uri, 'search/movie', $('#query').val(), (function(_this) {
        return function(data) {
          var ref;
          _this.load_movies_search(data.results, false);
          if (((ref = data.results) != null ? ref.length : void 0) > 0) {
            return _this.load_movies(data.results, false);
          } else {
            return alert('No results');
          }
        };
      })(this));
    },
    load_movies: function(movies, show_countdown) {
      var api_call_params, i, len, movie, results;
      $('#info').empty();
      results = [];
      for (i = 0, len = movies.length; i < len; i++) {
        movie = movies[i];
        api_call_params = {};
        api_call_params.api_key = this.tmdb.api_key;
        api_call_params.language = 'es-US';
        api_call_params.region = 'US';
        api_call_params.append_to_response = 'videos';
        results.push(this.api_call(this.tmdb.base_uri, "movie/" + movie.id, api_call_params, (function(_this) {
          return function(data) {
            var datos, datos_popularity, datos_release_date, datos_runtime, detail_info, fecha_release, flex, inner, main_info, movie_info, movie_item, movie_item_inner, movie_spacer, overview, overview_info, poster_footer, poster_img, poster_info, poster_url, reminder, row, video_link;
            if (data.videos.results.length > 0 && data.videos.results[0].site === 'YouTube') {
              video_link = "https://www.youtube.com/embed/" + data.videos.results[0].key;
            } else {
              video_link = '';
            }
            if (movie.poster_path != null) {
              poster_url = "" + _this.tmdb.images_uri + _this.tmdb.image_size + data.poster_path;
            } else {
              poster_url = 'https://i.imgur.com/wBM0IWa.jpg';
            }
            movie_item = $('<div/>').addClass(' ');
            movie_item_inner = $('<div/>').addClass('overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item  text-white movie-card').attr('data-movie-id', data.id);
            if (show_countdown === true) {
              movie_item_inner;
            }
            movie_spacer = $('<div/>').addClass('absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent');
            movie_info = $('<div/>').addClass('relative cursor-pointer group z-10 px-5 pt-10 space-y-6 movie_info').attr('data-lity', '').attr('href', video_link);
            poster_img = $('<img/>').addClass('absolute inset-0 transform w-full -translate-y-4').attr("src", "" + poster_url).attr('style', "filter: grayscale(0);");
            poster_info = $('<div/>').addClass('poster__info align-self-end w-full');
            main_info = $('<div/>').addClass('h-32');
            overview_info = $('<div/>').addClass('relative overview_info');
            detail_info = $('<div/>').addClass('space-y-6 detail_info');
            inner = $('<div/>').addClass('flex flex-col space-y-2 inner');
            flex = $('<div/>').addClass('flex flex-col');
            row = $('<div/>').addClass('flex flex-row');
            datos = $('<div/>').addClass('flex flex-row justify-between datos');
            datos_popularity = $('<div/>').addClass('flex flex-col datos_col');
            datos_release_date = $('<div/>').addClass('flex flex-col datos_col');
            datos_runtime = $('<div/>').addClass('flex flex-col datos_col');
            overview = $('<div/>').addClass('flex flex-col overview');
            poster_footer = $('<div/>').addClass('poster__footer flex flex-row relative pb-5 space-x-4 z-10');
            movie_item_inner.append(poster_info);
            movie_item_inner.append(movie_spacer);
            movie_item_inner.append(movie_info);
            movie_item_inner.append(poster_footer);
            movie_info.append(poster_info);
            poster_info.append(main_info);
            poster_info.append(detail_info);
            detail_info.append(inner);
            detail_info.append(flex);
            detail_info.append(datos);
            detail_info.append(overview);
            datos.append(datos_popularity);
            datos.append(datos_release_date);
            datos.append(datos_runtime);
            overview.append(flex);
            movie_item_inner.append(poster_img);
            movie_item_inner.append(poster_footer);
            poster_info.append($('<div/>').attr('data-countdown', data.release_date).addClass('absolute inset-x-0 top-0 pt-5 w-full mx-auto timer text-2xl uppercase text-center drop-shadow-sm font-bold text-white'));
            inner.prepend($('<a/>').addClass('relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700').html('<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" clip-rule="evenodd"/></svg>').append($('<div/>').addClass('absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2').text("Trailer")));
            inner.append($('<h3/>').addClass('text-2xl font-bold text-white').text("" + data.title));
            inner.append($('<div/>').addClass('mb-0 text-lg text-gray-400').text("" + data.tagline));
            datos_popularity.append($('<div/>').addClass('text-sm text-gray-400').text("Popularity:"));
            datos_popularity.prepend($('<div/>').addClass('popularity').text("" + data.popularity));
            datos_release_date.prepend($('<div/>').addClass('text-sm text-gray-400').text("Release date:"));
            datos_release_date.prepend($('<div/>').addClass('release').text("" + data.release_date));
            datos_runtime.prepend($('<div/>').addClass('text-sm text-gray-400').text("Runtime:"));
            datos_runtime.prepend($('<div/>').addClass('release').text(data.runtime + " min"));
            overview.append($('<div/>').addClass('text-xs text-gray-400 mb-2').text("Overview:"));
            overview.append($('<p/>').addClass('text-xs text-gray-100 mb-4').text("" + data.overview));
            fecha_release = data.release_date.replace(/\-/g, "");
            reminder = "http://www.google.com/calendar/event?action=TEMPLATE&dates=" + fecha_release + "T010000Z%2F" + fecha_release + "T010000Z&text=" + data.title + "%20%2D%20Movie%20Premiere&location=http%3A%2F%2Fmoviedates.info&details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info";
            poster_footer.append($('<a/>').addClass('flex items-center py-2 px-4 rounded-full mx-auto text-white  bg-red-500 hover:bg-red-700 ').attr('href', reminder).attr('target', '_blank').html('<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>').append($('<div/>').addClass('text-sm  text-white ml-2').text("Set reminder")));
            movie_item.append(movie_item_inner);
            $('#info').append(movie_item);
            return _this.load_countdown();
          };
        })(this)));
      }
      return results;
    },
    load_movies_search: function(movies, show_countdown) {
      var api_call_params, i, len, movie, results;
      $('#info').empty();
      results = [];
      for (i = 0, len = movies.length; i < len; i++) {
        movie = movies[i];
        api_call_params = {};
        api_call_params.api_key = this.tmdb.api_key;
        api_call_params.language = 'es-US';
        api_call_params.region = 'US';
        api_call_params.append_to_response = 'videos';
        results.push(this.api_call(this.tmdb.base_uri, "movie/" + movie.id, api_call_params, (function(_this) {
          return function(data) {
            var datos, datos_popularity, datos_release_date, datos_runtime, detail_info, fecha_release, flex, inner, main_info, movie_info, movie_item, movie_item_inner, movie_spacer, overview, overview_info, poster_footer, poster_img, poster_info, poster_url, reminder, row, video_link;
            if (data.videos.results.length > 0 && data.videos.results[0].site === 'YouTube') {
              video_link = "https://www.youtube.com/embed/" + data.videos.results[0].key;
            } else {
              video_link = '';
            }
            if (movie.poster_path != null) {
              poster_url = "" + _this.tmdb.images_uri + _this.tmdb.image_size + data.poster_path;
            } else {
              poster_url = 'https://i.imgur.com/wBM0IWa.jpg';
            }
            movie_item = $('<div/>').addClass(' ');
            movie_item_inner = $('<div/>').addClass('overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item  text-white movie-card').attr('data-movie-id', data.id);
            if (show_countdown === true) {
              movie_item_inner;
            }
            movie_spacer = $('<div/>').addClass('absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent');
            movie_info = $('<div/>').addClass('relative cursor-pointer group z-10 px-5 pt-5 md:px-10 md:pt-10 space-y-6 movie_info').attr('data-lity', '').attr('href', video_link);
            poster_img = $('<img/>').addClass('absolute inset-0 transform w-full -translate-y-4').attr("src", "" + poster_url).attr('style', "filter: grayscale(0);");
            poster_info = $('<div/>').addClass('poster__info align-self-end w-full');
            main_info = $('<div/>').addClass('h-32');
            overview_info = $('<div/>').addClass('relative overview_info');
            detail_info = $('<div/>').addClass('space-y-6 detail_info');
            inner = $('<div/>').addClass('flex flex-col space-y-2 inner');
            flex = $('<div/>').addClass('flex flex-col');
            row = $('<div/>').addClass('flex flex-row');
            datos = $('<div/>').addClass('flex flex-row justify-between datos');
            datos_popularity = $('<div/>').addClass('flex flex-col datos_col');
            datos_release_date = $('<div/>').addClass('flex flex-col datos_col');
            datos_runtime = $('<div/>').addClass('flex flex-col datos_col');
            overview = $('<div/>').addClass('flex flex-col overview');
            poster_footer = $('<div/>').addClass('poster__footer flex flex-row relative pb-10 space-x-4 z-10');
            movie_item_inner.append(poster_info);
            movie_item_inner.append(movie_spacer);
            movie_item_inner.append(movie_info);
            movie_info.append(poster_info);
            poster_info.append(main_info);
            poster_info.append(detail_info);
            detail_info.append(inner);
            detail_info.append(flex);
            detail_info.append(datos);
            detail_info.append(overview);
            datos.append(datos_popularity);
            datos.append(datos_release_date);
            datos.append(datos_runtime);
            overview.append(flex);
            movie_item_inner.append(poster_img);
            inner.prepend($('<a/>').addClass('relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700').html('<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" clip-rule="evenodd"/></svg>').append($('<div/>').addClass('absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2').text("Trailer")));
            inner.append($('<h3/>').addClass('text-2xl font-bold text-white').text("" + data.title));
            inner.append($('<div/>').addClass('mb-0 text-lg text-gray-400').text("" + data.tagline));
            datos_popularity.append($('<div/>').addClass('text-sm text-gray-400').text("Popularity:"));
            datos_popularity.prepend($('<div/>').addClass('popularity').text("" + data.popularity));
            datos_release_date.prepend($('<div/>').addClass('text-sm text-gray-400').text("Release date:"));
            datos_release_date.prepend($('<div/>').addClass('release').text("" + data.release_date));
            datos_runtime.prepend($('<div/>').addClass('text-sm text-gray-400').text("Runtime:"));
            datos_runtime.prepend($('<div/>').addClass('release').text(data.runtime + " min"));
            overview.append($('<div/>').addClass('text-xs text-gray-400 mb-2').text("Overview:"));
            overview.append($('<p/>').addClass('text-xs text-gray-100 mb-10').text("" + data.overview));
            fecha_release = data.release_date.replace(/\-/g, "");
            reminder = "http://www.google.com/calendar/event?action=TEMPLATE&dates=" + fecha_release + "T010000Z%2F" + fecha_release + "T010000Z&text=" + data.title + "%20%2D%20Movie%20Premiere&location=http%3A%2F%2Fmoviedates.info&details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info";
            poster_footer.append($('<a/>').addClass('flex items-center py-2 px-4 rounded-full mx-auto text-white  bg-red-500 hover:bg-red-700 ').attr('href', reminder).attr('target', '_blank').html('<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>').append($('<div/>').addClass('text-sm  text-white ml-2').text("View now")));
            movie_item.append(movie_item_inner);
            $('#info').append(movie_item);
            return _this.load_countdown();
          };
        })(this)));
      }
      return results;
    },
    load_countdown: function() {
      var element, final_date, i, len, ref, results;
      ref = $('[data-countdown]');
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        final_date = $(element).attr('data-countdown');
        results.push($(element).countdown(final_date, function(event) {
          return $(element).html(event.strftime('%D Days %H:%M:%S'));
        }));
      }
      return results;
    }
  };

  $(function() {
    return App.init();
  });

}).call(this);
