/* ===== Lahza Luxury Layer v4 — Matte Leather & Gold ===== */
(function(){
const css=`
/* 1. الألوان والخطوط الأساسية */
:root{
  --spring:cubic-bezier(.22,1,.36,1);
  --bg:#0E0C0A; /* أسود فاحم دافئ */
  --card:#1A1512; /* بني جلدي داكن */
  --card-hover:#221B16;
  --gold-matte:#C9A96E;
  --gold-dark:#8B6F1F;
  --gold-light:#E8D5A7;
  --border:rgba(201,169,110,.2);
  --text:#F2E8D5;
  --text-muted:#A69B8D;
  
  --lux-gold-line:linear-gradient(90deg, transparent, var(--gold-matte), transparent);
  --sh-soft:0 10px 30px -10px rgba(0,0,0,.8);
  --sh-inset:inset 0 1px 0 rgba(255,255,255,.05), inset 0 0 0 1px rgba(201,169,110,.1);
}

:root[data-theme=light]{
  --bg:#F3EBDB; /* ورق بردي */
  --card:#FAF5E9;
  --card-hover:#FFF9ED;
  --gold-matte:#B08D43;
  --gold-dark:#7A5C13;
  --gold-light:#D4B775;
  --border:rgba(176,141,67,.25);
  --text:#2A2118;
  --text-muted:#6B5D4A;
  --sh-soft:0 10px 30px -10px rgba(80,60,20,.15);
  --sh-inset:inset 0 1px 0 rgba(255,255,255,.8), inset 0 0 0 1px rgba(176,141,67,.15);
}

/* خلفية لطيفة جداً */
body {
  background: radial-gradient(120% 80% at 50% 0%, rgba(201,169,110,.05), transparent 60%), var(--bg);
  color: var(--text);
  font-family: system-ui, -apple-system, sans-serif;
}

/* إزالة اللمعات تماماً وجعل الحركة ناعمة جداً */
button,.btn,.tab,.filter-chip,.settings-item,.home-action,.moment-card,.wopt,.section-item,.question-item,.bg-option,.stat-card,.on-this-day-year,.xbtn,.capture-btn,.rec-btn,.switch-cam{
  transition: all .4s var(--spring) !important;
  -webkit-tap-highlight-color: transparent;
}
button:active, .btn:active { transform: scale(.96); }

/* العناوين: ذهب مطفي وأقل سمكاً */
.page-title, .home-greeting {
  font-weight: 400;
  color: var(--gold-matte) !important;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0,0,0,.3);
}
.page-title::after {
  content: '❖';
  display: block;
  text-align: center;
  margin-top: 8px;
  font-size: 12px;
  color: var(--gold-matte);
  opacity: 0.7;
  background: none;
  box-shadow: none;
}

/* =========================================
   شاشة المكتب (المجلدات) - من صورة 1
   ========================================= */
.desk {
  background: var(--bg) !important;
}
.deskgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 20px 0;
}
.fold {
  position: relative;
  background: linear-gradient(145deg, var(--card-hover), var(--card)) !important;
  border: 1px solid var(--border) !important;
  border-radius: 12px !important; /* زوايا أقل استدارة = فخامة أكثر */
  padding: 30px 16px !important;
  box-shadow: var(--sh-soft), var(--sh-inset) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
/* شلنا التاب اللي فوق المجلد لأنه كان يطلع شكله رخيص */
.fold::before { display: none !important; }
/* تحويل الإيموجي لألوان ذهبية/أحادية لتبدو كأنها محفورة */
.fold .ic {
  font-size: 2.2rem;
  filter: grayscale(1) sepia(1) hue-rotate(5deg) brightness(1.2) contrast(1.5);
  opacity: 0.9;
}
.fold b {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--gold-light);
  letter-spacing: 0.5px;
}
.fold small {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.4;
}
/* الرسالة (المظروف) */
.fold.env {
  grid-column: 1 / -1;
  background: linear-gradient(145deg, #2A1F1A, #1A1512) !important;
  border: 1px solid var(--gold-dark) !important;
  flex-direction: row;
  justify-content: center;
  padding: 24px !important;
}
.fold.env b { color: var(--gold-matte); font-size: 1.4rem; }
.fold.env small { color: #8B7355; }
/* الختم الشمعي - تصميم مسطح وانيق */
.seal {
  width: 50px; height: 50px;
  background: #7A1410 !important;
  border: 2px solid #4A0805 !important;
  box-shadow: 0 4px 10px rgba(0,0,0,.5), inset 0 2px 4px rgba(255,255,255,.1) !important;
  border-radius: 50% !important;
  display: flex; align-items: center; justify-content: center;
  color: var(--gold-light) !important;
}
.seal::after { display: none; }
.seal i {
  background: var(--gold-matte) !important;
  color: #000 !important;
  font-weight: bold;
}

/* =========================================
   شاشة الكتابة - من صورة 2
   ========================================= */
#textScreen {
  background: var(--bg) !important;
}
/* الورقة */
#textScreen .text-input {
  background-color: #FAF5E9 !important; /* لون ورقي نقي */
  background-image: 
    linear-gradient(90deg, transparent 40px, rgba(180,50,40,.4) 40px, rgba(180,50,40,.4) 41px, transparent 41px),
    repeating-linear-gradient(transparent, transparent 2.2rem, rgba(0,0,0,.05) 2.2rem, rgba(0,0,0,.05) calc(2.2rem + 1px)) !important;
  color: #2A2118 !important;
  border: 1px solid #D1C3A5 !important;
  border-radius: 4px !important; /* زوايا حادة */
  box-shadow: 
    2px 2px 0 #E8DCC5, 
    4px 4px 0 #DFCFB3, 
    0 20px 40px -15px rgba(0,0,0,.15) !important;
  font-family: var(--fq), serif !important;
  font-size: 1.15rem !important;
  line-height: 2.2rem !important;
  padding: 30px 20px 30px 60px !important;
}
#textScreen .text-input:focus {
  outline: none;
  border-color: var(--gold-matte) !important;
  box-shadow: 
    2px 2px 0 #E8DCC5, 
    4px 4px 0 #DFCFB3, 
    0 0 0 3px rgba(201,169,110,.2) !important;
}
/* زر الإغلاق X */
#textScreen .btn-close {
  background: var(--card) !important;
  border: 1px solid var(--border) !important;
  color: var(--text) !important;
  box-shadow: var(--sh-soft);
}

/* الأزرار السفلية (الملحقات) */
#textScreen .btn-icon {
  background: var(--card) !important;
  border: 1px dashed var(--gold-matte) !important;
  color: var(--gold-matte) !important;
  box-shadow: none !important;
}

/* زر التالي (المطفي) - أهم تعديل */
.btn.primary {
  background: var(--gold-matte) !important; /* لون مطفي */
  color: #0E0C0A !important; /* نص غامق */
  border: none !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 15px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.2) !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
  text-shadow: none !important; /* شلنا الظل */
}
.btn.primary:active {
  box-shadow: inset 0 3px 6px rgba(0,0,0,.3) !important;
}

/* =========================================
   شاشة اختيار التاريخ - من صورة 3
   ========================================= */
#datePickerSheet .sheet-content {
  background: var(--card) !important;
  border: 1px solid var(--border) !important;
  border-radius: 20px !important;
  box-shadow: 0 30px 60px -15px rgba(0,0,0,.8) !important;
}
#datePickerSheet .sheet-content::before,
#datePickerSheet .sheet-content::after { display: none !important; } /* شلنا التروس */

#datePickerSheet select {
  background: var(--bg) !important;
  color: var(--gold-matte) !important;
  border: 1px solid var(--border) !important;
  border-radius: 8px !important;
  box-shadow: inset 0 2px 5px rgba(0,0,0,.2) !important;
  font-family: inherit !important;
}
#datePickerSheet select:focus {
  border-color: var(--gold-matte) !important;
}

/* شلنا لمعة زر التأكيد */
#datePickerSheet .btn.primary {
  background: var(--gold-matte) !important;
  color: #000 !important;
}

/* =========================================
   كتاب السنة - The Flat Luxury Book
   ========================================= */
#bkst {
  perspective: none !important; /* إلغاء الـ 3D الفاشل */
  padding: 20px !important;
}
/* شكل المجلد الجلدي المسطح */
.bkpg {
  transform: none !important; /* إلغاء الدوران */
  background: var(--card) !important;
  border: 1px solid var(--border) !important;
  border-radius: 12px !important;
  box-shadow: var(--sh-soft), var(--sh-inset) !important;
  padding: 30px 20px !important;
  margin-bottom: 20px !important;
  /* إضافة شريط ذهبي على اليسار كأنه تجليد */
  border-left: 4px solid var(--gold-matte) !important; 
  position: relative;
}
/* زخرفة على الزاوية */
.bkpg::after {
  content: '❖';
  position: absolute;
  top: 15px;
  right: 15px;
  color: var(--gold-matte);
  opacity: 0.3;
  font-size: 20px;
}

/* =========================================
   شريط التبويب السفلي
   ========================================= */
.tabs {
  background: rgba(14, 12, 10, 0.85) !important;
  backdrop-filter: blur(15px) !important;
  -webkit-backdrop-filter: blur(15px) !important;
  border-top: 1px solid var(--border) !important;
  border-radius: 20px 20px 0 0 !important;
  box-shadow: 0 -10px 30px rgba(0,0,0,.5) !important;
}
:root[data-theme=light] .tabs {
  background: rgba(250, 245, 233, 0.9) !important;
}
.tab.active {
  color: var(--gold-matte) !important;
}

/* إخفاء الحبيبات القديمة لأنها كانت تزيد التعتيم */
body::after { display: none !important; }

@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;
const st=document.createElement('style');st.id='luxury-css';st.textContent=css;document.head.appendChild(st);

/* الحفاظ على الاهتزاز فقط */
const hap=()=>{try{const h=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.Haptics;if(h)h.impact({style:'LIGHT'});else if(navigator.vibrate)navigator.vibrate(6)}catch(e){}};
document.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('button,.tab,label.bg-option,.fold'))hap()},{passive:true});

/* نفس دوال الجافاسكريبت الخاصة بك بدون تغيير */
window.writeMenu=function(){overlay((c,close)=>{c.classList.add('desk');ttl(c,'text');
  const nl=getL().filter(l=>!l.s&&new Date(l.o)<=Date.now()).length,g=mk('div','deskgrid');
  [['✍️','m_journal','ws_journal',()=>openText('personal'),''],
   ['🎯','m_goals','ws_goals',()=>openText('goals'),''],
   ['','letter','ws_letter',()=>lettersUI(),'env'],
   ['🖌','draw','ws_draw',()=>openDraw(),''],
   ['❓','m_questions','ws_q',()=>qHub(),'']].forEach(a=>{
    const b=mk('button','fold '+a[4]),w=mk('span');w.style.cssText='display:flex;flex-direction:column;gap:4px';
    w.append(mk('b','',t(a[1])),mk('small','',t(a[2])));
    if(a[4]==='env'){const s=mk('span','seal','✦');if(nl)s.appendChild(mk('i','',nl));b.append(s,w)}
    else b.append(mk('span','ic',a[0]),w);
    b.onclick=()=>{close();a[3]()};g.appendChild(b)});
  c.appendChild(g);closeBtn(c,close)})};

window.weekly=async function(){free(LW);const ms=await getAll(),now=Date.now(),
  f=ms.filter(m=>now-new Date(m.date)<7*864e5).sort((a,b)=>new Date(b.date)-new Date(a.date));
  overlay((c,close)=>{c.classList.add('desk');const v=mk('div','velvet');
    const days=new Set(f.map(m=>dstr(m.date))).size;
    v.append(mk('b','','✉ '+t('wk_t')),mk('span','',f.length+' '+t('moments')+' · '+days+'/7 '+t('days_rec')));c.appendChild(v);
    if(!f.length)c.appendChild(mk('div','empty-state',t('no_moments')));
    f.slice(0,10).forEach(async(m,i)=>{const p=mk('button','pcard');p.style.animationDelay=(.25+i*.14)+'s';p.style.width='100%';p.style.display='block';
      if(m.type==='photo'){const b=await getBlob(m.id);if(b){const im=new Image();im.src=UW(b);p.prepend(im)}}
      const tx=((m.txt||m.caption||'')+'').slice(0,110)||(m.type==='video'?'🎥':m.type==='audio'?'🎙':'');
      const d=mk('div','pd');d.append(mk('span','',(m.mood?m.mood+' ':'')+fdate(m.date)),mk('span','stamp','✦'));
      p.append(mk('div','pt',tx),d);p.onclick=()=>{close();openModalFrom(m.id,()=>weekly())};c.appendChild(p)});
    closeBtn(c,()=>{free(LW);close()})})};
})();
