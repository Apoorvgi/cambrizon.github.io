!function(){entrance={},entrance.duration="700",entrance.distance="100",entrance.heightOffset=100,entrance.isElemInView=function(e){var t=e.getBoundingClientRect();return t.top+entrance.heightOffset>=0&&t.top+entrance.heightOffset<=window.innerHeight||t.bottom+entrance.heightOffset>=0&&t.bottom+entrance.heightOffset<=window.innerHeight||t.top+entrance.heightOffset<0&&t.bottom+entrance.heightOffset>window.innerHeight},entrance.setInitialStyles=function(e){document.body.style.overflowX="hidden";var t=e.getAttribute("data-entrance"),n=e.getAttribute("data-entrance-delay");e.style.transition="all "+entrance.duration/1e3+"s ease",n&&(e.style.transitionDelay=n/1e3+"s"),"fade"==t&&(e.style.opacity="0"),"from-left"==t&&(e.style.opacity="0",e.style.transform="translate(-"+entrance.distance+"px, 0)"),"from-right"==t&&(e.style.opacity="0",e.style.transform="translate("+entrance.distance+"px, 0)"),"from-top"==t&&(e.style.opacity="0",e.style.transform="translate(0, -"+entrance.distance+"px)"),"from-bottom"==t&&(e.style.opacity="0",e.style.transform="translate(0, "+entrance.distance+"px)")},entrance.enter=function(e){e.style.visibility="visible",e.style.opacity="1",e.style.transform="translate(0, 0)",e.className+=" has-entered"},entrance.viewportChange=function(){Array.prototype.map.call(entrance.elements,function(e){if(entrance.isElemInView(e)){var t=e.classList.contains("has-entered");t||entrance.enter(e)}})},entrance.init=function(){entrance.elements=document.querySelectorAll("[data-entrance]"),Array.prototype.map.call(entrance.elements,function(e){entrance.setInitialStyles(e),entrance.isElemInView(e)&&addEventListener("load",function(){entrance.enter(e)},!1)})},addEventListener("DOMContentLoaded",entrance.init,!1),addEventListener("scroll",entrance.viewportChange,!1),addEventListener("resize",entrance.viewportChange,!1)}();jQuery(document).ready(function($){var $ease='easeOutExpo';anime({targets:document.getElementsByClassName('js-page-item'),scale:[{value:0.1,duration:0},{value:1,duration:1000,easing:$ease}],opacity:[{value:0,duration:0},{value:1,duration:1000,easing:$ease}],delay:function(el,i,l){return i*150;},complete:function(a){anime({targets:document.getElementsByClassName('js-page-item'),translateY:[{value:0,duration:0,delay:0},{value:10,duration:2000,delay:function(el,i,l){return i*200;},easing:'linear'}],direction:'alternate',loop:true});}});});