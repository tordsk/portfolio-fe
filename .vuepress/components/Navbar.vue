<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand tabs">
      <a class="navbar-item" href="/">
        <v-icon name="sync" />
      </a>
        <li>
          <a class="navbar-item" :class="{ 'selected': lang==='no'}" v-on:click="$emit('lang', 'no')">Norsk</a>
        </li>
        <li>
          <a class="navbar-item" :class="{ 'selected': lang==='en'}" v-on:click="$emit('lang', 'en')">English</a>
        </li>
    </div>
  </nav>
</template>

<script>
    import 'vue-awesome/icons/sync'
    import Icon from "vue-awesome/components/Icon";
export default {
  name: "Navbar",
  components: {
    "v-icon": Icon
  },
  props: {
    title: String,
    lang: String
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

  .selected  {
  border-bottom-color: black !important;
  }
</style>
