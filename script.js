// script.js — lightweight portfolio renderer
// Fetches `configure.yaml` and renders the site dynamically.

document.addEventListener('DOMContentLoaded', () => {
  fetch('configure.yaml')
    .then((res) => res.text())
    .then((yaml) => {
      const data = jsyaml.load(yaml);
      initSite(data);
    })
    .catch((err) => console.error('Failed to load configure.yaml', err));
});

function initSite(data) {
  // Header & hero
  document.getElementById('site-name').textContent = data.personalInfo.name || 'Your Name';
  document.getElementById('site-title').textContent = data.personalInfo.title || '';
  document.getElementById('profile-name').textContent = data.personalInfo.name || '';
  document.getElementById('profile-title').textContent = data.personalInfo.title || '';
  document.getElementById('hero-greeting').textContent = `Hi, I'm ${data.personalInfo.name.split(' ')[0] || 'there'}.`;
  document.getElementById('hero-tagline').textContent = data.personalInfo.title || '';
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  // Experience
  const expContainer = document.getElementById('experience-list');
  expContainer.innerHTML = (data.experience || [])
    .map((item) => {
      return `
        <div class="card">
          <h3>${escapeHtml(item.title)} <span style="color:var(--muted);font-weight:600">— ${escapeHtml(item.company)}</span></h3>
          <p style="color:var(--muted);margin-bottom:8px">${escapeHtml(item.date)}</p>
          <ul>${(item.duties || []).map((d) => `<li style="color:var(--muted);margin-bottom:6px">${escapeHtml(d)}</li>`).join('')}</ul>
        </div>
      `;
    })
    .join('');

  // Projects
  const projContainer = document.getElementById('projects-list');
  projContainer.innerHTML = (data.projects || [])
    .map((p) => {
      return `
        <div class="card">
          <h3>${escapeHtml(p.title)}</h3>
          <p style="color:var(--muted);margin-bottom:8px">${escapeHtml(p.description)}</p>
          <div style="margin-bottom:10px">${(p.tags || [])
            .map((t) => `<span style="display:inline-block;background:rgba(124,58,237,0.08);color:var(--text);padding:6px 10px;border-radius:999px;margin-right:6px;font-size:0.82rem">${escapeHtml(t)}</span>`)
            .join('')}</div>
          <ul>${(p.features || []).map((f) => `<li style="color:var(--muted);margin-bottom:6px">${escapeHtml(f)}</li>`).join('')}</ul>
        </div>
      `;
    })
    .join('');

  // Resume
  const resumeView = document.getElementById('resume-view');
  resumeView.innerHTML = `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
        <div>
          <h3 style="margin:0">${escapeHtml(data.personalInfo.name)}</h3>
          <p style="margin:0;color:var(--muted)">${escapeHtml(data.personalInfo.title)}</p>
        </div>
        <div style="display:flex;gap:8px">
          <a class="primary-cta" href="${escapeAttr(data.personalInfo.resumePdf)}" target="_blank" rel="noopener">Open PDF</a>
          <button id="download-resume" class="secondary-cta">Download</button>
        </div>
      </div>
      <div style="margin-top:16px">
        <embed src="${escapeAttr(data.personalInfo.resumePdf)}" type="application/pdf" width="100%" height="720px" />
      </div>
    </div>
  `;

  document.getElementById('download-resume').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = data.personalInfo.resumePdf;
    link.download = data.personalInfo.resumePdf.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Contact
  const contactView = document.getElementById('contact-view');
  contactView.innerHTML = `
    <div class="card">
      <h3>Contact</h3>
      <p style="color:var(--muted)">Email: <a href="mailto:${escapeAttr(data.personalInfo.contact.email)}">${escapeHtml(data.personalInfo.contact.email)}</a></p>
      <p style="color:var(--muted)">LinkedIn: <a href="https://${escapeAttr(data.personalInfo.contact.linkedin)}" target="_blank" rel="noopener">${escapeHtml(data.personalInfo.contact.linkedin)}</a></p>
      <p style="color:var(--muted)">GitHub: <a href="https://${escapeAttr(data.personalInfo.contact.github)}" target="_blank" rel="noopener">${escapeHtml(data.personalInfo.contact.github)}</a></p>
    </div>
  `;

  // Navigation wiring
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => navigateTo(e.currentTarget.dataset.section));
  });

  const hash = location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) navigateTo(hash);
  else navigateTo('home');
}

function navigateTo(sectionId) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  const el = document.getElementById(sectionId);
  if (el) el.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.section === sectionId));
  history.replaceState(null, '', `#${sectionId}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}

function escapeAttr(str) {
  if (!str) return '';
  return encodeURI(String(str));
}
