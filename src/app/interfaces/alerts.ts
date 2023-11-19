export enum InfoAlertType{
    Cart = "cart",
    WhishList = "whish",
    Expired = "expired"
}

export interface NewComplitedAlertContent{
    message: string
    time: number
}

export interface ComplitedAlert extends NewComplitedAlertContent{
    id: number
}

export interface NewInfoAlertContent extends NewComplitedAlertContent{
    type: InfoAlertType
}

export interface InfoAlert extends NewInfoAlertContent{
    id: number
}