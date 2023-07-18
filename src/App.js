import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Quote from './Pages/Quote'

const App = () => {
    return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/login' exact Component={Login} />
<Route path='/register' exact Component={Register} />
<Route path='/quote' exact Component={Quote}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App