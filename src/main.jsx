import  { compose } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import usersReducer from './store/reducers/userReducer'
import App from './App'
import './index.css'


const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__(),
 );
 
export const userStore= createStore(usersReducer,{users:[{fName:"Dalia", lName:"Zegaye", age:23, email:"dalia@gmail.com"}]},enhancers)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={userStore}>
    <App />
  </Provider>
)
