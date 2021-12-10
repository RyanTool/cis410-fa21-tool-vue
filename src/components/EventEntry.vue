<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Log Your Entrance to Event</h4>
            <form id="entry-form" @submit.prevent="submitEntry">
              <div class="mb-3">
                <label for="date-input" class="form-label">Entry Time </label>
                <input
                  type="date"
                  class="form-control"
                  id="time-input"
                  required=""
                  v-model="time"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit Entry
              </button>
              <button
                v-on:click="cancelReview"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>
              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      time: null,
      errorMessage: null,
    };
  },
  methods: {
    submitEntry() {
      let myEntry = {
        EntryTime: this.time,
        EventFK: this.$route.params.pk,
      };

      axios
        .post("/entry", myEntry, {
          headers: { Authorization: `Bearer ${this.$store.state.Token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.errorMessage = "Unable to log entry. Please try again later";
        });
    },
    cancelReview() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
