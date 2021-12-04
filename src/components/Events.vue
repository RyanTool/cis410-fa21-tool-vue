<template>
  <div>
    <h1>Events</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Length (hrs)</th>
          <th>Type Key</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="anEvent in theEvents" :key="anEvent.EventPK">
          <th>{{ anEvent.Title }}</th>
          <th>{{ anEvent.Length }}</th>
          <th>{{ anEvent.TypeFK }}</th>
          <th>
            <router-link :to="`/events/${anEvent.EventPK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theEvents() {
      return this.$store.state.events;
    },
  },
};
</script>

<style></style>
