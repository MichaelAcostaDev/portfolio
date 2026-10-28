(() => {
  'use strict';

  type Language = 'en' | 'es';
  type GroupId = 'development' | 'data' | 'linux' | 'tools' | 'skills';

  interface StackGroup {
    id: GroupId;
    labelKey: string;
  }

  interface StackItem {
    id: string;
    name: string;
    labelKey?: string;
    mark: string;
    group: GroupId;
    typeKey: string;
  }

  interface GalleryImage {
    src: string;
    altKey: string;
    width: number;
    height: number;
  }

  const translations: Record<Language, Record<string, string>> = {
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
      stackLabName: 'STACK / SYSTEM MAP',
      stackSystemReady: 'System ready',
      stackSystemConnected: 'Connected',
      stackGroupsLabel: 'Technology categories',
      stackVisualLabel: 'Connected technology nodes',
      stackNodeLabel: 'Technology nodes',
      stackDetailsLabel: 'Selected item details and syntax preview',
      stackSyntaxLabel: 'SYNTAX PREVIEW',
      stackCoreLabel: 'FULL-STACK',
      stackExploreHint: 'Select a node to inspect its syntax',
      stackItemsLabel: 'NODES',
      stackNote: 'Explore a working map of technologies and skills; it is not a proficiency scale.',
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
      stackLabName: 'STACK / MAPA DEL SISTEMA',
      stackSystemReady: 'Sistema listo',
      stackSystemConnected: 'Conectado',
      stackGroupsLabel: 'Categorías tecnológicas',
      stackVisualLabel: 'Nodos de tecnologías conectadas',
      stackNodeLabel: 'Nodos tecnológicos',
      stackDetailsLabel: 'Detalles y vista de sintaxis del elemento seleccionado',
      stackSyntaxLabel: 'VISTA DE SINTAXIS',
      stackCoreLabel: 'FULL-STACK',
      stackExploreHint: 'Selecciona un nodo para explorar su sintaxis',
      stackItemsLabel: 'NODOS',
      stackNote: 'Explora un mapa interactivo de tecnologías y habilidades; no representa niveles de dominio.',
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

  const groups: StackGroup[] = [
    { id: 'development', labelKey: 'groupDevelopment' },
    { id: 'data', labelKey: 'groupData' },
    { id: 'linux', labelKey: 'groupLinux' },
    { id: 'tools', labelKey: 'groupTools' },
    { id: 'skills', labelKey: 'groupSkills' }
  ];

  const stackItems: StackItem[] = [
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

  const stackCodeSamples: Record<string, string> = {
    html5: '<main>\n  <h1>Build with intent</h1>\n</main>',
    css3: '.portfolio {\n  display: grid;\n  gap: 1.5rem;\n}',
    threejs: 'const scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera();',
    sass: '$ink: #171717;\n\n.portfolio {\n  color: $ink;\n}',
    tailwind: '<div class="grid gap-6">\n  <article>...</article>\n</div>',
    chartjs: 'new Chart(canvas, {\n  type: "line",\n  data: { labels, datasets }\n});',
    leaflet: "L.map('map').setView([0, 0], 3);",
    php: "<?php\n$project = 'portfolio';\necho $project;",
    flask: "@app.get('/')\ndef home():\n    return 'Portfolio'",
    'scikit-learn': 'model = LogisticRegression()\nmodel.fit(features, labels)',
    typescript: 'type Project = { name: string };\nconst projects: Project[] = [];',
    javascript: "const projects = ['web', 'games'];",
    python: "def build_portfolio():\n    return 'Michael Acosta'",
    bash: "printf '%s\\n' 'Hello, portfolio'",
    sql: 'SELECT name\nFROM projects\nORDER BY name;',
    mysql: 'SELECT name FROM projects\nLIMIT 5;',
    mariadb: 'SELECT name FROM projects\nLIMIT 5;',
    postgresql: 'SELECT name FROM projects\nLIMIT 5;',
    dbeaver: 'SELECT COUNT(*)\nFROM projects;',
    tableplus: 'SELECT COUNT(*)\nFROM projects;',
    arch: 'sudo pacman -Syu',
    kali: 'sudo apt update',
    fedora: 'sudo dnf upgrade',
    ubuntu: 'sudo apt update',
    debian: 'sudo apt update',
    git: 'git status --short',
    github: 'git push origin main',
    gulp: "gulp.task('build', gulp.series('styles'));",
    composer: 'composer install',
    nodejs: 'node --version',
    npm: 'npm run build',
    cloudflare: "export default {\n  fetch() {\n    return new Response('Hello');\n  }\n};",
    docker: 'docker build -t portfolio .',
    vercel: 'vercel --prod',
    vitest: "import { test, expect } from 'vitest';\ntest('works', () => expect(true).toBe(true));",
    teamwork: '// Share context. Build together.',
    collaboration: "const feedback = { open: true };",
    'problem-solving': 'const nextStep = problems.find(Boolean);',
    learning: 'const notes = [...previousNotes, newIdea];',
    adaptability: "const approach = needsChange ? 'adjust' : 'continue';",
    organization: 'const tasks = [...backlog].sort(byPriority);',
    typing: '// Practice builds accuracy.',
    english: "const greeting = 'Hello, world!';",
    autonomy: 'function deliver(task) {\n  return task.complete();\n}'
  };

  const galleryImages: Record<string, GalleryImage[]> = {
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
  const language: Language = primaryLanguage === 'es' ? 'es' : 'en';

  function translate(key: string): string {
    const localized = translations[language][key];
    if (localized === undefined) throw new Error(`Missing ${language} translation: ${key}`);
    return localized;
  }

  function applyTranslations(): void {
    document.documentElement.lang = language;
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
      element.textContent = translate(element.dataset.i18n ?? '');
    });
    document.querySelectorAll<HTMLElement>('[data-i18n-content]').forEach((element) => {
      element.setAttribute('content', translate(element.dataset.i18nContent ?? ''));
    });
    document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach((element) => {
      element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel ?? ''));
    });
    document.querySelectorAll<HTMLImageElement>('[data-i18n-alt]').forEach((element) => {
      element.alt = translate(element.dataset.i18nAlt ?? '');
    });
  }

  const sectionObserverTargets = document.querySelectorAll<HTMLElement>('[data-active-section]');
  const navigationLinks = new Map<string, HTMLAnchorElement>();

  document.querySelectorAll<HTMLAnchorElement>('[data-nav]').forEach((link) => {
    if (link.dataset.nav) navigationLinks.set(link.dataset.nav, link);
  });

  const year = document.querySelector<HTMLElement>('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  function initializeReveals(): void {
    const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
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

  function initializeNavigation(): void {
    if (!('IntersectionObserver' in window)) return;

    const visibleSections = new Set<string>();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.add(entry.target.id);
        else visibleSections.delete(entry.target.id);
      });
      const activeSection = [...visibleSections]
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null)
        .sort((first, second) => {
          const viewportCenter = window.innerHeight / 2;
          const firstRect = first.getBoundingClientRect();
          const secondRect = second.getBoundingClientRect();
          const firstCenter = firstRect.top + firstRect.height / 2;
          const secondCenter = secondRect.top + secondRect.height / 2;
          return Math.abs(firstCenter - viewportCenter) - Math.abs(secondCenter - viewportCenter);
        })[0];
      if (!activeSection) return;

      navigationLinks.forEach((link, id) => {
        if (id === activeSection.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sectionObserverTargets.forEach((section) => sectionObserver.observe(section));
  }

  function initializeProjectFilters(): void {
    const filterGroup = document.querySelector<HTMLElement>('[data-project-filters]');
    const projectList = document.querySelector<HTMLElement>('[data-project-list]');
    const gameCollection = document.querySelector<HTMLElement>('[data-project-games]');
    const status = document.querySelector<HTMLElement>('[data-project-filter-status]');
    if (!filterGroup || !projectList || !gameCollection || !status) return;
    status.textContent = translate('filterStatusAll');

    filterGroup.querySelectorAll<HTMLButtonElement>('[data-project-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.projectFilter;
        if (filter !== 'all' && filter !== 'work' && filter !== 'games') return;

        projectList.hidden = filter === 'games';
        gameCollection.hidden = filter === 'work';
        filterGroup.querySelectorAll<HTMLButtonElement>('[data-project-filter]').forEach((filterButton) => {
          filterButton.setAttribute('aria-pressed', String(filterButton === button));
        });
        const statusKey = filter === 'all'
          ? 'filterStatusAll'
          : filter === 'work' ? 'filterStatusWork' : 'filterStatusGames';
        status.textContent = translate(statusKey);
      });
    });
  }

  function initializeStack(): void {
    const root = document.querySelector<HTMLElement>('[data-stack]');
    const groupsContainer = root?.querySelector<HTMLElement>('[data-stack-groups]');
    const visual = root?.querySelector<HTMLElement>('[data-stack-visual]');
    const leftNodes = root?.querySelector<HTMLElement>('[data-stack-nodes-left]');
    const rightNodes = root?.querySelector<HTMLElement>('[data-stack-nodes-right]');
    const panel = root?.querySelector<HTMLElement>('[data-stack-panel]');
    const connections = root?.querySelector<SVGSVGElement>('[data-stack-connections]');
    const burst = root?.querySelector<HTMLElement>('[data-stack-burst]');
    const core = root?.querySelector<HTMLElement>('[data-stack-core]');
    const state = root?.querySelector<HTMLElement>('[data-stack-state]');
    const file = root?.querySelector<HTMLElement>('[data-stack-file]');
    const count = root?.querySelector<HTMLElement>('[data-stack-count]');
    const lineNumbers = root?.querySelector<HTMLElement>('[data-stack-line-numbers]');
    const code = root?.querySelector<HTMLElement>('[data-stack-code]');
    const detailGroup = root?.querySelector<HTMLElement>('[data-detail-group]');
    const detailMark = root?.querySelector<HTMLElement>('[data-detail-mark]');
    const detailName = root?.querySelector<HTMLElement>('[data-detail-name]');
    const detailType = root?.querySelector<HTMLElement>('[data-detail-type]');
    if (
      !root || !groupsContainer || !visual || !leftNodes || !rightNodes || !panel ||
      !connections || !burst || !core || !state || !file || !count || !lineNumbers ||
      !code || !detailGroup || !detailMark || !detailName || !detailType
    ) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const symbolSet = ['{ }', '< />', '=>', ';', '&&', '01', '[]', '<>'];
    const particleVectors: Array<[number, number]> = [
      [-1, -0.5], [-0.6, -1], [0.2, -1], [1, -0.6], [1, 0.4], [0.4, 1], [-0.6, 1], [-1, 0.2]
    ];
    let activeGroup = groups[0];
    let selectedItem = stackItems[0];
    let burstTimeout: number | undefined;
    let pointerFrame = 0;
    let lastBurstTime = 0;
    let codeAnimation: Animation | undefined;

    if (!activeGroup || !selectedItem) return;

    const getItemName = (item: StackItem): string => item.labelKey ? translate(item.labelKey) : item.name;

    const getFileExtension = (item: StackItem): string => {
      if (item.group === 'data') return 'sql';
      if (item.group === 'linux' || item.id === 'bash' || item.id === 'git' || item.id === 'github' || item.id === 'composer' || item.id === 'npm' || item.id === 'docker' || item.id === 'vercel') return 'sh';
      if (item.group === 'skills') return 'md';
      if (item.id === 'html5') return 'html';
      if (item.id === 'css3' || item.id === 'sass' || item.id === 'tailwind') return 'css';
      if (item.id === 'php') return 'php';
      if (item.id === 'python' || item.id === 'flask' || item.id === 'scikit-learn') return 'py';
      if (item.id === 'typescript') return 'ts';
      if (item.id === 'gulp' || item.id === 'cloudflare' || item.id === 'vitest') return 'js';
      return 'js';
    };

    const drawConnections = (): void => {
      const bounds = visual.getBoundingClientRect();
      const coreBounds = core.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      connections.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
      connections.replaceChildren();
      const centerX = coreBounds.left + coreBounds.width / 2 - bounds.left;
      const centerY = coreBounds.top + coreBounds.height / 2 - bounds.top;

      visual.querySelectorAll<HTMLButtonElement>('[data-stack-item]').forEach((button) => {
        const nodeBounds = button.getBoundingClientRect();
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.classList.add('stack-connection');
        line.dataset.connection = button.dataset.stackItem;
        line.dataset.active = String(button.dataset.stackItem === selectedItem?.id);
        line.setAttribute('x1', String(nodeBounds.left + nodeBounds.width / 2 - bounds.left));
        line.setAttribute('y1', String(nodeBounds.top + nodeBounds.height / 2 - bounds.top));
        line.setAttribute('x2', String(centerX));
        line.setAttribute('y2', String(centerY));
        connections.append(line);
      });
    };

    const setPreview = (item: StackItem): void => {
      const group = groups.find((candidate) => candidate.id === item.group);
      if (!group) throw new Error(`Missing stack group: ${item.group}`);
      detailGroup.textContent = translate(group.labelKey);
      detailMark.textContent = item.mark;
      detailName.textContent = getItemName(item);
      detailType.textContent = translate(item.typeKey);
      state.textContent = `${translate('stackSystemConnected')} · ${getItemName(item)}`;
      file.textContent = `${item.id}.${getFileExtension(item)}`;

      const sample = stackCodeSamples[item.id];
      if (sample === undefined) throw new Error(`Missing stack code sample: ${item.id}`);
      code.textContent = sample;
      const lineCount = sample.split('\n').length;
      lineNumbers.textContent = Array.from({ length: lineCount }, (_, index) => String(index + 1).padStart(2, '0')).join('\n');
      codeAnimation?.cancel();
      if (!reducedMotion.matches) {
        codeAnimation = code.animate(
          [{ opacity: 0.35, transform: 'translateY(3px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 170, easing: 'ease-out' }
        );
      }

      const selectedButton = visual.querySelector<HTMLButtonElement>(`[data-stack-item="${item.id}"]`);
      visual.querySelectorAll<HTMLButtonElement>('[data-stack-item]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button === selectedButton));
      });
      visual.querySelectorAll<SVGLineElement>('[data-connection]').forEach((line) => {
        line.dataset.active = String(line.dataset.connection === item.id);
      });

      const itemIndex = stackItems.findIndex((candidate) => candidate.id === item.id);
      core.style.setProperty('--cube-rx', `${-18 + (itemIndex % 5) * 7}deg`);
      core.style.setProperty('--cube-ry', `${28 + (itemIndex % 7) * 13}deg`);
      core.dataset.activeItem = item.id;
    };

    const triggerBurst = (target: HTMLElement): void => {
      const now = performance.now();
      if (reducedMotion.matches || now - lastBurstTime < 180) return;
      lastBurstTime = now;
      window.clearTimeout(burstTimeout);
      burst.replaceChildren();
      const visualBounds = visual.getBoundingClientRect();
      const targetBounds = target.getBoundingClientRect();
      const originX = targetBounds.left + targetBounds.width / 2 - visualBounds.left;
      const originY = targetBounds.top + targetBounds.height / 2 - visualBounds.top;

      particleVectors.forEach((vector, index) => {
        const [vectorX, vectorY] = vector;
        const particle = document.createElement('span');
        particle.className = 'stack-particle';
        particle.textContent = symbolSet[index] ?? ';';
        particle.style.left = `${originX}px`;
        particle.style.top = `${originY}px`;
        particle.style.setProperty('--particle-x', `${vectorX * 38}px`);
        particle.style.setProperty('--particle-y', `${vectorY * 38}px`);
        particle.style.setProperty('--particle-delay', `${index % 4 * 18}ms`);
        burst.append(particle);
      });
      burstTimeout = window.setTimeout(() => burst.replaceChildren(), 720);
    };

    const createNode = (item: StackItem, side: 'left' | 'right'): HTMLButtonElement => {
      const button = document.createElement('button');
      button.className = `stack-node stack-node--${side}`;
      button.type = 'button';
      button.dataset.stackItem = item.id;
      button.setAttribute('aria-pressed', 'false');

      const mark = document.createElement('span');
      mark.className = 'stack-node__mark';
      mark.setAttribute('aria-hidden', 'true');
      mark.textContent = item.mark;

      const label = document.createElement('span');
      label.className = 'stack-node__name';
      label.textContent = getItemName(item);
      button.append(mark, label);
      button.addEventListener('pointerenter', () => setPreview(item));
      button.addEventListener('pointerleave', () => setPreview(selectedItem ?? item));
      button.addEventListener('focus', () => {
        setPreview(item);
        triggerBurst(button);
      });
      button.addEventListener('blur', () => setPreview(selectedItem ?? item));
      button.addEventListener('click', () => {
        selectedItem = item;
        setPreview(item);
        triggerBurst(button);
      });
      button.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        const nodes = [...visual.querySelectorAll<HTMLButtonElement>('[data-stack-item]')];
        const currentIndex = nodes.indexOf(button);
        const delta = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
        const targetIndex = event.key === 'Home' ? 0 : event.key === 'End' ? nodes.length - 1 : (currentIndex + delta + nodes.length) % nodes.length;
        event.preventDefault();
        nodes[targetIndex]?.focus();
      });
      return button;
    };

    const renderGroup = (group: StackGroup, preferredItem?: StackItem): void => {
      activeGroup = group;
      const groupItems = stackItems.filter((item) => item.group === group.id);
      const halfway = Math.ceil(groupItems.length / 2);
      leftNodes.replaceChildren(...groupItems.slice(0, halfway).map((item) => createNode(item, 'left')));
      rightNodes.replaceChildren(...groupItems.slice(halfway).map((item) => createNode(item, 'right')));
      count.textContent = String(groupItems.length).padStart(2, '0');
      panel.setAttribute('aria-labelledby', `stack-tab-${group.id}`);

      groupsContainer.querySelectorAll<HTMLButtonElement>('[role="tab"]').forEach((tab) => {
        const isActive = tab.dataset.stackGroup === group.id;
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });

      const nextItem = preferredItem && preferredItem.group === group.id
        ? preferredItem
        : groupItems[0];
      if (nextItem) {
        selectedItem = nextItem;
        setPreview(nextItem);
      }
      drawConnections();
    };

    const groupTabs = groups.map((group) => {
      const tab = document.createElement('button');
      tab.className = 'stack-category';
      tab.type = 'button';
      tab.id = `stack-tab-${group.id}`;
      tab.dataset.stackGroup = group.id;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', 'stack-panel');
      tab.setAttribute('aria-selected', 'false');
      tab.tabIndex = -1;
      tab.textContent = translate(group.labelKey);
      tab.addEventListener('click', () => renderGroup(group));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        const currentIndex = groups.findIndex((candidate) => candidate.id === group.id);
        const targetIndex = event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? groups.length - 1
            : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + groups.length) % groups.length;
        const targetGroup = groups[targetIndex];
        if (!targetGroup) return;
        event.preventDefault();
        renderGroup(targetGroup);
        groupsContainer.querySelector<HTMLButtonElement>(`[data-stack-group="${targetGroup.id}"]`)?.focus();
      });
      return tab;
    });
    groupsContainer.replaceChildren(...groupTabs);

    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(drawConnections).observe(visual);
    else window.addEventListener('resize', drawConnections);

    visual.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch' || reducedMotion.matches || pointerFrame) return;
      pointerFrame = window.requestAnimationFrame(() => {
        pointerFrame = 0;
        const bounds = visual.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        core.style.setProperty('--pointer-rx', `${y * -9}deg`);
        core.style.setProperty('--pointer-ry', `${x * 12}deg`);
      });
    });
    visual.addEventListener('pointerleave', () => {
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      core.style.removeProperty('--pointer-rx');
      core.style.removeProperty('--pointer-ry');
    });

    renderGroup(activeGroup, selectedItem);
  }

  function initializeGalleries(): void {
    document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((gallery) => {
      const images = galleryImages[gallery.dataset.gallery ?? ''];
      const image = gallery.querySelector<HTMLImageElement>('[data-gallery-image]');
      const status = gallery.querySelector<HTMLElement>('[data-gallery-status]');
      const previous = gallery.querySelector<HTMLButtonElement>('[data-gallery-previous]');
      const next = gallery.querySelector<HTMLButtonElement>('[data-gallery-next]');
      if (!images || !image || !status || !previous || !next) return;

      let activeIndex = 0;
      const showImage = (index: number): void => {
        activeIndex = (index + images.length) % images.length;
        const current = images[activeIndex];
        if (!current) return;
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
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          showImage(activeIndex + 1);
        }
      });

      let touchStart: number | null = null;
      gallery.addEventListener('pointerdown', (event) => {
        touchStart = event.pointerType === 'touch' ? event.clientX : null;
      });
      gallery.addEventListener('pointerup', (event) => {
        if (touchStart === null) return;
        const distance = event.clientX - touchStart;
        if (Math.abs(distance) > 48) showImage(activeIndex + (distance < 0 ? 1 : -1));
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
