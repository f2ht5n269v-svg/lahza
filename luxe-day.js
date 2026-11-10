/* ===== لحظة: صفحة اليوم وبطاقاته (جلد ورق قديم) ===== */
(function(){
'use strict';
if(window.__lxd)return;window.__lxd=1;
var $=function(i){return document.getElementById(i)};

function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var GRAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .36 0 0 0 0 .25 0 0 0 0 .1 .55 0 0 0 -.1'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");
var STAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='s'><feTurbulence type='fractalNoise' baseFrequency='.011' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .45 0 0 0 0 .29 0 0 0 0 .09 1 0 0 0 -.34'/></filter><rect width='100%' height='100%' filter='url(#s)'/></svg>");
var LEATHER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .9 0 0 0 -.25'/></filter><rect width='100%' height='100%' filter='url(#l)'/></svg>");

function rough(){
 var p=[],n=14,i,x;
 for(i=0;i<=n;i++){x=Math.random()*1.3+(Math.random()<.14?1.1:0);p.push(x.toFixed(2)+'% '+(i/n*100).toFixed(1)+'%')}
 for(i=n;i>=0;i--){x=100-(Math.random()*1.3+(Math.random()<.14?1.1:0));p.push(x.toFixed(2)+'% '+(i/n*100).toFixed(1)+'%')}
 return 'polygon('+p.join(',')+')';
}

var css=[
/* خلفية الصفحة */
'#dayMomentsScreen{background:@@L,radial-gradient(ellipse at 50% 0%,#3d2a1c 0%,#1d130c 55%,#0a0604 100%)!important;color:#e6d5ab}',
':root[data-theme=light] #dayMomentsScreen{background:@@L,radial-gradient(ellipse at 50% 0%,#7a5a3b 0%,#4a321f 60%,#2a1a0e 100%)!important}',
'#dayMomentsScreen .btn-close{background:rgba(22,15,10,.7);border-color:rgba(212,175,55,.4);color:#e6cf8a}',
'#dayMomentsTitle{font:600 1.9rem/1.3 var(--fd);margin-bottom:34px;padding-bottom:20px;position:relative;background:linear-gradient(115deg,#8a6d1b 0%,#f2dc8f 28%,#b8932f 48%,#f6e7a8 70%,#8a6d1b 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;filter:drop-shadow(0 2px 3px rgba(0,0,0,.6));animation:lxdSheen 7s ease-in-out infinite}',
'#dayMomentsTitle::after{content:"✦";position:absolute;left:0;right:0;bottom:-4px;text-align:center;font-size:.9rem;color:#c9a94a;background:none;-webkit-text-fill-color:#c9a94a;line-height:1}',
'#dayMomentsGrid{gap:38px;padding:0 4px}',
/* البطاقة = ورقة رق */
'#dayMomentsGrid .moment-card{position:relative;border:0;border-radius:3px;overflow:visible;background:transparent;filter:drop-shadow(0 10px 18px rgba(0,0,0,.55));transform:rotate(var(--rt,0deg));transition:transform .45s cubic-bezier(.34,1.56,.64,1);animation:lxdDrop .7s cubic-bezier(.2,.9,.3,1) both;animation-delay:calc(var(--i,0)*.1s)}',
'#dayMomentsGrid .moment-card:active{transform:rotate(var(--rt,0deg)) scale(.975)}',
'#dayMomentsGrid .moment-card::before{content:"";position:absolute;inset:0;z-index:0;clip-path:var(--cp);-webkit-clip-path:var(--cp);background:@@G,@@S,radial-gradient(ellipse at 18% 10%,rgba(255,248,222,.85),transparent 55%),radial-gradient(ellipse at 90% 90%,rgba(125,82,30,.36),transparent 60%),linear-gradient(180deg,#ead9ac,#d3b97c);box-shadow:inset 0 0 40px rgba(95,58,16,.5)}',
'#dayMomentsGrid .moment-card>*{position:relative;z-index:1}',
'#dayMomentsGrid .moment-card::after{content:"";position:absolute;z-index:3;top:-7px;left:50%;width:15px;height:15px;margin-left:-7px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#f4dc92,#b8862f 55%,#5a3a0e);box-shadow:0 3px 5px rgba(0,0,0,.5)}',
'#dayMomentsGrid .moment-card>*:first-child{margin-top:14px}',
/* صورة بإطار قديم */
'#dayMomentsGrid .moment-card>img,#dayMomentsGrid .moment-card>.vthumb{display:block;width:calc(100% - 36px);margin:22px 18px 6px;border:7px solid #fffdf6;border-bottom-width:9px;border-radius:2px;box-shadow:0 3px 9px rgba(60,40,10,.35);background-color:#e8dfca;max-height:60vh;object-fit:contain}',
'#dayMomentsGrid .moment-card>.vthumb{aspect-ratio:16/9}',
/* نص مكتوب بالحبر على الورقة */
'#dayMomentsGrid .moment-card>.text-content{background:transparent!important;color:#33220e!important;min-height:130px;padding:32px 26px 18px;font:italic 1.3rem/2 var(--fq);text-shadow:none}',
'#dayMomentsGrid .moment-card>.text-content[style*="url"]{margin:22px 18px 6px;width:calc(100% - 36px);border:7px solid #fffdf6;border-bottom-width:9px;color:#fff!important;text-shadow:0 1px 6px rgba(0,0,0,.7)}',
'#dayMomentsGrid .moment-caption{color:#4a3518;font:italic 1.05rem/1.8 var(--fq);padding:8px 24px 0;text-align:center}',
'#dayMomentsGrid .moment-meta{border-top:0;padding:14px 22px 20px;position:relative}',
'#dayMomentsGrid .moment-meta::before{content:"";position:absolute;top:0;left:12%;right:12%;height:1px;background:linear-gradient(90deg,transparent,rgba(120,85,30,.55),transparent)}',
'#dayMomentsGrid .moment-time{color:#6b4a1c;font:500 .98rem var(--fd)}',
'#dayMomentsGrid .moment-fav{color:#9b2f22;text-shadow:0 1px 0 rgba(255,235,200,.5)}',
/* جار / تحقق = ختم شمع */
'#dayMomentsGrid .moment-meta .filter-chip{width:46px;height:46px;padding:0;border:0;border-radius:52% 48% 55% 45%/48% 54% 46% 52%;font:600 .78rem var(--fd);color:rgba(30,10,4,.68);background:radial-gradient(circle at 34% 28%,#b3584a,#7a2a1f 58%,#3a120c);box-shadow:inset 0 2px 2px rgba(255,236,205,.22),inset 0 -4px 7px rgba(0,0,0,.5),0 3px 7px rgba(50,26,6,.5);display:flex;align-items:center;justify-content:center;text-align:center;line-height:1.1;transition:transform .4s cubic-bezier(.34,1.56,.64,1)}',
'#dayMomentsGrid .moment-meta .filter-chip.active{background:radial-gradient(circle at 34% 28%,#8a9a5a,#566a31 58%,#26330f);color:rgba(14,22,6,.7)}',
'#dayMomentsGrid .moment-meta .filter-chip:active{transform:scale(.86) rotate(-6deg)}',
/* فاضي */
'#dayMomentsGrid .empty-state{color:#c9b27a}',
'@keyframes lxdDrop{from{opacity:0;transform:translateY(-22px) rotate(var(--rt,0deg))}to{opacity:1;transform:translateY(0) rotate(var(--rt,0deg))}}',
'@keyframes lxdSheen{0%,100%{background-position:0% 0}50%{background-position:100% 0}}',
'@media(prefers-reduced-motion:reduce){#dayMomentsGrid .moment-card{animation:none!important}}'
].join('');
css=css.split('@@G').join(GRAIN).split('@@S').join(STAIN).split('@@L').join(LEATHER);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* نضيف ميلان وحواف مختلفة لكل بطاقة بدون ما نعدّل أي شي ثاني */
function decorate(){
 var g=$('dayMomentsGrid');if(!g)return;
 var cards=g.querySelectorAll('.moment-card:not([data-lxd])'),k=0;
 for(var j=0;j<cards.length;j++){
  var c=cards[j];c.setAttribute('data-lxd','1');
  var seed=(parseInt(c.dataset.id,10)||j+1);
  c.style.setProperty('--rt',((((seed*37)%7)-3)*.28).toFixed(2)+'deg');
  c.style.setProperty('--cp',rough());
  c.style.setProperty('--i',k++);
 }
}
var g=$('dayMomentsGrid');
if(g){
 var busy=false;
 new MutationObserver(function(){
  if(busy)return;busy=true;
  requestAnimationFrame(function(){decorate();busy=false});
 }).observe(g,{childList:true});
 decorate();
}
})();
