<template>
  <div>
    <navbar :lang="language" @lang="language=$event"/>
    <helloman :info="info" :lang="language"></helloman>
    <projects :projects="projects" :lang="language"></projects>
    <section class="section"/>
    <work-experience :workplaces="work" :lang="language"/>
    <education :educations="education" :lang="language"/>
  </div>
</template>
<script>
import Education from "./Education";
const axios = require("axios");
export default {
  name: "Portfolio",
  components: {Education},
  data() {
    return {
      language: "no",
      info: {},
      projects: [],
      technologies: [],
      work: [],
      education: [],
    };
  },
  beforeCreate() {
    axios
      .get("https://homepage-api.tordklos.now.sh/")
      .then(response => {
          this.$data.info = response.data.info
          this.$data.projects = response.data.projects
          this.$data.technologies = response.data.technologies
          this.$data.work = response.data.work
          this.$data.education = response.data.education
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="sass" scoped>
@import "../sass/styles.scss"
</style>
