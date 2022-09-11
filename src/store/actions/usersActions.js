import { ADD_USER, UPDATE_USER } from '../types/userTypes'

export const addUser = (newUser) => {
    return { type: ADD_USER, payload: newUser }
}
export const updateUser = (newUser) => {
    return { type: UPDATE_USER, payload: newUser }
}