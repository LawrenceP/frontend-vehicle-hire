import { Server, Model } from 'miragejs'
import unavailableVehiclesJSON from './fixtures/unavailable-vehicles.json'
import availableVehiclesJSON from './fixtures/available-vehicles.json'
import {PRICE_PER_DAY_BY_VEHICLE_SIZE} from "./constants/constants";

export function makeServer({ environment = "development" } = {}) {

  let server = new Server({
    environment,

    routes() {
      this.namespace = "api/v1/"

      this.get("/todos", schema => {
        return schema.todos.all()
      })

      this.get("/vehicle-hire/available", schema => {
        return {
          'vehicles': unavailableVehiclesJSON
        }
      })

      this.get("/vehicle-hire/unavailable", schema => {
        return {
          'vehicles': availableVehiclesJSON
        }
      })

      this.get("/vehicle-hire/:id", schema => {
        return {
          'vehicle_info': availableVehiclesJSON[0]
        }
      })

      this.get("/vehicle-hire/price-by-days", schema => {
        return {
          'vehicle_info': availableVehiclesJSON[0]
        }
      })

      this.get("/vehicle-hire/price-by-days", (schema, request) => {
        let sizeCategoryId = request.queryParams.categoryId
        let days = request.queryParams.days
        let pricePerDay = PRICE_PER_DAY_BY_VEHICLE_SIZE[sizeCategoryId].price_per_day
        return pricePerDay * days
      })
    },
  })

  return server
}
