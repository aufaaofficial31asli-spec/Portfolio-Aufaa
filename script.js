'use strict';
/* ====== KONFIGURASI — EDIT BAGIAN INI ====== */
const CONFIG = {
    name: 'Aufaa Ishaam Firaas',
    initials: 'AIF',
    photo: {
        // Boleh satu nama atau daftar. Dicoba berurutan sampai ada yang ketemu. Kosong = bingkai kosong.
        src: [
            'assets/images/foto-profil.jpg',
            'foto-profil.jpg',
            'foto-profil_1.jpg',
            'assets/images/foto-profil_1.jpg',
        ],
        alt: 'Foto Aufaa Ishaam Firaas',
    },
    email: 'aaufaa065@gmail.com',
    feedbackApi: '', // isi 'api/comments.php' setelah database & file PHP terpasang di hosting
    feedbackEndpoint: '', // URL penerima komentar (mis. Formspree); kosong = hanya tersimpan di browser pengunjung
    formEndpoint: '', // mis. URL Formspree; kosong = form belum terhubung
    heroDesc:
        'Web developer yang membangun antarmuka responsif, cepat, dan mudah digunakan dengan HTML, CSS, dan JavaScript.',
    about: 'Saya adalah developer yang berfokus pada pengembangan website modern, responsif, dan interaktif. saya memiliki pengalaman dalam membangun berbagai proyek web, mulai dari situs portofolio hingga aplikasi web dinamis. saya selalu bersemangat untuk belajar teknologi baru dan menerapkan praktik terbaik dalam pengembangan web.',
    philosophy:
        'Menulis kode yang bersih, efisien, dan kreatif untuk menciptakan solusi digital yang bermanfaat.',
    /* Lokasi UMUM saja (negara, provinsi, kota/kabupaten).
       Jangan isi alamat lengkap: nama jalan, nomor rumah, RT/RW, atau kode pos.
       Kosongkan provinsi/kota kalau tidak ingin ditampilkan. */
    location: {
        country: 'Indonesia',
        province: 'Kepulauan Bangka Belitung',
        city: 'Kota Manggar',
    },
    profile: {
        Lokasi: '', // kosong = otomatis diambil dari location di atas
        Fokus: 'Web Development',
        Keahlian: 'HTML, CSS, JavaScript',
        Status: 'Open for projects',
    },
    journey: [], // { year:'2024', title:'...', text:'...' }
    experience: [], // { period:'...', title:'...', place:'...', text:'...' }
};
const SOCIALS = {
    github: {
        name: 'GitHub',
        icon: 'fa-brands fa-github',
        desc: 'Repositori kode dan proyek.',
        url: 'https://github.com/aufaaofficial31asli-spec',
    },
    linkedin: {
        name: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        desc: 'Profil profesional dan jaringan.',
        url: '',
    },
    instagram: {
        name: 'Instagram',
        icon: 'fa-brands fa-instagram',
        desc: 'Dokumentasi proyek dan karya.',
        url: 'https://www.instagram.com/aufaaishaam?xtok=MXByZWoybDFhZG1tZg==',
    },
    youtube: {
        name: 'YouTube',
        icon: 'fa-brands fa-youtube',
        desc: 'Demo proyek dan tutorial coding.',
        url: 'https://www.youtube.com/@AufaaProgramerITIndonesia',
    },
    tiktok: {
        name: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        desc: 'Video singkat proses pengembangan.',
        url: 'https://www.tiktok.com/@aufaa_ishaam31?is_from_webapp=1&sender_device=pc',
    },
    discord: {
        name: 'Discord',
        icon: 'fa-brands fa-discord',
        desc: 'Komunitas dan kolaborasi.',
        url: 'https://discord.gg/QmZP6XVXp',
    },
};
/* ready: true = sudah mahir (tanda centang) | false = masih belajar (tanda silang, kartu redup) */
const SKILLS = [
    {
        ready: true,
        name: 'HTML5',
        cat: 'Frontend Development',
        icon: 'fa-brands fa-html5',
        desc: 'Struktur semantik dan aksesibel.',
    },
    {
        ready: true,
        name: 'CSS3',
        cat: 'Frontend Development',
        icon: 'fa-brands fa-css3-alt',
        desc: 'Layout Grid, Flexbox, animasi.',
    },
    {
        ready: false,
        name: 'Responsive Design',
        cat: 'Frontend Development',
        icon: 'fa-solid fa-mobile-screen',
        desc: 'Tampilan baik di semua layar.',
    },
    {
        ready: true,
        name: 'JavaScript',
        cat: 'Programming Languages',
        icon: 'fa-brands fa-js',
        desc: 'ES6+ dan manipulasi DOM.',
    },
    {
        ready: true,
        name: 'Git',
        cat: 'Tools & Workflow',
        icon: 'fa-brands fa-git-alt',
        desc: 'Version control.',
    },
    {
        ready: true,
        name: 'VS Code',
        cat: 'Tools & Workflow',
        icon: 'fa-solid fa-code',
        desc: 'Editor kerja harian.',
    },
    {
        ready: true,
        name: 'UI Design',
        cat: 'UI/UX & Creative Tools',
        icon: 'fa-solid fa-pen-ruler',
        desc: 'Menyusun tampilan yang jelas.',
    },
    // tambahkan: level: 80 untuk menampilkan indikator
];
const PROJECTS = [
    // { title:'', desc:'', tech:['HTML'], category:'Website', image:'assets/projects/x.jpg', demo:'https://...', source:'https://...' }
];
/* ===== PENGHARGAAN — ganti teks contoh dengan data asli =====
   rank: '1st Place' | '2nd Place' | '3rd Place' | 'Finalist' | 'Participant' | 'Certification' | 'Other'
   certificateType: 'img' (foto) atau 'pdf'   featured: true hanya untuk satu penghargaan */
const AWARDS = [
    {
        id: 1,
        title: 'Nama Penghargaan Pertama',
        rank: '1st Place',
        competition: 'Nama Kompetisi',
        organizer: 'Nama Penyelenggara',
        year: 2026,
        category: 'Programming',
        certificateNumber: '',
        certificateUrl: '',
        certificateType: 'img',
        verificationStatus: 'unverified',
        description: 'Deskripsi singkat.',
        featured: true,
    },
];
/* elemen ke-4: true = layanan tersedia (centang) | false = belum tersedia (silang) */
const SERVICES = [
    [
        'Website Development',
        'fa-solid fa-laptop-code',
        'Website lengkap dari desain sampai rilis.',
        true,
    ],
    [
        'Responsive Web Design',
        'fa-solid fa-mobile-screen-button',
        'Tampilan konsisten di semua perangkat.',
        true,
    ],
    [
        'UI Implementation',
        'fa-solid fa-layer-group',
        'Mengubah desain menjadi kode yang rapi.',
        true,
    ],
    [
        'Website Maintenance',
        'fa-solid fa-screwdriver-wrench',
        'Perbaikan bug dan pembaruan berkala.',
        false,
    ],
    [
        'Interactive Web Experiences',
        'fa-solid fa-wand-magic-sparkles',
        'Animasi dan interaksi yang bermakna.',
        false,
    ],
];
/* ===== MUSIK LATAR (playlist) =====
   Taruh file lagu di folder proyek (atau assets/music/), lalu tambahkan satu baris { src, title } per lagu.
   Nama di src harus sama persis dengan nama file. Kosongkan tracks = pemutar tidak tampil. */
const MUSIC = {
    tracks: [
        { src: 'lagu-latar.mp3', title: 'BEYOND THE HORIZON' },
        { src: 'Mahkota Bintang Abadi instrumental.mp3', title: 'Mahkota Bintang Abadi' },
        { src: 'Celestial Palace 1 instrumental.mp3', title: 'Celestial Palace 1' },
        { src: 'Celestial Palace  2  instrumental.mp3', title: 'Celestial Palace 2' },
    ],
    volume: 0.4, // 0 sampai 1
    autoplayOnFirstClick: true,
    shuffle: false, // true = mulai dari lagu acak
};
/* ====== AKHIR KONFIGURASI ====== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) =>
    String(s ?? '').replace(
        /[&<>"']/g,
        (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
    );
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isHttps = (u) => {
    try {
        return new URL(u, location.href).protocol.startsWith('http') || !/^[a-z]+:/i.test(u);
    } catch {
        return false;
    }
};
const safeUrl = (u) => {
    try {
        const p = new URL(u, location.href).protocol;
        return p === 'https:' || p === 'http:' || p === 'file:' ? u : '';
    } catch {
        return '';
    }
};

function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => t.classList.remove('show'), 2600);
}
function empty(el, msg) {
    el.innerHTML = `<div class="empty">${msg}</div>`;
}
function filters(el, items, onPick) {
    el.innerHTML = items
        .map(
            (f, i) =>
                `<button type="button" class="${i ? '' : 'on'}" data-f="${esc(f.v)}">${esc(f.l)}</button>`,
        )
        .join('');
    el.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        $$('button', el).forEach((x) => x.classList.toggle('on', x === b));
        onPick(b.dataset.f);
    });
}
const reveal = new IntersectionObserver(
    (es) =>
        es.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                reveal.unobserve(e.target);
            }
        }),
    { threshold: 0.12 },
);
const observe = (root) =>
    $$('.reveal:not(.in)', root || document).forEach((n) => reveal.observe(n));

/* ---------- Identitas ---------- */
document.title = `${CONFIG.name} — Portfolio`;
$('#logo').textContent = CONFIG.initials;
$('#ownerName').textContent = CONFIG.name;
$('#heroDesc').textContent = CONFIG.heroDesc;
$('#aboutText').textContent = CONFIG.about;
$('#philosophy').textContent = CONFIG.philosophy;
$('#footName').textContent = CONFIG.name;
$('#year').textContent = new Date().getFullYear();
const PROF_ICONS = {
    Lokasi: 'fa-location-dot',
    Fokus: 'fa-bullseye',
    Keahlian: 'fa-code',
    Status: 'fa-circle-check',
};
const locText = [CONFIG.location.city, CONFIG.location.province, CONFIG.location.country]
    .filter(Boolean)
    .join(', ');
$('#locName').textContent = locText;
$('#avatar').textContent = CONFIG.initials;
const slot = $('#photoSlot');
const photoList = []
    .concat((CONFIG.photo && CONFIG.photo.src) || [])
    .filter((u) => safeUrl(u));
(function tryPhoto(i) {
    if (i >= photoList.length) {
        if (photoList.length) console.warn('Foto profil tidak ditemukan. Cek CONFIG.photo.src:', photoList);
        return; // bingkai kosong tetap tampil
    }
    const img = new Image();
    img.alt = (CONFIG.photo && CONFIG.photo.alt) || `Foto ${CONFIG.name}`;
    img.onload = () => {
        slot.textContent = '';
        slot.append(img);
        slot.classList.add('has-photo');
    };
    img.onerror = () => tryPhoto(i + 1); // coba nama/lokasi berikutnya
    img.src = photoList[i];
})(0);
$('#profName').textContent = CONFIG.name;
$('#profile').innerHTML = Object.entries({ ...CONFIG.profile, Lokasi: CONFIG.profile.Lokasi || locText })
    .filter(([, v]) => v)
    .map(
        ([k, v]) =>
            `<div class="prof-row"><i class="fa-solid ${PROF_ICONS[k] || 'fa-circle-info'}" aria-hidden="true"></i><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`,
    )
    .join('');
$('#emailText').textContent = CONFIG.email || 'Email belum dikonfigurasi';
$('#formNote').textContent = CONFIG.formEndpoint
    ? ''
    : 'Catatan: formulir belum terhubung ke layanan pengiriman. Isi CONFIG.formEndpoint (mis. Formspree) agar pesan benar-benar terkirim.';

/* ---------- Timeline ---------- */
const tl = (el, list, f, msg) =>
    list.length ? (el.innerHTML = list.map(f).join('')) : empty(el, msg);
tl(
    $('#journey'),
    CONFIG.journey,
    (j) =>
        `<div class="tl reveal"><span class="yr mono">${esc(j.year)}</span><b>${esc(j.title)}</b><p class="muted">${esc(j.text)}</p></div>`,
    'Perjalanan belajar akan segera ditambahkan.',
);
tl(
    $('#expList'),
    CONFIG.experience,
    (x) =>
        `<div class="tl reveal"><b>${esc(x.title)}</b> <span class="muted">${esc(x.place)} · ${esc(x.period)}</span><p class="muted">${esc(x.text)}</p></div>`,
    'Pengalaman belum ditambahkan. Isi <code>CONFIG.experience</code>.',
);

const stBadge = (ok, yes, no) =>
    ok
        ? `<span class="st ok" role="img" aria-label="${yes}"><i class="fa-solid fa-check"></i></span>`
        : `<span class="st no" role="img" aria-label="${no}"><i class="fa-solid fa-xmark"></i></span>`;
/* ---------- Skills ---------- */
const skillCats = [...new Set(SKILLS.map((s) => s.cat))];
function renderSkills(cat = 'all') {
    const l = SKILLS.filter((s) => cat === 'all' || s.cat === cat);
    $('#skillGrid').innerHTML = l
        .map(
            (s) =>
                `<article class="glass card reveal${s.ready ? '' : ' off'}">${stBadge(s.ready, 'Sudah mahir', 'Masih belajar')}<i class="ic ${esc(s.icon)}" aria-hidden="true"></i><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p>${s.level ? `<div class="bar" role="img" aria-label="Level ${+s.level}%"><i style="width:${+s.level}%"></i></div>` : ''}</article>`,
        )
        .join('');
    observe($('#skillGrid'));
}
filters(
    $('#skillFilters'),
    [{ v: 'all', l: 'All' }, ...skillCats.map((c) => ({ v: c, l: c }))],
    renderSkills,
);
renderSkills();

/* ---------- Projects ---------- */
const projCats = ['Website', 'Application', 'Creative Tools'];
function renderProjects(cat = 'all') {
    const g = $('#projGrid'),
        l = PROJECTS.filter((p) => cat === 'all' || p.category === cat);
    if (!l.length)
        return empty(
            g,
            PROJECTS.length
                ? 'Tidak ada proyek di kategori ini.'
                : 'Proyek belum ditambahkan. Isi array <code>PROJECTS</code> di script.js.',
        );
    g.innerHTML = l
        .map((p) => {
            const d = safeUrl(p.demo),
                s = safeUrl(p.source);
            return `<article class="glass card reveal">${p.image ? `<img src="${esc(p.image)}" alt="Preview ${esc(p.title)}" loading="lazy" style="width:100%;border-radius:10px;margin-bottom:10px">` : ''}<h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="tags">${(p.tech || []).map((t) => `<span>${esc(t)}</span>`).join('')}</div><div class="row">${d ? `<a class="btn" href="${esc(d)}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}${s ? `<a class="btn" href="${esc(s)}" target="_blank" rel="noopener noreferrer">Source Code</a>` : ''}${!d && !s ? '<span class="muted">Tautan belum tersedia</span>' : ''}</div></article>`;
        })
        .join('');
    observe(g);
}
filters(
    $('#projFilters'),
    [{ v: 'all', l: 'All' }, ...projCats.map((c) => ({ v: c, l: c }))],
    renderProjects,
);
renderProjects();

/* ---------- Awards ---------- */
const rankMap = (r) => {
    const x = String(r).toLowerCase();
    return /1st|juara 1|first/.test(x)
        ? 'first'
        : /2nd|juara 2|second/.test(x)
          ? 'second'
          : /3rd|juara 3|third/.test(x)
            ? 'third'
            : /final/.test(x)
              ? 'finalist'
              : /particip|peserta/.test(x)
                ? 'participant'
                : /sertifikasi|certif/.test(x)
                  ? 'cert'
                  : 'other';
};
const rankCls = { first: 'gold', second: 'silver', third: 'bronze' };
const awardFilters = [
    ['all', 'All'],
    ['first', 'Juara 1'],
    ['second', 'Juara 2'],
    ['third', 'Juara 3'],
    ['finalist', 'Finalist'],
    ['participant', 'Participant'],
    ['cert', 'Certifications'],
    ['other', 'Other'],
];
function stats() {
    const a = AWARDS.filter((x) => safeUrl(x.certificateUrl)),
        comps = new Set(a.map((x) => x.competition).filter(Boolean)).size;
    const data = [
        [a.length, 'Total Awards'],
        [a.filter((x) => rankMap(x.rank) === 'first').length, 'First Place Wins'],
        [comps, 'Competitions Joined'],
        [a.filter((x) => x.certificateUrl).length, 'Certificates Available'],
    ];
    $('#awardStats').innerHTML = data
        .map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`)
        .join('');
    $('#heroStats').innerHTML = [
        [PROJECTS.length, 'Projects'],
        [a.length, 'Awards'],
        [SKILLS.filter((s) => s.ready).length, 'Skills'],
    ]
        .map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`)
        .join('');
}
function awardCard(a) {
    const k = rankMap(a.rank);
    return `<article class="glass card reveal ${rankCls[k] || 'blue'}"><span class="rank">${esc(a.rank)}</span><h3>${esc(a.title)}</h3><p class="meta">${esc(a.competition)} · ${esc(a.organizer)} · ${esc(a.year)} · ${esc(a.category)}</p><p>${esc(a.description)}</p>${a.certificateNumber ? `<p class="meta">No. ${esc(a.certificateNumber)}</p>` : ''}${a.certificateUrl ? `<button class="btn" data-cert="${a.id}">Lihat Bukti Sertifikat</button>` : '<p class="muted">Sertifikat belum ditambahkan</p>'}</article>`;
}
function renderAwards(f = 'all') {
    const g = $('#awardGrid'),
        pool = AWARDS,
        l = pool.filter((a) => f === 'all' || rankMap(a.rank) === f);
    if (!l.length)
        empty(
            g,
            AWARDS.length
                ? 'Tidak ada penghargaan di kategori ini.'
                : 'Belum ada penghargaan yang ditampilkan. Tambahkan data nyata ke array <code>AWARDS</code>.',
        );
    else g.innerHTML = l.map(awardCard).join('');
    observe(g);
}
const feat = AWARDS.find((a) => a.featured);
$('#spotlight').innerHTML = feat
    ? `<div class="glass spot"><i class="fa-solid fa-trophy" aria-hidden="true"></i><div><span class="badge">FEATURED ACHIEVEMENT</span><h3>${esc(feat.title)}</h3><p class="meta">${esc(feat.rank)} · ${esc(feat.organizer)} · ${esc(feat.year)}</p><p>${esc(feat.description)}</p>${feat.certificateUrl ? `<button class="btn" data-cert="${feat.id}">Lihat Sertifikat Asli</button>` : ''}</div></div>`
    : '';
filters(
    $('#awardFilters'),
    awardFilters.map(([v, l]) => ({ v, l })),
    renderAwards,
);
renderAwards();
stats();

/* ---------- Certificate viewer ---------- */
let lastFocus = null;
const modal = $('#modal');
function openModal(title, body, actions) {
    lastFocus = document.activeElement;
    $('#mTitle').textContent = title;
    $('#mBody').innerHTML = body;
    $('#mActions').innerHTML = actions;
    modal.hidden = false;
    $('#mClose').focus();
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    modal.hidden = true;
    $('#mBody').innerHTML = '';
    document.body.style.overflow = '';
    lastFocus && lastFocus.focus();
}
function certType(a) {
    const t = (a.certificateType || a.certificateUrl.split('?')[0].split('.').pop()).toLowerCase();
    return t === 'pdf' ? 'pdf' : 'img';
}
function showCert(id) {
    const a = AWARDS.find((x) => String(x.id) === String(id));
    const u = a && safeUrl(a.certificateUrl);
    if (!a || !u) return toast('Sertifikat belum ditambahkan');
    const body =
        certType(a) === 'pdf'
            ? `<iframe src="${esc(u)}" title="Sertifikat ${esc(a.title)}"></iframe><p class="muted">Jika PDF tidak tampil, gunakan tombol Buka File Asli.</p>`
            : `<img src="${esc(u)}" alt="Sertifikat ${esc(a.title)}">`;
    const note =
        a.verificationStatus === 'verified'
            ? ''
            : '<span class="muted">Status: belum diverifikasi</span>';
    openModal(
        a.title,
        body,
        `<a class="btn" href="${esc(u)}" target="_blank" rel="noopener noreferrer">Buka File Asli</a><a class="btn" href="${esc(u)}" download>Unduh Sertifikat</a>${note}`,
    );
}
document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-cert]');
    if (b) showCert(b.dataset.cert);
});
$('#mClose').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
    if (e.key === 'Tab' && !modal.hidden) {
        const f = $$('button,a,iframe', modal).filter((x) => !x.hidden);
        const first = f[0],
            last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});
let blobUrl;
$('#fileIn').addEventListener('change', (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!/^(image\/(jpeg|png|webp)|application\/pdf)$/.test(f.type)) {
        e.target.value = '';
        return toast('Format harus JPG, PNG, WebP, atau PDF');
    }
    blobUrl && URL.revokeObjectURL(blobUrl);
    blobUrl = URL.createObjectURL(f);
    openModal(
        `Pratinjau lokal: ${f.name}`,
        f.type === 'application/pdf'
            ? `<iframe src="${blobUrl}" title="Pratinjau PDF"></iframe>`
            : `<img src="${blobUrl}" alt="Pratinjau ${esc(f.name)}">`,
        '<span class="muted">Hanya pratinjau lokal. File tidak tersimpan permanen.</span>',
    );
});

const cg = $('#certGrid'),
    certs = AWARDS.filter((a) => safeUrl(a.certificateUrl));
if (!certs.length)
    empty(
        cg,
        'Belum ada sertifikat. Simpan file asli di <code>assets/certificates/</code> lalu isi <code>certificateUrl</code> pada <code>AWARDS</code>.',
    );
else
    cg.innerHTML = certs
        .map(
            (a) =>
                `<article class="glass card reveal"><div class="cthumb">${certType(a) === 'pdf' ? '<i class="fa-solid fa-file-pdf" aria-hidden="true"></i>' : `<img src="${esc(safeUrl(a.certificateUrl))}" alt="Sertifikat ${esc(a.title)}" loading="lazy">`}</div><h3>${esc(a.title)}</h3><p class="meta">${esc(a.organizer)} · ${esc(a.year)}</p><button class="btn" data-cert="${a.id}">Lihat Bukti Sertifikat</button></article>`,
        )
        .join('');
observe(cg);
/* ---------- Services & Social ---------- */
$('#svcGrid').innerHTML = SERVICES.map(
    ([t, i, d, ok]) =>
        `<article class="glass card reveal${ok ? '' : ' off'}">${stBadge(ok, 'Layanan tersedia', 'Layanan belum tersedia')}<i class="ic ${i}" aria-hidden="true"></i><h3>${t}</h3><p>${d}</p>${ok ? '<a class="btn" href="#contact" style="margin-top:12px">Diskusikan</a>' : '<button type="button" class="btn" disabled style="margin-top:12px">Belum tersedia</button>'}</article>`,
).join('');
const soc = Object.values(SOCIALS);
$('#socialGrid').innerHTML = soc
    .map((s) => {
        const u = safeUrl(s.url);
        return `<article class="glass card reveal"><i class="ic ${s.icon}" aria-hidden="true"></i><h3>${s.name}</h3><p>${s.desc}</p>${u ? `<a class="btn" href="${esc(u)}" target="_blank" rel="noopener noreferrer" style="margin-top:12px">Visit Profile</a>` : '<span class="muted">Coming Soon</span>'}</article>`;
    })
    .join('');
$('#footSocial').innerHTML =
    soc
        .filter((s) => safeUrl(s.url))
        .map(
            (s) =>
                `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}"><i class="${s.icon}"></i></a>`,
        )
        .join('') || '<span class="muted">Tautan sosial belum diisi</span>';
$('#footLinks').innerHTML = $$('#menu a')
    .map((a) => `<a href="${a.getAttribute('href')}">${a.textContent}</a>`)
    .join('');

/* ---------- Contact ---------- */
$('#copyEmail').addEventListener('click', async () => {
    if (!CONFIG.email) return toast('Email belum dikonfigurasi');
    try {
        await navigator.clipboard.writeText(CONFIG.email);
        toast('Email disalin');
    } catch {
        toast('Gagal menyalin — salin manual');
    }
});
const rules = {
    fn: (v) => v.trim().length >= 2 || 'Nama minimal 2 karakter.',
    fe: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Format email tidak valid.',
    fs: (v) => v.trim().length >= 3 || 'Subjek minimal 3 karakter.',
    fm: (v) => v.trim().length >= 10 || 'Pesan minimal 10 karakter.',
};
$('#form').addEventListener('submit', async (e) => {
    e.preventDefault();
    let ok = true;
    for (const [id, fn] of Object.entries(rules)) {
        const r = fn($('#' + id).value);
        $('#e-' + id).textContent = r === true ? '' : r;
        if (r !== true) ok = false;
    }
    if (!ok) return toast('Periksa kembali isian formulir');
    if (!CONFIG.formEndpoint) return toast('Formulir belum terhubung ke layanan pengiriman');
    try {
        const res = await fetch(CONFIG.formEndpoint, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: new FormData(e.target),
        });
        if (!res.ok) throw 0;
        e.target.reset();
        toast('Pesan terkirim');
    } catch {
        toast('Pengiriman gagal. Coba lagi nanti.');
    }
});

/* ---------- Komentar & rating ---------- */
const FB_KEY = 'portfolio_feedback_v1';
const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);
const useApi = Boolean(CONFIG.feedbackApi); // true = pakai database di hosting
let fbData = [];
let fbSummary = null; // dari server: { avg, count }
if (!useApi) {
    try {
        fbData = JSON.parse(localStorage.getItem(FB_KEY) || '[]');
        if (!Array.isArray(fbData)) fbData = [];
    } catch {
        fbData = [];
    }
}
$('#fbNote').textContent = useApi
    ? 'Komentar ditinjau dulu oleh pemilik sebelum tampil.'
    : CONFIG.feedbackEndpoint
      ? 'Komentar dikirim ke pemilik portofolio dan juga disimpan di browser ini.'
      : 'Catatan: tanpa database, komentar hanya tersimpan di browser ini, tidak terlihat oleh pengunjung lain dan belum diterima pemilik. Isi CONFIG.feedbackApi untuk memakai database.';

function fbRender() {
    const n = fbSummary ? fbSummary.count : fbData.length;
    const avg = fbSummary ? fbSummary.avg : n ? fbData.reduce((s, f) => s + f.rate, 0) / n : 0;
    const unit = useApi ? 'komentar' : 'komentar di browser ini';
    $('#fbSum').innerHTML = n
        ? `<b>${avg.toFixed(1)}</b> / 5 <span class="gold-t" aria-hidden="true">${stars(Math.round(avg))}</span> <span class="muted">(${n} ${unit})</span>`
        : '<span class="muted">Belum ada komentar. Jadilah yang pertama.</span>';
    const list = useApi ? fbData : fbData.slice().reverse();
    $('#fbList').innerHTML = list
        .map(
            (f) =>
                `<div class="glass fb-item"><b>${esc(f.name)}</b> <span class="gold-t" role="img" aria-label="${+f.rate} dari 5 bintang">${stars(+f.rate)}</span><p>${esc(f.msg)}</p><small class="muted">${esc(f.date)}</small></div>`,
        )
        .join('');
}

async function fbLoad() {
    if (!useApi) return;
    try {
        const res = await fetch(CONFIG.feedbackApi, { headers: { Accept: 'application/json' } });
        if (!res.ok) throw 0;
        const d = await res.json();
        fbData = Array.isArray(d.comments) ? d.comments : [];
        fbSummary = { avg: +d.avg || 0, count: +d.count || 0 };
        fbRender();
    } catch {
        $('#fbSum').innerHTML = '<span class="muted">Komentar belum bisa dimuat saat ini.</span>';
    }
}

$('#fbForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $('#fbName').value.trim();
    const msg = $('#fbMsg').value.trim();
    const r = $('input[name=rate]:checked', e.target);
    const rate = r ? +r.value : 0;
    const errs = {
        'e-fbName': name.length >= 2 ? '' : 'Nama minimal 2 karakter.',
        'e-fbRate': rate ? '' : 'Pilih rating 1 sampai 5 bintang.',
        'e-fbMsg': msg.length >= 5 ? '' : 'Komentar minimal 5 karakter.',
    };
    Object.entries(errs).forEach(([id, t]) => ($('#' + id).textContent = t));
    if (Object.values(errs).some(Boolean)) return toast('Lengkapi nama, rating, dan komentar');

    if (useApi) {
        try {
            const res = await fetch(CONFIG.feedbackApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ name, rate, msg, website: $('#fbWeb').value }),
            });
            const d = await res.json().catch(() => ({}));
            if (!res.ok) return toast(d.error || 'Pengiriman gagal. Coba lagi nanti.');
            e.target.reset();
            toast(d.message || 'Terima kasih atas komentarnya');
            fbLoad();
        } catch {
            toast('Pengiriman gagal. Coba lagi nanti.');
        }
        return;
    }

    const entry = { name, rate, msg, date: new Date().toLocaleDateString('id-ID') };
    if (CONFIG.feedbackEndpoint) {
        try {
            const res = await fetch(CONFIG.feedbackEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(entry),
            });
            if (!res.ok) throw 0;
        } catch {
            return toast('Pengiriman gagal. Coba lagi nanti.');
        }
    }
    fbData.push(entry);
    fbData = fbData.slice(-50);
    try {
        localStorage.setItem(FB_KEY, JSON.stringify(fbData));
    } catch {}
    e.target.reset();
    fbRender();
    toast('Terima kasih atas komentarnya');
});
if (useApi) {
    $('#fbSum').innerHTML = '<span class="muted">Memuat komentar…</span>';
    fbLoad();
} else {
    fbRender();
}
/* ---------- Navigasi & scroll ---------- */
const burger = $('#burger'),
    menu = $('#menu');
burger.addEventListener('click', () => {
    const o = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', o);
});
menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
    }
});
const links = $$('#menu a');
const secObs = new IntersectionObserver(
    (es) =>
        es.forEach((e) => {
            if (e.isIntersecting)
                links.forEach((a) => {
                    const on = a.getAttribute('href') === '#' + e.target.id;
                    if (on) $('#here').textContent = a.textContent;
                    a.classList.toggle('active', on);
                    on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
                });
        }),
    { rootMargin: '-45% 0px -50% 0px' },
);
$$('main section').forEach((s) => secObs.observe(s));
const bar = $('#progress'),
    topBtn = $('#toTop');
addEventListener(
    'scroll',
    () => {
        const h = document.documentElement;
        bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + '%';
    },
    { passive: true },
);
topBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
(function () {
    const L = $('#loader'),
        fg = $('#ldFg'),
        pct = $('#ldPct'),
        C = 327,
        t0 = performance.now();
    $('#ldLogo').textContent = CONFIG.initials;
    $('#ldName').textContent = CONFIG.name;
    let p = 0,
        loaded = document.readyState === 'complete';
    addEventListener('load', () => (loaded = true));
    setTimeout(() => (loaded = true), 4000);
    (function step() {
        const el = performance.now() - t0,
            target = loaded && el > 1200 ? 100 : Math.min(90, el / 20);
        p += (target - p) * 0.12;
        if (target === 100 && p > 99.5) p = 100;
        fg.style.strokeDashoffset = C * (1 - p / 100);
        pct.textContent = Math.round(p);
        if (p < 100) return requestAnimationFrame(step);
        setTimeout(() => {
            L.classList.add('done');
            setTimeout(() => L.remove(), 700);
        }, 250);
    })();
})();
observe();

/* ---------- Lab ---------- */
// Ripple
document.addEventListener('click', (e) => {
    const b = e.target.closest('.btn');
    if (!b || reduced) return;
    const r = b.getBoundingClientRect(),
        s = Math.max(r.width, r.height),
        d = document.createElement('span');
    d.className = 'ripple';
    d.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
    b.appendChild(d);
    setTimeout(() => d.remove(), 650);
});
// Tilt
$$('.tilt').forEach((t) => {
    t.addEventListener('mousemove', (e) => {
        if (reduced) return;
        const r = t.getBoundingClientRect();
        t.style.setProperty('--gx', e.clientX - r.left + 'px');
        t.style.setProperty('--gy', e.clientY - r.top + 'px');
        t.style.transform = `perspective(600px) rotateY(${((e.clientX - r.left) / r.width - 0.5) * 24}deg) rotateX(${-((e.clientY - r.top) / r.height - 0.5) * 24}deg)`;
    });
    t.addEventListener('mouseleave', () => (t.style.transform = ''));
});
// Clock
const clock = $('#clock');
const tick = () => (clock.textContent = new Date().toLocaleTimeString());
tick();
setInterval(tick, 1000);
// Cursor glow
const glow = $('#glow');
let glowOn = !reduced;
addEventListener(
    'mousemove',
    (e) => {
        if (glowOn) {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }
    },
    { passive: true },
);
$('#glowToggle').addEventListener('click', (e) => {
    glowOn = !glowOn;
    glow.style.display = glowOn ? '' : 'none';
    e.target.textContent = `Cursor glow: ${glowOn ? 'ON' : 'OFF'}`;
    e.target.setAttribute('aria-pressed', glowOn);
});
// Particles
const mouse = { x: -999, y: -999 };
addEventListener(
    'mousemove',
    (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    },
    { passive: true },
);
const cv = $('#particles'),
    cx = cv.getContext('2d');
let fx = !reduced,
    pts = [];
function sizeCv() {
    cv.width = innerWidth;
    cv.height = innerHeight;
    pts = Array.from({ length: Math.min(70, Math.floor(innerWidth / 18)) }, () => ({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
    }));
}
sizeCv();
addEventListener('resize', sizeCv);
(function loop() {
    requestAnimationFrame(loop);
    if (!fx || document.hidden) return;
    cx.clearRect(0, 0, cv.width, cv.height);
    pts.forEach((p, i) => {
        p.x = (p.x + p.vx + cv.width) % cv.width;
        p.y = (p.y + p.vy + cv.height) % cv.height;
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (md < 140) {
            p.x += ((p.x - mouse.x) / md) * 0.9;
            p.y += ((p.y - mouse.y) / md) * 0.9;
            cx.strokeStyle = `rgba(0,229,255,${0.5 * (1 - md / 140)})`;
            cx.beginPath();
            cx.moveTo(p.x, p.y);
            cx.lineTo(mouse.x, mouse.y);
            cx.stroke();
        }
        cx.fillStyle = 'rgba(0,229,255,.7)';
        cx.fillRect(p.x, p.y, 2, 2);
        for (let j = i + 1; j < pts.length; j++) {
            const q = pts[j],
                d = Math.hypot(p.x - q.x, p.y - q.y);
            if (d < 110) {
                cx.strokeStyle = `rgba(57,135,255,${0.25 * (1 - d / 110)})`;
                cx.beginPath();
                cx.moveTo(p.x, p.y);
                cx.lineTo(q.x, q.y);
                cx.stroke();
            }
        }
    });
})();
$('#fxToggle').addEventListener('click', (e) => {
    fx = !fx;
    document.body.classList.toggle('nofx', !fx);
    if (!fx) cx.clearRect(0, 0, cv.width, cv.height);
    e.target.textContent = `Efek visual: ${fx ? 'ON' : 'OFF'}`;
    e.target.setAttribute('aria-pressed', fx);
});
if (reduced) {
    document.body.classList.add('nofx');
    $('#fxToggle').textContent = 'Efek visual: OFF';
    $('#fxToggle').setAttribute('aria-pressed', false);
    $('#glowToggle').textContent = 'Cursor glow: OFF';
    $('#glowToggle').setAttribute('aria-pressed', false);
}
// Terminal (simulasi, tidak menjalankan perintah sistem)
const term = $('#term'),
    out = (t) => {
        term.textContent += t + '\n';
        term.scrollTop = term.scrollHeight;
    };
const hist = [];
let hi = 0;
const cmds = {
    help: () =>
        'Perintah: help, about, whoami, skills, projects, awards, date, clear (panah atas/bawah = riwayat)',
    whoami: () => CONFIG.name,
    date: () => new Date().toLocaleString(),
    awards: () =>
        AWARDS.length ? AWARDS.map((a) => a.title).join(', ') : 'Belum ada penghargaan.',
    about: () => `${CONFIG.name} — ${CONFIG.about}`,
    skills: () => SKILLS.map((s) => s.name).join(', '),
    projects: () =>
        PROJECTS.length ? PROJECTS.map((p) => p.title).join(', ') : 'Belum ada proyek.',
    clear: () => {
        term.textContent = '';
        return '';
    },
};
out('Terminal simulasi. Ketik "help".');
$('#termForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const i = $('#termIn'),
        c = i.value.trim().toLowerCase();
    i.value = '';
    if (!c) return;
    out('$ ' + c);
    hist.push(c);
    hi = hist.length;
    const r = Object.hasOwn(cmds, c) ? cmds[c]() : `Perintah tidak dikenal: ${c}`;
    if (r) out(r);
});

// Interaksi tambahan
document.addEventListener(
    'mousemove',
    (e) => {
        const c = e.target.closest && e.target.closest('.card');
        if (!c) return;
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', e.clientX - r.left + 'px');
        c.style.setProperty('--my', e.clientY - r.top + 'px');
    },
    { passive: true },
);
$$('.hero .btn').forEach((b) => {
    b.addEventListener('mousemove', (e) => {
        if (reduced) return;
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    b.addEventListener('mouseleave', () => (b.style.transform = ''));
});
const ow = $('#orbitWrap');
ow.addEventListener('mousemove', (e) => {
    if (reduced) return;
    const r = ow.getBoundingClientRect();
    ow.style.transform = `perspective(700px) rotateY(${((e.clientX - r.left) / r.width - 0.5) * 18}deg) rotateX(${-((e.clientY - r.top) / r.height - 0.5) * 18}deg)`;
});
ow.addEventListener('mouseleave', () => (ow.style.transform = ''));
const techNote = (n) => {
    const s = SKILLS.find((x) => x.name === n);
    return s ? `${n} — ${s.desc}` : n;
};
$$('.node button').forEach((b) => b.addEventListener('click', () => toast(techNote(b.dataset.t))));
$$('.chip').forEach((c) => {
    const act = () => {
        c.classList.add('on');
        setTimeout(() => c.classList.remove('on'), 800);
        toast(techNote(c.dataset.t));
    };
    c.addEventListener('click', act);
    c.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            act();
        }
    });
});
$('#termIn').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && hi > 0) {
        e.preventDefault();
        e.target.value = hist[--hi];
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.target.value = hi < hist.length - 1 ? hist[++hi] : ((hi = hist.length), '');
    }
});
const typed = $('#typed'),
    words = ['Web Developer', 'Frontend Developer', 'Creative Coder'];
if (reduced) typed.textContent = words[0];
else {
    let w = 0,
        i = 0,
        del = false;
    (function type() {
        const word = words[w];
        typed.textContent = word.slice(0, i);
        if (!del && i === word.length) {
            del = true;
            return setTimeout(type, 1600);
        }
        if (del && i === 0) {
            del = false;
            w = (w + 1) % words.length;
        }
        i += del ? -1 : 1;
        setTimeout(type, del ? 40 : 85);
    })();
}
/* ---------- Musik latar (playlist) ---------- */
(function () {
    const list = (
        MUSIC.tracks && MUSIC.tracks.length
            ? MUSIC.tracks
            : MUSIC.src
              ? [{ src: MUSIC.src, title: MUSIC.title }]
              : []
    ).filter((t) => t && t.src);
    if (!list.length) return;
    const box = $('#music'),
        a = $('#bgm'),
        btn = $('#musicBtn'),
        prev = $('#musicPrev'),
        next = $('#musicNext'),
        vol = $('#musicVol'),
        KEY = 'portfolio_music_off';
    const v0 = Math.min(1, Math.max(0, MUSIC.volume > 1 ? MUSIC.volume / 100 : MUSIC.volume));
    let idx = MUSIC.shuffle ? Math.floor(Math.random() * list.length) : 0,
        wantPlay = false,
        triedAlt = false,
        fails = 0,
        userOff = false,
        resume = false;
    try {
        userOff = localStorage.getItem(KEY) === '1';
    } catch {}
    a.loop = list.length === 1;
    a.volume = v0;
    vol.value = Math.round(v0 * 100);
    box.hidden = false;
    prev.hidden = next.hidden = list.length < 2;
    const sync = () => {
        const on = !a.paused;
        btn.setAttribute('aria-pressed', on);
        btn.setAttribute('aria-label', on ? 'Jeda musik latar' : 'Putar musik latar');
        btn.innerHTML = `<i class="fa-solid ${on ? 'fa-pause' : 'fa-music'}"></i>`;
        box.classList.toggle('on', on);
    };
    const label = () => {
        const t = list[idx];
        $('#musicTitle').textContent =
            (t.title || '') + (list.length > 1 ? ` (${idx + 1}/${list.length})` : '');
        try {
            if ('mediaSession' in navigator)
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: t.title || 'Musik latar',
                    artist: CONFIG.name,
                });
        } catch {}
    };
    const playNow = () => {
        wantPlay = true;
        return a
            .play()
            .then(() => {
                fails = 0;
                sync();
            })
            .catch((err) => {
                if (err.name === 'NotAllowedError') toast('Klik tombol musik untuk memutar');
            });
    };
    const load = (i, play) => {
        idx = (i + list.length) % list.length;
        triedAlt = false;
        a.src = list[idx].src;
        label();
        if (play) playNow();
        else sync();
    };
    a.addEventListener('error', () => {
        const cur = list[idx].src;
        if (!triedAlt && /\.mp3\.mp3$/i.test(cur)) {
            triedAlt = true;
            a.src = cur.replace(/\.mp3$/i, '');
            a.load();
            if (wantPlay)
                a.play()
                    .then(sync)
                    .catch(() => {});
            return;
        }
        fetch(a.src, { method: 'HEAD' })
            .then((r) =>
                toast(
                    r.ok
                        ? 'Format audio tidak didukung: ' + (list[idx].title || cur)
                        : 'File musik tidak ditemukan: ' + cur,
                ),
            )
            .catch(() => toast('Musik gagal dimuat. Buka lewat Live Server.'));
        if (list.length > 1 && wantPlay && ++fails < list.length)
            setTimeout(() => load(idx + 1, true), 1500);
        sync();
    });
    a.addEventListener('ended', () => load(idx + 1, true));
    btn.addEventListener('click', () => {
        if (a.paused) {
            playNow();
            try {
                localStorage.removeItem(KEY);
            } catch {}
        } else {
            wantPlay = false;
            a.pause();
            sync();
            try {
                localStorage.setItem(KEY, '1');
            } catch {}
        }
    });
    prev.addEventListener('click', () => {
        try {
            localStorage.removeItem(KEY);
        } catch {}
        load(idx - 1, true);
    });
    next.addEventListener('click', () => {
        try {
            localStorage.removeItem(KEY);
        } catch {}
        load(idx + 1, true);
    });
    vol.addEventListener('input', () => {
        a.volume = vol.value / 100;
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && !a.paused) {
            a.pause();
            resume = true;
        } else if (!document.hidden && resume) {
            resume = false;
            playNow();
        }
    });
    try {
        if (list.length > 1 && 'mediaSession' in navigator) {
            navigator.mediaSession.setActionHandler('nexttrack', () => load(idx + 1, true));
            navigator.mediaSession.setActionHandler('previoustrack', () => load(idx - 1, true));
        }
    } catch {}
    load(idx, false);
    if (MUSIC.autoplayOnFirstClick && !userOff) {
        const start = (e) => {
            if (e.target.closest && e.target.closest('#music')) return;
            playNow();
            removeEventListener('pointerdown', start);
            removeEventListener('keydown', start);
        };
        addEventListener('pointerdown', start);
        addEventListener('keydown', start);
    }
})();