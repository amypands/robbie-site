import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, Menu, Segment, Dropdown, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import Styles from "../styles/button.module.css";
import navStyles from "../styles/nav.module.css";
import Link from "next/link";

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
          }
          ${activeItem !== "/" ? Styles.buttonWhite : ""}`}
        >
          <Link href="/">Home</Link>
        </span>
        <span
          className={`${Styles.pillButton} ${
            activeItem === "/about" ? Styles.active : ""
          }
          ${activeItem !== "/" ? Styles.buttonWhite : ""}`}
        >
          <Link href="/about">About</Link>
        </span>
        <Dropdown
          text="Gallery"
          pointing
          className={`${Styles.pillButton} ${
            activeItem === "/gallery" ? Styles.active : ""
          }
          ${activeItem !== "/" ? Styles.buttonWhite : ""}`}
        >
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <Link href="/gallery/baby">Baby Photos</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/gallery/Other">Other</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/gallery/school">School Pictures</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span
          className={`${Styles.pillButton} ${
            activeItem === "/shopping" ? Styles.active : ""
          }
          ${activeItem !== "/" ? Styles.buttonWhite : ""}`}
        >
          <Link href="/shopping">Favourites</Link>
        </span>
      </div>
    </div>
  );
}
