export const courses = [
  {
    img: '/images/arquitectura.webp',
    title: 'Arquitectura de Computadores',
    slug: 'arquitectura-de-computadores',
    description:
      'Explora la arquitectura interna de los computadores, desde la Unidad Central de Procesamiento (CPU) y la memoria hasta los buses de datos y periféricos, con un enfoque profundo en los componentes hardware y sus interacciones.',
    name: 'Neider Nieto',
    learn: [
      'Comprender el funcionamiento y la estructura interna de la Unidad Central de Procesamiento (CPU), la unidad de control y el ciclo de instrucción.',
      'Estudiar la jerarquía de memoria (caché L1, L2, L3, RAM, ROM) y su impacto en la latencia y el rendimiento general de los sistemas.',
      'Analizar la comunicación entre los diferentes componentes de un computador a través de buses de datos, control y direcciones, y su rol en el procesamiento de información.',
      'Evaluar las características y especificaciones del hardware (procesadores, tarjetas gráficas, memoria, almacenamiento) para tomar decisiones informadas en la compra o ensamblaje de sistemas.'
    ],
    professional: [
      {
        title: 'Conocimiento Avanzado en Hardware',
        description:
          'Fundamental para profesionales que desarrollan sistemas embebidos, arquitecturas de bajo nivel y optimización de hardware, con un enfoque práctico en el rendimiento del procesador y la memoria.'
      },
      {
        title: 'Base para el Diseño de Arquitecturas de Sistemas',
        description:
          'Proporciona las bases para diseñar sistemas eficientes y optimizados, al comprender las interacciones entre el procesador, la memoria, y los buses de comunicación en sistemas de computación complejos.'
      },
      {
        title: 'Optimización de Rendimiento a Nivel de Máquina',
        description:
          'Permite el desarrollo de software que maximiza la utilización de las capacidades del procesador, memoria y buses, mejorando la ejecución de procesos y la eficiencia en sistemas multinúcleo.'
      }
    ],
    courseSyllabus: [
      {
        title: 'Introducción a la Arquitectura de Computadores',
        description:
          'Introducción a la historia de la arquitectura de computadores, desde los primeros ordenadores hasta la arquitectura moderna. '
      },
      {
        title: '¿Qué es una computadora y sus componentes?',
        description:
          'Explica los componentes principales de una computadora y su funcionamiento a nivel de hardware y software. '
      },
      {
        title: 'La Unidad Central de Procesamiento (CPU)',
        description:
          'Estudia los componentes clave de la CPU, como la Unidad Aritmético Lógica (ALU), la unidad de control, y el ciclo de instrucción, explorando su interacción con la memoria y los buses.'
      },
      {
        title: 'Arquitectura de las CPU x86 y x64',
        description:
          'Analiza el conjunto de instrucciones que el hardware ejecuta, con enfoque en las arquitecturas x86 y x64, y cómo las instrucciones se representan a bajo nivel en lenguaje binario.'
      },
      {
        title: 'Empresas que fabrican CPU (Intel y AMD)',
        description:
          'Analiza las empresas que fabrican CPU (Intel y AMD), sus diferencias y sus ventajas.'
      },
      {
        title: 'Nomenclatura de las CPU',
        description:
          'Analiza la nomenclatura de las CPU, como la arquitectura x86 y x64, y cómo las instrucciones se representan a bajo nivel en lenguaje binario.'
      },
      {
        title: 'Arquitecturas Paralelas y Multinúcleo',
        description:
          'Introduce los conceptos de procesadores multinúcleo y arquitecturas paralelas, abordando su impacto en la ejecución de aplicaciones y el rendimiento de sistemas en múltiples hilos.'
      },
      {
        title: 'Jerarquía de Memoria',
        description:
          'Estudia los diferentes niveles de memoria: registros, caché (L1, L2, L3), RAM y ROM, y cómo estos afectan el acceso a datos y el rendimiento del sistema. La optimización de la memoria y la reducción de la latencia son fundamentales.'
      },
      {
        title: 'Análisis de Discos Duros (HDD y SSD)',
        description:
          'En este módulo, los estudiantes aprenderán las diferencias clave entre los discos duros tradicionales (HDD) y las unidades de estado sólido (SSD). Se cubrirán aspectos como la arquitectura interna de cada tipo de disco, sus ventajas, desventajas, y su impacto en el rendimiento general del sistema.'
      },
      {
        title: 'Buses y Sistemas de Entrada/Salida',
        description:
          'Este módulo cubre los diferentes tipos de buses de datos (como PCI, USB, etc.) y sus funciones esenciales para la comunicación entre los componentes internos de la computadora. Además, se exploran los sistemas de entrada/salida y cómo gestionan los periféricos y dispositivos conectados al sistema.'
      },
      {
        title: 'Pipeline y Paralelismo a Nivel de Instrucción',
        description:
          'Los estudiantes aprenderán sobre el proceso de pipeline en las CPUs modernas, cómo se ejecutan múltiples instrucciones en paralelo y cómo esto mejora la eficiencia y el rendimiento del procesador. También se aborda el paralelismo a nivel de instrucción y su implementación en arquitecturas avanzadas.'
      },
      {
        title: 'Tipos de Tarjetas Gráficas (GPU)',
        description:
          'Este módulo explora los diferentes tipos de tarjetas gráficas (GPU) y sus aplicaciones en la computación, desde las integradas hasta las dedicadas. Los estudiantes aprenderán sobre su arquitectura, capacidades de procesamiento paralelo y cómo impactan en tareas como el renderizado gráfico y el aprendizaje automático.'
      },
      {
        title: 'Medición del Rendimiento',
        description:
          'En este módulo, se cubren las diferentes métricas utilizadas para evaluar el rendimiento de los sistemas computacionales. Los estudiantes aprenderán a usar herramientas y benchmarks para medir la eficiencia de la CPU, la memoria, los discos y otros componentes del sistema.'
      },
      {
        title: 'Puertos de la Computadora',
        description:
          'Los estudiantes estudiarán los diferentes puertos de la computadora, incluidos USB, HDMI, VGA, y otros. Se abordarán las funciones de cada uno, su velocidad de transferencia de datos y cómo se utilizan para conectar dispositivos internos y externos a la computadora.'
      },
      {
        title: 'El Sistema Binario y Lenguaje Máquina',
        description:
          'Este módulo cubre el sistema binario, la base fundamental de la computación. Se estudian las representaciones binarias de los datos y las instrucciones en lenguaje máquina. Los estudiantes aprenderán cómo las operaciones de la CPU son codificadas y ejecutadas utilizando binario. También se exploran las instrucciones de bajo nivel que la CPU puede ejecutar directamente.'
      },
      {
        title: 'Conversión de Binario a Decimal y Viceversa',
        description:
          'En este módulo, los estudiantes aprenderán a convertir números entre el sistema binario y el sistema decimal. Se enseña cómo hacer estas conversiones manualmente y a través de algoritmos, permitiendo a los estudiantes comprender cómo las computadoras trabajan con datos en formato binario, pero cómo los usuarios interactúan con ellos en formato decimal.'
      },
      {
        title: 'Unidades de Medida para Datos de Almacenamiento',
        description:
          'Este módulo cubre las unidades de medida utilizadas para cuantificar datos y almacenamiento en computadoras, desde bits y bytes hasta terabytes y petabytes. Los estudiantes aprenderán cómo convertir entre estas unidades, cómo se usan en diferentes contextos y qué significa el tamaño de almacenamiento en términos prácticos para sistemas de computación y almacenamiento en la nube.'
      },
      {
        title: 'Uso de la Consola CMD',
        description:
          'Los estudiantes aprenderán a usar la consola de comandos (CMD) en sistemas operativos Windows. Este módulo incluye la explicación de comandos básicos como `DIR`, `COPY`, `DEL`, y `EXIT`, además de la administración de archivos, navegación por directorios y la ejecución de scripts. Es esencial para la administración de sistemas y la automatización de tareas en servidores y computadoras de escritorio.'
      }
    ],
    targetAudience: [
      'Este curso es ideal para personas que no tienen experiencia previa en tecnología y desean conocer cómo funcionan las computadoras por dentro, desde el almacenamiento hasta los componentes internos, de una manera sencilla y fácil de entender.',
      'Para aquellos interesados en el diseño y ensamblaje de PCs de alto rendimiento, este curso proporciona las herramientas y conocimientos necesarios para optimizar cada componente y mejorar el rendimiento del sistema.',
      'Este curso está diseñado para aquellos estudiantes que desean profundizar en la arquitectura interna de los computadores y obtener una comprensión más detallada sobre cómo los diferentes componentes interactúan dentro del sistema.'
    ],
    prerequisites:
      'Conocimientos básicos de electrónica digital, lógica booleana, y familiaridad con los conceptos de programación y sistemas operativos.'
  },
  {
    img: '/images/mantenimiento.webp',
    title: 'Mantenimiento y Reparación de Computadores',
    slug: 'mantenimiento-de-computadores',
    description:
      'Domina el ensamblaje, diagnóstico, reparación y mantenimiento de sistemas de cómputo a nivel de hardware y software. Aprende metodologías de troubleshooting, optimización de recursos y gestión técnica de equipos para entornos personales y empresariales.',
    name: 'Neider Nieto',
    learn: [
      'Ensamblar estaciones de trabajo seleccionando componentes compatibles según arquitectura de bus, socket del procesador y requisitos de energía.',
      'Diagnosticar fallas mediante POST (Power-On Self-Test), códigos beep, análisis de logs del sistema y herramientas de hardware como multímetros y tarjetas de diagnóstico PCI.',
      'Instalar, configurar y optimizar sistemas operativos Windows (10/11) y distribuciones Linux (Ubuntu, Debian), incluyendo particionado de discos, configuración de UEFI/BIOS y gestión de drivers.',
      'Implementar rutinas de mantenimiento preventivo y correctivo: limpieza de componentes, renovación de pasta térmica, actualización de firmware, eliminación de malware y configuración de respaldos automatizados.'
    ],
    professional: [
      {
        title: 'Inserción en el Mercado Laboral de TI',
        description:
          'Acceso a posiciones como Técnico de Soporte L1/L2, Especialista en Help Desk, Técnico de Mantenimiento de Equipos o Consultor de Soporte Técnico en empresas, instituciones educativas y centros de servicio autorizado.'
      },
      {
        title: 'Gestión Autónoma de Infraestructura Tecnológica',
        description:
          'Capacidad para administrar, mantener y escalar infraestructuras de TI en pequeñas y medianas empresas, reduciendo dependencia de servicios externos y optimizando presupuestos operativos.'
      },
      {
        title: 'Metodología Técnica de Resolución de Problemas',
        description:
          'Desarrollo de habilidades analíticas para troubleshooting sistemático mediante diagramas de flujo de diagnóstico, aislamiento de variables, pruebas por sustitución y documentación de casos para construcción de base de conocimiento.'
      },
      {
        title: 'Certificaciones Técnicas de Entrada',
        description:
          'Base sólida para obtener certificaciones reconocidas internacionalmente como CompTIA A+, Microsoft Certified: Modern Desktop Administrator Associate o certificaciones de fabricantes (Dell, HP, Lenovo).'
      }
    ],
    courseSyllabus: [
      {
        title: 'Arquitectura y Ensamblaje de Hardware',
        description:
          'Identificación de componentes (CPU, GPU, RAM, almacenamiento NVMe/SATA/SAS, fuentes de poder ATX), compatibilidad de sockets (LGA, AM4/AM5, PGA), chipsets (Intel Z790, AMD B650), factor de forma (ATX, microATX, Mini-ITX) y ensamblaje completo con gestión de cables y configuración de BIOS/UEFI.'
      },
      {
        title: 'Instalación y Configuración de Sistemas Operativos',
        description:
          'Creación de medios bootables (Rufus, Etcher), esquemas de particionado (GPT/MBR), instalación limpia y dual-boot de Windows 10/11 y Linux (Ubuntu, Fedora, Arch), configuración de Secure Boot, instalación de controladores firmados y software de productividad.'
      },
      {
        title: 'Diagnóstico Avanzado de Hardware',
        description:
          'Interpretación de códigos POST, señales beep según fabricante (AMI, Award, Phoenix), uso de herramientas de diagnóstico (Memtest86+, Prime95, FurMark, CrystalDiskInfo), análisis con multímetro digital para verificación de voltajes en fuente de poder y motherboard, y tarjetas de diagnóstico PCI-e.'
      },
      {
        title: 'Troubleshooting de Software y Sistema Operativo',
        description:
          'Resolución de conflictos de drivers mediante Device Manager, análisis de pantallas azules (BSOD) con WinDbg/BlueScreenView, recuperación de sistema con puntos de restauración, reparación del bootloader (BCDEdit, GRUB), y diagnóstico de procesos con Task Manager, Resource Monitor y Process Explorer.'
      },
      {
        title: 'Mantenimiento Preventivo y Optimización',
        description:
          'Programación de tareas de mantenimiento: desfragmentación/optimización de SSD (TRIM), limpieza de archivos temporales con herramientas especializadas (CCleaner, BleachBit), actualización de firmware de BIOS/UEFI y dispositivos, gestión térmica mediante renovación de pasta térmica y limpieza de disipadores, y auditoría de malware con suites antivirus empresariales.'
      },
      {
        title: 'Limpieza Física y Gestión Térmica',
        description:
          'Protocolos de limpieza de componentes electrónicos con aire comprimido y productos dieléctricos, desmontaje seguro de coolers (aire y líquidos), aplicación correcta de compuestos térmicos (pasta térmica, pads), monitoreo de temperaturas con HWMonitor/HWiNFO, y configuración de curvas de ventiladores en BIOS.'
      },
      {
        title: 'Redes y Conectividad',
        description:
          'Configuración de adaptadores de red Ethernet/Wi-Fi, asignación de IPs estáticas/DHCP, troubleshooting con herramientas de red (ping, tracert, ipconfig, nslookup), configuración básica de routers y switches, resolución de problemas DNS, y compartición de recursos en redes locales (SMB/CIFS).'
      },
      {
        title: 'Backup y Recuperación de Datos',
        description:
          'Implementación de estrategias de respaldo 3-2-1, uso de herramientas de clonación (Clonezilla, Macrium Reflect), configuración de copias incrementales/diferenciales, recuperación de archivos con software especializado (Recuva, TestDisk, PhotoRec), y técnicas básicas de recuperación de discos con sectores dañados.'
      },
      {
        title: 'Seguridad y Protección de Sistemas',
        description:
          'Configuración de Windows Defender/Firewall, implementación de políticas de actualización de seguridad, hardening básico de sistemas operativos, detección y eliminación de rootkits/ransomware, y educación al usuario final sobre ciberseguridad básica.'
      },
      {
        title: 'Documentación y Gestión de Casos',
        description:
          'Elaboración de reportes técnicos de intervención, creación de base de conocimiento para problemas recurrentes, uso de sistemas de ticketing básicos, y metodologías de atención al cliente en soporte técnico.'
      }
    ],
    targetAudience: [
      'Usuarios avanzados que desean profesionalizar sus conocimientos para autogestión y reparación de equipos.',
      'Aspirantes a técnicos de soporte IT que buscan entrada al mercado laboral tecnológico.',
      'Administradores de pequeñas empresas o PYMES que requieren gestionar infraestructura informática básica.',
      'Estudiantes de carreras técnicas o tecnológicas en sistemas, electrónica o telecomunicaciones.',
      'Emprendedores que buscan establecer talleres de servicio técnico o centros de reparación.'
    ],
    prerequisites:
      'No se requiere experiencia previa. Se recomienda afinidad por tecnología, capacidad de pensamiento lógico-analítico y disposición para aprendizaje práctico. Acceso a computador para prácticas es deseable pero no obligatorio durante la fase teórica.'
  },
  {
    img: '/images/so.webp',
    title: 'Fundamentos de Sistemas Operativos',
    slug: 'sistemas-operativos',
    description:
      'Aprende cómo funcionan los sistemas operativos, el software esencial que permite que el hardware y las aplicaciones trabajen juntos. Conoce cómo gestiona los procesos, la memoria, los archivos y los dispositivos del computador.',
    name: 'Neider Nieto',
    learn: [
      'Comprender el papel del sistema operativo como intermediario entre el hardware y el usuario.',
      'Reconocer los componentes principales de un sistema operativo: núcleo (kernel), memoria, procesos y sistema de archivos.',
      'Distinguir los diferentes tipos de sistemas operativos: de escritorio, móviles, comerciales y libres.',
      'Aprender a usar máquinas virtuales para practicar con distintos sistemas operativos sin afectar el equipo principal.'
    ],
    professional: [
      {
        title: 'Base para la Carrera en Tecnología',
        description:
          'Brinda los fundamentos esenciales para continuar con temas como redes, mantenimiento, virtualización o desarrollo de software.'
      },
      {
        title: 'Comprensión del Funcionamiento del Computador',
        description:
          'Permite entender cómo el sistema operativo administra los recursos del equipo como la memoria, el procesador y los dispositivos.'
      },
      {
        title: 'Soporte Técnico y Administración Básica',
        description:
          'Ayuda a realizar configuraciones, resolver fallos comunes y comprender mejor los mensajes del sistema.'
      }
    ],
    courseSyllabus: [
      {
        title: 'Introducción a los Sistemas Operativos',
        description:
          'Qué es un sistema operativo, para qué sirve y cómo interactúa con el hardware y los programas.'
      },
      {
        title: 'Componentes Principales',
        description:
          'Conoce el núcleo (kernel), la gestión de memoria, los procesos y los sistemas de archivos de manera general.'
      },
      {
        title: 'Gestión de Procesos y Memoria',
        description:
          'Aprende cómo el sistema operativo ejecuta varios programas al mismo tiempo y distribuye la memoria entre ellos.'
      },
      {
        title: 'Sistemas de Archivos',
        description:
          'Descubre cómo se almacenan, organizan y protegen los datos dentro de los dispositivos del computador.'
      },
      {
        title: 'Interfaz de Usuario: Gráfica y por Comandos',
        description:
          'Explora las diferencias entre usar el sistema con ventanas (GUI) o con comandos (CLI) como en Windows o Linux.'
      },
      {
        title: 'Tipos de Sistemas Operativos',
        description:
          'Conoce los sistemas operativos más comunes: Windows, Linux, macOS y Android, y sus principales características.'
      },
      {
        title: 'Máquinas Virtuales e Introducción a la Virtualización',
        description:
          'Aprende qué es una máquina virtual, cómo instalar una, y cómo se pueden ejecutar varios sistemas operativos en un mismo equipo.'
      },
      {
        title: 'Seguridad y Buenas Prácticas',
        description:
          'Comprende la importancia de las cuentas de usuario, contraseñas, permisos y copias de seguridad.'
      }
    ],
    targetAudience: [
      'Estudiantes que inician en el campo de la informática o la tecnología.',
      'Personas interesadas en comprender el funcionamiento básico de los sistemas operativos.',
      'Técnicos o aprendices que deseen reforzar sus conocimientos antes de pasar a temas más avanzados.'
    ],
    prerequisites:
      'Conocimientos básicos de uso del computador y manejo de archivos en Windows o Linux.'
  },
  {
    img: '/images/app.webp',
    title: 'Creación de Apps Móviles con App Inventor',
    slug: 'aplicaciones-con-app-inventor',
    description:
      'Aprende a crear aplicaciones para Android de forma visual y sin necesidad de escribir código, utilizando App Inventor. Este curso está diseñado para principiantes que desean entender cómo funcionan las aplicaciones, desde su diseño hasta su programación básica mediante bloques.',
    name: 'Neider Nieto',
    learn: [
      'Diseñar interfaces de usuario interactivas utilizando el editor visual de App Inventor y los principales componentes gráficos.',
      'Programar el comportamiento de la aplicación mediante el sistema de bloques lógicos, comprendiendo el uso de eventos, condiciones y variables.',
      'Integrar componentes multimedia, sensores y conectividad para ampliar las funciones de la app.',
      'Construir una aplicación completamente funcional, comprendiendo el proceso de prueba y compilación para dispositivos Android.'
    ],
    professional: [
      {
        title: 'Prototipado Rápido de Ideas',
        description:
          'Ideal para emprendedores, docentes y estudiantes que necesiten crear prototipos funcionales de aplicaciones sin conocimientos de programación tradicionales.'
      },
      {
        title: 'Herramienta Educativa Innovadora',
        description:
          'Facilita la enseñanza del pensamiento lógico y la programación visual, promoviendo la creatividad y el aprendizaje activo en entornos educativos.'
      },
      {
        title: 'Iniciación al Desarrollo de Software',
        description:
          'Proporciona una base sólida para comprender conceptos de lógica, algoritmos y eventos, fundamentales para avanzar hacia lenguajes de programación más complejos.'
      }
    ],
    courseSyllabus: [
      {
        title: 'Introducción a App Inventor',
        description:
          'Explora el entorno de desarrollo, las partes principales del editor (Diseñador y Bloques), el proceso de creación de proyectos y la estructura de una aplicación móvil.'
      },
      {
        title: 'Diseño de Interfaces de Usuario (UI)',
        description:
          'Aprende a usar el Diseñador de App Inventor para colocar botones, etiquetas, imágenes, campos de texto y otros componentes visibles. Comprende cómo organizar los elementos visuales mediante contenedores y disposiciones.'
      },
      {
        title: 'Programación con Bloques',
        description:
          'Utiliza el Editor de Bloques para definir la lógica de tu aplicación. Aprende el uso de eventos, procedimientos, condicionales, variables y bloques de control que permiten crear comportamientos interactivos.'
      },
      {
        title: 'Uso de Multimedia y Sensores',
        description:
          'Conoce los componentes que permiten agregar imágenes, sonidos, video y animaciones. Aprende a usar sensores como el acelerómetro, el GPS o el reloj interno del dispositivo para mejorar la experiencia del usuario.'
      },
      {
        title: 'Almacenamiento de Datos con TinyDB',
        description:
          'Descubre cómo guardar información de manera local dentro del dispositivo. Aprende a almacenar y recuperar datos como puntajes, nombres o configuraciones del usuario.'
      },
      {
        title: 'Comunicación con APIs Externas',
        description:
          'Aprende los fundamentos de la comunicación entre tu app y servicios web. Usa el componente “Web” para enviar y recibir datos desde APIs públicas como el clima o las noticias.'
      },
      {
        title: 'Proyecto Final: App Completa',
        description:
          'Integra todos los conocimientos adquiridos para desarrollar una aplicación con varias pantallas, manejo de datos, elementos multimedia y diseño funcional. Se incluye la prueba y compilación del archivo APK para Android.'
      }
    ],
    targetAudience: [
      'Estudiantes y educadores que buscan una herramienta práctica para iniciarse en la programación y el desarrollo móvil.',
      'Emprendedores que deseen prototipar o validar una idea de aplicación de manera visual y sencilla.',
      'Cualquier persona creativa interesada en aprender los fundamentos de la creación de apps sin experiencia previa en programación.'
    ],
    prerequisites:
      'No se requieren conocimientos previos de programación. Solo se necesita un computador con conexión a internet y un dispositivo Android para realizar pruebas con las aplicaciones creadas.'
  },
  {
    img: '/images/f-programacion.webp',
    title: 'Fundamentos de Programación',
    slug: 'fundamentos-de-programacion',
    description:
      'Aprende desde cero los conceptos esenciales de la programación. Comprende la lógica, los algoritmos, el uso de pseudocódigo con PSeInt, diagramas de flujo y los fundamentos del lenguaje Python. Ideal para quienes nunca han programado antes.',
    name: 'Neider Nieto',
    learn: [
      'Comprender qué es la programación y desarrollar el pensamiento lógico mediante algoritmos y diagramas de flujo (DFD).',
      'Usar PSeInt para escribir y probar pseudocódigo de manera sencilla.',
      'Aplicar los fundamentos del lenguaje Python para crear programas básicos.',
      'Analizar y resolver problemas mediante estructuras secuenciales, condicionales y repetitivas.'
    ],
    professional: [
      {
        title: 'Base para Futuros Programadores',
        description:
          'Proporciona los cimientos teóricos y prácticos para continuar hacia lenguajes de programación más avanzados y desarrollo de software profesional.'
      },
      {
        title: 'Pensamiento Lógico y Resolución de Problemas',
        description:
          'Fortalece la capacidad de razonar y crear soluciones paso a paso, habilidad esencial para cualquier campo tecnológico o científico.'
      },
      {
        title: 'Formación Técnica Integral',
        description:
          'Introduce herramientas clave como pseudocódigo, diagramas de flujo y Python, combinando la teoría con la práctica en cada módulo.'
      }
    ],
    courseSyllabus: [
      {
        title: 'Introducción a la Programación y al Pensamiento Computacional',
        description:
          'Comprende qué es programar, el papel del programador, los lenguajes de programación y cómo los computadores procesan instrucciones paso a paso.'
      },
      {
        title: 'Conceptos Básicos de Lógica y Algoritmos',
        description:
          'Aprende a analizar problemas, plantear soluciones lógicas y escribir algoritmos paso a paso para resolverlos.'
      },
      {
        title: 'Representación Gráfica con Diagramas de Flujo (DFD)',
        description:
          'Desarrolla habilidades para representar visualmente tus algoritmos mediante diagramas de flujo, aplicando símbolos y conectores estándar.'
      },
      {
        title: 'Introducción a PSeInt y al Pseudocódigo',
        description:
          'Familiarízate con el entorno PSeInt y aprende a escribir, ejecutar y depurar algoritmos en pseudocódigo de forma sencilla e intuitiva.'
      },
      {
        title: 'Estructuras Secuenciales',
        description:
          'Crea programas que ejecuten instrucciones en orden, comprendiendo el flujo lineal de ejecución en la resolución de problemas simples.'
      },
      {
        title: 'Estructuras Condicionales',
        description:
          'Aprende a tomar decisiones en tus programas utilizando instrucciones como SI...ENTONCES...SINO para controlar el flujo según condiciones.'
      },
      {
        title: 'Estructuras Repetitivas o Bucles',
        description:
          'Domina los ciclos PARA, MIENTRAS y REPETIR en PSeInt para automatizar tareas y realizar acciones repetitivas eficientemente.'
      },
      {
        title: 'Introducción a Python',
        description:
          'Da el salto al lenguaje Python conociendo su entorno, sintaxis básica y ejecutando tus primeros programas de consola.'
      },
      {
        title: 'Tipos de Datos, Variables y Operadores en Python',
        description:
          'Comprende cómo almacenar información, realizar operaciones matemáticas y lógicas utilizando variables y operadores básicos.'
      },
      {
        title: 'Estructuras de Control en Python',
        description:
          'Aplica condicionales y bucles en Python para resolver problemas de manera dinámica y estructurada.'
      },
      {
        title: 'Funciones y Modularidad',
        description:
          'Aprende a dividir tu código en partes reutilizables mediante funciones para lograr programas más organizados y legibles.'
      },

      {
        title: 'Proyecto Final | Calculadora por Consola/Interfaz',
        description:
          'Desarrolla un pequeño programa en Python aplicando todo lo aprendido: análisis del problema, algoritmo, DFD, pseudocódigo y código final.'
      }
    ],
    targetAudience: [
      'Personas sin experiencia previa en programación que desean aprender desde cero.',
      'Estudiantes que inician en carreras de tecnología o informática.',
      'Docentes o técnicos que buscan fortalecer su comprensión de la lógica de programación.'
    ],
    prerequisites:
      'No se requieren conocimientos previos. Solo necesitas un computador, acceso a internet y disposición para aprender paso a paso.'
  },

  {
    img: '/images/bd.webp',
    title: 'Bases de Datos Relacionales en Access',
    slug: 'bases-de-datos-en-access',
    description:
      'Aprende a crear, gestionar y consultar bases de datos relacionales con Microsoft Access. Diseña tablas, formularios, consultas e informes paso a paso, sin necesidad de experiencia previa.',
    name: 'Neider Nieto',
    learn: [
      'Comprender los conceptos fundamentales de las bases de datos relacionales.',
      'Diseñar y relacionar tablas correctamente en Access.',
      'Crear formularios para ingresar y visualizar información fácilmente.',
      'Realizar consultas para filtrar y analizar datos.',
      'Generar informes profesionales con resultados personalizados.',
      'Introducirse al lenguaje SQL para realizar consultas básicas.'
    ],
    professional: [
      {
        title: 'Gestión Eficiente de la Información',
        description:
          'Aprende a organizar, almacenar y analizar datos de manera profesional, aplicable en oficinas, empresas o instituciones educativas.'
      },
      {
        title: 'Automatización de Procesos Administrativos',
        description:
          'Crea herramientas personalizadas en Access que faciliten tareas como control de inventarios, registros académicos o reportes contables.'
      },
      {
        title: 'Puerta de Entrada al Mundo de las Bases de Datos',
        description:
          'Desarrolla una base sólida que te permitirá avanzar luego hacia sistemas más complejos y el uso profesional de SQL o PostgreSQL.'
      }
    ],
    courseSyllabus: [
      {
        title: 'Introducción a las Bases de Datos Relacionales',
        description:
          'Comprende los conceptos teóricos fundamentales: entidades, atributos, registros, campos y relaciones. Analiza las diferencias entre bases de datos planas y relacionales, y entiende la importancia de la integridad referencial y las claves primarias.'
      },
      {
        title: 'Entorno de Trabajo en Microsoft Access',
        description:
          'Explora la interfaz de Access, sus componentes principales (tablas, formularios, consultas, informes y macros) y la estructura de un archivo .ACCDB. Aprende a navegar por el panel de objetos y a personalizar la vista de diseño.'
      },
      {
        title: 'Creación y Estructuración de Tablas',
        description:
          'Diseña tablas aplicando los principios de normalización (1FN, 2FN, 3FN). Define tipos de datos apropiados, máscaras de entrada, valores predeterminados y reglas de validación para garantizar la integridad de los datos.'
      },
      {
        title: 'Gestión de Claves Primarias y Relaciones entre Tablas',
        description:
          'Crea claves primarias, secundarias y foráneas. Aprende a definir relaciones uno a uno y uno a muchos. Configura la integridad referencial, la actualización en cascada y la eliminación controlada de registros relacionados.'
      },
      {
        title: 'Consultas Simples y Selección de Datos (DQL)',
        description:
          'Construye consultas de selección en vista Diseño. Aplica criterios, filtros, ordenamientos y expresiones lógicas. Utiliza funciones de agregación (SUM, AVG, COUNT) y operadores relacionales y lógicos para extraer información precisa.'
      },
      {
        title: 'Consultas Parametrizadas, de Acción y de Resumen',
        description:
          'Desarrolla consultas más avanzadas que permiten la interacción con el usuario mediante parámetros. Ejecuta consultas de acción (INSERT, UPDATE, DELETE, APPEND) y genera informes de resumen agrupados.'
      },
      {
        title: 'Diseño de Formularios Funcionales',
        description:
          'Crea formularios personalizados utilizando la vista Diseño. Inserta controles como cuadros de texto, botones, listas desplegables y subformularios. Implementa propiedades y eventos para mejorar la usabilidad del sistema.'
      },
      {
        title: 'Diseño y Personalización de Informes',
        description:
          'Aprende a generar informes estructurados y visualmente atractivos. Configura encabezados, pies de página, cálculos automáticos y agrupamientos de datos para la presentación de resultados profesionales.'
      },
      {
        title: 'Automatización con Macros y Propiedades Avanzadas',
        description:
          'Introduce el uso de macros en Access para ejecutar tareas automáticas. Configura acciones como abrir formularios, ejecutar consultas o validar campos. Comprende las propiedades de eventos y su aplicación práctica.'
      },
      {
        title: 'Integración de Datos y Vinculación con Otras Fuentes',
        description:
          'Aprende a importar y vincular datos desde archivos Excel, CSV y otras bases de datos Access. Comprende los conceptos de origen de datos, conexión ODBC y mantenimiento de consistencia entre fuentes externas.'
      },
      {
        title: 'Optimización y Mantenimiento de la Base de Datos',
        description:
          'Aplica técnicas de compactación y reparación para optimizar el rendimiento del archivo. Identifica errores comunes, duplicados y datos inconsistentes mediante herramientas de diagnóstico integradas.'
      },
      {
        title: 'Introducción al Lenguaje SQL en Access',
        description:
          'Analiza la estructura de una consulta SQL (SELECT, FROM, WHERE, ORDER BY). Aprende a editar consultas en vista SQL, utilizar alias, operadores lógicos, funciones integradas y realizar consultas multitabla mediante JOIN.'
      }
    ],
    targetAudience: [
      'Estudiantes y profesionales que necesiten gestionar información de manera organizada.',
      'Personas sin experiencia que deseen aprender a usar Access desde cero.',
      'Usuarios administrativos que busquen crear sistemas simples de registro y consulta de datos.'
    ],
    prerequisites:
      'No se requieren conocimientos previos de programación. Solo se necesita un computador con Microsoft Access instalado y disposición para aprender.'
  },
  {
    img: '/images/web.webp',
    title: 'Diseño Web para Principiantes',
    slug: 'diseño-web',
    description:
      'Aprende desde cero a construir páginas web con HTML, CSS y una introducción práctica a JavaScript. Domina las bases del diseño web moderno y crea tus primeros sitios responsivos y funcionales.',
    name: 'Neider Nieto',
    learn: [
      'Comprender cómo funciona la web y cómo se estructura una página.',
      'Crear sitios web bien organizados utilizando HTML5 de forma semántica.',
      'Aplicar estilos con CSS3 para diseñar páginas visualmente atractivas.',
      'Diseñar sitios adaptables a dispositivos móviles y de escritorio.',
      'Introducir interactividad básica con JavaScript.',
      'Publicar un sitio web funcional listo para mostrarse en línea.'
    ],
    professional: [
      {
        title: 'Habilidad para Crear Sitios Web Profesionales',
        description:
          'Desarrolla la capacidad de construir sitios modernos para proyectos personales, institucionales o comerciales utilizando herramientas estándar de la web.'
      },
      {
        title: 'Puerta de Entrada al Desarrollo Web',
        description:
          'Proporciona una base sólida para continuar con frameworks modernos como React, Angular o Vue una vez dominados los fundamentos.'
      },
      {
        title: 'Competencia Digital y Creativa',
        description:
          'Combina el pensamiento lógico y el diseño visual para crear experiencias web efectivas y funcionales.'
      }
    ],
    courseSyllabus: [
      {
        title: 'Introducción al Diseño Web y Funcionamiento de la Web',
        description:
          'Comprende qué es la web, cómo funciona el modelo cliente-servidor, qué es un navegador y cómo los archivos HTML, CSS y JavaScript interactúan entre sí.'
      },
      {
        title: 'Estructura de una Página con HTML5',
        description:
          'Aprende a usar etiquetas semánticas (header, nav, main, section, footer) y a estructurar correctamente el contenido de un documento HTML.'
      },
      {
        title: 'Texto, Enlaces e Imágenes en HTML',
        description:
          'Agrega títulos, párrafos, listas, hipervínculos e imágenes. Aprende las buenas prácticas de accesibilidad y el uso correcto de atributos.'
      },
      {
        title: 'Tablas y Formularios en HTML',
        description:
          'Crea tablas de datos y formularios con campos de texto, botones, selectores y validaciones básicas mediante atributos HTML.'
      },
      {
        title: 'Introducción al Estilo con CSS3',
        description:
          'Conoce la sintaxis de CSS, selectores, propiedades y unidades. Aplica colores, tipografía, márgenes y bordes para mejorar la apariencia de tus páginas.'
      },
      {
        title:
          'Diseño Visual y Distribución con CSS (Box Model, Flexbox y Grid)',
        description:
          'Domina el modelo de caja, posicionamiento, alineación de elementos, uso de Flexbox y Grid Layout para construir diseños modernos y adaptables.'
      },
      {
        title: 'Diseño Responsivo y Adaptativo',
        description:
          'Aprende a utilizar Media Queries para crear sitios web que se ajusten a diferentes resoluciones de pantalla y dispositivos móviles.'
      },
      {
        title: 'Buenas Prácticas en HTML y CSS',
        description:
          'Organiza tu código correctamente, indenta tus etiquetas y aprende principios básicos de usabilidad y experiencia de usuario (UX/UI).'
      },
      {
        title: 'Introducción a JavaScript para el Diseño Web',
        description:
          'Conoce los fundamentos del lenguaje: variables, funciones, eventos y manipulación del DOM. Aplica interactividad básica como botones dinámicos o validaciones simples.'
      },
      {
        title: 'Proyecto Final: Sitio Web Completo',
        description:
          'Aplica todos los conocimientos creando un sitio web de varias páginas con estructura HTML, estilos CSS y funcionalidades simples en JavaScript.'
      }
    ],
    targetAudience: [
      'Estudiantes y principiantes que nunca han creado una página web.',
      'Personas interesadas en aprender diseño y desarrollo web desde cero.',
      'Emprendedores o docentes que quieran construir sitios sencillos sin depender de terceros.'
    ],
    prerequisites:
      'No se requieren conocimientos previos. Solo se necesita un computador, conexión a internet y un navegador web moderno para comenzar a practicar.'
  },
  {
    img: '/images/seguridad.webp',
    title: 'Fundamentos de Seguridad Informática',
    slug: 'seguridad-informatica',
    description:
      'Descubre los principios esenciales de la seguridad informática y aprende cómo proteger tu información, tus dispositivos y tus redes frente a amenazas digitales.',
    name: 'Neider Nieto',
    learn: [
      'Comprender qué es la seguridad informática y por qué es fundamental hoy en día.',
      'Reconocer los principales tipos de amenazas, ataques y vulnerabilidades digitales.',
      'Aplicar medidas básicas de protección en equipos, redes y cuentas personales.',
      'Conocer herramientas y buenas prácticas para mantener entornos informáticos seguros.'
    ],
    professional: [
      {
        title: 'Formación en Seguridad desde Cero',
        description:
          'Ideal para quienes comienzan en el mundo de la informática y desean adquirir una base sólida en ciberseguridad.'
      },
      {
        title: 'Desarrollo de Cultura de Seguridad Digital',
        description:
          'Promueve hábitos de seguridad y conciencia frente al uso responsable de la información en entornos personales o laborales.'
      },
      {
        title: 'Puerta de Entrada a la Ciberseguridad Profesional',
        description:
          'Sirve como punto de partida para futuras certificaciones o especializaciones en seguridad informática.'
      }
    ],
    courseSyllabus: [
      {
        title: 'Introducción a la Seguridad Informática',
        description:
          'Conoce qué es la seguridad informática, su importancia, objetivos principales y los pilares de la protección digital (confidencialidad, integridad y disponibilidad).'
      },
      {
        title: 'Tipos de Amenazas y Ataques Informáticos',
        description:
          'Identifica virus, ransomware, phishing, ingeniería social y otras amenazas que afectan a usuarios y organizaciones.'
      },
      {
        title: 'Seguridad en Dispositivos y Sistemas Operativos',
        description:
          'Aprende a proteger equipos Windows y Linux mediante actualizaciones, antivirus y configuraciones seguras.'
      },
      {
        title: 'Seguridad en Redes Domésticas y Públicas',
        description:
          'Descubre cómo proteger tu conexión Wi-Fi, utilizar VPNs y configurar contraseñas seguras en routers.'
      },
      {
        title: 'Criptografía Básica y Contraseñas Seguras',
        description:
          'Entiende cómo funciona el cifrado, la autenticación y el manejo correcto de contraseñas y doble factor de verificación.'
      },
      {
        title: 'Buenas Prácticas de Navegación y Correo Electrónico',
        description:
          'Aplica hábitos seguros al navegar en internet, descargar archivos o responder correos electrónicos sospechosos.'
      },
      {
        title: 'Copias de Seguridad y Recuperación de Datos',
        description:
          'Aprende a crear y gestionar respaldos para prevenir pérdida de información ante ataques o fallos del sistema.'
      },
      {
        title: 'Gestión de Incidentes Básica',
        description:
          'Conoce cómo actuar ante un incidente de seguridad, desde el reporte hasta la mitigación y prevención futura.'
      },
      {
        title: 'Proyecto Final: Plan de Seguridad Personal o Empresarial',
        description:
          'Diseña un plan básico de seguridad aplicando los conceptos vistos para proteger datos, redes y dispositivos.'
      }
    ],
    targetAudience: [
      'Personas sin experiencia que deseen iniciarse en seguridad informática.',
      'Estudiantes de técnico o tecnología en sistemas.',
      'Usuarios que deseen proteger su información personal o la de su organización.'
    ],
    prerequisites:
      'No se requieren conocimientos previos. Ideal para principiantes en informática o redes.'
  },
  {
    img: '/images/office.webp',
    title: 'Herramientas Ofimáticas Esenciales',
    slug: 'herramientas-ofimaticas',
    description:
      'Domina el conjunto de herramientas ofimáticas más utilizadas (Word, Excel, PowerPoint, Outlook y OneDrive) y adquiere habilidades técnicas para crear, analizar, presentar y gestionar información en entornos profesionales.',
    name: 'Neider Nieto',
    learn: [
      'Utilizar de forma técnica y profesional las principales aplicaciones de Microsoft Office.',
      'Crear documentos, hojas de cálculo y presentaciones con estándares empresariales.',
      'Aplicar funciones, gráficos y herramientas de análisis en Excel para la gestión de datos.',
      'Implementar flujos de trabajo colaborativos utilizando OneDrive y Office 365.',
      'Integrar varias herramientas de Office para optimizar procesos administrativos y técnicos.'
    ],
    professional: [
      {
        title: 'Competencias Digitales Profesionales',
        description:
          'Desarrolla las destrezas técnicas que toda organización demanda en sus equipos administrativos y de soporte.'
      },
      {
        title: 'Eficiencia y Productividad en Entornos de Oficina',
        description:
          'Aprende a automatizar tareas, organizar información y comunicar resultados de manera efectiva.'
      },
      {
        title: 'Base Técnica para Perfiles de Soporte y Gestión',
        description:
          'Fundamenta el uso profesional de Office como herramienta clave en mantenimiento documental, gestión de proyectos y comunicación digital.'
      }
    ],
    courseSyllabus: [
      {
        title: 'Introducción a la Ofimática y Microsoft 365',
        description:
          'Comprende qué es la ofimática, los tipos de aplicaciones de Microsoft Office y cómo se gestionan los archivos y licencias dentro del entorno Microsoft 365.'
      },
      {
        title: 'Exploración del Entorno Windows y Carpetas',
        description:
          'Aprende la estructura del sistema operativo, organización de archivos, rutas absolutas y relativas, tipos de extensiones y buenas prácticas de almacenamiento.'
      },
      {
        title: 'Fundamentos de Word',
        description:
          'Conoce la interfaz, las herramientas de cinta de opciones y aprende a redactar documentos con formato básico, listas y estilos iniciales.'
      },
      {
        title: 'Formato Avanzado en Word',
        description:
          'Domina encabezados, pies de página, columnas, saltos de sección, numeración automática y plantillas personalizadas.'
      },
      {
        title: 'Elementos Gráficos y Tablas en Word',
        description:
          'Inserta imágenes, gráficos, SmartArt, cuadros de texto y tablas con diseño estructurado y control de estilos.'
      },
      {
        title: 'Automatización de Documentos en Word',
        description:
          'Usa referencias cruzadas, tablas de contenido, índices, hipervínculos y combinación de correspondencia para documentos masivos.'
      },
      {
        title: 'Fundamentos de Excel',
        description:
          'Familiarízate con el entorno de Excel, hojas de trabajo, tipos de datos, celdas, rangos y operaciones aritméticas básicas.'
      },
      {
        title: 'Formato y Organización de Hojas de Cálculo',
        description:
          'Aplica formatos condicionales, estilos personalizados, validación de datos y herramientas de visualización rápida.'
      },
      {
        title: 'Fórmulas y Funciones Básicas en Excel',
        description:
          'Aplica funciones matemáticas, estadísticas y de texto: SUMA, PROMEDIO, MAX, MIN, CONTAR, CONCATENAR, entre otras.'
      },
      {
        title: 'Funciones Lógicas y de Búsqueda',
        description:
          'Implementa funciones condicionales y de búsqueda como SI, Y, O, BUSCARV, BUSCARX y COINCIDIR.'
      },
      {
        title: 'Tablas y Gráficos Dinámicos',
        description:
          'Crea informes interactivos mediante tablas dinámicas, segmentación de datos y gráficos vinculados.'
      },
      {
        title: 'Fundamentos de PowerPoint',
        description:
          'Aprende a crear presentaciones estructuradas, aplicar plantillas y configurar transiciones y animaciones.'
      },
      {
        title: 'Diseño Visual y Comunicación Efectiva',
        description:
          'Aplica principios de diseño, color y jerarquía visual para presentaciones atractivas y profesionales.'
      },
      {
        title: 'Gestión del Correo Electrónico con Outlook',
        description:
          'Configura cuentas, organiza bandejas, crea carpetas, reglas automáticas, citas y reuniones en el calendario.'
      },
      {
        title: 'Trabajo Colaborativo con OneDrive y Office 365',
        description:
          'Comparte documentos, gestiona permisos, coedita en tiempo real y realiza copias de seguridad en la nube.'
      },
      {
        title: 'Integración entre Word, Excel y PowerPoint',
        description:
          'Conecta hojas de cálculo con informes de Word y presentaciones de PowerPoint, vinculando datos dinámicamente.'
      },
      {
        title: 'Automatización y Macros Básicas',
        description:
          'Descubre la automatización mediante macros simples en Excel y Word para optimizar procesos repetitivos.'
      }
    ],
    targetAudience: [
      'Estudiantes y principiantes que desean adquirir competencias digitales básicas.',
      'Técnicos en sistemas, administración o contabilidad que necesiten dominar Office.',
      'Profesionales que busquen mejorar su productividad y presentación de resultados.'
    ],
    prerequisites:
      'Conocimientos básicos en manejo de computador y sistema operativo Windows. No se requiere experiencia previa con Microsoft Office.'
  }
]
