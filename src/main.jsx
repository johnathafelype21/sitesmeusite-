import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './demo.css'
import './responsive.css'
import './dark.css'

const root = document.getElementById('root')
const app = <React.StrictMode><App /></React.StrictMode>
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)

import './professional.css'

import './signatures.css'

import './visual-effects.css'

import './business.css'

import './presence-services.css'
