const CACHE='luakep-v52';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','apple-touch-icon.png','icon-512.png','icon-maskable-512.png','icon-monochrome-512.png','sc-expense.png','sc-income.png','sc-search.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!=='kp-state'&&k!=='kp-share').map(k=>caches.delete(k)))));self.clients.claim()});
// Network first for the app page so updates show up right away; cache as offline fallback.
self.addEventListener('fetch',e=>{
  // Slips shared from another app (Android share sheet) arrive as a POST
  if(e.request.method==='POST'&&new URL(e.request.url).pathname.endsWith('/share-target')){
    e.respondWith((async()=>{ try{ const fd=await e.request.formData(), files=fd.getAll('slips').filter(f=>f&&f.size), c=await caches.open('kp-share');
      for(let i=0;i<files.length;i++) await c.put('./__share/'+i,new Response(files[i],{headers:{'content-type':files[i].type||'image/png'}}));
      return Response.redirect('./?share='+files.length,303) }catch(err){ return Response.redirect('./',303) } })());
    return;
  }
  if(e.request.method!=='GET') return;
  if(new URL(e.request.url).origin!==self.location.origin&&/(open-meteo\.com|googleapis\.com|accounts\.google\.com|gstatic\.com)$/.test(new URL(e.request.url).hostname)) return; // live weather: never cache
  const isPage=e.request.mode==='navigate'||e.request.url.endsWith('/index.html');
  if(isPage){
    e.respondWith(fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>{
    const net=fetch(e.request).then(res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}return res}).catch(()=>hit);
    return hit||net;
  }));
});

// Reminders: the page keeps a small state file in the 'kp-state' cache; Chrome wakes us with periodic sync.
const ymd=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
async function remind(){
  const c=await caches.open('kp-state'), r=await c.match('./__kp-remind.json'); if(!r) return;
  const st=await r.json(), now=new Date(), today=ymd(now), sent=st.sent||{}; let changed=false;
  if(st.eve){ const [h,m]=(st.time||'20:00').split(':').map(Number);
    if((now.getHours()>h||(now.getHours()===h&&now.getMinutes()>=m))&&now.getHours()<23&&st.lastLog!==today&&!sent['eve'+today]){
      await self.registration.showNotification(st.t.eveTitle,{body:st.t.eveBody,icon:'icon-192.png',badge:'icon-monochrome-512.png',tag:'kp-eve',data:{url:'./?add=out'}}); sent['eve'+today]=1; changed=true } }
  if(st.rec){ for(const u of (st.up||[])){ const diff=Math.round((new Date(u.date+'T00:00')-new Date(today+'T00:00'))/864e5);
    if(diff===1&&!sent['r'+u.id+u.date]){ await self.registration.showNotification(u.title,{body:u.body,icon:'icon-192.png',badge:'icon-monochrome-512.png',tag:'kp-r'+u.id,data:{url:'./'}}); sent['r'+u.id+u.date]=1; changed=true } } }
  if(changed){ const keep={}; Object.keys(sent).filter(k=>k.slice(-10)>=ymd(new Date(Date.now()-14*864e5))).forEach(k=>keep[k]=1); st.sent=keep;
    await c.put('./__kp-remind.json',new Response(JSON.stringify(st),{headers:{'content-type':'application/json'}})) }
}
self.addEventListener('periodicsync',e=>{ if(e.tag==='kp-remind') e.waitUntil(remind()) });
self.addEventListener('notificationclick',e=>{ e.notification.close(); const url=(e.notification.data&&e.notification.data.url)||'./';
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{ for(const w of ws){ if('focus' in w){ if(url!=='./'&&w.navigate) w.navigate(url); return w.focus() } } return clients.openWindow(url) })) });
