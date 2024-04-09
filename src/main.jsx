import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RepositoriesProvider from './context/RepositoriesContext.jsx'
import ShowProvider from './context/ShowContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RepositoriesProvider>
        <ShowProvider>
            <App />
        </ShowProvider>
    </RepositoriesProvider>
)
