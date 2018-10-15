export interface WindowImplementation extends Window {
  navigator: any
  location: any

  scrollTo: any // TODO(dmayerdesign): Figure out how to get overload to translate to interface.
  alert(_str: string): void
  open(..._args: any[]): any

  setTimeout(
    _handler: (...args: any[]) => void,
    _timeout?: number,
  ): number

  clearTimeout(timeoutId: number): void

  setInterval(
    _handler: (...args: any[]) => void,
    _ms?: number,
    ..._args: any[]
  ): number

  ga(
    _command: string | Function,
    _params?: any,
    _extra?: any,
  ): void
}
