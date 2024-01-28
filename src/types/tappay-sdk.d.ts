declare namespace TPDirect {
  function setupSDK(appId: number, appKey: string, serverType: string): void

  function redirect(url: string): void

  namespace linePay {
    function getPrime(callback: (result: LinePayGetPrimeResult) => void): void
  }

  namespace card {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setup(config: any): void

    function onUpdate(callback: (update: CardUpdateResponse) => void): void

    function getPrime(callback: (result: CardGetPrimeResult) => void): void

    function getTappayFieldsStatus(): TappayFieldsStatus
  }

  interface CardUpdateResponse {
    status: {
      number: string
      expiry: string
      ccv: string
    }
  }

  interface LinePayGetPrimeResult {
    status: number
    msg: string
    prime: string
  }

  interface CardGetPrimeResult {
    status: number
    msg: string
    card: {
      prime: string
    }
  }

  interface TappayFieldsStatus {
    canGetPrime: boolean
  }
}
