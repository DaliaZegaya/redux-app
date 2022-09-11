import { GET_ADMIN_BY_ID, ADD_ADMIN, UPDATE_ADMIN, DELETE_ADMIN} from "../types/adminTypes"

export default function adminReducer(admins= [], action) {

    switch (action.type) {
        case GET_ADMIN_BY_ID:
            return 
        case ADD_ADMIN:
            return {admins:[...admins, action.payload]}
        case UPDATE_ADMIN:
            const newArray = admins.filter((adminItem)=>{
                adminItem.Id == action.payload.Id
            })
           users[admins.indexOf(newArray[0])] = action.payload
            return [...admins]
        case DELETE_ADMIN:
            return 
        default:
            return admins
    }

}