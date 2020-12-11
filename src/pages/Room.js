import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthService';
import firebase from '../config/firebase';

import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 30px;
`;

const Room = () => {


  const user = useContext(AuthContext)
  const [messages, setMessages] = useState(null)

  useEffect(() => {
    //初期データの読み込み
    firebase.firestore().collection('messages')
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(doc => {
          return doc.data()
        })
        setMessages(messages)
      })
  },[])

  const handleSubmit = e => {
    e.preventDefault()
    const content = e.target.textForm.value
    // console.log(e.target.textForm.value)

    // setMessages([
    //   ...messages,
    //   {
    //     user: user.displayName,
    //     // content: content
    //     content //両辺が同じ場合は省略可
    //   }
    // ])
    firebase.firestore().collection('messages')
      .add({
        user: user.displayName,
        content
      })
  } 

  return (
      <>
          <Title>
            Room
          </Title>
          {/* <p>You're {user ? user.displayName + '.': 'not logged in'} </p> */}
          <p>{`You logged in as ${user.displayName}. `} </p>
          <button onClick={() => firebase.auth().signOut()}>Sing out</button>

          <ul>
            {
              messages ?
               messages.map((message,i) => (
                <li key={i}>
                  <p>{message.user}</p>
                  <p>{message.content}</p>
                </li>
              )) : '...loadig'
            }
          </ul>

          <form onSubmit = {handleSubmit} >
            <input type="text" name="textForm" id=""/>
            <button type="submit">Send</button>
          </form>
      </>
  )
}



export default Room;