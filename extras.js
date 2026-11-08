/* ===== لحظة: مميزات بصرية وعاطفية (محلية بالكامل) ===== */
(function(){
'use strict';
var $=function(i){return document.getElementById(i)};
var LG=function(){return (S.lang==='en'||S.lang==='sv')?S.lang:'ar'};

var D={
ar:{more:'مميزات',t_story:'حصاد الشهر',t_mosaic:'موزايك الشهر',t_mood:'ألوان المزاج',t_words:'سحابة الكلمات',t_week:'جريدة الأسبوع',t_night:'السهر',t_book:'كتاب السنة',t_sec:'ثانية كل يوم',t_cap:'كبسولة الزمن',
nodata:'لا بيانات كافية بعد',nostory:'لا لقطات كافية بهذا الشهر',w_happy:'كلمات أيام الفرح',w_hard:'كلمات أيام الضيق',w_note:'أكثر الكلمات تكراراً في كتاباتك، حسب مزاج اليوم',
paper:'جريدة لحظة',h_both:'أسبوع الإنجازات والتحديات',h_goals:'أسبوع الأهداف المتحققة',h_bright:'أسبوع مشرق',h_low:'أسبوع يحتاج احتضاناً',h_quiet:'أسبوع هادئ',h_steady:'أسبوع متوازن',
take:'درس الأسبوع',take_none:'اكتب أكثر هذا الأسبوع لنستخرج لك درساً (جرّب كلمة «تعلمت»)',share:'مشاركة البطاقة',quotes:'من كتاباتك',
n_title:'أفكار جوف الليل',n_count:'{n} لقطة بعد منتصف الليل ({p}% من لقطاتك)',n_link:'{p}% من أيام سهرك كان مزاجك في اليوم التالي أقل من معدلك. جرّب النوم مبكراً اليوم',n_nolink:'لا يوجد ارتباط واضح بين سهرك ومزاجك حتى الآن',n_none:'ما كتبت شيئاً بعد منتصف الليل',n_theme:'ثيم الليل التلقائي (من 12 إلى 5 فجراً)',n_on:'مفعّل',n_off:'معطّل',
b_cover:'ذكرياتي',b_hl:'أبرز أيام السنة',b_laugh:'أكثر يوم ضحكت فيه',b_proud:'أكثر يوم شعرت فيه بالفخر',b_none:'لم نجد يوماً واضحاً بعد',seasons:['الشتاء','الربيع','الصيف','الخريف'],ch_t:'فصل {s}: كان {d}',c_happy:'مبهجاً',c_hard:'مليئاً بالتحديات',c_busy:'مليئاً بالتوثيق',c_calm:'هادئاً',
s_rec:'صوّر',s_file:'اختر فيديو',s_start:'بداية الثانية',s_len:'المدة (ثواني)',s_save:'احفظ الثانية',s_merge:'دمج الشهر',s_count:'{n} ثانية هذا الشهر',s_busy:'جاري المعالجة... أبقِ الشاشة مفتوحة',s_need:'تحتاج مقطعين على الأقل هذا الشهر',s_done:'اكتمل الدمج',s_saved:'تم الحفظ',s_fail:'تعذّر على هذا الجهاز',s_vsave:'حفظ كلقطة',
cp_closed:'اضغط لفتح صندوق الذكريات',cp_again:'صندوق آخر',cp_open:'فتح اللقطة',cp_none:'تحتاج لقطات أقدم من شهر لفتح الصندوق',cp_ly:'في مثل هذا اليوم من العام الماضي',cp_m:'قبل {n} شهر',cp_y:'قبل {n} سنة',cp_d:'قبل {n} يوم',
pol:'بطاقة Polaroid',st_end:'نهاية الحصاد',
ms_joy:['يومك مشرق! كمّل 🌞','فرحك بيضوّي حواليك'],ms_ok:['أنا معك، شو الأخبار؟','يوم هادئ وحلو'],ms_sad:['أيام صعبة؟ أنا هون، خذ مظلتي ☂️','بعد المطر بتطلع الشمس'],ms_none:['اكتب لقطة وخبّرني شو حاسس']},
en:{more:'More',t_story:'Month harvest',t_mosaic:'Month mosaic',t_mood:'Mood colors',t_words:'Word cloud',t_week:'Weekly digest',t_night:'Night owl',t_book:'Year book',t_sec:'1 second a day',t_cap:'Time capsule',
nodata:'Not enough data yet',nostory:'Not enough moments this month',w_happy:'Words of happy days',w_hard:'Words of hard days',w_note:'Your most repeated words, split by the mood of the day',
paper:'The Lahza Times',h_both:'A week of wins and challenges',h_goals:'A week of goals reached',h_bright:'A bright week',h_low:'A week that needs a hug',h_quiet:'A quiet week',h_steady:'A balanced week',
take:'Lesson of the week',take_none:'Write more this week and we will find a lesson (try the word "learned")',share:'Share card',quotes:'From your writing',
n_title:'Midnight thoughts',n_count:'{n} moments after midnight ({p}% of your moments)',n_link:'In {p}% of your late nights, your mood the next day was below your average. Try sleeping early today',n_nolink:'No clear link between your late nights and your mood so far',n_none:'You have not written anything after midnight',n_theme:'Automatic night theme (12 to 5 am)',n_on:'On',n_off:'Off',
b_cover:'My memories',b_hl:'Highlights of the year',b_laugh:'The day you laughed most',b_proud:'The day you felt proudest',b_none:'No clear day found yet',seasons:['Winter','Spring','Summer','Autumn'],ch_t:'{s}: it was {d}',c_happy:'a happy one',c_hard:'full of challenges',c_busy:'full of moments',c_calm:'a calm one',
s_rec:'Record',s_file:'Choose video',s_start:'Second starts at',s_len:'Length (seconds)',s_save:'Save the second',s_merge:'Merge the month',s_count:'{n} seconds this month',s_busy:'Processing... keep the screen on',s_need:'You need at least two clips this month',s_done:'Merge complete',s_saved:'Saved',s_fail:'Not possible on this device',s_vsave:'Save as moment',
cp_closed:'Tap to open the memory box',cp_again:'Another box',cp_open:'Open moment',cp_none:'You need moments older than a month',cp_ly:'On this day last year',cp_m:'{n} months ago',cp_y:'{n} years ago',cp_d:'{n} days ago',
pol:'Polaroid card',st_end:'End of the harvest',
ms_joy:['Your day is bright! Keep going 🌞','Your joy lights things up'],ms_ok:['I am with you, how are things?','A calm, nice day'],ms_sad:['Hard days? I am here, take my umbrella ☂️','The sun comes out after the rain'],ms_none:['Write a moment and tell me how you feel']},
sv:{more:'Mer',t_story:'Månadens höjdpunkter',t_mosaic:'Månadsmosaik',t_mood:'Humörfärger',t_words:'Ordmoln',t_week:'Veckotidning',t_night:'Nattuggla',t_book:'Årsbok',t_sec:'En sekund om dagen',t_cap:'Tidskapsel',
nodata:'Inte tillräckligt med data än',nostory:'För få ögonblick denna månad',w_happy:'Ord från glada dagar',w_hard:'Ord från svåra dagar',w_note:'Dina vanligaste ord, uppdelade efter dagens humör',
paper:'Lahza Tidningen',h_both:'En vecka av framgångar och utmaningar',h_goals:'En vecka med uppnådda mål',h_bright:'En ljus vecka',h_low:'En vecka som behöver en kram',h_quiet:'En lugn vecka',h_steady:'En balanserad vecka',
take:'Veckans lärdom',take_none:'Skriv mer denna vecka så hittar vi en lärdom (prova ordet "lärde")',share:'Dela kort',quotes:'Från dina texter',
n_title:'Nattens tankar',n_count:'{n} ögonblick efter midnatt ({p}% av dina ögonblick)',n_link:'Efter {p}% av dina sena nätter var ditt humör nästa dag under ditt snitt. Försök sova tidigt idag',n_nolink:'Ingen tydlig koppling mellan sena nätter och humör än',n_none:'Du har inte skrivit något efter midnatt',n_theme:'Automatiskt nattläge (00 till 05)',n_on:'På',n_off:'Av',
b_cover:'Mina minnen',b_hl:'Årets höjdpunkter',b_laugh:'Dagen du skrattade mest',b_proud:'Dagen du kände dig stoltast',b_none:'Ingen tydlig dag än',seasons:['Vinter','Vår','Sommar','Höst'],ch_t:'{s}: det var {d}',c_happy:'glad',c_hard:'full av utmaningar',c_busy:'full av ögonblick',c_calm:'lugn',
s_rec:'Filma',s_file:'Välj video',s_start:'Sekunden börjar vid',s_len:'Längd (sekunder)',s_save:'Spara sekunden',s_merge:'Slå ihop månaden',s_count:'{n} sekunder denna månad',s_busy:'Bearbetar... låt skärmen vara på',s_need:'Du behöver minst två klipp denna månad',s_done:'Sammanslagningen klar',s_saved:'Sparat',s_fail:'Går inte på den här enheten',s_vsave:'Spara som ögonblick',
cp_closed:'Tryck för att öppna minneslådan',cp_again:'En annan låda',cp_open:'Öppna ögonblick',cp_none:'Du behöver ögonblick äldre än en månad',cp_ly:'På denna dag förra året',cp_m:'för {n} månader sedan',cp_y:'för {n} år sedan',cp_d:'för {n} dagar sedan',
pol:'Polaroid-kort',st_end:'Slut på sammanfattningen',
ms_joy:['Din dag är ljus! Fortsätt 🌞','Din glädje lyser upp'],ms_ok:['Jag är med dig, hur är det?','En lugn och fin dag'],ms_sad:['Tuffa dagar? Jag är här, ta mitt paraply ☂️','Solen kommer efter regnet'],ms_none:['Skriv ett ögonblick och berätta hur du mår']}
};
var X=function(k){var v=D[LG()][k];return v!==undefined?v:D.ar[k]};
var F=function(k,o){var s=X(k);for(var p in o)s=s.split('{'+p+'}').join(o[p]);return s};
var el=function(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!==undefined)e.innerHTML=html;return e};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var asc=function(a,b){return new Date(a.date)-new Date(b.date)};
var isCover=function(m){return String(m.caption||'').indexOf('⇄')===0};
var dayOf=function(m){return dstr(m.date)};
var mtext=function(m){return (m.type==='answer'?'':(m.caption||''))+' '+(m.txt||'')};
var head=function(a,txt){a.body.appendChild(el('h2','xh',esc(txt)))};
var note=function(a,txt){var d=el('div','xnote',esc(txt));a.body.appendChild(d);return d};
var MC={'😄':'#F2C94C','🙂':'#6FCF97','😐':'#56A0D3','😔':'#9AA0A6','😢':'#6B7A99'};

/* ---------- أنماط ---------- */
var css=document.createElement('style');
css.textContent=[
'.xfull{position:fixed;inset:0;z-index:475;background:var(--bg);color:var(--text);overflow-y:auto;padding:calc(72px + env(safe-area-inset-top)) 14px calc(40px + env(safe-area-inset-bottom));animation:fi .25s}',
'.xclose{position:fixed!important;top:calc(14px + env(safe-area-inset-top));inset-inline-start:14px;z-index:5}',
'.xb{max-width:560px;margin:0 auto}.xh{font:600 1.5rem var(--fd);color:var(--gold);text-align:center;margin:0 0 14px}',
'.xnote{text-align:center;color:var(--text-3);font-size:.92rem;margin:6px 0 14px;line-height:1.7}',
'.xnav{display:flex;justify-content:space-between;align-items:center;direction:ltr;margin:6px 0 12px}.xmt{font:1.15rem var(--fd);color:var(--gold)}',
'.xgrid{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}.xwd{text-align:center;font-size:.72rem;color:var(--text-3)}',
'.xcell{position:relative;aspect-ratio:1;border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:.85rem;color:var(--text-3);background:var(--card);border:0;padding:0}',
'.xmedia{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}',
'.xdn{position:absolute;top:2px;inset-inline-start:4px;font-size:.7rem;color:#fff;text-shadow:0 0 4px #000;z-index:2}',
'.xleg{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:14px 0}.xleg span{display:flex;align-items:center;gap:5px;font-size:.9rem}.xleg i{width:14px;height:14px;border-radius:50%;display:inline-block}',
'.xtiles{display:grid;grid-template-columns:1fr 1fr;gap:12px}.xtile{display:flex;flex-direction:column;align-items:center;gap:8px;padding:18px 8px;background:var(--card);border:1px solid var(--border-strong);border-radius:18px;color:var(--text);font:1rem var(--fd)}',
'.xtile b{width:52px;height:52px;border-radius:50%;background:var(--gold-soft);display:flex;align-items:center;justify-content:center;font-size:1.6rem;font-weight:400}',
'.xcloudw{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:6px 14px;padding:12px 4px;line-height:1.3;font-family:var(--fq)}',
'.xsec{font:1.1rem var(--fd);color:var(--gold);text-align:center;margin:18px 0 4px}',
'.xbar{display:flex;align-items:center;gap:10px;margin:6px 0}.xbar .tr{flex:1;height:12px;border-radius:6px;background:var(--card);overflow:hidden}.xbar .fl{height:100%}',
'.xpaper{background:#F4EFE3;color:#1a1a1a;border-radius:6px;padding:20px 16px;font-family:var(--fq);box-shadow:var(--shadow)}',
'.xmast{text-align:center;font:600 1.7rem var(--fq);letter-spacing:.04em;border-bottom:3px double #1a1a1a;padding-bottom:8px}.xdt{text-align:center;font-size:.85rem;color:#555;margin:6px 0}',
'.xhead{font:700 1.7rem/1.4 var(--fq);text-align:center;margin:10px 0}.xrule{border-top:2px solid #1a1a1a;margin:10px 0}.xrule.thin{border-top:1px solid #777}',
'.xstats{display:flex;justify-content:space-around;text-align:center;margin:10px 0}.xstats b{display:block;font:700 1.5rem var(--fq)}.xstats span{font-size:.78rem;color:#555}',
'.xq{font:1.1rem/1.9 var(--fq);padding:8px 0;border-bottom:1px solid #ccc}.xq small{display:block;color:#8B7524;font-size:.8rem}',
'.xtake{border:3px double #8B7524;padding:14px;margin:14px 0;text-align:center;font:1.2rem/1.9 var(--fq)}.xtake small{display:block;color:#8B7524;margin-bottom:6px}',
'.xph{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:10px}.xph img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;filter:grayscale(.3)}',
'.xbook{position:fixed;inset:0;z-index:485;background:var(--bg);color:var(--text);display:flex;flex-direction:column;gap:10px;padding:calc(12px + env(safe-area-inset-top)) 12px calc(12px + env(safe-area-inset-bottom))}',
'.xbk-st{flex:1;min-height:0;perspective:1400px;display:flex;touch-action:pan-y}',
'.xpg{flex:1;min-height:0;overflow-y:auto;background:var(--card);border:2px solid var(--gold);border-radius:6px 18px 18px 6px;padding:22px 18px;box-shadow:0 10px 30px rgba(0,0,0,.4);backface-visibility:hidden}',
'.xpg .d{font:1.1rem var(--fd);color:var(--gold);margin-bottom:10px}.xpg .tx{font:1.2rem/1.9 var(--fq);white-space:pre-wrap;word-break:break-word}.xpg img{width:100%;border-radius:10px;margin:10px 0}',
'.xstory{position:fixed;inset:0;z-index:495;background:#000;color:#fff;overflow:hidden}.xbars{position:absolute;top:calc(10px + env(safe-area-inset-top));left:8px;right:8px;display:flex;gap:3px;z-index:6;direction:ltr}',
'.xbars i{flex:1;height:3px;background:rgba(255,255,255,.3);border-radius:2px;overflow:hidden}.xbars b{display:block;height:100%;width:0;background:#fff}',
'.xstage{position:absolute;inset:0}.xslide{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}',
'.xslide img,.xslide video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;animation:xkb 6s ease-out forwards}',
'.xtx{background:linear-gradient(135deg,#3a2a12,#0F0A08)}.xbig{font:600 3rem var(--fd);color:#D4AF37}.xyr{font:2rem var(--fd);margin:6px 0}.xlogo{font:3.2rem "Great Vibes",cursive;color:#D4AF37;margin-top:30px}',
'.xcap2{position:absolute;left:0;right:0;bottom:0;padding:90px 22px calc(40px + env(safe-area-inset-bottom));background:linear-gradient(transparent,rgba(0,0,0,.75));z-index:2;font:1.25rem/1.9 var(--fq)}',
'.xcap2 small{display:block;color:#D4AF37;font:.9rem var(--fd);margin-bottom:6px}',
'.xtyped{font:1.5rem/2 var(--fq);padding:0 28px;z-index:2;word-break:break-word}',
'.xtap{position:absolute;top:80px;bottom:0;z-index:4}.xtap.l{left:0;width:35%}.xtap.r{right:0;width:65%}',
'.xsb{position:absolute!important;top:calc(20px + env(safe-area-inset-top));z-index:7}.xsb.c{right:12px}.xsb.m{right:64px}',
'.xcapw{position:relative;border-radius:18px;overflow:hidden;background:#000;animation:xsep 2.8s ease-out forwards;min-height:340px;display:flex;align-items:center;justify-content:center}',
'.xcapw img,.xcapw video{width:100%;display:block}.xcapw::after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 90px rgba(0,0,0,.65)}',
'.xcaptx{padding:34px 22px;font:1.3rem/2 var(--fq);text-align:center;color:#fff;animation:xfade 1.6s both;background:linear-gradient(135deg,#3a2a12,#0F0A08);width:100%}',
'.xfxl{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}',
'.xsun{position:absolute;top:-60%;right:-35%;width:170%;height:170%;border-radius:50%;background:repeating-conic-gradient(rgba(255,214,102,.28) 0 5deg,transparent 5deg 15deg);-webkit-mask-image:radial-gradient(circle,#000 0,transparent 65%);mask-image:radial-gradient(circle,#000 0,transparent 65%);animation:xspin 60s linear infinite}',
'.xrd{position:absolute;top:-24px;width:2px;height:18px;background:linear-gradient(rgba(170,200,240,0),rgba(170,200,240,.75));animation:xrain 1.2s linear infinite}',
'.xcl{position:absolute;left:-170px;width:150px;height:46px;border-radius:50px;background:rgba(255,255,255,.14);filter:blur(7px);animation:xdrift 24s linear infinite}',
'.xmas{display:flex;align-items:center;gap:12px;width:100%;text-align:start;margin:0 0 14px;padding:10px 12px;background:var(--card);border:1px solid var(--border-strong);border-radius:18px;color:var(--text);position:relative;overflow:hidden}',
'.xmas svg{flex:0 0 78px;width:78px;height:78px}.xmas .bub{flex:1;font:1rem/1.7 var(--fb)}.xmas .bub small{display:block;color:var(--text-3);font-size:.78rem}',
'.xmrain{position:absolute;inset:0;pointer-events:none;overflow:hidden}',
'.xhr{display:flex;gap:8px;justify-content:center;margin:12px 0 4px;flex-wrap:wrap}',
':root.xnight[data-theme]{--bg:#000;--card:#0b0b10;--card-hover:#12121a;--nav:rgba(0,0,0,.96);--veil:rgba(0,0,0,.98);--border:rgba(255,255,255,.07);--border-strong:rgba(255,255,255,.16);--text:#EDEDED;--text-2:#C8C8C8;--text-3:#9A9A9A;--gold:#D4AF37;--gold-light:#F4D98C;--gold-soft:rgba(212,175,55,.12);--on-gold:#0F0A08;color-scheme:dark}',
'#xstars{position:fixed;inset:0;pointer-events:none;z-index:1}#xstars i{position:absolute;width:2px;height:2px;border-radius:50%;background:#fff;opacity:0;animation:xtw 3.4s ease-in-out infinite}',
'@keyframes xrain{to{transform:translateY(125vh)}}@keyframes xspin{to{transform:rotate(360deg)}}@keyframes xtw{0%,100%{opacity:0}50%{opacity:.55}}',
'@keyframes xkb{from{transform:scale(1)}to{transform:scale(1.12)}}@keyframes xfade{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}',
'@keyframes xsep{from{filter:sepia(1) contrast(1.15) brightness(.75)}to{filter:none}}@keyframes xdrift{to{transform:translateX(135vw)}}'
].join('');
document.head.appendChild(css);

/* ---------- أدوات عامة ---------- */
function full(build){
 var o=el('div','xfull'),b=el('button','xbtn xclose','✕'),body=el('div','xb');
 b.setAttribute('aria-label','close');o.append(b,body);document.body.appendChild(o);
 var cl=[],api={body:body,el:o,onClose:function(f){cl.push(f)},close:function(){var a=cl;cl=[];a.forEach(function(f){try{f()}catch(e){}});o.remove()}};
 b.onclick=api.close;build(api);return api;
}
function urls(api){
 var l=[],r={mk:function(b){var u=URL.createObjectURL(b);l.push(u);return u},free:function(){l.forEach(function(u){URL.revokeObjectURL(u)});l.length=0}};
 if(api)api.onClose(r.free);return r;
}
function rain(n){var s='';for(var i=0;i<n;i++)s+='<i class="xrd" style="left:'+Math.round(Math.random()*100)+'%;animation-delay:'+(Math.random()*1.4).toFixed(2)+'s;animation-duration:'+(.8+Math.random()*.9).toFixed(2)+'s"></i>';return s}
function dayMoods(list){
 var o={};
 list.forEach(function(m){var k=dayOf(m),r=o[k]||(o[k]={n:0,s:0,m:0,c:{}});r.n++;if(m.mood&&SC[m.mood]){r.s+=SC[m.mood];r.m++;r.c[m.mood]=(r.c[m.mood]||0)+1}});
 Object.keys(o).forEach(function(k){var r=o[k],best=null,bn=0;r.avg=r.m?r.s/r.m:null;for(var e in r.c)if(r.c[e]>bn){bn=r.c[e];best=e}r.dom=best});
 return o;
}
var STOP={};
('في من على الى إلى عن مع هذا هذه ذلك تلك التي الذي كان كانت كنت قد لقد ما لا لم لن هو هي انا أنا ان أن إن كل بعد قبل عند ثم او أو لكن لكني حتى اليوم يكون اللي هاد هاي شو يوم مثل جدا جداً لأن لأنه كانوا the and was for that with this have had but not you are from they his her she him our out about just very been what when who how all can will would there their them then than too some into over such only also its did does one att och det som en ett är jag på för med har inte den till av var men så om vi de du han hon').split(/\s+/).forEach(function(w){STOP[norm(w)]=1});
function words(txt){return norm(txt).replace(/[\u064B-\u0652\u0640]/g,'').split(/[^\p{L}\p{N}#]+/u).filter(function(w){return w.length>=3&&!STOP[w]&&!/^\d+$/.test(w)})}
function topWords(texts,n){
 var c={};texts.forEach(function(t){words(t).forEach(function(w){c[w]=(c[w]||0)+1})});
 var arr=Object.keys(c).map(function(w){return [w,c[w]]}).sort(function(a,b){return b[1]-a[1]});
 var strong=arr.filter(function(e){return e[1]>=2});return (strong.length>=5?strong:arr).slice(0,n);
}
function cloud(list,color){
 var w=el('div','xcloudw');
 if(!list.length){w.innerHTML='<span style="color:var(--text-3)">'+esc(X('nodata'))+'</span>';return w}
 var mx=list[0][1];
 list.forEach(function(e,i){var s=document.createElement('span'),r=mx>1?e[1]/mx:.5;s.textContent=e[0];
  s.style.cssText='font-size:'+(15+Math.round(r*20))+'px;color:'+(i%3===0?color:'var(--text-2)')+';opacity:'+(.6+.4*r).toFixed(2);w.appendChild(s)});
 return w;
}
function toBlob(cv,type,q){return new Promise(function(r){cv.toBlob(r,type,q)})}
async function loadFonts(){try{await Promise.all([document.fonts.load('60px Amiri'),document.fonts.load('40px "Reem Kufi"'),document.fonts.load('60px "Great Vibes"')])}catch(e){}}
async function quoteCard(headTxt,txt,foot){
 await loadFonts();
 var W=1080,H=1350,cv=document.createElement('canvas');cv.width=W;cv.height=H;var c=cv.getContext('2d');
 var g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,'#2a1c0a');g.addColorStop(1,'#0F0A08');c.fillStyle=g;c.fillRect(0,0,W,H);
 c.textBaseline='top';c.textAlign='center';c.fillStyle='#D4AF37';
 c.direction=isAr(headTxt)?'rtl':'ltr';c.font='48px "Reem Kufi"';c.fillText(headTxt,W/2,130);
 c.fillRect(W/2-40,215,80,3);
 c.direction=isAr(txt)?'rtl':'ltr';
 var bf=function(s){return s+'px Amiri'},areaH=H-640,o=fitText(c,'«'+txt+'»',bf,W-220,areaH,76,34);
 drawLines(c,o,bf,'#FFFFFF',W/2,300+Math.max(0,(areaH-o.lines.length*o.sz*1.55)/2));
 c.direction='ltr';c.fillStyle='#D4AF37';c.font='34px "Reem Kufi"';c.fillText(foot||'',W/2,H-200);
 c.font='72px "Great Vibes"';c.fillText('Lahza',W/2,H-150);
 return toBlob(cv,'image/png');
}
function shareBlob(b,name,type){shareFiles([new File([b],name,{type:type})])}
function goDay(a,ds,again){a.close();S.retD=again;openDay(ds,false)}

/* ---------- القائمة الرئيسية للمميزات ---------- */
function hub(){
 full(function(a){
  head(a,X('more'));
  var g=el('div','xtiles');
  [['🎬','t_story',function(){story()}],['🗓','t_mosaic',function(){mosaic()}],['🎨','t_mood',function(){moodCal()}],['☁️','t_words',wordCloud],
   ['📰','t_week',function(){weekly()}],['🌙','t_night',night],['📖','t_book',yearBook],['⏱','t_sec',oneSec],['📦','t_cap',capsule]
  ].forEach(function(t){var b=el('button','xtile','<b>'+t[0]+'</b><span>'+esc(X(t[1]))+'</span>');b.onclick=function(){a.close();t[2]()};g.appendChild(b)});
  a.body.appendChild(g);
 });
}

/* ---------- تقويم الألوان النفسي ---------- */
async function moodCal(y0,m0){
 var ms=(await getAll()).filter(function(m){return !isCover(m)}),dm=dayMoods(ms),now=new Date(),y=y0==null?now.getFullYear():y0,mo=m0==null?now.getMonth():m0;
 full(function(a){
  function draw(){
   a.body.innerHTML='';head(a,X('t_mood'));
   var nav=el('div','xnav'),pv=el('button','filter-chip','‹'),nx=el('button','filter-chip','›');
   nav.append(pv,el('div','xmt',esc(MON[S.lang][mo]+' '+y)),nx);a.body.appendChild(nav);
   pv.onclick=function(){mo--;if(mo<0){mo=11;y--}draw()};nx.onclick=function(){mo++;if(mo>11){mo=0;y++}draw()};
   var g=el('div','xgrid');WD[S.lang].forEach(function(d){g.appendChild(el('div','xwd',esc(d)))});
   var first=new Date(y,mo,1).getDay(),dim=new Date(y,mo+1,0).getDate(),cnt={},i;
   for(i=0;i<first;i++)g.appendChild(el('i'));
   for(var d=1;d<=dim;d++)(function(d){
    var ds=y+'-'+p2(mo+1)+'-'+p2(d),r=dm[ds],c=el('button','xcell','<span style="font-size:.85rem">'+d+'</span>');
    if(r){c.style.background=r.dom?MC[r.dom]:'var(--gold-soft)';c.style.color=r.dom?'#1a1410':'var(--text)';c.style.fontWeight='600';
     if(r.dom)cnt[r.dom]=(cnt[r.dom]||0)+1;
     c.onclick=function(){goDay(a,ds,function(){moodCal(y,mo)})}}
    g.appendChild(c);
   })(d);
   a.body.appendChild(g);
   var leg=el('div','xleg');MOODS.forEach(function(e){leg.innerHTML+='<span><i style="background:'+MC[e]+'"></i>'+e+'</span>'});a.body.appendChild(leg);
   var tot=0;MOODS.forEach(function(e){tot+=cnt[e]||0});
   if(tot)MOODS.forEach(function(e){if(!cnt[e])return;var p=Math.round(cnt[e]/tot*100);
    a.body.appendChild(el('div','xbar','<span style="font-size:1.4rem;width:2rem;text-align:center">'+e+'</span><div class="tr"><div class="fl" style="width:'+p+'%;background:'+MC[e]+'"></div></div><span style="min-width:3.4ch;direction:ltr;color:var(--text-3)">'+p+'%</span>'))});
   else note(a,t('st_need'));
  }
  draw();
 });
}

/* ---------- سحابة الكلمات ---------- */
async function wordCloud(){
 var ms=(await getAll()).filter(function(m){return !isCover(m)}),dm=dayMoods(ms),hap=[],hard=[];
 ms.forEach(function(m){var r=dm[dayOf(m)],tx=mtext(m);if(!r||r.avg==null||!tx.trim())return;if(r.avg>=4)hap.push(tx);else if(r.avg<=2.5)hard.push(tx)});
 full(function(a){
  head(a,X('t_words'));note(a,X('w_note'));
  a.body.appendChild(el('div','xsec','😄 '+esc(X('w_happy'))));a.body.appendChild(cloud(topWords(hap,22),'#F2C94C'));
  a.body.appendChild(el('div','xsec','😔 '+esc(X('w_hard'))));a.body.appendChild(cloud(topWords(hard,22),'#9AA0A6'));
 });
}

/* ---------- جريدة الأسبوع ---------- */
var LEARN=['تعلمت','تعلّمت','أدركت','ادركت','اكتشفت','فهمت','درس','learned','realized','realised','lesson','understood','discovered','lärde','insåg','lärdom','förstod','upptäckte'].map(norm);
function takeaway(f){
 var best=null;
 f.forEach(function(m){
  var tx=(m.txt||'')+'\n'+(m.type==='answer'?'':(m.caption||''));
  tx.split(/[.!؟?\n]+/).forEach(function(s){
   s=s.trim();if(s.length<12)return;var n=norm(s);
   if(LEARN.some(function(w){return n.indexOf(w)>=0})&&(!best||s.length>best.text.length))best={text:s,date:m.date};
  });
 });
 return best;
}
function headlineKey(f){
 var sc=f.filter(function(m){return SC[m.mood]}).map(function(m){return SC[m.mood]}),avg=sc.length?sc.reduce(function(a,b){return a+b},0)/sc.length:null;
 var hi=sc.some(function(v){return v>=4}),lo=sc.some(function(v){return v<=2}),goals=f.filter(function(m){return isGoal(m)&&m.done}).length;
 if(hi&&lo)return 'h_both';if(goals>0)return 'h_goals';if(avg!=null&&avg>=4)return 'h_bright';if(avg!=null&&avg<=2.5)return 'h_low';if(f.length<3)return 'h_quiet';return 'h_steady';
}
async function newsWeekly(){
 var all=await getAll(),from=Date.now()-7*864e5,f=all.filter(function(m){return new Date(m.date)>=from&&!isCover(m)}).sort(asc);
 full(function(a){
  if(!f.length){head(a,X('t_week'));note(a,t('no_moments'));return}
  var u=urls(a),days=new Set(f.map(dayOf)).size,mc={},tg={};
  f.forEach(function(m){if(m.mood)mc[m.mood]=(mc[m.mood]||0)+1;(mtext(m).match(/#[\p{L}\p{N}_]+/gu)||[]).forEach(function(x){tg[x]=(tg[x]||0)+1})});
  var top=function(o){return (Object.keys(o).sort(function(p,q){return o[q]-o[p]})[0])||'–'};
  var p=el('div','xpaper');
  p.innerHTML='<div class="xmast">'+esc(X('paper'))+'</div><div class="xdt">'+esc(fdate(from)+'  →  '+fdate(Date.now()))+'</div>'+
   '<h2 class="xhead">'+esc(X(headlineKey(f)))+'</h2><div class="xrule thin"></div>'+
   '<div class="xstats"><div><b>'+f.length+'</b><span>'+esc(t('moments'))+'</span></div><div><b>'+days+'/7</b><span>'+esc(t('days_rec'))+'</span></div><div><b>'+top(mc)+'</b><span>'+esc(t('wk_mood'))+'</span></div><div><b>'+esc(top(tg))+'</b><span>'+esc(t('wk_tag'))+'</span></div></div><div class="xrule"></div>';
  var tk=takeaway(f),box=el('div','xtake');
  box.innerHTML='<small>'+esc(X('take'))+'</small>'+(tk?'«'+esc(tk.text)+'»':'<span style="font-size:.95rem;color:#666">'+esc(X('take_none'))+'</span>');
  p.appendChild(box);
  if(tk){var sb=el('button','btn primary',esc(X('share')));sb.onclick=async function(){try{shareBlob(await quoteCard(X('take'),tk.text,fdate(tk.date)),'lahza-lesson.png','image/png')}catch(e){toast(t('err'),1)}};p.appendChild(sb)}
  var qs=f.filter(function(m){return m.txt&&m.txt.length>8}).slice(-3).reverse();
  if(qs.length){p.appendChild(el('div','xmast','<span style="font-size:1.1rem">'+esc(X('quotes'))+'</span>'));
   qs.forEach(function(m){p.appendChild(el('div','xq','<small>'+esc(fdate(m.date))+'</small>'+esc(m.txt.slice(0,160))+(m.txt.length>160?'…':'')))})}
  var ph=f.filter(function(m){return m.type==='photo'}).slice(-3);
  if(ph.length){var g=el('div','xph');p.appendChild(g);ph.forEach(async function(m){var b=await getBlob(m.id);if(b){var im=new Image();im.src=u.mk(b);g.appendChild(im)}})}
  a.body.appendChild(p);
 });
}

/* ---------- السهر ---------- */
var nightOn=function(){return LS('lahza-night')!=='off'};
function nightCheck(){
 var on=nightOn()&&new Date().getHours()<5,r=document.documentElement,st=$('xstars');
 r.classList.toggle('xnight',on);
 if(on&&!st){st=el('div');st.id='xstars';for(var i=0;i<45;i++){var s=el('i');s.style.cssText='left:'+Math.round(Math.random()*100)+'%;top:'+Math.round(Math.random()*100)+'%;animation-delay:'+(Math.random()*3.4).toFixed(2)+'s';st.appendChild(s)}document.body.appendChild(st)}
 else if(!on&&st)st.remove();
 var tc=document.querySelector('meta[name=theme-color]');if(tc&&on)tc.content='#000000';
}
async function night(){
 var all=(await getAll()).filter(function(m){return !isCover(m)&&!m.noTime}),hr=function(m){return new Date(m.date).getHours()};
 var nm=all.filter(function(m){return hr(m)<5}),pct=all.length?Math.round(nm.length/all.length*100):0;
 var dm=dayMoods(all.filter(function(m){return hr(m)>=5})),sc=[],ov=[];
 Object.keys(dm).forEach(function(k){if(dm[k].avg!=null)ov.push(dm[k].avg)});
 var avg=ov.length?ov.reduce(function(a,b){return a+b},0)/ov.length:null,nd=new Set(nm.map(dayOf)),low=0,n=0;
 nd.forEach(function(k){var r=dm[k];if(r&&r.avg!=null&&avg!=null){n++;if(r.avg<avg)low++}});
 full(function(a){
  head(a,'🌙 '+X('n_title'));
  if(!nm.length)note(a,X('n_none'));
  else{
   note(a,F('n_count',{n:nm.length,p:pct}));
   var lp=n>=3?Math.round(low/n*100):0;
   var msg=el('div','xnote',esc(n>=3&&lp>=60?F('n_link',{p:lp}):X('n_nolink')));msg.style.color='var(--gold)';a.body.appendChild(msg);
   nm.sort(function(p,q){return asc(q,p)}).filter(function(m){return mtext(m).trim()}).slice(0,6).forEach(function(m){
    var b=el('button','crow','<span style="flex:1;text-align:start">'+esc((m.mood?m.mood+' ':'')+mtext(m).trim().slice(0,70))+'</span><b>'+esc(ftime(m.date))+'</b>');
    b.style.cssText='display:flex;width:100%;gap:8px;padding:12px 4px;border-bottom:1px solid var(--border);color:var(--text)';
    b.onclick=function(){a.close();openModalFrom(m.id,night)};a.body.appendChild(b)});
  }
  var row=el('div','xbar');row.style.cssText='justify-content:space-between;margin-top:24px';
  row.innerHTML='<span>'+esc(X('n_theme'))+'</span>';
  var tg=el('button','filter-chip'+(nightOn()?' active':''),esc(X(nightOn()?'n_on':'n_off')));
  tg.onclick=function(){LS('lahza-night',nightOn()?'off':'on');tg.classList.toggle('active',nightOn());tg.textContent=X(nightOn()?'n_on':'n_off');nightCheck()};
  row.appendChild(tg);a.body.appendChild(row);
 });
}

/* ---------- كتاب السنة بفصول ---------- */
var JOYW=['ضحك','ضحكت','مبسوط','سعيد','فرحان','هههه','laugh','haha','funny','happy','joy','skratt','kul','glad','rolig'].map(norm);
var PROW=['فخر','فخور','افتخر','أفتخر','أنجزت','انجزت','نجحت','أنهيت','انهيت','proud','achieved','finished','accomplished','succeeded','stolt','klarade','lyckades','avslutade'].map(norm);
function bestDay(ms,words,bonus){
 var by={};ms.forEach(function(m){(by[dayOf(m)]=by[dayOf(m)]||[]).push(m)});
 var best=null,bs=0;
 Object.keys(by).forEach(function(k){
  var s=0;by[k].forEach(function(m){var n=norm(mtext(m));words.forEach(function(w){if(n.indexOf(w)>=0)s++});s+=bonus(m)});
  if(s>bs){bs=s;best={day:k,list:by[k]}}
 });
 return best;
}
async function yearBook(){
 var y=new Date().getFullYear(),ms=(await getAll()).filter(function(m){return new Date(m.date).getFullYear()===y&&!isCover(m)}).sort(asc);
 if(!ms.length)return toast(t('no_moments'),1);
 var joy=bestDay(ms,JOYW,function(m){return m.mood==='😄'?2:0}),pro=bestDay(ms,PROW,function(m){return isGoal(m)&&m.done?2:0});
 var SE=[0,0,1,1,1,2,2,2,3,3,3,0],chs=[],last=null;
 ms.forEach(function(m){var s=SE[new Date(m.date).getMonth()];if(!last||last.s!==s){last={s:s,list:[]};chs.push(last)}last.list.push(m)});
 var avgAll=ms.length/Math.max(1,chs.length);
 chs.forEach(function(c){
  var sc=c.list.filter(function(m){return SC[m.mood]}).map(function(m){return SC[m.mood]}),av=sc.length?sc.reduce(function(p,q){return p+q},0)/sc.length:null;
  var d=av!=null&&av>=4?'c_happy':av!=null&&av<=2.5?'c_hard':c.list.length>avgAll*1.3?'c_busy':'c_calm';
  c.title=F('ch_t',{s:X('seasons')[c.s],d:X(d)});c.words=topWords(c.list.map(mtext),3).map(function(e){return e[0]}).join(' · ');
 });
 var pages=[{k:'cover'},{k:'hl'}];
 chs.forEach(function(c){pages.push({k:'chap',c:c});c.list.forEach(function(m){pages.push({k:'e',m:m})})});
 var v=el('div','xbook'),u=urls(null),cur=0,busy=false;
 var top=el('div');top.style.cssText='display:flex;align-items:center;justify-content:space-between;direction:ltr';
 var xb=el('button','xbtn','✕'),cn=el('div');cn.style.color='var(--text-3)';top.append(xb,cn,el('span'));
 var st=el('div','xbk-st'),pg=el('div','xpg');pg.dir=document.documentElement.dir;st.appendChild(pg);
 var bb=el('div');bb.style.cssText='display:flex;gap:10px;justify-content:center;direction:ltr';
 var pv=el('button','btn','‹'),nx=el('button','btn','›');pv.style.cssText=nx.style.cssText='margin:0;max-width:140px;padding:12px';bb.append(pv,nx);
 v.append(top,st,bb);document.body.appendChild(v);
 var dayLine=function(b){if(!b)return esc(X('b_none'));var m=b.list.slice().sort(function(p,q){return mtext(q).length-mtext(p).length})[0];
  return '<b style="color:var(--gold)">'+esc(fdate(b.day+'T12:00:00'))+'</b><br>'+esc(mtext(m).trim().slice(0,140))};
 async function render(){
  u.free();pg.innerHTML='';pg.scrollTop=0;var p=pages[cur];
  if(p.k==='cover'){pg.innerHTML='<div style="text-align:center;padding-top:12vh"><div style="font:2.4rem var(--fd);color:var(--gold)">'+esc(X('b_cover'))+'</div><div style="font:3.4rem var(--fd);margin:14px 0">'+y+'</div><div style="color:var(--text-3)">'+ms.length+' '+esc(t('moments'))+'</div><div style="font:3rem \'Great Vibes\',cursive;color:var(--gold);margin-top:40px">Lahza</div></div>'}
  else if(p.k==='hl'){pg.innerHTML='<div class="d">'+esc(X('b_hl'))+'</div><div class="xsec" style="text-align:start">😂 '+esc(X('b_laugh'))+'</div><div class="tx">'+dayLine(joy)+'</div><div class="xsec" style="text-align:start">💪 '+esc(X('b_proud'))+'</div><div class="tx">'+dayLine(pro)+'</div>'}
  else if(p.k==='chap'){pg.innerHTML='<div style="text-align:center;padding-top:14vh"><div style="font:1.8rem/1.6 var(--fd);color:var(--gold)">'+esc(p.c.title)+'</div><div style="margin-top:16px;color:var(--text-3)">'+p.c.list.length+' '+esc(t('moments'))+'</div><div style="margin-top:10px;font:1.1rem var(--fq)">'+esc(p.c.words)+'</div></div>'}
  else{var m=p.m;pg.appendChild(el('div','d',esc((m.mood?m.mood+' ':'')+fdate(m.date)+(m.noTime?'':' · '+ftime(m.date)))));
   if(m.type==='answer'&&m.caption){var q=el('div','tx',esc(m.caption));q.style.cssText='color:var(--gold);margin-bottom:8px';pg.appendChild(q)}else if(m.caption)pg.appendChild(el('div','tx',esc(m.caption)));
   if(m.txt)pg.appendChild(el('div','tx',esc(m.txt)));
   if(m.type==='photo'){var bs=await photoBlobs(m);bs.slice(0,3).forEach(function(b){var im=new Image();im.src=u.mk(b);pg.appendChild(im)})}
   else if(m.type==='video'||m.type==='audio')pg.appendChild(el('div','tx',m.type==='video'?'🎥':'🎙'))}
  cn.textContent=(cur+1)+' / '+pages.length;
 }
 async function go(d){
  if(busy)return;var n=cur+d;if(n<0||n>=pages.length)return;busy=true;
  pg.style.transition='transform .26s ease-in';pg.style.transform='rotateY('+(d>0?-90:90)+'deg)';
  await new Promise(function(r){setTimeout(r,260)});cur=n;await render();
  pg.style.transition='none';pg.style.transform='rotateY('+(d>0?90:-90)+'deg)';void pg.offsetWidth;
  pg.style.transition='transform .26s ease-out';pg.style.transform='rotateY(0deg)';setTimeout(function(){busy=false},280);
 }
 pv.onclick=function(){go(-1)};nx.onclick=function(){go(1)};
 var sx=null;st.addEventListener('pointerdown',function(e){sx=e.clientX});
 st.addEventListener('pointerup',function(e){if(sx==null)return;var dx=e.clientX-sx;sx=null;if(dx<-60)go(1);else if(dx>60)go(-1)});
 xb.onclick=function(){u.free();v.remove()};
 render();
}

/* ---------- موزايك الشهر ---------- */
async function mosaic(y0,m0){
 var ms=(await getAll()).filter(function(m){return !isCover(m)}),dm=dayMoods(ms),now=new Date(),y=y0==null?now.getFullYear():y0,mo=m0==null?now.getMonth():m0;
 full(function(a){
  var u=urls(a),sx=null;
  async function draw(){
   u.free();a.body.innerHTML='';head(a,X('t_mosaic'));
   var nav=el('div','xnav'),pv=el('button','filter-chip','‹'),nx=el('button','filter-chip','›');
   nav.append(pv,el('div','xmt',esc(MON[S.lang][mo]+' '+y)),nx);a.body.appendChild(nav);
   pv.onclick=function(){mo--;if(mo<0){mo=11;y--}draw()};nx.onclick=function(){mo++;if(mo>11){mo=0;y++}draw()};
   var g=el('div','xgrid');WD[S.lang].forEach(function(d){g.appendChild(el('div','xwd',esc(d)))});a.body.appendChild(g);
   var first=new Date(y,mo,1).getDay(),dim=new Date(y,mo+1,0).getDate(),vids=0,jobs=[],i;
   for(i=0;i<first;i++)g.appendChild(el('i'));
   for(var d=1;d<=dim;d++)(function(d){
    var ds=y+'-'+p2(mo+1)+'-'+p2(d),list=ms.filter(function(m){return dayOf(m)===ds}),c=el('button','xcell');
    c.appendChild(el('span','xdn',String(d)));g.appendChild(c);
    if(!list.length)return;
    c.onclick=function(){goDay(a,ds,function(){mosaic(y,mo)})};
    var vm=list.filter(function(m){return m.type==='video'})[0],pm=list.filter(function(m){return m.type==='photo'})[0],r=dm[ds];
    if(vm&&vids<12){vids++;jobs.push(getBlob(vm.id).then(function(b){if(!b)return;var vd=document.createElement('video');vd.src=u.mk(b);vd.muted=true;vd.loop=true;vd.autoplay=true;vd.playsInline=true;vd.setAttribute('playsinline','');vd.className='xmedia';c.appendChild(vd);vd.play().catch(function(){})}))}
    else if(pm){jobs.push(getBlob(pm.id).then(function(b){if(!b)return;var im=new Image();im.src=u.mk(b);im.className='xmedia';c.appendChild(im)}))}
    else{c.style.background=r&&r.dom?MC[r.dom]+'AA':'var(--gold-soft)'}
   })(d);
   await Promise.all(jobs);
  }
  a.body.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  a.body.addEventListener('touchend',function(e){if(sx==null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(dx<-70){mo++;if(mo>11){mo=0;y++}draw()}else if(dx>70){mo--;if(mo<0){mo=11;y--}draw()}},{passive:true});
  draw();
 });
}

/* ---------- حصاد الشهر (ستوري) ---------- */
function ambient(){
 var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return {stop:function(){},mute:function(){}};
 var ac,master,lp,iv,idx=0;
 try{
  ac=new AC();master=ac.createGain();master.gain.value=0;master.connect(ac.destination);master.gain.linearRampToValueAtTime(.18,ac.currentTime+2);
  lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=900;lp.connect(master);
 }catch(e){return {stop:function(){},mute:function(){}}}
 var ch=[[220,261.6,329.6],[174.6,220,261.6],[261.6,329.6,392],[196,246.9,293.7]];
 function play(){var c=ch[idx++%4],t0=ac.currentTime;c.forEach(function(f){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=f;g.gain.value=0;g.gain.linearRampToValueAtTime(.5,t0+1.5);g.gain.linearRampToValueAtTime(0,t0+5.5);o.connect(g);g.connect(lp);o.start(t0);o.stop(t0+5.6)})}
 play();iv=setInterval(play,4000);
 return {stop:function(){clearInterval(iv);try{master.gain.setTargetAtTime(0,ac.currentTime,.2)}catch(e){}setTimeout(function(){try{ac.close()}catch(e){}},700)},
  mute:function(m){try{master.gain.setTargetAtTime(m?0:.18,ac.currentTime,.1)}catch(e){}}};
}
async function story(y0,m0){
 var now=new Date(),y=y0==null?now.getFullYear():y0,mo=m0==null?now.getMonth():m0;
 var items=(await getAll()).filter(function(m){var d=new Date(m.date);return d.getFullYear()===y&&d.getMonth()===mo&&!isCover(m)&&(m.type==='photo'||m.type==='video'||((m.type==='text'||m.type==='answer')&&m.txt))}).sort(asc);
 if(items.length<2)return toast(X('nostory'),1);
 if(items.length>30){var s=[];for(var i=0;i<30;i++)s.push(items[Math.floor(i*items.length/30)]);items=s}
 var slides=[{k:'intro'}].concat(items.map(function(m){return {k:'m',m:m}})).concat([{k:'outro'}]);
 var o=el('div','xstory'),bars=el('div','xbars'),stage=el('div','xstage'),segs=[];
 slides.forEach(function(){var i=el('i'),b=el('b');i.appendChild(b);bars.appendChild(i);segs.push(b)});
 var cx=el('button','xbtn xsb c','✕'),mb=el('button','xbtn xsb m','🔊'),tl=el('div','xtap l'),tr=el('div','xtap r');
 o.append(stage,bars,tl,tr,mb,cx);document.body.appendChild(o);
 var mu=ambient(),muted=false,u=urls(null),tm=0,ti=0,cur=0;
 function typeInto(e,txt){clearInterval(ti);var n=0;e.textContent='';ti=setInterval(function(){n+=2;e.textContent=txt.slice(0,n);if(n>=txt.length)clearInterval(ti)},45)}
 function close(){clearTimeout(tm);clearInterval(ti);mu.stop();u.free();o.remove()}
 async function fill(box,m){
  var cap=mtext(m).trim().slice(0,140),line=el('div','xcap2','<small>'+esc(fdate(m.date))+'</small><span></span>');
  if(m.type==='photo'||m.type==='video'){
   var b=await getBlob(m.id);if(!b||cur!==slides.findIndex(function(z){return z.m===m}))return;
   var md;if(m.type==='photo'){md=new Image()}else{md=document.createElement('video');md.muted=true;md.autoplay=true;md.playsInline=true;md.setAttribute('playsinline','')}
   md.src=u.mk(b);box.appendChild(md);if(m.type==='video')md.play().catch(function(){});
   if(cap){box.appendChild(line);typeInto(line.querySelector('span'),cap)}
  }else{box.classList.add('xtx');var tx=el('div','xtyped');box.appendChild(tx);typeInto(tx,cap);box.appendChild(el('div','xcap2','<small>'+esc(fdate(m.date))+'</small>'))}
 }
 function show(i){
  clearTimeout(tm);clearInterval(ti);u.free();stage.innerHTML='';cur=i;
  segs.forEach(function(b,k){b.style.transition='none';b.style.width=k<i?'100%':'0'});
  var s=slides[i],dur=4500,box=el('div','xslide');
  if(s.k==='intro'){box.classList.add('xtx');box.innerHTML='<div class="xbig">'+esc(MON[S.lang][mo])+'</div><div class="xyr">'+y+'</div><div class="xlogo">Lahza</div>';dur=2800}
  else if(s.k==='outro'){box.classList.add('xtx');box.innerHTML='<div class="xyr">'+esc(X('st_end'))+'</div><div class="xlogo">Lahza</div>';dur=3000}
  else{fill(box,s.m);if(s.m.type==='video')dur=5500}
  stage.appendChild(box);void box.offsetWidth;
  var bar=segs[i];bar.style.transition='width '+dur+'ms linear';bar.style.width='100%';
  tm=setTimeout(next,dur);
 }
 function next(){if(cur<slides.length-1)show(cur+1);else close()}
 function prev(){show(Math.max(0,cur-1))}
 tr.onclick=next;tl.onclick=prev;cx.onclick=close;
 mb.onclick=function(){muted=!muted;mu.mute(muted);mb.textContent=muted?'🔇':'🔊'};
 show(0);
}

/* ---------- ثانية كل يوم ---------- */
var MIMES=['video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4','video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm'];
function recMime(){return window.MediaRecorder?(MIMES.filter(function(m){return MediaRecorder.isTypeSupported(m)})[0]||''):''}
async function recordCanvas(W,H,job){
 var cv=document.createElement('canvas');cv.width=W;cv.height=H;var c=cv.getContext('2d',{alpha:false});
 if(!cv.captureStream||!window.MediaRecorder)throw new Error('unsupported');
 c.fillStyle='#000';c.fillRect(0,0,W,H);
 var st=cv.captureStream(24),mt=recMime(),mr=new MediaRecorder(st,mt?{mimeType:mt,videoBitsPerSecond:1800000}:{videoBitsPerSecond:1800000}),ch=[];
 mr.ondataavailable=function(e){if(e.data&&e.data.size)ch.push(e.data)};
 var done=new Promise(function(r){mr.onstop=r});mr.start(300);
 try{await job(c,W,H)}finally{try{if(mr.state!=='inactive')mr.stop()}catch(e){}}
 await done;st.getTracks().forEach(function(k){k.stop()});
 return new Blob(ch,{type:mr.mimeType||mt||'video/webm'});
}
async function playOnto(blob,c,W,H,maxMs,start,label,stop){
 var u=URL.createObjectURL(blob),v=document.createElement('video');
 v.muted=true;v.playsInline=true;v.setAttribute('playsinline','');v.src=u;
 await new Promise(function(r){v.onloadeddata=r;v.onerror=r;setTimeout(r,5000)});
 if(!v.videoWidth){URL.revokeObjectURL(u);return}
 if(start){v.currentTime=start;await new Promise(function(r){v.onseeked=r;setTimeout(r,1500)})}
 try{await v.play()}catch(e){}
 var t0=performance.now();
 await new Promise(function(res){
  (function tick(){
   if(stop()||v.ended||performance.now()-t0>maxMs){res();return}
   var k=Math.max(W/v.videoWidth,H/v.videoHeight),w=v.videoWidth*k,h=v.videoHeight*k;
   c.fillStyle='#000';c.fillRect(0,0,W,H);c.drawImage(v,(W-w)/2,(H-h)/2,w,h);
   if(label){c.fillStyle='rgba(0,0,0,.45)';c.fillRect(0,H-70,W,70);c.fillStyle='#fff';c.font='24px sans-serif';c.textAlign='center';c.fillText(label,W/2,H-28)}
   requestAnimationFrame(tick);
  })();
 });
 v.pause();URL.revokeObjectURL(u);
}
var isSec=function(m){return m.type==='video'&&String(m.caption||'').indexOf('⏱')===0};
function oneSec(){
 full(function(a){
  var u=urls(a);
  async function main(){
   u.free();a.body.innerHTML='';head(a,'⏱ '+X('t_sec'));
   var now=new Date(),mine=(await getAll()).filter(function(m){var d=new Date(m.date);return isSec(m)&&d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth()}).sort(asc);
   note(a,F('s_count',{n:mine.length}));
   var inp=function(cap){var i=document.createElement('input');i.type='file';i.accept='video/*';if(cap)i.setAttribute('capture','environment');i.hidden=true;i.onchange=function(){if(i.files[0])trim(i.files[0])};a.body.appendChild(i);return i};
   var i1=inp(true),i2=inp(false),b1=el('button','btn primary','🎥 '+esc(X('s_rec'))),b2=el('button','btn','📁 '+esc(X('s_file'))),b3=el('button','btn',esc(X('s_merge')));
   b1.onclick=function(){i1.click()};b2.onclick=function(){i2.click()};b3.onclick=function(){merge(mine)};
   a.body.append(b1,b2,b3);
  }
  function trim(f){
   a.body.innerHTML='';head(a,'⏱ '+X('t_sec'));
   var vv=document.createElement('video');vv.src=u.mk(f);vv.muted=true;vv.playsInline=true;vv.setAttribute('playsinline','');vv.style.cssText='width:100%;border-radius:14px;background:#000;max-height:50vh';a.body.appendChild(vv);
   var len=1,st=0;
   var lb=el('div','xnote',esc(X('s_start')));var rg=document.createElement('input');rg.type='range';rg.min=0;rg.max=0;rg.step=.1;rg.value=0;rg.style.cssText='width:100%';
   vv.onloadedmetadata=function(){rg.max=Math.max(0,(vv.duration||1)-len)};
   var prev=function(){vv.currentTime=st;vv.play().catch(function(){});setTimeout(function(){vv.pause()},len*1000)};
   rg.oninput=function(){st=+rg.value;vv.currentTime=st};rg.onchange=prev;
   var lr=el('div','xhr'),c1=el('button','filter-chip active','1'),c2=el('button','filter-chip','2');
   var sl=function(n){len=n;c1.classList.toggle('active',n===1);c2.classList.toggle('active',n===2);rg.max=Math.max(0,(vv.duration||1)-len);if(st>+rg.max){st=+rg.max;rg.value=st}};
   c1.onclick=function(){sl(1)};c2.onclick=function(){sl(2)};lr.append(el('span','',esc(X('s_len'))),c1,c2);
   var sv=el('button','btn primary',esc(X('s_save')));
   sv.onclick=async function(){
    sv.disabled=true;toast(X('s_busy'));
    try{
     var blob=await recordCanvas(540,720,function(c,W,H){return playOnto(f,c,W,H,len*1000,st,'',function(){return document.hidden})});
     await addMoment({date:new Date().toISOString(),type:'video',caption:'⏱ '+len+'s',favorite:false,mime:blob.type},blob,null,[]);
     toast(X('s_saved'));refreshAll();main();
    }catch(e){sv.disabled=false;toast(X('s_fail'),1)}
   };
   a.body.append(lb,rg,lr,sv);
  }
  async function merge(list){
   if(list.length<2)return toast(X('s_need'),1);
   a.body.innerHTML='';head(a,'⏱ '+X('t_sec'));note(a,X('s_busy'));
   var bw=el('div');bw.style.cssText='height:8px;border-radius:4px;background:var(--border);overflow:hidden;margin:14px 0';var bar=el('div');bar.style.cssText='height:8px;background:var(--gold);width:0;transition:width .3s';bw.appendChild(bar);a.body.appendChild(bw);
   var wl=null;try{if(navigator.wakeLock)wl=await navigator.wakeLock.request('screen')}catch(e){}
   try{
    var blob=await recordCanvas(540,720,async function(c,W,H){
     for(var i=0;i<list.length;i++){
      bar.style.width=Math.round(i/list.length*100)+'%';
      var b=await getBlob(list[i].id);if(!b)continue;
      await playOnto(b,c,W,H,2600,0,fdate(list[i].date),function(){return document.hidden});
      if(document.hidden)throw new Error('hidden');
     }
    });
    a.body.innerHTML='';head(a,'⏱ '+X('t_sec'));note(a,X('s_done'));
    var vd=document.createElement('video');vd.src=u.mk(blob);vd.controls=true;vd.playsInline=true;vd.setAttribute('playsinline','');vd.style.cssText='width:100%;border-radius:14px;background:#000;max-height:60vh';a.body.appendChild(vd);
    var sv=el('button','btn primary',esc(X('s_vsave'))),sh=el('button','btn',esc(t('share_t'))),bk=el('button','btn',esc(t('close')));
    sv.onclick=async function(){try{await addMoment({date:new Date().toISOString(),type:'video',caption:'🎞 '+MON[S.lang][new Date().getMonth()],favorite:false,mime:blob.type},blob,null,[]);toast(X('s_saved'));refreshAll()}catch(e){toast(t('err'),1)}};
    sh.onclick=function(){shareBlob(blob,'lahza-month.'+((blob.type||'').indexOf('mp4')>=0?'mp4':'webm'),blob.type||'video/webm')};bk.onclick=main;
    a.body.append(sv,sh,bk);
   }catch(e){toast(X('s_fail'),1);main()}
   finally{try{if(wl)wl.release()}catch(e){}}
  }
  main();
 });
}

/* ---------- كبسولة الزمن ---------- */
function ago(ms){
 var n=new Date(),d=new Date(ms),days=Math.round((n-d)/864e5);
 if(d.getFullYear()===n.getFullYear()-1&&d.getMonth()===n.getMonth()&&Math.abs(d.getDate()-n.getDate())<=3)return X('cp_ly');
 var mo=Math.floor(days/30);if(mo>=12)return F('cp_y',{n:Math.floor(mo/12)});if(mo>=1)return F('cp_m',{n:mo});return F('cp_d',{n:days});
}
async function capsule(){
 var now=Date.now(),pool=(await getAll()).filter(function(m){return now-new Date(m.date)>30*864e5&&!isCover(m)&&(m.type==='photo'||m.type==='video'||mtext(m).trim())});
 full(function(a){
  var u=urls(a),lastId=null;
  head(a,'📦 '+X('t_cap'));
  if(!pool.length){note(a,X('cp_none'));return}
  var box=el('div');a.body.appendChild(box);
  function closed(){
   u.free();box.innerHTML='';
   var b=el('button');b.style.cssText='display:block;margin:30px auto;color:var(--gold);text-align:center';
   b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" style="width:120px;height:120px"><path d="M3 10h18v10H3z"/><path d="M2 6h20v4H2z"/><path d="M12 6v14"/><path d="M12 6c-3-4-6-1-4 0M12 6c3-4 6-1 4 0"/></svg><div style="margin-top:12px;font:1.1rem var(--fd)">'+esc(X('cp_closed'))+'</div>';
   b.onclick=open;box.appendChild(b);
  }
  async function open(){
   u.free();var m,tries=0;do{m=pool[Math.floor(Math.random()*pool.length)];tries++}while(pool.length>1&&m.id===lastId&&tries<8);lastId=m.id;
   box.innerHTML='';
   var lb=el('div','xsec',esc(ago(new Date(m.date).getTime())));lb.style.cssText+=';font-size:1.3rem';box.appendChild(lb);
   box.appendChild(el('div','xnote',esc(fdate(m.date))));
   var w=el('div','xcapw');
   if(m.type==='photo'||m.type==='video'){
    var b=await getBlob(m.id);
    if(b){var md;if(m.type==='photo')md=new Image();else{md=document.createElement('video');md.muted=true;md.autoplay=true;md.loop=true;md.playsInline=true;md.setAttribute('playsinline','')}
     md.src=u.mk(b);w.appendChild(md);if(m.type==='video')md.play().catch(function(){})}
   }else{w.appendChild(el('div','xcaptx',esc(mtext(m).trim().slice(0,300))))}
   box.appendChild(w);
   var cap=mtext(m).trim();if(cap&&(m.type==='photo'||m.type==='video')){var ct=el('div','xcaptx',esc(cap.slice(0,200)));ct.style.cssText='background:none;color:var(--text);animation-delay:1s';box.appendChild(ct)}
   var again=el('button','btn',esc(X('cp_again'))),op=el('button','btn primary',esc(X('cp_open')));
   again.onclick=open;op.onclick=function(){a.close();openModalFrom(m.id,capsule)};box.append(op,again);
  }
  closed();
 });
}

/* ---------- Polaroid ---------- */
async function polaroid(m){
 try{
  var b=await getBlob(m.id);if(!b)return;var u=URL.createObjectURL(b),im=await loadImg(u);URL.revokeObjectURL(u);if(!im)return toast(t('err'),1);
  await loadFonts();
  var W=1080,H=1350,cv=document.createElement('canvas');cv.width=W;cv.height=H;var c=cv.getContext('2d');
  var g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,'#E9DFCF');g.addColorStop(1,'#D3C5AB');c.fillStyle=g;c.fillRect(0,0,W,H);
  c.save();c.translate(W/2,H/2);c.rotate(-0.035);
  c.shadowColor='rgba(0,0,0,.35)';c.shadowBlur=40;c.shadowOffsetY=18;c.fillStyle='#FBFAF6';c.fillRect(-450,-560,900,1120);c.shadowColor='transparent';
  c.save();c.beginPath();c.rect(-410,-520,820,820);c.clip();
  var k=Math.max(820/im.width,820/im.height),w=im.width*k,h=im.height*k;c.drawImage(im,-w/2,-520+410-h/2,w,h);c.restore();
  var date=fdate(m.date),line=(m.caption||m.txt||'').split('\n')[0].slice(0,80);
  c.textAlign='center';c.textBaseline='top';c.fillStyle='#3a3226';
  c.direction=isAr(date)?'rtl':'ltr';c.font=isAr(date)?'bold 46px Amiri':'60px "Great Vibes"';c.fillText(date,0,335);
  if(line){c.direction=isAr(line)?'rtl':'ltr';c.font='italic 40px Amiri';wrapLines(c,line,780).slice(0,2).forEach(function(l,i){c.fillText(l,0,415+i*58)})}
  c.restore();
  c.direction='ltr';c.fillStyle='#8B7524';c.textAlign='center';c.font='54px "Great Vibes"';c.fillText('Lahza',W/2,H-90);
  var png=await toBlob(cv,'image/png');shareBlob(png,'lahza-polaroid-'+dstr(m.date)+'.png','image/png');
 }catch(e){toast(t('err'),1)}
}

/* ---------- الشخصية المتحركة ---------- */
function mascotSVG(st){
 var body={joy:'#F2C94C',ok:'#E8C17A',sad:'#9FB4C9',none:'#E8C17A'}[st],i,rays='',face;
 if(st==='joy'){for(i=0;i<8;i++)rays+='<line x1="55" y1="14" x2="55" y2="24" stroke="#F2C94C" stroke-width="3" stroke-linecap="round" transform="rotate('+(i*45)+' 55 66)"/>'}
 if(st==='joy')face='<path d="M40 62 Q45 55 50 62M60 62 Q65 55 70 62" stroke="#3a2a12" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M42 74 Q55 90 68 74" stroke="#3a2a12" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="38" cy="74" r="4" fill="#F4A6A6" opacity=".7"/><circle cx="72" cy="74" r="4" fill="#F4A6A6" opacity=".7"/>';
 else if(st==='sad')face='<circle cx="45" cy="66" r="3.2" fill="#2a3340"/><circle cx="65" cy="66" r="3.2" fill="#2a3340"/><path d="M39 57 L50 61M71 57 L60 61" stroke="#2a3340" stroke-width="2.5" stroke-linecap="round"/><path d="M44 82 Q55 73 66 82" stroke="#2a3340" stroke-width="3" fill="none" stroke-linecap="round"/>';
 else face='<circle cx="45" cy="66" r="3.2" fill="#3a2a12"/><circle cx="65" cy="66" r="3.2" fill="#3a2a12"/><path d="M46 78 Q55 83 64 78" stroke="#3a2a12" stroke-width="3" fill="none" stroke-linecap="round"/>';
 var umb=st==='sad'?'<path d="M14 36 Q55 -8 96 36 Z" fill="#5B7FA6"/><line x1="55" y1="36" x2="55" y2="42" stroke="#444" stroke-width="2.5"/>':'';
 return '<svg viewBox="0 0 110 110">'+rays+'<circle cx="55" cy="72" r="32" fill="'+body+'"/>'+face+umb+'</svg>';
}
async function mascot(){
 var th=$('tabHome'),hj=$('hijriDate');if(!th||!hj||typeof db==='undefined'||!db)return;
 var ms=await getAll(),cut=Date.now()-3*864e5,rec=ms.filter(function(m){return m.mood&&SC[m.mood]&&new Date(m.date)>=cut}),st='none';
 if(rec.length){var avg=rec.reduce(function(s,m){return s+SC[m.mood]},0)/rec.length,nd=new Set(rec.map(dayOf)).size;
  st=avg>=4?'joy':(avg<=2.5&&nd>=2)?'sad':'ok'}
 var box=$('xmas');if(!box){box=el('button','xmas');box.id='xmas';box.onclick=function(){moodCal()};hj.after(box)}
 var arr=X('ms_'+st);
 box.innerHTML=mascotSVG(st)+'<div class="bub">'+esc(arr[Math.floor(Date.now()/864e5)%arr.length])+'<small>'+esc(X('t_mood'))+' ›</small></div>'+(st==='sad'?'<div class="xmrain">'+rain(14)+'</div>':'');
}
function homeRow(){
 var th=$('tabHome'),ot=$('onThisDay');if(!th||!ot)return;
 var r=$('xhr');if(!r){r=el('div','xhr');r.id='xhr';th.insertBefore(r,ot);
  var a=el('button','filter-chip'),b=el('button','filter-chip');a.id='xhs';b.id='xhm';a.onclick=function(){story()};b.onclick=hub;r.append(a,b)}
 $('xhs').textContent='🎬 '+X('t_story');$('xhm').textContent='✨ '+X('more');
}

/* ---------- خلفيات متحركة + بطاقة Polaroid داخل نافذة اللقطة ---------- */
function weather(d,mood){
 var f=el('div','xfxl');
 if(mood==='😄'||mood==='🙂')f.innerHTML='<div class="xsun"></div>';
 else if(mood==='😔'||mood==='😢')f.innerHTML=rain(26);
 else if(mood==='😐')f.innerHTML='<i class="xcl" style="top:12%"></i><i class="xcl" style="top:58%;animation-delay:-11s"></i>';
 else return;
 var w=el('div');w.style.cssText='position:relative;z-index:1;width:100%';while(d.firstChild)w.appendChild(d.firstChild);
 d.style.position='relative';d.style.overflow='hidden';d.append(f,w);
}
var _om=window.openModal;
window.openModal=async function(id){
 await _om.apply(this,arguments);
 try{
  var m=await getMeta(id);if(!m||S.cur!==id)return;
  var c=$('modalContent'),d=c.querySelector('.modal-text');
  if(d&&(m.type==='text'||m.type==='answer')&&m.mood)weather(d,m.mood);
  if(m.type==='photo'){var b=el('button','btn','📸 '+esc(X('pol')));b.onclick=function(){polaroid(m)};c.appendChild(b)}
 }catch(e){}
};

/* ---------- ربط بقية التطبيق ---------- */
var _pt=window.paintTbar;
window.paintTbar=function(){_pt();var r=$('tbar');if(!r)return;var b=el('button','filter-chip','✨ '+X('more'));b.onclick=hub;r.appendChild(b)};
window.paintTbar();
weekly=newsWeekly;
if(typeof renderStats==='function'){
 var _rs=renderStats;
 renderStats=async function(){await _rs.apply(this,arguments);var sb=$('statsBody');if(sb){var bt=el('button','btn primary','✨ '+X('more'));bt.onclick=function(){hide('statsModal');hub()};sb.appendChild(bt)}};
}
var _ra=window.refreshAll;
window.refreshAll=async function(){var r=await _ra.apply(this,arguments);try{homeRow();await mascot()}catch(e){}return r};
nightCheck();setInterval(nightCheck,60000);
document.addEventListener('visibilitychange',function(){if(!document.hidden){nightCheck();mascot().catch(function(){})}});
homeRow();
setTimeout(function(){mascot().catch(function(){})},2200);
})();
