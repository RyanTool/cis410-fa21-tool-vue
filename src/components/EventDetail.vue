<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ event.Title }}</h2>
        <br />
        <p>
          Length: <br /><strong>{{ event.Length }} hrs</strong>
        </p>
        <p>
          Type Key: <br /><strong>{{ event.TypeFK }}</strong>
        </p>
      </div>
    </div>

    <br />

    <router-link v-if="auth" :to="`/events/${this.$route.params.pk}/entry`"
      ><button class="btn btn-success">Add entry to event</button></router-link
    >
    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign in to add entry
      </button></router-link
    >
    <br /><br />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    event() {
      let allEvents = this.$store.state.events;

      let thisEvent = allEvents.find((anEvent) => {
        return anEvent.EventPK == this.$route.params.pk;
      });

      return thisEvent;
    },
    auth() {
      return this.$store.state.Token;
    },
  },
};
</script>

<style></style>
