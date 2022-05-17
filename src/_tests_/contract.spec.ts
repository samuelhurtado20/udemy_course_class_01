import { ContractModel } from '../models/contract-model'

describe('Class ContractModel', () => {
  it('Contract 12 months', () => {
    const contract = new ContractModel({
      id: '001',
      date_init: new Date(2019),
      expiration_date: new Date(2020),
      month: 12,
      monthlyCost: 100
    })

    expect(contract.getId()).toBe('001')
    expect(contract.getDateInit()).toStrictEqual(new Date(2019))
    expect(contract.getExpirationDate()).toStrictEqual(new Date(2020))
    expect(contract.getMonth()).toBe(12)
    expect(contract.getMonthlyCost()).toBe(100)
  })
})
