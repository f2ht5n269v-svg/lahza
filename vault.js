/* ====== لحظة: الخزنة + المواعيد + التذكيرات (ثلاث لغات) ====== */
(function(){
'use strict';
var $=function(id){return document.getElementById(id)};
var L=function(){var l=document.documentElement.lang;return (l==='en'||l==='sv')?l:'ar'};

var T={
ar:{vault:'الخزنة',docs:'وثائق',appts:'مواعيد',add_doc:'إضافة وثيقة',add_appt:'إضافة موعد',edit_doc:'تعديل الوثيقة',edit_appt:'تعديل الموعد',name:'الاسم',notes:'ملاحظات',cat:'الفئة',
c_warranty:'ضمان',c_id:'هوية',c_medical:'طبي',c_finance:'مالي',c_other:'أخرى',expiry:'تاريخ الانتهاء',clear:'مسح',rem_before:'تذكير قبل الانتهاء',
d0:'بدون',d7:'أسبوع',d30:'شهر',d90:'3 شهور',attach:'إرفاق صورة أو ملف PDF',empty_docs:'الخزنة فارغة. أضف ضماناً أو وثيقة مهمة وسنذكّرك قبل انتهائها',empty_appts:'لا توجد مواعيد. أضف موعداً وسنذكّرك به',
expires:'ينتهي',expired:'منتهية منذ',day:'التاريخ',time:'الوقت',rem_appt:'تذكير قبل الموعد',r0:'في الوقت',r15:'15 دقيقة',r60:'ساعة',r1440:'يوم',done:'تم',undone:'إعادة فتح',past:'السابقة',
need_name:'اكتب الاسم أولاً',need_date:'اختر التاريخ والوقت',del:'حذف',del_q:'هل تريد الحذف؟',close:'إغلاق',save:'حفظ',saved:'تم الحفظ',back:'رجوع',
exp:'تصدير الخزنة',imp:'استيراد الخزنة',exp_ok:'تم التصدير',imp_ok:'تم الاستيراد',err:'حدث خطأ',next_appt:'موعدك القادم',exp_n:'وثيقة تنتهي خلال 30 يوماً',
nvt:'تنبيه من الخزنة',nvb:'تنتهي «{n}» بتاريخ {d}',nvd:'تنتهي «{n}» اليوم',nat:'تذكير بموعد',nab:'«{n}» الساعة {h}',ok:'تأكيد',no:'إلغاء',left:'متبقي {n} يوم',today:'اليوم'},
en:{vault:'Vault',docs:'Documents',appts:'Appointments',add_doc:'Add document',add_appt:'Add appointment',edit_doc:'Edit document',edit_appt:'Edit appointment',name:'Name',notes:'Notes',cat:'Category',
c_warranty:'Warranty',c_id:'ID',c_medical:'Medical',c_finance:'Finance',c_other:'Other',expiry:'Expiry date',clear:'Clear',rem_before:'Remind before expiry',
d0:'None',d7:'1 week',d30:'1 month',d90:'3 months',attach:'Attach photo or PDF',empty_docs:'The vault is empty. Add a warranty or important document and we will remind you before it expires',empty_appts:'No appointments. Add one and we will remind you',
expires:'Expires',expired:'Expired',day:'Date',time:'Time',rem_appt:'Remind before appointment',r0:'On time',r15:'15 min',r60:'1 hour',r1440:'1 day',done:'Done',undone:'Reopen',past:'Past',
need_name:'Enter a name first',need_date:'Pick a date and time',del:'Delete',del_q:'Delete this?',close:'Close',save:'Save',saved:'Saved',back:'Back',
exp:'Export vault',imp:'Import vault',exp_ok:'Exported',imp_ok:'Imported',err:'Something went wrong',next_appt:'Next appointment',exp_n:'documents expire within 30 days',
nvt:'Vault alert',nvb:'"{n}" expires on {d}',nvd:'"{n}" expires today',nat:'Appointment reminder',nab:'"{n}" at {h}',ok:'Confirm',no:'Cancel',left:'{n} days left',today:'Today'},
sv:{vault:'Kassaskåp',docs:'Dokument',appts:'Bokningar',add_doc:'Lägg till dokument',add_appt:'Lägg till bokning',edit_doc:'Redigera dokument',edit_appt:'Redigera bokning',name:'Namn',notes:'Anteckningar',cat:'Kategori',
c_warranty:'Garanti',c_id:'ID',c_medical:'Medicinskt',c_finance:'Ekonomi',c_other:'Övrigt',expiry:'Utgångsdatum',clear:'Rensa',rem_before:'Påminn före utgång',
d0:'Ingen',d7:'1 vecka',d30:'1 månad',d90:'3 månader',attach:'Bifoga foto eller PDF',empty_docs:'Kassaskåpet är tomt. Lägg till en garanti eller viktigt dokument så påminner vi dig före utgång',empty_appts:'Inga bokningar. Lägg till en så påminner vi dig',
expires:'Går ut',expired:'Gick ut',day:'Datum',time:'Tid',rem_appt:'Påminn före bokningen',r0:'Vid tiden',r15:'15 min',r60:'1 timme',r1440:'1 dag',done:'Klar',undone:'Öppna igen',past:'Tidigare',
need_name:'Skriv ett namn först',need_date:'Välj datum och tid',del:'Radera',del_q:'Radera detta?',close:'Stäng',save:'Spara',saved:'Sparat',back:'Tillbaka',
exp:'Exportera kassaskåp',imp:'Importera kassaskåp',exp_ok:'Exporterad',imp_ok:'Importerad',err:'Något gick fel',next_appt:'Nästa bokning',exp_n:'dokument går ut inom 30 dagar',
nvt:'Påminnelse från kassaskåpet',nvb:'"{n}" går ut den {d}',nvd:'"{n}" går ut idag',nat:'Påminnelse om bokning',nab:'"{n}" kl. {h}',ok:'Bekräfta',no:'Avbryt',left:'{n} dagar kvar',today:'Idag'}
};
var t=function(k){return (T[L()]&&T[L()][k])||T.ar[k]||k};
var msg=function(m,e){if(typeof window.toast==='function')window.toast(m,e);else alert(m)};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};

/* ---------- أيقونات ---------- */
var ICON={
warranty:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
id:'<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M13 10h5M13 14h5"/>',
medical:'<path d="M3 12h4l2-5 4 10 2-5h6"/>',
finance:'<path d="M20 12V8a2 2 0 0 0-2-2H5a2 2 0 0 1 0-4h13"/><path d="M3 5v14a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
other:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
check:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
chev:'<polyline points="9 18 15 12 9 6"/>'
};
var svg=function(n,sz){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:'+(sz||24)+'px;height:'+(sz||24)+'px">'+ICON[n]+'</svg>'};
var CATS=['warranty','id','medical','finance','other'];

/* ---------- قاعدة البيانات (منفصلة عن قاعدة التطبيق) ---------- */
var vdb;
function openDB(){return new Promise(function(res,rej){
 var r=indexedDB.open('lahza-vault',1);
 r.onupgradeneeded=function(){var d=r.result;d.createObjectStore('docs',{keyPath:'id',autoIncrement:true});d.createObjectStore('appts',{keyPath:'id',autoIncrement:true});d.createObjectStore('files')};
 r.onsuccess=function(){vdb=r.result;res()};r.onerror=function(){rej(r.error)}})}
function rq(r){return new Promise(function(s,j){r.onsuccess=function(){s(r.result)};r.onerror=function(){j(r.error)}})}
var all=function(s){return rq(vdb.transaction(s).objectStore(s).getAll())};
var put=function(s,v){return rq(vdb.transaction(s,'readwrite').objectStore(s).put(v))};
var del=function(s,k){return rq(vdb.transaction(s,'readwrite').objectStore(s).delete(k))};
var getF=function(k){return rq(vdb.transaction('files').objectStore('files').get(k))};
var putF=function(k,b){return rq(vdb.transaction('files','readwrite').objectStore('files').put(b,k))};
var uid=function(){return 'f'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)};

/* ---------- تواريخ ---------- */
var p2=function(n){return String(n).padStart(2,'0')};
var ymd=function(d){return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())};
var day0=function(s){var a=s.split('-').map(Number);return new Date(a[0],a[1]-1,a[2])};
var apptTime=function(a){var d=a.date.split('-').map(Number),h=(a.time||'09:00').split(':').map(Number);return new Date(d[0],d[1]-1,d[2],h[0],h[1]).getTime()};
var loc=function(){return L()==='ar'?'ar-EG-u-nu-latn':(L()==='sv'?'sv-SE':'en-GB')};
var fmtD=function(s){return day0(s).toLocaleDateString(loc(),{day:'numeric',month:'long',year:'numeric'})};
var fmtDT=function(a){return day0(a.date).toLocaleDateString(loc(),{weekday:'short',day:'numeric',month:'short'})+' · '+(a.time||'')};
var daysLeft=function(s){var n=new Date();var t0=new Date(n.getFullYear(),n.getMonth(),n.getDate());return Math.round((day0(s)-t0)/864e5)};

/* ---------- التنبيهات ---------- */
var LN=function(){return window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.LocalNotifications};
var syncTimer;
function sync(){clearTimeout(syncTimer);syncTimer=setTimeout(doSync,400)}
async function doSync(){
 var p=LN();if(!p)return;
 try{
  var rm=[],i;
  for(i=0;i<250;i++){rm.push({id:200000+i*2});rm.push({id:200001+i*2})}
  for(i=0;i<500;i++)rm.push({id:300000+i});
  await p.cancel({notifications:rm});
  var ds=await all('docs'),as=await all('appts'),now=Date.now(),list=[];
  ds.sort(function(a,b){return a.id-b.id}).slice(0,250).forEach(function(d,i){
   if(!d.expiry)return;var e=day0(d.expiry);
   var b=new Date(e);b.setDate(b.getDate()-(d.remind||0));b.setHours(9,0,0,0);
   if(d.remind>0&&b.getTime()>now)list.push({id:200000+i*2,title:t('nvt'),body:t('nvb').replace('{n}',d.title).replace('{d}',fmtD(d.expiry)),schedule:{at:b,allowWhileIdle:true}});
   var x=new Date(e);x.setHours(9,0,0,0);
   if(x.getTime()>now)list.push({id:200001+i*2,title:t('nvt'),body:t('nvd').replace('{n}',d.title),schedule:{at:x,allowWhileIdle:true}});
  });
  as.sort(function(a,b){return a.id-b.id}).slice(0,500).forEach(function(a,i){
   if(a.done)return;var at=new Date(apptTime(a)-(a.remind||0)*60000);
   if(at.getTime()>now)list.push({id:300000+i,title:t('nat'),body:t('nab').replace('{n}',a.title).replace('{h}',a.time||''),schedule:{at:at,allowWhileIdle:true}});
  });
  if(!list.length)return;
  var pm=await p.requestPermissions();if(pm.display!=='granted')return;
  await p.schedule({notifications:list});
 }catch(e){}
}

/* ---------- أنماط ---------- */
var css=document.createElement('style');
css.textContent='.vcard{display:flex;align-items:center;gap:14px;width:100%;text-align:start;padding:16px;margin:10px 0;background:var(--card);border:1px solid var(--border-strong);border-radius:18px;color:var(--text)}'+
'.vbub{flex:0 0 auto;width:48px;height:48px;border-radius:50%;background:var(--gold-soft);color:var(--gold);display:flex;align-items:center;justify-content:center}'+
'.vbub.big{width:58px;height:58px}.vinfo{flex:1;min-width:0}.vt{font:1.1rem var(--fd)}.vs{font-size:.88rem;color:var(--text-3)}.vs.gold{color:var(--gold)}.vs.red{color:#EF4444}'+
'.vi{width:100%;padding:12px 14px;margin:4px 0 10px;background:var(--bg);color:var(--text);border:1px solid var(--border-strong);border-radius:12px;font-size:1rem;text-align:start;display:block}'+
'.vl{display:block;color:var(--text-3);font-size:.9rem;margin-top:6px}.vrow{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 10px}'+
'.vplus{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background:var(--gold);color:var(--on-gold);position:fixed;bottom:calc(86px + env(safe-area-inset-bottom));inset-inline-end:20px;z-index:90;box-shadow:var(--shadow)}'+
'.vfile{display:flex;align-items:center;gap:10px;padding:8px 4px;border-bottom:1px solid var(--border)}.vfile span.n{flex:1;text-align:start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'+
'.vhd{display:flex;align-items:center;gap:8px;margin-bottom:10px}.vhd h2{flex:1;text-align:center;font:600 1.4rem var(--fd);color:var(--gold)}'+
'.vhome{display:flex;align-items:center;gap:14px;width:100%;text-align:start;padding:14px;margin:8px 0;background:var(--card);border:1px solid var(--border-strong);border-radius:14px;color:var(--text)}';
document.head.appendChild(css);

/* ---------- الشاشة الرئيسية للخزنة ---------- */
var view='hub';
function ensureTab(){
 if($('tabVault'))return;
 var d=document.createElement('div');d.className='content hidden';d.id='tabVault';
 d.innerHTML='<h1 class="page-title" id="vTitleH"></h1><div id="vBody"></div>';
 $('tabSettings').after(d);
 var b=document.createElement('button');b.className='tab';b.id='tabBtnVault';
 b.innerHTML='<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'+ICON.lock+'</svg><span id="vTabLbl"></span>';
 var bar=document.querySelector('.tabs');bar.insertBefore(b,$('tabBtnSettings'));
 b.onclick=function(){showVault('hub')};
 var orig=window.switchTab;
 window.switchTab=function(){$('tabVault').classList.add('hidden');$('tabBtnVault').classList.remove('active');return orig.apply(this,arguments)};
 var pl=document.createElement('button');pl.className='vplus hidden';pl.id='vPlus';pl.setAttribute('aria-label','add');
 pl.innerHTML=svg('plus',26);pl.onclick=function(){if(view==='appts')apptSheet();else docSheet()};document.body.appendChild(pl);
}
function showVault(v){
 view=v||'hub';
 ['tabHome','tabMoments','tabSettings'].forEach(function(i){$(i).classList.add('hidden')});
 $('tabVault').classList.remove('hidden');
 document.querySelectorAll('.tabs .tab').forEach(function(b){b.classList.toggle('active',b.id==='tabBtnVault')});
 render();
}
async function render(){
 if(!vdb)return;
 $('vTabLbl').textContent=t('vault');
 var body=$('vBody'),ds=await all('docs'),as=await all('appts');
 $('vPlus').classList.toggle('hidden',view==='hub'||$('tabVault').classList.contains('hidden'));
 if(view==='hub'){
  $('vTitleH').textContent=t('vault');
  body.innerHTML='';
  [['docs','file',t('docs'),ds.length],['appts','cal',t('appts'),as.length]].forEach(function(x){
   var c=document.createElement('div');c.className='vcard';c.style.cursor='pointer';
   c.innerHTML='<div class="vbub big">'+svg(x[1],28)+'</div><div class="vinfo"><div class="vt">'+x[2]+'</div><div class="vs gold">'+x[3]+'</div></div><button class="vbub" style="width:44px;height:44px" data-a="1">'+svg('plus',22)+'</button>'+svg('chev',20);
   c.onclick=function(e){if(e.target.closest('[data-a]')){x[0]==='docs'?docSheet():apptSheet()}else{view=x[0];render()}};
   body.appendChild(c)});
  var row=document.createElement('div');row.className='vrow';row.style.justifyContent='center';row.style.marginTop='18px';
  var e1=document.createElement('button');e1.className='filter-chip';e1.textContent=t('exp');e1.onclick=exportV;
  var i1=document.createElement('button');i1.className='filter-chip';i1.textContent=t('imp');i1.onclick=function(){$('vImp').click()};
  row.append(e1,i1);body.appendChild(row);
  var inp=$('vImp');if(!inp){inp=document.createElement('input');inp.type='file';inp.id='vImp';inp.accept='.zip';inp.hidden=true;inp.onchange=importV;body.appendChild(inp)}
  return;
 }
 var back=document.createElement('div');back.className='vhd';
 back.innerHTML='<button class="filter-chip" id="vBack">‹ '+t('back')+'</button><h2>'+t(view)+'</h2><span style="width:70px"></span>';
 $('vTitleH').textContent='';
 body.innerHTML='';body.appendChild(back);$('vBack').onclick=function(){view='hub';render()};
 if(view==='docs'){
  if(!ds.length){body.insertAdjacentHTML('beforeend','<div class="empty-state"><span class="empty-icon">✦</span><div>'+t('empty_docs')+'</div></div>');return}
  ds.sort(function(a,b){return (a.expiry||'9999')<(b.expiry||'9999')?-1:1}).forEach(function(d){
   var sub=t('c_'+d.cat),cls='';
   if(d.expiry){var n=daysLeft(d.expiry);
    if(n<0){sub=t('expired')+' '+fmtD(d.expiry);cls='red'}else{sub=t('expires')+' '+fmtD(d.expiry);if(n<=30)cls='gold'}}
   var c=document.createElement('button');c.className='vcard';
   c.innerHTML='<div class="vbub">'+svg(ICON[d.cat]?d.cat:'other')+'</div><div class="vinfo"><div class="vt">'+esc(d.title)+'</div><div class="vs '+cls+'">'+esc(sub)+'</div></div>';
   c.onclick=function(){docSheet(d)};body.appendChild(c)});
 }else{
  if(!as.length){body.insertAdjacentHTML('beforeend','<div class="empty-state"><span class="empty-icon">✦</span><div>'+t('empty_appts')+'</div></div>');return}
  var now=Date.now()-3600000;
  var up=as.filter(function(a){return !a.done&&apptTime(a)>=now}).sort(function(a,b){return apptTime(a)-apptTime(b)});
  var ps=as.filter(function(a){return a.done||apptTime(a)<now}).sort(function(a,b){return apptTime(b)-apptTime(a)});
  var add=function(a,past){var c=document.createElement('button');c.className='vcard';
   c.innerHTML='<div class="vbub">'+svg(a.done?'check':'cal')+'</div><div class="vinfo"><div class="vt">'+esc(a.title)+'</div><div class="vs '+(past?'':'gold')+'">'+esc(fmtDT(a))+'</div></div>';
   c.onclick=function(){apptSheet(a)};body.appendChild(c)};
  up.forEach(function(a){add(a,false)});
  if(ps.length){body.insertAdjacentHTML('beforeend','<div class="vl" style="margin-top:16px">'+t('past')+'</div>');ps.forEach(function(a){add(a,true)})}
 }
}

/* ---------- نوافذ ---------- */
function sheet(build){
 var s=document.createElement('div');s.className='sheet';s.style.zIndex=460;
 var c=document.createElement('div');c.className='sheet-content';c.style.textAlign='start';s.appendChild(c);
 var close=function(){s.remove()};build(c,close);
 s.addEventListener('click',function(e){if(e.target===s)close()});document.body.appendChild(s);
}
function chips(box,opts,cur,on){
 box.innerHTML='';opts.forEach(function(o){
  var b=document.createElement('button');b.type='button';b.className='filter-chip'+(String(o[0])===String(cur())?' active':'');b.textContent=o[1];
  b.onclick=function(){on(o[0]);chips(box,opts,cur,on)};box.appendChild(b)});
}
async function askConfirm(){
 if(typeof window.ask==='function')return window.ask(t('del'),t('del_q'),{ok:t('del'),no:t('no')});
 return confirm(t('del_q'));
}
function viewFile(blob,name){
 var u=URL.createObjectURL(blob),o=document.createElement('div');
 o.style.cssText='position:fixed;inset:0;z-index:480;background:var(--veil);overflow:auto;padding:calc(70px + env(safe-area-inset-top)) 10px 20px';
 var x=document.createElement('button');x.className='xbtn';x.textContent='✕';x.style.cssText='position:fixed;top:calc(14px + env(safe-area-inset-top));inset-inline-start:14px;z-index:481';
 var close=function(){URL.revokeObjectURL(u);o.remove()};x.onclick=close;o.appendChild(x);
 if(/pdf/i.test(blob.type)||/\.pdf$/i.test(name||'')){var f=document.createElement('iframe');f.src=u;f.style.cssText='width:100%;height:85vh;border:0;border-radius:12px;background:#fff';o.appendChild(f)}
 else{var im=new Image();im.src=u;im.style.cssText='width:100%;border-radius:12px';o.appendChild(im)}
 document.body.appendChild(o);
}

function docSheet(d){
 var edit=!!d;
 var st=d?JSON.parse(JSON.stringify(d)):{title:'',cat:'warranty',notes:'',expiry:'',remind:30,files:[],created:Date.now()};
 var added={},removed=[];
 sheet(function(c,close){
  c.innerHTML='<div class="vt" style="color:var(--gold);font-size:1.35rem;margin-bottom:10px;text-align:center">'+t(edit?'edit_doc':'add_doc')+'</div>'+
  '<label class="vl">'+t('name')+'</label><input class="vi" id="vT">'+
  '<label class="vl">'+t('cat')+'</label><div class="vrow" id="vC"></div>'+
  '<label class="vl">'+t('expiry')+'</label><div class="vrow" style="flex-wrap:nowrap;align-items:center"><input type="date" class="vi" id="vE" style="margin:0"><button type="button" class="filter-chip" id="vEc">'+t('clear')+'</button></div>'+
  '<div id="vRw"><label class="vl">'+t('rem_before')+'</label><div class="vrow" id="vR"></div></div>'+
  '<label class="vl">'+t('notes')+'</label><textarea class="vi" id="vN" rows="3"></textarea>'+
  '<button type="button" class="btn" id="vA">'+svg('file',18)+' '+t('attach')+'</button><input type="file" id="vF" multiple accept="image/*,application/pdf" hidden><div id="vFl"></div>'+
  '<button type="button" class="btn primary" id="vS">'+t('save')+'</button>'+(edit?'<button type="button" class="btn" id="vD" style="color:#EF4444;border-color:rgba(239,68,68,.5)">'+t('del')+'</button>':'')+
  '<button type="button" class="btn" id="vX">'+t('close')+'</button>';
  var q=function(s){return c.querySelector(s)};
  q('#vT').value=st.title;q('#vE').value=st.expiry||'';q('#vN').value=st.notes||'';
  chips(q('#vC'),CATS.map(function(k){return [k,t('c_'+k)]}),function(){return st.cat},function(v){st.cat=v});
  chips(q('#vR'),[[0,t('d0')],[7,t('d7')],[30,t('d30')],[90,t('d90')]],function(){return st.remind},function(v){st.remind=v});
  var tog=function(){q('#vRw').style.display=q('#vE').value?'block':'none'};tog();
  q('#vE').onchange=tog;q('#vEc').onclick=function(){q('#vE').value='';tog()};
  var drawF=function(){var fl=q('#vFl');fl.innerHTML='';
   st.files.forEach(function(f,i){var r=document.createElement('div');r.className='vfile';
    r.innerHTML='<span style="color:var(--gold)">'+svg('file',20)+'</span><span class="n">'+esc(f.name)+'</span><button type="button" class="filter-chip" data-o>↗</button><button type="button" class="filter-chip" data-r style="color:#EF4444">✕</button>';
    r.querySelector('[data-o]').onclick=async function(){var b=added[f.k]||await getF(f.k);if(b)viewFile(b,f.name)};
    r.querySelector('[data-r]').onclick=function(){st.files.splice(i,1);if(added[f.k])delete added[f.k];else removed.push(f.k);drawF()};
    fl.appendChild(r)})};
  drawF();
  q('#vA').onclick=function(){q('#vF').click()};
  q('#vF').onchange=function(e){Array.prototype.forEach.call(e.target.files,function(f){var k=uid();added[k]=f;st.files.push({k:k,name:f.name||'file',type:f.type})});e.target.value='';drawF()};
  q('#vX').onclick=close;
  if(edit)q('#vD').onclick=async function(){
   if(!await askConfirm())return;
   for(var i=0;i<d.files.length;i++)await del('files',d.files[i].k);
   await del('docs',d.id);close();render();home();sync();msg(t('saved'))};
  q('#vS').onclick=async function(){
   var title=q('#vT').value.trim();if(!title)return msg(t('need_name'),1);
   st.title=title;st.expiry=q('#vE').value||'';st.notes=q('#vN').value.trim();if(!st.expiry)st.remind=0;
   try{
    for(var k in added)await putF(k,added[k]);
    for(var i=0;i<removed.length;i++)await del('files',removed[i]);
    await put('docs',st);close();render();home();sync();msg(t('saved'));
   }catch(e){msg(t('err'),1)}};
 });
}

function apptSheet(a){
 var edit=!!a,tom=new Date();tom.setDate(tom.getDate()+1);
 var st=a?JSON.parse(JSON.stringify(a)):{title:'',date:ymd(tom),time:'10:00',remind:60,notes:'',done:false};
 sheet(function(c,close){
  c.innerHTML='<div class="vt" style="color:var(--gold);font-size:1.35rem;margin-bottom:10px;text-align:center">'+t(edit?'edit_appt':'add_appt')+'</div>'+
  '<label class="vl">'+t('name')+'</label><input class="vi" id="vT">'+
  '<div style="display:flex;gap:8px"><div style="flex:1"><label class="vl">'+t('day')+'</label><input type="date" class="vi" id="vD1"></div><div style="flex:1"><label class="vl">'+t('time')+'</label><input type="time" class="vi" id="vH"></div></div>'+
  '<label class="vl">'+t('rem_appt')+'</label><div class="vrow" id="vR"></div>'+
  '<label class="vl">'+t('notes')+'</label><textarea class="vi" id="vN" rows="3"></textarea>'+
  '<button type="button" class="btn primary" id="vS">'+t('save')+'</button>'+
  (edit?'<button type="button" class="btn" id="vDn">'+t(a.done?'undone':'done')+'</button><button type="button" class="btn" id="vD" style="color:#EF4444;border-color:rgba(239,68,68,.5)">'+t('del')+'</button>':'')+
  '<button type="button" class="btn" id="vX">'+t('close')+'</button>';
  var q=function(s){return c.querySelector(s)};
  q('#vT').value=st.title;q('#vD1').value=st.date;q('#vH').value=st.time;q('#vN').value=st.notes||'';
  chips(q('#vR'),[[0,t('r0')],[15,t('r15')],[60,t('r60')],[1440,t('r1440')]],function(){return st.remind},function(v){st.remind=v});
  q('#vX').onclick=close;
  var save=async function(extra){
   var title=q('#vT').value.trim();if(!title)return msg(t('need_name'),1);
   if(!q('#vD1').value||!q('#vH').value)return msg(t('need_date'),1);
   st.title=title;st.date=q('#vD1').value;st.time=q('#vH').value;st.notes=q('#vN').value.trim();
   if(extra)Object.assign(st,extra);
   try{await put('appts',st);close();render();home();sync();msg(t('saved'))}catch(e){msg(t('err'),1)}};
  q('#vS').onclick=function(){save()};
  if(edit){
   q('#vDn').onclick=function(){save({done:!a.done})};
   q('#vD').onclick=async function(){if(!await askConfirm())return;await del('appts',a.id);close();render();home();sync();msg(t('saved'))};
  }
 });
}

/* ---------- بطاقات الرئيسية ---------- */
async function home(){
 var th=$('tabHome');if(!th||!vdb)return;
 var box=$('vHome');
 if(!box){box=document.createElement('div');box.id='vHome';box.style.marginTop='14px';var a=th.querySelector('.home-actions');if(a)a.after(box);else th.appendChild(box)}
 var ds=await all('docs'),as=await all('appts'),now=Date.now();
 var nx=as.filter(function(a){return !a.done&&apptTime(a)>=now}).sort(function(a,b){return apptTime(a)-apptTime(b)})[0];
 var n=ds.filter(function(d){return d.expiry&&daysLeft(d.expiry)>=0&&daysLeft(d.expiry)<=30}).length;
 box.innerHTML='';
 var add=function(icon,title,body,view){var b=document.createElement('button');b.className='vhome';
  b.innerHTML='<div class="vbub">'+svg(icon)+'</div><div class="vinfo"><div class="vs gold">'+esc(title)+'</div><div>'+esc(body)+'</div></div>';
  b.onclick=function(){showVault(view)};box.appendChild(b)};
 if(nx)add('cal',t('next_appt'),nx.title+' · '+fmtDT(nx),'appts');
 if(n>0)add('lock',t('vault'),n+' '+t('exp_n'),'docs');
}

/* ---------- نسخة احتياطية للخزنة ---------- */
async function exportV(){
 try{
  if(typeof JSZip==='undefined')return msg(t('err'),1);
  var ds=await all('docs'),as=await all('appts'),z=new JSZip();
  for(var i=0;i<ds.length;i++)for(var j=0;j<ds[i].files.length;j++){var b=await getF(ds[i].files[j].k);if(b)z.file('files/'+ds[i].files[j].k,b)}
  z.file('vault.json',JSON.stringify({docs:ds,appts:as}));
  var blob=await z.generateAsync({type:'blob',compression:'STORE'});
  var f=new File([blob],'lahza-vault-'+ymd(new Date())+'.zip',{type:'application/zip'});
  if(typeof window.shareFiles==='function')await window.shareFiles([f]);
  msg(t('exp_ok'));
 }catch(e){if(!e||e.name!=='AbortError')msg(t('err'),1)}
}
async function importV(e){
 var f=e.target.files[0];if(!f)return;
 try{
  var z=await JSZip.loadAsync(f),jf=z.file('vault.json');if(!jf)throw 0;
  var data=JSON.parse(await jf.async('string')),ds=await all('docs'),as=await all('appts');
  var hd=new Set(ds.map(function(d){return d.created+'|'+d.title})),ha=new Set(as.map(function(a){return a.date+'|'+a.time+'|'+a.title}));
  var added=0,i,j;
  for(i=0;i<(data.docs||[]).length;i++){var d=data.docs[i];if(hd.has(d.created+'|'+d.title))continue;
   for(j=0;j<d.files.length;j++){var ff=z.file('files/'+d.files[j].k);if(ff)await putF(d.files[j].k,await ff.async('blob'))}
   delete d.id;await put('docs',d);added++}
  for(i=0;i<(data.appts||[]).length;i++){var a=data.appts[i];if(ha.has(a.date+'|'+a.time+'|'+a.title))continue;delete a.id;await put('appts',a);added++}
  msg(t('imp_ok')+' ('+added+')');render();home();sync();
 }catch(err){msg(t('err'),1)}
 e.target.value='';
}

/* ---------- تشغيل ---------- */
function applyLang(){var l=$('vTabLbl');if(l)l.textContent=t('vault');render();home()}
(async function init(){
 try{
  await openDB();ensureTab();$('vTabLbl').textContent=t('vault');
  home();sync();
  new MutationObserver(applyLang).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  document.addEventListener('visibilitychange',function(){if(!document.hidden){home();sync()}});
  setTimeout(function(){home();sync()},2500);
 }catch(e){console.error('vault',e)}
})();
})();
