import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// const enhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//  window.__REDUX_DEVTOOLS_EXTENSION__(),
//  );
 
// const userStore= createStore({reducer},{},enhancers)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={userStore}>
//     <App />
//   </Provider>
// )
