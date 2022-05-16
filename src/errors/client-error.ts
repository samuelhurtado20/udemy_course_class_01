export class MissingFormalParameter extends Error {
  constructor (public arg: string) {
    super(`Error In the Parameter: ${arg}`)
  }
}
