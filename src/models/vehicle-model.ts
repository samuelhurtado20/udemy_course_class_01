import { VehicleHelper } from '../helpers/vehicle-model-helper'

export class Vehicle {
  constructor (private readonly vehicleHelper: VehicleHelper) {}
  getName (): string { return this.vehicleHelper.name }
  getModel (): string { return this.vehicleHelper.model }
  getPrice (): number { return this.vehicleHelper.price }

  getVehicle (): any {
    return Object.assign(this, this.vehicleHelper)
  }
}
