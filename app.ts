(() => {
  'use strict';

  type CategoryId = 'frontend' | 'backend' | 'languages' | 'databases' | 'tools';

  interface Category {
    id: CategoryId;
    label: string;
  }

  interface Technology {
    id: string;
    name: string;
    mark: string;
    category: CategoryId;
    description: string;
    project: string;
    repository: string;
  }

  interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
  }

  const categories: Category[] = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'languages', label: 'Lenguajes' },
    { id: 'databases', label: 'Bases de datos' },
    { id: 'tools', label: 'Herramientas y despliegue' }
  ];

  const technologies: Technology[] = [
    { id: 'html5', name: 'HTML5', mark: '</>', category: 'frontend', description: 'Estructura semántica para interfaces y aplicaciones web.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' },
    { id: 'css3', name: 'CSS3', mark: '#', category: 'frontend', description: 'Estilos responsivos y sistemas visuales para la web.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' },
    { id: 'threejs', name: 'Three.js', mark: '3D', category: 'frontend', description: 'Renderizado del cubo interactivo en el navegador.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' },
    { id: 'sass', name: 'Sass', mark: 'S', category: 'frontend', description: 'Estilos Sass en el flujo de recursos de la plataforma.', project: 'DevWebCamp', repository: 'https://github.com/MichaelAcostaDev/DevWebCamp' },
    { id: 'tailwind', name: 'Tailwind CSS', mark: '~', category: 'frontend', description: 'Utilidades CSS para la interfaz de la calculadora.', project: 'Interest Calculator', repository: 'https://github.com/MichaelAcostaDev/Interest-Calculator' },
    { id: 'chartjs', name: 'Chart.js', mark: '◔', category: 'frontend', description: 'Gráficos para visualizar información del evento.', project: 'DevWebCamp', repository: 'https://github.com/MichaelAcostaDev/DevWebCamp' },
    { id: 'leaflet', name: 'Leaflet', mark: '⌖', category: 'frontend', description: 'Mapas interactivos integrados en la plataforma.', project: 'DevWebCamp', repository: 'https://github.com/MichaelAcostaDev/DevWebCamp' },
    { id: 'php', name: 'PHP', mark: 'php', category: 'backend', description: 'Aplicación MVC para la gestión de una conferencia.', project: 'DevWebCamp', repository: 'https://github.com/MichaelAcostaDev/DevWebCamp' },
    { id: 'flask', name: 'Flask', mark: 'f', category: 'backend', description: 'Servidor web para la aplicación de predicción informativa.', project: 'Diabetes Predictor', repository: 'https://github.com/MichaelAcostaDev/diabetes-prediction-ml' },
    { id: 'scikit-learn', name: 'Scikit-learn', mark: 'sk', category: 'backend', description: 'Modelo de aprendizaje automático usado por el predictor.', project: 'Diabetes Predictor', repository: 'https://github.com/MichaelAcostaDev/diabetes-prediction-ml' },
    { id: 'typescript', name: 'TypeScript', mark: 'TS', category: 'languages', description: 'Lógica tipada de aplicaciones web interactivas.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' },
    { id: 'javascript', name: 'JavaScript', mark: 'JS', category: 'languages', description: 'Interactividad en interfaces web y herramientas de proyecto.', project: 'DevWebCamp', repository: 'https://github.com/MichaelAcostaDev/DevWebCamp' },
    { id: 'python', name: 'Python', mark: 'Py', category: 'languages', description: 'Procesamiento del modelo de predicción con Scikit-learn.', project: 'Diabetes Predictor', repository: 'https://github.com/MichaelAcostaDev/diabetes-prediction-ml' },
    { id: 'bash', name: 'Bash', mark: '$ _', category: 'languages', description: 'Implementación de una CLI para generar banners ASCII.', project: 'TextForge', repository: 'https://github.com/MichaelAcostaDev/TextForge' },
    { id: 'mysql', name: 'MySQL', mark: 'SQL', category: 'databases', description: 'Base de datos de la plataforma de gestión de eventos.', project: 'DevWebCamp', repository: 'https://github.com/MichaelAcostaDev/DevWebCamp' },
    { id: 'git', name: 'Git', mark: '⑂', category: 'tools', description: 'Control de versiones en los repositorios de los proyectos.', project: 'TextForge', repository: 'https://github.com/MichaelAcostaDev/TextForge' },
    { id: 'gulp', name: 'Gulp', mark: 'G', category: 'tools', description: 'Automatización del flujo de recursos frontend.', project: 'DevWebCamp', repository: 'https://github.com/MichaelAcostaDev/DevWebCamp' },
    { id: 'composer', name: 'Composer', mark: 'C', category: 'tools', description: 'Gestión de dependencias en la aplicación PHP.', project: 'DevWebCamp', repository: 'https://github.com/MichaelAcostaDev/DevWebCamp' },
    { id: 'nodejs', name: 'Node.js', mark: 'JS', category: 'tools', description: 'Herramientas de desarrollo y compilación de proyectos web.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' },
    { id: 'npm', name: 'npm', mark: 'npm', category: 'tools', description: 'Gestión de scripts y paquetes del proyecto.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' },
    { id: 'cloudflare', name: 'Cloudflare Workers', mark: '↗', category: 'tools', description: 'Despliegue de una aplicación estática con recursos en Cloudflare.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' },
    { id: 'docker', name: 'Docker', mark: '▰', category: 'tools', description: 'Vista previa reproducible del proyecto en un contenedor.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' },
    { id: 'vercel', name: 'Vercel', mark: '▲', category: 'tools', description: 'Configuración de despliegue de la aplicación Flask.', project: 'Diabetes Predictor', repository: 'https://github.com/MichaelAcostaDev/diabetes-prediction-ml' },
    { id: 'vitest', name: 'Vitest', mark: 'V', category: 'tools', description: 'Pruebas automatizadas dentro del flujo de verificación.', project: 'Twistora', repository: 'https://github.com/MichaelAcostaDev/Twistora' }
  ];

  const galleryImages: Record<string, GalleryImage[]> = {
    interest: [
      { src: 'img/interest%20calculator%20APP%203.jpg', alt: 'Gráfico de crecimiento del saldo en Interest Calculator', width: 1274, height: 634 },
      { src: 'img/interest%20calculator%20APP.jpg', alt: 'Vista inicial de Interest Calculator y selección de interés', width: 1323, height: 862 },
      { src: 'img/interest%20calculator%20APP%202.jpg', alt: 'Proyección de interés compuesto en Interest Calculator', width: 1132, height: 863 },
      { src: 'img/interest%20calculator%20APP%204.jpg', alt: 'Tabla de crecimiento de saldo en Interest Calculator', width: 1130, height: 863 }
    ],
    textforge: [
      { src: 'img/textForge%20CLI%20(3).jpeg', alt: 'Banners ASCII de TextForge en distintas fuentes y colores', width: 1412, height: 549 },
      { src: 'img/textForge%20CLI%20(4).jpeg', alt: 'Ejemplos de alineación y fuentes de TextForge', width: 996, height: 396 },
      { src: 'img/textForge%20CLI%20(1).jpeg', alt: 'Fuentes y colores disponibles en TextForge', width: 614, height: 751 },
      { src: 'img/textForge%20CLI%20(2).jpeg', alt: 'Ayuda de línea de comandos de TextForge', width: 658, height: 593 }
    ]
  };

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

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach((link, id) => {
          if (id === entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sectionObserverTargets.forEach((section) => sectionObserver.observe(section));
  }

  function initializeStack(): void {
    const root = document.querySelector<HTMLElement>('[data-stack]');
    const list = root?.querySelector<HTMLElement>('[data-technology-list]');
    const panel = root?.querySelector<HTMLElement>('[role="tabpanel"]');
    const tabs = root?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const detailCategory = root?.querySelector<HTMLElement>('[data-detail-category]');
    const detailMark = root?.querySelector<HTMLElement>('[data-detail-mark]');
    const detailName = root?.querySelector<HTMLElement>('[data-detail-name]');
    const detailDescription = root?.querySelector<HTMLElement>('[data-detail-description]');
    const detailProject = root?.querySelector<HTMLAnchorElement>('[data-detail-project]');
    if (!root || !list || !panel || !tabs || !detailCategory || !detailMark || !detailName || !detailDescription || !detailProject) return;

    let activeCategory: CategoryId = 'frontend';
    const isCategoryId = (value: string | undefined): value is CategoryId =>
      categories.some((category) => category.id === value);

    const selectTechnology = (technology: Technology): void => {
      list.querySelectorAll<HTMLButtonElement>('[data-tech]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.tech === technology.id));
      });
      const category = categories.find((item) => item.id === technology.category);
      detailCategory.textContent = category?.label ?? '';
      detailMark.textContent = technology.mark;
      detailName.textContent = technology.name;
      detailDescription.textContent = technology.description;
      detailProject.href = technology.repository;
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';
      detailProject.replaceChildren(document.createTextNode(`Explorar en ${technology.project} `), arrow);
    };

    const renderCategory = (categoryId: CategoryId): void => {
      activeCategory = categoryId;
      const category = categories.find((item) => item.id === categoryId);
      if (!category) return;
      const items = technologies.filter((item) => item.category === categoryId);
      if (!items.length) return;

      tabs.forEach((tab) => {
        const selected = tab.dataset.category === categoryId;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });

      panel.setAttribute('aria-labelledby', `category-${categoryId}`);
      list.setAttribute('aria-label', `Tecnologías de ${category.label.toLowerCase()}`);
      const buttons = items.map((technology, index) => {
        const button = document.createElement('button');
        button.className = 'technology';
        button.type = 'button';
        button.dataset.tech = technology.id;
        button.setAttribute('aria-pressed', String(index === 0));

        const mark = document.createElement('span');
        mark.className = 'technology__mark';
        mark.setAttribute('aria-hidden', 'true');
        mark.textContent = technology.mark;

        const label = document.createElement('span');
        label.textContent = technology.name;
        button.append(mark, label);
        button.addEventListener('click', () => selectTechnology(technology));
        return button;
      });
      list.replaceChildren(...buttons);
      list.classList.remove('is-entering');
      void list.offsetWidth;
      list.classList.add('is-entering');
      const firstTechnology = items[0];
      if (firstTechnology) selectTechnology(firstTechnology);
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        const categoryId = tab.dataset.category;
        if (isCategoryId(categoryId)) renderCategory(categoryId);
      });
      tab.addEventListener('keydown', (event) => {
        const offset = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1
          : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1
            : event.key === 'Home' ? -index
              : event.key === 'End' ? tabs.length - 1 - index : 0;
        if (offset === 0) return;
        event.preventDefault();
        const nextIndex = (index + offset + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];
        if (!nextTab) return;
        nextTab.focus();
        const categoryId = nextTab.dataset.category;
        if (isCategoryId(categoryId)) renderCategory(categoryId);
      });
    });

    renderCategory(activeCategory);
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
        image.alt = current.alt;
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

  initializeReveals();
  initializeNavigation();
  initializeStack();
  initializeGalleries();
})();
