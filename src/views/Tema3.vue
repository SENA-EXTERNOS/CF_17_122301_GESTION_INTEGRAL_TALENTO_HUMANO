<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bf-t3

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión y estrategias pedagógicas

    .row.justify-content-around.align-items-center.bkg-t3
      .row.justify-content-center
        .col-lg-2(data-aos="flip-left").mb-5
          img(src='@/assets/curso/temas/tema3/t3-1.svg', alt='Texto que describa la imagen').animacion-flotante
        .col-lg-10
          p Por otra parte, los indicadores de gestión, permiten medir la eficacia y avances de los programas o procesos implementados, los cuales pueden aplicarse en diferentes momentos de su desarrollo; por este motivo deben ser medibles o cuantificables.
          p Al momento de concluir una tarea, se verifica su efectividad, donde se evidencian las posibles consecuencias que se puedan generar.

      .row.justify-content-center.mt-3
        p Los indicadores pueden agruparse, de acuerdo con sus características en:
        .col-lg-10.mt-5
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(data-aos="flip-left" src='@/assets/curso/temas/tema3/t3-2.svg', alt='')

            .tarjeta.estilo-cajon.p-3(x="2.7%" y="86%" numero="+")
              h3 Indicador de evaluación
              p Se realiza para valorar el rendimiento y eficacia de un programa o actividad, con la finalidad de analizar los beneficios existentes o posibles acciones de mejora por implementar. Se debe especificar cada uno de los ítems que puede evaluar a todos los pasos que se desarrollaron hasta el final de la acción, para así tener claridad sobre dónde se debe actuar y llevar a cabo las correcciones pertinentes, para próximas evaluaciones.
            
            .tarjeta.estilo-cajon.p-3(x="23%" y="16%" numero="+")
              h3 Indicador de eficacia
              p Mide las capacidades de realización de tareas y verifica qué tan efectivo es el propósito que se plantea. Este indicador puede evaluar el desempeño de las personas que se ven involucradas en la realización del proceso o tarea.

            .tarjeta.estilo-cajon.p-3(x="43.5%" y="86.5%" numero="+")
              h3 Indicador de eficiencia
              p Este indicador busca medir el nivel de realización del proceso, analizando el cómo se desarrollaron las cosas y el nivel de uso de recursos dentro de la tarea. Al igual que el indicador anterior, puede evaluar el desempeño de los colaboradores, su organización y uso de los recursos.

            .tarjeta.estilo-cajon.p-3(x="64%" y="16%" numero="+")
              h3 Indicador de gestión
              p El indicador de gestión permite manejar o administrar los procesos y las acciones realizadas para el desarrollo de actividades programadas. Este indicador evalúa todas las etapas por las que pasa el proceso.

            .tarjeta.estilo-cajon.p-3(x="84.5%" y="87%" numero="+")
              h3 Indicador de cumplimiento
              p Este indicador mide el grado en el que una tarea cumple con los resultados propuestos. Verifica el grado en el que se entrega o finaliza la labor.            

      .row.justify-content-center.mt-5
        .col-lg-10.col-xs-6
          .cajon.color-1.p-4
            p Tenga en cuenta que los indicadores, de acuerdo con lo que esperan medir, deben cumplir con varias etapas, desde el momento en el que son planeados hasta las acciones de mejora propuestas al final, y deben ser aprobados por cada una de las áreas o departamentos de donde sean requeridos.

      .row.justify-content-center.mt-3
        p La siguiente figura, presenta las etapas de los indicadores empresariales; analice el esquema con suma atención:
        .col-lg-10     
          .titulo-sexto.color-acento-contenido
            h5 Figura 1
            br
            span.fst-italic Etapas de los indicadores empresariales
          figure
            img(data-aos="flip-left" src='@/assets/curso/temas/tema3/1.svg', alt='').mt-5

    .row.justify-content-start.align-items-center.mb-5.mt-5        
      .col-lg-4
        .color-degrade.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Estrategias pedagógicas

      .row.justify-content-center.mt-5
        .col-lg-4.justify-content-center(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema3/t3-4.svg', alt='Texto que describa la imagen').mb-3    
        .col-lg-8.col-xs-6
          p Las estrategias pedagógicas, corresponden a las actividades que utiliza el docente para enseñar al aprendiz conocimientos y que él los apropie de una forma que puedan ser aplicados en su vida laboral.
          .cajon.color-1.p-4
            p Específicamente, en el ambiente organizacional, se define la estrategia pedagógica como acciones organizadas e intencionadas, dirigidas a las transformaciones en el comportamiento profesional y humano de los actores de una organización, que propician el desarrollo de la cultura organizacional. Es importante que las acciones generen un desarrollo organizacional, pero no solo a nivel profesional, puesto que cada empresa debe saber que su capital humano cuenta con cualidades personales, que también son importantes dentro de su desempeño laboral.     
          p.mt-3 Por este motivo, se puede decir que el programa de inducción es una presentación actualizada de los componentes misionales de la organización, a sus nuevos empleados. Este programa de inducción resalta la importancia de su labor, sin dejar de lado, aspectos integrales del ser humano.
    p.mb-5 Algunas estrategias pedagógicas favorables para el desarrollo empresarial, son:
    .row.justify-content-center.mt-2
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="El aprendizaje por proyectos")
            .col-12.ps-5
              p.mb-0 Aprendizaje que se desarrolla por medio de la realización de actividades de manera organizada sobre un objetivo específico, donde cada uno de los integrantes tiene un papel activo, puesto que construye sus conocimientos partiendo de su experiencia y del intercambio de información con sus otros compañeros. Desarrollan habilidades investigativas, conocimiento de cada herramienta o elemento que sea requerido y habilidades de trabajo en equipo como la comunicación y la solución de problemas.
          .row(titulo="El aprendizaje colaborativo")
            .col-12.ps-5
              p.mb-0 En esta técnica, las personas aprenden por medio del intercambio de ideas, pensamientos y conocimientos con otros, en donde se benefician todos los integrantes al alcanzar los objetivos de manera conjunta. Al igual que el aprendizaje anterior, cada uno de los integrantes desarrolla habilidades comunicativas, de resolución de problemas y de tolerancia.
      .col-lg-4
          img(src='@/assets/curso/temas/tema3/t3-5.svg', alt='' data-aos="flip-left")               

    .row.justify-content-center.mt-3
      .col-lg-2(data-aos="flip-left").mb-5
        img(src='@/assets/curso/temas/tema3/t3-6.svg', alt='Texto que describa la imagen').animacion-flotante
      .col-lg-10
        p Los programas de inducción dependen de las características de las personas que ingresan, si cuentan con experiencia, algo de experiencia o sin experiencia; por tal motivo, el programa debe ser flexible, para poderse adaptar a las necesidades de la audiencia y a sus puestos de trabajo, los cuales permiten la adaptación e integración del nuevo personal a los lineamientos, principios y cultura organizacional.

    .row.justify-content-center.mt-3
      p La figura que se muestra enseguida, presenta las clases de estrategias pedagógicas y sus implicaciones:
      .col-lg-10     
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          br
          span.fst-italic Clases de estrategias pedagógicas
        figure
          img(data-aos="flip-left" src='@/assets/curso/temas/tema3/2.svg', alt='').mt-5

    .row.justify-content-center.mt-5
      .col-lg-10.col-xs-6
        .cajon.color-1.p-4
          p Para alcanzar los objetivos de la inducción, se estructuran unas técnicas que favorezcan el proceso de aprendizaje y desarrollo de las habilidades para el desenvolvimiento de su trabajo.

    .row.justify-content-center.mt-3(data-aos="zoom-in")
      p Estas técnicas son:
      TabsC.color-acento-contenido
        .py-4.py-md-4(titulo="El entrenamiento inicial")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p Esta técnica busca que el nuevo empleado aprenda competencias, habilidades y destrezas específicas del cargo a desempeñar. Para la estructuración de esta técnica se requiere tener claras las funciones y responsabilidades que asumirá el colaborador, en donde la empresa expone, de manera clara, las metas por alcanzar, transmitidas por un empleado directo de la entidad, con la responsabilidad de realizar un acompañamiento permanente, brindando los parámetros, procedimientos y lineamientos durante el desarrollo de sus actividades.
              p El objetivo del entrenamiento es integrar y adaptar al nuevo colaborador, tanto a la empresa como a su cargo específico, por medio de la adquisición de competencias, conocer las características de su cargo y poder desarrollar las habilidades que le faciliten la ejecución de su labor.
              p Otro aspecto a tener en cuenta es el de potenciar actitudes positivas, donde se busca generar actitudes motivadoras, que promuevan el interés y desarrollar un sentido de pertenencia en el colaborador, porque en la medida en el que él se sienta más motivado y a gusto con su cargo, mejores resultados obtendrán en el logro de los resultados estipulados del área o departamento para el que trabaja y, así mismo, la empresa se verá beneficiada.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-8.svg', alt='Texto que describa la imagen')

        .py-3.py-md-4(titulo="Procedimiento técnico artesanal")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p La formación es una técnica que busca brindar conocimientos teórico prácticos nuevos, de acuerdo con las necesidades de la empresa; por este motivo se puede presentar de manera general, en donde se busca impactar a todos los empleados, con información sobre el manejo general de la organización o puede ser de manera específica, donde se busca brindar de manera individual, al empleado en el puesto de trabajo, tareas, acciones o procesos por desarrollar.
              p La formación también busca potenciar las competencias de los empleados en pro de los objetivos de la empresa, desarrollando el saber, el ser y el saber hacer.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-9.svg', alt='Texto que describa la imagen')     

        .py-3.py-md-4(titulo="Procedimiento técnico administrativo")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p Corresponde al proceso cognitivo inherente al ser humano, en donde se busca adquirir o fortalecer conceptos, habilidades y experiencias por medio de la enseñanza.
              p Para este aspecto, el instructor o encargado indaga sobre el estilo de aprendizaje; este corresponde a la forma como el individuo aprende, sus estrategias, ritmo, ambiente y tiempo en que lo realiza. Al contar con esta información, el capacitador tendrá la oportunidad de enfocar el contenido de una manera más llamativa para el aprendiz.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-10.svg', alt='Texto que describa la imagen') 

    .row.justify-content-start.align-items-center.mb-5.mt-5        
      .col-lg-4
        .color-degrade.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Metodología del docente

    .row.justify-content-center
      .col-lg-2(data-aos="flip-left").mb-5
        img(src='@/assets/curso/temas/tema3/t3-11.svg', alt='Texto que describa la imagen').animacion-flotante
      .col-lg-10
        p La persona encargada debe brindar el proceso de aprendizaje de manera dinámica, donde la pedagogía utilizada responda a las necesidades de la población, para que las estrategias didácticas correspondan con la resolución de problemas, análisis de casos y prácticas, entre otros.

    .row.mt-3
      p.mb-4 Existen varias técnicas didácticas útiles para el proceso de enseñanza, a continuación, se nombran algunas:
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.carrusel.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema3/t3-12.svg' alt='AvatarTop')
          h5.text-center Técnicas de manera gráfica
          ul.lista-ul.mt-3
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Mentefacto
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Mapas mentales
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Mapas conceptuales   

        .tarjeta.carrusel.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema3/t3-13.svg' alt='AvatarTop')
          h5.text-center Técnicas de expresión oral
          ul.lista-ul.mt-3
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Exposición
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Lluvias de ideas
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Entrevistas 
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Foro 
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Debates                             

        .tarjeta.carrusel.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema3/t3-14.svg' alt='AvatarTop')
          h5.text-center Técnicas grupales
          ul.lista-ul.mt-3
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Talleres
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Mesa redonda
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Panel de discusión 

        .tarjeta.carrusel.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema3/t3-15.svg' alt='AvatarTop')
          h5.text-center Técnicas escritas
          ul.lista-ul.mt-3
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Comentario
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Ensayos
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Investigación
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Ponencias            


        .tarjeta.carrusel.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema3/t3-16.svg' alt='AvatarTop')
          h5.text-center Técnicas de simulación
          ul.lista-ul.mt-3
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Simulación
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Juego de rol
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Presentaciones

        .tarjeta.carrusel.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema3/t3-17.svg' alt='AvatarTop')
          h5.text-center Técnicas de demostración
          ul.lista-ul.mt-3
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Prácticas guiadas
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Estudio de casos
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Talleres reflexivos              

        
    .row.justify-content-center
      .col-lg-11.mb-5.mb-lg-0
        .bloque-texto-b.p-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Son entendidas como herramientas usadas por los profesores, que les ayuda en la planeación del proceso de enseñanza-aprendizaje, diseñadas como actividades y estrategias que les faciliten transmitir la información, conocimientos y experiencias, de una manera clara y sencilla para la construcción de conocimiento por medio de la interacción con sus aprendices, las cuales pueden actualizarse de acuerdo con los avances encontrados.
            br
            br
            p.alineacion.text-bold Educalink, 2021
            i.fas.fa-quote-right


    .row.justify-content-center
      .col-lg-2(data-aos="flip-left").mb-5
        img(src='@/assets/curso/temas/tema3/t3-18.svg', alt='').animacion-flotante
      .col-lg-10
        p Estas estrategias didácticas tienen en cuenta el contexto para su implementación a través de procedimientos o serie de pasos definidos con anticipación, que establecen pautas y se emplean para alcanzar un propósito educativo, adaptado a situaciones en las que se aplica la estrategia.
      
      p.mt-2 A continuación, se presenta la metodología para la aplicación de las estrategias didácticas:
      figure
        img(data-aos="flip-left" src='@/assets/curso/temas/tema3/3.svg', alt='').mt-5

    .row.justify-content-center.mt-5
      .col-lg-4.justify-content-center(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/t3-20.svg', alt='').mb-3    
      .col-lg-8.col-xs-6
        p Las herramientas y las clases de herramientas pedagógicas, corresponden a medios, elementos, o aspectos, que facilitan la optimización del proceso de enseñanza–aprendizaje. El capacitador, de acuerdo con su pedagogía y estrategia didáctica, selecciona las herramientas que pueden beneficiarlo en el proceso de enseñanza–aprendizaje. En la actualidad, han tomado mucha importancia las <b>herramientas tecnológicas</b>, entre las que se encuentra el Internet, que brinda la posibilidad de cuestionarios, actividades, presentaciones interactivas, ayudas audio-visuales, entre otras. 
        .cajon.color-1.p-4
          p También se cuenta con herramientas que pueden ser utilizadas de manera presencial, pruebas escritas, cuestionarios y actividades, audiovisual, películas, videos, documentales, etc.

    .row.justify-content-center.mt-3
      p.mb-4 Como parte de las clases de herramientas pedagógicas, se pueden mencionar algunos métodos:
      .col-lg-8
        TabsA.color-acento-contenido
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Método estudio de casos")
            .row.p-4
              .col-auto
                p Se basa en una situación específica que le permite al estudiante enfrentarse a problemas que se puedan aplicar dentro del ambiente laboral, los conocimientos adquiridos, mediante un análisis crítico que le permita tomar decisiones, acciones, estructurar alternativas de solución y dar respuesta a la necesidad planteada.

          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Método basado en proyectos")
            .row.p-4
              .col-auto
                p Este método se centra en el estudiante, donde se busca desarrollar conocimientos, habilidades y capacidades para estructurar y diseñar un tema de su interés, busca promover a los aprendices en emprendimiento y puedan aprovechar esas ideas en el sector productivo.

          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Método basado en problemas")
            .row.p-4
              .col-auto
                p Este método busca la autonomía, que le permita al estudiante la construcción de su conocimiento, desarrollando estrategias creativas que le permitan planear su acción para dar solución a la problemática planteada.

          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Método juego de roles")
            .row.p-4
              .col-auto
                p Este método desarrolla la empatía en los estudiantes, por medio de representaciones dramáticas de casos o situaciones donde deben desarrollar estrategias para resolver la situación por medio de los conocimientos, aplicación del aprendizaje y el desarrollo de aptitudes y actitudes.            

      .col-lg-4
        img(src='@/assets/curso/temas/tema3/t3-21.svg', alt='Texto que describa la imagen' data-aos="flip-up")

      
    .row.justify-content-center
      .col-lg-10
        .cajon.color-2.p-4.mt-5
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
