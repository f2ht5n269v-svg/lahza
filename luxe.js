/* ===== لحظة: كتاب السنة (ورق حقيقي) + الرجوع لقائمة الكتابة ===== */
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
'.lxcast{position:absolute;left:0;top:0;height:100%;width:34Q;opacity:0;background:linear-gradient(to right,rgba(40,25,8,.5),rgba(40,25,8,.3) 16%,rgba(40,25,8,.13) 45%,rgba(40,25,8,.04) 75%,transparent)}',
'.lxleaf{position:absolute;left:0;top:0;width:100%;height:100%;z-index:5;perspective:800Q;perspective-origin:50% 50%}',
'.lxs{position:absolute;top:0;left:0;transform-origin:0 50%;transform-style:preserve-3d;will-change:transform}',
'.lxf,.lxb{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden}',
'.lxb{transform:rotateY(180deg);background:@@N,@@F,linear-gradient(135deg,#f3ead6,#eadfc3)}',
'.lxb.end{background:@@N,repeating-radial-gradient(circle at 25% 30%,#3d1d14 0 .5Q,#5e3321 .5Q 1Q,#7b4d2a 1Q 1.5Q,#4a2418 1.5Q 2Q),#3d1d14}',
'.lxb.g::after{content:"";position:absolute;inset:0;background:linear-gradient(to left,rgba(50,30,10,.3),transparent)}',
'.sh{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;pointer-events:none;background:linear-gradient(to right,rgba(35,22,8,.08),rgba(35,22,8,.7))}',
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
'.lxdt .mo{font-size:5.6Q;white-space:nowrap}',
'.lxor{height:1px;margin:2.8Q 0 3.6Q;background:linear-gradient(90deg,transparent,#b8993f 15%,#b8993f 85%,transparent);position:relative;opacity:.85}',
'.lxor::after{content:"◆";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:2.2Q;color:#a98a2e;background:#f4ebd7;padding:0 1.4Q}',
'.lxcont{font:3.4Q var(--lxd);color:#7a6a4c;text-align:center}',
'.lxtx{font-size:4.9Q;line-height:9Q;white-space:pre-wrap;word-break:break-word;unicode-bidi:plaintext;text-align:start;color:#2b2113}',
'.lxqm{color:#8d7432;font-weight:600}',
'.lxmeas{position:absolute;left:-99999px;top:0;width:82Q;visibility:hidden;pointer-events:none}',
/* معرض صور اليوم */
'.lxgr{position:relative;width:100%;margin-bottom:3Q}',
'.lxcell{position:absolute;display:flex;align-items:center;justify-content:center}',
'.lxph{display:table;margin:0 auto;background:#fffdf6;padding:1.9Q 1.9Q 1.4Q;box-shadow:0 .5Q 1.8Q rgba(60,40,10,.32),0 0 0 1px rgba(0,0,0,.05);position:relative}',
'.lxph .fr{position:relative}.lxph img{display:block;max-width:none;background:#e8dfca}',
'.lxplay{position:absolute;left:50%;top:50%;width:10Q;height:10Q;margin:-5Q 0 0 -5Q;border-radius:50%;background:rgba(20,12,6,.55);color:#f3e2a8;display:flex;align-items:center;justify-content:center;font-size:4Q}',
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
/* صفحة الفصل: بدون أرقام */
'.lxchap{position:absolute;left:6Q;right:6Q;top:6Q;bottom:6Q;border:3px double #b8993f;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 6Q}',
'.lxchap .c2{font:300 9Q/1.2 var(--lxd);color:#b8993f;margin-bottom:4Q}',
'.lxchap .c3{font:600 11Q/1.2 var(--lxd);color:#2a2014}',
'.lxchap .c1{font:3.6Q var(--lxd);letter-spacing:0;color:#8d7432;margin-top:3Q}',
'.lxchap .c4{font:italic 4.4Q/1.7 var(--lxf);color:#6f5f3f;margin-top:4Q}.lxchap .c5{font:3.2Q var(--lxd);color:#9a8a68;margin-top:5Q}',
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
var YEAR,raw=[],pages=[],tocData={},i=0,W=0,H=0,UU=1,root,bk,stage,base,ribw,castEl,board,eF,eS,eB,meas,pill,sndBtn,hintEl;
var leafEl=null,strips=[],turning=null,cur=0,busy=false,g=null,rtl=false,AC=null,up={},rt=null;
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
function urlsOf(m){
 if(up[m.id])return up[m.id];
 up[m.id]=(async function(){
  var arr=[];
  try{
   if(m.type==='photo'){(await photoBlobs(m)).forEach(function(b){arr.push(URL.createObjectURL(b))})}
   else if(m.type==='video'){
    var th=await getBlob('th'+m.id);
    if(!th){var vb=await getBlob(m.id);if(vb)th=await getThumb(m,vb)}
    if(th)arr.push(URL.createObjectURL(th));
   }
  }catch(e){}
  return arr;
 })();
 return up[m.id];
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
function mH(txt){meas.textContent=txt;return meas.offsetHeight/UU}

/* ---------- صفحة اليوم: صور فوق وكتابة تحت ---------- */
var AF=94,AC2=100,GP=3;
function dayText(ms){
 var parts=[];
 ms.forEach(function(m){
  var s='';
  if(m.type==='answer'){if(m.caption)s+='§'+m.caption+'\n';s+=(m.txt||'')}
  else{
   if(isGoal(m))s+='§'+(m.done?t('g_done'):t('m_goals'))+'\n';
   s+=(m.caption||'');
   if(m.caption&&m.txt)s+='\n';
   s+=(m.txt||'');
   if(m.type==='audio')s+=(s?'\n':'')+'🎙 '+fdur(m.dur||0);
  }
  s=s.trim();if(s)parts.push(s);
 });
 return parts.join('\n\n');
}
var txtHTML=function(s){return esc(s).replace(/^§(.*)$/gm,'<span class="lxqm">$1</span>')};
function dayPages(d){
 var ms=d.ms,M=[];
 ms.forEach(function(m){
  if(m.type==='photo'){var n=1+(m.extra||0);for(var q=0;q<n;q++)M.push({m:m,i:q})}
  else if(m.type==='video')M.push({m:m,i:0});
 });
 var txt=dayText(ms),out=[],base={k:'d',day:d.key,ms:ms},chunks,c;
 if(!M.length){
  chunks=txt?split(txt,AF*.95*UU,AC2*.95*UU):[''];
  chunks.forEach(function(ch,j){out.push(Object.assign({},base,{first:j===0,md:[],P:0,txt:ch}))});
  return out;
 }
 var Ht=txt?mH(txt):0,n1=Math.min(M.length,Ht>42?2:4),P=txt?Math.max(36,Math.min(AF-Ht-GP-2,70)):AF;
 var tcap=Math.max(10,AF-P-GP);
 chunks=txt?split(txt,tcap*.95*UU,AC2*.95*UU):[''];
 out.push(Object.assign({},base,{first:true,md:M.slice(0,n1),P:P,txt:chunks[0]||''}));
 for(var o=n1;o<M.length;o+=4)out.push(Object.assign({},base,{first:false,md:M.slice(o,o+4),P:AC2-6,txt:''}));
 for(c=1;c<chunks.length;c++)out.push(Object.assign({},base,{first:false,md:[],P:0,txt:chunks[c]}));
 return out;
}
function compile(){
 var pg=[{k:'cover'},{k:'title'},{k:'glance'},{k:'hl'},{k:'toc'}];
 var SE=[0,0,1,1,1,2,2,2,3,3,3,0],byDay={},days=[],chs=[],last=null,months={};
 raw.forEach(function(m){var k=dstr(m.date);if(!byDay[k]){byDay[k]={key:k,ms:[]};days.push(byDay[k])}byDay[k].ms.push(m)});
 days.forEach(function(d){
  var mo=new Date(d.ms[0].date).getMonth(),s=SE[mo];
  if(!last||last.s!==s){last={s:s,days:[],list:[],m0:mo,m1:mo};chs.push(last)}
  last.days.push(d);last.m1=mo;d.ms.forEach(function(m){last.list.push(m)});
 });
 var avgAll=raw.length/Math.max(1,chs.length);
 chs.forEach(function(ch,ci){
  var sc=ch.list.filter(function(m){return SC[m.mood]}).map(function(m){return SC[m.mood]}),av=sc.length?sc.reduce(function(a,b){return a+b},0)/sc.length:null;
  ch.d=ch.list.length<3?null:(av!=null&&av>=4?'d_happy':av!=null&&av<=2.5?'d_hard':ch.list.length>avgAll*1.3?'d_busy':'d_calm');
  var chIdx=pg.length;pg.push({k:'chap',ch:ch,ci:ci});
  ch.days.forEach(function(d,di){
   var mo=new Date(d.ms[0].date).getMonth();
   if(!months[mo])months[mo]={mo:mo,page:di===0?chIdx:pg.length,n:0};
   months[mo].n+=d.ms.length;
   dayPages(d).forEach(function(p){p.ci=ci;pg.push(p)});
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
function coverEl(){return shell('cvr','<div class="cvfr"></div><div class="cvc"><div class="cvo foil">✦</div><div class="cvt foil">'+esc(t('bk_cover'))+'</div><div class="cvl"></div><div class="cvy foil">'+YEAR+'</div><div class="cvs foil">Lahza</div></div>')}
function titleEl(){return shell('','<div class="lxmid"><div class="lxcrest">✦</div><div class="lxh0">'+esc(t('bk_cover'))+'</div><div class="lxyear">'+YEAR+'</div><div class="lxded">'+esc(X('dedic'))+'</div><div class="lxlogo">Lahza</div></div>')}
function glanceEl(){
 var days=new Set(raw.map(function(m){return dstr(m.date)})).size,cnt={},tot=0;
 MOODS.forEach(function(e){cnt[e]=0});raw.forEach(function(m){if(m.mood&&cnt[m.mood]!==undefined){cnt[m.mood]++;tot++}});
 var h='<div class="lxh1">'+esc(X('glance'))+'</div><div class="lxor"></div><div class="lxsts">'+
  [[raw.length,t('moments')],[days,t('days_rec')],[longestStreak(raw),t('best')]].map(function(a){return '<div class="lxst"><b>'+a[0]+'</b><span>'+esc(a[1])+'</span></div>'}).join('')+'</div>';
 if(tot){h+='<div class="lxsec">'+esc(X('mood'))+'</div>';
  MOODS.forEach(function(e){if(!cnt[e])return;var p=Math.round(cnt[e]/tot*100);h+='<div class="lxmb"><s>'+e+'</s><div class="tr"><div class="fl" style="width:'+p+'%"></div></div><em>'+p+'%</em></div>'})}
 return shell('',h,pageNo('glance'));
}
function hlEl(){
 var joy=bestDay(raw,JOYW,function(m){return m.mood==='😄'?2:0}),pro=bestDay(raw,PROW,function(m){return isGoal(m)&&m.done?2:0});
 var blk=function(b){if(!b)return '<div class="lxqt dim">'+esc(X('none'))+'</div>';
  var m=b.list.slice().sort(function(p,q){return mtext(q).length-mtext(p).length})[0];
  return '<div class="lxdd">'+esc(fdate(b.day+'T12:00:00'))+'</div><div class="lxqt">«'+esc(mtext(m).trim().slice(0,150))+'»</div>'};
 return shell('','<div class="lxh1">'+esc(X('hl'))+'</div><div class="lxor"></div><div class="lxsec">😂 '+esc(X('laugh'))+'</div>'+blk(joy)+'<div class="lxsec">💪 '+esc(X('proud'))+'</div>'+blk(pro),pageNo('hl'));
}
function tocEl(){
 var h='<div class="lxh1">'+esc(X('toc'))+'</div><div class="lxor"></div>';
 Object.keys(tocData).map(Number).sort(function(a,b){return a-b}).forEach(function(mo){var r=tocData[mo];
  h+='<div class="lxtoc" data-go="'+r.page+'"><span>'+esc(MON[S.lang][mo])+'</span><small>'+r.n+'</small><i class="dots"></i><b>'+r.page+'</b></div>'});
 return shell('',h,pageNo('toc'));
}
function chapEl(p){
 var ch=p.ch,M=MON[S.lang],rng=ch.m0===ch.m1?M[ch.m0]:M[ch.m0]+' – '+M[ch.m1];
 return shell('','<div class="lxchap"><div class="c2">✦</div><div class="c3">'+esc(X('seasons')[ch.s])+'</div><div class="c1">'+esc(rng+' '+YEAR)+'</div>'+(ch.d?'<div class="c4">'+esc(X(ch.d))+'</div>':'')+'<div class="c5">'+ch.list.length+' '+esc(t('moments'))+'</div></div>');
}
function endEl(){return shell('','<div class="lxmid"><div class="lxcrest">✦</div><div class="lxh0" style="font-size:7Q">'+esc(X('endt'))+'</div><div class="lxded" style="margin-top:4Q">'+esc(X('endl'))+'</div><div class="lxlogo">Lahza</div></div>')}
function pageNo(k){
 if(typeof k==='string'){for(var a=0;a<pages.length;a++)if(pages[a].k===k)return a;return ''}
 return pages.indexOf(k);
}
function fig(m,idx,u){
 var rot=((((m.id||1)*37+idx*11)%5)-2)*.35,inner='<img src="'+u+'" alt="">';
 if(m.type==='video')inner+='<span class="lxplay">▶</span>';
 return '<figure class="lxph" style="transform:rotate('+rot+'deg)"><div class="fr">'+inner+'</div></figure>';
}
/* يختار أفضل ترتيب للصور حسب أبعادها بحيث تملا المساحة */
function layoutGal(gr){
 var figs=[].slice.call(gr.children).filter(function(f){return f.querySelector('img')});
 var n=figs.length;if(!n)return;
 var imgs=figs.map(function(f){return f.querySelector('img')});
 var asp=imgs.map(function(x){return (x.naturalWidth&&x.naturalHeight)?x.naturalWidth/x.naturalHeight:.75});
 var AW=82,AH=+gr.getAttribute('data-h'),G=2.2,PW=3.8,PH=3.3;
 var hh=(AH-G)/2,hw=(AW-G)/2,th=(AH-2*G)/3,tw=(AW-2*G)/3,L;
 if(n===1)L=[[[0,0,AW,AH]]];
 else if(n===2)L=[[[0,0,AW,hh],[0,hh+G,AW,hh]],[[0,0,hw,AH],[hw+G,0,hw,AH]]];
 else if(n===3)L=[
  [[0,0,AW,th],[0,th+G,AW,th],[0,2*(th+G),AW,th]],
  [[0,0,AW,hh],[0,hh+G,hw,hh],[hw+G,hh+G,hw,hh]],
  [[0,0,hw,hh],[hw+G,0,hw,hh],[0,hh+G,AW,hh]],
  [[0,0,hw,AH],[hw+G,0,hw,hh],[hw+G,hh+G,hw,hh]],
  [[0,0,hw,hh],[0,hh+G,hw,hh],[hw+G,0,hw,AH]],
  [[0,0,tw,AH],[tw+G,0,tw,AH],[2*(tw+G),0,tw,AH]]
 ];
 else L=[
  [[0,0,hw,hh],[hw+G,0,hw,hh],[0,hh+G,hw,hh],[hw+G,hh+G,hw,hh]],
  [[0,0,AW,hh],[0,hh+G,tw,hh],[tw+G,hh+G,tw,hh],[2*(tw+G),hh+G,tw,hh]],
  [[0,0,tw,hh],[tw+G,0,tw,hh],[2*(tw+G),0,tw,hh],[0,hh+G,AW,hh]]
 ];
 function fit(c,a){
  var aw=c[2]-PW,ah=c[3]-PH;
  if(aw<=0||ah<=0)return {w:1,h:1};
  var w=Math.min(aw,ah*a);return {w:w,h:w/a};
 }
 var best=L[0],bs=-1;
 L.forEach(function(lay){var s=0;lay.forEach(function(c,k){var f=fit(c,asp[k]);s+=f.w*f.h});if(s>bs){bs=s;best=lay}});
 gr.style.height=(AH*UU)+'px';
 var rl=document.documentElement.dir==='rtl';
 figs.forEach(function(f,k){
  var c=best[k],fz=fit(c,asp[k]),im=imgs[k];
  im.style.width=(fz.w*UU).toFixed(1)+'px';im.style.height=(fz.h*UU).toFixed(1)+'px';
  var x=rl?AW-c[0]-c[2]:c[0];
  var cell=el('div','lxcell');
  cell.style.cssText='left:'+(x*UU).toFixed(1)+'px;top:'+(c[1]*UU).toFixed(1)+'px;width:'+(c[2]*UU).toFixed(1)+'px;height:'+(c[3]*UU).toFixed(1)+'px';
  cell.appendChild(f);gr.appendChild(cell);
 });
}
function dayEl(p,um){
 var ms=p.ms,d=new Date(ms[0].date),mo=MON[S.lang][d.getMonth()],h='';
 if(p.first){
  var moods=[];ms.forEach(function(m){if(m.mood&&moods.indexOf(m.mood)<0)moods.push(m.mood)});
  var tm=(ms.length===1&&!ms[0].noTime)?' · '+ftime(ms[0].date):'';
  h+='<div class="lxdt"><span class="dn">'+d.getDate()+'</span><span class="dm"><b>'+esc(DAYS[S.lang][d.getDay()])+'</b><i>'+esc(mo+' '+d.getFullYear()+tm)+'</i></span>'+(moods.length?'<span class="mo">'+moods.slice(0,3).join('')+'</span>':'')+'</div><div class="lxor"></div>';
 }else h+='<div class="lxhd">'+esc(mo+' · '+d.getFullYear())+'</div><div class="lxcont">'+esc(fdate(ms[0].date))+'</div><div class="lxor"></div>';
 if(p.md.length){
  var f='';
  p.md.forEach(function(it){var m=it.m,u=(um[m.id]||[])[m.type==='video'?0:it.i];if(u)f+=fig(m,it.i,u)});
  if(f)h+='<div class="lxgr" data-h="'+p.P+'">'+f+'</div>';
 }
 if(p.txt)h+='<div class="lxtx">'+txtHTML(p.txt)+'</div>';
 return shell('',h,pageNo(p));
}
async function make(p){
 var pg;
 if(p.k==='cover')pg=coverEl();else if(p.k==='title')pg=titleEl();else if(p.k==='glance')pg=glanceEl();else if(p.k==='hl')pg=hlEl();
 else if(p.k==='toc')pg=tocEl();else if(p.k==='chap')pg=chapEl(p);else if(p.k==='end')pg=endEl();
 else{
  var um={};
  for(var q=0;q<p.md.length;q++){var mm=p.md[q].m;if(!um[mm.id])um[mm.id]=await urlsOf(mm)}
  pg=dayEl(p,um);
 }
 var ims=pg.querySelectorAll('img');
 await Promise.all([].map.call(ims,function(x){return x.decode?x.decode().catch(function(){}):0}));
 [].forEach.call(pg.querySelectorAll('.lxgr[data-h]'),layoutGal);
 return pg;
}

/* ---------- الورقة المقلوبة: قطعة وحدة بدون شرائح ---------- */
function buildLeaf(front,isCover){
 leafEl=el('div','lxleaf');
 var s=el('div','lxs');s.style.cssText='width:'+W+'px;height:'+H+'px';
 var f=el('div','lxf'),c=front.cloneNode(true);c.style.cssText+=';left:0;top:0;width:'+W+'px;height:'+H+'px';
 var fs=el('i','sh');f.append(c,fs);
 var b=el('div','lxb'+(isCover?' end':'')+' g'),bs=el('i','sh');b.appendChild(bs);
 s.append(f,b);leafEl.appendChild(s);strips=[{s:s,fs:fs,bs:bs}];
 stage.appendChild(leafEl);
}
function setP(p){
 cur=p;var sn=Math.sin(Math.PI*p),th=p*180,r=th*Math.PI/180,L=strips[0];if(!L)return;
 L.s.style.transform='rotateX('+(sn*1.4).toFixed(2)+'deg) rotateY('+(-th).toFixed(2)+'deg)';
 var sv=Math.abs(Math.sin(r));
 L.fs.style.opacity=th<90?(sv*.8).toFixed(3):0;
 L.bs.style.opacity=th>=90?(sv*.55).toFixed(3):0;
 var xe=W*Math.cos(r);
 castEl.style.transform='translateX('+xe.toFixed(1)+'px)';
 castEl.style.opacity=(xe>2&&xe<W-2)?Math.min(1,sn*1.6).toFixed(3):0;
}
async function beginTurn(dir,target){
 if(busy)return false;busy=true;
 try{
  var fi=dir>0?i:target,ui=dir>0?target:i;
  var res=await Promise.all([make(pages[fi]),make(pages[ui])]),fn=res[0],un=res[1];
  base.innerHTML='';base.appendChild(un);
  buildLeaf(fn,pages[fi].k==='cover');
  turning={dir:dir,target:target,fn:fn};
  setP(dir>0?0:1);
  ribw.style.display='none';
  return true;
 }catch(e){busy=false;return false}
}
function animate(to,slow){
 return new Promise(function(res){
  var from=cur,dist=Math.abs(to-from);if(dist<.002){setP(to);return res()}
  var dur=(slow?820:700)*Math.min(1,.4+dist),t0=performance.now();
  (function step(now){
   var k=Math.min(1,(now-t0)/dur),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;
   setP(from+(to-from)*e);if(k<1)requestAnimationFrame(step);else res();
  })(t0);
 });
}
async function finish(commit,slow){
 var tr=turning,to=tr.dir>0?(commit?1:0):(commit?0:1);
 if(commit)paper();
 await animate(to,slow);
 if(commit)i=tr.target;
 if((tr.dir>0&&!commit)||(tr.dir<0&&commit)){base.innerHTML='';base.appendChild(tr.fn)}
 if(leafEl)leafEl.remove();leafEl=null;strips=[];turning=null;castEl.style.opacity=0;busy=false;refresh();
}
async function jump(n){
 if(busy||n===i||n<0||n>=pages.length)return;
 var dir=n>i?1:-1;if(!(await beginTurn(dir,n)))return;
 await finish(true,true);
}

/* ---------- عرض وحالة ---------- */
function edges(){
 var L=pages.length,T=Math.max(3,Math.min(13,L/10)),Tf=T*(L-1-i)/Math.max(1,L-1),Ts=T*i/Math.max(1,L-1);
 eF.style.width=Tf+'px';eS.style.width=Ts+'px';eB.style.height=(T*.8)+'px';
 board.style.left=-(Ts+5)+'px';board.style.right=-(Tf+5)+'px';board.style.top='-5px';board.style.bottom=-(T*.8+5)+'px';
}
function refresh(){
 pill.textContent=i+' / '+(pages.length-1);edges();
 ribw.style.display=(i>0&&i<pages.length-1)?'block':'none';
 [i-1,i+1].forEach(function(k){if(pages[k])make(pages[k]).catch(function(){})});
}
async function showBase(){var n=await make(pages[i]);base.innerHTML='';base.appendChild(n);refresh()}
function layout(){
 var vw=innerWidth,vh=innerHeight,w=Math.min(vw-56,500),h=w*1.42,mh=vh-210;
 if(h>mh){h=mh;w=h/1.42}
 W=Math.round(w);H=Math.round(W*1.42);UU=W/100;
 bk.style.setProperty('--u',UU+'px');bk.style.width=W+'px';bk.style.height=H+'px';stage.style.width=W+'px';stage.style.height=H+'px';
}
function relayout(){
 if(!root||busy||g)return;
 var a=pages[i];layout();compile();
 var k=pages.findIndex(function(p){return p.k===a.k&&(a.day?(p.day===a.day&&!!p.first===!!a.first):true)&&(a.ci==null||p.ci===a.ci)});
 i=k<0?0:k;showBase();
}

/* ---------- لمس ---------- */
function pOf(cx){var d=(cx-g.x0)*fwd()/(W*.85);return g.dir>0?clamp(d):clamp(1+d)}
function onDown(e){
 if(e.target.closest('.lxctl'))return;audioInit();
 g={x0:e.clientX,y0:e.clientY,t0:performance.now(),lx:e.clientX,lt:performance.now(),v:0,mode:null,cx:e.clientX};
 try{root.setPointerCapture(e.pointerId)}catch(x){}
}
function onMove(e){
 if(!g)return;var now=performance.now(),dt=now-g.lt;
 if(dt>0)g.v=g.v*.6+((e.clientX-g.lx)*fwd()/dt)*.4;g.lx=e.clientX;g.lt=now;g.cx=e.clientX;
 if(!g.mode){
  var dx=e.clientX-g.x0,dy=e.clientY-g.y0;
  if(Math.abs(dx)>10&&Math.abs(dx)>Math.abs(dy)){
   var dir=dx*fwd()>0?1:-1;
   if(busy||(dir>0&&i>=pages.length-1)||(dir<0&&i<=0)){g.mode='none';return}
   g.mode='drag';g.dir=dir;var gg=g;
   g.ready=beginTurn(dir,i+dir).then(function(ok){if(ok&&leafEl)setP(pOf(gg.cx));return ok});
  }else if(Math.abs(dy)>14)g.mode='none';
 }else if(g.mode==='drag'&&turning&&leafEl)setP(pOf(e.clientX));
}
async function onUp(e){
 if(!g)return;var gg=g;g=null;
 if(gg.mode==='drag'){
  var ok=await gg.ready;if(!ok||!turning)return;
  var vc=gg.dir>0?gg.v:-gg.v,commit=gg.dir>0?cur>.42:cur<.58;
  if(vc>.4)commit=true;else if(vc<-.4)commit=false;
  await finish(commit,false);return;
 }
 if(gg.mode)return;
 if(performance.now()-gg.t0>600||busy)return;
 var go=e.target.closest&&e.target.closest('[data-go]');
 if(go){jump(+go.getAttribute('data-go'));return}
 var r=bk.getBoundingClientRect(),fr=(e.clientX-r.left)/r.width,fore=rtl?fr<.6:fr>.4;
 if(fore)jump(i+1);else jump(i-1);
}

/* ---------- فتح وإغلاق ---------- */
function closeBook(){
 if(!root)return;var r=root;root=null;r.classList.add('out');
 window.removeEventListener('resize',onRes);
 setTimeout(function(){r.remove()},300);
 Object.keys(up).forEach(function(k){up[k].then(function(a){a.forEach(function(u){URL.revokeObjectURL(u)})})});up={};
}
function onRes(){clearTimeout(rt);rt=setTimeout(relayout,250)}
async function openBook(){
 if(root)return;hide('statsModal');
 var all=await getAll(),clean=all.filter(function(m){return !String(m.caption||'').startsWith('⇄')});
 YEAR=new Date().getFullYear();
 raw=clean.filter(function(m){return new Date(m.date).getFullYear()===YEAR}).sort(asc);
 if(!raw.length&&clean.length){YEAR=Math.max.apply(null,clean.map(function(m){return new Date(m.date).getFullYear()}));raw=clean.filter(function(m){return new Date(m.date).getFullYear()===YEAR}).sort(asc)}
 if(!raw.length)return toast(t('no_moments'),1);
 rtl=document.documentElement.dir==='rtl';i=0;busy=false;turning=null;leafEl=null;g=null;
 root=el('div','lxbook');root.appendChild(el('div','lxdesk'));
 bk=el('div','lxbk');stage=el('div','lxstage'+(rtl?' rtl':''));
 board=el('div','lxboard');eF=el('div','lxedge f');eS=el('div','lxedge s');eB=el('div','lxedge b');base=el('div','lxbase');
 ribw=el('div','lxribw','<div class="lxrib"></div>');var cw=el('div','lxcastw');castEl=el('div','lxcast');cw.appendChild(castEl);
 stage.append(board,eF,eS,eB,base,ribw,cw);
 meas=el('div','lxmeas lxtx');meas.dir=document.documentElement.dir;
 bk.append(el('div','lxground'),stage,meas);root.appendChild(bk);
 var top=el('div','lxctl top'),xb=el('button','lxbtn','✕'),rw=el('div','lxrow');
 pill=el('div','lxpill','');
 var tb=el('button','lxbtn','☰');sndBtn=el('button','lxbtn'+(LS('lahza-booksnd')==='off'?' off':''),'♪');
 xb.onclick=closeBook;tb.onclick=function(){audioInit();jump(pages.findIndex(function(p){return p.k==='toc'}))};
 sndBtn.onclick=function(){var off=LS('lahza-booksnd')==='off';LS('lahza-booksnd',off?'on':'off');sndBtn.classList.toggle('off',!off)};
 rw.append(sndBtn,tb);top.append(xb,pill,rw);
 var bot=el('div','lxctl bot'),pdf=el('button','lxchip',t('bk_pdf'));hintEl=el('div','lxhint',X('hint'));
 pdf.onclick=async function(){try{await renderStats();var b=Array.prototype.find.call(document.querySelectorAll('#statsBody button'),function(x){return x.textContent.trim()===t('bk_pdf')});if(b)b.click()}catch(e){toast(t('err'),1)}};
 bot.append(hintEl,pdf);root.append(top,bot);
 document.body.appendChild(root);
 root.addEventListener('pointerdown',onDown);root.addEventListener('pointermove',onMove);
 root.addEventListener('pointerup',onUp);root.addEventListener('pointercancel',function(){g=null});
 window.addEventListener('resize',onRes);
 layout();compile();await showBase();
}

/* ---------- اعتراض زر كتاب السنة القديم ---------- */
document.addEventListener('click',function(e){
 var b=e.target.closest&&e.target.closest('#statsBody button');
 if(b&&b.textContent.trim()===t('bk_flip')){e.stopImmediatePropagation();e.preventDefault();openBook()}
},true);
window.luxeBook=openBook;
})();

/* ===== الرجوع لقائمة الكتابة بعد الحفظ (يوميات، أهداف، أسئلة) ===== */
(function(){
'use strict';
if(window.__lxflow)return;window.__lxflow=1;
var $=function(i){return document.getElementById(i)};
var vis=function(id){var e=$(id);return !!e&&!e.classList.contains('hidden')};
var menu=function(){setTimeout(function(){if(typeof window.writeMenu==='function')window.writeMenu()},80)};
var ques=function(){setTimeout(function(){if(typeof window.qHub==='function')window.qHub()},80)};
S._saving=0;S._viaQ=false;S._oldT=false;

/* نتذكر كيف انفتحت شاشة الكتابة */
var _ot=window.openText;
window.openText=function(){S._viaQ=false;S._oldT=!!S.oldDate;return _ot.apply(this,arguments)};
var _at=window.attach;
window.attach=function(){var r=_at.apply(this,arguments);S._viaQ=true;return r};

/* بعد حفظ نص أو جواب: نستنى تسكّر الشاشات ثم نرجع */
function back(ans){
 var t0=Date.now();
 (function wait(){
  if((vis('textScreen')||vis('saveScreen'))&&Date.now()-t0<2500){setTimeout(wait,120);return}
  S._saving=0;
  if(ans)ques();else menu();
 })();
}
var _am=window.addMoment;
window.addMoment=async function(m){
 var track=!!(m&&(m.type==='text'||m.type==='answer')&&!m.noTime),ans=!!(m&&m.type==='answer'),id;
 if(track)S._saving=1;
 try{id=await _am.apply(this,arguments)}catch(e){S._saving=0;throw e}
 if(track)back(ans);
 return id;
};

/* الضغط على ✕ بشاشة الكتابة */
var ts=$('textScreen');
if(ts){
 var wasShown=vis('textScreen');
 new MutationObserver(function(){
  var shown=vis('textScreen');
  if(wasShown&&!shown){
   if(!S._saving&&!S._oldT&&!vis('saveScreen')){if(S._viaQ)ques();else menu()}
  }
  wasShown=shown;
 }).observe(ts,{attributes:true,attributeFilter:['class']});
}

/* ✕ من قائمة الأسئلة: نرجع لقائمة الكتابة */
var _q=window.qHub;
window.qHub=function(){
 _q.apply(this,arguments);
 var sh=document.body.lastElementChild;
 if(!sh||!sh.classList.contains('sheet'))return;
 var mo=new MutationObserver(function(){
  if(document.body.contains(sh))return;
  mo.disconnect();
  if(vis('textScreen')||S.oldDate||S._saving)return;
  menu();
 });
 mo.observe(document.body,{childList:true});
};
})();
