import React from 'react'
import styled from 'styled-components'
import mobile from '../responsive'

const Container = styled.div`
    background-color: darkred;
    color: white;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight:500;
    font-family: cursive;
    ${mobile({ fontSize: "9px", fontWeight:"200", height: "20px" })}
`


function Announcement() {
  return (
    <Container>
         En exclusivité chez FITOP   :   Paiement à la livraison !!!  
    </Container>
  )
}

export default Announcement