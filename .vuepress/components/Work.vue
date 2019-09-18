<template>
  <div class="Work columns">
    <div class="column is-narrow">
      <div class="tile notification"> {{ experience.start }} - {{ experience.end ? experience.end : lang === "no" ? "Nå" : "Now" }}</div>
    </div>
    <div class="column is-four-fifths">
      <div class="tile notification">
        {{ position[lang] }} : {{ company }}
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProjectCard from "./Project";

export default {
  props: {
    experience: Object,
    company: String,
    position: Object,
    lang: String
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

  .tile {
    min-width: 100px;
  }
</style>
