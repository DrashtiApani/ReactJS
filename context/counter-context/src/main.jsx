import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CounterContext from './Context/CounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <CounterContext>
    <App />
  </CounterContext>,
)
