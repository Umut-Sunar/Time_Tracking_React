import React from "react";
import styled from "styled-components";


const User = styled.p`

font-size: 12px;
color: ${(props) => props.$theme === 'white' ? 'white' : 'black'}
`


export default function UserInfoHeader(props){

              const {userData,theme} = props


              return( <>
              <User 
              $theme={theme}
              >{userData.name ? userData.name: 'How about filling out your profile so your name appears?'}</User>
              
              </>)



}
