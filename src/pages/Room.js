import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'

const Room = () => {
  const user = useContext(AuthContext)

  const [message, setMessages] = useState([
    {
      user: 'Sample',
      content: 'sample sample sample sample'
    },
    {
      user: 'Sample',
      content: 'sample sample sample sample'
    },
    {
      user: 'Sample',
      content: 'sample sample sample sample'
    }
  ])

  return (
      <>
          <h1>Room</h1>
          <p>You're {user ? user.displayName + '.': 'not logged in'} </p>
          <button onClick={() => firebase.auth().signOut()}>Sing out</button>

          <ul>
            <li>
              <p>User A</p>
              <p>sample sample sample.</p>
            </li>
            <li>
              <p>User B</p>
              <p>sample sample sample.</p>
            </li>
          </ul>

          <form>
            <input type="text" name="" id=""/>
            <button type="submit">Send</button>
          </form>
      </>
  )
}

export default Room