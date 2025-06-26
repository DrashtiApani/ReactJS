import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CrudProvider from './Context/MyCrudContext.jsx'

createRoot(document.getElementById('root')).render(

    <CrudProvider>
      <App /> 
    </CrudProvider>

)
