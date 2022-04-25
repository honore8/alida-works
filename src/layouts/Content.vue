<template>
  <v-app>
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>

    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
      <div class="boxed-container w-full" style="border: solid #E2E8F0;">

        <div class="d-flex align-center mx-6">
        Dashboard

          <v-spacer></v-spacer>

          <!-- Right Content -->
         Hi, John Doe
          <v-btn
            icon
            small
            class="ms-3"
          >
          <a href="/">
            <v-icon>
              {{ icons.mdiLogout }}
            </v-icon>
          
          </a>
          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6" style="border-left: solid #E2E8F0;">
        <slot></slot>
      </div>
    </v-main>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height="56"
      class="px-0"
    >
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiLogout } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  components: {
    VerticalNavMenu,
    AppBarUserMenu,
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiLogout,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
