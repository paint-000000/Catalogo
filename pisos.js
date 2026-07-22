(async function () {
  const EXTS = ['jpg', 'jpeg', 'png', 'webp'];
  const MAX_LOCAL_IMAGES = 30;

  const ALL_COLLECTIONS = [
    {
      key: 'brazil',
      title: 'Brazil',
      desc: 'A autenticidade das madeiras brasileiras traduzida em réguas de beleza única. Uma coleção que exalta a alma tropical com cores profundas e fibras marcantes.',
      localFolder: 'pisos/brazil',
      youtube: 'j6ptdgucfRs',
      youtubeShort: true,
      names: { 1: 'Cumaru', 2: 'Peroba Mica', 3: 'Peroba Mica', 4: 'Cumaru', 5: 'Cumaru', 6: 'Cumaru', 7: 'Tauari', 8: 'Tauari', 9: 'Tauari', 10: 'Tauari' }
    },
    {
      key: 'eternos',
      title: 'Eternos',
      desc: 'Tons e texturas que atravessam o tempo. Uma coleção concebida para durar visualmente e estruturalmente, em qualquer cenário.',
      localFolder: 'pisos/eternos',
      youtube: '',
      names: { 1: 'Bambu Demolição', 2: 'Canela Demolição', 4: 'Canela Demolição', 5: 'Canela Demolição' }
    },
    {
      key: 'unicos',
      title: 'Únicos',
      desc: 'Peças raras com desenhos irrepetíveis. Cada régua é assinada pela natureza com veios, nós e matizes singulares.',
      localFolder: 'pisos/unicos',
      youtube: '',
      names: {
        1: 'Pau ferro', 2: 'Lapacho', 4: 'Nogueira'
      }
    },
    {
      key: 'carvalhos',
      title: 'Carvalhos',
      desc: 'A nobreza do Carvalho Europeu em texturas que contam histórias. Tons orgânicos e toques acetinados que trazem o equilíbrio perfeito entre tradição e modernidade.',
      youtube: '',
      names: {
        1: 'Carvalho Europeu Naturalle',
        2: 'Carvalho Europeu Mont Blanc',
        3: 'Carvalho Europeu Mont Blanc',
        4: 'Carvalho Europeu Cappuccino',
        5: 'Carvalho Europeu Naturalle',
        6: 'Carvalho Europeu Naturalle',
        7: 'Carvalho Europeu Naturalle',
        8: 'Carvalho Europeu Light Brown',
        9: 'Carvalho Europeu Light Brown',
        10: 'Carvalho Europeu Smoke',
        11: 'Carvalho Europeu Naturalle',
        12: 'Carvalho Europeu Marrone',
        13: 'Carvalho Europeu Naturalle',
        14: 'Carvalho Europeu Mont Blanc',
        15: 'Carvalho Europeu Nevado',
        16: 'Carvalho Europeu Batman',
        17: 'Carvalho Europeu Armani',
        18: 'Carvalho Europeu Armani',
        19: 'Carvalho Europeu Smoke',
        20: 'Carvalho Europeu Giz',
        21: 'Carvalho Europeu Wild Grey',
        22: 'Carvalho Europeu Armani',
        23: 'Carvalho Europeu Naturalle',
        24: 'Carvalho Europeu Smoke',
        25: 'Carvalho Europeu Naturalle',
        26: 'Carvalho Europeu Milano',
        27: 'Carvalho Europeu Naturalle',
        28: 'Carvalho Europeu All Black',
        29: 'Carvalho Europeu Nevado',
        30: 'Carvalho Europeu Batman'
      },
      remote: [
        "https://parket.com.br/wp-content/uploads/2026/03/4D5A0231-b-1-scaled.jpg",
        "https://parket.com.br/wp-content/uploads/2026/03/27e09f2b-808a-4ecb-b60d-c2702e023383-1.jpg",
        "https://parket.com.br/wp-content/uploads/2026/03/aa120b24-69d4-48d5-b47f-b73099b875ef-2-1.jpg",
        "https://parket.com.br/wp-content/uploads/2026/03/european-oak-capuccino-1.jpeg",
        "https://parket.com.br/wp-content/uploads/2026/03/European-Oak-Giant-1.jpg",
        "https://parket.com.br/wp-content/uploads/2026/03/Imagem_7-30-1.webp",
        "https://parket.com.br/wp-content/uploads/2026/03/IMG_0150-1-scaled.jpg",
        "https://parket.com.br/wp-content/uploads/2026/03/IMG_6862-1-scaled.jpg",
        "https://parket.com.br/wp-content/uploads/2026/03/IMG_8925-2-1.jpeg",
        "https://parket.com.br/wp-content/uploads/2026/03/IMG_8932-2-1.jpeg",
        "https://parket.com.br/wp-content/uploads/2026/03/oak-flooring-dinesen-victoria-miro-gallery-wide-wooden-floorboards-02-1.jpg",
        "https://parket.com.br/wp-content/uploads/2026/03/sao_paulo_tch1-1.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-01.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-03.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-05.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-06.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-07.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-08.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-09.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-11.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-12.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-13.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-15.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-16.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-18.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-20.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-21.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-22.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-24.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CA-25.jpg"
      ]
    },
    {
      key: 'grandiosos',
      title: 'Grandiosos',
      desc: 'Réguas de proporções imponentes que ampliam e valorizam o espaço. Uma coleção que celebra o impacto do formato XL e a continuidade visual da madeira.',
      youtube: '',
      names: {
        1: 'Carvalho Europeu Smoke',
        2: 'Carvalho Europeu Naturalle',
        3: 'Carvalho Europeu Naturalle',
        4: 'Pinho de Riga Mont Blanc',
        5: 'Pinho de Riga Mont Blanc',
        6: 'Pinho de Riga',
        7: 'Pinho de Riga Mont Blanc',
        8: 'Carvalho Europeu Naturalle',
        9: 'Carvalho Europeu Mont Blanc',
        10: 'Pinho de Riga Mont Blanc'
      },
      remote: [
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-01.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-05.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-06.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-07.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-08.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-09.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-11.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-12.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-13.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_GR-03.jpg"
      ]
    },
    {
      key: 'pinho-de-riga',
      title: 'Pinho de Riga',
      desc: 'Resgatado de antigas construções europeias, o Pinho de Riga é sinônimo de história e resiliência. Uma madeira com alma que traz profundidade a qualquer projeto contemporâneo.',
      youtube: '',
      names: {
        1: 'Pinho de Riga',
        2: 'Pinho de Riga',
        3: 'Pinho de Riga',
        4: 'Pinho de Riga',
        5: 'Pinho de Riga',
        6: 'Pinho de Riga'
      },
      remote: [
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_PR-07.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_PR-02.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_PR-03.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_PR-04.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_PR-05.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_PR-06.jpg"
      ]
    },
    {
      key: 'classicos',
      title: 'Clássicos',
      desc: 'Padrões atemporais que definem a sofisticação residencial. Uma linha dedicada à elegância contínua que transcende tendências passageiras.',
      youtube: '',
      names: {
        1: 'Espinha de Peixe Baby Brey',
        2: 'Chevron em Carvalho Europeu Batman',
        3: 'Mosaico em Nogueira',
        4: 'Chevron Curve em Nogueira',
        5: 'Chevron em Carvalho Europeu Naturalle',
        6: 'Espinha de Peixe em Carvalho Europeu',
        7: 'Chevron em Carvalho Europeu Mont Blanc',
        8: 'Chevron em Carvalho Europeu Mont Blanc',
        9: 'Versalles em Carvalho Europeu Naturalle',
        10: 'Versalles em Carvalho Europeu Naturalle'
      },
      remote: [
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-02.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-03.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-05.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-06.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-04.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-07.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-01.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-08.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-09.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_CL-10.jpg"
      ]
    },
    {
      key: 'listone-giordano',
      title: 'Wood + Mármore',
      titleHtml: 'Wood + <span class="italic font-normal">Mármore</span>',
      desc: 'A fusão sublime entre a madeira nobre e a imponência mineral. Uma experiência tátil e visual única que redefine a elegância nos detalhes.',
      youtube: '',
      names: {
        1: 'Carvalho Europeu Smoke + Travertino Navona',
        2: 'Carvalho Europeu All Black + Carrara',
        3: 'Nogueira + Nero Marquina + Latão',
        4: 'Carvalho Europeu Naturalle + Travertino Navona',
        5: 'Nogueira + Latão',
        6: 'Carvalho Europeu Naturalle + Quartizitos Coloridos',
        7: 'Nogueira + Nero Marquina + Latão'
      },
      remote: [
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_MA-04.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_MA-05.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_MA-06.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_MA-07.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_MA-09.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_MA-10.jpg",
        "https://parket.com.br/wp-content/uploads/2025/10/PRO_PI_MA-11.jpg"
      ]
    }
  ];

  // Filter based on window.PISO_COLLECTION if specified
  const COLLECTIONS = typeof window !== 'undefined' && window.PISO_COLLECTION
    ? ALL_COLLECTIONS.filter(c => c.key === window.PISO_COLLECTION)
    : ALL_COLLECTIONS;

  function probe(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject();
      img.src = src;
    });
  }

  async function findLocalImages(folder) {
    const found = [];
    let consecutiveMisses = 0;
    for (let i = 1; i <= MAX_LOCAL_IMAGES; i++) {
      const num = String(i).padStart(2, '0');
      let hit = false;
      for (const ext of EXTS) {
        try {
          const src = await probe(`${folder}/${num}.${ext}`);
          found.push(src);
          hit = true;
          break;
        } catch { }
      }
      if (!hit) {
        consecutiveMisses++;
        if (consecutiveMisses >= 3) break;
      } else {
        consecutiveMisses = 0;
      }
    }
    return found;
  }

  // ── Lightbox (shared across all carousels) ──
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  let lbImages = [];
  let lbIndex = 0;

  window.openLightbox = (images, idx) => {
    lbImages = images;
    lbIndex = idx;
    lbImg.src = lbImages[lbIndex];
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  window.closeLightbox = () => {
    lb.classList.remove('active');
    document.body.style.overflow = 'auto';
  };
  window.lbNext = () => {
    lbIndex = (lbIndex + 1) % lbImages.length;
    lbImg.src = lbImages[lbIndex];
  };
  window.lbPrev = () => {
    lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
    lbImg.src = lbImages[lbIndex];
  };
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') { closeLightbox(); e.stopImmediatePropagation(); }
    if (e.key === 'ArrowRight') { lbNext(); e.stopImmediatePropagation(); }
    if (e.key === 'ArrowLeft') { lbPrev(); e.stopImmediatePropagation(); }
  });

  function buildSection(col, images) {
    const section = document.createElement('section');
    section.className = 'piso-section';
    section.id = col.key;
    section.innerHTML = `
    <div class="piso-header fade-up">
      <span class="font-label uppercase tracking-[0.5em] text-[10px] text-white/30 mb-6 block">Coleção</span>
      <h2 class="text-[29.28px] font-extralight tracking-[-0.04em] leading-[0.85] mb-8">${col.titleHtml || col.title}</h2>
      ${col.desc ? `<p class="text-white/40 text-lg font-light leading-relaxed max-w-2xl">${col.desc}</p>` : ''}
    </div>
    <div class="fade-up" style="transition-delay: 0.15s">
      <div class="carousel-viewport"></div>
      <div class="max-w-[900px] mx-auto">
        <div class="flex items-center gap-6 mt-6">
          <div class="progress-bar flex-1"><div class="progress-fill"></div></div>
        </div>
        <div class="thumb-track mt-6 justify-center"></div>
      </div>
    </div>
    ${col.youtube ? `
    <div class="fade-up video-section" style="transition-delay: 0.25s">
      <div class="video-section-header">
        <span class="video-section-eyebrow">Em movimento</span>
        <h3 class="video-section-title">Vídeos</h3>
      </div>
      <div class="video-block${col.youtubeShort ? ' vertical' : ''}" data-yt="${col.youtube}" role="button" aria-label="Reproduzir vídeo">
        <img class="video-poster" loading="lazy" decoding="async" src="${col.videoPoster || `https://i.ytimg.com/vi/${col.youtube}/${col.youtubeShort ? 'maxresdefault' : 'hqdefault'}.jpg`}" alt="Vídeo ${col.title}">
        <div class="video-play" aria-hidden="true"></div>
      </div>
    </div>` : ''}
  `;
    initCarousel(section, images, col.title, col.names || {});
    if (col.youtube) initLiteYouTube(section);
    return section;
  }

  function initLiteYouTube(section) {
    const block = section.querySelector('.video-block');
    if (!block) return;
    block.addEventListener('click', () => {
      const id = block.dataset.yt;
      if (!id) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
      iframe.title = 'Vídeo';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      block.replaceChildren(iframe);
    }, { once: true });
  }

  const carousels = [];

  function initCarousel(section, images, title, names) {
    const viewport = section.querySelector('.carousel-viewport');
    const thumbTrack = section.querySelector('.thumb-track');
    const progressFill = section.querySelector('.progress-fill');

    let current = 0;
    let timer = null;

    images.forEach((src, i) => {
      const name = names[i + 1];
      const altLabel = name || `${title} ${i + 1}`;
      const slide = document.createElement('div');
      slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
      slide.innerHTML = `
        <div class="slide-inner">
          <img decoding="async" src="${src}" alt="${altLabel}" loading="lazy">
          ${name ? `<div class="slide-caption">${name}</div>` : ''}
        </div>
      `;
      slide.addEventListener('click', () => openLightbox(images, i));
      viewport.appendChild(slide);

      const thumb = document.createElement('div');
      thumb.className = 'thumb' + (i === 0 ? ' active' : '');
      thumb.innerHTML = `<img decoding="async" src="${src}" alt="Thumb ${i + 1}" loading="lazy">`;
      thumb.addEventListener('click', () => goTo(i));
      thumbTrack.appendChild(thumb);
    });

    function goTo(idx) {
      if (idx < 0) idx = images.length - 1;
      if (idx >= images.length) idx = 0;
      current = idx;
      viewport.querySelectorAll('.carousel-slide').forEach((s, i) => {
        s.classList.toggle('active', i === current);
      });
      thumbTrack.querySelectorAll('.thumb').forEach((t, i) => {
        t.classList.toggle('active', i === current);
        if (i === current) { const tr = thumbTrack.getBoundingClientRect(), rr = t.getBoundingClientRect(); thumbTrack.scrollTo({ left: thumbTrack.scrollLeft + (rr.left - tr.left) - thumbTrack.clientWidth / 2 + rr.width / 2, behavior: 'smooth' }); }
      });
      progressFill.style.width = `${((current + 1) / images.length) * 100}%`;
      restart();
    }
    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    function start() {
      if (timer) return;
      timer = setInterval(next, 5500);
    }
    function stop() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }
    function restart() { stop(); start(); }

    viewport.addEventListener('mouseenter', stop);
    viewport.addEventListener('mouseleave', start);

    let touchStartX = 0;
    viewport.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    }, { passive: true });

    progressFill.style.width = `${(1 / images.length) * 100}%`;

    // Autoplay only when in view
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting ? start() : stop());
    }, { threshold: 0.25 });
    io.observe(section);

    carousels.push({ section, next, prev });
  }

  // ── Setas do teclado: navega o carrossel mais visível na tela ──
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (lb.classList.contains('active')) return; // lightbox tem suas próprias setas
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;

    const center = window.innerHeight / 2;
    let best = null;
    let bestDist = Infinity;
    for (const c of carousels) {
      const r = c.section.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) continue;
      const sectionCenter = r.top + r.height / 2;
      const dist = Math.abs(sectionCenter - center);
      if (dist < bestDist) { bestDist = dist; best = c; }
    }
    if (!best) return;
    e.preventDefault();
    e.key === 'ArrowRight' ? best.next() : best.prev();
  });

  async function init() {
    const container = document.getElementById('collections');
    for (let i = 0; i < COLLECTIONS.length; i++) {
      const col = COLLECTIONS[i];
      let images = [];
      if (col.remote && col.remote.length) {
        images = col.remote;
      } else if (col.localFolder) {
        images = await findLocalImages(col.localFolder);
      }
      if (!images.length) continue;

      container.appendChild(buildSection(col, images));

      if (i < COLLECTIONS.length - 1) {
        const div = document.createElement('div');
        div.className = 'section-divider';
        div.innerHTML = '<div></div>';
        container.appendChild(div);
      }
    }

    // Fade-up observer
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  }

  window.addEventListener('load', init);
})();
