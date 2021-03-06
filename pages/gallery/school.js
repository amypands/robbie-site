import Head from "next/head";
import styles from "../../styles/about.module.css";
import Nav from "../../components/nav";
import { Icon, Image } from "semantic-ui-react";
import Styles from "../../styles/image.module.css";
import { useState } from "react";
import Carousel from "../../styles/carousel.module.css";

export default function School() {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      img: "/IMG_0443.jpeg",
      date: "July 2021",
      description: "smiles at school",
    },
    {
      img: "/IMG_0557.jpeg",
      date: "September 2021",
      description: "having fun at school",
    },
    {
      img: "/IMG_0693.jpeg",
      date: "December 2021",
      description: "sitting pretty at school",
    },
    {
      img: "/IMG_0694.jpeg",
      date: "November 2021",
      description: "my bad side",
    },
    {
      img: "/IMG_0742.jpeg",
      date: "December 2021",
      description: "santas little helper",
    },

    {
      img: "/IMG_0743.jpeg",
      date: "December 2021",
      description: "santas little helper",
    },
    {
      img: "/IMG_7301.jpeg",
      date: "September 2021",
      description: "goofy",
    },
    {
      img: "/IMG_7306.jpeg",
      date: "November 2021",
      description: "my friend Salazar",
    },
  ];

  const nextImage = () => {
    if (index === cards.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previousImage = () => {
    if (index === 0) {
      setIndex(cards.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={Carousel.carousel}>
        <div>
          <button className={Carousel.arrowButton} onClick={previousImage}>
            <Icon name="angle left"></Icon>
          </button>
        </div>
        <div className={Carousel.imageContainer}>
          <Image className={Styles.image} src={cards[index].img} />
          <p>{cards[index].date} </p>
          <p>{cards[index].description}</p>
        </div>
        <div>
          <button className={Carousel.arrowButton} onClick={nextImage}>
            <Icon name="angle right"></Icon>
          </button>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}