/* ===== لحظة: الرئيسية الفخمة + اتجاه الكتابة ===== */
(function(){
'use strict';
if(window.__lxh)return;window.__lxh=1;

function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var LEATHER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .9 0 0 0 -.25'/></filter><rect width='100%' height='100%' filter='url(#l)'/></svg>");
var GOLD='linear-gradient(115deg,#8a6d1b 0%,#f2dc8f 28%,#b8932f 48%,#f6e7a8 70%,#8a6d1b 100%)';
var GOLD_L='linear-gradient(115deg,#5e4a14 0%,#b8932f 30%,#7a6120 55%,#c9a94a 78%,#5e4a14 100%)';
var SPR='cubic-bezier(.34,1.56,.64,1)';
var CARD='linear-gradient(160deg,var(--card),var(--card-hover))';
var SH='0 10px 26px rgba(0,0,0,.16),inset 0 1px 0 rgba(255,255,255,.06)';

var css=[
/* الخلفية */
'#tabHome{background:radial-gradient(ellipse at 85% -8%,rgba(212,175,55,.17),transparent 52%),radial-gradient(ellipse at 8% 100%,rgba(212,175,55,.08),transparent 55%),var(--bg);padding:calc(30px + env(safe-area-inset-top)) 20px 130px}',
/* الترويسة */
'#tabHome .home-greeting{text-align:center;font:600 2.15rem/1.25 var(--fd);margin-top:6px;background:@@G;background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;animation:lxhDown .8s cubic-bezier(.2,.9,.3,1) both,lxhSheen 8s ease-in-out infinite}',
':root[data-theme=light] #tabHome .home-greeting{background-image:@@GL}',
'#tabHome .home-date{text-align:center;font:1.12rem var(--fq);color:var(--text-2);margin:2px 0 12px;animation:lxhDown .8s .08s cubic-bezier(.2,.9,.3,1) both}',
'#tabHome .home-hijri{display:table;margin:0 auto 30px;padding:5px 20px;border:1px solid rgba(212,175,55,.42);border-radius:99px;background:var(--gold-soft);font:.95rem var(--fd);color:var(--gold);animation:lxhDown .8s .14s cubic-bezier(.2,.9,.3,1) both}',
'#tabHome .home-hijri:empty{display:none}',
/* الأزرار */
'#tabHome .home-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:6px}',
'#tabHome .home-action{position:relative;overflow:hidden;flex-direction:column;justify-content:center;gap:12px;width:100%;padding:22px 6px 18px;border:1px solid var(--border-strong);border-radius:24px;background:@@C;box-shadow:@@SH;font:500 1.02rem var(--fd);text-align:center;color:var(--text);transition:transform .45s @@SPR,box-shadow .3s,background .3s;animation:lxhUp .7s cubic-bezier(.2,.9,.3,1) both}',
'#tabHome .home-action:nth-child(1){animation-delay:.18s}#tabHome .home-action:nth-child(2){animation-delay:.26s}#tabHome .home-action:nth-child(3){animation-delay:.32s}#tabHome .home-action:nth-child(4){animation-delay:.38s}#tabHome .home-action:nth-child(5){animation-delay:.46s}',
'#tabHome .home-action:active{transform:scale(.95);background:@@C}',
'#tabHome .home-action .label{flex:none}',
'#tabHome .home-action .arrow{display:none}',
'#tabHome .home-action svg{width:54px;height:54px;padding:14px;box-sizing:border-box;border-radius:50%;border:1px solid rgba(212,175,55,.5);background:radial-gradient(circle at 35% 30%,rgba(212,175,55,.26),rgba(212,175,55,.04));stroke:var(--gold);box-shadow:0 4px 12px rgba(0,0,0,.18)}',
/* كتابة = بطاقة رئيسية */
'#tabHome #actionText{grid-column:1/-1;flex-direction:row;gap:18px;padding:24px 22px;color:#f1e3b8;border-color:rgba(212,175,55,.55);background:radial-gradient(ellipse at 20% 0%,rgba(255,255,255,.1),transparent 60%),@@L,linear-gradient(135deg,#34201a,#140a07);box-shadow:0 16px 34px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,235,170,.2)}',
'#tabHome #actionText:active{background:radial-gradient(ellipse at 20% 0%,rgba(255,255,255,.1),transparent 60%),@@L,linear-gradient(135deg,#34201a,#140a07)}',
'#tabHome #actionText::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:linear-gradient(115deg,transparent 42%,rgba(255,235,170,.14) 50%,transparent 58%);background-size:260% 100%;animation:lxhShine 7s ease-in-out infinite}',
'#tabHome #actionText svg{width:62px;height:62px;padding:16px;border-color:rgba(232,207,133,.7);stroke:#f2dc8f}',
'#tabHome #actionText .label{flex:1;text-align:start;font:600 1.5rem var(--fd)}',
'#tabHome #actionText .arrow{display:block;color:#e6cf8a;font-size:1.7rem}',
/* تاريخ قديم */
'#tabHome #actionOldDate{grid-column:1/-1;flex-direction:row;gap:16px;padding:16px 20px}',
'#tabHome #actionOldDate svg{width:46px;height:46px;padding:11px}',
'#tabHome #actionOldDate .label{flex:1;text-align:start;font-size:1.1rem}',
'#tabHome #actionOldDate .arrow{display:block;color:var(--gold)}',
/* العدّادات */
'#tabHome .home-stats{position:relative;display:flex;justify-content:space-around;align-items:center;gap:0;margin:22px 0 0;padding:22px 8px;width:100%;border:1px solid var(--border-strong);border-radius:26px;background:@@C;box-shadow:@@SH;transition:transform .45s @@SPR;animation:lxhUp .7s .54s cubic-bezier(.2,.9,.3,1) both}',
'#tabHome .home-stats:active{transform:scale(.97)}',
'#tabHome .home-stats::before{content:"";position:absolute;top:24%;bottom:24%;left:50%;width:1px;background:linear-gradient(transparent,rgba(212,175,55,.65),transparent)}',
'#tabHome .home-stat{flex:1;min-width:0}',
'#tabHome .home-stat .num{font:600 2.4rem/1 var(--fd);background:@@G;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}',
':root[data-theme=light] #tabHome .home-stat .num{background-image:@@GL}',
'#tabHome .home-stat .lbl{font:.92rem var(--fd);color:var(--text-3)}',
/* في مثل هذا اليوم */
'#tabHome .on-this-day{max-width:none;margin:22px 0 0;padding:20px 18px;border:1px solid rgba(212,175,55,.38);border-radius:26px;background:@@C;box-shadow:@@SH;animation:lxhUp .7s .6s cubic-bezier(.2,.9,.3,1) both}',
'#tabHome .on-this-day-title{font:500 1.15rem var(--fd);color:var(--gold);margin-bottom:12px}',
'#tabHome .on-this-day-year{padding:14px 20px;margin:8px 0 0;border:1px solid var(--border-strong);border-radius:18px;background:var(--bg);font:1.05rem var(--fd);transition:transform .4s @@SPR,border-color .3s}',
'#tabHome .on-this-day-year:active{transform:scale(.96);border-color:var(--gold)}',
/* بطاقات الخزنة بالرئيسية */
'#vHome{margin-top:6px}',
'#vHome .vhome{margin:14px 0 0;padding:16px 18px;border:1px solid rgba(212,175,55,.38);border-radius:24px;background:@@C;box-shadow:@@SH;transition:transform .45s @@SPR;animation:lxhUp .7s .5s cubic-bezier(.2,.9,.3,1) both}',
'#vHome .vhome:active{transform:scale(.97)}',
/* شريط التبويبات العائم */
'.tabs{left:14px;right:14px;bottom:calc(10px + env(safe-area-inset-bottom));padding:6px;border:1px solid rgba(212,175,55,.32);border-radius:28px;background:var(--nav);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:0 12px 34px rgba(0,0,0,.34)}',
'.tab{padding:9px 0 8px;border-radius:22px;transition:background .35s,transform .45s @@SPR,color .3s}',
'.tab::after{display:none}',
'.tab.active{background:var(--gold-soft)}',
'.tab.active svg{filter:drop-shadow(0 0 6px rgba(212,175,55,.5))}',
'.tab:active{transform:scale(.92)}',
/* اتجاه الكتابة */
'textarea,input[type=text],input[type=search]{text-align:start}',
'@keyframes lxhUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}',
'@keyframes lxhDown{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}',
'@keyframes lxhSheen{0%,100%{background-position:0% 0}50%{background-position:100% 0}}',
'@keyframes lxhShine{0%,100%{background-position:130% 0}50%{background-position:-30% 0}}',
'@media(prefers-reduced-motion:reduce){#tabHome *{animation:none!important}}'
].join('');
css=css.split('@@GL').join(GOLD_L).split('@@G').join(GOLD).split('@@L').join(LEATHER).split('@@C').join(CARD).split('@@SH').join(SH).split('@@SPR').join(SPR);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* ---------- اتجاه الكتابة حسب أول حرف ---------- */
var AR=/[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/,LT=/[A-Za-z\u00C0-\u024F]/;
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
