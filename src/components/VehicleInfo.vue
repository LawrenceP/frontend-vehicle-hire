<template>
    <div class="vehicle_info">
      <p>Name: {{vehicle_info.make.name + " " + vehicle_info.model.name}}</p>
      <p>Registration Number: {{vehicle_info.registrationNumber}}</p>
      <p>Fuel Type: {{vehicle_info.fuelType.name}}</p>
      <p>Category: {{vehicle_info.category.name}}</p>
      <p>Price Per Day: {{vehicle_info.category.price_per_day}}</p>
    </div>
</template>

<script>
export default {
  name: "VehicleInfo",
  props: ["vehicle_info"],
  methods: {
  }
}
</script>

<style scoped>
.vehicle_info {
  color: #FFFFFF;
  padding: 30px;
  background-color: rgb(88, 95, 99);
}

/*a .vehicle_info {*/
/*  color: #FFFFFF;*/
/*}*/

a:hover .vehicle_info {
  background-color: rgb(73, 79, 82);;
  color: #FFFFFF;
}
</style>
