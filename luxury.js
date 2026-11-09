/* ===== Lahza Luxury Layer v1 — ضعه قبل vault.js ===== */
(function(){
const css=`
:root{--spring:cubic-bezier(.34,1.56,.64,1);--soft:0 14px 34px -14px rgba(0,0,0,.6),0 2px 8px rgba(0,0,0,.22);--hair:rgba(212,175,55,.3);
--bg:#0B0706;--card:#15100D;--card-hover:#1C1511;--border:rgba(212,175,55,.13);--border-strong:rgba(212,175,55,.28);--text-4:#948A7C}
:root[data-theme=light]{--bg:#F6EFE0;--card:#FCF8EE;--card-hover:#F3EAD6;--border:rgba(60,45,20,.13);--border-strong:rgba(90,70,25,.3);--text:#21190F;--text-2:#3B2F20;--soft:0 14px 30px -16px rgba(70,50,15,.35),0 1px 4px rgba(70,50,15,.12);--hair:rgba(139,117,36,.4)}
body{background:radial-gradient(120% 70% at 50% -10%,rgba(212,175,55,.07),transparent 60%),var(--bg)}
:root[data-theme=light] body{background:radial-gradient(120% 70% at 50% -10%,rgba(255,255,255,.7),transparent 60%),repeating-linear-gradient(45deg,rgba(120,95,40,.025) 0 2px,transparent 2px 4px),var(--bg)}
/* حركة ناعمة لكل عنصر تفاعلي */
button,.btn,.tab,.filter-chip,.settings-item,.home-action,.moment-card,.wopt,.section-item,.question-item,.bg-option,.stat-card,.on-this-day-year,.xbtn,.capture-btn,.rec-btn,.switch-cam{transition:transform .45s var(--spring),box-shadow .35s,background-color .3s,border-color .3s,color .3s;will-change:transform}
button:active,.btn:active,.filter-chip:active,.wopt:active,.section-item:active,.question-item:active,.bg-option:active,.xbtn:active,.switch-cam:active,.on-this-day-year:active{transform:scale(.95)}
.moment-card:active,.stat-card:active,.settings-item:active{transform:scale(.985)}
.home-action:active{transform:scale(.97) translateX(-3px)}
.capture-btn:active,.rec-btn:active{transform:scale(.9)}
@media(hover:hover){.btn:hover,.filter-chip:hover,.moment-card:hover{transform:translateY(-2px)}.moment-card:hover{box-shadow:var(--soft)}}
input,textarea,select{transition:box-shadow .4s,border-color .3s,transform .4s var(--spring)}
.text-input:focus,.search:focus,.answer-input:focus{border-color:var(--gold);box-shadow:0 0 0 4px var(--gold-soft),var(--soft);transform:scale(1.006)}
/* هوامش تتنفس */
.content{padding:calc(34px + env(safe-area-inset-top)) 22px 150px}
.page-title{margin-bottom:30px;letter-spacing:.04em;padding-bottom:14px}
.page-title::after{width:56px;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);opacity:1}
.home-greeting{font-size:1.5rem;margin-top:6px}.home-date{margin-bottom:8px}.home-hijri{margin-bottom:26px}
.home-actions{display:flex;flex-direction:column;gap:12px}
.home-action{padding:20px 18px;border:1px solid var(--border);border-radius:24px;background:var(--card);box-shadow:var(--soft);animation:fu .6s var(--spring) both}
.home-action:last-child{border:1px solid var(--border)}
.home-action:nth-child(2){animation-delay:.07s}.home-action:nth-child(3){animation-delay:.14s}.home-action:nth-child(4){animation-delay:.21s}.home-action:nth-child(5){animation-delay:.28s}
.home-action svg{filter:drop-shadow(0 0 6px rgba(212,175,55,.35))}
.on-this-day{margin:34px auto;padding:22px;border-radius:26px;box-shadow:var(--soft);border-color:var(--hair)}
.on-this-day-year{padding:14px 18px;margin:8px 0;border-radius:18px}
.home-stats{margin-top:38px;padding:26px 0;gap:44px;border-color:var(--hair)}
.moments-grid{gap:30px}
.moment-card{border-radius:28px;box-shadow:var(--soft);border-color:var(--border)}
.moment-meta{padding:14px 20px}.moment-caption{padding:14px 20px 0}
.filters{gap:10px;margin-bottom:20px}.filter-chip{padding:11px 20px}
.search{padding:15px 24px;box-shadow:var(--soft)}
.settings-list{border-radius:26px;box-shadow:var(--soft)}.settings-item{padding:20px 18px}.settings-group{margin-bottom:34px}
.stat-card{border-radius:24px;padding:28px 16px;box-shadow:var(--soft)}
.sheet{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.sheet-content{border-radius:34px;padding:34px 22px;border-color:var(--hair);box-shadow:0 30px 80px -20px rgba(0,0,0,.75);animation:fu .5s var(--spring)}
.btn{margin:14px auto;padding:18px}.btn.primary{box-shadow:0 10px 26px -10px rgba(212,175,55,.55)}
.modal-actions button{box-shadow:var(--soft)}
.section-item,.question-item,.wopt{border-radius:22px}
.xbtn{backdrop-filter:blur(8px)}
/* شريط التبويب عائم */
.tabs{left:14px;right:14px;bottom:calc(12px + env(safe-area-inset-bottom));border:1px solid var(--hair);border-radius:30px;padding-bottom:0;background:var(--nav);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 16px 40px -12px rgba(0,0,0,.7)}
.tab{padding:13px 0 11px}.tab.active svg{transform:translateY(-2px) scale(1.12);filter:drop-shadow(0 0 6px rgba(212,175,55,.6))}.tab svg{transition:transform .45s var(--spring)}
/* ورقة الكتابة */
#textScreen{background:radial-gradient(90% 60% at 50% 0,rgba(212,175,55,.08),transparent 70%),#080504;padding-inline:22px}
:root[data-theme=light] #textScreen{background:radial-gradient(90% 60% at 50% 0,#fff8e6,#EADFC6)}
#textScreen .screen-title{opacity:.85;font-size:1.3rem}
#textScreen .text-input{min-height:48vh;max-width:520px;border:1px solid var(--hair);border-radius:6px 26px 26px 6px;padding:26px 26px 26px 22px;font:1.2rem/2.2rem var(--fq);color:#EADFC6;caret-color:var(--gold);
background:repeating-linear-gradient(transparent 0 calc(2.2rem - 1px),rgba(212,175,55,.16) calc(2.2rem - 1px) 2.2rem),linear-gradient(180deg,#1F1710,#17110C);background-attachment:local;
box-shadow:inset 0 0 60px rgba(0,0,0,.45),0 24px 50px -20px rgba(0,0,0,.8),inset 10px 0 0 -8px rgba(160,50,40,.4);border-inline-start:2px solid rgba(160,50,40,.35)}
:root[data-theme=light] #textScreen .text-input{color:#2A1F12;background:repeating-linear-gradient(transparent 0 calc(2.2rem - 1px),rgba(90,70,25,.17) calc(2.2rem - 1px) 2.2rem),linear-gradient(180deg,#FFFBF0,#F5ECD6);box-shadow:inset 0 0 50px rgba(150,120,50,.18),0 20px 40px -20px rgba(70,50,15,.45)}
#textScreen .text-input:focus{transform:none;box-shadow:inset 0 0 60px rgba(0,0,0,.4),0 0 0 1px var(--gold),0 0 60px -10px rgba(212,175,55,.35)}
#textScreen .background-section,#textScreen #qBox2{transition:opacity .6s}
#textScreen:focus-within .background-section,#textScreen:focus-within .btn-close{opacity:.18}
#textScreen:focus-within .background-section:active,#textScreen:focus-within .background-section:focus-within{opacity:1}
/* المكتب والختم الشمعي */
.desk{background:radial-gradient(120% 80% at 50% 0,#2a1d12,#120c08)!important;border-color:var(--hair)!important}
:root[data-theme=light] .desk{background:radial-gradient(120% 80% at 50% 0,#E8D8B4,#CDB78A)!important}
.deskgrid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:8px 0 6px}
.fold{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;padding:26px 10px 18px;border-radius:8px 22px 22px 22px;text-align:center;color:#F1E3C0;
background:linear-gradient(160deg,#3a2a18,#22170d);border:1px solid rgba(212,175,55,.35);box-shadow:0 14px 26px -12px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.08);animation:fu .6s var(--spring) both}
.fold::before{content:'';position:absolute;top:-9px;inset-inline-start:14px;width:46%;height:12px;border-radius:8px 8px 0 0;background:#3a2a18;border:1px solid rgba(212,175,55,.35);border-bottom:0}
.fold:nth-child(2n){transform:rotate(1.2deg);animation-delay:.08s}.fold:nth-child(2n+1){transform:rotate(-1.2deg)}.fold:nth-child(3){animation-delay:.16s}.fold:nth-child(4){animation-delay:.24s}.fold:nth-child(5){animation-delay:.32s}
.fold.env{background:linear-gradient(165deg,#F4EAD2,#DCCBA0);color:#3A2C16;grid-column:1/-1;flex-direction:row;justify-content:center;gap:16px;border-radius:14px}
.fold.env::before{display:none}
.fold b{font:500 1.1rem var(--fd)}.fold small{font:.78rem var(--fb);opacity:.7}
.fold .ic{font-size:1.9rem}
.seal{width:46px;height:46px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#d44a3a,#7a1a12 72%);box-shadow:inset 0 -3px 6px rgba(0,0,0,.45),0 4px 10px rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;color:#F4D98C;font-size:1.2rem;position:relative}
.seal i{position:absolute;top:-6px;inset-inline-end:-6px;background:var(--gold);color:#0F0A08;border-radius:999px;font:700 .7rem var(--fb);padding:1px 6px;font-style:normal}
/* آلة الزمن */
#datePickerSheet .sheet-content{background:radial-gradient(100% 70% at 50% 0,#3b2c14,#150f08);border:1px solid rgba(212,175,55,.5);overflow:hidden}
:root[data-theme=light] #datePickerSheet .sheet-content{background:radial-gradient(100% 70% at 50% 0,#EBD9AE,#C9B07A)}
#datePickerSheet .sheet-content::before{content:'⚙';position:absolute;top:-22px;inset-inline-start:-20px;font-size:7rem;color:var(--gold);opacity:.16;animation:spinG 28s linear infinite;pointer-events:none}
#datePickerSheet .sheet-content::after{content:'⚙';position:absolute;bottom:-26px;inset-inline-end:-18px;font-size:6rem;color:var(--gold);opacity:.14;animation:spinG 20s linear infinite reverse;pointer-events:none}
@keyframes spinG{to{transform:rotate(360deg)}}
#datePickerSheet select{appearance:none;-webkit-appearance:none;border-radius:16px!important;background:linear-gradient(180deg,#0a0705,#1d150d)!important;color:var(--gold-light)!important;border:1px solid rgba(212,175,55,.5)!important;box-shadow:inset 0 6px 14px rgba(0,0,0,.7),0 1px 0 rgba(255,255,255,.1);font-family:var(--fd)}
#datePickerSheet select:focus{box-shadow:inset 0 6px 14px rgba(0,0,0,.7),0 0 0 3px var(--gold-soft)}
/* كتاب السنة ثلاثي الأبعاد */
#bkst{perspective:2000px}
.bkpg{transform-origin:left center;border-radius:4px 22px 22px 4px;border:1px solid var(--hair);padding:30px 24px;
background:linear-gradient(90deg,rgba(0,0,0,.35),transparent 7%),var(--card);box-shadow:-10px 0 24px -14px rgba(0,0,0,.7) inset,0 22px 40px -16px rgba(0,0,0,.7)}
.bkpg::after{content:'';position:absolute;inset:0;pointer-events:none;border-radius:inherit;box-shadow:inset 0 0 40px rgba(212,175,55,.06)}
/* صندوق مخملي لملخص الأسبوع */
.velvet{position:relative;padding:22px 16px 18px;margin-bottom:26px;border-radius:22px;text-align:center;color:#F1E3C0;background:radial-gradient(120% 140% at 50% 0,#5a1420,#2a0710);border:1px solid rgba(212,175,55,.55);box-shadow:inset 0 0 30px rgba(0,0,0,.6),0 16px 30px -14px rgba(0,0,0,.8)}
.velvet::before{content:'';position:absolute;inset:6px;border:1px dashed rgba(212,175,55,.4);border-radius:16px;pointer-events:none}
.velvet b{font:500 1.2rem var(--fd);display:block;margin-bottom:6px;color:var(--gold-light)}
.pcard{position:relative;margin:-6px 0 22px;padding:12px 12px 16px;border-radius:6px;background:#FBF4E2;color:#2A1F12;text-align:start;box-shadow:0 14px 26px -12px rgba(0,0,0,.7);animation:pcOut .8s var(--spring) both;transform-origin:top center}
.pcard:nth-of-type(odd){--r:-2deg}.pcard:nth-of-type(even){--r:1.8deg}
@keyframes pcOut{from{opacity:0;transform:translateY(-140px) scale(.85) rotate(0)}to{opacity:1;transform:rotate(var(--r,0))}}
.pcard img{width:100%;height:170px;object-fit:cover;border-radius:3px;display:block;margin-bottom:10px}
.pcard .pt{font:1.05rem/1.8 var(--fq);min-height:2.4em}
.pcard .pd{font:.85rem var(--fd);color:#8B7524;margin-top:6px;display:flex;justify-content:space-between}
.pcard .stamp{width:34px;height:40px;border:2px dotted #8B7524;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:1.1rem}
`;
const st=document.createElement('style');st.id='luxury-css';st.textContent=css;document.head.appendChild(st);

/* لمسة اهتزاز خفيفة */
const hap=()=>{try{const h=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.Haptics;if(h)h.impact({style:'LIGHT'});else if(navigator.vibrate)navigator.vibrate(6)}catch(e){}};
document.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('button,.tab,label.bg-option,.fold'))hap()},{passive:true});

/* المكتب: مجلدات ورسائل بختم شمعي */
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

/* ملخص الأسبوع: صندوق مخملي تخرج منه بطاقات بريدية */
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
