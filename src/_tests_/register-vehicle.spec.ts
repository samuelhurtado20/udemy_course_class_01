import { RegisterVehicle } from '../controllers/register-vehicle'
import { MissingFormalParameter } from '../errors/client-error'
import { VehicleHelper } from '../helpers/vehicle-model-helper'
import { Vehicle } from '../models/vehicle-model'

describe('Register vehicle', () => {
  test('is the name does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        // name: 'corolla',
        model: 'Chevrolet',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
  })

  test('is the model does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'corolla',
        // model: 'Chevrolet',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
  })

  test('is the model is OK return 200', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'corolla',
        model: 'Chevrolet',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual('Everytring is okey')
  })

  it('Class Vehicle - helper - model', () => {
    const vehicle = new Vehicle({
      name: 'Name',
      model: 'Kia Picanto',
      price: 13.000
    })
    expect(vehicle.getVehicle()).toEqual(vehicle)
    expect(vehicle.getName()).toEqual('Name')
    expect(vehicle.getModel()).toEqual('Kia Picanto')
    expect(vehicle.getPrice()).toEqual(13.000)
  })

  it('Class helper ', () => {
    const vehicleHelper = new VehicleHelper()

    expect(vehicleHelper).toEqual(new VehicleHelper())
  })
})
