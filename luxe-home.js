/* ===== لحظة: الرئيسية (ترويسة جلد + بقية كريمي) + اتجاه الكتابة ===== */
(function(){
'use strict';
if(window.__lxh)return;window.__lxh=1;

function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var GRAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .4 0 0 0 0 .3 0 0 0 0 .15 .22 0 0 0 -.04'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");
var LEATHER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .9 0 0 0 -.25'/></filter><rect width='100%' height='100%' filter='url(#l)'/></svg>");
var HL='rgba(184,147,47,.4)';
var GL='#d9bd6a';
var SPR='cubic-bezier(.34,1.56,.64,1)';
var EASE='cubic-bezier(.2,.9,.3,1)';
var LTH='@@L,radial-gradient(ellipse at 20% 0%,rgba(255,255,255,.08),transparent 60%),linear-gradient(135deg,#2e1d15,#130a07)';

var css=[
'#tabHome{padding:0 22px 140px;background:@@N,var(--bg)}',
/* الترويسة */
'.lxh-hd{margin:0 -22px 26px;padding:calc(30px + env(safe-area-inset-top)) 24px 34px;border-radius:0 0 34px 34px;background:'+LTH+';border-bottom:1px solid rgba(217,189,106,.5);box-shadow:0 14px 30px rgba(40,24,8,.22);text-align:center;animation:lxhDown .7s @@E both}',
'.lxh-hd .home-greeting{text-align:center;font:400 1.7rem/1.4 var(--fq);color:#f3e8c8;margin:0;animation:none}',
'.lxh-hd .home-greeting::before{content:"Lahza";display:block;font:400 1.9rem/1.2 "Great Vibes",cursive;color:'+GL+';margin-bottom:6px}',
'.lxh-hd .home-date{text-align:center;font:.95rem var(--fb);color:#bfae85;margin:2px 0 14px;letter-spacing:.02em;animation:none}',
'.lxh-hd .home-hijri{display:flex;align-items:center;gap:14px;max-width:290px;margin:0 auto;font:.98rem var(--fq);color:'+GL+';animation:none;padding:0;border:0;background:none}',
'.lxh-hd .home-hijri::before,.lxh-hd .home-hijri::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(217,189,106,.7))}',
'.lxh-hd .home-hijri::after{transform:scaleX(-1)}',
'.lxh-hd .home-hijri:empty{display:none}',
/* الأزرار */
'#tabHome .home-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}',
'#tabHome .home-action{flex-direction:column;justify-content:center;gap:12px;width:100%;padding:22px 6px 18px;border:1px solid @@HL;border-radius:20px;background:@@N,var(--card);box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 8px 18px rgba(60,40,10,.07);font:400 .92rem var(--fb);text-align:center;color:var(--text-2);letter-spacing:.02em;transition:transform .45s @@S,border-color .3s,background .3s;animation:lxhUp .6s @@E both}',
'#tabHome .home-action:nth-child(2){animation-delay:.1s}#tabHome .home-action:nth-child(3){animation-delay:.16s}#tabHome .home-action:nth-child(4){animation-delay:.22s}#tabHome .home-action:nth-child(5){animation-delay:.3s}',
'#tabHome .home-action:active{transform:scale(.96);border-color:var(--gold)}',
'#tabHome .home-action .label{flex:none}',
'#tabHome .home-action .arrow{display:none}',
'#tabHome .home-action svg{width:26px;height:26px;stroke:var(--gold);stroke-width:1.2}',
/* كتابة: بطاقة التركيز */
'#tabHome #actionText{grid-column:1/-1;flex-direction:row;gap:18px;padding:26px 26px;border:1px solid rgba(217,189,106,.55);background:'+LTH+';box-shadow:0 16px 32px rgba(40,24,8,.28),inset 0 0 0 5px #1c100b,inset 0 0 0 6px rgba(217,189,106,.45);color:#f3e8c8;animation-delay:.04s}',
'#tabHome #actionText:active{border-color:'+GL+'}',
'#tabHome #actionText svg{width:30px;height:30px;stroke:'+GL+'}',
'#tabHome #actionText .label{flex:1;text-align:start;font:400 1.5rem var(--fq);color:#f3e8c8;letter-spacing:0}',
'#tabHome #actionText .arrow{display:block;color:'+GL+';font-size:1.4rem}',
/* تاريخ قديم: سطر هادئ */
'#tabHome #actionOldDate{grid-column:1/-1;flex-direction:row;gap:16px;padding:18px 6px;margin-top:2px;border:0;border-radius:0;box-shadow:none;background:transparent;border-top:1px solid @@HL;border-bottom:1px solid @@HL}',
'#tabHome #actionOldDate:active{background:var(--gold-soft);transform:scale(.985)}',
'#tabHome #actionOldDate svg{width:24px;height:24px}',
'#tabHome #actionOldDate .label{flex:1;text-align:start;font:400 1rem var(--fb);color:var(--text-2)}',
'#tabHome #actionOldDate .arrow{display:block;color:var(--gold)}',
/* العدّادات */
'#tabHome .home-stats{position:relative;display:flex;justify-content:space-around;align-items:center;gap:0;margin:24px 0 0;padding:16px 0;width:100%;border:0;border-radius:0;background:transparent;transition:transform .45s @@S,opacity .3s;animation:lxhUp .6s .36s @@E both}',
'#tabHome .home-stats:active{transform:scale(.97);opacity:.8}',
'#tabHome .home-stats::before{content:"";position:absolute;top:20%;bottom:20%;left:50%;width:1px;background:linear-gradient(transparent,@@HL,transparent)}',
'#tabHome .home-stat{flex:1;min-width:0;gap:2px}',
'#tabHome .home-stat .num{font:400 2rem/1.1 var(--fq);color:var(--text)}',
'#tabHome .home-stat .lbl{font:.84rem var(--fb);color:var(--text-3);letter-spacing:.05em}',
/* في مثل هذا اليوم */
'#tabHome .on-this-day{max-width:none;margin:22px 0 0;padding:20px 18px;border:1px solid @@HL;border-radius:20px;background:@@N,var(--card);box-shadow:0 8px 18px rgba(60,40,10,.07);animation:lxhUp .6s .42s @@E both}',
'#tabHome .on-this-day-title{font:400 1.15rem var(--fq);color:var(--gold);margin-bottom:12px}',
'#tabHome .on-this-day-year{padding:13px 18px;margin:8px 0 0;border:1px solid var(--border-strong);border-radius:14px;background:var(--bg);font:400 1.02rem var(--fb);transition:transform .4s @@S,border-color .3s}',
'#tabHome .on-this-day-year:active{transform:scale(.97);border-color:var(--gold)}',
/* الخزنة بالرئيسية */
'#vHome .vhome{margin:14px 0 0;padding:16px 18px;border:1px solid @@HL;border-radius:20px;background:@@N,var(--card);box-shadow:0 8px 18px rgba(60,40,10,.07);transition:transform .45s @@S,border-color .3s;animation:lxhUp .6s .42s @@E both}',
'#vHome .vhome:active{transform:scale(.97);border-color:var(--gold)}',
/* شريط التبويبات */
'.tabs{background:var(--nav);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-top:1px solid @@HL}',
'.tab{transition:color .3s,transform .4s @@S}',
'.tab svg{stroke-width:1.5;transition:transform .45s @@S}',
'.tab.active svg{transform:translateY(-2px) scale(1.08)}',
'.tab:active{transform:scale(.92)}',
'textarea,input[type=text],input[type=search]{text-align:start}',
'@keyframes lxhUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}',
'@keyframes lxhDown{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}',
'@media(prefers-reduced-motion:reduce){#tabHome *,.lxh-hd{animation:none!important}}'
].join('');
css=css.split('@@N').join(GRAIN).split('@@L').join(LEATHER).split('@@HL').join(HL).split('@@S').join(SPR).split('@@E').join(EASE);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* لفّ الترويسة بلوح واحد (نفس العناصر ونفس الـ id) */
(function(){
 var th=document.getElementById('tabHome'),g=document.getElementById('greeting'),d=document.getElementById('todayDate'),h=document.getElementById('hijriDate');
 if(!th||!g||!d||!h||g.parentNode!==th)return;
 var w=document.createElement('div');w.className='lxh-hd';
 th.insertBefore(w,g);w.appendChild(g);w.appendChild(d);w.appendChild(h);
})();

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
