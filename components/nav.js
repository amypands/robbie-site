import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, Menu, Segment, Dropdown, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import Styles from "../styles/button.module.css";
import navStyles from "../styles/nav.module.css";

export default function Nav() {
  const router = useRouter();
  const activeItem = router.pathname;
  return (
    <div className={navStyles.nav}>
      <h1 className={navStyles.SideHeader}> {activeItem === "/" ? "" : "Robbie's World"} </h1>
      <div>
        <span
          className={`${Styles.pillButton} ${
            activeItem === "/" ? Styles.active : ""
          }`}
        >
          <a href="/">Home</a>
        </span>
        <span
          className={`${Styles.pillButton} ${
            activeItem === "/about" ? Styles.active : ""
          }`}
        >
          <a href="/about">About</a>
        </span>
        <Dropdown
          text="Gallery"
          pointing
          className={`${Styles.pillButton} ${
            activeItem === "/gallery" ? Styles.active : ""
          }`}
        >
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <a href="/gallery/baby">Baby Photos</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/gallery/Other">Other</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/gallery/school">School Pictures</a>
            </Dropdown.Item>
            <Dropdown.Item>Videos</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span
          className={`${Styles.pillButton} ${
            activeItem === "/shopping" ? Styles.active : ""
          }`}
        >
          <a href="/shopping">Favourites</a>
        </span>
      </div>
    </div>
  );
}
