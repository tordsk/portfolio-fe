<template>
  <div class="ProjectCard timeline-content">
    <p class="heading">{{ project.experience.start }}</p>
    <p class="subtitle is-4">{{ project.name }}</p>
    <p> {{ project.task[lang] }}</p>
    <div class="card" :class="{ 'is-hidden': hidden }">
      <div class="card-image">
        <figure class="image projectImage">
          <img
            :src="project.image"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p> {{ project.description[lang] }}</p>
          <br />
          <time :datetime="project.experience.start"> {{ project.experience.start }}</time> —
          <time :datetime="project.experience.end"> {{ project.experience.end ?  project.experience.end : "dd"}}</time>
        </div>
      </div>
    </div>
    <a class="button" @click="hidden = !hidden">{{ buttonText() }}</a>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object,
    lang: String
  },
  data() {
    return {
      hidden: true
    };
  },
  methods: {
    buttonText: function() {
      if (this.hidden) {
        switch (this.lang) {
          case "no":
            return "Om prosjektet";
          case "en":
            return "About the project";
        }
      } else {
        switch (this.lang) {
          case "no":
            return "Les mindre";
          case "en":
            return "Collapse";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../sass/styles.scss";

  .card {
    padding: .5em;
  }
</style>
