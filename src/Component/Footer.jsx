import React from 'react'
import styled from "styled-components"

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <DIV>
        Designed and Developed by ❤️ Moumita Sarkar, {currentYear} All Rights Reserved.
        
        </DIV>
  )
}

const DIV=styled.div`
    background-color:#141737;
    color: #d8d0d0;
    font-size: 20px;
    padding: 30px;
`

