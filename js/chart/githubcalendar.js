"use strict";function _createForOfIteratorHelper(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){a=!0,o=t},f:function(){try{r||null==n.return||n.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}CanvasRenderingContext2D.prototype.roundRect=function(t,e,n,i,o){return i<2*(o=n<2*o?n/2:o)&&(o=i/2),this.beginPath(),this.moveTo(t+o,e),this.arcTo(t+n,e,t+n,e+i,o),this.arcTo(t+n,e+i,t,e+i,o),this.arcTo(t,e+i,t,e,o),this.arcTo(t,e,t+n,e,o),this.closePath(),this};var github_canlendar=function(e,m){var y,n,i,o,r,a,l=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],d="",c="",s="",v=0,p=0,w=[],g=[],f=[],u=0,h=0,x=[],b=[];function _(t){var e,n=_createForOfIteratorHelper(v[t]);try{for(n.s();!(e=n.n()).done;){var i=e.value;u+=i.count}}catch(t){n.e(t)}finally{n.f()}}function k(){var t,e=_createForOfIteratorHelper(g);try{for(e.s();!(t=e.n()).done;){var n=t.value;p+=n.count}}catch(t){e.e(t)}finally{e.f()}}fetch("https://python-github-calendar-api.vercel.app/api?"+e).then(function(t){return t.json()}).then(function(t){v=t.contributions,i=t.total,x=v[48],r=v[47],o=t.contributions[0],g=t.contributions[52],f=t.contributions[51],h=g.length-1,d=g[h].date,n=o[0].date,a=+d.substring(5,7),b=l.splice(a,12-a),y=b.concat(l),function(t){{var e;6===h?(s=g[0].date,k()):(e=0,e=t.contributions[51],s=e[h+1].date,k(),function(){for(var t=h;t<f.length;t++)p+=f[t].count}())}}(t),c=0===h?(_(52),_(51),_(50),_(49),_(48),u+=r[6].count,r[6].date):(_(52),_(51),_(50),_(49),function(){for(var t=h-1;t<x.length;t++)u+=x[t].count}(),x[h-1].date);t=z(y,v,e,m,i,u,p,n,d,s,c);append_div_gitcalendar(github_container,t),document.getElementById("github_loading")&&document.getElementById("github_loading").remove(),function(){var t=window.devicePixelRatio||1,s=document.getElementById("git_tooltip_container"),p="",g="",f="",u="",e=document.getElementById("gitcanvas");e.style.width="100%",e.style.height="";document.getElementById("gitmessage");var n=e.getContext("2d"),i=e.width=document.getElementById("gitcalendarcanvasbox").offsetWidth,o=e.height=8.64*e.width/v.length;!function(t,e,n){var i,o;1<n&&(i=t.width,o=t.height,t.width=i*n,t.height=o*n,t.style.width="100%",t.style.height=o+"px",e.scale(n,n))}(e,n,t);var r,a=o/9,h=.8*a,l={x:.02*i,y:.025*i};if(700<document.body.clientWidth){n.font="bold 6px serif",n.fillStyle="#aaa",n.fillText("日",0,1.9*a),n.fillText("二",0,3.9*a),n.fillText("四",0,5.9*a),n.fillText("六",0,7.9*a);var d,c=i/24;for(d in y)n.fillText(y[d],c,.7*a),c+=i/12}for(r in e.onmousemove=function(t){document.querySelector(".gitmessage")&&(s.innerHTML=""),function(t,e){var n,i=t.getBoundingClientRect(),o=e.clientX-i.left*(t.width/i.width),r=e.clientY-i.top*(t.height/i.height),a=_createForOfIteratorHelper(w);try{for(a.s();!(n=a.n()).done;){var l=n.value,d=o-l.x,c=r-l.y;0<d&&d<h&&0<c&&c<h&&(f=l.date,u=l.count,p=e.clientX-100,g=e.clientY-60,html=I(p,g,f,u),append_div_gitcalendar(s,html))}}catch(t){a.e(t)}finally{a.f()}}(e,t)},s.onmousemove=function(t){document.querySelector(".gitmessage")&&(s.innerHTML="")},v){for(var x in weekdata=v[r],weekdata){var b={date:"",count:"",x:0,y:0};w.push(b),n.shadowOffsetY=1,n.shadowOffsetX=1,n.shadowColor="rgba(200,200,200,.8)",n.shadowBlur=1,n.fillStyle=T(m,weekdata[x].count),l.y=Math.round(100*l.y)/100,b.date=weekdata[x].date,b.count=weekdata[x].count,b.x=l.x,b.y=l.y,n.roundRect(l.x,l.y,h,h,1.9),n.fill(),l.y=l.y+a}l.y=.025*i,l.x=l.x+a}}()}).catch(function(t){console.log(t)}),window.onscroll=function(){document.querySelector(".gitmessage")&&(git_tooltip_container.innerHTML="")};var T=function(t,e){if(0!==e)return e<2?t[1]:e<20?t[parseInt(e/2)]:t[9];parseInt(e/2);return t[0]},I=function(t,e,n,i){return""},z=function(t,e,n,i,o,r,a,l,d,c,s){var p,g="";return g+='<div class="position-relative"><div class="border py-2 graph-before-activity-overview"><div class="js-gitcalendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas gitcalendar-graph height-full text-center"><div id="gitcalendarcanvasbox"> <canvas id="gitcanvas" style="animation: none;"></canvas></div></div>'+(p="",p+='<div id="git_tooltip_container"></div><div class="contrib-footer clearfix mt-1 mx-3 px-3 pb-1"><div class="float-left text-gray">Github 2020-2021 <a href="https://github.com/'+n+'" target="blank">@'+n+'</a></div><div class="contrib-legend text-gray">Less <ul class="legend"><li style="background-color:'+i[0]+'"></li><li style="background-color:'+i[2]+'"></li><li style="background-color:'+i[4]+'"></li><li style="background-color:'+i[6]+'"></li><li style="background-color:'+i[8]+'"></li></ul>More </div></div>')+"</div></div>"+A()},A=function(){return'<style>#github_container{text-align:center;margin:.2rem auto;width:100%; height:100%;display:flex;display:-webkit-flex;justify-content:center;align-items:center;flex-wrap:wrap;}.gitcalendar-graph text.wday,.gitcalendar-graph text.month{font-size:10px;fill:#aaa;}.contrib-legend{text-align:right;padding:0 14px 10px 0;display:inline-block;float:right;}.contrib-legend .legend{display:inline-block;list-style:none;margin:0 5px;position:relative;bottom:-1px;padding:0;}.contrib-legend .legend li{display:inline-block;width:10px;height:10px;}.text-small{font-size:12px;color:#767676;}.gitcalendar-graph{padding:15px 0 0;text-align:center;}.contrib-column{text-align:center;border-left:1px solid #ddd;border-top:1px solid #ddd;font-size:11px;}.contrib-column-first{border-left:0;}.table-column{padding:10px;display:table-cell;flex:1;vertical-align:top;}.contrib-number{font-weight:300;line-height:1.3em;font-size:24px;display:block;}.gitcalendar img.spinner{width:70px;margin-top:50px;min-height:70px;}.monospace{text-align:center;color:#000;font-family:monospace;}.monospace a{color:#1D75AB;text-decoration:none;}.contrib-footer{font-size:11px;padding:0 10px 12px;text-align:left;width:100%;box-sizing:border-box;height:26px;}.left.text-muted{float:left;margin-left:9px;color:#767676;}.left.text-muted a{color:#4078c0;text-decoration:none;}.left.text-muted a:hover,.monospace a:hover{text-decoration:underline;}h2.f4.text-normal.mb-3{display:none;}.float-left.text-gray{float:left;}#user-activity-overview{display:none;}.day-tooltip{white-space:nowrap;position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.85);border-radius:3px;display:none;pointer-events:none;}.day-tooltip strong{color:rgba(0, 0, 0, .85);}.day-tooltip.is-visible{display:block;}.day-tooltip:after{position:absolute;bottom:-10px;left:50%;width:5px;height:5px;box-sizing:border-box;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.85)}.position-relative{width:100%;}@media screen and (max-width:650px){.contrib-column{display:none}}.angle-wrapper{z-index:9999;display:inline;width:200px;height:40px;position:relative;padding:5px 0;background:rgba(0,0,0,0.);border-radius:8px;text-align:center;color:white;}.angle-box{position:fixed;padding:10px}.angle-wrapper span{padding-bottom:1em;}.angle-wrapper:before{content:"";width:0;height:0;border:10px solid transparent;border-top-color:rgba(0,0,0,0.8);position:absolute;left:47.5%;top:100%;}</style>'}},append_div_gitcalendar=function(t,e){if("string"==typeof e){var n=document.createElement("div");n.innerHTML=e;for(var i=document.createDocumentFragment();n.firstChild;)i.appendChild(n.firstChild);t.appendChild(i)}else t.appendChild(e)},loading_git=function(t){return'<div id="github_loading" style="width:10%;height:100%;margin:3rem auto;display: block"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve"><path fill="'+t+'" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(275.098 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg></div>'};!function(){var t=document.getElementById("github_container"),e=["rgba(235,237,240,.2)","#7bed9f","#5be988","#44d981","#24e260","#eccc68","#f1c40f","#ffa502","#ff6348","#ff6b81","#ff4757"];append_div_gitcalendar(t,loading_git(e[4])),github_canlendar("Uzizkp",e)}();