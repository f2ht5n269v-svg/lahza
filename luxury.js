/* ===== Lahza Luxury Layer v8 — Stable & Elegant ===== */
(function(){
const css=`
:root {
  --gold-accent: #D4AF37;
  --gold-dim: rgba(212, 175, 55, 0.25);
  --spring: cubic-bezier(.2, 1, .3, 1);
}

/* =========================================
   1. شاشة المكتب (المجلدات) - بدون إيموجي
   ========================================= */
.desk {
  /* نستخدم خلفية التطبيق الأصلية بدون فرض لون */
  background: var(--bg, #111) !important; 
}
.deskgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.fold {
  /* نستخدم لون الكرت الأصلي تبع التطبيق */
  background: var(--card, #1A1A1A) !important;
  border: 1px solid var(--border, rgba(255,255,255,0.05)) !important;
  border-radius: 16px !important;
  padding: 30px 20px !important;
  box-shadow: 0 10px 25px -10px rgba(0,0,0,0.5) !important;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: transform 0.3s var(--spring);
}
.fold:active { transform: scale(0.96); }
.fold::before { display: none !important; } /* حذف التاب القديم */

/* تصميم الرموز الجديدة (بدل الإيموجي) */
.fold .ic {
  font-size: 2.8rem !important;
  color: var(--gold-accent) !important; /* لون ذهبي */
  margin-bottom: 16px !important;
  line-height: 1 !important;
  font-family: system-ui, -apple-system, serif !important;
  text-shadow: 0 2px 15px rgba(212, 175, 55, 0.3) !important;
}
.fold b {
  color: var(--text, #FFF) !important;
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  margin-bottom: 6px !important;
}
.fold small {
  color: var(--text-2, #999) !important;
  font-size: 0.85rem !important;
  line-height: 1.4 !important;
  text-align: center !important;
}

/* المظروف (رسالة لنفسي) */
.fold.env {
  grid-column: 1 / -1;
  flex-direction: row !important;
  justify-content: space-between !important;
  padding: 30px !important;
  border: 1px solid var(--gold-dim) !important;
}
.fold.env b { color: var(--gold-accent) !important; font-size: 1.4rem !important; }
.seal {
  width: 55px; height: 55px;
  background: radial-gradient(circle at 30% 30%, #B02418, #5A0E08);
  border-radius: 50%;
  box-shadow: 0 8px 15px rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center;
  color: #F2DFA0; font-size: 1.4rem;
}

/* =========================================
   2. الورقة (شاشة الكتابة) - تتنفس
   ========================================= */
#textScreen { background: var(--bg, #111) !important; }
#textScreen .text-input {
  /* لون الورق العاجي الفخم */
  background-color: #FAF6EE !important; 
  background-image: repeating-linear-gradient(transparent, transparent 2.2rem, rgba(0,0,0,0.04) 2.2rem, rgba(0,0,0,0.04) calc(2.2rem + 1px)) !important;
  color: #1A1512 !important; /* حبر داكن */
  border: 1px solid #D4C4A3 !important;
  border-radius: 12px !important;
  padding: 30px 25px !important;
  box-shadow: 0 15px 35px -10px rgba(0,0,0,0.4) !important;
  font-size: 1.15rem !important;
  line-height: 2.2rem !important;
  caret-color: var(--gold-accent) !important;
}
#textScreen .text-input:focus {
  outline: none !important;
  box-shadow: 0 15px 35px -10px rgba(0,0,0,0.5), 0 0 0 2px var(--gold-accent) !important;
}

/* الأزرار الأساسية */
.btn.primary {
  background: var(--gold-accent) !important;
  color: #000 !important;
  border-radius: 12px !important;
  font-weight: bold !important;
  box-shadow: none !important;
}

/* =========================================
   3. كتاب السنة - مجلد أرشيف فخم (بدون تشوهات)
   ========================================= */
#bkst {
  perspective: none !important; /* إلغاء أي 3D */
  padding: 10px !important;
}
.bkpg {
  transform: none !important;
  /* نستخدم لون الكرت الأصلي */
  background: var(--card, #1A1A1A) !important; 
  color: var(--text, #FFF) !important;
  padding: 35px 25px !important;
  margin: 0 auto 20px auto !important;
  width: 100% !important;
  border-radius: 12px !important;
  
  /* شكل المجلد: خط ذهبي جانبي وظل عميق */
  border: 1px solid var(--border, rgba(255,255,255,0.05)) !important;
  border-left: 4px solid var(--gold-accent) !important;
  box-shadow: 0 15px 30px -15px rgba(0,0,0,0.5) !important;
}

/* =========================================
   4. شاشة اختيار التاريخ
   ========================================= */
#datePickerSheet .sheet-content {
  background: var(--card, #1A1A1A) !important;
  border: 1px solid var(--border, rgba(255,255,255,0.05)) !important;
}
#datePickerSheet .sheet-content::before, 
#datePickerSheet .sheet-content::after { display: none !important; }
#datePickerSheet select {
  background: var(--bg, #111) !important;
  color: var(--gold-accent) !important;
  border: 1px solid var(--border, rgba(255,255,255,0.1)) !important;
}
`;
const st=document.createElement('style');st.id='luxury-css';st.textContent=css;document.head.appendChild(st);

/* الحفاظ على الاهتزاز */
const hap=()=>{try{const h=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.Haptics;if(h)h.impact({style:'LIGHT'});else if(navigator.vibrate)navigator.vibrate(6)}catch(e){}};
document.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('button,.tab,label.bg-option,.fold'))hap()},{passive:true});

/* 
   التعديل هنا: حذف الإيموجي تماماً واستبدالها برموز ذهبية
*/
window.writeMenu=function(){overlay((c,close)=>{c.classList.add('desk');ttl(c,'text');
  const nl=getL().filter(l=>!l.s&&new Date(l.o)<=Date.now()).length,g=mk('div','deskgrid');
  [
   ['✒','m_journal','ws_journal',()=>openText('personal'),''],
   ['◎','m_goals','ws_goals',()=>openText('goals'),''],
   ['','letter','ws_letter',()=>lettersUI(),'env'],
   ['✎','draw','ws_draw',()=>openDraw(),''],
   ['؟','m_questions','ws_q',()=>qHub(),'']
  ].forEach(a=>{
    const b=mk('button','fold '+a[4]),w=mk('span');w.style.cssText='display:flex;flex-direction:column;gap:4px;align-items:center;';
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
