<template>
  <v-card flat class="mt-5">
    <v-form>
      <div class="px-3">
        <v-card-text class="pt-5">
          <v-row>
        <h3 class="mb-5 fw-bold">My profile</h3>
            <v-col cols="12" sm="8" md="6">
              <!-- current password -->
              <v-text-field
                v-model="currentPassword"
                :type="'text'"
                label="Name"
                outlined
                dense
                @click:append="isCurrentPasswordVisible = !isCurrentPasswordVisible"
              ></v-text-field>

              <!-- new password -->
              <v-text-field
                v-model="newPassword"
                :type="'text'"
                label="Email"
                outlined
                dense
                persistent-hint
                @click:append="isNewPasswordVisible = !isNewPasswordVisible"
              ></v-text-field>

              <!-- confirm password -->
              <v-text-field
                v-model="cPassword"
                :type="isCPasswordVisible ? 'text' : 'password'"
                :append-icon="isCPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                label="Password"
                outlined
                dense
                class="mt-3"
                @click:append="isCPasswordVisible = !isCPasswordVisible"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="4"
              md="6"
              class="d-none d-sm-flex justify-center position-relative"
            >
              <v-img
                contain
                max-width="250"
                src="@/assets/images/pages/undraw_healthy_lifestyle_re_ifwg.svg"
                class="security-character"
              ></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="8" md="6">
              <v-btn type="submit" color="primary" class="mt-6">Update Profile</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </div>

      <!-- divider -->
      <v-divider></v-divider>
    </v-form>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiKeyOutline, mdiLockOpenOutline, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isCurrentPasswordVisible = ref(false)
    const isNewPasswordVisible = ref(false)
    const isCPasswordVisible = ref(false)
    const currentPassword = ref('12345678')
    const newPassword = ref('87654321')
    const cPassword = ref('87654321')

    return {
      isCurrentPasswordVisible,
      isNewPasswordVisible,
      currentPassword,
      isCPasswordVisible,
      newPassword,
      cPassword,
      icons: {
        mdiKeyOutline,
        mdiLockOpenOutline,
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.two-factor-auth {
  max-width: 25rem;
}
.security-character {
  position: absolute;
  bottom: -0.5rem;
}
</style>
