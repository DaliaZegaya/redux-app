import  { compose } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  combineReducers  from './store/reducers'


const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__(),
 );
 
export const userStore= createStore(combineReducers,{ },enhancers)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={userStore}>
    <App />
  </Provider>
)
