import React from 'react'
import ReactDOM from 'react-dom/client'

//components
import App from './App'
import { BrowserRouter } from 'react-router-dom'

//redux toolkit
import { Provider } from 'react-redux'
import { store } from './store/store'

//style
import './index.scss'

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
