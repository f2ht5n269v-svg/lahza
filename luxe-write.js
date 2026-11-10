/* ===== لحظة: قائمة الكتابة + شاشة الكتابة (رق قديم) ===== */
(function(){
'use strict';
if(window.__lxw)return;window.__lxw=1;
var $=function(i){return document.getElementById(i)};
var el=function(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};

/* ---------- خامات ---------- */
function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var GRAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .36 0 0 0 0 .25 0 0 0 0 .1 .55 0 0 0 -.1'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");
var STAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='s'><feTurbulence type='fractalNoise' baseFrequency='.011' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .45 0 0 0 0 .29 0 0 0 0 .09 1 0 0 0 -.34'/></filter><rect width='100%' height='100%' filter='url(#s)'/></svg>");
var LEATHER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .9 0 0 0 -.25'/></filter><rect width='100%' height='100%' filter='url(#l)'/></svg>");

/* ---------- أنماط ---------- */
var css=[
/* الورقة المشتركة */
'.lxp{position:relative;overflow:hidden;animation:lxwUnroll .95s cubic-bezier(.22,.8,.25,1) both}',
'.lxp-bg{position:absolute;inset:0;z-index:0;background:@@G,@@S,radial-gradient(ellipse at 18% 12%,rgba(255,248,222,.85),transparent 55%),radial-gradient(ellipse at 88% 82%,rgba(125,82,30,.38),transparent 60%),radial-gradient(circle at 72% 24%,rgba(140,95,40,.16),transparent 24%),linear-gradient(180deg,#ead9ac,#d5bb80)}',
'.lxp-bg::after{content:"";position:absolute;inset:0;box-shadow:inset 0 0 46px rgba(95,58,16,.6),inset 0 0 9px rgba(60,34,8,.55)}',
'.lxp-in{position:relative;z-index:1}',
'.lxp-rod{position:relative;z-index:3;height:20px;margin:0 -9px;border-radius:10px;background:linear-gradient(180deg,#2a170a 0%,#7c4f27 28%,#d2a463 48%,#8a5a2c 66%,#2a170a 100%);box-shadow:0 5px 12px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,235,190,.35)}',
'.lxp-rod::before,.lxp-rod::after{content:"";position:absolute;top:-4px;width:28px;height:28px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#f4dc92,#b8862f 55%,#5a3a0e);box-shadow:0 3px 8px rgba(0,0,0,.5)}',
'.lxp-rod::before{left:-14px}.lxp-rod::after{right:-14px}',
/* الختم */
'.lxm-seal{position:relative;flex:0 0 auto;width:62px;height:62px;display:flex;align-items:center;justify-content:center;border-radius:52% 48% 55% 45%/48% 54% 46% 52%;background:radial-gradient(circle at 34% 28%,var(--c1),var(--c2) 58%,var(--c3));box-shadow:inset 0 2px 3px rgba(255,255,255,.38),inset 0 -4px 7px rgba(0,0,0,.5),0 4px 9px rgba(0,0,0,.45);transition:transform .45s cubic-bezier(.34,1.56,.64,1);animation:lxmStamp .65s cubic-bezier(.2,.9,.3,1) both;animation-delay:calc(.5s + var(--i,0)*.09s)}',
'.lxm-seal::before{content:"";position:absolute;inset:8px;border-radius:50%;border:1.5px solid rgba(255,235,225,.3)}',
'.lxm-seal::after{content:"";position:absolute;right:-5px;bottom:5px;width:13px;height:13px;border-radius:50%;background:radial-gradient(circle at 35% 30%,var(--c1),var(--c3));box-shadow:0 2px 3px rgba(0,0,0,.4)}',
'.lxm-seal svg{width:27px;height:27px;color:rgba(255,232,222,.92);filter:drop-shadow(0 -1px 0 rgba(0,0,0,.55)) drop-shadow(0 1px 0 rgba(255,255,255,.18))}',
/* القائمة */
'.lxm{position:fixed;inset:0;z-index:470;display:flex;padding:28px;overflow-y:auto;background:radial-gradient(ellipse at 50% 40%,rgba(42,25,12,.74),rgba(6,3,2,.93));-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);animation:lxwFade .35s both}',
'.lxm.out{animation:lxwOut .26s ease both}',
'.lxm-scroll{width:100%;max-width:480px;margin:auto;filter:drop-shadow(0 18px 30px rgba(0,0,0,.55))}',
'.lxm-in{padding:34px 22px 22px}',
'.lxm-t{font:600 2.1rem/1.2 var(--fd);text-align:center;color:#6b4a14;text-shadow:0 1px 0 rgba(255,245,210,.65)}',
'.lxm-orn{display:flex;align-items:center;gap:10px;justify-content:center;margin:8px 0 12px;color:#9a7428}',
'.lxm-orn i{flex:1;height:1px;background:linear-gradient(90deg,transparent,#9a7428,transparent)}',
'.lxm-row{display:flex;align-items:center;gap:16px;width:100%;padding:13px 4px;text-align:start;position:relative;color:#2f1f0b;transition:transform .45s cubic-bezier(.34,1.56,.64,1);animation:lxmRise .7s cubic-bezier(.2,.9,.3,1) both;animation-delay:calc(.35s + var(--i,0)*.09s)}',
'.lxm-row::after{content:"";position:absolute;left:12%;right:12%;bottom:0;height:1px;background:linear-gradient(90deg,transparent,rgba(120,85,30,.5),transparent)}',
'.lxm-row:last-of-type::after{display:none}',
'.lxm-row:active{transform:scale(.97)}.lxm-row:active .lxm-seal{transform:scale(.88) rotate(-5deg)}',
'.lxm-row.go .lxm-seal{transform:scale(.8) rotate(-8deg)}',
'.lxm-tx{flex:1;min-width:0}.lxm-tx b{display:block;font:500 1.4rem/1.3 var(--fd);color:#2f1f0b}.lxm-tx span{display:block;font:1rem/1.6 var(--fq);color:#6a5230}',
'.lxm-bd{min-width:24px;height:24px;border-radius:12px;padding:0 7px;display:flex;align-items:center;justify-content:center;font:600 .8rem var(--fd);color:#2a1a08;background:linear-gradient(135deg,#f0d98e,#b8932f);box-shadow:0 2px 5px rgba(0,0,0,.3)}',
'.lxm-x{display:block;margin:12px auto 0;padding:10px 32px;font:500 1rem var(--fd);color:#6b4a1c;border-radius:99px;border:1px solid rgba(120,85,30,.5);background:rgba(255,248,225,.34);transition:transform .4s cubic-bezier(.34,1.56,.64,1)}',
'.lxm-x:active{transform:scale(.92)}',
/* شاشة الكتابة */
'#textScreen{background:@@L,radial-gradient(ellipse at 50% 28%,#3b281b 0%,#1b110b 62%,#090503 100%);padding:calc(76px + env(safe-area-inset-top)) 28px calc(46px + env(safe-area-inset-bottom))}',
':root[data-theme=light] #textScreen{background:@@L,radial-gradient(ellipse at 50% 28%,#7a5a3b 0%,#4a321f 62%,#2a1a0e 100%)}',
'#textScreen::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse at 50% 42%,transparent 34%,rgba(0,0,0,.82));opacity:0;transition:opacity .7s ease}',
'#textScreen.lxw-f::after{opacity:1}',
'#textScreen>*{position:relative;z-index:1}',
'#textScreen .btn-close{position:fixed;z-index:6;color:#e6cf8a;background:rgba(22,15,10,.6);border-color:rgba(212,175,55,.4);transition:opacity .5s,transform .35s cubic-bezier(.34,1.56,.64,1)}',
'#textScreen .btn-close:active{transform:scale(.88)}',
'#textTitle{font:600 2rem/1.2 var(--fd);margin:0 0 20px;background:linear-gradient(115deg,#8a6d1b 0%,#f2dc8f 28%,#b8932f 48%,#f6e7a8 70%,#8a6d1b 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;filter:drop-shadow(0 2px 3px rgba(0,0,0,.6));animation:lxwSheen 7s ease-in-out infinite;transition:opacity .6s}',
'.lxw-sheet{max-width:520px;margin:0 auto 26px;filter:drop-shadow(0 16px 28px rgba(0,0,0,.55));transition:transform .7s cubic-bezier(.22,.8,.25,1)}',
'#textScreen.lxw-f .lxw-sheet{transform:translateY(-14px) scale(1.015)}',
'#textScreen .lxp{animation-name:lxwUnrollW}',
'.lxw-in{padding:26px 26px 36px}',
'.lxw-date{text-align:center;font:500 1.02rem var(--fd);letter-spacing:.06em;color:#7a5a22;padding-bottom:10px;margin-bottom:12px;background:linear-gradient(90deg,transparent,rgba(120,85,30,.55),transparent) bottom/100% 1px no-repeat}',
'#textScreen .lxw-in .text-input{display:block;width:100%;max-width:none;margin:0;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;--lh:2.4rem;font:1.28rem/var(--lh) var(--fq);color:#33220e;caret-color:#8a5a1c;height:46vh;min-height:250px;background-image:repeating-linear-gradient(to bottom,transparent 0,transparent calc(var(--lh) - 1px),rgba(110,78,30,.3) calc(var(--lh) - 1px),rgba(110,78,30,.3) var(--lh));background-attachment:local}',
'#textScreen .lxw-in .text-input::placeholder{color:#8e7547;font-family:var(--fq);font-style:italic;font-size:1.15rem}',
'#textScreen .lxw-in .text-input::selection{background:rgba(184,147,47,.35)}',
'#textScreen #qBox2{max-width:none;margin:0 0 14px;padding:12px 10px;border:0;border-radius:0;background:linear-gradient(90deg,transparent,rgba(120,85,30,.14),transparent);text-align:center}',
'#textScreen #qBox2 .qt{font:italic 1.2rem/1.9 var(--fq);color:#6b4a14;margin-bottom:6px}',
'#textScreen #qBox2 .filter-chip{color:#6b4a1c;border-color:rgba(120,85,30,.5);background:rgba(255,248,225,.3);transition:transform .4s cubic-bezier(.34,1.56,.64,1)}',
'#textScreen #qBox2 .filter-chip:active{transform:scale(.92)}',
'.lxw-seal{position:absolute;bottom:12px;inset-inline-end:16px;width:42px;height:42px;animation:lxwBreathe 4.5s ease-in-out infinite;pointer-events:none}',
'.lxw-seal::before{inset:6px}.lxw-seal::after{display:none}.lxw-seal svg{width:19px;height:19px}',
'#textScreen .background-section{max-width:520px;margin:0 auto 22px;transition:opacity .6s}',
'#textScreen.lxw-f .background-section,#textScreen.lxw-f #textTitle{opacity:.06;pointer-events:none}',
'#textScreen.lxw-f .btn-close{opacity:.22}',
'#textScreen .background-title{color:#d8bd7a;font:500 1rem var(--fd);margin-bottom:10px;letter-spacing:.04em}',
'#textScreen .bg-option{background:rgba(255,255,255,.06);border:2px solid rgba(212,175,55,.3);color:#e6cf8a;transition:transform .4s cubic-bezier(.34,1.56,.64,1),border-color .3s}',
'#textScreen .bg-option:active{transform:scale(.88)}',
'#textScreen .bg-option.active{border-color:#e8cf85;box-shadow:0 0 0 3px rgba(232,207,133,.18)}',
'#textScreen .bg-option.upload{border-style:dashed}',
'#saveTextBtn{display:block;max-width:360px;margin:0 auto;padding:17px;border:0;border-radius:99px;font:600 1.2rem var(--fd);letter-spacing:.05em;color:#2a1a08;background:linear-gradient(115deg,#8a6d1b,#e8cf85 30%,#b8932f 55%,#f1dc9a 80%,#8a6d1b);background-size:220% 100%;box-shadow:0 10px 26px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.55),inset 0 -2px 5px rgba(90,60,10,.55);animation:lxwSheen 6s ease-in-out infinite;transition:transform .4s cubic-bezier(.34,1.56,.64,1)}',
'#saveTextBtn:active{transform:scale(.95)}',
/* حركات */
'@keyframes lxwFade{from{opacity:0}to{opacity:1}}',
'@keyframes lxwOut{to{opacity:0;transform:scale(.97)}}',
'@keyframes lxwUnroll{from{max-height:0}to{max-height:760px}}',
'@keyframes lxwUnrollW{from{max-height:0}to{max-height:680px}}',
'@keyframes lxmRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}',
'@keyframes lxmStamp{0%{opacity:0;transform:scale(1.8) rotate(-16deg)}60%{opacity:1;transform:scale(.92) rotate(2deg)}100%{opacity:1;transform:none}}',
'@keyframes lxwSheen{0%,100%{background-position:0% 0}50%{background-position:100% 0}}',
'@keyframes lxwBreathe{0%,100%{filter:brightness(1)}50%{filter:brightness(1.18)}}',
'@media(prefers-reduced-motion:reduce){.lxp,.lxm-seal,.lxm-row{animation:none!important}}'
].join('');
css=css.split('@@G').join(GRAIN).split('@@S').join(STAIN).split('@@L').join(LEATHER);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* ---------- رموز منقوشة ---------- */
function G(d,fill){return '<svg viewBox="0 0 24 24" fill="'+(fill||'none')+'" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>'}
var ICON={
 quill:G('<path d="M20 4c-7 1-12 5-14 12l-1 4 4-1c7-2 11-7 11-15z"/><path d="M9 15l6-7"/>'),
 target:G('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>'),
 letter:G('<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3.5 7.5l8.5 6 8.5-6"/>'),
 brush:G('<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>'),
 ask:G('<path d="M9 9a3 3 0 1 1 4.2 2.7c-.9.5-1.2 1.2-1.2 2.3"/><circle cx="12" cy="18" r=".6" fill="currentColor"/>')
};

/* ---------- حواف الورقة غير المستقيمة ---------- */
function rough(){
 var p=[],n=28,i,x;
 for(i=0;i<=n;i++){x=Math.random()*1.4+(Math.random()<.12?1.2:0);p.push(x.toFixed(2)+'% '+(i/n*100).toFixed(1)+'%')}
 for(i=n;i>=0;i--){x=100-(Math.random()*1.4+(Math.random()<.12?1.2:0));p.push(x.toFixed(2)+'% '+(i/n*100).toFixed(1)+'%')}
 return 'polygon('+p.join(',')+')';
}
function paperBg(){var b=el('div','lxp-bg'),c=rough();b.style.clipPath=c;b.style.webkitClipPath=c;return b}
function sealHTML(k,c,i){return '<span class="lxm-seal" style="--c1:'+c[0]+';--c2:'+c[1]+';--c3:'+c[2]+';--i:'+i+'">'+ICON[k]+'</span>'}

/* ---------- قائمة الكتابة ---------- */
window.writeMenu=function(){
 if(document.querySelector('.lxm'))return;
 var nl=0;try{nl=getL().filter(function(l){return !l.s&&new Date(l.o)<=Date.now()}).length}catch(e){}
 var items=[
  ['quill','m_journal','ws_journal',['#d9604f','#9b1f1f','#4e0b0b'],function(){openText('personal')}],
  ['target','m_goals','ws_goals',['#e3ab50','#a56a1c','#4f2c08'],function(){openText('goals')}],
  ['letter','letter','ws_letter',['#b872b0','#6e2a69','#2f0f2e'],function(){lettersUI()}],
  ['brush','draw','ws_draw',['#7595dc','#2f4b97','#13204a'],function(){openDraw()}],
  ['ask','m_questions','ws_q',['#62c394','#1f7a53','#0b3a27'],function(){qHub()}]
 ];
 var root=el('div','lxm'),sc=el('div','lxm-scroll'),top=el('div','lxp-rod'),paper=el('div','lxp'),inn=el('div','lxp-in lxm-in'),bot=el('div','lxp-rod');
 inn.dir=document.documentElement.dir;
 inn.appendChild(el('div','lxm-t',esc(t('text'))));
 inn.appendChild(el('div','lxm-orn','<i></i><span>✦</span><i></i>'));
 var close=function(){root.classList.add('out');setTimeout(function(){root.remove()},260)};
 items.forEach(function(a,idx){
  var badge=(a[1]==='letter'&&nl)?'<span class="lxm-bd">'+nl+'</span>':'';
  var row=el('button','lxm-row',sealHTML(a[0],a[3],idx)+'<span class="lxm-tx"><b>'+esc(t(a[1]))+'</b><span>'+esc(t(a[2]))+'</span></span>'+badge);
  row.style.setProperty('--i',idx);
  row.onclick=function(){row.classList.add('go');setTimeout(function(){close();setTimeout(a[4],120)},180)};
  inn.appendChild(row);
 });
 var x=el('button','lxm-x',esc(t('close')));x.onclick=close;inn.appendChild(x);
 paper.append(paperBg(),inn);sc.append(top,paper,bot);root.appendChild(sc);
 root.addEventListener('click',function(e){if(e.target===root)close()});
 document.body.appendChild(root);
};

/* ---------- شاشة الكتابة: لفافة رق ---------- */
(function(){
 var scr=$('textScreen'),ta=$('textInput'),qb=$('qBox2');
 if(!scr||!ta||!qb)return;
 var sheet=el('div','lxw-sheet'),top=el('div','lxp-rod'),paper=el('div','lxp'),inn=el('div','lxp-in lxw-in'),bot=el('div','lxp-rod');
 var dt=el('div','lxw-date'),seal=el('span','lxm-seal lxw-seal',ICON.quill);
 seal.style.cssText='--c1:#d9604f;--c2:#9b1f1f;--c3:#4e0b0b;animation-name:lxwBreathe';
 inn.dir=document.documentElement.dir;
 qb.parentNode.insertBefore(sheet,qb);
 inn.append(dt,qb,ta,seal);
 paper.append(paperBg(),inn);sheet.append(top,paper,bot);
 function upd(){inn.dir=document.documentElement.dir;try{dt.textContent=fdate(S.oldDate||new Date())}catch(e){}}
 new MutationObserver(function(){
  if(scr.classList.contains('hidden')){scr.classList.remove('lxw-f')}
  else{upd();scr.scrollTop=0}
 }).observe(scr,{attributes:true,attributeFilter:['class']});
 ta.addEventListener('focus',function(){scr.classList.add('lxw-f')});
 ta.addEventListener('blur',function(){setTimeout(function(){if(document.activeElement!==ta)scr.classList.remove('lxw-f')},120)});
 upd();
})();
})();
