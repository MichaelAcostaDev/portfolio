(() => {
  'use strict';

  /* ---------- Types ---------- */
  type Lang = 'en' | 'es';
  type Evidence = 'source' | 'config';
  type TechStatus = 'repo' | 'listed';
  type CategoryId = 'frontend' | 'backend' | 'data' | 'tools' | 'concepts';
  type ProjectId = 'twistora' | 'diabetes' | 'devwebcamp' | 'interest';

  interface Project {
    id: ProjectId;
    name: string;
    repo: string;
    demo: string | null;
    image: string | null;
    width: number;
    height: number;
    tech: string[];
    evidence: Evidence;
    flow: string[];
  }
  interface Tech {
    label: string;
    category: CategoryId;
    status: TechStatus;
    projects: string[];
  }

  /* ---------- Constants (edit here) ---------- */
  const STORAGE_KEY = 'portfolio-lang';
  const CONTACT_EMAIL = ''; // Set a verified address to enable the mailto link.
  const GITHUB = 'https://github.com/MichaelAcostaDev';
  const LINKEDIN = 'https://www.linkedin.com/in/michael-acosta-dev/';
  const SECTION_IDS = ['top', 'about', 'projects', 'cases', 'stack', 'approach', 'cv', 'contact'];
  const CATEGORIES: CategoryId[] = ['frontend', 'backend', 'data', 'tools', 'concepts'];

  /* ---------- Translations ---------- */
  const en = {
    'meta.title': 'Michael Acosta — Full-stack developer portfolio',
    'meta.desc': 'Portfolio of Michael Acosta: full-stack projects in PHP MVC, TypeScript, Flask machine learning and interactive software, with source-verified case studies.',
    'skip': 'Skip to content',
    'nav.aria': 'Main navigation',
    'lang.aria': 'Language',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.cases': 'Case studies',
    'nav.stack': 'Stack',
    'nav.approach': 'Approach',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'hero.kicker': 'Full-stack developer',
    'hero.statement': 'Building practical software through structured engineering, thoughtful interfaces, and problem-solving.',
    'hero.desc': 'I build traditional full-stack applications, data-driven systems and interactive software. The work below is documented from its source code.',
    'hero.cta1': 'Explore Projects',
    'hero.cta2': 'Contact Me',
    'hero.links': 'Profiles',
    'hero.diagram': 'Conceptual layer map: interface, logic, server and data',
    'hero.d.interface': 'INTERFACE',
    'hero.d.logic': 'LOGIC',
    'hero.d.server': 'SERVER',
    'hero.d.data': 'DATA',
    'hero.d.note': 'Conceptual layer map, not a specific project',
    'about.title': 'Practical software, built end to end.',
    'about.p1': 'My public repositories cover PHP MVC applications, TypeScript interfaces, a Flask machine-learning app and browser games.',
    'about.p2': 'I like turning a narrow problem into a complete experience: a calculator that explains its formulas, a router that keeps responsibilities apart, a form that validates before it predicts.',
    'about.p3': 'Everything on this page is traced to a repository. Anything I could not verify is marked as such.',
    'projects.title': 'Selected projects',
    'projects.intro': 'Four projects chosen for range. Each description is traced to its source code or README and labelled accordingly.',
    'projects.implemented': 'Implemented',
    'projects.decision': 'Technical decision',
    'projects.tech': 'Technologies',
    'projects.repo': 'Repository',
    'projects.demo': 'Live demo',
    'projects.demoNote': 'Linked from the repository; not independently tested',
    'projects.noDemo': 'No verified live demo',
    'ev.source': 'Core logic verified in source',
    'ev.config': 'Build config and README verified',
    'cases.title': 'Case studies',
    'cases.intro': 'Condensed case studies. Each diagram is derived from the files named in its evidence label.',
    'cases.aria': 'Case study projects',
    'case.context': 'Context and problem',
    'case.req': 'Requirements and constraints',
    'case.arch': 'Architecture',
    'case.flow': 'Implementation and data flow',
    'case.decision': 'Decisions and trade-offs',
    'case.limits': 'Limitations',
    'case.outcome': 'Outcome and demo',
    'case.flow.source': 'Diagram derived from verified source files.',
    'case.flow.config': 'Diagram derived from package.json and README; module-level detail pending.',
    'stack.title': 'Technical stack',
    'stack.intro': 'Grouped by area. Select a technology to see where it appears. Categories reflect my supplied skills, not verified proficiency in every item.',
    'stack.hint': 'Select a technology.',
    'stack.repo': 'Demonstrated in',
    'stack.listed': 'Listed among my skills. Not part of the featured projects.',
    'stack.l.repo': 'Demonstrated in a repository',
    'stack.l.listed': 'Listed skill',
    'cat.frontend': 'Frontend',
    'cat.backend': 'Backend',
    'cat.data': 'Data, AI and analysis',
    'cat.tools': 'Tools and systems',
    'cat.concepts': 'Engineering concepts',
    'approach.title': 'Engineering approach',
    'approach.intro': 'Six stages, each shown with an example from my own repositories.',
    'ap.1.t': 'Understand the requirements',
    'ap.1.e': 'Interest Calculator shows the formulas next to the result instead of returning only a final number.',
    'ap.2.t': 'Identify constraints',
    'ap.2.e': 'Twistora’s verify script chains type-check, tests, build, static validation and a Wrangler dry run.',
    'ap.3.t': 'Structure the application',
    'ap.3.e': 'DevWebCamp keeps routing in one Router class and separates controllers, models and views.',
    'ap.4.t': 'Implement the core logic',
    'ap.4.e': 'Interest Calculator builds typed growth points once in calculate() and reuses them for cards, chart and table.',
    'ap.5.t': 'Validate inputs and behavior',
    'ap.5.e': 'Diabetes Insight returns per-field errors for empty, non-numeric or negative values before predicting.',
    'ap.6.t': 'Review and refine',
    'ap.6.e': 'Twistora ships a Vitest suite and a type-check step inside its repository.',
    'cv.title': 'Curriculum Vitae — Coming Soon',
    'cv.text': 'The document is being prepared. A download will appear here once the PDF exists.',
    'cv.status': 'No file available yet',
    'cv.l1': 'Profile',
    'cv.l2': 'Education',
    'cv.l3': 'Projects',
    'contact.title': 'Contact',
    'contact.text': 'Reach me through the channels below.',
    'contact.email': 'Email',
    'contact.emailPending': 'Email: to be added',
    'footer.nav': 'Footer navigation',
    'footer.rights': '© 2026 Michael Alexander Acosta Ortega.',
    'footer.built': 'HTML5 · CSS3 · TypeScript',
    'p.twistora.kind': 'Interactive TypeScript application · 3D',
    'p.twistora.purpose': 'A speedcubing web app that pairs a precise timer with an interactive 3D Rubik’s Cube simulator, so scrambles can be generated, timed and applied to the cube.',
    'p.twistora.features': 'Hold-to-ready timer, scramble generation, manual face and middle-slice turns, automatic solving, solve history, Ao5 / Ao12 statistics, light and dark themes.',
    'p.twistora.decision': 'Combines a timer, scramble notation and a Three.js cube in one browser app. Automatic solving relies on a Kociemba-based solver integration, as stated in the README.',
    'p.twistora.alt': 'Twistora screenshot: timer, scramble and 3D cube',
    'p.twistora.req': 'Static browser app; TypeScript compiled with tsc; Node.js 22 or newer; no required environment variables or Cloudflare bindings (README).',
    'p.twistora.arch': 'TypeScript sources in src/ compile to a static site through scripts/build-static.mjs and are served as a Cloudflare Worker with static assets. Vitest tests and a Docker preview complete the workflow.',
    'p.twistora.limits': 'Module-level details such as the cube model and solver wiring are still to be documented.',
    'p.twistora.outcome': 'A deployed demo is linked from the repository’s About field. Its availability was not independently tested.',
    'p.diabetes.kind': 'Flask app · machine-learning inference',
    'p.diabetes.purpose': 'Estimates diabetes risk from patient health metrics with a trained Scikit-learn model. The output is informational and not medical advice.',
    'p.diabetes.features': 'Form generated from the CSV headers, per-field validation, predicted label with confidence, English and Spanish interface.',
    'p.diabetes.decision': 'Form fields, validation and prediction all derive from the dataset’s columns, and the fitted scaler and linear SVC are persisted together with joblib.',
    'p.diabetes.alt': 'Prediction pipeline diagram',
    'p.diabetes.req': 'Python with Flask, pandas and Scikit-learn; the dataset must contain an Outcome column; every input must be present, numeric and non-negative.',
    'p.diabetes.arch': 'app.py exposes /, /predict and /health; predictor.py holds the DiabetesPredictor class; translations.py centralizes both languages; templates/ and static/ hold the interface.',
    'p.diabetes.limits': 'A single CSV trains the model and no accuracy metrics are claimed here. Predictions are informational only.',
    'p.diabetes.outcome': 'Source-verified implementation. A vercel.json is present, but no live demo link was verified.',
    'p.devwebcamp.kind': 'PHP MVC · event management platform',
    'p.devwebcamp.purpose': 'A platform for a web-development conference: accounts, package registration, conference and workshop selection, payments, tickets and an admin area.',
    'p.devwebcamp.features': 'Custom router, authentication and password-reset routes, admin CRUD for speakers and events, JSON endpoints, free and paid registration paths, ticket page.',
    'p.devwebcamp.decision': 'A hand-written Router maps GET and POST paths to controller methods, with one public entry point (public/index.php) for every request.',
    'p.devwebcamp.alt': 'DevWebCamp home page screenshot',
    'p.devwebcamp.req': 'PHP 8 or newer, MySQL, Composer, and Node.js with npm for Gulp and Sass assets (README).',
    'p.devwebcamp.arch': 'controllers/, models/, views/, classes/ and includes/ behind public/ and Router.php, with Composer packages and a Gulp plus Sass asset pipeline.',
    'p.devwebcamp.limits': 'The PayPal payment flow is documented in the README but was not independently tested.',
    'p.devwebcamp.outcome': 'The README calls the project deployed, but its demo link is a placeholder, so no demo is linked here.',
    'p.interest.kind': 'TypeScript frontend · calculations and charts',
    'p.interest.purpose': 'Calculates simple and compound interest and shows how a balance grows, with formulas, a canvas chart and a period-by-period table.',
    'p.interest.features': 'Live results, simple and compound modes, three chart views (growth, interest, comparison), growth table, locale-aware currency, English or Spanish by browser language.',
    'p.interest.decision': 'One calculate() function produces typed growth points that feed the result cards, the canvas chart and the table, so the three always agree.',
    'p.interest.alt': 'Interest Calculator screenshot with the projection panel',
    'p.interest.req': 'No backend; TypeScript compiled and served statically; negative values are rejected during rendering.',
    'p.interest.arch': 'A single src/main.ts: typed modes and state, calculate(), Intl-based formatters, a canvas chart renderer and a table builder, styled with Tailwind CSS.',
    'p.interest.limits': 'An educational projection; the app footer states it is not financial advice.',
    'p.interest.outcome': 'Source-verified implementation. No live demo link was found in the README.'
  };
  type Key = keyof typeof en;

  const es: Record<Key, string> = {
    'meta.title': 'Michael Acosta — Portafolio de desarrollador full-stack',
    'meta.desc': 'Portafolio de Michael Acosta: proyectos full-stack en PHP MVC, TypeScript, machine learning con Flask y software interactivo, con casos de estudio verificados en el código.',
    'skip': 'Saltar al contenido',
    'nav.aria': 'Navegación principal',
    'lang.aria': 'Idioma',
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.cases': 'Casos de estudio',
    'nav.stack': 'Stack',
    'nav.approach': 'Enfoque',
    'nav.cv': 'CV',
    'nav.contact': 'Contacto',
    'hero.kicker': 'Desarrollador full-stack',
    'hero.statement': 'Construyendo software práctico con ingeniería estructurada, interfaces cuidadas y resolución de problemas.',
    'hero.desc': 'Construyo aplicaciones full-stack tradicionales, sistemas basados en datos y software interactivo. El trabajo que sigue está documentado a partir de su código fuente.',
    'hero.cta1': 'Explorar proyectos',
    'hero.cta2': 'Contáctame',
    'hero.links': 'Perfiles',
    'hero.diagram': 'Mapa conceptual de capas: interfaz, lógica, servidor y datos',
    'hero.d.interface': 'INTERFAZ',
    'hero.d.logic': 'LÓGICA',
    'hero.d.server': 'SERVIDOR',
    'hero.d.data': 'DATOS',
    'hero.d.note': 'Mapa conceptual de capas, no un proyecto concreto',
    'about.title': 'Software práctico, de principio a fin.',
    'about.p1': 'Mis repositorios públicos incluyen aplicaciones PHP MVC, interfaces en TypeScript, una app de machine learning con Flask y juegos para el navegador.',
    'about.p2': 'Me gusta convertir un problema acotado en una experiencia completa: una calculadora que explica sus fórmulas, un router que separa responsabilidades, un formulario que valida antes de predecir.',
    'about.p3': 'Todo lo que aparece en esta página se apoya en un repositorio. Lo que no pude verificar está marcado como tal.',
    'projects.title': 'Proyectos seleccionados',
    'projects.intro': 'Cuatro proyectos elegidos por su variedad. Cada descripción se apoya en su código fuente o README y está etiquetada según corresponda.',
    'projects.implemented': 'Implementado',
    'projects.decision': 'Decisión técnica',
    'projects.tech': 'Tecnologías',
    'projects.repo': 'Repositorio',
    'projects.demo': 'Demo en vivo',
    'projects.demoNote': 'Enlazada desde el repositorio; no probada de forma independiente',
    'projects.noDemo': 'Sin demo en vivo verificada',
    'ev.source': 'Lógica principal verificada en el código',
    'ev.config': 'Configuración de build y README verificados',
    'cases.title': 'Casos de estudio',
    'cases.intro': 'Casos de estudio condensados. Cada diagrama se deriva de los archivos indicados en su etiqueta de evidencia.',
    'cases.aria': 'Proyectos de los casos de estudio',
    'case.context': 'Contexto y problema',
    'case.req': 'Requisitos y restricciones',
    'case.arch': 'Arquitectura',
    'case.flow': 'Implementación y flujo de datos',
    'case.decision': 'Decisiones y compromisos',
    'case.limits': 'Limitaciones',
    'case.outcome': 'Resultado y demo',
    'case.flow.source': 'Diagrama derivado de archivos fuente verificados.',
    'case.flow.config': 'Diagrama derivado de package.json y README; el detalle por módulos está pendiente.',
    'stack.title': 'Stack técnico',
    'stack.intro': 'Agrupado por área. Selecciona una tecnología para ver dónde aparece. Las categorías reflejan las habilidades que indiqué, no un dominio verificado de cada elemento.',
    'stack.hint': 'Selecciona una tecnología.',
    'stack.repo': 'Demostrada en',
    'stack.listed': 'Incluida entre mis habilidades. No forma parte de los proyectos destacados.',
    'stack.l.repo': 'Demostrada en un repositorio',
    'stack.l.listed': 'Habilidad declarada',
    'cat.frontend': 'Frontend',
    'cat.backend': 'Backend',
    'cat.data': 'Datos, IA y análisis',
    'cat.tools': 'Herramientas y sistemas',
    'cat.concepts': 'Conceptos de ingeniería',
    'approach.title': 'Enfoque de ingeniería',
    'approach.intro': 'Seis etapas, cada una con un ejemplo de mis propios repositorios.',
    'ap.1.t': 'Entender los requisitos',
    'ap.1.e': 'Interest Calculator muestra las fórmulas junto al resultado en lugar de devolver solo una cifra final.',
    'ap.2.t': 'Identificar restricciones',
    'ap.2.e': 'El script verify de Twistora encadena verificación de tipos, pruebas, build, validación estática y una ejecución de prueba de Wrangler.',
    'ap.3.t': 'Estructurar la aplicación',
    'ap.3.e': 'DevWebCamp concentra el enrutamiento en una clase Router y separa controladores, modelos y vistas.',
    'ap.4.t': 'Implementar la lógica central',
    'ap.4.e': 'Interest Calculator genera una sola vez los puntos de crecimiento tipados en calculate() y los reutiliza en tarjetas, gráfico y tabla.',
    'ap.5.t': 'Validar entradas y comportamiento',
    'ap.5.e': 'Diabetes Insight devuelve errores por campo para valores vacíos, no numéricos o negativos antes de predecir.',
    'ap.6.t': 'Revisar y refinar',
    'ap.6.e': 'Twistora incluye en su repositorio una batería de pruebas con Vitest y un paso de verificación de tipos.',
    'cv.title': 'Curriculum Vitae — Próximamente',
    'cv.text': 'El documento se está preparando. La descarga aparecerá aquí cuando exista el PDF.',
    'cv.status': 'Aún no hay archivo disponible',
    'cv.l1': 'Perfil',
    'cv.l2': 'Educación',
    'cv.l3': 'Proyectos',
    'contact.title': 'Contacto',
    'contact.text': 'Puedes escribirme por los canales de abajo.',
    'contact.email': 'Correo',
    'contact.emailPending': 'Correo: por añadir',
    'footer.nav': 'Navegación del pie de página',
    'footer.rights': '© 2026 Michael Alexander Acosta Ortega.',
    'footer.built': 'HTML5 · CSS3 · TypeScript',
    'p.twistora.kind': 'Aplicación interactiva en TypeScript · 3D',
    'p.twistora.purpose': 'Una aplicación web de speedcubing que une un cronómetro preciso con un simulador 3D interactivo del cubo de Rubik, para generar mezclas, cronometrarlas y aplicarlas al cubo.',
    'p.twistora.features': 'Cronómetro con espera para iniciar, generación de mezclas, giros manuales de caras y capas centrales, resolución automática, historial de resoluciones, estadísticas Ao5 / Ao12, temas claro y oscuro.',
    'p.twistora.decision': 'Combina un cronómetro, la notación de mezclas y un cubo en Three.js dentro de una sola aplicación. La resolución automática usa una integración de solver basada en Kociemba, según indica el README.',
    'p.twistora.alt': 'Captura de Twistora: cronómetro, mezcla y cubo 3D',
    'p.twistora.req': 'Aplicación estática para el navegador; TypeScript compilado con tsc; Node.js 22 o superior; sin variables de entorno ni bindings de Cloudflare obligatorios (README).',
    'p.twistora.arch': 'Los fuentes TypeScript de src/ se compilan a un sitio estático mediante scripts/build-static.mjs y se sirven como Cloudflare Worker con assets estáticos. Pruebas con Vitest y una vista previa con Docker completan el flujo.',
    'p.twistora.limits': 'Los detalles por módulo, como el modelo del cubo y la integración del solver, aún están por documentar.',
    'p.twistora.outcome': 'El campo About del repositorio enlaza una demo desplegada. Su disponibilidad no se probó de forma independiente.',
    'p.diabetes.kind': 'App Flask · inferencia con machine learning',
    'p.diabetes.purpose': 'Estima el riesgo de diabetes a partir de métricas de salud con un modelo entrenado de Scikit-learn. El resultado es informativo y no constituye consejo médico.',
    'p.diabetes.features': 'Formulario generado desde las cabeceras del CSV, validación por campo, etiqueta predicha con confianza, interfaz en inglés y español.',
    'p.diabetes.decision': 'Los campos del formulario, la validación y la predicción derivan de las columnas del dataset, y el escalador ajustado y el SVC lineal se guardan juntos con joblib.',
    'p.diabetes.alt': 'Diagrama del flujo de predicción',
    'p.diabetes.req': 'Python con Flask, pandas y Scikit-learn; el dataset debe tener una columna Outcome; cada entrada debe estar presente, ser numérica y no negativa.',
    'p.diabetes.arch': 'app.py expone /, /predict y /health; predictor.py contiene la clase DiabetesPredictor; translations.py centraliza ambos idiomas; templates/ y static/ forman la interfaz.',
    'p.diabetes.limits': 'Un único CSV entrena el modelo y aquí no se afirman métricas de precisión. Las predicciones son solo informativas.',
    'p.diabetes.outcome': 'Implementación verificada en el código. Hay un vercel.json, pero no se verificó ningún enlace de demo en vivo.',
    'p.devwebcamp.kind': 'PHP MVC · plataforma de gestión de eventos',
    'p.devwebcamp.purpose': 'Una plataforma para una conferencia de desarrollo web: cuentas, registro por paquetes, selección de conferencias y workshops, pagos, boletos y un área de administración.',
    'p.devwebcamp.features': 'Router propio, rutas de autenticación y recuperación de contraseña, CRUD de ponentes y eventos para administración, endpoints JSON, registro gratuito y de pago, página de boleto.',
    'p.devwebcamp.decision': 'Un Router escrito a mano asigna rutas GET y POST a métodos de controladores, con un único punto de entrada público (public/index.php) para todas las peticiones.',
    'p.devwebcamp.alt': 'Captura de la página de inicio de DevWebCamp',
    'p.devwebcamp.req': 'PHP 8 o superior, MySQL, Composer, y Node.js con npm para los assets con Gulp y Sass (README).',
    'p.devwebcamp.arch': 'controllers/, models/, views/, classes/ e includes/ detrás de public/ y Router.php, con paquetes de Composer y un flujo de assets con Gulp y Sass.',
    'p.devwebcamp.limits': 'El flujo de pago con PayPal está documentado en el README, pero no se probó de forma independiente.',
    'p.devwebcamp.outcome': 'El README indica que el proyecto está desplegado, pero su enlace de demo es un marcador, así que aquí no se enlaza ninguna demo.',
    'p.interest.kind': 'Frontend en TypeScript · cálculos y gráficos',
    'p.interest.purpose': 'Calcula interés simple y compuesto y muestra cómo crece un saldo, con fórmulas, un gráfico en canvas y una tabla periodo a periodo.',
    'p.interest.features': 'Resultados en vivo, modos simple y compuesto, tres vistas de gráfico (crecimiento, interés, comparación), tabla de crecimiento, moneda según la configuración regional, inglés o español según el idioma del navegador.',
    'p.interest.decision': 'Una sola función calculate() genera puntos de crecimiento tipados que alimentan las tarjetas de resultado, el gráfico en canvas y la tabla, de modo que los tres siempre coinciden.',
    'p.interest.alt': 'Captura de Interest Calculator con el panel de proyección',
    'p.interest.req': 'Sin backend; TypeScript compilado y servido de forma estática; los valores negativos se rechazan al renderizar.',
    'p.interest.arch': 'Un único src/main.ts: modos y estado tipados, calculate(), formateadores basados en Intl, un renderizador de gráficos en canvas y un generador de tabla, con estilos de Tailwind CSS.',
    'p.interest.limits': 'Es una proyección educativa; el pie de la app indica que no es asesoría financiera.',
    'p.interest.outcome': 'Implementación verificada en el código. No se encontró un enlace de demo en vivo en el README.'
  };

  const I18N: Record<Lang, Record<string, string>> = { en, es };

  /* ---------- Data ---------- */
  const PROJECTS: Project[] = [
    {
      id: 'twistora', name: 'Twistora', repo: 'https://github.com/MichaelAcostaDev/Twistora',
      demo: 'https://twistora.michaelacostafreelancer.workers.dev/', image: 'assets/twistora.jpg', width: 1200, height: 675,
      tech: ['TypeScript', 'Three.js', 'HTML5', 'CSS3', 'Vitest', 'Cloudflare Workers', 'Docker'],
      evidence: 'config', flow: ['TypeScript (src/)', 'tsc + build-static.mjs', 'dist/ static site', 'Cloudflare Worker (assets)']
    },
    {
      id: 'diabetes', name: 'Diabetes Insight', repo: 'https://github.com/MichaelAcostaDev/diabetes-prediction-ml',
      demo: null, image: null, width: 0, height: 0,
      tech: ['Python', 'Flask', 'Scikit-learn', 'pandas', 'joblib', 'JavaScript'],
      evidence: 'source', flow: ['Form (CSV headers)', 'POST /predict', 'validate_inputs()', 'StandardScaler', 'SVC (linear kernel)', 'Label + confidence']
    },
    {
      id: 'devwebcamp', name: 'DevWebCamp', repo: 'https://github.com/MichaelAcostaDev/DevWebCamp',
      demo: null, image: 'assets/devwebcamp.jpg', width: 1200, height: 675,
      tech: ['PHP 8', 'MySQL', 'MVC', 'Composer', 'Sass', 'Gulp', 'JavaScript', 'Chart.js', 'Leaflet', 'PayPal SDK'],
      evidence: 'source', flow: ['public/index.php', 'Router (GET / POST)', 'Controller', 'Model · MySQL', 'View + layout']
    },
    {
      id: 'interest', name: 'Interest Calculator', repo: 'https://github.com/MichaelAcostaDev/Interest-Calculator',
      demo: null, image: 'assets/interest.jpg', width: 1132, height: 863,
      tech: ['TypeScript', 'Tailwind CSS', 'Intl API', 'Canvas', 'HTML5'],
      evidence: 'source', flow: ['Form inputs', 'readInput()', 'calculate()', 'GrowthPoint[]', 'Cards · chart · table']
    }
  ];

  const TECH: Tech[] = [
    { label: 'HTML5', category: 'frontend', status: 'repo', projects: ['Twistora', 'Interest Calculator', 'DevWebCamp'] },
    { label: 'CSS3', category: 'frontend', status: 'repo', projects: ['Twistora', 'DevWebCamp'] },
    { label: 'SCSS', category: 'frontend', status: 'repo', projects: ['DevWebCamp'] },
    { label: 'JavaScript', category: 'frontend', status: 'repo', projects: ['DevWebCamp', 'Diabetes Insight', '2048'] },
    { label: 'TypeScript', category: 'frontend', status: 'repo', projects: ['Twistora', 'Interest Calculator'] },
    { label: 'Tailwind CSS', category: 'frontend', status: 'repo', projects: ['Interest Calculator'] },
    { label: 'React Native', category: 'frontend', status: 'listed', projects: [] },
    { label: 'Bootstrap', category: 'frontend', status: 'listed', projects: [] },
    { label: 'PHP', category: 'backend', status: 'repo', projects: ['DevWebCamp', 'UpTask MVC'] },
    { label: 'Laravel', category: 'backend', status: 'listed', projects: [] },
    { label: 'Node.js', category: 'backend', status: 'repo', projects: ['Twistora (build tooling)'] },
    { label: 'Ruby with Sinatra', category: 'backend', status: 'repo', projects: ['2048', 'Space Invaders'] },
    { label: 'Python with Flask', category: 'backend', status: 'repo', projects: ['Diabetes Insight'] },
    { label: 'SQL', category: 'data', status: 'repo', projects: ['DevWebCamp (MySQL)'] },
    { label: 'Python machine learning', category: 'data', status: 'repo', projects: ['Diabetes Insight'] },
    { label: 'R', category: 'data', status: 'repo', projects: ['R-Programming-Language (learning files)'] },
    { label: 'Generative AI', category: 'data', status: 'listed', projects: [] },
    { label: 'Prompt Engineering', category: 'data', status: 'listed', projects: [] },
    { label: 'Git', category: 'tools', status: 'repo', projects: ['All repositories'] },
    { label: 'GitHub', category: 'tools', status: 'repo', projects: ['All repositories'] },
    { label: 'npm', category: 'tools', status: 'repo', projects: ['Twistora', 'DevWebCamp'] },
    { label: 'Bash', category: 'tools', status: 'listed', projects: [] },
    { label: 'Shell', category: 'tools', status: 'listed', projects: [] },
    { label: 'Linux', category: 'tools', status: 'listed', projects: [] },
    { label: 'Arch Linux', category: 'tools', status: 'listed', projects: [] },
    { label: 'Ubuntu', category: 'tools', status: 'listed', projects: [] },
    { label: 'Debian', category: 'tools', status: 'listed', projects: [] },
    { label: 'Kali Linux', category: 'tools', status: 'listed', projects: [] },
    { label: 'Windows', category: 'tools', status: 'listed', projects: [] },
    { label: 'Arduino', category: 'tools', status: 'listed', projects: [] },
    { label: 'REST APIs', category: 'concepts', status: 'repo', projects: ['DevWebCamp (/api routes)'] },
    { label: 'CRUD', category: 'concepts', status: 'repo', projects: ['DevWebCamp (admin routes)'] },
    { label: 'Object-oriented programming', category: 'concepts', status: 'repo', projects: ['DevWebCamp', 'Diabetes Insight'] },
    { label: 'Data presentation', category: 'concepts', status: 'repo', projects: ['Interest Calculator'] },
    { label: 'Frontend development', category: 'concepts', status: 'repo', projects: ['Twistora', 'Interest Calculator'] },
    { label: 'Backend development', category: 'concepts', status: 'repo', projects: ['DevWebCamp', 'Diabetes Insight'] },
    { label: 'Data structures', category: 'concepts', status: 'listed', projects: [] },
    { label: 'MVP development', category: 'concepts', status: 'listed', projects: [] },
    { label: 'Web performance', category: 'concepts', status: 'listed', projects: [] },
    { label: 'Version control', category: 'concepts', status: 'listed', projects: [] },
    { label: 'Code review', category: 'concepts', status: 'listed', projects: [] }
  ];

  /* ---------- State ---------- */
  let lang: Lang = 'en';
  let activeCase: ProjectId = 'twistora';
  let selectedTech: string | null = null;

  /* ---------- Helpers ---------- */
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const t = (key: string): string => I18N[lang][key] ?? key;

  function $<T extends Element>(selector: string, root: ParentNode = document): T {
    const node = root.querySelector<T>(selector);
    if (!node) throw new Error(`Missing element: ${selector}`);
    return node;
  }
  function h<K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = ''): HTMLElementTagNameMap[K] {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function s<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number> = {}, text = ''): SVGElementTagNameMap[K] {
    const node = document.createElementNS(SVG_NS, tag);
    for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, String(value));
    if (text) node.textContent = text;
    return node;
  }
  function link(href: string, className: string, text = ''): HTMLAnchorElement {
    const a = h('a', className, text);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }
  function arrowLink(href: string, label: string): HTMLAnchorElement {
    const a = link(href, 'arrow');
    a.setAttribute('aria-label', label);
    const icon = s('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': 'true' });
    icon.append(s('path', { d: 'M3 8h10M9 4l4 4-4 4', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }));
    a.append(icon);
    return a;
  }
  function readStoredLang(): Lang | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'en' || value === 'es' ? value : null;
    } catch {
      return null;
    }
  }
  function storeLang(value: Lang): void {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable: the choice simply is not persisted */
    }
  }
  function detectLang(): Lang {
    return readStoredLang() ?? (navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en');
  }
  function findProject(id: ProjectId): Project {
    const project = PROJECTS.find((p) => p.id === id);
    if (!project) throw new Error(`Unknown project: ${id}`);
    return project;
  }

  /* ---------- Diagram ---------- */
  function flowDiagram(steps: string[], title: string): SVGSVGElement {
    const rowHeight = 56;
    const svg = s('svg', {
      viewBox: `0 0 280 ${steps.length * rowHeight}`, class: 'flow', role: 'img', 'aria-label': title
    });
    steps.forEach((step, i) => {
      const y = i * rowHeight + 6;
      svg.append(s('text', { x: 0, y: y + 27, class: 'flow__id' }, `N${i + 1}`));
      svg.append(s('rect', { x: 32, y, width: 244, height: 36, rx: 8, class: 'flow__node' }));
      svg.append(s('text', { x: 44, y: y + 23, class: 'flow__text' }, step));
      if (i < steps.length - 1) {
        svg.append(s('path', { d: `M154 ${y + 36}v14m-4 -5l4 5l4 -5`, class: 'flow__edge' }));
      }
    });
    return svg;
  }

  /* ---------- Renderers ---------- */
  function applyStatic(): void {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]']) {
      $<HTMLMetaElement>(selector).content = t('meta.desc');
    }
    $<HTMLMetaElement>('meta[property="og:title"]').content = t('meta.title');
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((node) => {
      node.textContent = t(node.dataset.i18n ?? '');
    });
    document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((node) => {
      node.setAttribute('aria-label', t(node.dataset.i18nAria ?? ''));
    });
    document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
  }

  function labelled(label: string, content: Node): HTMLDivElement {
    const wrap = h('div', 'field');
    wrap.append(h('p', 'meta', label), content);
    return wrap;
  }

  function renderProjects(): void {
    const list = $<HTMLElement>('#project-list');
    list.replaceChildren();
    PROJECTS.forEach((project, index) => {
      const key = (field: string): string => t(`p.${project.id}.${field}`);
      const card = h('article', 'card project');
      const media = h('div', 'project__media');
      if (project.image) {
        const img = h('img');
        img.src = project.image;
        img.alt = key('alt');
        img.width = project.width;
        img.height = project.height;
        img.loading = index === 0 ? 'eager' : 'lazy';
        img.decoding = 'async';
        media.append(img);
      } else {
        media.classList.add('project__media--diagram');
        media.append(flowDiagram(project.flow, key('alt')));
      }

      const body = h('div', 'project__body');
      const tag = h('p', 'tag');
      tag.append(h('span', 'dot'), document.createTextNode(key('kind')));
      body.append(tag, h('h3', 'project__title', project.name), h('p', 'lead', key('purpose')));
      body.append(h('p', 'evidence', t(`ev.${project.evidence}`)));
      body.append(labelled(t('projects.implemented'), h('p', '', key('features'))));
      body.append(labelled(t('projects.decision'), h('p', '', key('decision'))));
      const chips = h('ul', 'chips');
      project.tech.forEach((name) => chips.append(h('li', '', name)));
      body.append(labelled(t('projects.tech'), chips));

      const actions = h('div', 'actions');
      actions.append(arrowLink(project.repo, `${t('projects.repo')}: ${project.name}`), h('span', 'meta', t('projects.repo')));
      if (project.demo) {
        const demo = h('div', 'demo');
        demo.append(link(project.demo, 'btn btn--ghost-light', t('projects.demo')), h('span', 'meta', t('projects.demoNote')));
        actions.append(demo);
      } else {
        actions.append(h('span', 'meta', t('projects.noDemo')));
      }
      body.append(actions);
      card.append(media, body);
      list.append(card);
    });
  }

  function renderCases(): void {
    const tabs = $<HTMLElement>('#case-tabs');
    const panel = $<HTMLElement>('#case-panel');
    tabs.replaceChildren();
    PROJECTS.forEach((project) => {
      const selected = project.id === activeCase;
      const tab = h('button', 'tab', project.name);
      tab.type = 'button';
      tab.id = `tab-${project.id}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(selected));
      tab.setAttribute('aria-controls', 'case-panel');
      tab.tabIndex = selected ? 0 : -1;
      tab.dataset.project = project.id;
      tabs.append(tab);
    });

    const project = findProject(activeCase);
    panel.setAttribute('aria-labelledby', `tab-${project.id}`);
    panel.replaceChildren();
    const key = (field: string): string => t(`p.${project.id}.${field}`);
    const rows: Array<[string, string]> = [
      ['case.context', key('purpose')], ['case.req', key('req')], ['case.arch', key('arch')],
      ['case.decision', key('decision')], ['case.limits', key('limits')], ['case.outcome', key('outcome')]
    ];
    const list = h('dl', 'rows');
    rows.forEach(([label, value], i) => {
      const dt = h('dt', 'meta');
      dt.append(h('span', 'num', String(i + 1).padStart(2, '0')), document.createTextNode(` ${t(label)}`));
      list.append(dt, h('dd', '', value));
    });
    const figure = h('figure', 'diagram');
    figure.append(
      h('figcaption', 'meta', t('case.flow')),
      flowDiagram(project.flow, `${project.name}: ${t('case.flow')}`),
      h('p', 'note', t(`case.flow.${project.evidence}`))
    );
    panel.append(list, figure);
  }

  function renderStack(): void {
    const root = $<HTMLElement>('#stack-groups');
    root.replaceChildren();
    CATEGORIES.forEach((category) => {
      const group = h('div', 'group');
      group.append(h('p', 'meta', t(`cat.${category}`)));
      const chips = h('ul', 'chips chips--buttons');
      TECH.filter((item) => item.category === category).forEach((item) => {
        const li = h('li');
        const button = h('button', `chip chip--${item.status}`, item.label);
        button.type = 'button';
        button.dataset.tech = item.label;
        button.setAttribute('aria-pressed', String(item.label === selectedTech));
        li.append(button);
        chips.append(li);
      });
      group.append(chips);
      root.append(group);
    });
    const out = $<HTMLElement>('#stack-detail');
    out.replaceChildren();
    const item = TECH.find((x) => x.label === selectedTech);
    if (!item) {
      out.append(h('p', 'muted', t('stack.hint')));
      return;
    }
    out.append(h('p', 'detail__name', item.label));
    out.append(h('p', 'muted', item.status === 'repo' ? `${t('stack.repo')}: ${item.projects.join(', ')}` : t('stack.listed')));
  }

  function renderApproach(): void {
    const list = $<HTMLElement>('#approach-list');
    list.replaceChildren();
    for (let i = 1; i <= 6; i += 1) {
      const li = h('li', 'step');
      li.append(h('span', 'counter', `0${i}`), h('h3', 'step__title', t(`ap.${i}.t`)), h('p', '', t(`ap.${i}.e`)));
      list.append(li);
    }
  }

  function renderContact(): void {
    const slot = $<HTMLElement>('#contact-email');
    slot.replaceChildren();
    if (CONTACT_EMAIL) {
      const a = h('a', 'btn btn--solid-light', `${t('contact.email')}: ${CONTACT_EMAIL}`);
      a.href = `mailto:${CONTACT_EMAIL}`;
      slot.append(a);
    } else {
      slot.append(h('span', 'btn btn--disabled', t('contact.emailPending')));
    }
  }

  function renderAll(): void {
    applyStatic();
    renderProjects();
    renderCases();
    renderStack();
    renderApproach();
    renderContact();
  }

  function setLanguage(next: Lang): void {
    lang = next;
    storeLang(next);
    renderAll();
  }

  /* ---------- Behavior ---------- */
  function wireLanguage(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach((button) => {
      button.addEventListener('click', () => setLanguage(button.dataset.lang === 'es' ? 'es' : 'en'));
    });
  }

  function wireCases(): void {
    const tabs = $<HTMLElement>('#case-tabs');
    const select = (id: ProjectId, focus: boolean): void => {
      activeCase = id;
      renderCases();
      if (focus) $<HTMLButtonElement>(`#tab-${id}`).focus();
    };
    tabs.addEventListener('click', (event) => {
      const tab = (event.target as Element).closest<HTMLButtonElement>('[role="tab"]');
      if (tab?.dataset.project) select(tab.dataset.project as ProjectId, false);
    });
    tabs.addEventListener('keydown', (event) => {
      const index = PROJECTS.findIndex((p) => p.id === activeCase);
      const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
      const jump = event.key === 'Home' ? 0 : event.key === 'End' ? PROJECTS.length - 1 : null;
      const target = jump ?? (step ? (index + step + PROJECTS.length) % PROJECTS.length : null);
      const next = target === null ? undefined : PROJECTS[target];
      if (next) {
        event.preventDefault();
        select(next.id, true);
      }
    });
  }

  function wireStack(): void {
    $<HTMLElement>('#stack-groups').addEventListener('click', (event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>('[data-tech]');
      if (!button?.dataset.tech) return;
      const label = button.dataset.tech;
      selectedTech = selectedTech === label ? null : label;
      renderStack();
      const again = document.querySelector<HTMLButtonElement>(`[data-tech="${CSS.escape(label)}"]`);
      again?.focus();
    });
  }

  function wireScrollSpy(): void {
    const links = new Map<string, HTMLAnchorElement>();
    document.querySelectorAll<HTMLAnchorElement>('a[data-nav]').forEach((a) => links.set(a.dataset.nav ?? '', a));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a, id) => {
          if (id === entry.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  function wireLinks(): void {
    document.querySelectorAll<HTMLAnchorElement>('a[data-profile]').forEach((a) => {
      a.href = a.dataset.profile === 'github' ? GITHUB : LINKEDIN;
    });
  }

  function init(): void {
    lang = detectLang();
    wireLinks();
    wireLanguage();
    wireCases();
    wireStack();
    renderAll();
    wireScrollSpy();
  }

  init();
})();
