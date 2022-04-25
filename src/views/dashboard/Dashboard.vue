<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
      <dashboard-statistics-card></dashboard-statistics-card>
    </v-col>
    
    <v-col cols="12">
      <div class="mt-5 mb-2"><span class="h3"> Patients </span>   <router-link class="float-end" :to="{ name:'patient' }">View more</router-link></div>
    <div>
        <v-card>

      <div class="col-4">
      <input class="form-control" v-model="p.name.value" placeholder="Search..."/>
      </div>

      <v-table class="table mx-3" :data="patients" :filters="p" style="color: rgba(94, 86, 105, 0.87) !important; font-size: 0.75rem !important;">
        <thead slot="head" style="border-bottom: 2px solid rgba(221, 221, 221, 0)!important; background-color: #fafafa !important; padding: 22px; height: 3.375rem; padding-bottom: 55px; display: table-header-group; vertical-align: middle;">
        <th>Name</th>
        <th>Gender</th>
        <th>Phone</th>
        <th>Status</th>
        </thead>
        <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData.slice(0, 10)" :key="row.guid">
          <td>{{ row.name }}</td>
          <td>{{ row.gender }}</td>
          <td>{{ row.phone }}</td>
          <td>
                 
        <v-icon>{{icons.mdiEye}}</v-icon>
        <v-icon class="text-warning mx-3">{{icons.mdiPencil}}</v-icon>
        <v-icon class="text-danger">{{icons.mdiDelete}}</v-icon>
        
      
          </td>
        </tr>
        </tbody>
      </v-table>
   </v-card>
    </div>
    </v-col>
    
    <v-col cols="12">
      <div class="mt-5 mb-2"><span class="h3"> Nurses </span>   <router-link class="float-end" :to="{ name:'nurse' }">View more</router-link></div>
    <div>
        <v-card>

      <div class="col-4">
      <input class="form-control" v-model="n.name.value" placeholder="Search..."/>
      </div>

      <v-table class="table mx-3" :data="nurses" :filters="n" style="color: rgba(94, 86, 105, 0.87) !important; font-size: 0.75rem !important;">
        <thead slot="head" style="border-bottom: 2px solid rgba(221, 221, 221, 0)!important; background-color: #fafafa !important; padding: 22px; height: 3.375rem; padding-bottom: 55px; display: table-header-group; vertical-align: middle;">
        <th>Name</th>
        <th>Gender</th>
        <th>Phone</th>
        <th>Status</th>
        </thead>
        <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData.slice(0, 10)" :key="row.guid">
          <td>{{ row.name }}</td>
          <td>{{ row.gender }}</td>
          <td>{{ row.phone }}</td>
          <td>
                 
        <v-icon>{{icons.mdiEye}}</v-icon>
        <v-icon class="text-warning mx-3">{{icons.mdiPencil}}</v-icon>
        <v-icon class="text-danger">{{icons.mdiDelete}}</v-icon>
        
      
          </td>
        </tr>
        </tbody>
      </v-table>
   </v-card>
    </div>
    </v-col>
    
    
    <v-col cols="12">
      <div class="mt-5 mb-2"><span class="h3"> Doctors </span>   <router-link class="float-end" :to="{ name:'doctor' }">View more</router-link></div>
    <div>
        <v-card>
      <v-table class="table mx-3" :data="doctors" :filters="filters" style="color: rgba(94, 86, 105, 0.87) !important; font-size: 0.75rem !important;">
        <thead slot="head" style="border-bottom: 2px solid rgba(221, 221, 221, 0)!important; background-color: #fafafa !important; padding: 22px; height: 3.375rem; padding-bottom: 55px; display: table-header-group; vertical-align: middle;">
        <th>Name</th>
        <th>Gender</th>
        <th>Phone</th>
        <th>Status</th>
        </thead>
        <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData.slice(0, 10)" :key="row.guid">
          <td>{{ row.name }}</td>
          <td>{{ row.gender }}</td>
          <td>{{ row.phone }}</td>
          <td>
                 
        <v-icon>{{icons.mdiEye}}</v-icon>
        <v-icon class="text-warning mx-3">{{icons.mdiPencil}}</v-icon>
        <v-icon class="text-danger">{{icons.mdiDelete}}</v-icon>
        
      
          </td>
        </tr>
        </tbody>
      </v-table>
   </v-card>
    </div>
    </v-col>

  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiEye, mdiPencil, mdiDelete } from '@mdi/js'

// demos

import doctors from '../../assets/datas/doctors'
import nurses from '../../assets/datas/nurses'
import patients from '../../assets/datas/patients'


export default {

  name: 'BasicFiltering',
  data: () => ({
    doctors,
    nurses,
    patients,
      
    p: {
      name: { value: '', keys: ['name'] }
    },
    n: {
      name: { value: '', keys: ['name'] }
    }
  }),
  
  setup() {

    return {
        icons: {
        mdiEye,
        mdiPencil,
        mdiDelete
      },
    }
  },
}
</script>
