export const profile = {
  name: 'Janerson Arrunategui',
  fullName: 'Janerson Leonel Arrunategui Moreira',
  role: 'Ingeniero de Software',
  location: 'Portoviejo, Manabí — Ecuador',
  email: 'janersonarruwork@gmail.com',
  phone: '+593 99 971 7366',
  whatsapp: 'https://wa.me/593999717366',
  github: 'https://github.com/Jleoneel',
  linkedin: 'https://www.linkedin.com/in/janerson-arrunategui/',
  certifications:
    'https://drive.google.com/file/d/1fD5U2rXKxM-FsNQ9nFjBYUuWvL_GTogu/view?usp=drive_link',
  cv: '/assets/cv-janerson-arrunategui.pdf',
}

// Cambiar aquí cuando APÁRTALO tenga su dominio definitivo
export const apartalo = {
  site: 'https://barbersaas-ec.duckdns.org/',
  bot: 'https://wa.me/593999717366?text=AGENDA',
}

export const stats = [
  { value: 6, suffix: '', label: 'Sistemas construidos', note: 'de cero a producción' },
  { value: 5, suffix: '', label: 'Clientes e instituciones', note: 'públicas y privadas' },
  { value: 430, suffix: '+', label: 'Pruebas automatizadas', note: 'en el monorepo de APÁRTALO' },
  { value: 1.5, suffix: '+', label: 'Años en producción', note: 'desde marzo de 2025', decimals: 1 },
]

export const stack = [
  {
    group: 'Lenguajes',
    items: [
      ['TypeScript', 'typescript'],
      ['JavaScript', 'javascript'],
      ['SQL', 'postgresql'],
      ['Python', 'python'],
      ['Java', 'java'],
    ],
  },
  {
    group: 'Frontend',
    items: [
      ['React', 'react'],
      ['Angular', 'angular'],
      ['Tailwind CSS', 'tailwindcss'],
      ['Bootstrap', 'bootstrap'],
      ['HTML5', 'html5'],
      ['CSS', 'css3'],
    ],
  },
  {
    group: 'Backend y datos',
    items: [
      ['Node.js', 'nodejs'],
      ['Express', 'express'],
      ['Fastify', 'fastify'],
      ['Django', 'django'],
      ['PostgreSQL', 'postgresql'],
      ['MySQL', 'mysql'],
      ['Prisma ORM', 'prisma'],
    ],
  },
  {
    group: 'Infraestructura',
    items: [
      ['Docker', 'docker'],
      ['Nginx', 'nginx'],
      ['GitHub Actions', 'githubactions'],
      ['Oracle Cloud', 'oracle'],
      ['Ubuntu Server', 'ubuntu'],
      ['Railway', 'railway'],
      ['Supabase', 'supabase'],
      ['Netlify', 'netlify'],
    ],
  },
  {
    group: 'Herramientas',
    items: [
      ['Git', 'git'],
      ['GitHub', 'github'],
      ['Postman', 'postman'],
      ['Google Cloud Vision', 'googlecloud'],
      ['Selenium', 'selenium'],
    ],
  },
]

const gallery = (folder, prefix, items, ext = 'webp') =>
  items.map(([n, title, tab]) => ({
    src: `/assets/img/${folder}/${prefix}-${n}.${ext}`,
    title,
    tab,
  }))

export const projects = [
  {
    id: 'apartalo',
    name: 'APÁRTALO',
    kicker: 'Producto propio · SaaS',
    period: '08/2026 — Actualidad',
    role: 'Fundador y desarrollador full stack',
    headline: 'Reservas para barberías por WhatsApp, en lenguaje natural, sin app ni registro.',
    summary:
      'Plataforma multi-negocio con clientes de pago activos. Cada barbería opera con sus propios datos, roles y configuración aislados; el panel de la plataforma está completamente separado. El cliente escribe como escribiría a una persona y el sistema agenda.',
    highlights: [
      'Motor conversacional híbrido: reglas fijas cuando la intención es clara, IA solo cuando el mensaje es ambiguo — con registro de costo por uso.',
      'Integración con la API oficial de WhatsApp de Meta: webhooks, mensajes interactivos y recepción de comprobantes de pago.',
      'Restricción a nivel de base de datos que impide reservas duplicadas en el mismo barbero y horario, incluso bajo carga concurrente.',
      'Tokens de acceso cifrados por negocio, recordatorios y limpiezas con tareas programadas.',
      'Monorepo con más de 430 pruebas automatizadas, CI con GitHub Actions y despliegue en Oracle Cloud con Docker, Nginx y HTTPS.',
    ],
    metrics: [
      ['430+', 'pruebas automatizadas'],
      ['+100', 'citas agendadas en una barbería real'],
      ['0', 'apps que instalar para el cliente'],
    ],
    stack: ['TypeScript', 'Fastify', 'React', 'PostgreSQL', 'Prisma', 'WhatsApp Cloud API', 'Docker', 'Oracle Cloud'],
    screens: gallery('APARTALO/panel', 'panel', [
      ['01', 'Dashboard del negocio: citas, ingresos y agenda del día', 'Dashboard'],
      ['02', 'Agenda por barbero con estados de cada cita', 'Agenda'],
      ['03', 'Detalle de reserva con abono pendiente de verificar', 'Abonos'],
      ['04', 'Historial de la conversación de WhatsApp con el bot', 'WhatsApp'],
      ['05', 'Clientes registrados automáticamente desde WhatsApp', 'Clientes'],
      ['06', 'Configuración del negocio, horarios y recordatorios', 'Ajustes'],
      ['07', 'Panel de plataforma: todos los negocios y su suscripción', 'Plataforma'],
      ['08', 'Detalle de un negocio dentro del panel de plataforma', 'Negocio'],
    ]),
    phones: gallery(
      'APARTALO',
      'apartalo',
      [
        ['01', 'El cliente saluda y recibe el menú de opciones'],
        ['02', 'Selección de servicio con mensajes interactivos'],
        ['03', 'Barbero y día elegidos con un toque'],
        ['04', 'Solo se ofrecen horarios realmente libres'],
        ['05', 'Confirmación y recordatorio automático'],
        ['06', 'La cita aparece sola en la agenda de la barbería'],
      ],
      'jpg',
    ),
    status: 'Producción · clientes de pago',
    deploy: 'Oracle Cloud · Docker',
    featured: true,
  },
  {
    id: 'extasis',
    name: 'ÉXTASIS',
    kicker: 'Freelance · Bar-Karaoke',
    period: '07/2026 — 09/2026',
    role: 'Desarrollador full stack',
    headline: 'Inventario, turnos de venta, cierres de caja y rentabilidad real por producto.',
    summary:
      'Sistema de gestión completo, desde el levantamiento de requerimientos hasta el despliegue. Diseñado como un libro contable.',
    pull: 'Nada se sobrescribe. Todo se puede auditar.',
    highlights: [
      'Inventario inmutable: cada movimiento queda registrado; las correcciones entran como ajustes con motivo obligatorio.',
      'Cobros con bloqueo a nivel de base de datos para que dos operaciones simultáneas no afecten el mismo saldo.',
      'Cada venta congela precio y costo del momento: rentabilidad real por producto, período y vendedor.',
      'Doble token, Argon2, control por roles, límite de intentos y auditoría en acciones sensibles.',
      'Respaldos automáticos a Oracle Object Storage y despliegue con integración continua.',
    ],
    stack: ['TypeScript', 'Express', 'React', 'PostgreSQL', 'Prisma', 'Docker', 'Oracle Cloud'],
    status: 'Producción',
    deploy: 'Oracle Cloud · CI/CD',
    screens: gallery('EXTASIS', 'extasis', [
      ['01', 'Dashboard del día: ventas, cierres pendientes y alertas de stock', 'Dashboard'],
      ['02', 'Revisión de cierre de turno antes de descontar inventario', 'Cierre'],
      ['03', 'Rentabilidad real por producto con costo congelado por venta', 'Rentabilidad'],
      ['04', 'Reportes de ventas por período', 'Reportes'],
      ['05', 'Supervisión de turnos y estado de revisión', 'Turnos'],
      ['06', 'Kárdex inmutable de movimientos de inventario', 'Inventario'],
      ['07', 'Compras a proveedores', 'Compras'],
      ['08', 'Acceso al sistema', 'Acceso'],
    ]),
  },
  {
    id: 'sith',
    name: 'SITH',
    kicker: 'Institucional · Hospital Verdi Cevallos Balda',
    period: '01/2026 — 09/2026',
    role: 'Desarrollador full stack',
    headline: 'Sistema Integral de Talento Humano con firma digital real del Banco Central.',
    summary:
      'Gestión de acciones de personal, permisos y vacaciones para el hospital de Portoviejo, con un flujo de aprobación de 5 firmantes en 3 niveles jerárquicos. En uso sobre la red interna de la institución.',
    highlights: [
      'Firma digital con certificados .p12 del Banco Central del Ecuador, embebida en los PDF que genera el sistema.',
      'Importación del distributivo institucional desde Excel con sincronización de cargos, unidades y servidores.',
      'Notificaciones en tiempo real por rol y correos automáticos en cada etapa de aprobación.',
      'Despliegue con PM2 y Nginx sobre infraestructura Proxmox del hospital.',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Nginx', 'Proxmox'],
    status: 'En uso · red interna',
    deploy: 'Proxmox · PM2 · Nginx',
    screens: gallery('SITH', 'sith', [
      ['01', 'Dashboard de acciones de personal', 'Dashboard'],
      ['03', 'Flujo de aprobación de 5 firmantes en 3 niveles', 'Aprobación'],
      ['04', 'PDF con firmas digitales y QR de verificación', 'Firma digital'],
      ['05', 'Registro del certificado digital .p12', 'Certificado'],
      ['07', 'Jefaturas por unidad orgánica', 'Jefaturas'],
      ['08', 'Nueva solicitud de vacaciones', 'Solicitud'],
      ['10', 'Reporte de vacaciones', 'Reporte'],
      ['00', 'Acceso institucional', 'Acceso'],
    ]),
  },
  {
    id: 'perro-viejo',
    name: 'Perro Viejo',
    kicker: 'Freelance · Billar',
    period: '05/2026 — 07/2026',
    role: 'Desarrollador full stack',
    headline: 'Alquiler de mesas por tiempo, consumo, caja e inventario en un solo sistema.',
    summary:
      'Operación diaria de un billar: la tarifa corre en tiempo real y se congela al cobrar. Sin caja abierta no se opera; al cerrar, el sistema calcula las diferencias entre lo registrado y lo contado.',
    pull: 'El reloj corre en tiempo real; el precio se congela al cobrar.',
    highlights: [
      'Lectura automática de cédula con la cámara del navegador y OCR de Google Cloud Vision.',
      'Tarifa calculada por tiempo de uso, congelada al momento del cobro y sin edición posterior.',
      'Cobros con bloqueo a nivel de base de datos contra operaciones simultáneas.',
      'Despliegue en Oracle Cloud con Docker, Nginx y HTTPS.',
    ],
    stack: ['React', 'Express', 'PostgreSQL', 'Prisma', 'Google Cloud Vision', 'Docker'],
    status: 'Producción',
    deploy: 'Oracle Cloud · Docker',
    screens: gallery('PERRO', 'perro', [
      ['01', 'Dashboard en vivo: mesas, sesiones y caja del turno', 'Dashboard'],
      ['02', 'Estado de las mesas en tiempo real', 'Mesas'],
      ['03', 'Sesiones activas con la tarifa corriendo', 'Sesiones'],
      ['04', 'Caja abierta con ventas en efectivo del turno', 'Caja'],
      ['05', 'Reportes financieros y operativos', 'Reportes'],
      ['06', 'Clientes registrados con lectura de cédula', 'Clientes'],
      ['07', 'Cuentas abiertas por mesa', 'Ventas'],
      ['08', 'Acceso al sistema', 'Acceso'],
    ]),
  },
  {
    id: 'caba',
    name: 'CABA',
    kicker: 'Tesis · Universidad Técnica de Manabí',
    period: '01/2026 — 05/2026',
    role: 'Desarrollador full stack',
    headline: 'Del pedido de cotización al informe de resultados, para un laboratorio universitario.',
    summary:
      'Sistema para el Centro de Análisis Biológico y Agroalimentario de la UTM. Cubre el flujo completo de un análisis de laboratorio y deja que el cliente siga su muestra sin registrarse.',
    highlights: [
      'Código único y QR por muestra: el cliente consulta el estado en tiempo real desde cualquier dispositivo.',
      'Tablero visual de producción para analistas, con alertas de calibración de equipos.',
      'Inventario de reactivos con consumos vinculados a cada análisis y alertas de stock mínimo.',
      'Informes automáticos en PDF y Word, reportes con gráficas y exportación a Excel.',
    ],
    stack: ['React', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Ubuntu Server'],
    status: 'Desplegado',
    deploy: 'Ubuntu Server · PM2 · Nginx',
    screens: gallery('CABA', 'caba', [
      ['01', 'Tablero de producción por estado de la muestra', 'Producción'],
      ['02', 'Detalle y progreso de análisis de una muestra', 'Muestra'],
      ['03', 'Seguimiento público por QR, sin registro', 'Seguimiento QR'],
      ['04', 'Cotizaciones con lista de precios externa o estudiante', 'Cotizaciones'],
      ['05', 'Inventario de reactivos con alertas de stock mínimo', 'Reactivos'],
      ['06', 'Equipos con alertas de calibración vencida', 'Equipos'],
      ['07', 'Reportes y estadísticas', 'Reportes'],
      ['08', 'Catálogo de servicios de análisis', 'Servicios'],
      ['09', 'Acceso al sistema', 'Acceso'],
    ]),
  },
  {
    id: 'iess',
    name: 'IESS Manta',
    kicker: 'Institucional · Hospital General IESS',
    period: '03/2025 — 07/2025',
    role: 'Desarrollador full stack',
    headline: 'Módulos web para la gestión hospitalaria, sobre un sistema en producción.',
    summary:
      'Módulo de visualización y análisis estadístico del ingreso de pacientes en Emergencia, y módulo para el área de Derivaciones que agilizó procesos que antes eran manuales. Además, soporte técnico a distintas áreas del hospital.',
    highlights: [],
    stack: ['SQL', 'Git'],
    status: 'Soporte',
    screens: [],
    brief: true,
  },
]

export const experience = [
  {
    period: '08/2026 — Hoy',
    role: 'Fundador y desarrollador full stack',
    org: 'APÁRTALO',
    type: 'Producto propio',
    note: 'SaaS multi-negocio de reservas por WhatsApp con clientes de pago activos.',
  },
  {
    period: '07/2026 — 09/2026',
    role: 'Desarrollador full stack freelance',
    org: 'Bar-Karaoke ÉXTASIS',
    type: 'Freelance',
    note: 'Inventario auditable, turnos de venta, cierres de caja y rentabilidad.',
  },
  {
    period: '01/2026 — 09/2026',
    role: 'Desarrollador full stack',
    org: 'Hospital Verdi Cevallos Balda',
    type: 'Sector público',
    note: 'SITH: talento humano con firma digital y aprobación jerárquica.',
  },
  {
    period: '05/2026 — 07/2026',
    role: 'Desarrollador full stack freelance',
    org: 'Billar El Perro Viejo',
    type: 'Freelance',
    note: 'Mesas por tiempo, caja, inventario y OCR de cédula.',
  },
  {
    period: '01/2026 — 05/2026',
    role: 'Desarrollador full stack — Tesis',
    org: 'Universidad Técnica de Manabí',
    type: 'Académico',
    note: 'CABA: gestión integral del laboratorio de análisis.',
  },
  {
    period: '03/2025 — 07/2025',
    role: 'Desarrollador full stack',
    org: 'Hospital General IESS Manta',
    type: 'Sector público',
    note: 'Módulos de estadística de Emergencia y de Derivaciones; soporte técnico.',
  },
]

export const education = [
  {
    period: '2021 — 2026',
    title: 'Ingeniero de Software',
    org: 'Universidad Técnica de Manabí',
    note: 'Registro SENESCYT 1009-2026-3425563',
  },
]

// Extractos textuales de las certificaciones laborales (Drive: profile.certifications)
export const testimonials = [
  {
    id: 'perro-viejo',
    quote:
      'El sistema desarrollado permitió mejorar el control de las operaciones diarias, reducir el manejo manual de la información y facilitar la administración del negocio.',
    extra: 'Demostró responsabilidad, profesionalismo, iniciativa y compromiso en el cumplimiento de las actividades encomendadas.',
    author: 'Isaac Newton Moreira Mera',
    position: 'Propietario',
    org: 'Billar Club El Perro Viejo',
    built: 'Sistema de gestión: alquiler de mesas, consumos, inventario y ventas.',
    date: 'Julio 2026',
    featured: true,
  },
  {
    id: 'hpvcb',
    quote:
      'Cumplió con las actividades encomendadas de manera responsable y demostrando competencias técnicas acordes a los requerimientos del proyecto.',
    author: 'Ing. Luis Carlos Vergara Mendoza',
    position: 'Coordinador de Gestión de TICs',
    org: 'Hospital General Dr. Verdi Cevallos Balda',
    built: 'Sistema web de acciones de personal, permisos por horas y vacaciones, desplegado en la intranet.',
    date: 'Abril 2026',
  },
  {
    id: 'iess',
    quote:
      'Desarrollo de módulo web para el área de Derivaciones, optimizando y agilizando procesos previamente manuales.',
    extra: 'Cumplió con las actividades encomendadas con responsabilidad, demostrando competencias técnicas acordes a los requerimientos institucionales.',
    author: 'Ing. Marcos Antonio Menéndez Zambrano',
    position: 'Jefe del Departamento de TICs',
    org: 'Hospital General Manta — IESS',
    built: 'Módulos web de estadística de Emergencia y de Derivaciones.',
    date: '2025',
  },
]
