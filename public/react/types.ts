export interface ItemObj {
    id: number,
    name: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export type IncomingItem = Omit<ItemObj, 'id'>

export interface UserObj {
    id: number,
    username: string,
    password: string,
    items: ItemObj[]
}

export interface ReturnMsg {
    message: string
}