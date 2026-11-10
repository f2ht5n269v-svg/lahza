/* ===== لحظة: قائمة الكتابة + شاشة الكتابة (رق قديم) ===== */
(function(){
'use strict';
if(window.__lxw)return;window.__lxw=1;
var $=function(i){return document.getElementById(i)};
var el=function(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};

function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var GRAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .36 0 0 0 0 .25 0 0 0 0 .1 .55 0 0 0 -.1'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");
var STAIN=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='s'><feTurbulence type='fractalNoise' baseFrequency='.011' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .45 0 0 0 0 .29 0 0 0 0 .09 1 0 0 0 -.34'/></filter><rect width='100%' height='100%' filter='url(#s)'/></svg>");
var LEATHER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .9 0 0 0 -.25'/></filter><rect width='100%' height='100%' filter='url(#l)'/></svg>");

var css=[
'.lxp{position:relative;overflow:hidden}',
'.lxp-bg{position:absolute;inset:0;z-index:0;background:@@G,@@S,radial-gradient(ellipse at 18% 12%,rgba(255,248,222,.85),transparent 55%),radial-gradient(ellipse at 88% 82%,rgba(125,82,30,.38),transparent 60%),linear-gradient(180deg,#ead9ac,#d5bb80)}',
'.lxp-bg::after{content:"";position:absolute;inset:0;box-shadow:inset 0 0 46px rgba(95,58,16,.6),inset 0 0 9px rgba(60,34,8,.55)}',
'.lxp-in{position:relative;z-index:1}',
'.lxp-rod{position:relative;z-index:3;height:18px;margin:0 -9px;border-radius:9px;background:linear-gradient(180deg,#2a170a 0%,#7c4f27 28%,#d2a463 48%,#8a5a2c 66%,#2a170a 100%);box-shadow:0 5px 12px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,235,190,.35)}',
'.lxp-rod::before,.lxp-rod::after{content:"";position:absolute;top:-3px;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#f4dc92,#b8862f 55%,#5a3a0e);box-shadow:0 3px 8px rgba(0,0,0,.5)}',
'.lxp-rod::before{left:-12px}.lxp-rod::after{right:-12px}',
/* القائمة */
'.lxm{position:fixed;inset:0;z-index:470;display:flex;padding:28px;overflow-y:auto;background:radial-gradient(ellipse at 50% 40%,rgba(42,25,12,.74),rgba(6,3,2,.93));animation:lxwFade .3s both}',
'.lxm.out{animation:lxwOut .22s ease both}',
'.lxm-scroll{width:100%;max-width:460px;margin:auto;filter:drop-shadow(0 18px 30px rgba(0,0,0,.55))}',
'.lxm-in{padding:34px 26px 24px}',
'.lxm-t{font:600 2rem/1.2 var(--fd);text-align:center;color:#6b4a14;text-shadow:0 1px 0 rgba(255,245,210,.65)}',
'.lxm-orn{display:flex;align-items:center;gap:10px;justify-content:center;margin:8px 0 14px;color:#9a7428}',
'.lxm-orn i{flex:1;height:1px;background:linear-gradient(90deg,transparent,#9a7428,transparent)}',
'.lxm-row{display:flex;align-items:center;gap:14px;width:100%;padding:16px 4px;text-align:start;position:relative;color:#2f1f0b;transition:transform .4s cubic-bezier(.34,1.56,.64,1);animation:lxmRise .6s cubic-bezier(.2,.9,.3,1) both;animation-delay:calc(.2s + var(--i,0)*.07s)}',
'.lxm-row::before{content:"";flex:0 0 auto;width:9px;height:9px;transform:rotate(45deg);background:linear-gradient(135deg,#d9b863,#8a6420);box-shadow:0 1px 2px rgba(0,0,0,.35)}',
'.lxm-row::after{content:"";position:absolute;left:8%;right:8%;bottom:0;height:1px;background:linear-gradient(90deg,transparent,rgba(120,85,30,.5),transparent)}',
'.lxm-row:last-of-type::after{display:none}',
'.lxm-row:active{transform:scale(.97)}',
'.lxm-tx{flex:1;min-width:0}.lxm-tx b{display:block;font:500 1.3rem/1.3 var(--fd);color:#2f1f0b}.lxm-tx span{display:block;font:.98rem/1.6 var(--fq);color:#6a5230}',
'.lxm-bd{min-width:24px;height:24px;border-radius:12px;padding:0 7px;display:flex;align-items:center;justify-content:center;font:600 .8rem var(--fd);color:#2a1a08;background:linear-gradient(135deg,#f0d98e,#b8932f)}',
'.lxm-x{display:block;margin:14px auto 0;padding:10px 32px;font:500 1rem var(--fd);color:#6b4a1c;border-radius:99px;border:1px solid rgba(120,85,30,.5);background:rgba(255,248,225,.34);transition:transform .35s cubic-bezier(.34,1.56,.64,1)}',
'.lxm-x:active{transform:scale(.92)}',
/* شاشة الكتابة */
'#textScreen{background:@@L,radial-gradient(ellipse at 50% 28%,#3b281b 0%,#1b110b 62%,#090503 100%);padding:calc(76px + env(safe-area-inset-top)) 24px calc(120px + env(safe-area-inset-bottom))}',
':root[data-theme=light] #textScreen{background:@@L,radial-gradient(ellipse at 50% 28%,#7a5a3b 0%,#4a321f 62%,#2a1a0e 100%)}',
'#textScreen .btn-close{position:fixed;z-index:20;color:#e6cf8a;background:rgba(22,15,10,.7);border-color:rgba(212,175,55,.4)}',
'#textTitle{font:600 1.9rem/1.2 var(--fd);margin:0 0 18px;background:linear-gradient(115deg,#8a6d1b 0%,#f2dc8f 28%,#b8932f 48%,#f6e7a8 70%,#8a6d1b 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;animation:lxwSheen 7s ease-in-out infinite}',
'.lxw-sheet{max-width:520px;margin:0 auto 24px;filter:drop-shadow(0 16px 28px rgba(0,0,0,.55))}',
'.lxw-in{padding:24px 24px 30px}',
'.lxw-date{text-align:center;font:500 1rem var(--fd);letter-spacing:.06em;color:#7a5a22;padding-bottom:10px;margin-bottom:12px;background:linear-gradient(90deg,transparent,rgba(120,85,30,.55),transparent) bottom/100% 1px no-repeat}',
'#textScreen .lxw-in .text-input{display:block;width:100%;max-width:none;margin:0;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;--lh:2.4rem;font:1.25rem/var(--lh) var(--fq);color:#33220e;caret-color:#8a5a1c;height:40vh;min-height:230px;background-image:repeating-linear-gradient(to bottom,transparent 0,transparent calc(var(--lh) - 1px),rgba(110,78,30,.3) calc(var(--lh) - 1px),rgba(110,78,30,.3) var(--lh));background-attachment:local}',
'#textScreen .lxw-in .text-input::placeholder{color:#8e7547;font-family:var(--fq);font-style:italic;font-size:1.1rem}',
'#textScreen #qBox2{max-width:none;margin:0 0 12px;padding:10px;border:0;border-radius:0;background:linear-gradient(90deg,transparent,rgba(120,85,30,.14),transparent);text-align:center}',
'#textScreen #qBox2 .qt{font:italic 1.15rem/1.9 var(--fq);color:#6b4a14;margin-bottom:6px}',
'#textScreen #qBox2 .filter-chip{color:#6b4a1c;border-color:rgba(120,85,30,.5);background:rgba(255,248,225,.3)}',
'#textScreen .background-section{max-width:520px;margin:0 auto 20px}',
'#textScreen .background-title{color:#d8bd7a;font:500 1rem var(--fd);margin-bottom:10px}',
'#textScreen .bg-option{background:rgba(255,255,255,.06);border:2px solid rgba(212,175,55,.3);color:#e6cf8a}',
'#textScreen .bg-option.active{border-color:#e8cf85}',
'#saveTextBtn{position:fixed;left:24px;right:24px;bottom:calc(18px + env(safe-area-inset-bottom));max-width:420px;margin:0 auto;z-index:20;padding:16px;border:0;border-radius:99px;font:600 1.15rem var(--fd);letter-spacing:.05em;color:#2a1a08;background:linear-gradient(115deg,#8a6d1b,#e8cf85 30%,#b8932f 55%,#f1dc9a 80%,#8a6d1b);background-size:220% 100%;box-shadow:0 10px 26px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.55);animation:lxwSheen 6s ease-in-out infinite;transition:transform .35s cubic-bezier(.34,1.56,.64,1)}',
'#saveTextBtn:active{transform:scale(.96)}',
'#textScreen.hidden #saveTextBtn{display:none}',
'@keyframes lxwFade{from{opacity:0}to{opacity:1}}',
'@keyframes lxwOut{to{opacity:0}}',
'@keyframes lxmRise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}',
'@keyframes lxwSheen{0%,100%{background-position:0% 0}50%{background-position:100% 0}}',
'@media(prefers-reduced-motion:reduce){.lxm-row{animation:none!important}}'
].join('');
css=css.split('@@G').join(GRAIN).split('@@S').join(STAIN).split('@@L').join(LEATHER);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

function rough(){
 var p=[],n=28,i,x;
 for(i=0;i<=n;i++){x=Math.random()*1.4+(Math.random()<.12?1.2:0);p.push(x.toFixed(2)+'% '+(i/n*100).toFixed(1)+'%')}
 for(i=n;i>=0;i--){x=100-(Math.random()*1.4+(Math.random()<.12?1.2:0));p.push(x.toFixed(2)+'% '+(i/n*100).toFixed(1)+'%')}
 return 'polygon('+p.join(',')+')';
}
function paperBg(){var b=el('div','lxp-bg'),c=rough();b.style.clipPath=c;b.style.webkitClipPath=c;return b}

/* ---------- قائمة الكتابة ---------- */
window.writeMenu=function(){
 if(document.querySelector('.lxm'))return;
 var nl=0;try{nl=getL().filter(function(l){return !l.s&&new Date(l.o)<=Date.now()}).length}catch(e){}
 var items=[
  ['m_journal','ws_journal',function(){openText('personal')}],
  ['m_goals','ws_goals',function(){openText('goals')}],
  ['letter','ws_letter',function(){lettersUI()}],
  ['draw','ws_draw',function(){openDraw()}],
  ['m_questions','ws_q',function(){qHub()}]
 ];
 var root=el('div','lxm'),sc=el('div','lxm-scroll'),top=el('div','lxp-rod'),paper=el('div','lxp'),inn=el('div','lxp-in lxm-in'),bot=el('div','lxp-rod');
 inn.dir=document.documentElement.dir;
 inn.appendChild(el('div','lxm-t',esc(t('text'))));
 inn.appendChild(el('div','lxm-orn','<i></i><span>✦</span><i></i>'));
 var close=function(){root.classList.add('out');setTimeout(function(){root.remove()},220)};
 items.forEach(function(a,idx){
  var badge=(a[0]==='letter'&&nl)?'<span class="lxm-bd">'+nl+'</span>':'';
  var row=el('button','lxm-row','<span class="lxm-tx"><b>'+esc(t(a[0]))+'</b><span>'+esc(t(a[1]))+'</span></span>'+badge);
  row.style.setProperty('--i',idx);
  row.onclick=function(){close();setTimeout(a[2],160)};
  inn.appendChild(row);
 });
 var x=el('button','lxm-x',esc(t('close')));x.onclick=close;inn.appendChild(x);
 paper.append(paperBg(),inn);sc.append(top,paper,bot);root.appendChild(sc);
 root.addEventListener('click',function(e){if(e.target===root)close()});
 document.body.appendChild(root);
};

/* ---------- شاشة الكتابة ---------- */
(function(){
 var scr=$('textScreen'),ta=$('textInput'),qb=$('qBox2');
 if(!scr||!ta||!qb)return;
 var sheet=el('div','lxw-sheet'),top=el('div','lxp-rod'),paper=el('div','lxp'),inn=el('div','lxp-in lxw-in'),bot=el('div','lxp-rod');
 var dt=el('div','lxw-date');
 inn.dir=document.documentElement.dir;
 qb.parentNode.insertBefore(sheet,qb);
 inn.append(dt,qb,ta);
 paper.append(paperBg(),inn);sheet.append(top,paper,bot);
 /* التاريخ يتحدّث فقط عند فتح الشاشة، بدون أي تعديل على الشاشة نفسها */
 var wasHidden=scr.classList.contains('hidden');
 new MutationObserver(function(){
  var h=scr.classList.contains('hidden');
  if(wasHidden&&!h){inn.dir=document.documentElement.dir;try{dt.textContent=fdate(S.oldDate||new Date())}catch(e){}scr.scrollTop=0}
  wasHidden=h;
 }).observe(scr,{attributes:true,attributeFilter:['class']});
})();
})();
