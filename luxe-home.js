/* ===== لحظة: الرئيسية (هدوء وفخامة) + اتجاه الكتابة ===== */
(function(){
'use strict';
if(window.__lxh)return;window.__lxh=1;

function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var GRAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .4 0 0 0 0 .3 0 0 0 0 .15 .22 0 0 0 -.04'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");
var HL='rgba(184,147,47,.38)';
var SPR='cubic-bezier(.34,1.56,.64,1)';
var EASE='cubic-bezier(.2,.9,.3,1)';

var css=[
'#tabHome{padding:calc(34px + env(safe-area-inset-top)) 22px 130px;background:radial-gradient(ellipse at 50% -6%,rgba(212,175,55,.12),transparent 52%),@@N,var(--bg)}',
/* الترويسة */
'#tabHome .home-greeting{text-align:center;font:400 1.75rem/1.35 var(--fq);color:var(--text);letter-spacing:.01em;animation:lxhUp .6s @@E both}',
'#tabHome .home-greeting::before{content:"Lahza";display:block;font:400 2.3rem/1.1 "Great Vibes",cursive;color:var(--gold);margin-bottom:8px}',
'#tabHome .home-date{text-align:center;font:.98rem var(--fb);color:var(--text-3);margin:4px 0 14px;letter-spacing:.02em;animation:lxhUp .6s .06s @@E both}',
'#tabHome .home-hijri{display:flex;align-items:center;gap:14px;max-width:300px;margin:0 auto 30px;font:.98rem var(--fq);color:var(--gold);animation:lxhUp .6s .1s @@E both}',
'#tabHome .home-hijri::before,#tabHome .home-hijri::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,@@HL)}',
'#tabHome .home-hijri::after{transform:scaleX(-1)}',
'#tabHome .home-hijri:empty{display:block;height:1px;max-width:90px;margin:6px auto 30px;background:linear-gradient(90deg,transparent,@@HL,transparent)}',
'#tabHome .home-hijri:empty::before,#tabHome .home-hijri:empty::after{display:none}',
/* الأزرار */
'#tabHome .home-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}',
'#tabHome .home-action{flex-direction:column;justify-content:center;gap:12px;width:100%;padding:22px 6px 18px;border:1px solid @@HL;border-radius:20px;background:var(--card);font:400 .98rem var(--fb);text-align:center;color:var(--text-2);transition:transform .45s @@S,border-color .3s,background .3s;animation:lxhUp .6s @@E both}',
'#tabHome .home-action:nth-child(1){animation-delay:.14s}#tabHome .home-action:nth-child(2){animation-delay:.2s}#tabHome .home-action:nth-child(3){animation-delay:.26s}#tabHome .home-action:nth-child(4){animation-delay:.32s}#tabHome .home-action:nth-child(5){animation-delay:.38s}',
'#tabHome .home-action:active{transform:scale(.96);border-color:var(--gold);background:var(--gold-soft)}',
'#tabHome .home-action .label{flex:none}',
'#tabHome .home-action .arrow{display:none}',
'#tabHome .home-action svg{width:30px;height:30px;stroke:var(--gold);stroke-width:1.25}',
/* كتابة: بطاقة رئيسية بإطار مزدوج */
'#tabHome #actionText{grid-column:1/-1;flex-direction:row;gap:18px;padding:24px 24px;border-color:rgba(184,147,47,.55);box-shadow:inset 0 0 0 5px var(--card),inset 0 0 0 6px rgba(184,147,47,.3)}',
'#tabHome #actionText svg{width:34px;height:34px}',
'#tabHome #actionText .label{flex:1;text-align:start;font:400 1.45rem var(--fq);color:var(--text)}',
'#tabHome #actionText .arrow{display:block;color:var(--gold);font-size:1.5rem}',
/* تاريخ قديم */
'#tabHome #actionOldDate{grid-column:1/-1;flex-direction:row;gap:16px;padding:15px 22px}',
'#tabHome #actionOldDate svg{width:26px;height:26px}',
'#tabHome #actionOldDate .label{flex:1;text-align:start;font-size:1.02rem}',
'#tabHome #actionOldDate .arrow{display:block;color:var(--gold)}',
/* العدّادات */
'#tabHome .home-stats{position:relative;display:flex;justify-content:space-around;align-items:center;gap:0;margin:30px 0 0;padding:26px 0;width:100%;border:0;border-radius:0;background:linear-gradient(90deg,transparent,@@HL,transparent) top/100% 1px no-repeat,linear-gradient(90deg,transparent,@@HL,transparent) bottom/100% 1px no-repeat;transition:transform .45s @@S,opacity .3s;animation:lxhUp .6s .44s @@E both}',
'#tabHome .home-stats:active{transform:scale(.97);opacity:.8}',
'#tabHome .home-stats::before{content:"";position:absolute;top:28%;bottom:28%;left:50%;width:1px;background:linear-gradient(transparent,@@HL,transparent)}',
'#tabHome .home-stat{flex:1;min-width:0;gap:6px}',
'#tabHome .home-stat .num{font:400 2.6rem/1 var(--fq);color:var(--text)}',
'#tabHome .home-stat .lbl{font:.88rem var(--fb);color:var(--text-3);letter-spacing:.04em}',
/* في مثل هذا اليوم */
'#tabHome .on-this-day{max-width:none;margin:26px 0 0;padding:20px 18px;border:1px solid @@HL;border-radius:20px;background:var(--card);animation:lxhUp .6s .5s @@E both}',
'#tabHome .on-this-day-title{font:400 1.2rem var(--fq);color:var(--gold);margin-bottom:12px}',
'#tabHome .on-this-day-year{padding:13px 18px;margin:8px 0 0;border:1px solid var(--border-strong);border-radius:14px;background:var(--bg);font:400 1.05rem var(--fb);transition:transform .4s @@S,border-color .3s}',
'#tabHome .on-this-day-year:active{transform:scale(.97);border-color:var(--gold)}',
/* الخزنة بالرئيسية */
'#vHome .vhome{margin:14px 0 0;padding:16px 18px;border:1px solid @@HL;border-radius:20px;background:var(--card);box-shadow:none;transition:transform .45s @@S,border-color .3s;animation:lxhUp .6s .5s @@E both}',
'#vHome .vhome:active{transform:scale(.97);border-color:var(--gold)}',
/* شريط التبويبات */
'.tabs{background:var(--nav);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-top:1px solid @@HL}',
'.tab{transition:color .3s,transform .4s @@S}',
'.tab svg{stroke-width:1.5;transition:transform .45s @@S}',
'.tab.active svg{transform:translateY(-2px) scale(1.08)}',
'.tab:active{transform:scale(.92)}',
'textarea,input[type=text],input[type=search]{text-align:start}',
'@keyframes lxhUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}',
'@media(prefers-reduced-motion:reduce){#tabHome *{animation:none!important}}'
].join('');
css=css.split('@@N').join(GRAIN).split('@@HL').join(HL).split('@@S').join(SPR).split('@@E').join(EASE);
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
