import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { io } from 'socket.io-client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './config/theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
const root = ReactDOM.createRoot(document.getElementById('root'))

const socket = io('http://localhost:5000')

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home socket={socket} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
