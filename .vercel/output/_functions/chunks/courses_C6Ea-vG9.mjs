const courses = [
  {
    img: "/images/f-programacion.webp",
    title: "Fundamentos de Programación",
    slug: "Fundamentos-de-programacion",
    description: "Domina los conceptos esenciales de la programación, desde la lógica y algoritmos hasta la implementación en un lenguaje moderno como Python, ideal para principiantes.",
    name: "Neider Nieto",
    modules: "8 Módulos",
    learn: [
      "Comprender los fundamentos de la lógica y el pensamiento algorítmico.",
      "Aplicar estructuras de control y tipos de datos para resolver problemas.",
      "Escribir código limpio y modular mediante la creación de funciones.",
      "Desarrollar una base sólida para aprender cualquier otro lenguaje de programación."
    ],
    professional: [
      {
        title: "Nuevas Oportunidades Laborales",
        description: "Abre puertas a roles de desarrollador junior, analista de datos y especialista en automatización, sectores con alta demanda."
      },
      {
        title: "Aumento de la Eficiencia",
        description: "Permite automatizar tareas repetitivas en cualquier industria, optimizando tu tiempo y recursos."
      },
      {
        title: "Base para el Futuro Tecnológico",
        description: "Adquiere una de las habilidades más demandadas y crea una base sólida para aprender tecnologías más avanzadas."
      }
    ],
    courseSyllabus: [
      { title: "Pensamiento Lógico y Algoritmos", description: "Desarrolla tu capacidad de resolver problemas de forma estructurada antes de escribir una sola línea de código." },
      { title: "Tipos de Datos y Estructuras de Control", description: "Aprende a usar variables, condicionales y bucles para crear programas dinámicos." },
      { title: "Funciones y Modularidad", description: "Organiza tu código en bloques reutilizables para crear programas más limpios y eficientes." },
      { title: "Estructuras de Datos Fundamentales", description: "Gestiona colecciones de información utilizando listas y diccionarios." },
      { title: "Manejo de Errores y Excepciones", description: "Aprende a anticipar y gestionar errores para que tus programas sean más robustos." },
      { title: "Introducción a la Programación Orientada a Objetos (POO)", description: "Introduce los conceptos de clases y objetos para construir software más escalable." },
      { title: "Manejo de Archivos", description: "Lee y escribe información en archivos de texto para que tus programas puedan persistir datos." },
      { title: "Proyecto Práctico Final", description: "Aplica todo lo aprendido en un proyecto final para consolidar tus conocimientos." }
    ],
    targetAudience: [
      "Estudiantes que deseen una base sólida en programación.",
      "Profesionales que buscan reconvertirse al sector tecnológico.",
      "Cualquier persona curiosa por aprender a programar."
    ],
    prerequisites: "No se requieren conocimientos previos de programación. Solo necesitas una computadora y ganas de aprender."
  },
  {
    img: "/images/bd.webp",
    title: "Bases de Datos Relacionales",
    slug: "base-de-datos",
    description: "Aprende a diseñar, gestionar y consultar bases de datos relacionales utilizando SQL, el lenguaje estándar para la manipulación de datos.",
    name: "Neider Nieto",
    modules: "7 Módulos",
    learn: [
      "Diseñar modelos de datos eficientes y normalizados.",
      "Crear y mantener la estructura de una base de datos con SQL.",
      "Realizar consultas para extraer información valiosa.",
      "Asegurar la integridad y consistencia de los datos."
    ],
    professional: [
      {
        title: "Acceso a Roles Clave de Datos",
        description: "Esencial para roles como analista de datos, desarrollador de backend y administrador de bases de datos (DBA)."
      },
      {
        title: "Toma de Decisiones Estratégicas",
        description: "Capacita para extraer y analizar datos que fundamenten decisiones de negocio informadas y precisas."
      },
      {
        title: "Optimización del Rendimiento",
        description: "Mejora el rendimiento de las aplicaciones al diseñar bases de datos eficientes y optimizar consultas complejas."
      }
    ],
    courseSyllabus: [
      { title: "Modelado de Datos Relacionales", description: "Aprende los fundamentos del modelo relacional y cómo diseñar diagramas entidad-relación." },
      { title: "Lenguaje de Definición de Datos (DDL)", description: "Crea y administra tablas, define tipos de datos y establece restricciones para garantizar la integridad." },
      { title: "Consultas con SQL (DQL)", description: "Domina las sentencias SELECT, filtros, ordenamiento y funciones para extraer información." },
      { title: "Manipulación de Datos (DML)", description: "Aprende a insertar, actualizar y eliminar registros en tus tablas de forma segura." },
      { title: "Consultas Avanzadas y Joins", description: "Combina datos de múltiples tablas y realiza subconsultas para obtener análisis complejos." },
      { title: "Índices y Optimización de Consultas", description: "Aprende a crear índices para acelerar el rendimiento de las consultas en grandes volúmenes de datos." },
      { title: "Transacciones y Control de Concurrencia", description: "Asegura la atomicidad y consistencia de las operaciones en entornos multiusuario." }
    ],
    targetAudience: [
      "Desarrolladores que necesiten gestionar bases de datos.",
      "Analistas de datos y profesionales de BI.",
      "Administradores de sistemas que trabajen con datos estructurados."
    ],
    prerequisites: "Conocimientos básicos de informática. No es necesario saber programar, aunque puede ser de ayuda."
  },
  {
    img: "/images/web.webp",
    title: "Diseño Web",
    slug: "diseño-web",
    description: "Aprende a crear interfaces de usuario atractivas y funcionales utilizando HTML, CSS y JavaScript, las tecnologías fundamentales de la web.",
    name: "Neider Nieto",
    modules: "9 Módulos",
    learn: [
      "Estructurar contenido web de forma semántica con HTML5.",
      "Crear diseños visuales modernos y responsivos con CSS3.",
      "Añadir interactividad y dinamismo a tus sitios con JavaScript.",
      "Aplicar principios de experiencia de usuario (UX) en tus diseños."
    ],
    professional: [
      {
        title: "Perfil Full-Stack Altamente Cotizado",
        description: "Prepara para roles de desarrollador web full-stack, frontend y backend, perfiles con alta demanda en el mercado."
      },
      {
        title: "Capacidad de Crear Proyectos Completos",
        description: "Obtén la habilidad de construir y desplegar aplicaciones web completas, desde la idea hasta la producción."
      },
      {
        title: "Comprensión Integral del Ecosistema Web",
        description: "Domina el flujo de trabajo de desarrollo moderno, integrando cliente, servidor y base de datos."
      }
    ],
    courseSyllabus: [
      { title: "Maquetación con HTML5", description: "Aprende a usar las etiquetas semánticas de HTML5 para estructurar correctamente el contenido de un sitio web." },
      { title: "Estilizado con CSS3", description: "Domina Flexbox y Grid para crear diseños complejos y aplica estilos avanzados para una apariencia profesional." },
      { title: "Diseño Responsivo", description: "Asegura que tus sitios se vean y funcionen perfectamente en cualquier dispositivo, desde móviles hasta ordenadores." },
      { title: "Interactividad con JavaScript", description: "Manipula el DOM para crear efectos visuales, validar formularios y responder a las acciones del usuario." },
      { title: "Optimización y Rendimiento Web", description: "Aprende a optimizar imágenes, minimizar código y aplicar técnicas de carga diferida para un sitio más rápido." },
      { title: "Principios de UX/UI", description: "Conoce los fundamentos de la experiencia de usuario y el diseño de interfaces para crear sitios intuitivos." },
      { title: "Frameworks CSS", description: "Introduce el uso de frameworks como Tailwind CSS para acelerar tu flujo de trabajo y mantener la consistencia." },
      { title: "SEO On-Page para Diseñadores", description: "Aprende a estructurar tu HTML y contenido para mejorar el posicionamiento en buscadores." },
      { title: "Proyecto de Sitio Web Completo", description: "Diseña y construye un sitio web de varias páginas aplicando todos los conceptos aprendidos." }
    ],
    targetAudience: [
      "Principiantes que quieran ser desarrolladores web full-stack.",
      "Desarrolladores frontend que busquen aprender backend.",
      "Emprendedores que deseen construir sus propias aplicaciones web."
    ],
    prerequisites: 'Se recomienda tener conocimientos básicos de programación. El curso de "Introducción a la Programación" es una buena base.'
  },
  {
    img: "/images/seguridad.webp",
    title: "Fundamentos de Seguridad Informática",
    slug: "seguridad-informatica",
    description: "Aprende a proteger sistemas, redes y datos contra amenazas cibernéticas, aplicando las mejores prácticas de la industria.",
    name: "Neider Nieto",
    modules: "8 Módulos",
    learn: [
      "Identificar y mitigar vulnerabilidades comunes en sistemas y redes.",
      "Comprender los principios de la criptografía y su aplicación.",
      "Implementar controles de acceso y autenticación robustos.",
      "Aplicar buenas prácticas de desarrollo seguro para prevenir ataques."
    ],
    professional: [
      {
        title: "Especialización en Ciberseguridad",
        description: "Califica para roles como analista de seguridad, consultor de ciberseguridad y pentester, una de las áreas mejor pagadas."
      },
      {
        title: "Construcción de Sistemas Robustos",
        description: "Permite a desarrolladores y administradores de sistemas construir y mantener infraestructuras más seguras y confiables."
      },
      {
        title: "Reducción de Riesgos Corporativos",
        description: "Protege la información crítica y reduce el riesgo de ataques que pueden tener consecuencias financieras y de reputación."
      }
    ],
    courseSyllabus: [
      { title: "Panorama de la Ciberseguridad", description: "Entiende los tipos de amenazas, vectores de ataque y la mentalidad de un hacker ético." },
      { title: "Criptografía Aplicada", description: "Aprende a usar algoritmos de cifrado y hashing para proteger la confidencialidad e integridad de los datos." },
      { title: "Seguridad en Redes", description: "Implementa firewalls, sistemas de detección de intrusos (IDS/IPS) y VPNs para proteger la infraestructura de red." },
      { title: "Seguridad en Sistemas Operativos", description: "Aprende a fortalecer la seguridad en Windows y Linux, gestionando usuarios y permisos." },
      { title: "Seguridad de Aplicaciones Web (OWASP)", description: "Conoce y aprende a mitigar las 10 vulnerabilidades más críticas en aplicaciones web." },
      { title: "Análisis de Malware", description: "Comprende los tipos de software malicioso y las técnicas básicas para su análisis." },
      { title: "Gestión de Incidentes y Respuesta", description: "Desarrolla un plan para detectar, analizar y responder eficazmente a incidentes de seguridad." },
      { title: "Hacking Ético y Pentesting", description: "Introduce las metodologías y herramientas utilizadas para realizar pruebas de penetración controladas." }
    ],
    targetAudience: [
      "Desarrolladores que quieran escribir código más seguro.",
      "Administradores de sistemas responsables de la seguridad.",
      "Profesionales de TI que deseen especializarse en ciberseguridad."
    ],
    prerequisites: "Conocimientos básicos de redes y sistemas operativos. Se recomienda tener experiencia en programación o administración de sistemas."
  },
  {
    img: "/images/app.webp",
    title: "Creación de Apps Móviles con App Inventor",
    slug: "aplicaciones-con-app-inventor",
    description: "Crea aplicaciones para Android de forma visual y sin código con App Inventor. Ideal para principiantes, educadores y emprendedores que quieran prototipar ideas rápidamente.",
    name: "Neider Nieto",
    modules: "7 Módulos",
    learn: [
      "Diseñar interfaces de usuario interactivas con el editor visual.",
      "Programar la lógica de la aplicación usando un sistema de bloques.",
      "Integrar componentes multimedia y sensores del dispositivo.",
      "Crear una aplicación funcional lista para ser probada."
    ],
    professional: [
      {
        title: "Prototipado Rápido de Ideas",
        description: "Ideal para emprendedores y diseñadores que necesitan crear prototipos funcionales de sus ideas de apps sin invertir en código."
      },
      {
        title: "Herramienta Educativa Innovadora",
        description: "Perfecto para educadores que deseen introducir la programación y el pensamiento computacional en el aula de forma visual y accesible."
      },
      {
        title: "Iniciación al Desarrollo de Software",
        description: "Fomenta la creatividad y sirve como una excelente puerta de entrada al mundo del desarrollo de aplicaciones móviles."
      }
    ],
    courseSyllabus: [
      { title: "Introducción a App Inventor", description: "Conoce la interfaz y las funcionalidades clave de la plataforma para empezar a crear tu primera app." },
      { title: "Diseño de Interfaces de Usuario (UI)", description: "Aprende a arrastrar y soltar componentes para construir la apariencia visual de tu aplicación." },
      { title: "Programación con Bloques", description: "Ensambla bloques de lógica para definir el comportamiento de tu app y responder a eventos." },
      { title: "Uso de Multimedia y Sensores", description: "Integra imágenes, sonidos y aprovecha los sensores del teléfono como el GPS o el acelerómetro." },
      { title: "Almacenamiento de Datos con TinyDB", description: "Aprende a guardar información de forma local en el dispositivo para que persista entre sesiones." },
      { title: "Comunicación con APIs Externas", description: "Conecta tu aplicación a servicios web para obtener datos en tiempo real, como el clima o noticias." },
      { title: "Proyecto Final: App Completa", description: "Desarrolla una aplicación completa que integre múltiples pantallas, lógica y almacenamiento de datos." }
    ],
    targetAudience: [
      "Estudiantes y educadores que buscan una herramienta de iniciación.",
      "Emprendedores que quieren prototipar una idea de app.",
      "Cualquier persona creativa sin experiencia en programación."
    ],
    prerequisites: "No se requieren conocimientos de programación. Solo es necesario un computador con acceso a internet y un dispositivo Android para probar las apps."
  },
  {
    img: "/images/so.webp",
    title: "Fundamentos de Sistemas Operativos",
    slug: "sistemas-operativos",
    description: "Explora los conceptos que rigen el software más importante de un computador, aprendiendo sobre gestión de procesos, memoria y archivos.",
    name: "Neider Nieto",
    modules: "8 Módulos",
    learn: [
      "Entender cómo un SO gestiona los procesos y la planificación del CPU.",
      "Comprender las técnicas de administración de memoria física y virtual.",
      "Analizar la estructura y funcionamiento de los sistemas de archivos.",
      "Conocer la interacción entre el SO y los dispositivos de hardware."
    ],
    professional: [
      {
        title: "Base para Roles de Infraestructura",
        description: "Fundamental para roles de administrador de sistemas, ingeniero de DevOps y desarrollador de sistemas embebidos."
      },
      {
        title: "Optimización Avanzada de Software",
        description: "Permite optimizar el rendimiento, la concurrencia y la estabilidad de las aplicaciones a un nivel profundo."
      },
      {
        title: "Resolución de Problemas Complejos",
        description: "Otorga la capacidad de diagnosticar y resolver problemas complejos que ocurren a nivel de sistema operativo."
      }
    ],
    courseSyllabus: [
      { title: "Introducción a los Sistemas Operativos", description: "Conoce la arquitectura, los componentes principales y los servicios que ofrece un SO." },
      { title: "Gestión de Procesos y Planificación", description: "Aprende cómo el SO administra la ejecución de programas y asigna recursos de CPU." },
      { title: "Sincronización de Procesos", description: "Estudia los mecanismos como semáforos y monitores para evitar condiciones de carrera." },
      { title: "Administración de Memoria", description: "Estudia cómo el SO gestiona la memoria RAM y utiliza técnicas como la paginación y segmentación." },
      { title: "Sistemas de Archivos", description: "Analiza cómo se organiza, almacena y accede a la información en dispositivos de almacenamiento." },
      { title: "Gestión de Entrada/Salida (E/S)", description: "Comprende cómo el SO interactúa con los periféricos y gestiona las operaciones de E/S." },
      { title: "Seguridad y Protección", description: "Conoce los mecanismos de protección de memoria, control de acceso y autenticación en un SO." },
      { title: "Virtualización y Contenedores", description: "Introduce los conceptos de virtualización de hardware y la tecnología de contenedores como Docker." }
    ],
    targetAudience: [
      "Estudiantes de informática, ingeniería o carreras afines.",
      "Desarrolladores de software que deseen optimizar sus aplicaciones.",
      "Profesionales de sistemas que administran servidores y redes."
    ],
    prerequisites: "Conocimientos básicos de arquitectura de computadores y programación."
  },
  {
    img: "/images/arquitectura.webp",
    title: "Arquitectura de Computadores",
    slug: "arquitectura-de-computadores",
    description: "Descubre cómo están construidos los computadores por dentro, desde la CPU y la memoria hasta los buses de datos y periféricos.",
    name: "Neider Nieto",
    modules: "7 Módulos",
    learn: [
      "Comprender el funcionamiento interno de la Unidad Central de Procesamiento (CPU).",
      "Analizar la jerarquía de memoria (caché, RAM) y su impacto en el rendimiento.",
      "Entender cómo se comunican los diferentes componentes de un computador.",
      "Evaluar las características de hardware para tomar decisiones de compra o ensamblaje."
    ],
    professional: [
      {
        title: "Conocimiento Profundo del Hardware",
        description: "Esencial para desarrolladores de bajo nivel, ingenieros de hardware y especialistas en optimización de rendimiento."
      },
      {
        title: "Base para el Diseño de Sistemas",
        description: "Permite tomar decisiones informadas sobre hardware al diseñar y construir sistemas informáticos eficientes."
      },
      {
        title: "Optimización a Nivel de Máquina",
        description: "Otorga la capacidad de escribir código que aproveche al máximo la arquitectura del procesador y la memoria."
      }
    ],
    courseSyllabus: [
      { title: "La Unidad Central de Procesamiento (CPU)", description: "Explora los componentes de la CPU, como la ALU y la unidad de control, y su ciclo de instrucción." },
      { title: "Conjunto de Instrucciones (ISA)", description: "Comprende el lenguaje que el hardware ejecuta y cómo se representan las operaciones a bajo nivel." },
      { title: "Jerarquía de Memoria", description: "Estudia los diferentes niveles de memoria (registros, caché, RAM) y cómo optimizan el acceso a datos." },
      { title: "Buses y Sistemas de Entrada/Salida", description: "Analiza cómo se comunican los componentes del computador y cómo se gestionan los periféricos." },
      { title: "Pipeline y Paralelismo a Nivel de Instrucción", description: "Aprende cómo las CPUs modernas ejecutan múltiples instrucciones simultáneamente para mejorar el rendimiento." },
      { title: "Arquitecturas Paralelas y Multinúcleo", description: "Introduce conceptos de arquitecturas con múltiples procesadores y su impacto en el software." },
      { title: "Medición del Rendimiento", description: "Aprende a utilizar benchmarks y métricas para evaluar y comparar el rendimiento de diferentes sistemas." }
    ],
    targetAudience: [
      "Estudiantes de ingeniería, electrónica o informática.",
      "Entusiastas del hardware que deseen armar su propio PC.",
      "Futuros desarrolladores de bajo nivel o sistemas embebidos."
    ],
    prerequisites: "Conocimientos básicos de electrónica digital y lógica booleana."
  },
  {
    img: "/images/mantenimiento.webp",
    title: "Mantenimiento de Computadores",
    slug: "mantenimiento-de-computadores",
    description: "Aprende a ensamblar, diagnosticar, reparar y mantener computadores, tanto a nivel de hardware como de software, para asegurar su óptimo funcionamiento.",
    name: "Neider Nieto",
    modules: "8 Módulos",
    learn: [
      "Ensamblar un computador de escritorio desde cero, seleccionando componentes.",
      "Diagnosticar y solucionar problemas comunes de hardware y software.",
      "Instalar y configurar sistemas operativos como Windows y Linux.",
      "Aplicar mantenimiento preventivo para optimizar el rendimiento y la vida útil."
    ],
    professional: [
      {
        title: "Salida Laboral como Técnico de Soporte",
        description: "Prepara para una carrera como técnico de soporte de TI, un rol con alta demanda en todo tipo de empresas."
      },
      {
        title: "Autonomía en la Gestión de TI",
        description: "Permite a pequeños empresarios y usuarios avanzados gestionar y mantener su propia infraestructura tecnológica, ahorrando costos."
      },
      {
        title: "Habilidades Prácticas de Resolución de Problemas",
        description: "Desarrolla la capacidad de diagnosticar y solucionar problemas de hardware y software de manera metódica y eficiente."
      }
    ],
    courseSyllabus: [
      { title: "Ensamblaje de Hardware", description: "Aprende a identificar, seleccionar y ensamblar todos los componentes de un PC." },
      { title: "Instalación de Sistemas Operativos", description: "Instala y configura Windows y Linux, incluyendo drivers y software esencial." },
      { title: "Diagnóstico de Hardware", description: "Utiliza herramientas como el POST y los códigos de beeps para identificar fallas de hardware." },
      { title: "Solución de Problemas de Software", description: "Aprende a resolver conflictos de drivers, errores de sistema y problemas de arranque." },
      { title: "Mantenimiento Preventivo", description: "Optimiza el sistema, elimina malware y configura copias de seguridad para proteger los datos." },
      { title: "Mantenimiento Físico y Limpieza", description: "Aprende las mejores prácticas para la limpieza y el cuidado de los componentes de hardware." },
      { title: "Redes y Conectividad", description: "Configura redes locales y soluciona problemas comunes de conexión a internet." },
      { title: "Recuperación de Datos", description: "Introduce técnicas básicas para recuperar archivos eliminados o de discos dañados." }
    ],
    targetAudience: [
      "Usuarios que quieran reparar y mantener sus propios computadores.",
      "Personas que buscan una salida laboral como técnico de soporte.",
      "Pequeños empresarios que gestionan su propia infraestructura de TI."
    ],
    prerequisites: "No se requieren conocimientos previos, solo curiosidad por el hardware y el software."
  },
  {
    img: "/images/office.webp",
    title: "Herramientas Ofimáticas Esenciales",
    slug: "herramientas-ofimaticas",
    description: "Domina las herramientas de oficina más demandadas (Word, Excel, PowerPoint) para potenciar tu productividad y crear documentos profesionales.",
    name: "Neider Nieto",
    modules: "7 Módulos",
    url: "/courses/herramientas-ofimaticas",
    learn: [
      "Crear documentos estructurados y con formato profesional en Word.",
      "Analizar datos y generar gráficos utilizando fórmulas en Excel.",
      "Diseñar presentaciones visualmente atractivas y efectivas en PowerPoint.",
      "Mejorar tu eficiencia y productividad en tareas de oficina diarias."
    ],
    professional: [
      {
        title: "Mejora de la Productividad Laboral",
        description: "Aumenta tu eficiencia en cualquier rol de oficina, permitiéndote completar tareas de manera más rápida y precisa."
      },
      {
        title: "Habilidad Transversal Indispensable",
        description: "Dominar la ofimática es un requisito en la gran mayoría de las ofertas de empleo, sin importar el sector."
      },
      {
        title: "Calidad Profesional en Documentos",
        description: "Crea documentos, informes y presentaciones de alta calidad que refuercen tu imagen profesional."
      }
    ],
    courseSyllabus: [
      { title: "Word para Documentos Profesionales", description: "Aprende a usar estilos, tablas de contenido e insertar objetos para crear informes y cartas impecables." },
      { title: "Excel para el Análisis de Datos", description: "Domina las fórmulas, funciones y tablas dinámicas para procesar y visualizar información." },
      { title: "Excel Avanzado", description: "Explora funciones de búsqueda, lógicas y la creación de dashboards interactivos." },
      { title: "PowerPoint para Presentaciones de Impacto", description: "Diseña diapositivas, aplica animaciones y aprende a comunicar tus ideas de forma efectiva." },
      { title: "Outlook para la Gestión del Tiempo", description: "Organiza tu correo, calendario y tareas para maximizar tu productividad diaria." },
      { title: "Colaboración en la Nube con OneDrive y Office 365", description: "Aprende a coeditar documentos en tiempo real y a gestionar archivos en la nube." },
      { title: "Integración y Automatización", description: "Combina las herramientas de Office y descubre cómo automatizar tareas repetitivas." }
    ],
    targetAudience: [
      "Estudiantes que necesiten realizar trabajos académicos de calidad.",
      "Profesionales que busquen mejorar su productividad en la oficina.",
      "Cualquier usuario que quiera dominar las herramientas ofimáticas."
    ],
    prerequisites: "Conocimientos básicos de manejo de un computador. No se requiere experiencia previa con Office."
  }
];

export { courses as c };
