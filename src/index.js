import React from 'react'
import { render } from 'react-dom'
import App from './Components/App'

//the App component is where the work is being done and is rendered in the "root" div in ./public/index.html
render(<App />, document.getElementById("root"))
