import { IBird } from '../interfaces/IBird'

export class Bird {
  constructor (public ibird: IBird) {
    Object.assign(this, ibird)
  }

  fly (): string {
    return this.ibird.name
  }
}

export class Eagle extends Bird {
  fly (): string {
    return this.ibird.name
  }
}

export class Penguin extends Bird {
  fly (): any {
    return new Error('I can´t fly')
  }

  walk (): boolean {
    return true
  }
}
