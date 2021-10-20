export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface authenticationData {
  id: string
  role: USER_ROLES
}

export interface user extends authenticationData {
  email: string
  name: string
  nickname: string
  password: string
}

// export class User implements authenticationData{
  
//   constructor(
//     public id: string,
//     public role: USER_ROLES,
//     private email: string,
//     private name: string,
//     private nickname: string,
//     private password: string
//   ){}
// }