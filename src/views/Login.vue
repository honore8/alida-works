<template>
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-md-7">
          <div class="auth-wrapper auth-v1">
            <div class="auth-inner">
              <v-card class="auth-card">
                <img src="@/assets/images/pages/undraw_secure_login_pdn4.svg" alt srcset />
              </v-card>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="auth-wrapper auth-v1">
            <div class="auth-inner">
              <v-card class="auth-card">
                <!-- logo -->
                <v-card-title class="d-flex align-center justify-center py-7">
                  <div class="d-flex align-center">
                    <h1 class="font-weight-semibold">Login</h1>
                  </div>
                </v-card-title>
                  <div class=" align-center">
                  <div v-if="errors.length > 0">
                    <h6>Please correct the following error(s):</h6>
                    <ul>
                      <li v-for="error in errors" class="text-danger">{{ error }}</li>
                    </ul>
                  </div>
                  </div>
                <!-- login form -->
                <v-card-text>
                  <v-form @submit="checkForm">
                    <v-text-field
                      v-model="email"
                      outlined
                      label="Email"
                      placeholder="john@example.com"
                      hide-details
                      class="mb-3"
                      type="email"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      outlined
                      :type="isPasswordVisible ? 'text' : 'password'"
                      label="Password"
                      placeholder="············"
                      :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                      hide-details
                      @click:append="isPasswordVisible = !isPasswordVisible"
                    ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
                label="Remember me"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>
            </div>
                    <v-btn type="submit" block color="primary" class="mt-6">Login</v-btn>
                    <div class="mt-3 text-center"> <a href="javascript:void(0)" class="mt-1"><u>FORGOT PASSWORD ?</u></a></div>
                  </v-form>
                </v-card-text>
                <div style="margin-top: 5rem; text-align: center"><small>&copy; Copyright Honore 2022</small></div>
              </v-card>
            </div>

            <!-- tree -->
            <v-img class="auth-tree" width="247" height="185" src="@/assets/images/misc/tree.png"></v-img>

            <!-- tree  -->
            <v-img
              class="auth-tree-3"
              width="377"
              height="289"
              src="@/assets/images/misc/tree-3.png"
            ></v-img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  data() {
    return {
    errors: [],
    password: null,
    email: null,
    }
  },
  methods: {
    checkForm(e){
    e.preventDefault()
      if (this.password && this.email) {
       window.location.href = "/dashboard";

      }

      this.errors = [];

      if (!this.password) {
        this.errors.push('Password required.');
      }
      if (!this.email) {
        this.errors.push('Email required.');
      }
      
    }
  },
  setup() {
    const isPasswordVisible = ref(false)
    const email = ref('')
    const password = ref('')

    return {
      isPasswordVisible,
      email,
      password,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>

<style lang="scss">

.auth-wrapper {
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  flex-basis: 100%;
  align-items: center;

  // common style for both v1 and v2
  a {
    text-decoration: unset;
  }

  // auth v1
  &.auth-v1 {
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1.5rem;

    .auth-mask-bg {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .auth-tree,
    .auth-tree-3 {
      position: absolute;
    }
    .auth-tree {
      bottom: 0;
      left: 0;
    }
    .auth-tree-3 {
      bottom: 0;
      right: 0;
    }

    // auth card
    .auth-inner {
      width: 28rem;
      z-index: 1;
      .auth-card {
        padding: 0.9375rem 0.875rem;
      }
    }
  }
}

@media (max-width: 600px) {
  // auth bg and tree hide in sm screen
  .auth-v1 {
    .auth-tree,
    .auth-tree-3,
    .auth-mask-bg {
      display: none;
    }
  }
}

</style>
