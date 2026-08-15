/**
 * main.js
 * High-Performance Vanilla JS Portfolio
 * Data mapped from Flutter Source (lib/ui/data)
 */

// --- DATA INJECTION ARRAYS ---

const personalInfo = {
    name: "Harsh M Shah",
    title: "Flutter Developer",
    location: "Gujarat, India",
    experience: "4+ years",
    projectsDelivered: "25+",
    bio: "Senior Flutter Developer with 4+ years of experience in cross-platform mobile architecture. Specialized in creating scalable, performance-critical applications."
};

const technicalSkills = [
    {
        title: "Flutter Development",
        icon: "💙",
        skills: ["Advanced UI design", "Stripe & Razorpay", "Audio/Video Streaming", "Complex Animations", "Google Maps integration", "Isolates & Background Services"]
    },
    {
        title: "State Management",
        icon: "🔄",
        skills: ["Riverpod", "Provider", "GetX", "BLoC", "Redux"]
    },
    {
        title: "Backend & Cloud",
        icon: "☁️",
        skills: ["Firebase", "Node.js & Express API", "Socket.io", "AWS S3"]
    },
    {
        title: "Database & Local Storage",
        icon: "💾",
        skills: ["Hive", "Sqflite", "SharedPreferences", "MongoDB", "MySQL"]
    },
    {
        title: "Tools & DevOps",
        icon: "🛠️",
        skills: ["Git & GitHub", "Bitbucket", "Postman", "Crashlytics", "Figma", "Codemagic", "Shorebird", "Jira & Trello"]
    }
];

const workExperience = [
    {
        company: "Sanshray IT Solutions LLP",
        role: "Senior Mobile Application Developer",
        duration: "Jan 2025 - Present",
        type: "Full-time",
        desc: "Leading mobile app architecture, implementing scalable cross-platform solutions. Driving adoption of advanced Flutter patterns, Riverpod, and real-time backend integrations."
    },
    {
        company: "Kody Technolab LTD",
        role: "Flutter Developer",
        duration: "Jan 2021 - Jan 2025",
        type: "Full-time",
        desc: "Developed and maintained highly scalable Flutter apps for diverse domains including robotics, health tech, and IoT. Integrated hardware-level communications."
    }
];

const certifications = [
    { title: "Responsive Web Design", org: "freeCodeCamp", date: "April 2024" },
    { title: "Front-End Web UI Frameworks", org: "Coursera", date: "August 2020" },
    { title: "Flutter Certified Professional", org: "IndiaNIC", date: "Sep 2021 - Nov 2021" }
];

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    // Bound first so a failure in the visual layers below can never leave the button dead.
    bindContactActions();
    initThreeJS();
    initData();
    initGSAP();
    initLenis();

    // Hide Loader
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);
});

// --- DATA INJECTION PIPELINE ---
function initData() {
    // Bio string
    document.getElementById('bio-text').innerText = personalInfo.bio;
    document.getElementById('stats-text').innerText =
        `${personalInfo.experience} Experience • ${personalInfo.projectsDelivered} Products Delivered`;

    // Skills Layout
    const skillsGrid = document.getElementById('skills-grid');
    technicalSkills.forEach(cat => {
        const row = document.createElement('div');
        row.className = 'skill-row glass-card reveal-text';
        row.innerHTML = `
            <div class="skill-icon">${cat.icon}</div>
            <div>
                <h4 class="skill-title">${cat.title}</h4>
                <p class="skill-desc">${cat.skills.join(' • ')}</p>
            </div>
        `;
        skillsGrid.appendChild(row);
    });

    // Experience Layout
    const expList = document.getElementById('experience-list');
    workExperience.forEach(job => {
        const item = document.createElement('div');
        item.className = 'border-left reveal-text';
        item.innerHTML = `
            <div class="exp-meta">${job.duration} | ${job.type}</div>
            <div class="exp-role">${job.role}</div>
            <div class="exp-company">${job.company}</div>
            <p class="exp-desc">${job.desc}</p>
        `;
        expList.appendChild(item);
    });

    // Certs Layout
    const certList = document.getElementById('cert-list');
    certifications.forEach(cert => {
        const c = document.createElement('div');
        c.className = 'cert-item reveal-text';
        c.innerHTML = `
            <div class="cert-title">${cert.title}</div>
            <div class="cert-meta">${cert.org} — ${cert.date}</div>
        `;
        certList.appendChild(c);
    });

    // Projects Grid
    renderProjectsGrid();
    renderGithubRepos();
    bindModalEvents();
}


let showAllProjects = false;
function renderProjectsGrid() {
    const featuredGrid = document.getElementById('featured-projects-grid');
    const otherGrid = document.getElementById('other-projects-grid');
    if (featuredGrid) featuredGrid.innerHTML = '';
    if (otherGrid) otherGrid.innerHTML = '';

    const featuredProjects = portfolioProjects.filter(p => p.isFeatured);
    const otherProjects = portfolioProjects.filter(p => !p.isFeatured);

    // Render Featured
    featuredProjects.forEach((proj, idx) => {
        const c = createProjectCard(proj, idx);
        if (featuredGrid) featuredGrid.appendChild(c);
        gsap.to(c, {
            y: 0, opacity: 1, duration: 0.4, ease: "power2.out", delay: (idx % 3) * 0.05
        });
    });

    // Determine how many other projects to show
    const count = showAllProjects ? otherProjects.length : 6;
    const projectsToShow = otherProjects.slice(0, count);

    projectsToShow.forEach((proj, idx) => {
        const c = createProjectCard(proj, idx);
        if (otherGrid) otherGrid.appendChild(c);
        gsap.to(c, {
            y: 0, opacity: 1, duration: 0.4, ease: "power2.out", delay: (idx % 3) * 0.05
        });
    });

    // Add "Show More" / "Show Less" button
    const actionContainer = document.getElementById('projects-action');
    if (actionContainer && otherProjects.length > 6) {
        actionContainer.innerHTML = '';
        const btn = document.createElement('button');
        btn.className = 'button-primary';
        btn.textContent = showAllProjects ? 'Show Less' : 'View All Projects';
        btn.onclick = () => {
            showAllProjects = !showAllProjects;
            renderProjectsGrid();
        };
        actionContainer.appendChild(btn);
    } else if (actionContainer) {
        actionContainer.innerHTML = '';
    }
}

function createProjectCard(proj, idx) {
    const c = document.createElement('div');
    c.className = 'project-card';
    c.dataset.id = proj.id;

    let tagsHtml = '';
    if (proj.tags && proj.tags.length > 0) {
        tagsHtml = proj.tags.map(t => '<span class="tag">' + t + '</span>').join('');
    }

    const tagZero = (proj.tags && proj.tags.length > 0) ? proj.tags[0] : 'Project';
    const newBadge = proj.isNew ? '<span class="badge-new">New</span>' : '';

    c.innerHTML = `
        <div>
            <div class="project-meta">0${idx + 1} // ${tagZero} ${newBadge}</div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.description}</p>
        </div>
        <div>
            <div class="project-tags mb-4">${tagsHtml}</div>
            <button class="button-outline" style="font-size:0.75rem; padding: 0.5rem 1rem; width:100%; display:flex; justify-content:space-between; align-items:center;">
                View Details <span>→</span>
            </button>
        </div>
    `;

    c.addEventListener('click', () => openProjectModal(proj.id));
    return c;
}

function renderGithubRepos() {
    const repoGrid = document.getElementById('github-repos-grid');
    if (!repoGrid) return;
    repoGrid.innerHTML = '';

    githubRepositories.forEach((repo, idx) => {
        const c = document.createElement('div');
        c.className = 'project-card';

        let tagsHtml = repo.techStack.map(t => '<span class="tag">' + t + '</span>').join('');
        let newHtml = repo.isNew ? '<span class="badge-new">New</span>' : '';

        c.innerHTML = `
            <div>
                <div class="project-meta">0${idx + 1} // ${repo.type.toUpperCase()}</div>
                <h3 class="project-title">${repo.name} ${newHtml}</h3>
                <p class="project-desc">${repo.description}</p>
                <p style="font-size:0.8rem; color: #aaa; margin-top: 10px; font-style: italic;">${repo.keyHighlight}</p>
            </div>
            <div>
                <div class="project-tags mb-4">${tagsHtml}</div>
                <a href="${repo.githubUrl}" target="_blank" class="button-outline" style="font-size:0.75rem; padding: 0.5rem 1rem; width:100%; display:flex; justify-content:space-between; align-items:center; text-decoration: none;">
                    View on GitHub <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></span>
                </a>
            </div>
        `;
        repoGrid.appendChild(c);

        gsap.to(c, {
            y: 0, opacity: 1, duration: 0.4, ease: "power2.out", delay: (idx % 3) * 0.05
        });
    });
}

// --- PROJECT DETAIL MODAL PROTOCOL ---
let modalLenisState = false;

function openProjectModal(id) {
    const project = portfolioProjects.find(p => p.id === id);
    if (!project) return;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-tags').innerHTML = project.tags.map(t => '<span class="tag">' + t + '</span>').join('');
    document.getElementById('modal-full-desc').textContent = project.fullDescription;
    document.getElementById('modal-features').innerHTML = project.features.map(f => '<li>' + f + '</li>').join('');

    // Tech
    const techSection = document.getElementById('modal-tech-section');
    if (project.tech && project.tech.length > 0) {
        techSection.style.display = 'block';
        document.getElementById('modal-tech-tags').innerHTML = project.tech.map(t => '<span class="tag">' + t + '</span>').join('');
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

    let linksHtml = '';

    const isComingSoon = (value) => {
        if (value == null) return false;
        const v = String(value).trim().toLowerCase();
        return v === 'coming_soon' || v === 'coming soon';
    };
    const isRealUrl = (value) => {
        if (value == null) return false;
        const v = String(value).trim();
        return v.length > 5 && !v.includes('null') && !isComingSoon(v) && /^https?:\/\//i.test(v);
    };

    if (isComingSoon(project.android)) {
        linksHtml += '<span class="store-link coming-soon" aria-disabled="true">Google Play · Coming Soon</span>';
    } else if (isRealUrl(project.android)) {
        linksHtml += '<a href="' + project.android + '" target="_blank" class="store-link">Google Play</a>';
    }

    if (isComingSoon(project.ios)) {
        linksHtml += '<span class="store-link coming-soon" aria-disabled="true">App Store · Coming Soon</span>';
    } else if (isRealUrl(project.ios)) {
        linksHtml += '<a href="' + project.ios + '" target="_blank" class="store-link">App Store</a>';
    }

    if (isRealUrl(project.website)) {
        linksHtml += '<a href="' + project.website + '" target="_blank" class="store-link">Live Site</a>';
    }

    document.getElementById('modal-links').innerHTML = linksHtml;

    let screensHtml = '';
    if (project.screenshots && project.screenshots.length > 0) {
        screensHtml = project.screenshots.map((src, i) => '<img src="' + src + '" data-index="' + i + '" data-pid="' + project.id + '" class="screenshot-img clickable-screenshot" loading="lazy" alt="Preview" />').join('');
    } else {
        screensHtml = '<p style="color:var(--pearl-dim)">Screenshots highly confidential or unlisted.</p>';
    }
    document.getElementById('modal-screenshots').innerHTML = screensHtml;

    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');

    // Fix lenis behavior over Modal Overflow
    if (lenis) { lenis.stop(); modalLenisState = true; }
    document.body.style.overflow = 'hidden';

    // Bind fullscreen events newly
    document.querySelectorAll('.clickable-screenshot').forEach(img => {
        img.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            openFullScreenViewer(project, index);
        });
    });
}

function bindModalEvents() {
    document.getElementById('modal-close').addEventListener('click', closeModal);

    // Click backdrop to close
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('project-modal')) closeModal();
    });

    document.getElementById('fs-close').addEventListener('click', () => {
        document.getElementById('fullscreen-viewer').classList.add('hidden');
    });
}

// A bare mailto: silently does nothing on machines with no mail client configured,
// so the button offers copy/webmail routes alongside it instead of relying on one.
function bindContactActions() {
    const trigger = document.getElementById('contact-trigger');
    const panel = document.getElementById('contact-options');
    const copyBtn = document.getElementById('contact-copy');
    if (!trigger || !panel || !copyBtn) return;

    const setOpen = (open) => {
        panel.classList.toggle('hidden', !open);
        trigger.setAttribute('aria-expanded', String(open));
    };

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(panel.classList.contains('hidden'));
    });

    panel.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
    });

    const label = copyBtn.querySelector('.contact-option-label');
    const originalLabel = label.textContent;
    let revertTimer = null;

    copyBtn.addEventListener('click', async () => {
        const email = copyBtn.dataset.email;
        const copied = await copyText(email);
        label.textContent = copied ? 'Copied to clipboard' : 'Press Ctrl/Cmd + C to copy';
        clearTimeout(revertTimer);
        revertTimer = setTimeout(() => { label.textContent = originalLabel; }, 2500);
    });
}

async function copyText(text) {
    // navigator.clipboard needs a secure context; fall back for file:// and older browsers.
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (_) { /* fall through to the manual path */ }
    }
    try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
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

function closeModal() {
    const modal = document.getElementById('project-modal');
    // Fade out then hide completely — prevents any background bleed
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    setTimeout(() => { modal.classList.add('hidden'); modal.style.opacity = ''; modal.style.visibility = ''; }, 360);
    document.body.style.overflow = 'auto';
    if (modalLenisState && lenis) { lenis.start(); modalLenisState = false; }
}

let fsProject = null;
let fsCurrentIndex = 0;
function openFullScreenViewer(project, index) {
    fsProject = project;
    fsCurrentIndex = index;
    updateFsViewer();
    document.getElementById('fullscreen-viewer').classList.remove('hidden');
}
let fsZoom = 1;
let fsTranslateX = 0;
let fsTranslateY = 0;
let isFsDragging = false;
let fsStartX = 0;
let fsStartY = 0;

function resetZoom() {
    const fsImage = document.getElementById('fs-image');
    fsZoom = 1;
    fsTranslateX = 0;
    fsTranslateY = 0;
    fsImage.style.transform = `translate(0px, 0px) scale(1)`;
    fsImage.classList.remove('zoomed');
}

function updateFsViewer() {
    if (!fsProject || !fsProject.screenshots) return;
    const fsImage = document.getElementById('fs-image');
    fsImage.src = fsProject.screenshots[fsCurrentIndex];
    document.getElementById('fs-counter').textContent = (fsCurrentIndex + 1) + ' / ' + fsProject.screenshots.length;
    resetZoom();
}

// Fullscreen Zoom & Drag Handlers
const fsImage = document.getElementById('fs-image');

fsImage.addEventListener('dblclick', (e) => {
    if (fsZoom === 1) {
        fsZoom = 2.5; // Zoom in
        fsImage.classList.add('zoomed');
        fsImage.style.transform = `translate(0px, 0px) scale(${fsZoom})`;
    } else {
        resetZoom();
    }
});

fsImage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomPoint = e.deltaY * -0.01;
    let newZoom = fsZoom + zoomPoint;
    newZoom = Math.min(Math.max(1, newZoom), 5); // limit between 1 and 5

    if (newZoom === 1) {
        resetZoom();
    } else {
        fsZoom = newZoom;
        fsImage.classList.add('zoomed');
        fsImage.style.transform = `translate(${fsTranslateX}px, ${fsTranslateY}px) scale(${fsZoom})`;
    }
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


document.getElementById('fs-prev').addEventListener('click', () => {
    if (!fsProject) return;
    fsCurrentIndex = fsCurrentIndex - 1;
    if (fsCurrentIndex < 0) fsCurrentIndex = fsProject.screenshots.length - 1;
    updateFsViewer();
});

document.getElementById('fs-next').addEventListener('click', () => {
    if (!fsProject) return;
    fsCurrentIndex = fsCurrentIndex + 1;
    if (fsCurrentIndex >= fsProject.screenshots.length) fsCurrentIndex = 0;
    updateFsViewer();
});

// --- THREE.JS ORCHESTRATION ---
let scene, camera, renderer, cyberMesh;
let clock = new THREE.Clock();

function initThreeJS() {
    const container = document.getElementById('canvas-container');
    const width = window.innerWidth;
    const height = window.innerHeight;

    try {
        scene = new THREE.Scene();
        // Cinematic angle looking out over the grid
        camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.set(0, 20, 40);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-canvas'), alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create an organic abstract Cyber-Ocean grid
        const geometry = new THREE.PlaneGeometry(160, 160, 45, 45);
        geometry.rotateX(-Math.PI / 2); // Lay flat

        const material = new THREE.MeshBasicMaterial({
            color: 0x667eea, // Sleek premium accent
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });

        cyberMesh = new THREE.Mesh(geometry, material);
        scene.add(cyberMesh);

        const positions = geometry.attributes.position.array;
        const initialY = new Float32Array(positions.length / 3);

        for (let i = 0; i < positions.length; i += 3) {
            initialY[i / 3] = positions[i + 1];
        }

        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime() * 0.4;

            const positions = cyberMesh.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const z = positions[i + 2];

                // Advanced Organic Sine/Cosine Mathematical distortion
                const wave1 = Math.sin(x * 0.08 + time) * 2.5;
                const wave2 = Math.cos(z * 0.08 + time * 1.2) * 2.5;
                const wave3 = Math.sin(Math.sqrt(x * x + z * z) * 0.05 - time * 2) * 3;

                positions[i + 1] = initialY[i / 3] + wave1 + wave2 + wave3;
            }

            cyberMesh.geometry.attributes.position.needsUpdate = true;
            cyberMesh.rotation.y = Math.sin(time * 0.2) * 0.1; // Gentle sway

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

    } catch (e) {
        document.getElementById('fallback-bg').classList.add('active');
        container.style.display = 'none';
        console.warn('WebGL blocked, initializing CSS Fallback.');
    }
}

// --- GSAP ORCHESTRATION ---
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.reveal-text').forEach((element) => {
        gsap.to(element, {
            scrollTrigger: { trigger: element, start: "top 85%" },
            y: 0, opacity: 1, duration: 1, ease: "power3.out"
        });
    });

    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: { trigger: card, start: "top 90%" },
            y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: (i % 3) * 0.1
        });
    });

    window.addEventListener('mousemove', (e) => {
        if (camera) {
            const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

            // Camera tracks the mouse over the liquid grid
            gsap.to(camera.position, {
                x: mouseX * 15,
                y: 20 + mouseY * 6,
                duration: 2.5,
                ease: "power2.out",
                onUpdate: () => camera.lookAt(0, 0, 0)
            });
        }
    });

    ScrollTrigger.create({
        trigger: "body", start: "top top", end: "bottom bottom",
        onUpdate: (self) => {
            if (cyberMesh) {
                // The grid physically sinks backwards and accelerates dynamically as we scroll
                cyberMesh.position.y = -self.progress * 40;
                cyberMesh.position.z = -self.progress * 20;
            }
        }
    });
}

// --- LENIS SMOOTH SCROLL ---
let lenis;
function initLenis() {
    lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical', smooth: true, smoothTouch: false });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}
