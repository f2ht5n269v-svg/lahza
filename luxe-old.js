/* ===== لحظة: إضافة بتاريخ قديم (آلة الزمن) ===== */
(function(){
'use strict';
if(window.__lxo)return;window.__lxo=1;
var $=function(i){return document.getElementById(i)};
var el=function(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
var dp=$('datePickerSheet'),tp=$('typePickerSheet');
if(!dp||!tp||!$('actionOldDate'))return;

I.ar.ev_title='وصف الحدث';I.en.ev_title='Describe the event';I.sv.ev_title='Beskriv händelsen';
I.ar.ev_ph='احكِ عن هذا الحدث كما تتذكّره...';I.en.ev_ph='Tell the story of this moment...';I.sv.ev_ph='Berätta om händelsen...';
I.ar.ev_q='ماذا تريد أن توثّق؟';I.en.ev_q='What would you like to record?';I.sv.ev_q='Vad vill du dokumentera?';

function svgBg(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'}
var LEATHER=svgBg("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .9 0 0 0 -.25'/></filter><rect width='100%' height='100%' filter='url(#l)'/></svg>");
var GOLD='linear-gradient(115deg,#8a6d1b 0%,#f2dc8f 28%,#b8932f 48%,#f6e7a8 70%,#8a6d1b 100%)';
var SPR='cubic-bezier(.34,1.56,.64,1)';
var RIV='radial-gradient(circle at 14px 14px,#e0c26e 0 3px,#6b4d12 3.5px,transparent 4.5px),radial-gradient(circle at calc(100% - 14px) 14px,#e0c26e 0 3px,#6b4d12 3.5px,transparent 4.5px),radial-gradient(circle at 14px calc(100% - 14px),#e0c26e 0 3px,#6b4d12 3.5px,transparent 4.5px),radial-gradient(circle at calc(100% - 14px) calc(100% - 14px),#e0c26e 0 3px,#6b4d12 3.5px,transparent 4.5px)';

var css=[
'#datePickerSheet,#typePickerSheet{background:rgba(5,3,2,.78);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}',
'#datePickerSheet .sheet-content,#typePickerSheet .sheet-content{position:relative;max-width:420px;padding:34px 22px 24px;border-radius:30px;border:1px solid rgba(212,175,55,.45);background:@@L,radial-gradient(ellipse at 50% 0%,#3a281b,#170f0a 72%);color:#ecdcae;box-shadow:0 30px 70px rgba(0,0,0,.7),inset 0 0 0 5px rgba(0,0,0,.25),inset 0 0 0 6px rgba(212,175,55,.18)}',
'#datePickerSheet .sheet-content::before,#typePickerSheet .sheet-content::before{content:"";position:absolute;inset:0;border-radius:30px;pointer-events:none;background:@@R}',
'#datePickerSheet .sheet-close,#typePickerSheet .sheet-close{top:16px;left:16px;color:#e6cf8a;background:rgba(10,6,4,.6);border-color:rgba(212,175,55,.4);transition:transform .35s @@S}',
'#datePickerSheet .sheet-close:active,#typePickerSheet .sheet-close:active{transform:scale(.88)}',
'.lxo-t{color:#f2dc8f!important;font:500 1.5rem var(--fq)!important;margin:2px 0 4px!important;text-shadow:0 1px 3px rgba(0,0,0,.6)}',
'.lxo-sel{display:none!important}',
'.lxo-pv{min-height:1.8em;margin-bottom:16px;font:400 1.1rem var(--fq);color:#cdb985;letter-spacing:.02em}',
/* العجلات */
'.lxo-wheels{position:relative;display:flex;gap:4px;height:230px;margin:0 0 20px;padding:0 8px;border-radius:22px;background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.25) 50%,rgba(0,0,0,.55));border:1px solid rgba(212,175,55,.3);box-shadow:inset 0 4px 14px rgba(0,0,0,.7),inset 0 -4px 14px rgba(0,0,0,.5),0 1px 0 rgba(255,235,170,.12)}',
'.lxo-band{position:absolute;left:6px;right:6px;top:92px;height:46px;border-radius:14px;border:1px solid rgba(232,207,133,.6);background:linear-gradient(180deg,rgba(232,207,133,.14),rgba(232,207,133,.05));box-shadow:0 0 18px rgba(212,175,55,.18),inset 0 1px 0 rgba(255,245,200,.2);pointer-events:none;z-index:2}',
'.lxo-wc{position:relative;flex:1;min-width:0}',
'.lxo-wc.d{flex:.8}.lxo-wc.m{flex:1.5}.lxo-wc.y{flex:1}',
'.lxo-wl{height:100%;overflow-y:scroll;padding:92px 0;scroll-snap-type:y mandatory;overscroll-behavior:contain;touch-action:pan-y;scrollbar-width:none;-webkit-mask-image:linear-gradient(transparent,#000 32%,#000 68%,transparent);mask-image:linear-gradient(transparent,#000 32%,#000 68%,transparent)}',
'.lxo-wl::-webkit-scrollbar{display:none}',
'.lxo-wi{height:46px;display:flex;align-items:center;justify-content:center;scroll-snap-align:center;font:500 1.3rem var(--fq);color:#a99869;cursor:pointer;will-change:transform,opacity;-webkit-user-select:none;user-select:none}',
'.lxo-wi.on{color:#f6e7a8;font-weight:700}',
'#datePickerConfirm{margin:0!important;border:0;color:#2a1a08;font:600 1.15rem var(--fd);letter-spacing:.05em;background:@@G;background-size:220% 100%;box-shadow:0 10px 26px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.55),inset 0 -2px 5px rgba(90,60,10,.5);transition:transform .4s @@S}',
'#datePickerConfirm:active{transform:scale(.96)}',
/* اختيار النوع */
'.lxo-tdate{margin-bottom:18px;font:italic 1.05rem var(--fq);color:#cdb985}',
'.lxo-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:6px 0 14px}',
'.lxo-grid .btn{margin:0;max-width:none;display:flex;flex-direction:column;align-items:center;gap:10px;padding:22px 8px 18px;border-radius:22px;border:1px solid rgba(212,175,55,.38);background:linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.01));color:#ecdcae;font:500 1.05rem var(--fd);transition:transform .4s @@S,border-color .3s,background .3s}',
'.lxo-grid .btn:active{transform:scale(.94);border-color:#e8cf85;background:rgba(212,175,55,.14)}',
'.lxo-grid .btn svg{width:32px;height:32px;stroke:#e6cf8a;fill:none;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}',
'#typePickerSheet #pickTypeCancel{margin:0 auto;background:transparent;border:1px solid rgba(212,175,55,.35);color:#cdb985;padding:13px;font:500 1rem var(--fd);transition:transform .35s @@S}',
'#typePickerSheet #pickTypeCancel:active{transform:scale(.95)}'
].join('');
css=css.split('@@L').join(LEATHER).split('@@G').join(GOLD).split('@@S').join(SPR).split('@@R').join(RIV);
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

function tick(){try{var h=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.Haptics;if(h&&h.impact)Promise.resolve(h.impact({style:'LIGHT'})).catch(function(){})}catch(e){}}

/* ---------- عجلة واحدة ---------- */
var H=46;
function Wheel(cls,onPick){
 var box=el('div','lxo-wc '+cls),list=el('div','lxo-wl');box.appendChild(list);
 var items=[],cur=0,prog=false,raf=0;
 function paint(){
  var p=list.scrollTop/H,n=Math.round(p);
  for(var k=0;k<items.length;k++){
   var d=Math.abs(k-p),f=Math.min(d,2.4);
   items[k].style.opacity=(1-f*.3).toFixed(2);
   items[k].style.transform='scale('+(1-f*.09).toFixed(3)+')';
   items[k].classList.toggle('on',k===n);
  }
 }
 function set(i,smooth){
  i=Math.max(0,Math.min(items.length-1,i));cur=i;
  if(smooth){prog=true;try{list.scrollTo({top:i*H,behavior:'smooth'})}catch(e){list.scrollTop=i*H}setTimeout(function(){prog=false;paint()},480)}
  else{list.scrollTop=i*H;paint()}
 }
 list.addEventListener('scroll',function(){
  if(raf)return;
  raf=requestAnimationFrame(function(){
   raf=0;paint();if(prog)return;
   var i=Math.max(0,Math.min(items.length-1,Math.round(list.scrollTop/H)));
   if(i!==cur){cur=i;tick();onPick(i)}
  });
 },{passive:true});
 function setItems(labels,i){
  if(items.length===labels.length){for(var k=0;k<labels.length;k++)items[k].textContent=labels[k];set(i,false);return}
  list.innerHTML='';
  items=labels.map(function(l,k){var d=el('div','lxo-wi');d.textContent=l;d.onclick=function(){set(k,true);onPick(k);tick()};list.appendChild(d);return d});
  set(i,false);
 }
 return {box:box,setItems:setItems,set:set};
}

/* ---------- إعداد نافذة التاريخ (مرة وحدة) ---------- */
var sc=dp.querySelector('.sheet-content'),kids=sc.children;
var closeB=kids[0],title=kids[1],selRow=kids[2];
title.classList.add('lxo-t');selRow.classList.add('lxo-sel');
var pv=el('div','lxo-pv'),host=el('div','lxo-wheels');
sc.insertBefore(pv,selRow);sc.insertBefore(host,selRow);

function opts(sel){return [].map.call(sel.options,function(x){return x.text})}
function openWheels(){
 var ys=$('pickYear'),ms=$('pickMonth'),ds=$('pickDay'),now=new Date();
 ys.value=String(now.getFullYear());ms.value=String(now.getMonth()+1);
 if(ms.onchange)ms.onchange();
 ds.value=String(now.getDate());
 host.innerHTML='';host.appendChild(el('div','lxo-band'));
 var wd,wm,wy;
 function upd(){try{pv.textContent=fdate(new Date(+ys.value,+ms.value-1,+ds.value,12))}catch(e){}}
 function days(){if(ys.onchange)ys.onchange();wd.setItems(opts(ds),ds.selectedIndex)}
 wd=Wheel('d',function(i){ds.selectedIndex=i;upd()});
 wm=Wheel('m',function(i){ms.selectedIndex=i;days();upd()});
 wy=Wheel('y',function(i){ys.selectedIndex=i;days();upd()});
 host.appendChild(wd.box);host.appendChild(wm.box);host.appendChild(wy.box);
 wy.setItems(opts(ys),ys.selectedIndex);wm.setItems(opts(ms),ms.selectedIndex);wd.setItems(opts(ds),ds.selectedIndex);
 upd();
 requestAnimationFrame(function(){wy.set(ys.selectedIndex);wm.set(ms.selectedIndex);wd.set(ds.selectedIndex)});
}
var orig=$('actionOldDate').onclick;
$('actionOldDate').onclick=function(e){
 if(typeof orig==='function')orig.call(this,e);
 try{openWheels()}catch(x){console.error(x)}
};

/* ---------- إعداد نافذة النوع (مرة وحدة) ---------- */
var tc=tp.querySelector('.sheet-content'),tt=tc.children[1];
tt.classList.add('lxo-t');tt.setAttribute('data-i18n','ev_q');tt.textContent=t('ev_q');
var td=el('div','lxo-tdate');tc.insertBefore(td,tc.children[2]);
function ic(d){return '<svg viewBox="0 0 24 24">'+d+'</svg>'}
var ICONS={
 pickTypePhoto:ic('<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'),
 pickTypeVideo:ic('<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>'),
 pickTypeAudio:ic('<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="18" x2="12" y2="22"/>'),
 pickTypeText:ic('<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>')
};
var grid=el('div','lxo-grid');
['pickTypePhoto','pickTypeVideo','pickTypeAudio','pickTypeText'].forEach(function(id){
 var b=$(id);b.classList.remove('primary');
 if(b.firstChild&&b.firstChild.nodeType===3)b.removeChild(b.firstChild);
 var w=el('span','',ICONS[id]);w.style.display='flex';b.insertBefore(w,b.firstChild);
 grid.appendChild(b);
});
tc.insertBefore(grid,$('pickTypeCancel'));

$('datePickerConfirm').addEventListener('click',function(){try{td.textContent=fdate(S.oldDate)}catch(e){}});

/* الكتابة عن حدث قديم: شاشة وصف مباشرة بدون قائمة اليوميات والأهداف */
$('pickTypeText').onclick=function(){
 hide('typePickerSheet');
 openText('personal');
 $('textTitle').textContent=t('ev_title');
 $('textInput').placeholder=t('ev_ph');
};
})();
