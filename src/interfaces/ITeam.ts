export interface ITeam {
  position: (name: string, tShirt: number, skills: any[]) => any
  getSalary: (empCode: number) => number
}

export interface ISoccer {
  attack: (name: string) => string
}
