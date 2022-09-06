import React from "react";
import Header from "./components/header/header";
import Main from "./pages/Main";
import styles from "./App.module.scss";
import About from "./pages/about/about"
import Contacts from "./pages/contacts/contacts"
import Order from "./pages/order"
import ItemPage from "./pages/itemPage"
import {Routes,Route} from 'react-router-dom';
import Footer from "./components/footer/footer";
const App = () =>{
  return (
    <>
    <Header/>

    <Routes>
    
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/itemPage" element={<ItemPage/>}/>
      
    </Routes>

    <Footer/>
  </>
  )
}
export default App;