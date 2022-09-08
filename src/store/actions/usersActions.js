import { ADD_USER } from '../types/userTypes'

export const addUser = (newUser) => {
    return { type: ADD_USER, payload: newUser }
}