import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name','model','year']
    for (const pro of requiredProperties) {
      if (!httpRequest.body[pro]) {
        return {
          statusCode: 400,
          body: new Error(`${pro} is missing`)
        }
      }
    }

    return {
      statusCode: 200,
      body: 'Everytring is okey'
    }
  }
}
