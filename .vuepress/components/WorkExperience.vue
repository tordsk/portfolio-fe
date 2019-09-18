<template>
  <div class="WorkExperience columns is-vcentered">
    <div class="column">
      <div class="title is-parent">
        <div class="is-child" v-if="lang === 'no'"   >Arbeidserfaring</div>
        <div class="is-child" v-else-if="lang === 'en'">Work Experience</div>
      </div>
      <div class="tile is-parent">
      <article class="tile is-child">
          {{description[lang]}}
      </article>
      </div>
    </div>
    <div class="column">

      <div v-for="work in workplaces" >
        <work :experience="work.experience" :company="work.company" :lang="lang" :position="work.position"/>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProjectCard from "./Project";
import Work from "./Work";

export default {
  components: {Work},
  props: {
    workplaces: Array,
    lang: String
  },
  data(){
    return {
      description: {
        no: "Diverse arbeidserfaring inkuldert mindre relevante arbied.",
        en: "Different work experience including lesser relevant work."
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.WorkExperience {
  max-width: 80%;
  margin: 0 auto;
}

.timeline-header .tag {
  color: white;
  background-color: #576CA8;
}
.Projects {
  margin: 0 2em 0 2em;
}
</style>
