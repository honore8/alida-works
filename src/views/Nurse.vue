<template>
  <v-row>
    <!-- Dense -->
    <v-col cols="12">
      <v-card>
        <v-card-title>All Nurses</v-card-title>

        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center text-uppercase">Name</th>
                <th class="text-center text-uppercase">Gender</th>
                <th class="text-center text-uppercase">Phone</th>
                <th class="text-center text-uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in nurses" :key="item.nurses">
                <td class="text-center">{{ item.name }}</td>
                <td class="text-center">{{ item.gender }}</td>
                <td class="text-center">{{ item.phone }}</td>
                <td class="text-center">
                  <v-icon>{{ icons.mdiEye }}</v-icon>
                  <v-icon class="text-warning mx-3">{{ icons.mdiPencil }}</v-icon>
                  <v-icon class="text-danger">{{ icons.mdiDelete }}</v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import nurses from '../assets/datas/nurses'
import { mdiEye, mdiPencil, mdiDelete } from '@mdi/js'

export default {
  setup() {

    return {
      nurses,
      icons: {
        mdiEye,
        mdiPencil,
        mdiDelete
      },
    }
  },
}
</script>