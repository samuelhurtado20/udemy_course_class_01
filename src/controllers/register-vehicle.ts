import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('name is missing')
      }
    }
    if (!httpRequest.body.model) {
      return {
        statusCode: 400,
        body: new Error('model is missing')
      }
    }
    return {
      statusCode: 200,
      body: 'Everytring is okey'
    }
  }
}
