declare global {
  namespace NodeJS {
    interface Global {
      mongo: any;
    }
  }
}

declare namespace NodeJS {
  export interface Global {
    mongo: any;
  }
}
