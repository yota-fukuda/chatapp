// import React, { useEffect, useState } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'

const App = () => {
    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(setUser)
    // }, [])

    return (
        <AuthProvider>
          <Router>
              <LoggedInRoute exact path='/' component={Room}></LoggedInRoute>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/signup' component={SignUp}></Route>
          </Router>
        </AuthProvider>
    )
}

export default App