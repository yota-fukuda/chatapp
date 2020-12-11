// import React from 'react';
// import { Route } from 'react-router-dom'; 


// // const Parent = () => {
// //     return (
// //         // <Route path='/' component={Child} SomeProps={'text'} ></Route>
// //         // この書き方だとporopsに値が渡されず、何も表示されない。

// //         <Route path='/' component={() => <Child SomeProps={'text'} />}></Route>
// //         // 関数を渡す必要がある。
// //         // Componentを作る関数を渡す必要がある。
// //         // これだと無理やり過ぎる。
// //         // パフォーマンスが悪くなる。
// //     )
// // }

// const Parent = () => {
//     return (
//         <Route path='/' component={Child} ></Route>
//     )
// }

// const Child = ({ SomeProps, history }) => {
//     return (
//         <p>{SomeProps}</p>
//     )
// }


// const Parent = () => {
//     return (
//         <Route path='/' render={
//             routeProps => 
//             <Child 
//                 SomeProps={'text'}
//                 { ...routeProps} //下記と同意
//                 // history={routeProps.history}
//                 // match={routeProps.match}
//                 // location={~~~}
//         />
//         }>

//         </Route>
//     )
// }

// const Child = ({ SomeProps }) => {
//     return (
//         <p>{SomeProps}</p>
//     )
// }