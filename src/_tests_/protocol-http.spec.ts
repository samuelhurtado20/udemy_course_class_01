import { InvalidArgument } from '../errors/invalid-arg'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols http and querys', () => {
  test('URL login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })
  test('Response query', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    // console.log(parsedUrl)
    expect(parsedUrl.search).toEqual('?user=user&password=password')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Invalid Url',() => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }

    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
