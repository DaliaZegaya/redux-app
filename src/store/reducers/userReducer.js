import { userStore } from '../../main'
import { GET_USER_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER} from '../types/userTypes'

export default function usersReducer(users= [], action) {

    switch (action.type) {
        case GET_USER_BY_ID:
            return 
        case ADD_USER:
            return {users:[...users, action.payload]}
        case UPDATE_USER:
            const newArray = users.filter((userItem)=>{
                userItem.Id == action.payload.Id
            })
           users[users.indexOf(newArray[0])] = action.payload
            return [...users]
        case DELETE_USER:
            return 
        default:
            return users
    }

}