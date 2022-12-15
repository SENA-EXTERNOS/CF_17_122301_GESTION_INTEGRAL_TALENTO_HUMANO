<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bf-t2
    .row.justify-content-around.align-items-center.bkg-t2 
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Evaluación

      .row.justify-content-center
        .col-lg-4.justify-content-center(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema2/t2-1.svg', alt='Texto que describa la imagen').mb-3    
        .col-lg-8.col-xs-6
          p Continuemos con la evaluación, tarea fundamental en todas las áreas de la organización, debido a que permite identificar si se están realizando las funciones de manera efectiva, si los resultados que se presentan son los esperados y cómo poder implementar acciones de mejora, de acuerdo con los resultados que se presentan. Es el estado previo indispensable, para poder mediar en empresas y organizaciones y, en general, en cualquier institución, con el fin de alcanzar la eficacia. Una correcta valoración de la gestión empresarial, propone un análisis global de los resultados en variados aspectos: económico, financiero, patrimonial y productivo; implementar la evaluación aporta aceptar ubicar información que permite mejorar los procesos de gestión.
          .cajon.color-1.p-4
            p La evaluación permite, al área encargada, identificar la pertinencia y eficacia del programa de inducción, manejo del contenido, acepta identificar si el contenido brindado cumple con las exigencias del cargo, si la información es pertinente para las necesidades y si son de fácil comprensión; en cuanto a las actividades, evaluar si las actividades son entendidas por el nuevo colaborador, si abarca todo el contenido para el que fue diseñado y si cumple con los objetivos de enseñanza por el que fue realizada, y evaluar las competencias adquiridas por los nuevos empleados, en donde se verifica y mide si el conocimiento fue adquirido o modificado, si la información brindada fue comprendida.     

      .row.justify-content-center.mt-5
        .col-lg-2(data-aos="flip-left").mb-5
          img(src='@/assets/curso/temas/tema2/t2-2.svg', alt='Texto que describa la imagen').animacion-flotante
        .col-lg-10
          p Posterior a esta evaluación, el área de Recursos humanos puede identificar las falencias encontradas. Como la evaluación es diseñada para cada uno de los elementos que la componen, el análisis puede identificar los aspectos en los que se requiere realizar acciones como mejoras dentro del programa o actividades propuestas y, en el caso de encontrar falencias en los nuevos integrantes de la organización, replantear reinducciones o nuevas capacitaciones que permitan fortalecer los conocimientos o las habilidades que se requieran. 


    .row.justify-content-center.mt-3
      p Como la evaluación debe realizarse durante todas las etapas de un proceso, para obtener mayor información y que sea más específica, se plantean tres tipos de enfoques para tener en cuenta:
      .col-lg-8
        TabsA.color-acento-contenido
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="El enfoque de diagnóstico")
            .row.p-4
              .col-auto
                p Con el diagnóstico se identifican las habilidades y conocimientos previos, permitiendo diseñar el proceso de enseñanza, donde el responsable puede decidir si continúa con el proceso como se había estructurado o si se requieren cambios en el diseño.
                p Este enfoque permite comprender los conocimientos con los que cuenta el nuevo empleado para identificar si hay aspectos faltantes en los que trabajar o profundizar; además, si se requiere, el docente puede conocer los estilos de aprendizaje, para diseñar estrategias que les permitan aprender de manera más rápida y efectiva.
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="El enfoque formativo")
            .row.p-4
              .col-auto
                p Permite determinar el grado en el que se aprende la información suministrada y así poder reforzar los conocimientos en los que se presenta dificultad; es desarrollado durante el proceso de enseñanza.
                p Este enfoque permite evaluar si la persona aprende o no, con el proceso de enseñanza – aprendizaje; en caso que la persona cuente con un aprendizaje favorable, se continúa con el otro enfoque; en caso contrario, el docente rediseña las estrategias y presentación del contenido, para volver a evaluar su avance.
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="El enfoque final")
            .row.p-4
              .col-auto
                p Como su nombre lo indica, se realiza al momento de terminar el proceso; este espacio permite al evaluador, conocer si se cumplieron las competencias necesarias para la aprobación del proceso y retroalimentación de los aspectos en los que se requieran. 
                p El enfoque final, le brinda al docente información para evaluar su metodología y efectividad dentro del programa de inducción. Entre más personas aprueben sin inconvenientes, más efectiva es su metodología y sus estrategias didácticas. Si, por el contrario, hay muchas personas que presentan inconvenientes, es el momento de identificar qué falló y realizar las correcciones pertinentes para nuevas inducciones.
                p Este enfoque permite identificar los aspectos tanto positivos como negativos durante el proceso, permitiendo realizar e implementar mejoras o mantenimiento de su metodología.

      .col-lg-4
        img(src='@/assets/curso/temas/tema2/t2-3.svg', alt='Texto que describa la imagen' data-aos="flip-up")

      .row.justify-content-center.mt-5.mb-5
        .col-lg-10
          .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
            .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-4.svg')})`}")
            .bloque-texto-g__texto.p-4
              p Estas evaluaciones, son analizadas por parte del área encargada, los resultados son organizados, graficados e interpretados, los cuales requieren ser transmitidos, brindando la información necesaria sobre alcances, mejoras y propuestas de implementación, todo esto desarrollado por medio de los informes.

      .row.justify-content-center.mt-5
        .col-lg-4.justify-content-center(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema2/t2-5.svg', alt='Texto que describa la imagen').mb-3    
        .col-lg-8.col-xs-6
          p Estos informes son una descripción, oral o escrita, de las características y circunstancias de un proceso, actividad, decisiones o asuntos determinados.
          p Los informes pretenden informar sobre los resultados de evaluaciones que pueden ser realizadas hacia las acciones, cambios en la realización de un proceso, o propuestas de proyectos.
          .cajon.color-2.p-4
            p Como se ha mencionado con anterioridad, tanto en los roles o cargos, se deben presentar avances a situaciones y estos pueden ser solicitados de acuerdo con las características de la labor; para presentaciones anuales, semestrales, mensuales o diarias, las personas encargadas deben recolectar la información necesaria para poder presentar, de forma detallada, los datos solicitados por la gerencia o el área que los gestiona.

</template>

<script>
export default {
  name: 'Tema2',
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
