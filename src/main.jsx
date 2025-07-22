import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter> 
        <App />
    </BrowserRouter>
    // after npm i react-router-dom
    // Потому что все остальные компоненты React Router (<Routes>, <Router>, <Link>, а также хуки useNavigate, useParams) могут работать только внутри этой "среды", которую создает <BrowserRouter>.
)
