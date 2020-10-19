import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './AuthService';

//ログイン済みか未ログインかによって描写するコンポーネントを変更する
// ログイン済みの場合 => propsで渡されたコンポーネントを描写する
// 未ログインの場合 => Redirectを使用して、loginコンポーネントにリダイレクトする

const LoggedInRoute = ({ component: Component, ...rest }) => {
  //history, match, location
  const user = useContext(AuthContext)

  return (
    <Route
      {...rest}
      //renderを使うことでAppでComponentをrenderに変更することができる
      render = {props => 
        user ? (
            <Component {...props} />
          ) : (
          <Redirect to={'/login'} />
          )
      }
    ></Route>
  )
}

export default LoggedInRoute;