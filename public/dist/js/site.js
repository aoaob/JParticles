var localConfig={plugin:{prettify:{css:"/plugin/prettify/prettify.min.css",js:"/plugin/prettify/prettify.min.js"}}},prodConfig={plugin:{prettify:{css:"//cdn.bootcss.com/prettify/r298/prettify.min.css",js:"//cdn.bootcss.com/prettify/r298/prettify.min.js"}}},siteConfig=$.extend(!0,{},localConfig),isProdEnv="localhost"!==location.hostname&&"127.0.0.1"!==location.hostname;isProdEnv&&$.extend(!0,siteConfig,prodConfig),$(function(){function t(t,e,n){var i=document.createElement("script");i.onload=e||function(){},i.onerror=n||function(){},i.src=t,document.getElementsByTagName("head")[0].appendChild(i)}function e(t,e,n){var i=document.createElement("link");i.onload=e||function(){},i.onerror=n||function(){},i.href=t,i.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(i)}function n(t,e){t.find(".active").removeClass("active"),e.addClass("active")}function i(t,e,n){if(!e&&!n)return t;var i,o=new Date;return function(s){var c=this;e?(clearTimeout(i),i=setTimeout(function(){t.call(c,s)},e)):new Date-o>n&&(o=new Date,t.call(c,s))}}function o(){function t(t){n(o,t),e(t)}function e(t){if(!isMobile){var e=t.position().left+parseInt(t.css("paddingLeft"))+.5;c.css({width:t.width(),transform:"translate("+e+"px,0)"})}}var o=$(".com-header .nav"),s=o.find(".active"),c=o.find(".slideblock");e(s),setTimeout(function(){c.addClass("animation").removeClass("hidden")},0),o.find("a").hover(function(){t($(this))},function(){t(s)}),$(window).resize(i(function(){e(o.find(".active"))},400))}function s(){$("body").height()>$(".com-header").outerHeight()+$(".com-body").outerHeight()+$(".com-footer").outerHeight()?$(".com-footer").css({width:"100%",position:"absolute",zIndex:8,bottom:0}):$(".com-footer").removeAttr("style"),$(".com-footer").show()}function c(){$(".mobile-menu").click(function(){$(".com-header .nav").toggleClass("menu-show")}),$(document).on("click.hideMenu",function(t){var e=$(t.target);e.parents(".nav").length||e.parents(".mobile-menu").length||e.hasClass("mobile-menu")||e.hasClass("menu-show")||$(".com-header .nav").removeClass("menu-show")})}if(window.isMobile="block"===$(".mobile-menu").css("display"),$(window).resize(function(){window.isMobile="block"===$(".mobile-menu").css("display"),s()}),o(),s(),function(){isProdEnv&&setTimeout(function(){t("https://s11.cnzz.com/z_stat.php?id=1260419466&web_id=1260419466")},1e3)}(),$("#page-example").length){var a=function(){$(".prettyprint").length?prettyPrint():$(".quick-getting").length&&"import use use-method default-config common-config".split(" ").forEach(function(t){$.get("/code-tpl/"+t+".html",function(e){if($("."+t).text(e).addClass("prettyprint"),prettyPrint(),"common-config"===t){var n=$(location.hash).offset();n&&$(window).scrollTop(n.top)}})})};e(siteConfig.plugin.prettify.css,function(){},function(){e(localConfig.plugin.prettify.css)}),t(siteConfig.plugin.prettify.js,a,function(){t(localConfig.plugin.prettify.js,a)}),function(){var t=$(window),e=($(document),$(".com-footer"),$("#page-example > .com-body > .menu")),n=$("#page-example > .com-body > .main"),i=function(){var i=t.scrollTop();e[i>n.offset().top?"addClass":"removeClass"]("fixed")};i(),t.on("resize, scroll",i)}()}/\/examples\/quick-getting/i.test(location.href)?window.localStorage.setItem("read",!0):window.localStorage.getItem("read")||$(".com-body >.menu >h5:eq(1), .example-menu a:eq(1)").append('<i class="essential">必读</i>'),function(){function t(){var t=$(window).scrollTop(),e=$(window).height();$(".instance").each(function(){if(this.effect&&!this.userClickPaused){var n=$(this),i=n.offset().top,o=n.outerHeight();t>i+o||t+e<i?this.effect.pause():this.effect.open()}})}var e='<div class="ctrl"><div class="btn btn-default open">开启·OPEN</div><div class="btn btn-default pause">暂停·PAUSE</div></div>',n=function(t){var e=$(this),n=e.hasClass("open")?"open":"pause",t=t.clientX?e.parents(".instance")[0]:t;t.effect&&(t.effect[n](),t.userClickPaused="pause"===n)};$(".instance").each(function(){"none"!==$(this).attr("data-ctrl")&&$(this).append(e).on("click.ctrl",".ctrl .btn",n)}),$("#first-instance-ctrl").on("click",".btn",function(){n.call(this,$(".instance:first")[0])}),window.bind=function(t,e){var n=$(".instance").eq(t);n[0].effect=e(n.find(".demo")[0])},setTimeout(function(){function e(){clearTimeout(n),n=setTimeout(function(){t()},200)}t();var n=null;$(window).resize(e).scroll(e)},0)}(),c()});