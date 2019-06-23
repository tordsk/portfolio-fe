<template>
  <div class="Projects">
    <div class="timeline columns is-vcentered is-centered">
      <header class="timeline-header">
        <span class="tag is-large is-primary">{{
          lang === "no" ? "Prosjekter" : "Projects"
        }}</span>
      </header>
      <div v-for="proj in projects" class="timeline-item">
        <div class="timeline-marker"></div>
        <Project :project="proj" :lang="lang"></Project>
      </div>
      <div class="timeline-header">
        <span class="tag is-medium is-primary">{{
          lang === "no" ? "Nå" : "Now"
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProjectCard from "./Project";

export default {
  name: "Projects",
  components: { ProjectCard },
  props: {
    projects: Array,
    lang: String
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.Projects {
  margin: 0 2em 0 2em;
}
</style>
