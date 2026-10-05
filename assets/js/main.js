lucide.createIcons();

let currentLang = 'es';
const i18n = {
    es: {
        nav_start: "Inicio", nav_services: "Servicios", nav_fleet: "Flota", nav_team: "Equipo", nav_contact: "Contacto", web_platform: "Plataforma Web",
        hero_title_1: "CONTROL TOTAL", hero_title_2: "EN TIEMPO REAL", hero_title_3: "CON ZENTRIX",
        hero_subtitle: "Sistema de rastreo satelital de máxima precisión. Monitoreo constante, apagado de motor remoto e instalaciones discretas garantizadas.",
        hero_btn_platform: "INGRESAR A LA PLATAFORMA", hero_btn_install: "Agendar Instalación",
        stat_exp: "Años de Experiencia", stat_discreet: "Instalación Oculta", stat_support: "Soporte Continuo",
        services_subtitle: "TECNOLOGÍA DE TELEMETRÍA", services_title: "Nuestros Servicios de Rastreo", services_desc: "Ofrecemos control absoluto sobre la seguridad de tu vehículo o flota comercial.",
        serv_1_title: "Ubicación en Tiempo Real", serv_1_desc: "Sigue el recorrido exacto de tus unidades con actualización constante de posición, velocidad y ruta 24/7.",
        serv_2_title: "Apagado de Motor Remoto", serv_2_desc: "Inmoviliza tu vehículo de forma segura desde tu teléfono inteligente ante cualquier emergencia o hurto.",
        serv_3_title: "Geocercas & Alertas", serv_3_desc: "Define perímetros virtuales seguros y recibe notificaciones instantáneas si el vehículo sale de la zona.",
        serv_4_title: "Historial de Recorridos", serv_4_desc: "Consulta rutas previas, paradas realizadas, tiempos de inactividad y kilometraje acumulado.",
        serv_5_title: "Multi-Plataforma", serv_5_desc: "Accede desde cualquier dispositivo Android, iOS o desde tu navegador web preferido con total fluidez.",
        serv_6_title: "Instalación Profesional", serv_6_desc: "Técnicos expertos realizan montajes 100% ocultos, limpios y seguros sin afectar el sistema eléctrico original.",
        team_subtitle: "TALENTO HUMANO", team_title: "Especialistas Zentrix GPS", team_desc: "Profesionales capacitados en soporte técnico, atención al cliente e instalación electrónica automotriz.",
        role_leader: "Líder & Atención al Cliente", desc_leader: "Encargado de la gestión operativa, desarrollo tecnológico y coordinación de proyectos de rastreo.",
        role_tech1: "Especialista en Instalación", desc_tech1: "Técnico experto en cableado, conexión eléctrica automotriz y ocultamiento seguro de dispositivos GPS.",
        role_tech2: "Especialista en Instalación", desc_tech2: "Profesional capacitado en calibración de hardware, acople de relés y verificación de señal satelital.",
        contact_title: "¿Listo para proteger tu vehículo?", contact_desc: "Contáctanos hoy mismo para coordinar la instalación de tu equipo GPS satelital con los mejores profesionales en Venezuela.",
        whatsapp_btn: "Contactar por WhatsApp", label_name: "NOMBRE COMPLETO", label_phone: "TELÉFONO / WHATSAPP", label_vehicle: "TIPO DE VEHÍCULO / SOLICITUD",
        btn_send: "Enviar Solicitud", msg_sent: "¡Gracias! Redirigiendo a WhatsApp..."
    },
    en: {
        nav_start: "Home", nav_services: "Services", nav_fleet: "Fleet", nav_team: "Team", nav_contact: "Contact", web_platform: "Web Platform",
        hero_title_1: "TOTAL CONTROL", hero_title_2: "IN REAL TIME", hero_title_3: "WITH ZENTRIX",
        hero_subtitle: "High precision satellite tracking system. Constant monitoring, remote engine cutoff, and guaranteed discreet installations.",
        hero_btn_platform: "ACCESS WEB PLATFORM", hero_btn_install: "Schedule Installation",
        stat_exp: "Years of Experience", stat_discreet: "Discreet Install", stat_support: "24/7 Support",
        services_subtitle: "TELEMETRY TECHNOLOGY", services_title: "Our Tracking Services", services_desc: "We offer absolute control over your vehicle or commercial fleet security.",
        serv_1_title: "Real-Time Location", serv_1_desc: "Track exact unit routes with continuous updates on position, speed, and heading 24/7.",
        serv_2_title: "Remote Engine Cutoff", serv_2_desc: "Safely immobilize your vehicle from your smartphone in case of emergency or theft.",
        serv_3_title: "Geofences & Alerts", serv_3_desc: "Set secure virtual perimeters and receive instant notifications if the vehicle leaves the zone.",
        serv_4_title: "Route History", serv_4_desc: "Check previous routes, stops made, downtime, and total mileage accumulated.",
        serv_5_title: "Multi-Platform", serv_5_desc: "Access smoothly from any Android, iOS device, or your preferred web browser.",
        serv_6_title: "Professional Installation", serv_6_desc: "Expert technicians perform 100% hidden, clean, and safe installations without affecting original wiring.",
        team_subtitle: "HUMAN TALENT", team_title: "Zentrix GPS Specialists", team_desc: "Professionals trained in technical support, customer care, and automotive electronic installation.",
        role_leader: "Leader & Customer Care", desc_leader: "In charge of operational management, tech development, and tracking project coordination.",
        role_tech1: "Installation Specialist", desc_tech1: "Expert technician in wiring, automotive electrical connections, and secure GPS concealment.",
        role_tech2: "Installation Specialist", desc_tech2: "Professional trained in hardware calibration, relay coupling, and satellite signal verification.",
        contact_title: "Ready to protect your vehicle?", contact_desc: "Contact us today to coordinate your satellite GPS equipment installation with top professionals in Venezuela.",
        whatsapp_btn: "Contact on WhatsApp", label_name: "FULL NAME", label_phone: "PHONE / WHATSAPP", label_vehicle: "VEHICLE TYPE / REQUEST",
        btn_send: "Submit Request", msg_sent: "Thank you! Redirecting to WhatsApp..."
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('lang-indicator').textContent = currentLang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
    });
}

function initThemePreference() {
    const html = document.documentElement;
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (systemPrefersDark) {
        html.classList.add('dark'); 
        html.classList.remove('light');
        if (iconSun && iconMoon) {
            iconSun.classList.add('hidden'); 
            iconMoon.classList.remove('hidden');
        }
    } else {
        html.classList.add('light'); 
        html.classList.remove('dark');
        if (iconSun && iconMoon) {
            iconSun.classList.remove('hidden'); 
            iconMoon.classList.add('hidden');
        }
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark'); 
        html.classList.add('light');
        iconSun.classList.remove('hidden'); 
        iconMoon.classList.add('hidden');
    } else {
        html.classList.remove('light'); 
        html.classList.add('dark');
        iconSun.classList.add('hidden'); 
        iconMoon.classList.remove('hidden');
    }
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    drawer.classList.toggle('hidden');
    drawer.classList.toggle('flex');
}

let scene, camera, renderer, particleSystem;

function init3D() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const count = 600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for(let i=0; i<count*3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0xc084fc,
        size: 0.15,
        transparent: true,
        opacity: 0.35
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function animate3D() {
    requestAnimationFrame(animate3D);
    if(particleSystem) {
        particleSystem.rotation.y += 0.0003;
        particleSystem.rotation.x += 0.0001;
    }
    if(renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    const hologram = document.getElementById('scroll-hologram-wrapper');
    if (!hologram) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });

    tl.to(hologram, { scale: 1.5, x: "22vw", rotation: 180, duration: 1, ease: "none" })
        .to(hologram, { scale: 0.85, x: "-25vw", rotation: 360, duration: 1, ease: "none" })
        .to(hologram, { scale: 0.45, opacity: 0.2, x: "0vw", rotation: 540, duration: 1, ease: "none" });
}

window.onload = function() {
    initThemePreference();
    init3D();
    animate3D();
    initScrollAnimations();
};