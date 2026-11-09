/* ===== لحظة: كتاب السنة (ورق حقيقي) ===== */
(function(){
'use strict';
if(window.__luxe)return;window.__luxe=1;
var $=function(i){return document.getElementById(i)};
var LANG=function(){return (S.lang==='en'||S.lang==='sv')?S.lang:'ar'};

var D={
ar:{q:'سؤال',glance:'سنتك بالأرقام',hl:'أبرز أيام السنة',laugh:'أكثر يوم ضحكت فيه',proud:'أكثر يوم شعرت فيه بالفخر',none:'لم نجد يوماً واضحاً بعد',toc:'الفهرس',chap:'الفصل',seasons:['الشتاء','الربيع','الصيف','الخريف'],d_happy:'كان فصلاً مبهجاً',d_hard:'كان فصلاً مليئاً بالتحديات',d_busy:'كان فصلاً حافلاً بالتوثيق',d_calm:'كان فصلاً هادئاً',dedic:'هذه أيامي كما عشتها',endt:'نهاية الكتاب',endl:'كل لحظة هنا بقيت على جهازك وحدك',hint:'اسحب الصفحة أو المسها للتقليب',snd:'صوت الورق',mood:'المزاج'},
en:{q:'Question',glance:'Your year in numbers',hl:'Highlights of the year',laugh:'The day you laughed most',proud:'The day you felt proudest',none:'No clear day found yet',toc:'Contents',chap:'Chapter',seasons:['Winter','Spring','Summer','Autumn'],d_happy:'It was a happy season',d_hard:'It was a season full of challenges',d_busy:'It was a season full of moments',d_calm:'It was a calm season',dedic:'These are my days, as I lived them',endt:'The End',endl:'Every moment here stayed on your device alone',hint:'Drag or tap the page to turn',snd:'Paper sound',mood:'Mood'},
sv:{q:'Fråga',glance:'Ditt år i siffror',hl:'Årets höjdpunkter',laugh:'Dagen du skrattade mest',proud:'Dagen du kände dig stoltast',none:'Ingen tydlig dag än',toc:'Innehåll',chap:'Kapitel',seasons:['Vinter','Vår','Sommar','Höst'],d_happy:'Det var en glad årstid',d_hard:'Det var en årstid full av utmaningar',d_busy:'Det var en årstid full av ögonblick',d_calm:'Det var en lugn årstid',dedic:'Det här är mina dagar, som jag levde dem',endt:'Slut',endl:'Varje ögonblick här stannade på din enhet',hint:'Dra eller tryck på sidan för att bläddra',snd:'Pappersljud',mood:'Humör'}
};
var X=function(k){var d=D[LANG()];return d[k]!==undefined?d[k]:D.ar[k]};
var ROM=['I','II','III','IV','V','VI','VII','VIII'];
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var el=function(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
var mtext=function(m){return (m.type==='answer'?'':(m.caption||''))+' '+(m.txt||'')};
var asc=function(a,b){return new Date(a.date)-new Date(b.date)};

/* ---------- خامات ---------- */
function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var NOISE=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .45 0 0 0 0 .36 0 0 0 0 .22 .3 0 0 0 -.02'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");
var FIBER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='.012 .45' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .5 0 0 0 0 .4 0 0 0 0 .25 .35 0 0 0 -.12'/></filter><rect width='100%' height='100%' filter='url(#f)'/></svg>");
var LEATHER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .9 0 0 0 -.25'/></filter><rect width='100%' height='100%' filter='url(#l)'/></svg>");

/* ---------- الأنماط (Q = وحدة نسبية لعرض الكتاب) ---------- */
var css=[
'.lxbook{position:fixed;inset:0;z-index:485;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;animation:lxin .5s ease both;color:#2a2014;--lxf:var(--fq),Amiri,Georgia,"Times New Roman",serif;--lxd:var(--fd),Amiri,Georgia,serif}',
'.lxbook.out{animation:lxout .3s ease both}',
'.lxdesk{position:absolute;inset:0;background:@@N,radial-gradient(ellipse at 50% 36%,#2b1f16 0%,#130d09 55%,#050302 100%)}',
':root[data-theme=light] .lxdesk{background:@@N,radial-gradient(ellipse at 50% 36%,#efe6d2 0%,#d9cbab 60%,#b7a37c 100%)}',
'.lxbk{position:relative;margin-top:2vh;animation:lxopen .9s cubic-bezier(.2,.8,.2,1) both}',
'.lxground{position:absolute;left:4%;right:4%;bottom:-5Q;height:7Q;background:radial-gradient(ellipse,rgba(0,0,0,.6),transparent 70%);filter:blur(9px)}',
'.lxstage{position:relative}.lxstage.rtl{transform:scaleX(-1)}',
'.lxstage.rtl .lxin{transform:scaleX(-1)}',
'.lxboard{position:absolute;z-index:0;border-radius:1Q 2.2Q 2.2Q 1Q;background:radial-gradient(ellipse at 30% 20%,rgba(255,255,255,.09),transparent 60%),@@L,linear-gradient(135deg,#2a1810,#120908);box-shadow:0 1.4Q 4Q rgba(0,0,0,.55),inset 0 0 0 1px rgba(255,255,255,.05)}',
':root[data-theme=light] .lxboard{background:radial-gradient(ellipse at 30% 20%,rgba(255,255,255,.12),transparent 60%),@@L,linear-gradient(135deg,#5a2620,#2c100e)}',
'.lxedge{position:absolute;z-index:1;background:repeating-linear-gradient(to right,#f6eedb 0,#f6eedb 1px,#d7c9a4 1px,#d7c9a4 2px);box-shadow:inset 0 0 .8Q rgba(90,60,20,.35)}',
'.lxedge.f{top:.4Q;bottom:.4Q;left:100%;border-radius:0 .5Q .5Q 0}',
'.lxedge.s{top:.4Q;bottom:.4Q;right:100%;border-radius:.5Q 0 0 .5Q}',
'.lxedge.b{left:.4Q;right:.4Q;top:100%;background:repeating-linear-gradient(to bottom,#f6eedb 0,#f6eedb 1px,#d7c9a4 1px,#d7c9a4 2px);border-radius:0 0 .5Q .5Q}',
'.lxbase{position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}',
'.lxribw{position:absolute;left:4.2Q;top:-1Q;width:2.8Q;height:calc(100% + 5Q);z-index:3;filter:drop-shadow(.2Q .3Q .4Q rgba(0,0,0,.4));pointer-events:none}',
'.lxrib{width:100%;height:100%;background:linear-gradient(90deg,#5a0e1b,#a3202f 45%,#6b1020);clip-path:polygon(0 0,100% 0,100% 100%,50% calc(100% - 2.2Q),0 100%)}',
'.lxcastw{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;z-index:4;pointer-events:none}',
'.lxcast{position:absolute;left:0;top:0;height:100%;width:22Q;opacity:0;background:linear-gradient(to right,rgba(40,25,8,.5),rgba(40,25,8,.18) 38%,transparent)}',
'.lxleaf{position:absolute;left:0;top:0;width:100%;height:100%;z-index:5;perspective:320Q;perspective-origin:50% 50%}',
'.lxs{position:absolute;top:0;transform-origin:0 50%;transform-style:preserve-3d;will-change:transform}',
'.lxf,.lxb{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden}',
'.lxb{transform:rotateY(180deg);background:@@N,@@F,linear-gradient(135deg,#f3ead6,#eadfc3)}',
'.lxb.end{background:@@N,repeating-radial-gradient(circle at 25% 30%,#3d1d14 0 .5Q,#5e3321 .5Q 1Q,#7b4d2a 1Q 1.5Q,#4a2418 1.5Q 2Q),#3d1d14}',
'.lxb.g::after{content:"";position:absolute;inset:0;background:linear-gradient(to left,rgba(50,30,10,.34),transparent)}',
'.sh{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;pointer-events:none;background:linear-gradient(to right,rgba(35,22,8,.2),rgba(35,22,8,.85))}',
/* الصفحة */
'.lxpg{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;color:#2a2014;font-family:var(--lxf);background:@@N,@@F,linear-gradient(135deg,#f8f1e1,#eee3ca)}',
'.lxpg::before{content:"";position:absolute;left:0;top:0;bottom:0;width:11Q;z-index:2;pointer-events:none;background:linear-gradient(to right,rgba(60,40,15,.34),rgba(60,40,15,.1) 42%,transparent)}',
'.lxpg::after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;box-shadow:inset 0 0 6Q rgba(120,90,40,.17),inset 0 0 1.2Q rgba(120,90,40,.14)}',
'.lxin{position:absolute;inset:0;z-index:1;padding-block-start:8Q;padding-inline-start:10.5Q;padding-inline-end:7.5Q}',
'.lxhd{text-align:center;font:500 2.5Q var(--lxd);letter-spacing:.14em;color:#8d7432;padding-bottom:1.8Q;border-bottom:1px solid rgba(141,116,50,.28);margin-bottom:5Q}',
'.lxdt{display:flex;align-items:center;gap:3.2Q}',
'.lxdt .dn{font:600 13Q/1 var(--lxd);color:#2a2014}',
'.lxdt .dm{display:flex;flex-direction:column;gap:.6Q;flex:1}',
'.lxdt .dm b{font:500 4.3Q var(--lxd);color:#8d7432}',
'.lxdt .dm i{font:normal 3.2Q var(--lxf);color:#7a6a4c}',
'.lxdt .mo{font-size:6.5Q}',
'.lxor{height:1px;margin:2.8Q 0 3.6Q;background:linear-gradient(90deg,transparent,#b8993f 15%,#b8993f 85%,transparent);position:relative;opacity:.85}',
'.lxor::after{content:"◆";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:2.2Q;color:#a98a2e;background:#f4ebd7;padding:0 1.4Q}',
'.lxcont{font:3.4Q var(--lxd);color:#7a6a4c;text-align:center}',
'.lxtx{font-size:4.9Q;line-height:9Q;white-space:pre-wrap;word-break:break-word;unicode-bidi:plaintext;text-align:start;color:#2b2113}',
'.lxmeas{position:absolute;left:-99999px;top:0;width:82Q;visibility:hidden;pointer-events:none}',
'.lxq{font:500 5Q/1.8 var(--lxd);color:#8d7432;margin-bottom:3Q;text-align:start}.lxq small{display:block;font:3Q var(--lxd);letter-spacing:.12em;color:#9a8450}',
'.lxgl{display:inline-block;font:3Q var(--lxd);color:#8d7432;border:1px solid rgba(141,116,50,.5);border-radius:99px;padding:.4Q 2.4Q;margin-bottom:3Q}',
'.lxcap{font:italic 4.2Q/1.8 var(--lxf);color:#6f5f3f;margin-bottom:3Q}',
/* الصور: كبيرة، والقياس النهائي بيتحسب بعد التحميل */
'.lxph{display:table;margin:1.5Q auto 3Q;background:#fffdf6;padding:2.2Q 2.2Q 1.6Q;box-shadow:0 .4Q 1.6Q rgba(60,40,10,.3),0 0 0 1px rgba(0,0,0,.05);position:relative}',
'.lxph .fr{position:relative}.lxph img{display:block;max-width:none;background:#e8dfca}',
'.lxph figcaption{display:table-caption;caption-side:bottom;padding-top:1.8Q;max-width:76Q;text-align:center;font:italic 3.5Q/1.6 var(--lxf);color:#6f5f3f}',
'.lxph .tp{position:absolute;top:-1.8Q;width:9Q;height:3.6Q;background:rgba(214,196,150,.66);box-shadow:0 .2Q .4Q rgba(0,0,0,.14);z-index:3}',
'.lxph .tp.a{left:-2.4Q;transform:rotate(-38deg)}.lxph .tp.b{right:-2.4Q;transform:rotate(38deg)}',
'.lxplay{position:absolute;left:50%;top:50%;width:12Q;height:12Q;margin:-6Q 0 0 -6Q;border-radius:50%;background:rgba(20,12,6,.55);color:#f3e2a8;display:flex;align-items:center;justify-content:center;font-size:4.6Q}',
'.lxfilm{width:60Q;height:34Q;background:#1b140e;color:#e6cf8a;display:flex;align-items:center;justify-content:center;font-size:9Q}',
'.lxwave{display:flex;align-items:center;justify-content:center;gap:.9Q;height:22Q;width:70Q}.lxwave i{width:1.4Q;background:#8d7432;border-radius:1Q;opacity:.85}',
'.lxdur{text-align:center;font:4Q var(--lxd);color:#8d7432;padding-top:1Q}',
'.lxft{position:absolute;left:0;right:0;bottom:4Q;text-align:center;font:3.2Q var(--lxd);color:#8d7432;letter-spacing:.1em}',
'.lxft::before{content:"— ";opacity:.6}.lxft::after{content:" —";opacity:.6}',
'.lxmid{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 10Q}',
'.lxcrest{font-size:9Q;color:#a98a2e;margin-bottom:4Q}',
'.lxh0{font:600 9Q/1.2 var(--lxd);color:#2a2014}',
'.lxyear{font:300 16Q/1.1 var(--lxd);color:#8d7432;margin:2Q 0}',
'.lxded{font:italic 4.4Q/1.8 var(--lxf);color:#6f5f3f;margin:2Q 0 8Q}',
'.lxlogo{font:12Q "Great Vibes",cursive;color:#a98a2e}',
'.lxh1{font:600 7Q/1.3 var(--lxd);color:#8d7432;text-align:center}',
'.lxsts{display:flex;justify-content:space-between;margin:4Q 0 6Q;text-align:center}',
'.lxst b{display:block;font:600 11Q/1 var(--lxd);color:#2a2014}.lxst span{font:3.1Q var(--lxd);color:#7a6a4c}',
'.lxmb{display:flex;align-items:center;gap:2.4Q;margin:2.4Q 0}.lxmb s{font-size:5.4Q;text-decoration:none;width:7Q;text-align:center}',
'.lxmb .tr{flex:1;height:2Q;border-radius:1Q;background:rgba(141,116,50,.18);overflow:hidden}.lxmb .fl{height:100%;background:linear-gradient(90deg,#8d7432,#c9a94a)}',
'.lxmb em{font:normal 3.2Q var(--lxd);color:#7a6a4c;width:8Q;text-align:end;direction:ltr}',
'.lxsec{font:500 3.6Q var(--lxd);letter-spacing:.1em;color:#8d7432;margin:6Q 0 1.6Q}',
'.lxdd{font:500 4.6Q var(--lxd);color:#2a2014}',
'.lxqt{font:italic 4.7Q/8.6Q var(--lxf);color:#3a2e1c;margin-top:1.4Q;word-break:break-word}.lxqt.dim{color:#9a8a68}',
'.lxtoc{display:flex;align-items:baseline;gap:2Q;padding:2.3Q 1Q;border-radius:1.4Q;font:4.5Q var(--lxf);transition:background .25s,transform .25s}',
'.lxtoc:active{background:rgba(141,116,50,.14);transform:scale(.985)}',
'.lxtoc .dots{flex:1;border-bottom:1.5px dotted rgba(141,116,50,.55);transform:translateY(-.8Q)}',
'.lxtoc b{font:500 4Q var(--lxd);color:#8d7432}.lxtoc small{font:3Q var(--lxd);color:#9a8a68}',
'.lxchap{position:absolute;left:6Q;right:6Q;top:6Q;bottom:6Q;border:3px double #b8993f;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 6Q}',
'.lxchap .c1{font:3.3Q var(--lxd);letter-spacing:.2em;color:#8d7432}.lxchap .c2{font:300 20Q/1.1 var(--lxd);color:#b8993f;margin:2Q 0}',
'.lxchap .c3{font:600 9Q/1.2 var(--lxd);color:#2a2014}.lxchap .c4{font:italic 4.4Q/1.7 var(--lxf);color:#6f5f3f;margin-top:3Q}.lxchap .c5{font:3.2Q var(--lxd);color:#9a8a68;margin-top:5Q}',
'.lxchap::before,.lxchap::after{content:"✦";position:absolute;color:#b8993f;font-size:4Q}.lxchap::before{top:1.4Q;left:2Q}.lxchap::after{bottom:1.4Q;right:2Q}',
/* الغلاف */
'.lxpg.cvr{background:radial-gradient(ellipse at 30% 18%,rgba(255,255,255,.12),transparent 55%),@@L,linear-gradient(135deg,#2a1810,#100807);color:#ecd697}',
':root[data-theme=light] .lxpg.cvr{background:radial-gradient(ellipse at 30% 18%,rgba(255,255,255,.14),transparent 55%),@@L,linear-gradient(135deg,#5c2721,#2a0f0d)}',
'.lxpg.cvr::before{left:5Q;width:1.8Q;background:linear-gradient(90deg,rgba(0,0,0,.6),rgba(255,255,255,.1) 55%,rgba(0,0,0,.4))}',
'.lxpg.cvr::after{box-shadow:inset 0 0 9Q rgba(0,0,0,.6)}',
'.cvfr{position:absolute;left:9Q;right:7Q;top:7Q;bottom:7Q;border:3px double rgba(228,200,120,.7);border-radius:.8Q}',
'.cvc{position:absolute;left:9Q;right:7Q;top:7Q;bottom:7Q;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}',
'.cvo{font-size:8Q}.cvt{font:600 10Q/1.2 var(--lxd);margin:3Q 0}.cvy{font:300 18Q/1 var(--lxd)}.cvs{font:15Q "Great Vibes",cursive;margin-top:6Q}',
'.cvl{width:30Q;height:1px;background:linear-gradient(90deg,transparent,rgba(232,208,132,.9),transparent);margin:3Q 0}',
'.foil{background:linear-gradient(115deg,#8a6d1b 0%,#f2dc8f 28%,#b8932f 48%,#f6e7a8 70%,#8a6d1b 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;filter:drop-shadow(0 .2Q .15Q rgba(0,0,0,.65));animation:lxsheen 6s ease-in-out infinite}',
/* الأزرار */
'.lxctl{position:absolute;left:14px;right:14px;display:flex;align-items:center;justify-content:space-between;z-index:10;pointer-events:none}',
'.lxctl.top{top:calc(env(safe-area-inset-top) + 12px)}.lxctl.bot{bottom:calc(env(safe-area-inset-bottom) + 14px);flex-direction:column;gap:8px}',
'.lxctl>*{pointer-events:auto}',
'.lxbtn{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.05rem;color:#e6cf8a;background:rgba(22,15,10,.55);border:1px solid rgba(212,175,55,.35);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 4px 14px rgba(0,0,0,.35);transition:transform .35s cubic-bezier(.34,1.56,.64,1),background .25s}',
'.lxbtn:active{transform:scale(.88)}.lxbtn.off{opacity:.45}',
'.lxpill{padding:8px 18px;border-radius:99px;font:.9rem var(--fd);color:#e6cf8a;background:rgba(22,15,10,.55);border:1px solid rgba(212,175,55,.3);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);direction:ltr}',
'.lxrow{display:flex;gap:8px}',
'.lxchip{padding:10px 20px;border-radius:99px;font-size:.92rem;color:#e6cf8a;background:rgba(22,15,10,.55);border:1px solid rgba(212,175,55,.35);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:transform .35s cubic-bezier(.34,1.56,.64,1)}.lxchip:active{transform:scale(.93)}',
'.lxhint{font-size:.78rem;color:rgba(230,207,138,.7);letter-spacing:.03em}',
':root[data-theme=light] .lxbtn,:root[data-theme=light] .lxpill,:root[data-theme=light] .lxchip{color:#5a4318;background:rgba(255,250,238,.62);border-color:rgba(120,92,30,.4)}',
':root[data-theme=light] .lxhint{color:rgba(90,67,24,.75)}',
'@keyframes lxin{from{opacity:0}to{opacity:1}}@keyframes lxout{to{opacity:0}}',
'@keyframes lxopen{from{opacity:0;transform:translateY(24px) scale(.9)}to{opacity:1;transform:none}}',
'@keyframes lxsheen{0%,100%{background-position:0% 0}50%{background-position:100% 0}}'
].join('');
css=css.replace(/(-?\d*\.?\d+)Q/g,'calc(var(--u)*$1)').split('@@N').join(NOISE).split('@@F').join(FIBER).split('@@L').join(LEATHER);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* ---------- حالة ---------- */
var YEAR,list=[],pages=[],tocData={},i=0,W=0,H=0,UU=1,root,bk,stage,base,ribw,castEl,board,eF,eS,eB,meas,pill,sndBtn,hintEl;
var leafEl=null,strips=[],turning=null,cur=0,busy=false,g=null,rtl=false,AC=null,purls={},rt=null;
var CURL=24,N=9;
var fwd=function(){return rtl?1:-1};
var clamp=function(v){return Math.max(0,Math.min(1,v))};

/* ---------- صوت الورق ---------- */
function audioInit(){try{if(!AC){var C=window.AudioContext||window.webkitAudioContext;if(C)AC=new C()}if(AC&&AC.state==='suspended')AC.resume()}catch(e){AC=null}}
function paper(){
 if(!AC||LS('lahza-booksnd')==='off')return;
 try{var n=Math.floor(AC.sampleRate*.5),b=AC.createBuffer(1,n,AC.sampleRate),d=b.getChannelData(0);
  for(var k=0;k<n;k++){var env=Math.sin(Math.PI*k/n);d[k]=(Math.random()*2-1)*env*env*(.6+.4*Math.random())}
  var s=AC.createBufferSource();s.buffer=b;var bp=AC.createBiquadFilter();bp.type='bandpass';bp.frequency.value=2300;bp.Q.value=.6;
  var gn=AC.createGain();gn.gain.value=.15;s.connect(bp);bp.connect(gn);gn.connect(AC.destination);s.start()}catch(e){}
}

/* ---------- بيانات ---------- */
async function photosOf(m){
 if(purls[m.id])return purls[m.id];var arr=[];
 try{
  if(m.type==='photo'){(await photoBlobs(m)).slice(0,3).forEach(function(b){arr.push(URL.createObjectURL(b))})}
  else if(m.type==='video'){var th=await getBlob('th'+m.id);if(th)arr.push(URL.createObjectURL(th))}
 }catch(e){}
 purls[m.id]=arr;return arr;
}
function longestStreak(l){var ds=Array.from(new Set(l.map(function(m){return dstr(m.date)}))).sort(),b=ds.length?1:0,c=1;
 for(var k=1;k<ds.length;k++){var d=Math.round((new Date(ds[k]+'T12:00:00')-new Date(ds[k-1]+'T12:00:00'))/864e5);if(d===1){c++;if(c>b)b=c}else c=1}return b}
var JOYW=['ضحك','ضحكت','مبسوط','سعيد','فرحان','هههه','laugh','haha','funny','happy','joy','skratt','kul','glad','rolig'].map(norm);
var PROW=['فخر','فخور','افتخر','أنجزت','انجزت','نجحت','أنهيت','انهيت','proud','achieved','finished','accomplished','succeeded','stolt','klarade','lyckades','avslutade'].map(norm);
function bestDay(ms,words,bonus){
 var by={};ms.forEach(function(m){(by[dstr(m.date)]=by[dstr(m.date)]||[]).push(m)});
 var best=null,bs=0;
 Object.keys(by).forEach(function(k){var s=0;by[k].forEach(function(m){var n=norm(mtext(m));words.forEach(function(w){if(n.indexOf(w)>=0)s++});s+=bonus(m)});if(s>bs){bs=s;best={day:k,list:by[k]}}});
 return best;
}

/* ---------- تقسيم النص على صفحات ---------- */
function split(text,firstH,contH){
 var toks=text.match(/\S+\s*/g)||[],out=[],s=0,cap=firstH;
 var h=function(a,b){meas.textContent=toks.slice(a,b).join('');return meas.offsetHeight};
 while(s<toks.length){
  if(h(s,toks.length)<=cap){out.push(toks.slice(s).join('').trim());break}
  var lo=1,hi=toks.length-s;
  while(lo<hi){var mid=(lo+hi+1)>>1;if(h(s,s+mid)<=cap)lo=mid;else hi=mid-1}
  out.push(toks.slice(s,s+lo).join('').trim());s+=lo;cap=contH;
 }
 return out;
}
/* ph = أقصى ارتفاع للصورة بوحدة Q. صفحة بدون نص: صورة كبيرة تملا الصفحة. مع نص: متوسطة والنص تحتها */
function entryPages(m){
 var photos=m.type==='photo'?Math.min(3,1+(m.extra||0)):(m.type==='video'||m.type==='audio'?1:0);
 var text=(m.txt||'').trim(),answer=m.type==='answer',hasCap=!!(m.caption&&!answer);
 var cap=90-(answer?12:0);
 var ph=text?44:(hasCap?54:62);
 var first=photos?Math.max(9,cap-ph-(hasCap?9:5)-6):cap-(hasCap?8:0);
 var chunks=text?split(text,first*UU,108*UU):[];
 var out=[{k:'e',m:m,first:1,txt:chunks[0]||'',pi:photos?0:-1,ph:ph}];
 for(var p=1;p<photos;p++)out.push({k:'e',m:m,txt:'',pi:p,ph:62});
 for(var c=1;c<chunks.length;c++)out.push({k:'e',m:m,txt:chunks[c],cont:1,pi:-1});
 return out;
}
function compile(){
 var pg=[{k:'cover'},{k:'title'},{k:'glance'},{k:'hl'},{k:'toc'}];
 var SE=[0,0,1,1,1,2,2,2,3,3,3,0],chs=[],last=null,months={};
 list.forEach(function(m){var s=SE[new Date(m.date).getMonth()];if(!last||last.s!==s){last={s:s,list:[]};chs.push(last)}last.list.push(m)});
 var avgAll=list.length/Math.max(1,chs.length);
 chs.forEach(function(ch,ci){
  var sc=ch.list.filter(function(m){return SC[m.mood]}).map(function(m){return SC[m.mood]}),av=sc.length?sc.reduce(function(a,b){return a+b},0)/sc.length:null;
  ch.d=av!=null&&av>=4?'d_happy':av!=null&&av<=2.5?'d_hard':ch.list.length>avgAll*1.3?'d_busy':'d_calm';
  var chIdx=pg.length;pg.push({k:'chap',ch:ch,ci:ci});
  ch.list.forEach(function(m,mi){
   var mo=new Date(m.date).getMonth();
   if(!months[mo])months[mo]={mo:mo,page:mi===0?chIdx:pg.length,n:0};
   months[mo].n++;
   entryPages(m).forEach(function(p){pg.push(p)});
  });
 });
 pg.push({k:'end'});
 pages=pg;tocData=months;
}

/* ---------- رسم الصفحات ---------- */
function shell(cls,inner,num){
 var pg=el('div','lxpg '+(cls||'')),inn=el('div','lxin',inner);inn.dir=document.documentElement.dir;
 if(num!=null)inn.appendChild(el('div','lxft',String(num)));
 pg.appendChild(inn);return pg;
}
function coverEl(){return shell('cvr','<div class="cvfr"></div><div class="cvc"><div class="cvo foil">✦</div><div class="cvt foil">'+esc(t('bk_cover'))+'</div><div class="cvl"></div><div class="cvy foil">'+YEAR+'</div>
