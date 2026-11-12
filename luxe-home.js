/* ===== لحظة: الرئيسية (هادئة) + اتجاه الكتابة ===== */
(function(){
'use strict';
if(window.__lxh)return;window.__lxh=1;

function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var GRAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .4 0 0 0 0 .3 0 0 0 0 .15 .2 0 0 0 -.04'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");
var HL='rgba(184,147,47,.32)';
var EASE='cubic-bezier(.2,.9,.3,1)';

var css=[
'#tabHome{padding:calc(40px + env(safe-area-inset-top)) 28px 140px;background:radial-gradient(ellipse at 50% -10%,rgba(212,175,55,.10),transparent 55%),@@N,var(--bg)}',
/* الترويسة */
'#tabHome .home-greeting{text-align:center;font:400 1.6rem/1.5 var(--fq);color:var(--text);margin:0;animation:lxhUp .6s @@E both}',
'#tabHome .home-greeting::before{content:"Lahza";display:block;font:400 1.9rem/1.7 "Great Vibes",cursive;color:var(--gold);padding-top:6px;margin-bottom:2px}',
'#tabHome .home-date{text-align:center;font:.95rem var(--fb);color:var(--text-3);margin:0 0 12px;letter-spacing:.02em;animation:lxhUp .6s .06s @@E both}',
'#tabHome .home-hijri{display:flex;align-items:center;gap:14px;max-width:280px;margin:0 auto 34px;padding:0;border:0;background:none;font:.98rem var(--fq);color:var(--gold);animation:lxhUp .6s .1s @@E both}',
'#tabHome .home-hijri::before,#tabHome .home-hijri::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,@@HL)}',
'#tabHome .home-hijri::after{transform:scaleX(-1)}',
'#tabHome .home-hijri:empty{display:none}',
/* الأزرار كقائمة هادئة بدون مربعات */
'#tabHome .home-actions{display:block}',
'#tabHome .home-action{display:flex;flex-direction:row;align-items:center;gap:18px;width:100%;padding:19px 4px;border:0;border-bottom:1px solid @@HL;border-radius:0;background:transparent;box-shadow:none;font:400 1.2rem var(--fq);color:var(--text);text-align:start;transition:background .3s,transform .35s,padding .3s;animation:lxhUp .6s @@E both}',
'#tabHome .home-action:last-child{border-bottom:1px solid @@HL}',
'#tabHome .home-action:nth-child(1){animation-delay:.12s}#tabHome .home-action:nth-child(2){animation-delay:.17s}#tabHome .home-action:nth-child(3){animation-delay:.22s}#tabHome .home-action:nth-child(4){animation-delay:.27s}#tabHome .home-action:nth-child(5){animation-delay:.32s}',
'#tabHome .home-action:active{background:var(--gold-soft);transform:scale(.99)}',
'#tabHome .home-action svg{width:22px;height:22px;padding:0;border:0;background:none;border-radius:0;box-shadow:none;stroke:var(--gold);stroke-width:1.3;flex:none}',
'#tabHome .home-action .label{flex:1;text-align:start}',
'#tabHome .home-action .arrow{display:block;color:var(--gold);font-size:1.2rem;opacity:.7}',
/* كتابة: نفس السطر لكن أكبر شوي بالنص */
'#tabHome #actionText{padding:24px 4px}',
'#tabHome #actionText .label{font-size:1.5rem}',
'#tabHome #actionText svg{width:24px;height:24px}',
/* تاريخ قديم أهدأ */
'#tabHome #actionOldDate .label{font:400 1rem var(--fb);color:var(--text-2)}',
/* العدّادات */
'#tabHome .home-stats{display:flex;justify-content:center;align-items:center;gap:56px;margin:30px 0 0;padding:6px 0;width:100%;border:0;border-radius:0;background:transparent;transition:opacity .3s,transform .35s;animation:lxhUp .6s .38s @@E both}',
'#tabHome .home-stats:active{opacity:.7;transform:scale(.98)}',
'#tabHome .home-stat{min-width:0;gap:2px}',
'#tabHome .home-stat .num{font:400 1.8rem/1.2 var(--fq);color:var(--text)}',
'#tabHome .home-stat .lbl{font:.82rem var(--fb);color:var(--text-3);letter-spacing:.05em}',
/* في مثل هذا اليوم */
'#tabHome .on-this-day{max-width:none;margin:30px 0 0;padding:20px 0 0;border:0;border-top:1px solid @@HL;border-radius:0;background:transparent;box-shadow:none;animation:lxhUp .6s .44s @@E both}',
'#tabHome .on-this-day-title{font:400 1.1rem var(--fq);color:var(--gold);margin-bottom:10px}',
'#tabHome .on-this-day-year{padding:12px 4px;margin:0;border:0;border-bottom:1px solid var(--border);border-radius:0;background:transparent;font:400 1.02rem var(--fb);transition:background .3s}',
'#tabHome .on-this-day-year:active{background:var(--gold-soft)}',
/* الخزنة بالرئيسية */
'#vHome{margin-top:14px}',
'#vHome .vhome{margin:0;padding:16px 4px;border:0;border-bottom:1px solid @@HL;border-radius:0;background:transparent;box-shadow:none;transition:background .3s;animation:lxhUp .6s .44s @@E both}',
'#vHome .vhome:active{background:var(--gold-soft)}',
'#vHome .vhome .vbub{background:none;width:26px;height:26px;border-radius:0}',
/* التبويبات */
'.tabs{background:var(--nav);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-top:1px solid @@HL}',
'.tab{transition:color .3s,transform .35s}',
'.tab svg{stroke-width:1.5}',
'.tab:active{transform:scale(.94)}',
'textarea,input[type=text],input[type=search]{text-align:start}',
'@keyframes lxhUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}',
'@media(prefers-reduced-motion:reduce){#tabHome *{animation:none!important}}'
].join('');
css=css.split('@@N').join(GRAIN).split('@@HL').join(HL).split('@@E').join(EASE);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* اتجاه الكتابة حسب أول حرف */
var AR=/[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/;
function dirOf(s){
 var m=(s||'').match(/[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]|[A-Za-z\u00C0-\u024F]/);
 if(!m)return null;
 return AR.test(m[0])?'rtl':'ltr';
}
function fix(e){
 var t=e.target;if(!t||!t.tagName)return;
 var tag=t.tagName;
 if(tag!=='TEXTAREA'&&!(tag==='INPUT'&&(t.type==='text'||t.type==='search')))return;
 var d=dirOf(t.value)||document.documentElement.dir||'rtl';
 if(t.getAttribute('dir')!==d)t.setAttribute('dir',d);
}
document.addEventListener('input',fix,true);
document.addEventListener('focusin',fix,true);
})();
