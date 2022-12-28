import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import React, { useState,useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  
  useEffect(() => {
    try{
    if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")));
      saveCart(JSON.parse(localStorage.getItem("cart")))
    }}
    catch(error) {
      console.error(error);
      localStorage.clear();
    }
  }, [])
  
  //Save the cart at each render
  const saveCart = (myCart) =>{
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length;i++){
      console.log(myCart[keys[i]])
      subt += myCart[keys[i]].price * myCart[keys[i]]["qty"]
    }
    setSubTotal(subt)
  }
  // Add items to the cart
  const addToCart = (itemCode, qty, price, name , varient)=>{
    let newCart = cart;
    if(itemCode in cart) {
      newCart[itemCode]["qty"] = cart[itemCode]["qty"]+qty
    }
    else{
      newCart[itemCode] = {qty:1,price,name,varient}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  // Clear Cart
  const clearCart =()=>{
    setCart({})
    saveCart({})
  }

  //Remove items from the cart
  const removeFromCart = (itemCode, qty, price, name, varient)=>{
    let newCart = cart;
    if(itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty-qty;
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  return <>
    <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
