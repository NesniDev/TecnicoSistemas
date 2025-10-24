export const courses = [
    {
        img: '/images/blog.webp',
        title: 'Introducción a la Programación con Python',
        slug: 'introduccion-a-la-programacion',
        description: 'Aprende los fundamentos de la programación desde cero con Python. Este curso es ideal para principiantes y te llevará desde los conceptos más básicos hasta la creación de tus primeros programas.',
        name: 'Neider Nieto',
        modules: '12 Módulos',
        url: '/courses/introduccion-a-la-programacion',
        learn: [
            'Comprender los fundamentos de la lógica de programación.',
            'Dominar la sintaxis y estructuras de datos de Python.',
            'Crear funciones para modularizar tu código.',
            'Resolver problemas algorítmicos de manera eficiente.',
        ],
        courseSyllabus: [
            { title: 'Introducción y configuración del entorno', description: 'Prepara tu ambiente de desarrollo, instala Python y conoce las herramientas básicas que utilizarás.' },
            { title: 'Variables, tipos de datos y operadores', description: 'Aprende a almacenar información en variables y a manipular diferentes tipos de datos como números, texto y booleanos.' },
            { title: 'Estructuras de control: condicionales y bucles', description: 'Controla el flujo de tu programa con sentencias `if`, `else`, y bucles `for` y `while` para tomar decisiones y repetir tareas.' },
            { title: 'Estructuras de datos: listas, tuplas, diccionarios', description: 'Organiza y gestiona colecciones de datos de manera eficiente utilizando las estructuras de datos incorporadas en Python.' },
            { title: 'Funciones y modularidad', description: 'Escribe código reutilizable y organizado mediante la creación de tus propias funciones.' },
            { title: 'Manejo de errores y excepciones', description: 'Aprende a anticipar y gestionar errores para que tus programas sean más robustos y confiables.' },
            { title: 'Introducción a la programación orientada a objetos', description: 'Descubre los conceptos básicos de clases y objetos para crear programas más complejos y escalables.' },
            { title: 'Proyecto final: Creación de una aplicación de consola', description: 'Aplica todo lo aprendido para desarrollar un proyecto práctico desde cero.' }
        ],
        targetAudience: [
            'Estudiantes que deseen una base sólida en programación.',
            'Profesionales que buscan reconvertirse al sector tecnológico.',
            'Cualquier persona curiosa por aprender a programar.'
        ],
        prerequisites: 'No se requieren conocimientos previos de programación. Solo necesitas una computadora y ganas de aprender.'
    },
    {
        img: '/images/course-database.webp',
        title: 'Bases de Datos Relacionales con SQL',
        slug: 'base-de-datos',
        description: 'Domina los conceptos fundamentales de las bases de datos relacionales y aprende a gestionar y consultar información utilizando el lenguaje SQL.',
        name: 'Neider Nieto',
        modules: '8 Módulos',
        url: '/courses/base-de-datos',
        learn: [
            'Entender el modelo relacional y la normalización.',
            'Diseñar y crear bases de datos desde cero.',
            'Realizar consultas complejas con SELECT, JOINs, y subconsultas.',
            'Manipular datos con INSERT, UPDATE y DELETE.',
            'Asegurar la integridad de los datos con constraints.'
        ],
        courseSyllabus: [
            { title: 'Introducción a las bases de datos relacionales', description: 'Conoce la historia, los conceptos clave y la importancia de las bases de datos en el mundo actual.' },
            { title: 'Diseño de bases de datos y modelado entidad-relación', description: 'Aprende a diseñar una base de datos eficiente y normalizada utilizando diagramas Entidad-Relación.' },
            { title: 'Creación de tablas y tipos de datos (DDL)', description: 'Utiliza el Lenguaje de Definición de Datos (DDL) de SQL para crear y modificar la estructura de tu base de datos.' },
            { title: 'Consultas básicas y avanzadas (DQL)', description: 'Domina el Lenguaje de Consulta de Datos (DQL) para extraer información precisa y compleja de tus tablas.' },
            { title: 'Manipulación de datos (DML)', description: 'Aprende a insertar, actualizar y eliminar registros en tu base de datos utilizando el Lenguaje de Manipulación de Datos (DML).' },
            { title: 'Funciones agregadas y agrupación', description: 'Realiza cálculos sobre conjuntos de datos utilizando funciones como COUNT, SUM, AVG, y agrupa los resultados.' },
            { title: 'Joins y uniones de tablas', description: 'Combina información de múltiples tablas para realizar consultas más potentes y obtener una visión completa de tus datos.' },
            { title: 'Transacciones y control de concurrencia', description: 'Asegura la integridad y consistencia de tus datos mediante el uso de transacciones y el manejo de múltiples accesos simultáneos.' }
        ],
        targetAudience: [
            'Desarrolladores que necesiten gestionar bases de datos.',
            'Analistas de datos y profesionales de BI.',
            'Administradores de sistemas que trabajen con datos estructurados.'
        ],
        prerequisites: 'Conocimientos básicos de informática. No es necesario saber programar, aunque puede ser de ayuda.'
    },
    {
        img: '/images/course-web.webp',
        title: 'Desarrollo Web Full-Stack con JavaScript',
        slug: 'desarrollo-de-aplicaciones-web',
        description: 'Aprende a crear aplicaciones web completas, desde el frontend con HTML, CSS y JavaScript, hasta el backend con Node.js y Express.',
        name: 'Neider Nieto',
        modules: '15 Módulos',
        url: '/courses/desarrollo-de-aplicaciones-web',
        learn: [
            'Maquetar sitios web semánticos con HTML5.',
            'Crear diseños web responsivos con CSS3 y Flexbox/Grid.',
            'Añadir interactividad con JavaScript y el DOM.',
            'Construir un servidor y APIs RESTful con Node.js y Express.',
            'Conectar tu aplicación a una base de datos.'
        ],
        courseSyllabus: [
            { title: 'Fundamentos de HTML5 y CSS3', description: 'Construye la estructura y el estilo de tus sitios web utilizando las últimas tecnologías de desarrollo frontend.' },
            { title: 'Diseño responsivo y frameworks CSS', description: 'Asegúrate de que tus sitios se vean bien en cualquier dispositivo, desde móviles hasta computadoras de escritorio, utilizando técnicas modernas y frameworks como Bootstrap o Tailwind.' },
            { title: 'JavaScript fundamental y manipulación del DOM', description: 'Añade interactividad y dinamismo a tus páginas web manipulando el Document Object Model (DOM) con JavaScript.' },
            { title: 'Introducción a Node.js y NPM', description: 'Lleva JavaScript al lado del servidor. Aprende a configurar un entorno de desarrollo con Node.js y a gestionar paquetes con NPM.' },
            { title: 'Creación de un servidor con Express.js', description: 'Construye un servidor web robusto y escalable utilizando el framework más popular de Node.js, Express.' },
            { title: 'Rutas y controladores para una API RESTful', description: 'Diseña y desarrolla una API RESTful para que tu frontend y backend se comuniquen de manera eficiente.' },
            { title: 'Integración con bases de datos NoSQL (MongoDB)', description: 'Conecta tu aplicación a una base de datos NoSQL como MongoDB para almacenar y recuperar datos de forma flexible.' },
            { title: 'Despliegue de aplicaciones web', description: 'Aprende a poner tu aplicación en producción para que todo el mundo pueda acceder a ella a través de internet.' }
        ],
        targetAudience: [
            'Principiantes que quieran ser desarrolladores web full-stack.',
            'Desarrolladores frontend que busquen aprender backend.',
            'Emprendedores que deseen construir sus propias aplicaciones web.'
        ],
        prerequisites: 'Se recomienda tener conocimientos básicos de programación. El curso de "Introducción a la Programación" es una buena base.'
    },
    {
        img: '/images/course-security.webp',
        title: 'Fundamentos de Seguridad Informática',
        slug: 'seguridad-informatica',
        description: 'Aprende los conceptos esenciales de la seguridad informática para proteger sistemas y datos contra amenazas y ataques cibernéticos.',
        name: 'Neider Nieto',
        modules: '10 Módulos',
        url: '/courses/seguridad-informatica',
        learn: [
            'Identificar las principales vulnerabilidades en sistemas y redes.',
            'Comprender los principios de la criptografía.',
            'Implementar controles de acceso y autenticación seguros.',
            'Analizar y responder a incidentes de seguridad.',
            'Aplicar buenas prácticas de desarrollo seguro.'
        ],
        courseSyllabus: [
            { title: 'Introducción a la seguridad y el hacking ético', description: 'Comprende los principios fundamentales de la ciberseguridad y la mentalidad de un hacker ético para defender mejor los sistemas.' },
            { title: 'Criptografía: simétrica, asimétrica y hashing', description: 'Aprende a proteger la información mediante técnicas de cifrado para garantizar la confidencialidad e integridad de los datos.' },
            { title: 'Seguridad en redes: firewalls, IDS/IPS y VPNs', description: 'Descubre cómo proteger las redes de comunicación contra accesos no autorizados y ataques.' },
            { title: 'Autenticación, autorización y control de acceso', description: 'Implementa mecanismos para verificar la identidad de los usuarios y controlar a qué recursos pueden acceder.' },
            { title: 'Seguridad en aplicaciones web (OWASP Top 10)', description: 'Conoce y aprende a mitigar las vulnerabilidades más comunes en aplicaciones web según el ranking de OWASP.' },
            { title: 'Análisis de malware y gestión de incidentes', description: 'Aprende a detectar, analizar y eliminar software malicioso, y a responder eficazmente ante un incidente de seguridad.' },
            { title: 'Seguridad en la nube y en dispositivos móviles', description: 'Entiende los desafíos de seguridad específicos de las plataformas en la nube y los dispositivos móviles.' },
            { title: 'Cumplimiento normativo y gestión de riesgos', description: 'Conoce las principales regulaciones de seguridad y aprende a gestionar los riesgos de seguridad de una organización.' }
        ],
        targetAudience: [
            'Desarrolladores que quieran escribir código más seguro.',
            'Administradores de sistemas responsables de la seguridad.',
            'Profesionales de TI que deseen especializarse en ciberseguridad.'
        ],
        prerequisites: 'Conocimientos básicos de redes y sistemas operativos. Se recomienda tener experiencia en programación o administración de sistemas.'
    },
    {
        img: '/images/course-app-inventor.webp',
        title: 'Creación de Apps Móviles con App Inventor',
        slug: 'aplicaciones-con-app-inventor',
        description: 'Aprende a crear tus propias aplicaciones para Android sin necesidad de escribir código. Con App Inventor, podrás diseñar y programar apps de forma visual e intuitiva.',
        name: 'Neider Nieto',
        modules: '7 Módulos',
        url: '/courses/aplicaciones-con-app-inventor',
        learn: [
            'Entender la interfaz de MIT App Inventor.',
            'Diseñar interfaces de usuario atractivas y funcionales.',
            'Programar la lógica de la app utilizando bloques.',
            'Utilizar componentes como sensores, mapas y bases de datos.',
            'Publicar tus aplicaciones en la Google Play Store.'
        ],
        courseSyllabus: [
            { title: 'Introducción a App Inventor y al desarrollo de apps', description: 'Familiarízate con el entorno de App Inventor y los conceptos básicos para empezar a crear tu primera aplicación.' },
            { title: 'Diseño de la interfaz de usuario (UI)', description: 'Aprende a utilizar los componentes visuales para diseñar una interfaz de usuario intuitiva y atractiva para tus apps.' },
            { title: 'Programación con bloques: eventos y lógica', description: 'Descubre cómo dar vida a tu aplicación programando su comportamiento mediante un sistema de bloques visuales.' },
            { title: 'Trabajo con multimedia: imágenes, sonidos y videos', description: 'Enriquece tus aplicaciones añadiendo elementos multimedia para una experiencia de usuario más completa.' },
            { title: 'Uso de sensores del dispositivo (GPS, acelerómetro)', description: 'Aprovecha las capacidades del hardware de tu teléfono, como el GPS o el acelerómetro, para crear apps más interactivas.' },
            { title: 'Almacenamiento de datos con TinyDB', description: 'Aprende a guardar y recuperar información de forma persistente en el dispositivo del usuario.' },
            { title: 'Proyecto final: Creación de una app completa', description: 'Aplica todos los conocimientos adquiridos para desarrollar una aplicación funcional desde el diseño hasta la programación.' }
        ],
        targetAudience: [
            'Estudiantes y educadores que buscan una herramienta de iniciación.',
            'Emprendedores que quieren prototipar una idea de app.',
            'Cualquier persona creativa sin experiencia en programación.'
        ],
        prerequisites: 'No se requieren conocimientos de programación. Solo es necesario un computador con acceso a internet y un dispositivo Android para probar las apps.'
    },
    {
        img: '/images/course-os.webp',
        title: 'Fundamentos de Sistemas Operativos',
        slug: 'sistemas-operativos',
        description: 'Comprende cómo funcionan los sistemas operativos, su arquitectura, y los conceptos clave como la gestión de procesos, memoria y archivos.',
        name: 'Neider Nieto',
        modules: '9 Módulos',
        url: '/courses/sistemas-operativos',
        learn: [
            'Diferenciar entre los distintos tipos de sistemas operativos.',
            'Entender la gestión de procesos y la planificación de la CPU.',
            'Comprender las técnicas de gestión de memoria virtual y paginación.',
            'Analizar los sistemas de archivos y la gestión de entrada/salida.',
            'Conocer los mecanismos básicos de seguridad en los SO.'
        ],
        courseSyllabus: [
            { title: 'Introducción y historia de los sistemas operativos', description: 'Explora la evolución de los sistemas operativos y su papel fundamental en la informática moderna.' },
            { title: 'Estructura de un sistema operativo', description: 'Conoce los componentes principales de un SO, como el kernel y los servicios del sistema.' },
            { title: 'Gestión de procesos e hilos', description: 'Aprende cómo el SO gestiona la ejecución de múltiples programas y tareas simultáneamente.' },
            { title: 'Planificación de la CPU', description: 'Comprende los algoritmos que utiliza el SO para decidir qué proceso se ejecuta en cada momento.' },
            { title: 'Sincronización de procesos', description: 'Estudia los mecanismos para evitar problemas de concurrencia cuando varios procesos acceden a recursos compartidos.' },
            { title: 'Gestión de memoria principal y virtual', description: 'Descubre cómo el SO administra la memoria RAM y utiliza técnicas como la paginación para extenderla.' },
            { title: 'Sistemas de archivos', description: 'Analiza cómo se organiza, almacena y accede a la información en los dispositivos de almacenamiento.' },
            { title: 'Gestión de dispositivos de E/S', description: 'Entiende cómo el SO interactúa y gestiona los periféricos como el teclado, el disco duro o la impresora.' }
        ],
        targetAudience: [
            'Estudiantes de informática, ingeniería o carreras afines.',
            'Desarrolladores de software que deseen optimizar sus aplicaciones.',
            'Profesionales de sistemas que administran servidores y redes.'
        ],
        prerequisites: 'Conocimientos básicos de arquitectura de computadores y programación.'
    },
    {
        img: '/images/course-architecture.webp',
        title: 'Arquitectura de Computadores',
        slug: 'arquitectura-de-computadores',
        description: 'Explora los componentes fundamentales de un computador, desde la unidad central de procesamiento (CPU) hasta la jerarquía de memoria y los periféricos.',
        name: 'Neider Nieto',
        modules: '11 Módulos',
        url: '/courses/arquitectura-de-computadores',
        learn: [
            'Comprender la organización y arquitectura de von Neumann.',
            'Analizar el funcionamiento de la CPU y su conjunto de instrucciones.',
            'Entender la jerarquía de memoria: registros, caché, RAM.',
            'Conocer los diferentes tipos de buses y periféricos.',
            'Evaluar el rendimiento de un sistema computacional.'
        ],
        courseSyllabus: [
            { title: 'Introducción a la arquitectura de computadores', description: 'Descubre los principios de diseño y la organización fundamental de los sistemas informáticos modernos.' },
            { title: 'Representación de la información y aritmética del computador', description: 'Aprende cómo los computadores representan y manipulan números y caracteres utilizando el sistema binario.' },
            { title: 'Componentes de la CPU: ALU, unidad de control y registros', description: 'Explora el corazón del computador, la CPU, y entiende el papel de sus componentes clave.' },
            { title: 'Conjunto de instrucciones (ISA) y modos de direccionamiento', description: 'Comprende el lenguaje que habla el hardware y cómo la CPU accede a los datos en memoria.' },
            { title: 'Segmentación y paralelismo a nivel de instrucción', description: 'Aprende técnicas avanzadas como el pipelining para mejorar el rendimiento de la CPU.' },
            { title: 'Jerarquía de memoria: caché, memoria principal y virtual', description: 'Estudia cómo los diferentes niveles de memoria trabajan juntos para proporcionar un acceso rápido y eficiente a los datos.' },
            { title: 'Sistemas de entrada/salida y buses', description: 'Analiza cómo la CPU se comunica con los periféricos y otros componentes a través de los buses del sistema.' },
            { title: 'Arquitecturas paralelas y multinúcleo', description: 'Explora las arquitecturas modernas que utilizan múltiples núcleos para aumentar la capacidad de procesamiento.' }
        ],
        targetAudience: [
            'Estudiantes de ingeniería, electrónica o informática.',
            'Entusiastas del hardware que deseen armar su propio PC.',
            'Futuros desarrolladores de bajo nivel o sistemas embebidos.'
        ],
        prerequisites: 'Conocimientos básicos de electrónica digital y lógica booleana.'
    },
    {
        img: '/images/course-maintenance.webp',
        title: 'Mantenimiento de Computadores',
        slug: 'mantenimiento-de-computadores',
        description: 'Aprende a diagnosticar, reparar y mantener computadores de escritorio y portátiles, tanto a nivel de hardware como de software.',
        name: 'Neider Nieto',
        modules: '8 Módulos',
        url: '/courses/mantenimiento-de-computadores',
        learn: [
            'Ensamblar un computador desde cero.',
            'Diagnosticar y solucionar problemas comunes de hardware.',
            'Instalar y configurar sistemas operativos y software.',
            'Realizar mantenimiento preventivo para optimizar el rendimiento.',
            'Implementar copias de seguridad y estrategias de recuperación.'
        ],
        courseSyllabus: [
            { title: 'Componentes de hardware de un PC', description: 'Identifica cada uno de los componentes internos de un computador, desde la placa base hasta la fuente de poder.' },
            { title: 'Ensamblaje y desmontaje de equipos', description: 'Aprende el proceso paso a paso para armar y desarmar de forma segura un computador de escritorio.' },
            { title: 'Instalación y configuración de Windows y Linux', description: 'Instala desde cero los sistemas operativos más populares y aprende a configurarlos para un rendimiento óptimo.' },
            { title: 'Diagnóstico de fallas de hardware (POST, beeps)', description: 'Interpreta las señales de la BIOS y otros indicadores para diagnosticar problemas de hardware de manera efectiva.' },
            { title: 'Optimización del sistema y limpieza de software malicioso', description: 'Mejora la velocidad y seguridad de un equipo eliminando virus, spyware y software innecesario.' },
            { title: 'Mantenimiento preventivo y correctivo', description: 'Aplica rutinas de mantenimiento para prevenir fallas futuras y aprende a solucionar problemas cuando ocurren.' },
            { title: 'Redes básicas y configuración de internet', description: 'Configura una red doméstica o de oficina pequeña y soluciona problemas comunes de conectividad.' },
            { title: 'Copias de seguridad y recuperación de datos', description: 'Implementa estrategias para proteger la información importante y aprende a recuperarla en caso de una falla del sistema.' }
        ],
        targetAudience: [
            'Usuarios que quieran reparar y mantener sus propios computadores.',
            'Personas que buscan una salida laboral como técnico de soporte.',
            'Pequeños empresarios que gestionan su propia infraestructura de TI.'
        ],
        prerequisites: 'No se requieren conocimientos previos, solo curiosidad por el hardware y el software.'
    },
    {
        img: '/images/course-office.webp',
        title: 'Herramientas Ofimáticas Esenciales',
        slug: 'herramientas-ofimaticas',
        description: 'Domina las herramientas de productividad más utilizadas en el entorno laboral: Microsoft Word, Excel y PowerPoint. Aumenta tu eficiencia y crea documentos, hojas de cálculo y presentaciones de alta calidad.',
        name: 'Neider Nieto',
        modules: '6 Módulos',
        url: '/courses/herramientas-ofimaticas',
        learn: [
            'Crear y dar formato a documentos profesionales en Word.',
            'Utilizar fórmulas, funciones y tablas dinámicas en Excel.',
            'Diseñar presentaciones impactantes y efectivas en PowerPoint.',
            'Integrar las diferentes herramientas de la suite de Office.',
            'Aplicar trucos y atajos para mejorar tu productividad.'
        ],
        courseSyllabus: [
            { title: 'Microsoft Word: Formato, estilos, tablas e inserción de objetos', description: 'Crea documentos de aspecto profesional, aplicando formatos, utilizando estilos y gestionando tablas e imágenes.' },
            { title: 'Microsoft Excel: Fórmulas, funciones, gráficos y tablas dinámicas', description: 'Analiza datos, realiza cálculos complejos y visualiza información de manera efectiva con las herramientas más potentes de Excel.' },
            { title: 'Microsoft PowerPoint: Diseño de diapositivas, animaciones y transiciones', description: 'Diseña presentaciones visualmente atractivas que cautiven a tu audiencia utilizando animaciones y transiciones.' },
            { title: 'Integración entre Word, Excel y PowerPoint', description: 'Aprende a combinar el poder de las tres herramientas para crear informes y presentaciones dinámicas.' },
            { title: 'Consejos de productividad y colaboración en la nube (OneDrive)', description: 'Descubre atajos y técnicas para trabajar más rápido y colabora en tiempo real con tus compañeros utilizando OneDrive.' },
            { title: 'Proyecto final: Creación de un informe completo con las tres herramientas', description: 'Aplica todo lo aprendido para construir un informe integrado que demuestre tu dominio de la suite de Office.' }
        ],
        targetAudience: [
            'Estudiantes que necesiten realizar trabajos académicos de calidad.',
            'Profesionales que busquen mejorar su productividad en la oficina.',
            'Cualquier usuario que quiera dominar las herramientas ofimáticas.'
        ],
        prerequisites: 'Conocimientos básicos de manejo de un computador. No se requiere experiencia previa con Office.'
    }
]
