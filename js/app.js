const grid=document.getElementById('grid');
const backupGrid=document.getElementById('backupGrid');
const day1Grid=document.getElementById('day1Grid');
function matchesFilter(c,f){
 const tags=[...(c.tags||[]), 'day'+c.day];
 return f==='all'||tags.includes(f);
}
function verifiedLine(c){return c.verified?`<div class="label" style="margin-top:8px">Research verified · ${c.verified}</div>`:'';}
function render(){
 const q=document.getElementById('search').value.toLowerCase().trim(); const f=document.querySelector('.filters-panel .filter.active').dataset.filter;
 grid.innerHTML='';
 companies.filter(c=> matchesFilter(c,f) && (!q || JSON.stringify(c).toLowerCase().includes(q))).forEach(c=>{
 const id='c'+c.rank; const visited=localStorage.getItem('visited-'+id)==='1';
 const el=document.createElement('article'); el.className='card'; el.dataset.tags=c.tags.join(' ');
 el.innerHTML=`<div class="card-head"><div class="rank">${c.rank}</div><div><div class="company">${c.name}</div><div class="meta"><span class="pill">Day ${c.day} · ${c.booth}</span><span class="pill">${c.geo}</span><span class="pill">${c.track}</span></div></div><div class="fit">${c.fit}<small>FIT SCORE</small></div></div>
 <div class="card-body"><div class="why">${c.why}</div><div class="quick"><div class="box"><div class="label">Best-fit roles</div><div>${c.roles.slice(0,3).join(' · ')}</div></div><div class="box"><div class="label">Current evidence</div><div>${c.evidence}</div>${verifiedLine(c)}</div></div>
 <div class="actions"><a class="linkbtn" href="${c.careers}" target="_blank" rel="noopener">Careers ↗</a><a class="linkbtn" href="${c.job}" target="_blank" rel="noopener">Evidence / Job ↗</a></div>
 <button class="expand research-only" onclick="toggleDetails('${id}',this)">Show preparation notes ▾</button>
 <div class="details" id="${id}"><div class="story"><div class="label">Lauren's story</div>${c.story}</div><div class="question"><div class="label">Recruiter question 1</div>${c.question}</div><div class="question" style="margin-top:8px"><div class="label">Recruiter question 2</div>${c.question2||""}</div><div class="evidence"><div class="label" style="margin-top:11px">Hiring evidence</div><p>${c.evidence}</p></div><div class="roles"><div class="label">Role families to ask about</div><ul>${c.roles.map(r=>`<li>${r}</li>`).join('')}</ul></div></div>
 <label class="visit"><input type="checkbox" ${visited?'checked':''} onchange="saveVisited('${id}',this.checked)"> Visited / conversation completed</label></div>`;
 grid.appendChild(el);
 });
 day1Grid.innerHTML='';
 day1Top6.forEach(c=>{const el=document.createElement('article');el.className='card';el.innerHTML=`<div class="card-head"><div class="rank">${c.rank}</div><div><div class="company">${c.name}</div><div class="meta"><span class="pill">Day 1 · ${c.booth}</span><span class="pill">${c.geo}</span><span class="pill">${c.track}</span></div></div></div><div class="card-body"><div class="why">${c.why}</div><div class="quick"><div class="box"><div class="label">Roles to investigate</div><div>${c.roles.join(' · ')}</div></div><div class="box"><div class="label">Why research it</div><div>${c.evidence}</div>${verifiedLine(c)}</div></div><div class="actions"><a class="linkbtn" href="${c.careers}" target="_blank" rel="noopener">Careers ↗</a><a class="linkbtn" href="${c.research}" target="_blank" rel="noopener">Research / Evidence ↗</a></div><div class="details open"><div class="question"><div class="label">Question option 1</div>${c.question}</div><div class="question" style="margin-top:8px"><div class="label">Question option 2</div>${c.question2}</div></div></div>`;day1Grid.appendChild(el);});
 backupGrid.innerHTML='';
 tier2Companies.filter(c=> matchesFilter(c,f) && (!q || JSON.stringify(c).toLowerCase().includes(q))).forEach(c=>{
  const el=document.createElement('div'); el.className='backup-card';
  el.innerHTML=`<div class="backup-name">${c.name}</div><div class="backup-meta"><span class="pill">Day ${c.day} · ${c.booth}</span><span class="pill">${c.geo}</span><span class="pill">${c.track}</span></div><div class="backup-why">${c.why}</div>${verifiedLine(c)}<div class="backup-actions"><a class="linkbtn" href="${c.careers}" target="_blank" rel="noopener">Careers ↗</a></div>`;
  backupGrid.appendChild(el);
 });
}
function toggleDetails(id,b){const d=document.getElementById(id);d.classList.toggle('open');b.textContent=d.classList.contains('open')?'Hide preparation notes ▴':'Show preparation notes ▾'}
function saveVisited(id,v){localStorage.setItem('visited-'+id,v?'1':'0')}
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-mode]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.body.classList.toggle('fair',b.dataset.mode==='fair')}));
document.querySelectorAll('.filters-panel .filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filters-panel .filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()}));
document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-page]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const pg=b.dataset.page;document.getElementById('top15Page').style.display=pg==='top15'?'block':'none';document.getElementById('day1top6Page').style.display=pg==='day1top6'?'block':'none';document.getElementById('tier2Page').style.display=pg==='tier2'?'block':'none';document.getElementById('guidePage').style.display=pg==='guide'?'block':'none';}));
document.getElementById('search').addEventListener('input',render);render();
