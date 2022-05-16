import { InvalidArgument } from '../errors/invalid-arg'

export class UrlLogin {
  public static parseUrl (url: string): URL {
    if (!url) throw new InvalidArgument(url)
    return new URL(url)
  }
}
