<template>
  <div class="Education columns is-vcentered">
    <div class="column level">
      <div v-for="education in educations" >
        <education-item :experience="education.experience" :place="education.place" :major="education.major" :lang="lang" />
      </div>
    </div>
    <div class="column level-right">
      <div class="title is-parent level-item">
        <div class="is-child" v-if="lang === 'no'">Utdanning</div>
        <div class="is-child" v-else-if="lang === 'en'">Education</div>
      </div>
      <div class="tile is-parent level-item">
          {{description[lang]}}
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProjectCard from "./Project";
import Work from "./Work";
import EducationItem from "./EducationItem";

export default {
  components: {EducationItem, Work},
  props: {
    educations: Array,
    lang: String
  },
  data(){
    return {
      description: {
        no: "Utdanning og grader.",
        en: "Education and degrees"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.Education {
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
