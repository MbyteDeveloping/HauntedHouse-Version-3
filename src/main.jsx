import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import Smoother from './smoother'
Smoother()

import animations from './animations'
animations()

createRoot(document.getElementById('root')).render(<App />)
