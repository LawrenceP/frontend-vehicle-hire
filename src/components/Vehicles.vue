<template>
  <div>
    <h1>Vehicles</h1>
    <button v-on:click="getAvailableVehicles" class="btn btn-secondary">Show available vehicles</button>
    <button v-on:click="getUnavailableVehicles" class="btn btn-secondary">Show unavailable vehicles</button>
    <div v-bind:key="vehicle_info.id" v-for="vehicle_info in vehicles">
      <div class="card">
        <router-link :to="{ name: 'Vehicle', params: {id:vehicle_info.id} }">
          <VehicleInfo
            v-bind:vehicle_info="vehicle_info"
          />
        </router-link>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import VehicleInfo from "@/components/VehicleInfo";
import axios from "axios";

export default {
  name: "Vehicles",
  components: {
    VehicleInfo
  },
  methods: {
    getUnavailableVehicles() {
      axios.get('/api/v1/vehicle-hire/unavailable', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials' :true
        }
      })
        .then(
          res => this.vehicles = res.data.vehicles
        )
        .catch(err => console.log(err))
    },
    getAvailableVehicles() {
      axios.get('/api/v1/vehicle-hire/available', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials' :true
        }
      })
        .then(
          res => this.vehicles = res.data.vehicles
        )
        .catch(err => console.log(err))
    },
  },
  data() {
    return {
      vehicles: [],
      hire_cost: ''
    }
  },
  created() {
    this.getAvailableVehicles()
  }
}
</script>

<style scoped>

</style>
