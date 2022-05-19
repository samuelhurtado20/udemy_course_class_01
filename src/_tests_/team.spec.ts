import { Team } from '../models/team-model'

describe('Team class', () => {
  it('position ', () => {
    const team = new Team()
    const position = {
      name: 'goolkeeper',
      tShirt: 1,
      skills: ['kick hard', 'run fas', 'jump high']
    }

    expect(team.position(position.name,position.tShirt,position.skills)).toBe(['goolkeeper', 1, ['kick hard', 'run fas', 'jump high']])
  })

  it('Soccer play ', () => {
    const team = new Team()
    expect(team.attack('name')).toBe('name')
  })
})
