// import './App.css'
import List from "./components/List";
import Partner from "./components/Partner";
import Partnerone from "./components/Partnerone";
import Partnertwo from "./components/Partnertwo";
import Transper from "./components/Transper";
import Peace from "./components/Peace";
import Mobile from "./components/Mobile";
import Faq from "./components/Faq";
import Awarde from "./components/Awarde";
import Feature from "./components/Feature";
import Nav from "./Nav";
import styles from "./ListProperty.module.css"

import { IoIosArrowForward } from "react-icons/io";
function ListProperty() {
  return (
    <>
      <Nav  />
      <List></List>
      <Partner></Partner>
      <Partnerone></Partnerone>
      <Partnertwo></Partnertwo>
      <Transper></Transper>
      <Peace></Peace>
      <Mobile></Mobile>
      <Faq></Faq>
      <Awarde></Awarde>
      <Feature></Feature>
    </>
  );
}

export default ListProperty;
