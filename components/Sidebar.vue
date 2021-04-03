<template>
  <section class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__list-item" @click.prevent="getId" id="redirect">
        Redirect
      </li>
      <li class="sidebar__list-item" @click.prevent="getId" id="pronouncation">
        Pronouncation
      </li>
      <li class="sidebar__list-item" @click.prevent="getId" id="stop">
        Stop Looona
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    getId(event) {
      let pageId = event.target.id;
      this.$store.commit("docs_page/setPage", pageId);
    }
  }
};
</script>

<style scoped>
.sidebar {
  margin: 0 50px 0 0;
  height: 100%;
}
.sidebar__list-item {
  margin: 0 0 50px;
  padding: 5px;
  color: #f5f7fa;
  border-radius: 3px;
  transition-duration: 0.2s;
}
.sidebar__list-item:hover {
  background-color: #00c58e;
  cursor: pointer;
}
</style>
