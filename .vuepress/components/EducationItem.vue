<template>
  <div class="EducationWorkItem columns is-vcentered">
    <div class="column is-four-fifths">
      <div class="tile notification">
        {{ major[lang] }} : {{ place[lang] }}
      </div>
    </div>
    <div class="column is-narrow is-vcentered">
      <div class="tile notification"> {{ experience.start }} - {{ experience.end }}</div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProjectCard from "./Project";

export default {
  props: {
    experience: Object,
    major: Object,
    place: Object,
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
