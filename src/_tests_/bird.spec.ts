import { Bird, Eagle, Penguin } from '../models/bird-model'

describe('BIRD', () => {
  test('should fly', () => {
    const eagle = new Bird({
      name: 'BIRD',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toEqual('BIRD')
  })
})

describe('EAGLE', () => {
  test('should fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toEqual('Eagle')
  })
})

describe('PENGUIN', () => {
  test('should not fly', () => {
    const eagle = new Penguin({
      name: 'Penguin',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toEqual(new Error('I can´t fly'))
  })
  test('should walk', () => {
    const eagle = new Penguin({
      name: 'Penguin',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.walk()).toEqual(true)
  })
})
