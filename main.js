// terminal-cv/main.js
// App logic (UI + commands). Reads data from window.CV_CONFIG.

(function () {
    const cfg = window.CV_CONFIG || {};
    const PROFILE = cfg.profile || {};
    const SKILLS = cfg.skills || {};
    const EXPERIENCE = cfg.experience || [];
    const PROJECTS = cfg.projects || [];
  
    const term = document.getElementById('term');
    const input = document.getElementById('input');
    const form = document.getElementById('form');
  
    const registry = {};
    const commands = (name, fn, helpText) => { registry[name] = { fn, helpText }; };
  
    let history = []; let historyIdx = -1;
  
    const write = (html) => {
      const el = document.createElement('div');
      el.className = 'line';
      el.innerHTML = html;
      term.appendChild(el);
      term.scrollTop = term.scrollHeight;
      return el;
    };
  
    const writePrompt = (cmd) => {
      write(`<span class="prompt">cloud@isexpensive:~$</span> ${escapeHtml(cmd)}`);
    };
  
    const escapeHtml = (s="") => s.replace(/[&<>\"]/g, (c)=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));
  
    const typeOut = async (text, speed=6) => {
      const el = document.createElement('div');
      el.className = 'line';
      term.appendChild(el);
      let i=0; const safe = escapeHtml(text);
      return new Promise(resolve=>{
        const tick = () => {
          i += Math.max(1, Math.round(speed));
          el.innerHTML = safe.slice(0, i) + '<span class="caret"></span>';
          term.scrollTop = term.scrollHeight;
          if (i >= safe.length) { el.innerHTML = safe; resolve(); return; }
          requestAnimationFrame(tick);
        };
        tick();
      });
    };
  
    // ===== Commands =====
    commands('help', () => {
      const list = Object.keys(registry).sort().map(c=>`<code>${c}</code>`).join(', ');
      write(`Available commands: ${list}.`);
      write(`Tips: use <b>Tab</b> to autocomplete, <b>↑/↓</b> for history.`);
    }, 'List available commands.');
  
    commands('about', async () => {
      const loc = PROFILE.location ? ` | ${PROFILE.location}` : '';
      await typeOut(`${PROFILE.name || 'Giorgos Tsilivis'} — ${PROFILE.title || ''}${loc}`);
      if (PROFILE.website) write(`Website: <a href="${PROFILE.website}" target="_blank">${PROFILE.website}</a>`);
      if (PROFILE.github) write(`GitHub: <a href="${PROFILE.github}" target="_blank">${PROFILE.github}</a>`);
      if (PROFILE.linkedin) write(`LinkedIn: <a href="${PROFILE.linkedin}" target="_blank">${PROFILE.linkedin}</a>`);
    }, 'Who am I?');
  
    commands('skills', () => {
      const block = (label, arr=[]) => write(`<span class="muted">${label}:</span> ${arr.join(', ')}`);
      block('Languages', SKILLS.languages);
      block('Frameworks', SKILLS.frameworks);
      block('Tools', SKILLS.tools);
    }, 'Technical skills');
  
    commands('experience', () => {
      EXPERIENCE.forEach(job => {
        write(`<b>${escapeHtml(job.role)}</b> — ${escapeHtml(job.company)} <span class="muted">(${escapeHtml(job.period)})</span>`);
        const ul = document.createElement('ul'); ul.style.margin = '4px 0 8px 20px';
        (job.bullets || []).forEach(b=>{ const li = document.createElement('li'); li.textContent = b; ul.appendChild(li); });
        term.appendChild(ul);
      });
      term.scrollTop = term.scrollHeight;
    }, 'Work history');
  
    commands('projects', () => {
      PROJECTS.forEach(p=>write(`<b>${escapeHtml(p.name)}</b> — ${escapeHtml(p.desc)} · ${p.link ? `<a href="${p.link}" target="_blank">open</a>`:''}`));
    }, 'Selected projects');
  
    commands('contact', () => {
      if (PROFILE.email) write(`Email: <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>`);
      if (PROFILE.linkedin) write(`Say hi on LinkedIn: <a href="${PROFILE.linkedin}" target="_blank">profile</a>`);
    }, 'How to reach me');
  
    commands('theme', (arg) => {
      const next = arg?.toLowerCase();
      if (next === 'light' || next === 'dark') {
        document.body.setAttribute('data-theme', next);
        write(`You are now in <b>${next}</b> mode.`);
      } else {
        const now = document.body.getAttribute('data-theme');
        const other = now === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', other);
        write(`Toggled theme to <b>${other}</b>. Try: <code>theme light</code> or <code>theme dark</code>.`);
      }
    }, 'Toggle or set theme: theme [light|dark]');
  
    commands('clear', () => { term.innerHTML = ''; }, 'Clear the terminal');
  
    commands('cv', () => {
      if (PROFILE.resumePdf) {
        write(`Opening resume: <a href="${PROFILE.resumePdf}" target="_blank">${PROFILE.resumePdf}</a>`);
      } else {
        write('No resume linked. Set profile.resumePdf in config.js');
      }
    }, 'Open/download your PDF resume');
  
    // ===== Autocomplete & input handling =====
    const completions = () => Object.keys(registry);
  
    const complete = (value) => {
      const [cmd, ...rest] = value.split(/\s+/);
      const options = completions().filter(c => c.startsWith(cmd));
      if (options.length === 1) return options[0] + (rest.length ? ' ' + rest.join(' ') : '');
      if (options.length > 1) write(options.map(o=>`<code>${o}</code>`).join(' '));
      return value;
    };
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const raw = input.value.trim();
      writePrompt(raw);
      if (!raw) { input.value = ''; return; }
  
      history.push(raw); historyIdx = history.length;
  
      const [cmd, ...parts] = raw.split(/\s+/);
      const arg = parts.join(' ').trim() || undefined;
  
      const entry = registry[cmd];
      if (!entry) {
        write(`Command not found: <b>${escapeHtml(cmd)}</b>. Try <code>help</code>.`);
      } else {
        try { entry.fn(arg); }
        catch (err) { write(`<span class="muted">Error:</span> ${escapeHtml(String(err))}`); }
      }
      input.value = '';
    });
  
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') { e.preventDefault(); input.value = complete(input.value); return; }
      if (e.key === 'ArrowUp') { e.preventDefault(); if (history.length) { historyIdx = Math.max(0, historyIdx-1); input.value = history[historyIdx]; input.setSelectionRange(input.value.length, input.value.length);} }
      if (e.key === 'ArrowDown') { e.preventDefault(); if (history.length) { historyIdx = Math.min(history.length, historyIdx+1); input.value = history[historyIdx] ?? ''; input.setSelectionRange(input.value.length, input.value.length);} }
    });
  
    // Buttons
    document.getElementById('themeBtn').addEventListener('click', ()=> registry.theme.fn());
    document.getElementById('clearBtn').addEventListener('click', ()=> registry.clear.fn());
  
    // Accessibility: focus terminal by clicking background
    term.addEventListener('click', ()=> input.focus());
  
    // Optional: greet
    write(`Type <code>about</code> or <code>help</code> to get started.`);
  })();
  