<template>
  <div>
    <h1>Vehicle</h1>
    <VehicleInfo
      v-bind:vehicle_info="vehicle_info"
    />
    <hr>
    <p>Days to hire: <input class="form-control" min="1" type="number" v-model.number="days_to_hire"/></p>
    <p>Cost to rent: {{hire_cost}}</p>
    <button class="btn btn-secondary" @click="calculateHireCost()">Calculate cost to hire</button>
  </div>
</template>

<script>
import VehicleInfo from "@/components/VehicleInfo";
import axios from "axios";

export default {
  name: "Vehicle",
  components: {
    VehicleInfo
  },
  data() {
    return {
      days_to_hire: 1,
      hire_cost: '',
      vehicle_info: []
    }
  },
  methods: {
    getAvailableVehicleById() {
      axios.get('/api/v1/vehicle-hire/' + this.$route.params.id, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials' :true
        }
      })
        .then(res => this.vehicle_info = res.data.vehicle_info)
        .catch(err => console.log(err))
    },
    calculateHireCost() {
      axios.get('/api/v1/vehicle-hire/price-by-days?categoryId=' + this.vehicle_info.category.id + '&days=' + this.days_to_hire, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials' :true
        },
      })
        .then(res => this.hire_cost = res.data)
        .catch(err => console.log(err))
    },
  },
  created() {
    this.getAvailableVehicleById()
  }
}
</script>

<style scoped>
  input {
    width: 200px;
    margin: auto;
    margin-top: 10px;
  }
</style>
