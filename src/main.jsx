import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import Animations from './animations'
Animations()

createRoot(document.getElementById('root')).render(<App />)
