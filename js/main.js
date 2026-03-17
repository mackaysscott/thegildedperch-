// ============================================================
//  THE GILDED PERCH — Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR SCROLL BEHAVIOUR ────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ── MOBILE MENU ────────────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── SET ACTIVE NAV LINK ────────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && href.includes(currentPath) && currentPath !== '') {
      link.classList.add('active');
    }
  });

  // ── HERO PARTICLES ─────────────────────────────────────────
  const heroParticles = document.getElementById('heroParticles');
  if (heroParticles) {
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left            = `${Math.random() * 100}%`;
      p.style.width           = `${Math.random() * 3 + 1}px`;
      p.style.height          = p.style.width;
      p.style.animationDelay  = `${Math.random() * 20}s`;
      p.style.animationDuration = `${Math.random() * 15 + 10}s`;
      heroParticles.appendChild(p);
    }
  }

  // ── SCROLL REVEAL ──────────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── FEATURED PARROTS (Homepage) ────────────────────────────
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid && typeof PARROTS !== 'undefined') {
    const featured = PARROTS.filter(p => p.featured).slice(0, 6);
    featuredGrid.innerHTML = featured.map((p, i) =>
      buildCard(p, `stagger-${(i % 4) + 1}`)
    ).join('');
    addCardListeners(featuredGrid);
  }

  // ── SHOP GRID ──────────────────────────────────────────────
  const shopGrid     = document.getElementById('shopGrid');
  const resultCount  = document.getElementById('resultCount');
  const filterSpecies = document.getElementById('filterSpecies');
  const filterPrice   = document.getElementById('filterPrice');
  const filterAge     = document.getElementById('filterAge');
  const filterGender  = document.getElementById('filterGender');

  if (shopGrid && typeof PARROTS !== 'undefined') {
    // Build species options
    if (filterSpecies) {
      const speciesList = [...new Set(PARROTS.map(p => p.species))].sort();
      speciesList.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        filterSpecies.appendChild(opt);
      });
    }

    const renderShop = () => {
      let birds = [...PARROTS];

      if (filterSpecies && filterSpecies.value)
        birds = birds.filter(p => p.species === filterSpecies.value);

      if (filterPrice && filterPrice.value) {
        const [min, max] = filterPrice.value.split('-').map(Number);
        birds = birds.filter(p => max ? p.price >= min && p.price <= max : p.price >= min);
      }

      if (filterAge && filterAge.value) {
        const [min, max] = filterAge.value.split('-').map(Number);
        birds = birds.filter(p => max ? p.ageMonths >= min && p.ageMonths <= max : p.ageMonths >= min);
      }

      if (filterGender && filterGender.value)
        birds = birds.filter(p => p.gender === filterGender.value);

      if (resultCount) {
        resultCount.innerHTML = `<strong>${birds.length}</strong> parrot${birds.length !== 1 ? 's' : ''} found`;
      }

      if (birds.length === 0) {
        shopGrid.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">🦜</div>
            <h3>No parrots match your filters</h3>
            <p>Try adjusting your search criteria.</p>
          </div>`;
        return;
      }

      shopGrid.innerHTML = birds.map((p, i) => buildCard(p, `stagger-${(i % 4) + 1}`)).join('');
      addCardListeners(shopGrid);

      // Re-observe new cards
      shopGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    };

    [filterSpecies, filterPrice, filterAge, filterGender].forEach(f => {
      if (f) f.addEventListener('change', renderShop);
    });

    const clearBtn = document.getElementById('clearFilters');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        [filterSpecies, filterPrice, filterAge, filterGender].forEach(f => {
          if (f) f.value = '';
        });
        renderShop();
      });
    }

    renderShop();
  }

  // ── SPECIES GRID ───────────────────────────────────────────
  const speciesGrid = document.getElementById('speciesGrid');
  if (speciesGrid && typeof PARROTS !== 'undefined') {
    const slug = speciesGrid.dataset.slug;
    const birds = slug ? PARROTS.filter(p => p.speciesSlug === slug) : PARROTS;
    speciesGrid.innerHTML = birds.map(p => buildCard(p)).join('');
    addCardListeners(speciesGrid);
    speciesGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  // ── SINGLE PARROT PAGE ─────────────────────────────────────
  const parrotDetail = document.getElementById('parrotDetail');
  if (parrotDetail && typeof PARROTS !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const id     = parseInt(params.get('id'));
    const parrot = PARROTS.find(p => p.id === id);

    if (parrot) {
      // Update page title & meta
      document.title = `${parrot.name} — ${parrot.species} | The Gilded Perch`;
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        `${parrot.name} is a ${parrot.age} ${parrot.gender} ${parrot.species} available at The Gilded Perch for $${parrot.price.toLocaleString()}.`
      );

      // Breadcrumb
      const bc = document.getElementById('parrotBreadcrumb');
      if (bc) {
        bc.innerHTML = `
          <a href="index.html">Home</a><span class="sep">›</span>
          <a href="shop.html">Parrots</a><span class="sep">›</span>
          <span>${parrot.name}</span>`;
      }

      // Image
      const img = document.getElementById('parrotImg');
      if (img) { img.src = parrot.img; img.alt = `${parrot.name} the ${parrot.species}`; }

      // Info fields
      const setId = (elId, val) => {
        const el = document.getElementById(elId);
        if (el) el.textContent = val;
      };
      setId('parrotName',    parrot.name);
      setId('parrotSpecies', parrot.species);
      setId('parrotPriceTxt', `$${parrot.price.toLocaleString()}`);
      setId('parrotAge',     parrot.age);
      setId('parrotGender',  parrot.gender);
      setId('parrotHealth',  parrot.healthStatus);
      setId('parrotDesc',    parrot.description);

      // Modal bird name
      const mbn = document.getElementById('modalBirdName');
      if (mbn) mbn.textContent = `${parrot.name} (${parrot.species})`;

      // Suggested birds
      const suggestedGrid = document.getElementById('suggestedGrid');
      if (suggestedGrid) {
        const suggested = PARROTS
          .filter(p => p.id !== parrot.id && p.speciesSlug === parrot.speciesSlug)
          .slice(0, 3);
        if (suggested.length < 3) {
          const more = PARROTS.filter(p => p.id !== parrot.id && !suggested.includes(p)).slice(0, 3 - suggested.length);
          suggested.push(...more);
        }
        suggestedGrid.innerHTML = suggested.map(p => buildCard(p)).join('');
        addCardListeners(suggestedGrid);
      }
    } else {
      parrotDetail.innerHTML = `
        <div style="text-align:center;padding:6rem 2rem;">
          <p style="font-size:3rem;margin-bottom:1rem;">🦜</p>
          <h2>Parrot not found</h2>
          <p style="color:var(--text-muted);margin:1rem 0 2rem;">This bird may have found a home already.</p>
          <a href="shop.html" class="btn btn-gold">View All Parrots</a>
        </div>`;
    }
  }

  // ── REVIEWS SLIDER ─────────────────────────────────────────
  const sliderTrack = document.getElementById('reviewsTrack');
  if (sliderTrack && typeof REVIEWS !== 'undefined') {
    sliderTrack.innerHTML = REVIEWS.map(r => buildReviewCard(r)).join('');

    let currentIndex = 0;
    const cards  = sliderTrack.querySelectorAll('.review-card');
    const dots   = document.getElementById('sliderDots');
    const btnPrev = document.getElementById('sliderPrev');
    const btnNext = document.getElementById('sliderNext');

    // Build dots
    if (dots) {
      REVIEWS.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'slider-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => goTo(i));
        dots.appendChild(d);
      });
    }

    const getVisible = () => window.innerWidth <= 768 ? 1 : window.innerWidth <= 1200 ? 2 : 3;

    const goTo = (idx) => {
      const vis = getVisible();
      const max = Math.max(0, REVIEWS.length - vis);
      currentIndex = Math.max(0, Math.min(idx, max));

      const cardWidth  = cards[0]?.offsetWidth || 420;
      const gapWidth   = 24;
      sliderTrack.style.transform = `translateX(-${currentIndex * (cardWidth + gapWidth)}px)`;

      if (dots) {
        dots.querySelectorAll('.slider-dot').forEach((d, i) => {
          d.classList.toggle('active', i === currentIndex);
        });
      }
    };

    if (btnPrev) btnPrev.addEventListener('click', () => goTo(currentIndex - 1));
    if (btnNext) btnNext.addEventListener('click', () => goTo(currentIndex + 1));
    window.addEventListener('resize', () => goTo(currentIndex));

    // Auto-advance
    setInterval(() => goTo(currentIndex + 1 > REVIEWS.length - getVisible() ? 0 : currentIndex + 1), 6000);
  }

  // Full reviews page
  const reviewsFullGrid = document.getElementById('reviewsFullGrid');
  if (reviewsFullGrid && typeof REVIEWS !== 'undefined') {
    reviewsFullGrid.innerHTML = REVIEWS.map(r => `
      <div class="review-full-card reveal">
        <div class="review-stars">${'★'.repeat(r.rating)}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-footer">
          <div class="review-avatar">${r.avatar}</div>
          <div>
            <div class="review-author-name">${r.name}</div>
            <div class="review-author-sub">${r.location} · ${r.date}</div>
          </div>
          <span class="review-bird-badge">${r.bird}</span>
        </div>
      </div>`).join('');
    reviewsFullGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  // ── RESERVATION MODAL ──────────────────────────────────────
  const modalOverlay = document.getElementById('reservationModal');
  const openBtn      = document.getElementById('openReservation');
  const closeBtn     = document.getElementById('modalClose');

  const openModal  = () => { modalOverlay?.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { modalOverlay?.classList.remove('open'); document.body.style.overflow = ''; };

  openBtn?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Form submission (Formspree)
  const reserveForm = document.getElementById('reserveForm');
  if (reserveForm) {
    reserveForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = reserveForm.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(reserveForm);
        const response = await fetch(reserveForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          reserveForm.style.display = 'none';
          const success = document.getElementById('formSuccess');
          if (success) success.style.display = 'block';
        } else {
          showToast('❌ Something went wrong. Please try again.');
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      } catch (err) {
        showToast('❌ Network error. Please try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          showToast('✅ Message sent! We\'ll be in touch soon.');
          contactForm.reset();
        } else {
          showToast('❌ Please try again or email us directly.');
        }
      } catch {
        showToast('❌ Network error. Please email us directly.');
      }
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
  }

  // ── ANIMATED COUNTER ───────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current.toLocaleString() + suffix;
          if (current >= target) clearInterval(timer);
        }, 30);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  // ── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-h')) || 72;
        window.scrollTo({ top: target.offsetTop - offset - 20, behavior: 'smooth' });
      }
    });
  });

  // ── LAZY LOADING IMAGES ────────────────────────────────────
  if ('IntersectionObserver' in window) {
    const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    const imgObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });
    lazyImgs.forEach(img => imgObserver.observe(img));
  }

});

// ── HELPER: BUILD PARROT CARD HTML ─────────────────────────
function buildCard(parrot, stagger = '') {
  const pathPrefix = window.location.pathname.includes('/species/') ? '../' : '';
  return `
    <article class="parrot-card reveal ${stagger}" data-id="${parrot.id}">
      <div class="parrot-card-img-wrap">
        <img class="parrot-card-img" src="${parrot.img}" alt="${parrot.name} the ${parrot.species}" loading="lazy" width="600" height="600">
        <span class="card-badge available">Available</span>
      </div>
      <div class="parrot-card-body">
        <div class="parrot-card-species">${parrot.species}</div>
        <h3 class="parrot-card-name">${parrot.name}</h3>
        <div class="parrot-card-meta">
          <span class="meta-item"><span class="meta-icon">🗓</span>${parrot.age}</span>
          <span class="meta-item"><span class="meta-icon">${parrot.gender === 'Male' ? '♂' : '♀'}</span>${parrot.gender}</span>
        </div>
        <div class="parrot-card-price"><span class="price-currency">$</span>${parrot.price.toLocaleString()}</div>
        <a href="${pathPrefix}parrot.html?id=${parrot.id}" class="btn btn-outline btn-full btn-sm">View Details</a>
      </div>
    </article>`;
}

// ── HELPER: ADD CARD LISTENERS ──────────────────────────────
function addCardListeners(container) {
  container.querySelectorAll('.parrot-card').forEach(card => {
    card.querySelector('.btn')?.addEventListener('click', (e) => e.stopPropagation());
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const prefix = window.location.pathname.includes('/species/') ? '../' : '';
      window.location.href = `${prefix}parrot.html?id=${id}`;
    });
  });
}

// ── HELPER: BUILD REVIEW CARD ───────────────────────────────
function buildReviewCard(r) {
  return `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-footer">
        <div class="review-avatar">${r.avatar}</div>
        <div>
          <div class="review-author-name">${r.name}</div>
          <div class="review-author-sub">${r.location} · ${r.date}</div>
        </div>
        <span class="review-bird-badge">${r.bird}</span>
      </div>
    </div>`;
}

// ── HELPER: TOAST NOTIFICATION ──────────────────────────────
function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">🦜</span>${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ============================================================
//  EXTENDED PAGE LOGIC — inner pages added in v2
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // ── PARROT DETAIL PAGE (parrot.html) ───────────────────────
  const parrotLayout = document.getElementById('parrotLayout');
  const parrotNotFound = document.getElementById('parrotNotFound');
  if (parrotLayout) {
    const params = new URLSearchParams(window.location.search);
    const id     = parseInt(params.get('id'), 10);
    const parrot = (typeof PARROTS !== 'undefined') ? PARROTS.find(p => p.id === id) : null;

    if (parrot) {
      // Update page title
      document.title = `${parrot.name} — ${parrot.species} | The Gilded Perch`;

      // Breadcrumb
      const crumb = document.getElementById('breadcrumbName');
      if (crumb) crumb.textContent = parrot.name;

      // Image & badge
      const img = document.getElementById('parrotImg');
      if (img) { img.src = parrot.img; img.alt = `${parrot.name} — ${parrot.species}`; }
      const badge = document.getElementById('parrotBadge');
      if (badge) badge.textContent = parrot.featured ? 'Featured' : '';

      // Text fields
      const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      setText('parrotSpeciesLabel', parrot.species);
      setText('parrotName', parrot.name);
      setText('parrotPrice', `$${parrot.price.toLocaleString()}`);
      setText('specSpecies', parrot.species);
      setText('specAge', parrot.age);
      setText('specGender', parrot.gender);
      setText('specHealthText', parrot.healthStatus);
      setText('parrotDesc', parrot.description);
      setText('modalBirdName', `${parrot.name} (${parrot.species})`);

      // Hidden form fields
      const fbn = document.getElementById('formBirdName');
      const fbi = document.getElementById('formBirdId');
      if (fbn) fbn.value = parrot.name;
      if (fbi) fbi.value = parrot.id;

      // Reserve button on single page
      const singleReserveBtn = document.getElementById('singleReserveBtn');
      if (singleReserveBtn) {
        singleReserveBtn.addEventListener('click', () => openReservationModal(parrot));
      }

      // Suggested birds
      const suggestedSection = document.getElementById('suggestedSection');
      const suggestedGrid    = document.getElementById('suggestedGrid');
      if (suggestedGrid && typeof PARROTS !== 'undefined') {
        let suggested = PARROTS.filter(p => p.id !== parrot.id && p.speciesSlug === parrot.speciesSlug).slice(0, 3);
        if (suggested.length < 3) {
          const more = PARROTS.filter(p => p.id !== parrot.id && !suggested.includes(p)).slice(0, 3 - suggested.length);
          suggested = [...suggested, ...more];
        }
        suggestedGrid.innerHTML = suggested.map(p => buildCard(p)).join('');
        addCardListeners(suggestedGrid);
        if (suggestedSection) suggestedSection.style.display = 'block';
      }

      // Share button
      const shareBtn = document.getElementById('shareBtn');
      if (shareBtn) {
        shareBtn.addEventListener('click', () => {
          navigator.clipboard?.writeText(window.location.href)
            .then(() => showToast('Link copied to clipboard!'));
        });
      }

      parrotLayout.style.display = 'grid';
    } else {
      if (parrotNotFound) parrotNotFound.style.display = 'flex';
    }
  }

  // ── SHOP PAGE (shop.html) — filter bar ─────────────────────
  const shopGrid   = document.getElementById('shopGrid');
  const resultsCount = document.getElementById('resultsCount');
  const noResults  = document.getElementById('noResults');

  if (shopGrid && typeof PARROTS !== 'undefined') {
    const renderShop = (birds) => {
      if (birds.length === 0) {
        shopGrid.innerHTML = '';
        if (noResults)  noResults.style.display  = 'block';
        if (resultsCount) resultsCount.textContent = 'No parrots found';
      } else {
        shopGrid.innerHTML = birds.map(p => buildCard(p)).join('');
        addCardListeners(shopGrid);
        shopGrid.querySelectorAll('.reveal').forEach(el => {
          el.classList.add('revealed');
        });
        if (noResults)  noResults.style.display  = 'none';
        if (resultsCount) {
          resultsCount.textContent = birds.length === PARROTS.length
            ? `Showing all ${PARROTS.length} parrots`
            : `Showing ${birds.length} of ${PARROTS.length} parrots`;
        }
      }
    };

    const applyFilters = () => {
      const speciesFilter = document.getElementById('filterSpecies')?.value || '';
      const priceFilter   = parseFloat(document.getElementById('filterPrice')?.value)  || Infinity;
      const ageFilter     = parseFloat(document.getElementById('filterAge')?.value)    || Infinity;
      const genderFilter  = document.getElementById('filterGender')?.value || '';

      const filtered = PARROTS.filter(p => {
        const matchSpecies = !speciesFilter || p.species.includes(speciesFilter);
        const matchPrice   = p.price  <= priceFilter;
        const matchGender  = !genderFilter  || p.gender === genderFilter;
        let matchAge = true;
        if (ageFilter !== Infinity) {
          if (ageFilter === 99) {
            matchAge = p.ageMonths >= 48;
          } else {
            matchAge = p.ageMonths <= ageFilter;
          }
        }
        return matchSpecies && matchPrice && matchAge && matchGender;
      });
      renderShop(filtered);
    };

    ['filterSpecies','filterPrice','filterAge','filterGender'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });

    const clearFn = () => {
      ['filterSpecies','filterPrice','filterAge','filterGender'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      applyFilters();
    };
    document.getElementById('clearFilters')?.addEventListener('click',  clearFn);
    document.getElementById('clearFilters2')?.addEventListener('click', clearFn);

    // Initial render
    renderShop(PARROTS);
  }

  // ── SPECIES PAGE — render birds grid ───────────────────────
  const speciesBirdsGrid = document.getElementById('speciesBirdsGrid');
  if (speciesBirdsGrid && typeof PARROTS !== 'undefined') {
    const species = speciesBirdsGrid.dataset.species || '';
    let birds;
    // macaws slug covers both Blue and Gold Macaw and Scarlet Macaw
    if (species.toLowerCase() === 'macaws') {
      birds = PARROTS.filter(p => p.speciesSlug === 'macaws');
    } else {
      birds = PARROTS.filter(p =>
        p.species.toLowerCase().includes(species.toLowerCase()) ||
        p.speciesSlug.toLowerCase() === species.toLowerCase()
      );
    }
    if (birds.length > 0) {
      speciesBirdsGrid.innerHTML = birds.map(p => buildCard(p)).join('');
      addCardListeners(speciesBirdsGrid);
    } else {
      speciesBirdsGrid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);">
          <p>No birds currently available in this species. <a href="../shop.html" style="color:var(--accent);">Browse all parrots</a>.</p>
        </div>`;
    }
  }

  // ── ALL REVIEWS PAGE ────────────────────────────────────────
  const allReviewsGrid = document.getElementById('allReviewsGrid');
  if (allReviewsGrid && typeof REVIEWS !== 'undefined') {
    allReviewsGrid.innerHTML = REVIEWS.map(r => `
      <article class="review-card-full reveal" itemscope itemtype="https://schema.org/Review">
        <div class="review-card-header">
          <div class="reviewer-avatar">${r.avatar}</div>
          <div class="reviewer-info">
            <strong class="reviewer-name" itemprop="author">${r.name}</strong>
            <span class="reviewer-location">${r.location}</span>
          </div>
          <div class="review-stars" aria-label="${r.rating} stars">${'★'.repeat(r.rating)}</div>
        </div>
        <p class="review-text" itemprop="reviewBody">"${r.text}"</p>
        <div class="review-footer">
          <span class="review-bird">Bird: ${r.bird}</span>
          <time class="review-date" itemprop="datePublished">${r.date}</time>
        </div>
      </article>`).join('');
    // Trigger reveal on these newly added elements
    allReviewsGrid.querySelectorAll('.reveal').forEach(el => {
      if (typeof revealObserver !== 'undefined') revealObserver.observe(el);
    });
  }

  // ── SHARED RESERVATION MODAL (all pages) ───────────────────
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose   = document.getElementById('modalClose');
  const reserveForm  = document.getElementById('reservationForm');

  const openReservationModal = (parrot) => {
    if (!modalOverlay) return;
    if (parrot) {
      const mbn = document.getElementById('modalBirdName');
      const fbn = document.getElementById('formBirdName');
      const fbi = document.getElementById('formBirdId');
      if (mbn) mbn.textContent = `${parrot.name} (${parrot.species})`;
      if (fbn) fbn.value = parrot.name;
      if (fbi) fbi.value = parrot.id;
    }
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => modalOverlay.classList.add('open'), 10);
  };
  window.openReservationModal = openReservationModal;

  const closeReservationModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    setTimeout(() => {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
  };

  modalClose?.addEventListener('click', closeReservationModal);
  modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeReservationModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeReservationModal(); });

  // Reserve buttons on shop/species pages
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.reserve-btn');
    if (!btn) return;
    const cardEl = btn.closest('[data-id]');
    const pid    = cardEl ? parseInt(cardEl.dataset.id, 10) : null;
    const parrot = pid && typeof PARROTS !== 'undefined' ? PARROTS.find(p => p.id === pid) : null;
    openReservationModal(parrot);
  });

  // Form submission — Formspree + EmailJS dual send
  if (reserveForm) {
    reserveForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('reserveSubmitBtn');
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

      const fd = new FormData(reserveForm);
      const birdId   = parseInt(fd.get('bird_id'), 10);
      const birdObj  = (typeof PARROTS !== 'undefined') ? PARROTS.find(p => p.id === birdId) : null;
      const templateParams = {
        to_email     : 'gildedperch@gmail.com',
        bird_name    : fd.get('bird_name')              || '',
        bird_img     : birdObj ? birdObj.img            : '',
        bird_species : birdObj ? birdObj.species        : '',
        bird_age     : birdObj ? birdObj.age            : '',
        bird_gender  : birdObj ? birdObj.gender         : '',
        bird_price   : birdObj ? '$' + birdObj.price.toLocaleString() : '',
        from_name    : fd.get('name')                   || '',
        from_email   : fd.get('email')                  || '',
        phone        : fd.get('phone')                  || '',
        country      : fd.get('country')                || '',
        message      : fd.get('message')                || ''
      };

      try {
        // Primary — Formspree
        const res = await fetch(reserveForm.action, {
          method: 'POST',
          body: fd,
          headers: { Accept: 'application/json' }
        });

        // Notify owner
        if (typeof emailjs !== 'undefined') {
          emailjs.send('service_ftpqzg8', 'template_17jtxon', templateParams)
            .catch(err => console.warn('EmailJS owner:', err));
          // Confirmation to buyer
          const buyerParams = { ...templateParams, to_email: templateParams.from_email };
          emailjs.send('service_ftpqzg8', 'template_miuqovl', buyerParams)
            .catch(err => console.warn('EmailJS buyer:', err));
        }

        if (res.ok) {
          reserveForm.style.display = 'none';
          const success = document.getElementById('formSuccess');
          if (success) success.style.display = 'flex';
        } else {
          if (btn) { btn.textContent = 'Send Reservation Request'; btn.disabled = false; }
          showToast('Something went wrong. Please try again.');
        }
      } catch {
        if (btn) { btn.textContent = 'Send Reservation Request'; btn.disabled = false; }
        showToast('Network error. Please check your connection.');
      }
    });
  }

  // ── ANIMATED COUNTERS ───────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el  = entry.target;
          const end = parseInt(el.dataset.count, 10);
          const suffix = el.textContent.includes('%') ? '%' : '';
          let current = 0;
          const step  = Math.ceil(end / 60);
          const timer = setInterval(() => {
            current = Math.min(current + step, end);
            el.textContent = current + suffix;
            if (current >= end) clearInterval(timer);
          }, 20);
          cObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObserver.observe(c));
  }

}); // end DOMContentLoaded v2
