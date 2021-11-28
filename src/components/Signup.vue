<template>
  <div>
    <h1>Sign Up</h1>
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-7">
        <div>
          <h1>Sign Up</h1>
          <br />
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="fname-input" class="form-label">First name</label
              ><input
                type="text"
                class="form-control"
                id="fname-input"
                required=""
                placeholder="First name"
                v-model="FirstName"
              />
            </div>
            <div class="mb-3">
              <label for="lname-input" class="form-label">Last name</label
              ><input
                type="text"
                class="form-control"
                id="lname-input"
                required=""
                placeholder="Last name"
                v-model="LastName"
              />
            </div>
            <div class="mb-3">
              <label for="email-input" class="form-label">Email</label
              ><input
                type="email"
                class="form-control"
                id="email-input"
                required=""
                placeholder="Enter email"
                v-model="Email"
              /><!---->
              <small v-if="dupEmail" class="text-danger"
                >Please choose a different email</small
              >
            </div>
            <div class="mb-3">
              <label for="password-input" class="form-label">Password</label
              ><input
                type="password"
                class="form-control"
                id="password-input"
                placeholder="Password"
                required=""
                v-model="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <p id="error-signup" class="text-danger">{{ errorMessage }}</p>
          </form>
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
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      errorMessage: "",
      dupEmail: false,
    };
  },
  methods: {
    onSubmit() {
      // console.log("form submitted");
      const myFormData = {
        FirstName: this.FirstName,
        LastName: this.LastName,
        Email: this.Email,
        Password: this.Password,
      };
      // console.log(myFormData);
      axios
        .post("/attendees", myFormData)
        .then((myResponse) => {
          console.log("the response", myResponse);
          this.$router.replace("/login?signupsuccess=true");
        })
        .catch((myError) => {
          if (myError.response.status === 409) {
            this.dupEmail = true;
          } else {
            this.errorMessage = "Cannot sign you up, please try again later";
          }
        });
    },
  },
};
</script>

<style></style>
