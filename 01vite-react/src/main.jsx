import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
        <h1>Visit me</h1>
        </>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank' rel="noreferrer">visit google </a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // reactElement
    <App />

)
