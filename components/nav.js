import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, Menu, Segment, Dropdown } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const activeItem = router.pathname;
  return (
    <Menu pointing>
      <Menu.Item name="Home" active={activeItem === "/"} href='/'/>
      <Menu.Item name="About" active={activeItem === "/about"} href='/about'/>
      <Dropdown text='Gallery' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item>Baby Photos</Dropdown.Item>
        <Dropdown.Item>School Photos</Dropdown.Item>
        <Dropdown.Item>Other Photos</Dropdown.Item>
        <Dropdown.Item>Videos</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Menu.Item
        name="Shopping List"
        active={activeItem === "/shopping list"}
      />
      <Menu.Menu  position='right'>
          <Menu.Item>
              <h1>Robbie's World</h1>
          </Menu.Item> 
      </Menu.Menu>
    </Menu>
  );
}
