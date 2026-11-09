/* ===== Lahza Luxury Layer v2 — ضعه قبل vault.js ===== */
(function(){
const css=`
:root{
  --spring:cubic-bezier(.22,1,.36,1);
  --soft:0 1px 0 rgba(255,255,255,.05) inset,0 -1px 0 rgba(0,0,0,.35) inset,0 22px 48px -18px rgba(0,0,0,.72),0 6px 14px -4px rgba(0,0,0,.35);
  --hair:rgba(212,175,55,.3);
  --lux-gold-metallic:linear-gradient(135deg,#7A5C13 0%,#C9A227 22%,#F2DFA0 46%,#C9A227 68%,#8B6F1F 100%);
  --lux-gold-soft:linear-gradient(135deg,rgba(212,175,55,.55),rgba(242,223,160,.95) 50%,rgba(122,92,19,.55));
  --bg:#0B0706;--card:#15100D;--card-hover:#1C1511;
  --border:rgba(212,175,55,.13);--border-strong:rgba(212,175,55,.28);
  --text-4:#948A7C;
}
:root[data-theme=light]{
  --bg:#F6EFE0;--card:#FCF8EE;--card-hover:#F3EAD6;
  --border:rgba(60,45,20,.13);--border-strong:rgba(90,70,25,.3);
  --text:#21190F;--text-2:#3B2F20;
  --soft:0 1px 0 rgba(255,255,255,.7) inset,0 22px 42px -18px rgba(70,50,15,.4),0 1px 4px rgba(70,50,15,.15);
  --hair:rgba(139,117,36,.42);
}

/* الحبيبات — ملمس الفخامة */
body::after{
  content:'';position:fixed;inset:0;pointer-events:none;z-index:9998;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .9  0 0 0 0 .75  0 0 0 0 .35  0 0 0 .5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.32'/></svg>");
  opacity:.075;mix-blend-mode:overlay;
}
:root[data-theme=light] body::after{opacity:.05;mix-blend-mode:multiply}

/* إضاءة محيطة دافئة */
body{
  background:
    radial-gradient(60% 40% at 78% -6%,rgba(212,175,55,.16),transparent 62%),
    radial-gradient(50% 35% at 8% 108%,rgba(160,40,40,.11),transparent 70%),
    radial-gradient(120% 70% at 50% -10%,rgba(212,175,55,.07),transparent 60%),
    var(--bg);
}
:root[data-theme=light] body{
  background:
    radial-gradient(60% 40% at 78% -6%,rgba(255,240,200,.85),transparent 62%),
    radial-gradient(50% 35% at 8% 108%,rgba(220,200,150,.55),transparent 70%),
    repeating-linear-gradient(45deg,rgba(120,95,40,.02) 0 2px,transparent 2px 4px),
    var(--bg);
}

/* الحركة الواثقة */
button,.btn,.tab,.filter-chip,.settings-item,.home-action,.moment-card,.wopt,.section-item,.question-item,.bg-option,.stat-card,.on-this-day-year,.xbtn,.capture-btn,.rec-btn,.switch-cam{transition:transform .55s var(--spring),box-shadow .5s cubic-bezier(.16,1,.3,1),background-color .35s,border-color .35s,color .35s,filter .35s;will-change:transform}
button:active,.btn:active,.filter-chip:active,.wopt:active,.section-item:active,.question-item:active,.bg-option:active,.xbtn:active,.switch-cam:active,.on-this-day-year:active{transform:scale(.94);filter:brightness(.94)}
.moment-card:active,.stat-card:active,.settings-item:active{transform:scale(.985)}
.home-action:active{transform:scale(.97) translateX(-3px)}
.capture-btn:active,.rec-btn:active{transform:scale(.9)}
@media(hover:hover){
  .btn:hover,.filter-chip:hover,.moment-card:hover,.home-action:hover{transform:translateY(-2px)}
  .moment-card:hover{box-shadow:0 30px 60px -20px rgba(0,0,0,.8),0 8px 20px -6px rgba(0,0,0,.4),0 0 0 1px rgba(212,175,55,.18) inset}
}

input,textarea,select{transition:box-shadow .5s cubic-bezier(.16,1,.3,1),border-color .35s,transform .5s var(--spring)}
.text-input:focus,.search:focus,.answer-input:focus{border-color:var(--gold,#D4AF37);box-shadow:0 0 0 4px rgba(212,175,55,.14),0 0 40px -8px rgba(242,223,160,.35),var(--soft);transform:scale(1.005)}

/* عناوين ذهب معدني */
.page-title,.home-greeting{
  background:var(--lux-gold-metallic);
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
  letter-spacing:.06em;
  filter:drop-shadow(0 1px 0 rgba(0,0,0,.55)) drop-shadow(0 0 14px rgba(212,175,55,.18));
}
:root[data-theme=light] .page-title,
:root[data-theme=light] .home-greeting{
  filter:drop-shadow(0 1px 0 rgba(255,255,255,.6)) drop-shadow(0 0 12px rgba(139,117,36,.2));
}
.page-title{margin-bottom:30px;padding-bottom:16px}
.page-title::after{content:'';display:block;margin-top:14px;width:88px;height:1px;background:linear-gradient(90deg,transparent,rgba(242,223,160,.95),transparent);box-shadow:0 0 10px rgba(242,223,160,.6)}
.home-greeting{font-size:1.55rem;margin-top:6px;letter-spacing:.03em}
.home-date{margin-bottom:8px}.home-hijri{margin-bottom:28px}
.content{padding:calc(34px + env(safe-area-inset-top)) 22px 150px}

.home-actions{display:flex;flex-direction:column;gap:14px}
.home-action{
  position:relative;padding:22px 20px;border:1px solid var(--border);border-radius:26px;
  background:linear-gradient(180deg,var(--card-hover),var(--card));
  box-shadow:var(--soft);animation:fu .85s var(--spring) both;overflow:hidden;
}
.home-action::before{
  content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;
  background:var(--lux-gold-soft);
  -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  pointer-events:none;opacity:.4;transition:opacity .6s;
}
.home-action:hover::before{opacity:.9}
.home-action svg{filter:drop-shadow(0 0 8px rgba(242,223,160,.5))}
.home-action:nth-child(2){animation-delay:.08s}
.home-action:nth-child(3){animation-delay:.16s}
.home-action:nth-child(4){animation-delay:.24s}
.home-action:nth-child(5){animation-delay:.32s}

.on-this-day{margin:36px auto;padding:24px;border-radius:28px;box-shadow:var(--soft);border-color:var(--hair)}
.on-this-day-year{padding:16px 20px;margin:10px 0;border-radius:20px}
.home-stats{margin-top:40px;padding:28px 0;gap:44px;border-color:var(--hair)}
.moments-grid{gap:30px}
.moment-card{position:relative;border-radius:30px;box-shadow:var(--soft);border-color:var(--border);background:linear-gradient(180deg,var(--card-hover),var(--card))}
.moment-meta{padding:16px 22px}.moment-caption{padding:16px 22px 0}
.filters{gap:10px;margin-bottom:20px}.filter-chip{padding:12px 22px}
.search{padding:15px 24px;box-shadow:var(--soft)}
.settings-list{border-radius:28px;box-shadow:var(--soft);background:linear-gradient(180deg,var(--card-hover),var(--card))}
.settings-item{padding:22px 20px}.settings-group{margin-bottom:36px}
.stat-card{position:relative;border-radius:26px;padding:30px 18px;box-shadow:var(--soft);background:linear-gradient(180deg,var(--card-hover),var(--card))}
.stat-card::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:var(--lux-gold-soft);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;opacity:.35}
.sheet{backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.sheet-content{
  position:relative;border-radius:36px;padding:36px 24px;border-color:var(--hair);
  box-shadow:0 40px 90px -28px rgba(0,0,0,.85),0 0 0 1px rgba(212,175,55,.1);
  animation:fu .65s var(--spring);background:linear-gradient(180deg,var(--card-hover),var(--card));
}
.sheet-content::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:var(--lux-gold-soft);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;opacity:.45}

.btn{margin:16px auto;padding:18px 22px;border-radius:18px;letter-spacing:.05em}
.btn.primary{
  background:linear-gradient(180deg,#F2DFA0 0%,#D4AF37 45%,#C9A227 55%,#8B6F1F 100%);
  color:#1A1206;font-weight:600;
  box-shadow:0 18px 38px -14px rgba(212,175,55,.55),0 6px 14px -4px rgba(0,0,0,.4),0 1px 0 rgba(255,255,255,.6) inset,0 -2px 0 rgba(122,92,19,.6) inset;
  text-shadow:0 1px 0 rgba(255,255,255,.28);
}
.btn.primary:hover{filter:brightness(1.06) saturate(1.05)}
.modal-actions button{box-shadow:var(--soft)}
.section-item,.question-item,.wopt{border-radius:22px}
.xbtn{backdrop-filter:blur(10px)}

/* شريط تبويب عائم فخم */
.tabs{
  left:14px;right:14px;bottom:calc(12px + env(safe-area-inset-bottom));
  border:1px solid var(--hair);border-radius:32px;padding-bottom:0;
  background:linear-gradient(180deg,rgba(28,21,17,.88),rgba(15,11,8,.95));
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  box-shadow:0 24px 54px -18px rgba(0,0,0,.9),0 4px 10px -2px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.06) inset;
}
:root[data-theme=light] .tabs{background:linear-gradient(180deg,rgba(255,250,235,.94),rgba(240,230,205,.98))}
.tabs::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(90deg,transparent 8%,rgba(242,223,160,.55) 50%,transparent 92%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
.tab{padding:13px 0 11px}
.tab svg{transition:transform .55s var(--spring)}
.tab.active svg{transform:translateY(-2px) scale(1.14);filter:drop-shadow(0 0 10px rgba(242,223,160,.9)) drop-shadow(0 0 3px rgba(212,175,55,.7))}

/* ورقة الكتابة */
#textScreen{background:radial-gradient(90% 60% at 50% 0,rgba(212,175,55,.1),transparent 70%),#080504;padding-inline:22px}
:root[data-theme=light] #textScreen{background:radial-gradient(90% 60% at 50% 0,#fff8e6,#EADFC6)}
#textScreen .screen-title{opacity:.9;font-size:1.35rem;letter-spacing:.05em}
#textScreen .text-input{
  min-height:48vh;max-width:520px;border:1px solid var(--hair);border-radius:6px 28px 28px 6px;
  padding:28px 28px 28px 24px;font:1.2rem/2.2rem var(--fq);color:#EADFC6;caret-color:#F2DFA0;
  background:repeating-linear-gradient(transparent 0 calc(2.2rem - 1px),rgba(212,175,55,.15) calc(2.2rem - 1px) 2.2rem),linear-gradient(180deg,#1F1710,#17110C);
  background-attachment:local;
  box-shadow:inset 0 0 70px rgba(0,0,0,.5),inset 0 0 0 1px rgba(212,175,55,.06),0 30px 60px -24px rgba(0,0,0,.9),0 3px 0 rgba(255,255,255,.03) inset;
  border-inline-start:2px solid rgba(160,50,40,.4);
}
:root[data-theme=light] #textScreen .text-input{
  color:#2A1F12;
  background:repeating-linear-gradient(transparent 0 calc(2.2rem - 1px),rgba(90,70,25,.17) calc(2.2rem - 1px) 2.2rem),linear-gradient(180deg,#FFFBF0,#F5ECD6);
  box-shadow:inset 0 0 55px rgba(150,120,50,.2),0 22px 44px -20px rgba(70,50,15,.5),0 2px 0 rgba(255,255,255,.7) inset;
}
#textScreen .text-input:focus{transform:none;box-shadow:inset 0 0 70px rgba(0,0,0,.5),0 0 0 1px #D4AF37,0 0 50px -8px rgba(242,223,160,.4),0 30px 60px -24px rgba(0,0,0,.9)}
#textScreen .background-section,#textScreen #qBox2{transition:opacity .6s}
#textScreen:focus-within .background-section,#textScreen:focus-within .btn-close{opacity:.18}
#textScreen:focus-within .background-section:active,#textScreen:focus-within .background-section:focus-within{opacity:1}

/* المكتب */
.desk{background:radial-gradient(120% 80% at 50% 0,#2f2014,#120c08) !important;border-color:var(--hair)!important}
:root[data-theme=light] .desk{background:radial-gradient(120% 80% at 50% 0,#E8D8B4,#CDB78A)!important}
.deskgrid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:8px 0 6px}
.fold{
  position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;
  padding:28px 12px 20px;border-radius:8px 24px 24px 24px;text-align:center;color:#F1E3C0;
  background:linear-gradient(160deg,#3a2a18,#22170d);
  border:1px solid rgba(212,175,55,.4);
  box-shadow:0 16px 30px -14px rgba(0,0,0,.85),0 1px 0 rgba(255,255,255,.08) inset,0 0 0 1px rgba(0,0,0,.3) inset;
  animation:fu .8s var(--spring) both;
}
.fold::before{content:'';position:absolute;top:-9px;inset-inline-start:14px;width:46%;height:12px;border-radius:8px 8px 0 0;background:#3a2a18;border:1px solid rgba(212,175,55,.4);border-bottom:0}
.fold:nth-child(2n){transform:rotate(1.2deg);animation-delay:.08s}
.fold:nth-child(2n+1){transform:rotate(-1.2deg)}
.fold:nth-child(3){animation-delay:.16s}.fold:nth-child(4){animation-delay:.24s}.fold:nth-child(5){animation-delay:.32s}
.fold.env{background:linear-gradient(165deg,#F4EAD2,#DCCBA0);color:#3A2C16;grid-column:1/-1;flex-direction:row;justify-content:center;gap:16px;border-radius:14px;box-shadow:0 18px 34px -12px rgba(0,0,0,.65),0 1px 0 rgba(255,255,255,.6) inset}
.fold.env::before{display:none}
.fold b{font:500 1.15rem var(--fd);letter-spacing:.02em}
.fold small{font:.78rem var(--fb);opacity:.72}
.fold .ic{font-size:2rem;filter:drop-shadow(0 2px 6px rgba(0,0,0,.5))}

/* ختم شمعي فخم */
.seal{
  width:48px;height:48px;border-radius:50%;
  background:radial-gradient(circle at 35% 30%,#ff6b58 0%,#c83024 30%,#7a1410 70%,#4a0805 100%);
  box-shadow:0 8px 16px -4px rgba(0,0,0,.7),0 2px 5px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.35) inset,0 -3px 10px rgba(0,0,0,.55) inset;
  display:flex;align-items:center;justify-content:center;color:#F4D98C;font-size:1.25rem;position:relative;
}
.seal::after{content:'';position:absolute;inset:4px;border-radius:50%;border:1px solid rgba(255,220,150,.3);box-shadow:inset 0 0 8px rgba(0,0,0,.4);pointer-events:none}
.seal i{position:absolute;top:-6px;inset-inline-end:-6px;background:linear-gradient(180deg,#F2DFA0,#C9A227);color:#0F0A08;border-radius:999px;font:700 .72rem var(--fb);padding:2px 7px;font-style:normal;box-shadow:0 2px 5px rgba(0,0,0,.5)}

/* آلة الزمن */
#datePickerSheet .sheet-content{background:radial-gradient(100% 70% at 50% 0,#3b2c14,#150f08);border:1px solid rgba(212,175,55,.5);overflow:hidden}
:root[data-theme=light] #datePickerSheet .sheet-content{background:radial-gradient(100% 70% at 50% 0,#EBD9AE,#C9B07A)}
#datePickerSheet .sheet-content::before{content:'⚙';position:absolute;top:-22px;inset-inline-start:-20px;font-size:7rem;color:var(--gold,#D4AF37);opacity:.16;animation:spinG 28s linear infinite;pointer-events:none}
#datePickerSheet .sheet-content::after{content:'⚙';position:absolute;bottom:-26px;inset-inline-end:-18px;font-size:6rem;color:var(--gold,#D4AF37);opacity:.14;animation:spinG 20s linear infinite reverse;pointer-events:none}
@keyframes spinG{to{transform:rotate(360deg)}}
#datePickerSheet select{appearance:none;-webkit-appearance:none;border-radius:16px!important;background:linear-gradient(180deg,#0a0705,#1d150d)!important;color:var(--gold-light,#F2DFA0)!important;border:1px solid rgba(212,175,55,.5)!important;box-shadow:inset 0 6px 14px rgba(0,0,0,.7),0 1px 0 rgba(255,255,255,.1);font-family:var(--fd)}
#datePickerSheet select:focus{box-shadow:inset 0 6px 14px rgba(0,0,0,.7),0 0 0 3px var(--gold-soft,rgba(212,175,55,.15))}

/* كتاب السنة */
#bkst{perspective:2000px}
.bkpg{transform-origin:left center;border-radius:4px 24px 24px 4px;border:1px solid var(--hair);padding:32px 26px;background:linear-gradient(90deg,rgba(0,0,0,.38),transparent 7%),linear-gradient(180deg,var(--card-hover),var(--card));box-shadow:-10px 0 24px -14px rgba(0,0,0,.75) inset,0 24px 44px -18px rgba(0,0,0,.75),0 1px 0 rgba(255,255,255,.04) inset}
.bkpg::after{content:'';position:absolute;inset:0;pointer-events:none;border-radius:inherit;box-shadow:inset 0 0 45px rgba(212,175,55,.07)}

/* الصندوق المخملي */
.velvet{
  position:relative;padding:26px 18px 22px;margin-bottom:28px;border-radius:24px;text-align:center;color:#F1E3C0;
  background:radial-gradient(120% 140% at 50% 0,#6b1826 0%,#3a0a15 50%,#20050c 100%);
  border:1px solid rgba(212,175,55,.6);
  box-shadow:inset 0 0 40px rgba(0,0,0,.65),inset 0 1px 0 rgba(255,255,255,.08),0 20px 40px -14px rgba(0,0,0,.85),0 0 0 1px rgba(212,175,55,.15) inset;
}
.velvet::before{content:'';position:absolute;inset:7px;border:1px dashed rgba(212,175,55,.45);border-radius:18px;pointer-events:none}
.velvet b{font:500 1.3rem var(--fd);display:block;margin-bottom:8px;background:linear-gradient(135deg,#F2DFA0 0%,#D4AF37 50%,#8B6F1F 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:.04em}

/* البطاقات البريدية */
.pcard{
  position:relative;margin:-6px 0 24px;padding:14px 14px 18px;border-radius:6px;
  background:linear-gradient(180deg,#FCF6E5,#F5ECD2);color:#2A1F12;text-align:start;
  box-shadow:0 18px 34px -14px rgba(0,0,0,.75),0 2px 6px rgba(0,0,0,.25),0 1px 0 rgba(255,255,255,.9) inset;
  animation:pcOut .9s var(--spring) both;transform-origin:top center;
}
.pcard:nth-of-type(odd){--r:-2deg}.pcard:nth-of-type(even){--r:1.8deg}
@keyframes pcOut{from{opacity:0;transform:translateY(-140px) scale(.85) rotate(0)}to{opacity:1;transform:rotate(var(--r,0))}}
.pcard img{width:100%;height:170px;object-fit:cover;border-radius:3px;display:block;margin-bottom:12px;filter:saturate(.95) contrast(1.02)}
.pcard .pt{font:1.05rem/1.8 var(--fq);min-height:2.4em}
.pcard .pd{font:.85rem var(--fd);color:#8B7524;margin-top:8px;display:flex;justify-content:space-between;align-items:center}
.pcard .stamp{width:36px;height:42px;border:2px dotted #8B7524;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:1.15rem;color:#8B7524;background:rgba(139,117,36,.05)}

@keyframes fu{from{opacity:0;transform:translateY(16px) scale(.98);filter:blur(3px)}to{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
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
