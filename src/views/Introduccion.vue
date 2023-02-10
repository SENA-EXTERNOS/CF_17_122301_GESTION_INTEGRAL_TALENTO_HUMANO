<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-around.align-items-center.bkg-intro
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center
        .col-lg-2(data-aos="flip-left").mb-5
          img(src='@/assets/curso/temas/intro.svg', alt='Texto que describa la imagen').animacion-flotante
        .col-lg-10
          p Apreciado aprendiz, bienvenido a este componente formativo, donde podrá apropiarse de conocimientos, generales y claves, sobre la importancia de la persona responsable del proceso de inducción, sus habilidades pedagógicas, estrategias y herramientas didácticas a aplicar, las cuales le permitirán transmitir el conocimiento, por medio del proceso de enseñanza, al personal a entrenar.
        p.mt-3 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

        .row.mt-3
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
