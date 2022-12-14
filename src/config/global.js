export default {
  global: {
    componenteFormativo: 'Actividades de inducción y la pedagogía del docente',
    descripcionCurso:
      'La planeación del programa de inducción, requiere de una estrategia y pedagogía eficaz, que permita capacitar al nuevo personal sobre las temáticas estructuradas sobre la empresa, sus políticas y su cultura. En esta temática, toma gran importancia el instructor o encargado del proceso, quien por medio de estrategias y herramientas didácticas, busca desarrollar competencias, habilidades y conocimientos en los nuevos colaboradores',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/barra1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/barra2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/barra3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/barra4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/barra5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/barra6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Actividades de inducción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores de gestión y estrategias pedagógicas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Actividades de inducción',
      referencia:
        'Decreto 1567 de 1998. [Departamento Administrativo de la Función Pública]. Por el cual se crea el sistema nacional de capacitación y el sistema de estímulos para los empleados del Estado. Agosto 5 de 1998.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1246',
    },
    {
      tema: 'Actividades de inducción',
      referencia:
        'Decreto 1443 de 2014. [Ministerio de Trabajo]. Por el cual se dictan disposiciones para la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Julio 31 de 2014.',
      tipo: 'Decreto',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/36482/decreto_1443_sgsss.pdf/ac41ab70-e369-9990-c6f4-1774e8d9a5fa ',
    },
    {
      tema: 'Actividades de inducción',
      referencia:
        'Ana María Godínez La TV de RRHH BigRiverTV. (2015). <em>Recursos Humanos INDUCCIÓN LABORAL (Funciona)</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0Qma5_9jAnE',
    },
    {
      tema: 'Indicadores de gestión y estrategias pedagógicas',
      referencia:
        'Magisterio TV. (2021). <em>¿Cómo diferencian didáctica y estrategia pedagógica?</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EGLhlTY8FS4',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'proceso mediante el cual se modifican o adquieren habilidades, conocimientos, competencias, valores y /o costumbres sobre temas específicos.',
    },
    {
      termino: 'Aptitud',
      significado:
        'capacidades de una persona para realizar, de manera adecuada, una actividad, función o servicio.',
    },
    {
      termino: 'Competencias',
      significado:
        'son los conocimientos, destrezas, habilidades y aptitudes necesarios para tener un desempeño eficiente en un cargo.',
    },
    {
      termino: 'Conocimiento',
      significado:
        'capacidad del ser humano para comprender, utilizando la razón, la experiencia y las cualidades de las cosas.',
    },
    {
      termino: 'Destreza',
      significado:
        'habilidad y experiencia en la ejecución de una actividad determinada.',
    },
    {
      termino: 'Estrategia',
      significado:
        'serie de acciones meditadas, que son encaminadas hacia un fin determinado.',
    },
    {
      termino: 'Gestión empresarial',
      significado:
        'conjunto de actividades, acciones y estrategias que tienen como objetivo la adecuación de la empresa para que alcance los resultados esperados.',
    },
    {
      termino: 'Habilidades',
      significado:
        'capacidad que tiene el empleado para realizar las funciones para las cuales fue contratado.',
    },
    {
      termino: 'Mentefacto',
      significado:
        'diagrama jerárquico cognitivo, donde se organizan las ideas fundamentales.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'ciencia que estudia las estrategias, metodología y técnicas que aplica el docente para el proceso de enseñanza.',
    },
    {
      termino: 'Plan',
      significado: 'idea del modo de llevar a cabo una acción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Educalink. (2021). <em>Estrategia didáctica: definición, su función, tipos y más.</em>',
      link:
        'https://www.educalinkapp.com/blog/estrategia-didactica/#Que_es_una_estrategia_didactica',
    },
    {
      referencia:
        'Panesso, V. (2021). Estrategia pedagógica de mejoramiento profesional y humano para la transformación de la cultura. <em>Revista Boletín Redipe</em>, 10(11), p. 63-77.',
      link: 'https://revista.redipe.org/index.php/1/article/view/1518/1430 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
