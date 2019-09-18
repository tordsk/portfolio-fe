<template>
  <section class="hero is-info is-small">
    <div class="hero-body">
      <div class="container">
        <div class="info">
          <h1 class="title is-1">Portfolio</h1>
          <p v-if="info.short">{{ info.short[lang] }}</p>
        </div>
        <div class="image-container">
        <figure class="image profile">
          <img class="is-rounded" src="../static/profilePicture.jpg" />
        </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Helloman",
  props: {
    info: Object,
    lang: String
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.hero.is-info {
  background-color: #274690;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 50%));

}
.image {
  img {
    max-width: 70%;
    width: auto;
    margin: auto;
  }
}

.info {
  display: grid;
  grid-template-rows: auto auto auto;
}

</style>
