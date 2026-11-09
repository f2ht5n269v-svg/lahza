/* ===== Lahza Luxury Layer v5 — Royal Midnight & Gold ===== */
(function(){
const css=`
@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@400;500;700&display=swap');

:root{
  --spring:cubic-bezier(.25,1,.5,1);
  /* Midnight & Gold Palette */
  --bg-dark: #09090B; 
  --surface: #141417;
  --surface-hover: #1C1C21;
  --gold-metallic: linear-gradient(135deg, #7A5C13 0%, #C9A227 25%, #F2DFA0 50%, #C9A227 75%, #8B6F1F 100%);
  --gold-solid: #C9A227;
  --gold-muted: #8B6F1F;
  --parchment: #F4EFE6;
  --text-main: #F4EFE6;
  --text-muted: #A19D96;
  --border-gold: rgba(201, 162, 39, 0.25);
  
  --sh-deep: 0 20px 40px -10px rgba(0,0,0,0.8), 0 0 0 1px rgba(201, 162, 39, 0.1) inset;
  --font-display: 'Amiri', serif;
  --font-body: 'Tajawal', sans-serif;
}

/* إجبار التطبيق على استخدام الخطوط */
body, input, textarea, button, select {
  font-family: var(--font-body) !important;
}
h1, h2, h3, .page-title, .home-greeting, .fold b {
  font-family: var(--font-display) !important;
}

/* الخلفية الملكية */
body {
  background: 
    radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.08) 0%, transparent 50%),
    linear-gradient(180deg, #09090B 0%, #050505 100%) !important;
  color: var(--text-main) !important;
}

/* العناوين */
.page-title, .home-greeting {
  background: var(--gold-metallic);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
  font-size: 1.6rem !important;
  letter-spacing: 1px;
  text-align: center;
}
.page-title::after { display: none; } /* إزالة الخط القديم */

/* =========================================
   شاشة المكتب (المجلدات)
   ========================================= */
.desk {
  background: radial-gradient(circle at 50% 0%, #1A1815 0%, #0A0908 100%) !important;
  border: 1px solid var(--border-gold) !important;
}
.deskgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.fold {
  background: var(--surface) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 16px !important;
  padding: 24px 16px !important;
  box-shadow: var(--sh-deep) !important;
  display: flex; flex-direction: column; align-items: center;
  transition: all .4s var(--spring) !important;
}
.fold:active { transform: scale(0.96) !important; }
.fold::before { display: none !important; } /* إزالة التاب القديم */

/* الميدالية الذهبية للإيموجي */
.fold .ic {
  font-size: 2rem;
  width: 60px; height: 60px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%);
  border: 1px solid var(--border-gold);
  box-shadow: 0 0 20px rgba(201, 162, 39, 0.1) inset;
  margin-bottom: 8px;
}

.fold b {
  font-size: 1.2rem;
  color: var(--gold-solid) !important;
  margin-bottom: 4px;
}
.fold small {
  font-size: 0.8rem;
  color: var(--text-muted) !important;
  line-height: 1.4;
}

/* رسالة إلى نفسي (المظروف) */
.fold.env {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #181512 0%, #0F0D0A 100%) !important;
  border: 1px solid var(--gold-muted) !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  padding: 30px 24px !important;
}
.fold.env b { font-size: 1.5rem; }
.fold.env .seal {
  width: 50px; height: 50px;
  background: radial-gradient(circle at 30% 30%, #B02418, #5A0E08);
  border-radius: 50%;
  border: 2px solid #7A1410;
  box-shadow: 0 4px 10px rgba(0,0,0,0.6), inset 0 2px 5px rgba(255,255,255,0.2);
  color: #F2DFA0; font-size: 1.2rem;
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.fold.env .seal i {
  position: absolute; top: -5px; right: -5px;
  background: var(--gold-solid); color: #000;
  border-radius: 50%; padding: 2px 6px; font-size: 0.7rem; font-weight: bold;
}

/* =========================================
   كتاب السنة (The Open Book Illusion)
   ========================================= */
#bkst {
  perspective: 2000px;
  padding: 30px 10px;
  /* خلفية الطاولة الخشبية */
  background: radial-gradient(circle at 50% 50%, #1C1612 0%, #0A0806 100%);
  border-radius: 20px;
  margin-top: 20px;
}
.bkpg {
  /* إلغاء دوران الكرت القديم */
  transform: rotateX(15deg) !important; 
  transform-origin: center center !important;
  border-radius: 6px !important;
  background: var(--parchment) !important;
  color: #2B1F15 !important;
  padding: 40px 30px !important;
  box-shadow: 
    /* ظل المنتصف (الغلاف) */
    inset 20px 0 30px -20px rgba(0,0,0,0.5),
    inset -20px 0 30px -20px rgba(0,0,0,0.5),
    /* كومة الصفحات تحت */
    0 10px 0 -2px #E6D9C5, 
    0 20px 0 -4px #DBCBB1, 
    /* ظل الكتاب على الطاولة */
    0 40px 50px -10px rgba(0,0,0,0.9) !important;
  border: 1px solid var(--border-gold) !important;
  /* تأثير التجليد في المنتصف */
  background-image: linear-gradient(to right, transparent 49%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.1) 51%, transparent 52%) !important;
}
/* إضافة زخرفة ذهبية للصفحة */
.bkpg::before {
  content: '';
  position: absolute; inset: 15px;
  border: 1px solid rgba(201, 162, 39, 0.2);
  border-radius: 4px;
  pointer-events: none;
}

/* =========================================
   شاشة الكتابة (الورقة الملكية)
   ========================================= */
#textScreen {
  background: var(--bg-dark) !important;
}
#textScreen .screen-title {
  font-family: var(--font-display) !important;
  color: var(--gold-solid) !important;
}
#textScreen .text-input {
  background-color: var(--parchment) !important;
  background-image: 
    /* خط الهامش */
    linear-gradient(90deg, transparent 45px, rgba(160,50,40,.3) 45px, rgba(160,50,40,.3) 46px, transparent 46px),
    /* الأسطر */
    repeating-linear-gradient(transparent, transparent 2.2rem, rgba(139,117,36,.15) 2.2rem, rgba(139,117,36,.15) calc(2.2rem + 1px)) !important;
  color: #1A1109 !important;
  border: 1px solid var(--border-gold) !important;
  border-radius: 4px 12px 12px 4px !important;
  font-family: var(--font-display) !important;
  font-size: 1.2rem !important;
  line-height: 2.2rem !important;
  padding: 30px 25px 30px 60px !important;
  box-shadow: 
    0 10px 30px -10px rgba(0,0,0,0.6),
    inset 12px 0 20px -10px rgba(0,0,0,0.4) !important;
}
#textScreen .text-input:focus {
  box-shadow: 
    0 15px 40px -10px rgba(0,0,0,0.8),
    0 0 0 1px var(--gold-solid) inset,
    inset 12px 0 20px -10px rgba(0,0,0,0.4) !important;
}

/* أزرار الملحقات في الورقة */
#textScreen .btn-icon {
  background: var(--surface) !important;
  border: 1px solid var(--border-gold) !important;
  color: var(--gold-solid) !important;
}

/* زر التالي (Matte Gold) */
.btn.primary {
  background: var(--gold-solid) !important;
  color: #050505 !important;
  border: none !important;
  border-radius: 8px !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  letter-spacing: 0.5px !important;
  box-shadow: 0 8px 20px -5px rgba(201, 162, 39, 0.4) !important;
  text-shadow: none !important;
}

/* =========================================
   شاشة اختيار التاريخ
   ========================================= */
#datePickerSheet .sheet-content {
  background: var(--surface) !important;
  border: 1px solid var(--gold-muted) !important;
  border-radius: 20px !important;
}
#datePickerSheet .sheet-content::before,
#datePickerSheet .sheet-content::after { display: none !important; }
#datePickerSheet select {
  background: var(--bg-dark) !important;
  color: var(--gold-solid) !important;
  border: 1px solid var(--border-gold) !important;
  border-radius: 8px !important;
  font-family: var(--font-body) !important;
}

/* شريط التبويب السفلي */
.tabs {
  background: rgba(9, 9, 11, 0.9) !important;
  backdrop-filter: blur(15px) !important;
  -webkit-backdrop-filter: blur(15px) !important;
  border-top: 1px solid var(--border-gold) !important;
  border-radius: 24px 24px 0 0 !important;
  box-shadow: 0 -10px 40px rgba(0,0,0,0.8) !important;
}
.tab.active svg {
  color: var(--gold-solid) !important;
  filter: drop-shadow(0 0 8px rgba(201, 162, 39, 0.6)) !important;
}
`;
const st=document.createElement('style');st.id='luxury-css';st.textContent=css;document.head.appendChild(st);

/* الحفاظ على الاهتزاز */
const hap=()=>{try{const h=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.Haptics;if(h)h.impact({style:'LIGHT'});else if(navigator.vibrate)navigator.vibrate(6)}catch(e){}};
document.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('button,.tab,label.bg-option,.fold'))hap()},{passive:true});

/* نفس دوال الجافاسكريبت الخاصة بك */
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
