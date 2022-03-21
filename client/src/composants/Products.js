import React from 'react'
import styled from 'styled-components'
import {ProductPopulaire} from "../data"
import ProductsItem from './ProductsItem'
import { useState , useEffect} from "react";
import axios from "axios";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export default function Products({ categorie, filtre, sort }) {
    const [produits, setProduits] = useState([]);
    const [produitsFiltrer, setproduitsFiltrer] = useState([]);


    useEffect(() => {
      const getProduits = async () => {
        try {
          const res = await axios.get(
             categorie ? `http://localhost:8080/api/products?category=${categorie}`:`http://localhost:8080/api/products`);
          setProduits(res.data);
        } catch (err) {console.log("erreur")}
      }; getProduits()}, [categorie]);

    useEffect(() => {
      categorie &&  setproduitsFiltrer(
        produits.filter((item) =>
            Object.entries(filtre).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        ); }, [produits, categorie, filtre]);

    useEffect(() => {
      if (sort === "les plus récents") {
        setproduitsFiltrer((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
      } else if (sort === "Pris bas à élevé") { setproduitsFiltrer((prev) => [...prev].sort((a, b) => a.price - b.price) );
      } else {
        setproduitsFiltrer((prev) => [...prev].sort((a, b) => b.price - a.price));
      }
    }, [sort]);

  return (
    <Container>
        {categorie
        ? produitsFiltrer.map((items) => <ProductsItem items={items} key={items.id} />)
        : produits
            .slice(6,14)
            .map((items) => <ProductsItem items={items} key={items.id} />)}
    </Container>
  )
}
