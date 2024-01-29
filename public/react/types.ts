import { ChangeEventHandler } from 'react';

export interface ItemObj {
    id: number,
    name: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export type IncomingItemObj = Omit<ItemObj, 'id'>

export interface UserObj {
    id: number,
    username: string,
    password: string,
    items: ItemObj[]
}

export type IncomingUserObj = Omit<UserObj, 'id' | 'items'>

export interface ReturnMsg {
    message: string
}

export interface UseFieldReturn {
    inputType: string,
    value: string | number,
    onChange: ChangeEventHandler<HTMLInputElement>
}

export interface SuccessfulLogin {
    token: string,
    username: string
}