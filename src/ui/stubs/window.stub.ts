import { Injectable } from '@angular/core'
import { WindowImplementation } from '../app/interfaces/window-implementation'

@Injectable()
export class WindowStub implements Partial<WindowImplementation> {
  public navigator: any = {}
  public location: any = {}

  public scrollTo(a?: number, b?: number): void {
    return null
  }
  public alert(str: string): void {
    return
  }
  public open(...args: any[]): void {
    return
  }

  public setTimeout(
    handler: (...args: any[]) => void,
    timeout?: number,
  ): number {
    return 0
  }

  public clearTimeout(timeoutId: number): void {}

  public setInterval(
    handler: (...args: any[]) => void,
    ms?: number,
    ...args: any[]
  ): number {
    return 0
  }

  public ga(
    command: string | Function,
    params?: any,
    extra?: any,
  ): void {}
}
