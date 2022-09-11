import { GET_ADMIN_BY_ID, ADD_ADMIN, UPDATE_ADMIN, DELETE_ADMIN} from "../types/adminTypes"

export const addAdmin = (newAdmin) => {
    return { type: ADD_ADMIN, payload: newUser }
}
export const updateAdmin = (newAdmin) => {
    return { type: UPDATE_ADMIN, payload: newUser }
}