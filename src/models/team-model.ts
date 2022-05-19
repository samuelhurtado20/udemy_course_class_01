import { ISoccer, ITeam } from '../interfaces/ITeam'

export class Team implements ITeam, ISoccer {
  attack (name: string): string {
    return name
  }

  position (name: string, tShirt: number, skills: any[]): any {
    return [name, tShirt, skills]
  }

  getSalary (empCode: number): number {
    return empCode
  }
}
