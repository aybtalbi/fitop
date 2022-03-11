import React from 'react'
import styled from 'styled-components'
import { Search , ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import { FavoriteBorderOutlined } from '@material-ui/icons'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { login,logout } from "../redux/FontionAPI"
import mobile from '../responsive'

const Container =styled.div`
    height: 60px;
    margin-top: -10px;
    padding-bottom: 15px;
    ${mobile({ height: "50px" })}
`;

const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    padding-top: 0px;
    ${mobile({ marginLeft: "-20px",padding: "10px 0px" })}
`;

const Left = styled.div`
    margin-left: -80px;
    flex: 1; 
    text-align: center;
    ${mobile({ marginLeft: "20px"})}
`
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ marginLeft: "-40px"})}
   
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    ${mobile({ marginLeft: "-10px",flex: 2, justifyContent: "center" , flex : 3})}

`

const SearchContainer =styled.div`
    border: 1px solid #E0E0E0;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 5px;
    border-radius: 10px;
    width: 600px;
    flex:8;
    ${mobile({ marginLeft: "50px", width: "60px", border: "0.5px solid #E0E0E0"})}
`
const Input = styled.input`
    border: none;
    border: none;
    outline: none;
    width: 100%;  
    ${mobile({ width: "40px" })}
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px", marginLeft: " 10px", })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 45px;
    text-decoration: none;
    ${mobile({ fontSize: "10px", marginLeft: "10px",display: "flex" })}
`
const A = styled.div`
 display: flex
 `

function Navbar() {
  const wishlistQ= useSelector (state => state.wishlist.quantite);
  console.log(wishlistQ);
  const panierQ= useSelector (state => state.panier.quantite);
  console.log(panierQ);  
  const utilisateur = useSelector((state) => state.utilisateur.utilisateursCourant);
  const d = useDispatch();

  const Click = (e) => {
    e.preventDefault();
    logout(d);
  }; 
  return (   
    <Container>
      <Wrapper>  
        <Left>  
        <Link to="/" style={{color: "black", textDecoration:"none"}}>        
         <Logo>Fitop</Logo> </Link>        
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Recherche"/>
            <Search style={{color:"gray",fontSize:16, marginLeft:"400px"}} />
          </SearchContainer>
        </Center>
        <Right>
        
        {utilisateur ?
          <MenuItem style={{color: "black"}}  onClick={Click} ><b>Se déconnecter</b></MenuItem>
        :
          <A>
          <Link to="/register" style={{color: "black", textDecoration:"none"}}>
          <MenuItem><b>S'inscrire</b></MenuItem>
          </Link>  
          <Link to="/login" style={{color: "black", textDecoration:"none"}}>
          <MenuItem><b>Se connecter</b></MenuItem>
          </Link>    
         
          </A>  
        }
          <MenuItem>
          <Link to="/Panier">
            <Badge badgeContent={panierQ} color="primary" >
            <ShoppingCartOutlined style={{color: "black"}}/>           
            </Badge>
          </Link> 
            <Badge badgeContent={wishlistQ} color="primary">
            <FavoriteBorderOutlined style={{marginLeft: "20px"}}/>            
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>    
  )
}

export default Navbar