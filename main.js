/**
 * main.js
 * High-Performance Vanilla JS Portfolio with Pastily Warm Minimalist Theme
 * Author: Harsh M Shah (Senior Flutter Developer)
 */

// --- DATA DEFINITIONS ---

const personalInfo = {
    name: "Harsh M Shah",
    title: "Senior Flutter Developer",
    location: "Gujarat, India",
    experience: "4+ years",
    projectsDelivered: "25+",
    bio: "Experienced Flutter Developer with 4+ years of expertise in building scalable, high-performance cross-platform mobile applications. Specialized in fintech, EV charging networks, on-device AI/OCR, live streaming platforms, HRMS, marketplaces, and real-time systems."
};

const workExperience = [
    {
        company: "Sanshray IT Solutions LLP",
        role: "Senior Mobile Application Developer",
        duration: "Jan 2025 - Present",
        type: "Full-time",
        desc: "Leading mobile app architecture and implementing scalable cross-platform solutions with Clean Architecture. Driving adoption of Riverpod 2.0, multimodal AI/OCR pipelines, live streaming backends, and real-time data synchronization."
    },
    {
        company: "Kody Technolab LTD",
        role: "Flutter Developer",
        duration: "Dec 2021 - Jan 2025",
        type: "Full-time",
        desc: "Contributed to full lifecycle development—from MVP to release—for multiple B2B and B2C products across robotics, fintech, e-learning, and IoT. Integrated hardware-level communications (BLE, thermal printers, face matching)."
    }
];

const certifications = [
    { 
        title: "Flutter Certified Professional", 
        org: "ILDC - IndiaNIC Infotech Ltd.", 
        date: "Aug 2021 - Nov 2021",
        desc: "Comprehensive Flutter App Development Certification covering advanced mobile UI/UX and native performance."
    },
    { 
        title: "Responsive Web Design Developer", 
        org: "freeCodeCamp.org", 
        date: "May 2021 - Jun 2021",
        desc: "300 hours of coursework in modern responsive design, HTML5, and CSS3 architectures."
    },
    { 
        title: "Programming for Everybody (Python)", 
        org: "University of Michigan (Coursera)", 
        date: "Jun 2020 - Aug 2020",
        desc: "Python data structures, networked application programming, and backend automation fundamentals."
    }
];

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    initPhoneClock();
    bindContactActions();
    initDynamicIsland();
    initPhoneSimulator();
    initSimulatorTheater();
    initProjectsSection();
    initOpenSourceSection();
    initTimelineSection();
    initModalEvents();
    initThreeJS();
    initGSAP();
    initLenis();

    // Hide Preloader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 1000);
});

// --- PHONE CLOCK ---
function initPhoneClock() {
    const timeEl = document.getElementById('live-phone-time');
    if (!timeEl) return;
    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        timeEl.textContent = `${hours}:${minutes}`;
    };
    updateTime();
    setInterval(updateTime, 30000);
}

// --- PASTILY DYNAMIC ISLAND NAVBAR ---
function initDynamicIsland() {
    const island = document.getElementById('dynamic-island');
    const label = document.getElementById('compact-nav-label');
    const progressBar = document.getElementById('nav-progress-bar');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileSheet = document.getElementById('mobile-sheet');
    const sheetClose = document.getElementById('mobile-sheet-close');
    const sheetLinks = document.querySelectorAll('.sheet-link');

    if (!island) return;

    // Scroll listener for collapsing and scroll progress
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = totalHeight > 0 ? (scrollY / totalHeight) : 0;

        // Dynamic collapse
        if (scrollY > 90) {
            island.setAttribute('data-state', 'compact');
        } else {
            island.setAttribute('data-state', 'expanded');
        }

        // Update circular progress ring
        if (progressBar) {
            const circumference = 2 * Math.PI * 15; // r=15 -> 94.25
            const offset = circumference - (scrollProgress * circumference);
            progressBar.style.strokeDashoffset = offset;
        }

        // Active Section Scroll Spy
        const sections = [
            { id: 'hero', name: 'Overview' },
            { id: 'skills', name: 'Stack' },
            { id: 'projects', name: 'Apps' },
            { id: 'opensource', name: 'Open Source' },
            { id: 'experience', name: 'Timeline' },
            { id: 'contact', name: 'Connect' }
        ];

        let currentSectionName = 'Harsh Shah';
        for (const sec of sections) {
            const el = document.getElementById(sec.id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 200 && rect.bottom >= 100) {
                    currentSectionName = sec.name;
                    document.querySelectorAll('.nav-link').forEach(link => {
                        if (link.getAttribute('href') === `#${sec.id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                    break;
                }
            }
        }
        if (label) label.textContent = currentSectionName;
    });

    // Reset URL hash if pointing to isolated showcase to return to default full view
    if (window.location.hash === '#interactive-showcase') {
        history.replaceState(null, null, 'index.html#hero');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    // Universal smooth scroll handler that always prevents horizontal shifting
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#interactive-showcase') {
                e.preventDefault();
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                return;
            }
            const targetId = href.substring(1);
            const targetElem = document.getElementById(targetId);
            if (targetElem) {
                e.preventDefault();
                const yOffset = -30;
                const y = targetElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: Math.max(0, y), left: 0, behavior: 'smooth' });
                if (history.pushState) {
                    history.pushState(null, null, `#${targetId}`);
                }
            }
        });
    });

    // Mobile Sheet Actions
    if (mobileToggle && mobileSheet) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileSheet.classList.toggle('is-open');
            mobileToggle.setAttribute('aria-expanded', mobileSheet.classList.contains('is-open'));
        });

        if (sheetClose) {
            sheetClose.addEventListener('click', () => {
                mobileSheet.classList.remove('is-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        }

        sheetLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileSheet.classList.remove('is-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (e) => {
            if (!mobileSheet.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileSheet.classList.remove('is-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// --- INTERACTIVE SMARTPHONE SIMULATOR ---
let simActiveProjectIndex = 0;
let simActiveScreenshotIndex = 0;
let simFeaturedProjects = [];

function initPhoneSimulator() {
    if (typeof portfolioProjects === 'undefined' || !portfolioProjects.length) return;

    // Filter top apps with available screenshots
    simFeaturedProjects = portfolioProjects.filter(p => p.screenshots && p.screenshots.length > 0);
    if (!simFeaturedProjects.length) simFeaturedProjects = portfolioProjects.slice(0, 6);

    const tabsContainer = document.getElementById('simulator-app-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';
    simFeaturedProjects.forEach((proj, idx) => {
        const tabBtn = document.createElement('button');
        tabBtn.type = 'button';
        tabBtn.className = `phone-tab-btn ${idx === 0 ? 'active' : ''}`;
        tabBtn.textContent = proj.title.replace(/^[^\w]+/, '').trim().split(' ')[0];
        tabBtn.title = proj.title;
        tabBtn.addEventListener('click', () => {
            simActiveProjectIndex = idx;
            simActiveScreenshotIndex = 0;
            updatePhoneSimulatorView();
            document.querySelectorAll('.phone-tab-btn').forEach((btn, i) => {
                btn.classList.toggle('active', i === idx);
            });
        });
        tabsContainer.appendChild(tabBtn);
    });

    const prevBtn = document.getElementById('sim-prev');
    const nextBtn = document.getElementById('sim-next');
    const detailsBtn = document.getElementById('sim-open-details');

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const proj = simFeaturedProjects[simActiveProjectIndex];
            if (!proj || !proj.screenshots || proj.screenshots.length <= 1) return;
            simActiveScreenshotIndex = (simActiveScreenshotIndex - 1 + proj.screenshots.length) % proj.screenshots.length;
            updatePhoneSimulatorScreenshot();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const proj = simFeaturedProjects[simActiveProjectIndex];
            if (!proj || !proj.screenshots || proj.screenshots.length <= 1) return;
            simActiveScreenshotIndex = (simActiveScreenshotIndex + 1) % proj.screenshots.length;
            updatePhoneSimulatorScreenshot();
        });
    }

    if (detailsBtn) {
        detailsBtn.addEventListener('click', () => {
            const proj = simFeaturedProjects[simActiveProjectIndex];
            if (proj) openProjectModal(proj.id);
        });
    }

    updatePhoneSimulatorView();
}

function updatePhoneSimulatorView() {
    const proj = simFeaturedProjects[simActiveProjectIndex];
    if (!proj) return;

    const titleEl = document.getElementById('sim-app-title');
    const tagEl = document.getElementById('sim-app-tag');
    const descEl = document.getElementById('sim-app-desc');

    if (titleEl) titleEl.textContent = proj.title.replace(/^[^\w]+/, '').trim();
    if (tagEl) tagEl.textContent = (proj.tags && proj.tags[0]) ? proj.tags[0] : 'Flutter App';
    if (descEl) descEl.textContent = proj.description;

    updatePhoneSimulatorScreenshot();
}

function updatePhoneSimulatorScreenshot() {
    const proj = simFeaturedProjects[simActiveProjectIndex];
    if (!proj) return;

    const imgEl = document.getElementById('sim-active-img');
    const counterEl = document.getElementById('sim-counter');

    const totalScreens = (proj.screenshots && proj.screenshots.length) ? proj.screenshots.length : 1;
    if (counterEl) counterEl.textContent = `${simActiveScreenshotIndex + 1}/${totalScreens}`;

    if (imgEl) {
        if (proj.screenshots && proj.screenshots.length > 0) {
            imgEl.style.opacity = '0';
            setTimeout(() => {
                imgEl.src = proj.screenshots[simActiveScreenshotIndex];
                imgEl.style.opacity = '1';
            }, 140);
        } else {
            imgEl.src = 'assets/project_mockup/rewardstack/screen_1.webp';
            imgEl.style.opacity = '1';
        }
    }
}

// --- FULLSCREEN SIMULATOR THEATER FOCUS VIEW ---
function initSimulatorTheater() {
    const expandBtn = document.getElementById('sim-expand-btn');
    const theaterOverlay = document.getElementById('sim-theater-overlay');
    const backdrop = document.getElementById('sim-theater-backdrop');
    const backBtn = document.getElementById('sim-theater-back');
    const closeBtn = document.getElementById('sim-theater-close');
    const stageContainer = document.getElementById('sim-theater-stage');
    const phoneWrapper = document.querySelector('.phone-mockup-wrapper');
    const interactiveFrame = document.getElementById('sim-interactive-frame') || document.getElementById('phone-mockup');

    if (!theaterOverlay || !interactiveFrame) return;

    function openSimulatorTheater() {
        theaterOverlay.classList.remove('hidden');
        if (stageContainer && interactiveFrame) {
            stageContainer.appendChild(interactiveFrame);
        }
        document.body.style.overflow = 'hidden';
    }

    function closeSimulatorTheater() {
        theaterOverlay.classList.add('hidden');
        if (phoneWrapper && interactiveFrame) {
            phoneWrapper.appendChild(interactiveFrame);
        }
        document.body.style.overflow = '';
    }

    if (expandBtn) expandBtn.addEventListener('click', openSimulatorTheater);
    if (backBtn) backBtn.addEventListener('click', closeSimulatorTheater);
    if (closeBtn) closeBtn.addEventListener('click', closeSimulatorTheater);
    if (backdrop) backdrop.addEventListener('click', closeSimulatorTheater);

    // Global Esc key listener
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            if (theaterOverlay && !theaterOverlay.classList.contains('hidden')) {
                closeSimulatorTheater();
            }
        }
    });
}

// --- PROJECTS ARCHIVE & SPACES CATEGORY FILTER ---
let currentCategory = 'all';
let isProjectsExpanded = false;

function initProjectsSection() {
    renderCategoryCounts();
    renderFilteredProjects();

    const filterChips = document.querySelectorAll('.space-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.getAttribute('data-filter');
            isProjectsExpanded = false;
            renderFilteredProjects();
        });
    });
}

function renderCategoryCounts() {
    if (typeof portfolioProjects === 'undefined') return;

    const counts = {
        all: portfolioProjects.length,
        featured: portfolioProjects.filter(p => p.isFeatured).length,
        ai: portfolioProjects.filter(p => hasTagOrTech(p, ['ai', 'ocr', 'gemini', 'ml kit', 'tensorflow'])).length,
        fintech: portfolioProjects.filter(p => hasTagOrTech(p, ['finance', 'fintech', 'pos', 'billing', 'crypto', 'stripe', 'razorpay'])).length,
        iot: portfolioProjects.filter(p => hasTagOrTech(p, ['ev charging', 'iot', 'maps', 'webrtc', 'voip', 'streaming', 'real-time'])).length,
        tools: portfolioProjects.filter(p => hasTagOrTech(p, ['utility', 'productivity', 'hrms', 'scanner', 'tools', 'health'])).length
    };

    for (const [key, val] of Object.entries(counts)) {
        const countEl = document.getElementById(`count-${key}`);
        if (countEl) countEl.textContent = val;
    }
}

function hasTagOrTech(proj, keywords) {
    const textToCheck = [
        proj.title,
        proj.description,
        ...(proj.tags || []),
        ...(proj.tech || [])
    ].join(' ').toLowerCase();

    return keywords.some(kw => textToCheck.includes(kw));
}

function renderFilteredProjects() {
    const grid = document.getElementById('main-projects-grid');
    const actionCenter = document.getElementById('projects-action-center');
    if (!grid) return;

    grid.innerHTML = '';

    let filtered = portfolioProjects;
    if (currentCategory === 'featured') {
        filtered = portfolioProjects.filter(p => p.isFeatured);
    } else if (currentCategory === 'ai') {
        filtered = portfolioProjects.filter(p => hasTagOrTech(p, ['ai', 'ocr', 'gemini', 'ml kit', 'tensorflow']));
    } else if (currentCategory === 'fintech') {
        filtered = portfolioProjects.filter(p => hasTagOrTech(p, ['finance', 'fintech', 'pos', 'billing', 'crypto', 'stripe', 'razorpay']));
    } else if (currentCategory === 'iot') {
        filtered = portfolioProjects.filter(p => hasTagOrTech(p, ['ev charging', 'iot', 'maps', 'webrtc', 'voip', 'streaming', 'real-time']));
    } else if (currentCategory === 'tools') {
        filtered = portfolioProjects.filter(p => hasTagOrTech(p, ['utility', 'productivity', 'hrms', 'scanner', 'tools', 'health']));
    }

    const initialLimit = 6;
    const toDisplay = isProjectsExpanded ? filtered : filtered.slice(0, initialLimit);

    toDisplay.forEach((proj, idx) => {
        const card = createModernProjectCard(proj, idx);
        grid.appendChild(card);
        gsap.to(card, {
            y: 0, opacity: 1, duration: 0.35, ease: "power2.out", delay: (idx % 3) * 0.04
        });
    });

    if (actionCenter) {
        actionCenter.innerHTML = '';
        if (filtered.length > initialLimit) {
            const btn = document.createElement('button');
            btn.className = 'btn-secondary';
            btn.innerHTML = `<span>${isProjectsExpanded ? 'Show Less' : `View All ${filtered.length} Projects`}</span>`;
            btn.addEventListener('click', () => {
                isProjectsExpanded = !isProjectsExpanded;
                renderFilteredProjects();
            });
            actionCenter.appendChild(btn);
        }
    }
}

function createModernProjectCard(proj, idx) {
    const card = document.createElement('div');
    card.className = 'project-card-modern';
    card.dataset.id = proj.id;

    const hasScreenshot = proj.screenshots && proj.screenshots.length > 0;
    const mediaThumb = hasScreenshot ? proj.screenshots[0] : '';
    const tagZero = (proj.tags && proj.tags[0]) ? proj.tags[0] : 'Mobile App';

    let badgesTop = '';
    if (proj.isNew) badgesTop += '<span class="card-badge-new">New</span>';
    if (proj.isFeatured) badgesTop += '<span class="card-badge-feat">⭐ Featured</span>';

    let techPills = '';
    if (proj.tech && proj.tech.length > 0) {
        techPills = proj.tech.slice(0, 3).map(t => `<span class="card-tech-badge">${t}</span>`).join('');
    }

    let storeIcons = '';
    if (proj.ios && !proj.ios.includes('coming_soon')) storeIcons += '<span class="store-icon-pill">iOS</span>';
    if (proj.android && !proj.android.includes('coming_soon')) storeIcons += '<span class="store-icon-pill">Android</span>';
    if (proj.website) storeIcons += '<span class="store-icon-pill">Web</span>';

    card.innerHTML = `
        <div class="card-media-wrapper">
            ${hasScreenshot 
                ? `<img src="${mediaThumb}" alt="${proj.title}" class="card-media-img" loading="lazy" />`
                : `<div class="card-media-placeholder"><span>📱</span><span>Flutter Cross-Platform</span></div>`
            }
            <div class="card-top-badges">
                ${badgesTop}
            </div>
        </div>
        <div class="card-body-content">
            <div class="card-header-line">
                <h3 class="card-item-title">${proj.title}</h3>
                <span class="card-category-tag">${tagZero}</span>
            </div>
            <p class="card-item-desc">${proj.description}</p>
            <div class="card-tech-pills">${techPills}</div>
            <div class="card-footer-actions">
                <span class="card-action-btn">
                    Explore Architecture <span>→</span>
                </span>
                <div class="card-store-icons">${storeIcons}</div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => openProjectModal(proj.id));
    return card;
}

// --- OPEN SOURCE SECTION ---
function initOpenSourceSection() {
    const grid = document.getElementById('github-repos-grid');
    if (!grid || typeof githubRepositories === 'undefined') return;

    grid.innerHTML = '';
    githubRepositories.forEach((repo, idx) => {
        const card = document.createElement('div');
        card.className = 'oss-card';

        let techBadges = repo.techStack.map(t => `<span class="card-tech-badge">${t}</span>`).join('');
        let newBadge = repo.isNew ? '<span class="card-badge-new">New</span>' : '';

        card.innerHTML = `
            <div class="oss-header">
                <div>
                    <h3 class="oss-title">${repo.name}</h3>
                </div>
                <div style="display:flex; gap:6px; align-items:center;">
                    ${newBadge}
                    <span class="oss-type-badge">${repo.type}</span>
                </div>
            </div>
            <p class="oss-desc">${repo.description}</p>
            <p class="oss-highlight">💡 ${repo.keyHighlight}</p>
            <div class="card-tech-pills mb-4">${techBadges}</div>
            <div class="oss-footer">
                <a href="${repo.githubUrl}" target="_blank" class="oss-btn" rel="noopener">
                    <span>View Repository</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- TIMELINE & CERTIFICATIONS SECTION ---
function initTimelineSection() {
    const expContainer = document.getElementById('experience-list');
    const certContainer = document.getElementById('cert-list');

    if (expContainer) {
        expContainer.innerHTML = '';
        workExperience.forEach(job => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-meta">${job.duration} • ${job.type}</div>
                <h4 class="timeline-role">${job.role}</h4>
                <div class="timeline-company">${job.company}</div>
                <p class="timeline-desc">${job.desc}</p>
            `;
            expContainer.appendChild(item);
        });
    }

    if (certContainer) {
        certContainer.innerHTML = '';
        certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card';
            card.innerHTML = `
                <h4 class="cert-title">${cert.title}</h4>
                <div class="cert-meta">${cert.org} — ${cert.date}</div>
            `;
            certContainer.appendChild(card);
        });
    }
}

// --- CONTACT ACTIONS HUB ---
function bindContactActions() {
    const trigger = document.getElementById('contact-trigger');
    const panel = document.getElementById('contact-options');
    const copyBtn = document.getElementById('contact-copy');
    const copyLabel = document.getElementById('contact-copy-label');

    if (trigger && panel) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            panel.classList.toggle('hidden');
            trigger.setAttribute('aria-expanded', !panel.classList.contains('hidden'));
        });

        panel.addEventListener('click', (e) => e.stopPropagation());
        document.addEventListener('click', () => panel.classList.add('hidden'));
    }

    if (copyBtn && copyLabel) {
        let revertTimer = null;
        copyBtn.addEventListener('click', async () => {
            const email = copyBtn.dataset.email || 'shahharsh7786@gmail.com';
            const ok = await copyTextToClipboard(email);
            copyLabel.textContent = ok ? 'Email copied to clipboard! 📋' : 'Press Ctrl+C to copy';
            clearTimeout(revertTimer);
            revertTimer = setTimeout(() => {
                copyLabel.textContent = 'Copy email address';
            }, 2500);
        });
    }
}

async function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (_) {}
    }
    try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
    } catch (_) {
        return false;
    }
}

// --- PROJECT MODAL & FULLSCREEN PROTOCOL ---
let modalLenisState = false;

function openProjectModal(id) {
    const project = portfolioProjects.find(p => p.id === id);
    if (!project) return;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-category-badge').textContent = (project.tags && project.tags[0]) ? project.tags[0] : 'Mobile App';
    document.getElementById('modal-full-desc').textContent = project.fullDescription;
    document.getElementById('modal-features').innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

    // Tech
    const techSection = document.getElementById('modal-tech-section');
    if (project.tech && project.tech.length > 0) {
        techSection.style.display = 'block';
        document.getElementById('modal-tech-tags').innerHTML = project.tech.map(t => `<span class="card-tech-badge">${t}</span>`).join('');
    } else {
        techSection.style.display = 'none';
    }

    // Responsibilities
    const respSection = document.getElementById('modal-responsibilities-section');
    if (project.responsibilities) {
        respSection.style.display = 'block';
        document.getElementById('modal-responsibilities').textContent = project.responsibilities;
    } else {
        respSection.style.display = 'none';
    }

    // Store Badges
    let storeBadgesHtml = '';
    const isComingSoon = (v) => v && (String(v).toLowerCase().includes('coming_soon') || String(v).toLowerCase().includes('coming soon'));
    const isUrl = (v) => v && String(v).startsWith('http');

    if (isComingSoon(project.android)) {
        storeBadgesHtml += '<span class="store-link coming-soon">Google Play · Coming Soon</span>';
    } else if (isUrl(project.android)) {
        storeBadgesHtml += `<a href="${project.android}" target="_blank" class="store-link" rel="noopener">Google Play ↗</a>`;
    }

    if (isComingSoon(project.ios)) {
        storeBadgesHtml += '<span class="store-link coming-soon">App Store · Coming Soon</span>';
    } else if (isUrl(project.ios)) {
        storeBadgesHtml += `<a href="${project.ios}" target="_blank" class="store-link" rel="noopener">App Store ↗</a>`;
    }

    if (isUrl(project.website)) {
        storeBadgesHtml += `<a href="${project.website}" target="_blank" class="store-link" rel="noopener">Live Site ↗</a>`;
    }
    document.getElementById('modal-store-badges').innerHTML = storeBadgesHtml;

    // Screenshots
    let screensHtml = '';
    if (project.screenshots && project.screenshots.length > 0) {
        screensHtml = project.screenshots.map((src, i) => `
            <img src="${src}" data-index="${i}" class="clickable-screenshot" loading="lazy" alt="Screenshot ${i+1}" />
        `).join('');
    } else {
        screensHtml = '<p style="color:var(--text-muted); font-size:0.85rem;">Screenshots confidential or unlisted.</p>';
    }
    document.getElementById('modal-screenshots').innerHTML = screensHtml;

    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');

    if (typeof lenis !== 'undefined' && lenis) {
        lenis.stop();
        modalLenisState = true;
    }
    document.body.style.overflow = 'hidden';

    document.querySelectorAll('.clickable-screenshot').forEach(img => {
        img.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index || 0);
            openFullScreenViewer(project, index);
        });
    });
}

function initModalEvents() {
    const modalClose = document.getElementById('modal-close');
    const modal = document.getElementById('project-modal');
    const fsClose = document.getElementById('fs-close');

    if (modalClose) modalClose.addEventListener('click', closeProjectModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });
    }

    if (fsClose) {
        fsClose.addEventListener('click', () => {
            document.getElementById('fullscreen-viewer').classList.add('hidden');
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            document.getElementById('fullscreen-viewer').classList.add('hidden');
        }
    });
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (modalLenisState && typeof lenis !== 'undefined' && lenis) {
        lenis.start();
        modalLenisState = false;
    }
}

// --- FULLSCREEN IMAGE VIEWER ---
let fsProject = null;
let fsCurrentIndex = 0;
let fsZoom = 1;
let fsTranslateX = 0;
let fsTranslateY = 0;
let isFsDragging = false;
let fsStartX = 0;
let fsStartY = 0;

function openFullScreenViewer(project, index) {
    fsProject = project;
    fsCurrentIndex = index;
    updateFsViewer();
    document.getElementById('fullscreen-viewer').classList.remove('hidden');
}

function updateFsViewer() {
    if (!fsProject || !fsProject.screenshots) return;
    const fsImage = document.getElementById('fs-image');
    fsImage.src = fsProject.screenshots[fsCurrentIndex];
    document.getElementById('fs-counter').textContent = `${fsCurrentIndex + 1} / ${fsProject.screenshots.length}`;
    resetFsZoom();
}

function resetFsZoom() {
    const fsImage = document.getElementById('fs-image');
    fsZoom = 1;
    fsTranslateX = 0;
    fsTranslateY = 0;
    if (fsImage) {
        fsImage.style.transform = `translate(0px, 0px) scale(1)`;
    }
}

const fsImage = document.getElementById('fs-image');
if (fsImage) {
    fsImage.addEventListener('dblclick', () => {
        fsZoom = fsZoom === 1 ? 2.5 : 1;
        fsImage.style.transform = `translate(0px, 0px) scale(${fsZoom})`;
    });

    fsImage.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomDelta = e.deltaY * -0.01;
        fsZoom = Math.min(Math.max(1, fsZoom + zoomDelta), 5);
        fsImage.style.transform = `translate(${fsTranslateX}px, ${fsTranslateY}px) scale(${fsZoom})`;
    }, { passive: false });

    fsImage.addEventListener('mousedown', (e) => {
        if (fsZoom > 1) {
            isFsDragging = true;
            fsStartX = e.clientX - fsTranslateX;
            fsStartY = e.clientY - fsTranslateY;
            e.preventDefault();
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isFsDragging) {
            fsTranslateX = e.clientX - fsStartX;
            fsTranslateY = e.clientY - fsStartY;
            fsImage.style.transform = `translate(${fsTranslateX}px, ${fsTranslateY}px) scale(${fsZoom})`;
        }
    });

    window.addEventListener('mouseup', () => {
        isFsDragging = false;
    });
}

const fsPrev = document.getElementById('fs-prev');
const fsNext = document.getElementById('fs-next');

if (fsPrev) {
    fsPrev.addEventListener('click', () => {
        if (!fsProject || !fsProject.screenshots) return;
        fsCurrentIndex = (fsCurrentIndex - 1 + fsProject.screenshots.length) % fsProject.screenshots.length;
        updateFsViewer();
    });
}

if (fsNext) {
    fsNext.addEventListener('click', () => {
        if (!fsProject || !fsProject.screenshots) return;
        fsCurrentIndex = (fsCurrentIndex + 1) % fsProject.screenshots.length;
        updateFsViewer();
    });
}

// --- THREE.JS FLUID WAVE BACKGROUND (PASTILY WARM ORGANIC TONE) ---
let scene, camera, renderer, cyberMesh;
let clock = new THREE.Clock();

// --- BACKGROUND OPTION 2: AMBIENT AURORA GRADIENT ORBS (LINEAR & APPLE STYLE) ---
let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;
let scrollYOffset = 0;

function initThreeJS() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 4 Dynamic Aurora Gradient Spheres
    const orbs = [
        {
            x: width * 0.25,
            y: height * 0.3,
            radius: Math.min(width, height) * 0.42,
            baseRadius: Math.min(width, height) * 0.42,
            colorStart: 'rgba(155, 209, 127, 0.28)', // Sage Mint
            colorEnd: 'rgba(155, 209, 127, 0)',
            speedX: 0.0008,
            speedY: 0.0011,
            phase: 0,
            orbitRadius: 160
        },
        {
            x: width * 0.75,
            y: height * 0.25,
            radius: Math.min(width, height) * 0.46,
            baseRadius: Math.min(width, height) * 0.46,
            colorStart: 'rgba(45, 90, 39, 0.20)', // Pastily Forest Green
            colorEnd: 'rgba(45, 90, 39, 0)',
            speedX: -0.0007,
            speedY: 0.0009,
            phase: Math.PI / 2,
            orbitRadius: 200
        },
        {
            x: width * 0.5,
            y: height * 0.75,
            radius: Math.min(width, height) * 0.48,
            baseRadius: Math.min(width, height) * 0.48,
            colorStart: 'rgba(244, 162, 97, 0.18)', // Warm Sunset Amber
            colorEnd: 'rgba(244, 162, 97, 0)',
            speedX: 0.0012,
            speedY: -0.0008,
            phase: Math.PI,
            orbitRadius: 180
        },
        {
            x: width * 0.85,
            y: height * 0.8,
            radius: Math.min(width, height) * 0.38,
            baseRadius: Math.min(width, height) * 0.38,
            colorStart: 'rgba(61, 122, 53, 0.22)', // Emerald Leaf
            colorEnd: 'rgba(61, 122, 53, 0)',
            speedX: -0.0009,
            speedY: -0.0012,
            phase: Math.PI * 1.5,
            orbitRadius: 150
        }
    ];

    window.addEventListener('mousemove', (e) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 120;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 120;
    }, { passive: true });

    window.addEventListener('scroll', () => {
        scrollYOffset = window.scrollY * 0.25;
    }, { passive: true });

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        orbs.forEach(orb => {
            orb.radius = Math.min(width, height) * 0.44;
            orb.baseRadius = orb.radius;
        });
    });

    let time = 0;
    function renderAurora() {
        requestAnimationFrame(renderAurora);
        time += 1;

        // Smooth mouse follow
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        ctx.clearRect(0, 0, width, height);

        // Draw each blurred, glowing organic orb
        for (let i = 0; i < orbs.length; i++) {
            const orb = orbs[i];
            
            // Harmonic floating motion
            const currentX = (width * (i === 0 ? 0.25 : i === 1 ? 0.75 : i === 2 ? 0.5 : 0.85)) +
                             Math.cos(time * orb.speedX + orb.phase) * orb.orbitRadius + (mouseX * (0.4 + i * 0.15));
            const currentY = (height * (i === 0 ? 0.3 : i === 1 ? 0.25 : i === 2 ? 0.75 : 0.8)) +
                             Math.sin(time * orb.speedY + orb.phase) * orb.orbitRadius + (mouseY * (0.4 + i * 0.15)) - (scrollYOffset * (0.3 + i * 0.1));

            const currentRadius = orb.baseRadius * (1 + Math.sin(time * 0.002 + i) * 0.1);

            const gradient = ctx.createRadialGradient(
                currentX, currentY, 0,
                currentX, currentY, Math.max(10, currentRadius)
            );
            gradient.addColorStop(0, orb.colorStart);
            gradient.addColorStop(0.5, orb.colorStart.replace(/[\d\.]+\)$/, '0.08)'));
            gradient.addColorStop(1, orb.colorEnd);

            ctx.beginPath();
            ctx.arc(currentX, currentY, Math.max(10, currentRadius), 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    renderAurora();
}

// --- GSAP ORCHESTRATION ---
function initGSAP() {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.reveal-elem').forEach((elem, i) => {
        gsap.fromTo(elem, 
            { y: 22, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: "power3.out",
                delay: i * 0.06,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 88%"
                }
            }
        );
    });

    window.addEventListener('mousemove', (e) => {
        if (camera) {
            const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            gsap.to(camera.position, {
                x: mouseX * 10,
                y: 24 + mouseY * 4,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => camera.lookAt(0, 0, 0)
            });
        }
    });
}

// --- LENIS SMOOTH SCROLL ---
let lenis;
function initLenis() {
    if (typeof Lenis === 'undefined') return;
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
        smoothTouch: false
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}
