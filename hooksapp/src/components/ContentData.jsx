import React from "react";
import { ColorContext, UserContext } from "./MyContext";
import { useContext } from "react";

// const ContentData = () => {
//   return (
//     <UserContext.Consumer>
//       {(user) => {
//         return (
//           <ColorContext.Consumer>
//             {(color) => {
//               return (
//                 <div className={color}>
//                   <ul>
//                     <li>Nom: {user.name} </li>
//                     <li>Age: {user.age} </li>
//                   </ul>
//                 </div>
//               );
//             }}
//           </ColorContext.Consumer>
//         );
//       }}
//     </UserContext.Consumer>
//   );
// };


const ContentData = () => {
  const user = useContext(UserContext);
  const color = useContext(ColorContext);

  return (
    <div className={color}>
      <ul>
        <li>Nom: {user.name} </li>
        <li>Age: {user.age} </li>
      </ul>
    </div>
  );
};

export default ContentData;
