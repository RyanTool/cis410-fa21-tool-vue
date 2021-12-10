<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ FirstName }}'s Event Entries</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information. Please try again later
    </p>

    <table v-if="entriesByUser" class="table">
      <thead>
        <th>Event ID</th>
        <th>Entry Date</th>
      </thead>
      <tbody>
        <tr v-for="thisEntry in entriesByUser" :key="thisEntry.EntryPK">
          <th>
            <router-link :to="`/events/${thisEntry.EventFK}`">{{
              thisEntry.EventFK
            }}</router-link>
          </th>
          <th>{{ thisEntry.EntryTime }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      entriesByUser: null,
      accountError: false,
    };
  },
  computed: {
    FirstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.FirstName;
    },
  },
  created() {
    axios
      .get("/entry/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.Token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.entriesByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>
