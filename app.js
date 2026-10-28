"use strict";
(() => {
    'use strict';
    const translations = {
        en: {
            pageTitle: 'Michael Acosta — Full-stack Developer',
            metaDescription: 'Michael Acosta’s portfolio: full-stack developer, freelancer, and real web projects.',
            skipLink: 'Skip to content',
            homeLabel: 'Michael Acosta, home',
            navigationLabel: 'Main navigation',
            navHome: 'Home',
            navAbout: 'About',
            navProjects: 'Projects',
            navStack: 'Stack',
            navCv: 'CV',
            navContact: 'Contact',
            heroRole: 'Full-stack Developer & freelancer',
            heroStatement: 'I build useful, clear, thoughtfully crafted web experiences.',
            heroLink: 'Explore projects',
            heroIndex: 'PORTFOLIO · SELECTED WORK',
            portraitCaption: 'GITHUB / @MichaelAcostaDev',
            profileEyebrow: 'A little about me',
            profileRole: 'Full-stack Developer',
            profileConjunction: '&',
            profileFreelancer: 'freelancer',
            profileDescription: 'I’m Michael Acosta. I work across frontend, backend, and data to build web solutions, and I take on client projects as a freelancer. I care about making every part clear, useful, and work well together.',
            profileProjects: 'View projects',
            profileContact: 'Get in touch',
            portraitAlt: 'Michael Acosta’s GitHub profile avatar: an illustrated character holding a laptop',
            projectsEyebrow: 'A selection of my work',
            projectsTitle: 'Projects',
            projectFiltersLabel: 'Filter projects',
            filterAll: 'All',
            filterWork: 'Web projects',
            filterGames: 'Games',
            filterStatusAll: 'Showing all projects and games',
            filterStatusWork: 'Showing web projects',
            filterStatusGames: 'Showing games',
            codeLink: 'Code',
            demoLink: 'Demo',
            twistoraImageLabel: 'Open the Twistora demo',
            twistoraAlt: 'Twistora stopwatch and 3D cube simulator',
            twistoraDescription: 'A speedcubing timer paired with a 3D Rubik’s cube simulator.',
            devwebcampImageLabel: 'Open the DevWebCamp demo',
            devwebcampAlt: 'DevWebCamp homepage',
            devwebcampDescription: 'A PHP platform for organizing a web development conference.',
            interestGalleryLabel: 'Interest Calculator screenshots',
            previousImage: 'Previous screenshot',
            nextImage: 'Next screenshot',
            interestAlt1: 'Interest Calculator balance growth chart',
            interestAlt2: 'Interest Calculator starting view and interest selection',
            interestAlt3: 'Interest Calculator compound interest projection',
            interestAlt4: 'Interest Calculator balance growth table',
            interestDescription: 'A visual way to explore simple and compound interest.',
            diabetesImageLabel: 'Open the Diabetes Predictor demo',
            diabetesAlt: 'Diabetes Predictor project screenshot',
            diabetesDescription: 'An informational estimate based on biometric data; not a substitute for medical advice.',
            appSalonImageLabel: 'Open the AppSalon demo',
            appSalonAlt: 'AppSalon appointment and sign-in interface',
            appSalonDescription: 'An appointment management app built with PHP and MVC.',
            textforgeGalleryLabel: 'TextForge screenshots',
            textforgeAlt1: 'TextForge ASCII banners in different fonts and colors',
            textforgeAlt2: 'TextForge alignment and font examples',
            textforgeAlt3: 'TextForge available fonts and colors',
            textforgeAlt4: 'TextForge command-line help',
            textforgeDescription: 'A Bash CLI that generates customizable ASCII banners in the terminal.',
            gamesEyebrow: 'Small worlds, made to play',
            gamesTitle: 'A few games',
            featuredGame: 'FEATURED GAME',
            game2048ImageLabel: 'Play 2048',
            game2048Alt: '2048 number puzzle in progress',
            game2048Description: 'A familiar number puzzle, thoughtfully brought to the web.',
            spaceInvadersImageLabel: 'Play Space Invaders',
            spaceInvadersAlt: 'Space Invaders in-game screen',
            sudokuImageLabel: 'Play Sudoku',
            sudokuAlt: 'Sudoku puzzle application',
            snakeImageLabel: 'Play Snake',
            snakeAlt: 'Snake game ready to play',
            playLink: 'Play',
            stackEyebrow: 'A few selected technologies',
            stackTitle: 'My ecosystem',
            stackGroupsLabel: 'Technologies and skills',
            stackDetailsLabel: 'Selected item details',
            stackNote: 'Select an item to see its category.',
            groupDevelopment: 'Development & languages',
            groupData: 'Data ecosystem',
            groupLinux: 'Linux distributions',
            groupTools: 'Tools & delivery',
            groupSkills: 'How I work',
            cvEyebrow: 'A closer look at my journey',
            cvTitle: 'A work in progress',
            cvStatus: 'CV — Coming Soon',
            cvDescription: 'My resume will be available here soon.',
            contactEyebrow: 'Let’s talk',
            contactTitle: 'Have something in mind',
            footerName: 'Michael Acosta',
            footerCopyright: '©',
            typeWebStandard: 'Web standard',
            typeStylesheet: 'Stylesheet language',
            typeUiLibrary: '3D graphics library',
            typeCssTool: 'CSS preprocessor',
            typeCssFramework: 'CSS framework',
            typeChartLibrary: 'Charting library',
            typeMapLibrary: 'Mapping library',
            typeBackendLanguage: 'Backend language',
            typeWebFramework: 'Web framework',
            typeMlLibrary: 'Machine-learning library',
            typeProgrammingLanguage: 'Programming language',
            typeShellLanguage: 'Shell language',
            typeQueryLanguage: 'Relational query language',
            typeDatabaseEngine: 'Relational database management system',
            typeDatabaseClient: 'Database management client',
            typeLinuxDistribution: 'Linux distribution',
            typeVersionControl: 'Version control',
            typeTaskRunner: 'Task runner',
            typeDependencyManager: 'Dependency manager',
            typeRuntime: 'JavaScript runtime',
            typePackageManager: 'Package manager',
            typeEdgePlatform: 'Edge deployment platform',
            typeContainerTool: 'Container tooling',
            typeDeploymentPlatform: 'Deployment platform',
            typeTestRunner: 'Test runner',
            typeCollaborationPlatform: 'Code hosting platform',
            typeProfessionalSkill: 'Professional skill',
            typeLanguageSkill: 'Language',
            typeIndependentWork: 'Work style',
            skillTeamwork: 'Teamwork',
            skillCollaboration: 'Collaboration & communication',
            skillProblemSolving: 'Problem-solving',
            skillLearning: 'Continuous learning',
            skillAdaptability: 'Adaptability',
            skillOrganization: 'Organization & attention to detail',
            skillTyping: 'Efficient typing',
            skillEnglish: 'English as a second language',
            skillAutonomy: 'Independent project work'
        },
        es: {
            pageTitle: 'Michael Acosta — Desarrollador Full-stack',
            metaDescription: 'Portafolio de Michael Acosta: desarrollador full-stack, freelancer y proyectos web reales.',
            skipLink: 'Saltar al contenido',
            homeLabel: 'Michael Acosta, inicio',
            navigationLabel: 'Navegación principal',
            navHome: 'Inicio',
            navAbout: 'Sobre mí',
            navProjects: 'Proyectos',
            navStack: 'Stack',
            navCv: 'CV',
            navContact: 'Contacto',
            heroRole: 'Desarrollador Full-stack y freelancer',
            heroStatement: 'Creo experiencias web útiles, claras y cuidadas.',
            heroLink: 'Explorar proyectos',
            heroIndex: 'PORTAFOLIO · TRABAJOS SELECCIONADOS',
            portraitCaption: 'GITHUB / @MichaelAcostaDev',
            profileEyebrow: 'Un poco sobre mí',
            profileRole: 'Desarrollador Full-stack',
            profileConjunction: 'y',
            profileFreelancer: 'freelancer',
            profileDescription: 'Soy Michael Acosta. Desarrollo soluciones web desde el frontend hasta el backend y los datos, y trabajo como freelancer en proyectos para clientes. Me importa que cada parte sea clara, útil y funcione bien en conjunto.',
            profileProjects: 'Ver proyectos',
            profileContact: 'Hablemos',
            portraitAlt: 'Avatar de GitHub de Michael Acosta: una ilustración de una persona con una laptop',
            projectsEyebrow: 'Una selección de mi trabajo',
            projectsTitle: 'Proyectos',
            projectFiltersLabel: 'Filtrar proyectos',
            filterAll: 'Todos',
            filterWork: 'Proyectos web',
            filterGames: 'Juegos',
            filterStatusAll: 'Mostrando todos los proyectos y juegos',
            filterStatusWork: 'Mostrando proyectos web',
            filterStatusGames: 'Mostrando juegos',
            codeLink: 'Código',
            demoLink: 'Demo',
            twistoraImageLabel: 'Abrir la demo de Twistora',
            twistoraAlt: 'Cronómetro de Twistora y simulador 3D de cubo',
            twistoraDescription: 'Un cronómetro de speedcubing junto a un simulador 3D de cubo Rubik.',
            devwebcampImageLabel: 'Abrir la demo de DevWebCamp',
            devwebcampAlt: 'Página principal de DevWebCamp',
            devwebcampDescription: 'Una plataforma PHP para organizar una conferencia de desarrollo web.',
            interestGalleryLabel: 'Capturas de Interest Calculator',
            previousImage: 'Ver captura anterior',
            nextImage: 'Ver captura siguiente',
            interestAlt1: 'Gráfico de crecimiento del saldo en Interest Calculator',
            interestAlt2: 'Vista inicial de Interest Calculator y selección de interés',
            interestAlt3: 'Proyección de interés compuesto en Interest Calculator',
            interestAlt4: 'Tabla de crecimiento del saldo de Interest Calculator',
            interestDescription: 'Una forma visual de explorar el interés simple y compuesto.',
            diabetesImageLabel: 'Abrir la demo de Diabetes Predictor',
            diabetesAlt: 'Captura del proyecto Diabetes Predictor',
            diabetesDescription: 'Una estimación informativa a partir de datos biométricos; no sustituye orientación médica.',
            appSalonImageLabel: 'Abrir la demo de AppSalon',
            appSalonAlt: 'Interfaz de acceso y citas de AppSalon',
            appSalonDescription: 'Una aplicación de gestión de citas desarrollada con PHP y MVC.',
            textforgeGalleryLabel: 'Capturas de TextForge',
            textforgeAlt1: 'Banners ASCII de TextForge con distintas fuentes y colores',
            textforgeAlt2: 'Ejemplos de alineación y fuentes de TextForge',
            textforgeAlt3: 'Fuentes y colores disponibles en TextForge',
            textforgeAlt4: 'Ayuda de línea de comandos de TextForge',
            textforgeDescription: 'Una CLI en Bash que genera banners ASCII personalizables en la terminal.',
            gamesEyebrow: 'Pequeños mundos para jugar',
            gamesTitle: 'Algunos juegos',
            featuredGame: 'JUEGO DESTACADO',
            game2048ImageLabel: 'Jugar 2048',
            game2048Alt: 'Partida de rompecabezas numérico 2048',
            game2048Description: 'Un rompecabezas numérico clásico, llevado a la web con cuidado.',
            spaceInvadersImageLabel: 'Jugar Space Invaders',
            spaceInvadersAlt: 'Pantalla de juego de Space Invaders',
            sudokuImageLabel: 'Jugar Sudoku',
            sudokuAlt: 'Aplicación de rompecabezas Sudoku',
            snakeImageLabel: 'Jugar Snake',
            snakeAlt: 'Juego Snake listo para jugar',
            playLink: 'Jugar',
            stackEyebrow: 'Algunas tecnologías seleccionadas',
            stackTitle: 'Mi ecosistema',
            stackGroupsLabel: 'Tecnologías y habilidades',
            stackDetailsLabel: 'Detalles del elemento seleccionado',
            stackNote: 'Selecciona un elemento para ver su categoría.',
            groupDevelopment: 'Desarrollo y lenguajes',
            groupData: 'Ecosistema de datos',
            groupLinux: 'Distribuciones Linux',
            groupTools: 'Herramientas y despliegue',
            groupSkills: 'Cómo trabajo',
            cvEyebrow: 'Un vistazo a mi recorrido',
            cvTitle: 'En proceso',
            cvStatus: 'CV — Coming Soon',
            cvDescription: 'Mi currículum estará disponible aquí próximamente.',
            contactEyebrow: 'Hablemos',
            contactTitle: '¿Tienes algo en mente',
            footerName: 'Michael Acosta',
            footerCopyright: '©',
            typeWebStandard: 'Estándar web',
            typeStylesheet: 'Lenguaje de estilos',
            typeUiLibrary: 'Biblioteca de gráficos 3D',
            typeCssTool: 'Preprocesador CSS',
            typeCssFramework: 'Framework CSS',
            typeChartLibrary: 'Biblioteca de gráficos',
            typeMapLibrary: 'Biblioteca de mapas',
            typeBackendLanguage: 'Lenguaje de backend',
            typeWebFramework: 'Framework web',
            typeMlLibrary: 'Biblioteca de aprendizaje automático',
            typeProgrammingLanguage: 'Lenguaje de programación',
            typeShellLanguage: 'Lenguaje de shell',
            typeQueryLanguage: 'Lenguaje de consulta relacional',
            typeDatabaseEngine: 'Sistema de gestión de bases de datos relacionales',
            typeDatabaseClient: 'Cliente de gestión de bases de datos',
            typeLinuxDistribution: 'Distribución Linux',
            typeVersionControl: 'Control de versiones',
            typeTaskRunner: 'Ejecutor de tareas',
            typeDependencyManager: 'Gestor de dependencias',
            typeRuntime: 'Entorno de ejecución de JavaScript',
            typePackageManager: 'Gestor de paquetes',
            typeEdgePlatform: 'Plataforma de despliegue en el edge',
            typeContainerTool: 'Herramientas de contenedores',
            typeDeploymentPlatform: 'Plataforma de despliegue',
            typeTestRunner: 'Ejecutor de pruebas',
            typeCollaborationPlatform: 'Plataforma de alojamiento de código',
            typeProfessionalSkill: 'Habilidad profesional',
            typeLanguageSkill: 'Idioma',
            typeIndependentWork: 'Forma de trabajo',
            skillTeamwork: 'Trabajo en equipo',
            skillCollaboration: 'Colaboración y comunicación',
            skillProblemSolving: 'Resolución de problemas',
            skillLearning: 'Aprendizaje continuo',
            skillAdaptability: 'Adaptabilidad',
            skillOrganization: 'Organización y atención al detalle',
            skillTyping: 'Mecanografía eficiente',
            skillEnglish: 'Inglés como segundo idioma',
            skillAutonomy: 'Trabajo autónomo en proyectos'
        }
    };
    const groups = [
        { id: 'development', labelKey: 'groupDevelopment' },
        { id: 'data', labelKey: 'groupData' },
        { id: 'linux', labelKey: 'groupLinux' },
        { id: 'tools', labelKey: 'groupTools' },
        { id: 'skills', labelKey: 'groupSkills' }
    ];
    const stackItems = [
        { id: 'html5', name: 'HTML5', mark: '</>', group: 'development', typeKey: 'typeWebStandard' },
        { id: 'css3', name: 'CSS3', mark: '#', group: 'development', typeKey: 'typeStylesheet' },
        { id: 'threejs', name: 'Three.js', mark: '3D', group: 'development', typeKey: 'typeUiLibrary' },
        { id: 'sass', name: 'Sass', mark: 'S', group: 'development', typeKey: 'typeCssTool' },
        { id: 'tailwind', name: 'Tailwind CSS', mark: '~', group: 'development', typeKey: 'typeCssFramework' },
        { id: 'chartjs', name: 'Chart.js', mark: '◔', group: 'development', typeKey: 'typeChartLibrary' },
        { id: 'leaflet', name: 'Leaflet', mark: '⌖', group: 'development', typeKey: 'typeMapLibrary' },
        { id: 'php', name: 'PHP', mark: 'php', group: 'development', typeKey: 'typeBackendLanguage' },
        { id: 'flask', name: 'Flask', mark: 'f', group: 'development', typeKey: 'typeWebFramework' },
        { id: 'scikit-learn', name: 'Scikit-learn', mark: 'sk', group: 'development', typeKey: 'typeMlLibrary' },
        { id: 'typescript', name: 'TypeScript', mark: 'TS', group: 'development', typeKey: 'typeProgrammingLanguage' },
        { id: 'javascript', name: 'JavaScript', mark: 'JS', group: 'development', typeKey: 'typeProgrammingLanguage' },
        { id: 'python', name: 'Python', mark: 'Py', group: 'development', typeKey: 'typeProgrammingLanguage' },
        { id: 'bash', name: 'Bash', mark: '$ _', group: 'development', typeKey: 'typeShellLanguage' },
        { id: 'sql', name: 'SQL', mark: 'SQL', group: 'data', typeKey: 'typeQueryLanguage' },
        { id: 'mysql', name: 'MySQL', mark: 'My', group: 'data', typeKey: 'typeDatabaseEngine' },
        { id: 'mariadb', name: 'MariaDB', mark: 'Ma', group: 'data', typeKey: 'typeDatabaseEngine' },
        { id: 'postgresql', name: 'PostgreSQL', mark: 'Pg', group: 'data', typeKey: 'typeDatabaseEngine' },
        { id: 'dbeaver', name: 'DBeaver', mark: 'Db', group: 'data', typeKey: 'typeDatabaseClient' },
        { id: 'tableplus', name: 'TablePlus', mark: 'Tp', group: 'data', typeKey: 'typeDatabaseClient' },
        { id: 'arch', name: 'Arch Linux', mark: 'A', group: 'linux', typeKey: 'typeLinuxDistribution' },
        { id: 'kali', name: 'Kali Linux', mark: 'K', group: 'linux', typeKey: 'typeLinuxDistribution' },
        { id: 'fedora', name: 'Fedora', mark: 'F', group: 'linux', typeKey: 'typeLinuxDistribution' },
        { id: 'ubuntu', name: 'Ubuntu', mark: 'U', group: 'linux', typeKey: 'typeLinuxDistribution' },
        { id: 'debian', name: 'Debian', mark: 'D', group: 'linux', typeKey: 'typeLinuxDistribution' },
        { id: 'git', name: 'Git', mark: '⑂', group: 'tools', typeKey: 'typeVersionControl' },
        { id: 'github', name: 'GitHub', mark: 'GH', group: 'tools', typeKey: 'typeCollaborationPlatform' },
        { id: 'gulp', name: 'Gulp', mark: 'G', group: 'tools', typeKey: 'typeTaskRunner' },
        { id: 'composer', name: 'Composer', mark: 'C', group: 'tools', typeKey: 'typeDependencyManager' },
        { id: 'nodejs', name: 'Node.js', mark: 'JS', group: 'tools', typeKey: 'typeRuntime' },
        { id: 'npm', name: 'npm', mark: 'npm', group: 'tools', typeKey: 'typePackageManager' },
        { id: 'cloudflare', name: 'Cloudflare Workers', mark: '↗', group: 'tools', typeKey: 'typeEdgePlatform' },
        { id: 'docker', name: 'Docker', mark: '▰', group: 'tools', typeKey: 'typeContainerTool' },
        { id: 'vercel', name: 'Vercel', mark: '▲', group: 'tools', typeKey: 'typeDeploymentPlatform' },
        { id: 'vitest', name: 'Vitest', mark: 'V', group: 'tools', typeKey: 'typeTestRunner' },
        { id: 'teamwork', name: 'Teamwork', labelKey: 'skillTeamwork', mark: 'T', group: 'skills', typeKey: 'typeProfessionalSkill' },
        { id: 'collaboration', name: 'Collaboration & communication', labelKey: 'skillCollaboration', mark: '↔', group: 'skills', typeKey: 'typeProfessionalSkill' },
        { id: 'problem-solving', name: 'Problem-solving', labelKey: 'skillProblemSolving', mark: '◎', group: 'skills', typeKey: 'typeProfessionalSkill' },
        { id: 'learning', name: 'Continuous learning', labelKey: 'skillLearning', mark: '↗', group: 'skills', typeKey: 'typeProfessionalSkill' },
        { id: 'adaptability', name: 'Adaptability', labelKey: 'skillAdaptability', mark: '↝', group: 'skills', typeKey: 'typeProfessionalSkill' },
        { id: 'organization', name: 'Organization & attention to detail', labelKey: 'skillOrganization', mark: '⊞', group: 'skills', typeKey: 'typeProfessionalSkill' },
        { id: 'typing', name: 'Efficient typing', labelKey: 'skillTyping', mark: '⌨', group: 'skills', typeKey: 'typeProfessionalSkill' },
        { id: 'english', name: 'English as a second language', labelKey: 'skillEnglish', mark: 'EN', group: 'skills', typeKey: 'typeLanguageSkill' },
        { id: 'autonomy', name: 'Independent project work', labelKey: 'skillAutonomy', mark: '↗', group: 'skills', typeKey: 'typeIndependentWork' }
    ];
    const galleryImages = {
        interest: [
            { src: 'img/interest%20calculator%20APP%203.jpg', altKey: 'interestAlt1', width: 1274, height: 634 },
            { src: 'img/interest%20calculator%20APP.jpg', altKey: 'interestAlt2', width: 1323, height: 862 },
            { src: 'img/interest%20calculator%20APP%202.jpg', altKey: 'interestAlt3', width: 1132, height: 863 },
            { src: 'img/interest%20calculator%20APP%204.jpg', altKey: 'interestAlt4', width: 1130, height: 863 }
        ],
        textforge: [
            { src: 'img/textForge%20CLI%20(3).jpeg', altKey: 'textforgeAlt1', width: 1412, height: 549 },
            { src: 'img/textForge%20CLI%20(4).jpeg', altKey: 'textforgeAlt2', width: 996, height: 396 },
            { src: 'img/textForge%20CLI%20(1).jpeg', altKey: 'textforgeAlt3', width: 614, height: 751 },
            { src: 'img/textForge%20CLI%20(2).jpeg', altKey: 'textforgeAlt4', width: 658, height: 593 }
        ]
    };
    const primaryLanguage = typeof navigator === 'undefined'
        ? ''
        : (navigator.languages?.[0] || navigator.language || '').toLowerCase().split('-')[0];
    const language = primaryLanguage === 'es' ? 'es' : 'en';
    function translate(key) {
        const localized = translations[language][key];
        if (localized === undefined)
            throw new Error(`Missing ${language} translation: ${key}`);
        return localized;
    }
    function applyTranslations() {
        document.documentElement.lang = language;
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = translate(element.dataset.i18n ?? '');
        });
        document.querySelectorAll('[data-i18n-content]').forEach((element) => {
            element.setAttribute('content', translate(element.dataset.i18nContent ?? ''));
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
            element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel ?? ''));
        });
        document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
            element.alt = translate(element.dataset.i18nAlt ?? '');
        });
    }
    const sectionObserverTargets = document.querySelectorAll('[data-active-section]');
    const navigationLinks = new Map();
    document.querySelectorAll('[data-nav]').forEach((link) => {
        if (link.dataset.nav)
            navigationLinks.set(link.dataset.nav, link);
    });
    const year = document.querySelector('[data-current-year]');
    if (year)
        year.textContent = String(new Date().getFullYear());
    function initializeReveals() {
        const revealTargets = document.querySelectorAll('[data-reveal]');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion && 'IntersectionObserver' in window) {
            document.body.classList.add('has-js-reveal');
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
            revealTargets.forEach((target) => revealObserver.observe(target));
            return;
        }
        revealTargets.forEach((target) => target.classList.add('is-visible'));
    }
    function initializeNavigation() {
        if (!('IntersectionObserver' in window))
            return;
        const visibleSections = new Set();
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting)
                    visibleSections.add(entry.target.id);
                else
                    visibleSections.delete(entry.target.id);
            });
            const activeSection = [...visibleSections]
                .map((id) => document.getElementById(id))
                .filter((section) => section !== null)
                .sort((first, second) => {
                const viewportCenter = window.innerHeight / 2;
                const firstRect = first.getBoundingClientRect();
                const secondRect = second.getBoundingClientRect();
                const firstCenter = firstRect.top + firstRect.height / 2;
                const secondCenter = secondRect.top + secondRect.height / 2;
                return Math.abs(firstCenter - viewportCenter) - Math.abs(secondCenter - viewportCenter);
            })[0];
            if (!activeSection)
                return;
            navigationLinks.forEach((link, id) => {
                if (id === activeSection.id)
                    link.setAttribute('aria-current', 'location');
                else
                    link.removeAttribute('aria-current');
            });
        }, { rootMargin: '-30% 0px -60% 0px' });
        sectionObserverTargets.forEach((section) => sectionObserver.observe(section));
    }
    function initializeProjectFilters() {
        const filterGroup = document.querySelector('[data-project-filters]');
        const projectList = document.querySelector('[data-project-list]');
        const gameCollection = document.querySelector('[data-project-games]');
        const status = document.querySelector('[data-project-filter-status]');
        if (!filterGroup || !projectList || !gameCollection || !status)
            return;
        status.textContent = translate('filterStatusAll');
        filterGroup.querySelectorAll('[data-project-filter]').forEach((button) => {
            button.addEventListener('click', () => {
                const filter = button.dataset.projectFilter;
                if (filter !== 'all' && filter !== 'work' && filter !== 'games')
                    return;
                projectList.hidden = filter === 'games';
                gameCollection.hidden = filter === 'work';
                filterGroup.querySelectorAll('[data-project-filter]').forEach((filterButton) => {
                    filterButton.setAttribute('aria-pressed', String(filterButton === button));
                });
                const statusKey = filter === 'all'
                    ? 'filterStatusAll'
                    : filter === 'work' ? 'filterStatusWork' : 'filterStatusGames';
                status.textContent = translate(statusKey);
            });
        });
    }
    function initializeStack() {
        const root = document.querySelector('[data-stack]');
        const groupsContainer = root?.querySelector('[data-stack-groups]');
        const detailGroup = root?.querySelector('[data-detail-group]');
        const detailMark = root?.querySelector('[data-detail-mark]');
        const detailName = root?.querySelector('[data-detail-name]');
        const detailType = root?.querySelector('[data-detail-type]');
        if (!root || !groupsContainer || !detailGroup || !detailMark || !detailName || !detailType)
            return;
        const selectItem = (item) => {
            root.querySelectorAll('[data-stack-item]').forEach((button) => {
                button.setAttribute('aria-pressed', String(button.dataset.stackItem === item.id));
            });
            const group = groups.find((candidate) => candidate.id === item.group);
            if (!group)
                throw new Error(`Missing stack group: ${item.group}`);
            detailGroup.textContent = translate(group.labelKey);
            detailMark.textContent = item.mark;
            detailName.textContent = item.labelKey ? translate(item.labelKey) : item.name;
            detailType.textContent = translate(item.typeKey);
        };
        const groupElements = groups.map((group) => {
            const section = document.createElement('section');
            section.className = `stack-group stack-group--${group.id}`;
            section.setAttribute('aria-labelledby', `stack-group-${group.id}`);
            const heading = document.createElement('h3');
            heading.className = 'stack-group__title';
            heading.id = `stack-group-${group.id}`;
            heading.textContent = translate(group.labelKey);
            section.append(heading);
            const list = document.createElement('div');
            list.className = 'technology-list';
            list.setAttribute('role', 'group');
            list.setAttribute('aria-label', translate(group.labelKey));
            stackItems.filter((item) => item.group === group.id).forEach((item) => {
                const button = document.createElement('button');
                button.className = 'technology';
                button.type = 'button';
                button.dataset.stackItem = item.id;
                button.setAttribute('aria-pressed', 'false');
                const mark = document.createElement('span');
                mark.className = 'technology__mark';
                mark.setAttribute('aria-hidden', 'true');
                mark.textContent = item.mark;
                const label = document.createElement('span');
                label.className = 'technology__name';
                label.textContent = item.labelKey ? translate(item.labelKey) : item.name;
                button.append(mark, label);
                button.addEventListener('click', () => selectItem(item));
                list.append(button);
            });
            section.append(list);
            return section;
        });
        groupsContainer.replaceChildren(...groupElements);
        const firstItem = stackItems[0];
        if (firstItem)
            selectItem(firstItem);
    }
    function initializeGalleries() {
        document.querySelectorAll('[data-gallery]').forEach((gallery) => {
            const images = galleryImages[gallery.dataset.gallery ?? ''];
            const image = gallery.querySelector('[data-gallery-image]');
            const status = gallery.querySelector('[data-gallery-status]');
            const previous = gallery.querySelector('[data-gallery-previous]');
            const next = gallery.querySelector('[data-gallery-next]');
            if (!images || !image || !status || !previous || !next)
                return;
            let activeIndex = 0;
            const showImage = (index) => {
                activeIndex = (index + images.length) % images.length;
                const current = images[activeIndex];
                if (!current)
                    return;
                image.src = current.src;
                image.alt = translate(current.altKey);
                image.width = current.width;
                image.height = current.height;
                status.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
            };
            previous.addEventListener('click', () => showImage(activeIndex - 1));
            next.addEventListener('click', () => showImage(activeIndex + 1));
            gallery.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    showImage(activeIndex - 1);
                }
                else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    showImage(activeIndex + 1);
                }
            });
            let touchStart = null;
            gallery.addEventListener('pointerdown', (event) => {
                touchStart = event.pointerType === 'touch' ? event.clientX : null;
            });
            gallery.addEventListener('pointerup', (event) => {
                if (touchStart === null)
                    return;
                const distance = event.clientX - touchStart;
                if (Math.abs(distance) > 48)
                    showImage(activeIndex + (distance < 0 ? 1 : -1));
                touchStart = null;
            });
            gallery.addEventListener('pointercancel', () => { touchStart = null; });
            showImage(activeIndex);
        });
    }
    applyTranslations();
    initializeReveals();
    initializeNavigation();
    initializeProjectFilters();
    initializeStack();
    initializeGalleries();
})();
