import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import Smoother from './smoother'
Smoother()

createRoot(document.getElementById('root')).render(<App />)
