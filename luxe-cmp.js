/* ===== لحظة: قبل وبعد (صالة عرض فاخرة) ===== */
(function(){
'use strict';
if(window.__lxc)return;window.__lxc=1;

function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var LEATHER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .9 0 0 0 -.25'/></filter><rect width='100%' height='100%' filter='url(#l)'/></svg>");
var GOLD='linear-gradient(115deg,#8a6d1b 0%,#f2dc8f 28%,#b8932f 48%,#f6e7a8 70%,#8a6d1b 100%)';
var SPR='cubic-bezier(.34,1.56,.64,1)';

var css=[
'#cmpScreen{background:@@L,radial-gradient(ellipse at 50% 0%,#3d2a1c 0%,#1d130c 55%,#0a0604 100%)!important;color:#e6d5ab;padding-top:calc(78px + env(safe-area-inset-top))!important}',
':root[data-theme=light] #cmpScreen{background:@@L,radial-gradient(ellipse at 50% 0%,#7a5a3b 0%,#4a321f 60%,#2a1a0e 100%)!important}',
'#cmpScreen .btn-close{background:rgba(22,15,10,.75);border-color:rgba(212,175,55,.45);color:#e6cf8a;z-index:460!important;transition:transform .35s '+SPR+'}',
'#cmpScreen .btn-close:active{transform:scale(.88)}',
'#cmpScreen .screen-title{font:600 1.9rem/1.3 var(--fd);margin-bottom:18px;background:@@G;background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;filter:drop-shadow(0 2px 3px rgba(0,0,0,.6));animation:lxcSheen 7s ease-in-out infinite}',
/* مبدّل الوضع */
'#cmpScreen>.filters:first-of-type{position:relative;display:flex;width:max-content;max-width:100%;margin:0 auto 22px;padding:4px;gap:0;overflow:visible;border-radius:99px;background:rgba(10,6,4,.55);border:1px solid rgba(212,175,55,.35);box-shadow:inset 0 2px 8px rgba(0,0,0,.5)}',
'#cmpScreen>.filters:first-of-type .filter-chip{border:0;background:transparent;color:#cdb985;padding:10px 24px;font:500 1rem var(--fd);transition:color .3s,transform .35s '+SPR+'}',
'#cmpScreen>.filters:first-of-type .filter-chip:active{transform:scale(.93)}',
'#cmpScreen>.filters:first-of-type .filter-chip.active{background:@@G;background-size:220% 100%;color:#2a1a08;font-weight:600;box-shadow:0 3px 10px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.5)}',
/* منطقة المقارنة */
'#cmpScreen>div[style*="aspect-ratio"]{border-radius:20px!important;max-width:540px!important;box-shadow:0 0 0 2px rgba(212,175,55,.55),0 0 0 6px rgba(0,0,0,.35),0 18px 40px rgba(0,0,0,.65)!important;transition:transform .5s '+SPR+'}',
'#cmpScreen>div[style*="aspect-ratio"]>div[style*="background: rgb(230"],#cmpScreen>div[style*="aspect-ratio"]>div[style*="E67E22"],#cmpScreen>div[style*="aspect-ratio"]>div:nth-last-child(2){background:rgba(120,62,22,.88)!important;font:500 .95rem var(--fd)!important;letter-spacing:.04em;box-shadow:0 2px 8px rgba(0,0,0,.5);border:1px solid rgba(255,225,170,.35);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}',
'#cmpScreen>div[style*="aspect-ratio"]>div:last-child{background:rgba(48,86,52,.9)!important;font:500 .95rem var(--fd)!important;letter-spacing:.04em;box-shadow:0 2px 8px rgba(0,0,0,.5);border:1px solid rgba(215,240,205,.3);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}',
/* مقبض المنزلق */
'#cmpScreen>div[style*="aspect-ratio"]>div[style*="width: 2px"]{width:3px!important;background:linear-gradient(to bottom,rgba(255,238,185,.95),#fff,rgba(255,238,185,.95))!important;box-shadow:0 0 14px rgba(0,0,0,.6),0 0 0 1px rgba(40,25,5,.35)}',
'#cmpScreen>div[style*="aspect-ratio"]>div[style*="border-radius: 50%"]{width:54px!important;height:54px!important;margin:-27px 0 0 -27px!important;background:radial-gradient(circle at 34% 28%,#f8e7a6,#c9a24a 55%,#7a5718)!important;color:#2a1a08!important;border:2px solid rgba(255,244,205,.85);box-shadow:0 6px 16px rgba(0,0,0,.6),inset 0 2px 3px rgba(255,255,255,.5),inset 0 -3px 6px rgba(70,40,5,.45)!important;font-size:1.2rem!important}',
/* نص مرافق */
'#cmpScreen .screen-subtitle{color:#bfa96f;font:italic 1rem var(--fq);margin-top:12px}',
'#cmpScreen div[style*="direction: ltr"][style*="margin: 12px auto 0"]{margin-top:18px!important;gap:14px!important}',
'#cmpScreen div[style*="direction: ltr"][style*="margin: 12px auto 0"]>div>div:first-child{color:#f2dc8f!important;font:500 1.12rem var(--fd)!important;text-shadow:0 1px 3px rgba(0,0,0,.6)}',
'#cmpScreen div[style*="direction: ltr"][style*="margin: 12px auto 0"]>div>div:nth-child(2){color:#bfa96f!important}',
'#cmpScreen div[style*="direction: ltr"][style*="margin: 12px auto 0"]>div>div:nth-child(3){color:#e6d5ab!important;font-style:italic}',
/* عناوين الأقسام */
'#cmpScreen .background-title{color:#d8bd7a!important;font:500 1.05rem var(--fd)!important;letter-spacing:.05em;margin:26px auto 10px!important;position:relative}',
'#cmpScreen .background-title::before,#cmpScreen .background-title::after{content:"";display:inline-block;width:34px;height:1px;vertical-align:middle;margin:0 12px;background:linear-gradient(90deg,transparent,rgba(212,175,55,.7))}',
'#cmpScreen .background-title::after{transform:scaleX(-1)}',
/* مقارنة سريعة */
'#cmpScreen .filters:not(:first-of-type) .filter-chip{background:rgba(10,6,4,.45);border:1px solid rgba(212,175,55,.4);color:#e0c98a;padding:9px 18px;font:500 .95rem var(--fd);transition:transform .35s '+SPR+',background .3s}',
'#cmpScreen .filters:not(:first-of-type) .filter-chip:active{transform:scale(.92);background:rgba(212,175,55,.2)}',
/* المصغرات */
'#cmpScreen div[data-w]{padding:8px 6px 14px!important;gap:10px!important}',
'#cmpScreen div[data-w]>button{flex:0 0 58px!important;height:76px!important;border-radius:12px!important;border:2px solid rgba(212,175,55,.2)!important;filter:saturate(.85) brightness(.8);transition:transform .4s '+SPR+',filter .3s,border-color .3s,box-shadow .3s}',
'#cmpScreen div[data-w]>button:active{transform:scale(.9)}',
'#cmpScreen div[data-w]>button[style*="var(--gold)"]{border-color:#e8cf85!important;filter:none;transform:translateY(-4px) scale(1.07);box-shadow:0 8px 18px rgba(0,0,0,.6),0 0 0 3px rgba(232,207,133,.18)}',
'#cmpScreen div[data-w]>button .ck{width:20px!important;height:20px!important;font-size:.72rem!important;background:@@G!important;color:#2a1a08!important;box-shadow:0 2px 5px rgba(0,0,0,.5)}',
/* الأزرار السفلية */
'#cmpScreen>.btn{max-width:420px;margin:12px auto;padding:16px;font:600 1.1rem var(--fd);letter-spacing:.04em;transition:transform .35s '+SPR+'}',
'#cmpScreen>.btn:active{transform:scale(.96)}',
'#cmpScreen>.btn.primary{border:0;color:#2a1a08;background:@@G;background-size:220% 100%;box-shadow:0 10px 26px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.55),inset 0 -2px 5px rgba(90,60,10,.5);animation:lxcSheen 6s ease-in-out infinite}',
'#cmpScreen>.btn.primary+.btn.primary{background:rgba(10,6,4,.5);color:#f2dc8f;border:1.5px solid rgba(212,175,55,.6);box-shadow:0 6px 18px rgba(0,0,0,.4);animation:none}',
'#cmpScreen>.screen-subtitle:last-child{font-size:.85rem;opacity:.85;margin:14px auto 0;max-width:420px}',
'@keyframes lxcSheen{0%,100%{background-position:0% 0}50%{background-position:100% 0}}',
'@media(prefers-reduced-motion:reduce){#cmpScreen .btn.primary,#cmpScreen .screen-title{animation:none!important}}'
].join('');
css=css.split('@@L').join(LEATHER).split('@@G').join(GOLD);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
})();
