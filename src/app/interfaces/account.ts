export interface userData{
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    phone: string,
    email: string,
    address: AddressUser,
    id?: number
}

export interface AddressUser{
    address: string,
    city: string,
    postalCode: string
}

export interface loginData{
    username: string,
    password: string
}

export interface userLogged{
    email: string,
    firstName: string,
    gender: string,
    id: number,
    image: string,
    lastName: string,
    token: string,
    username: string
}

export interface usersListResponse{
    limit: number,
    skip: number,
    total: number,
    users: userLoginData[]
}

export interface userLoginData{
    username: string,
    password: string
}