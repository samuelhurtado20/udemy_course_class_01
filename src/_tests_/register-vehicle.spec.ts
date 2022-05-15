import { RegisterVehicle } from '../controllers/register-vehicle'

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
    expect(httpResponse.body).toEqual(new Error('name is missing'))
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
    expect(httpResponse.body).toEqual(new Error('model is missing'))
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
})
