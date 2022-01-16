import Head from "next/head";
import styles from "../../styles/about.module.css";
import Nav from "../../Components/nav";
import { Icon, Image } from "semantic-ui-react";
import Styles from "../../styles/image.module.css";
import { useState } from "react";
import Carousel from "../../styles/carousel.module.css";

export default function Other() {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      img: "/1c779949-e1c2-4088-9639-32c818ecaf4e.jpeg",
      date: "June 2020",
      description: "Waking up mom",
    },
    {
      img: "/5d3f2457-fea5-4670-87ab-c5798b88b507.jpeg",
      date: "December 2021",
      description: "Dogs in stem",
    },
    {
      img: "/36DDC339-D52D-4C63-BF6D-67CD64173A46.jpeg",
      date: "October 2020",
      description: "Mom and me",
    },
   
    {
      img: "/69aa1313-4278-4b8f-bcc7-31358403af1f.jpeg",
      date: "Jult 2020",
      description: "Summer boy",
    },

    {
      img: "/78145eca-bcf2-48e1-8d43-444c79639d30.jpeg",
      date: "August 2021",
      description: "Sundried",
    },
   
    {
      img: "/b492af3c-fbf4-4a46-be94-ca9b3c88112b.jpeg",
      date: "June 2020",
      description: "Big Smile",
    },

    {
      img: "/IMG_0094.jpeg",
      date: "September 2021",
      description: "Pile of Puppy",
    },

    {
      img: "/IMG_0124.jpeg",
      date: "October 2021",
      description: "Golden x Golden",
    },

    {
      img: "/IMG_0206.jpeg",
      date: "October 2021",
      description: "King of the Castle",
    },

    {
      img: "/IMG_0431.jpeg",
      date: "October 2020",
      description: "Looking for rabbits",
    },

    {
      img: "/IMG_0432.jpeg",
      date: "May 2020",
      description: "Twins",
    },

    
    {
      img: "/IMG_0435.jpeg",
      date: "September 2020",
      description: "Don't look up",
    },

      
    {
      img: "/IMG_0440.jpeg",
      date: "December 2021",
      description: "Sir Robbie",
    },

    
    
    {
      img: "/IMG_0628.jpeg",
      date: "December 2021",
      description: "Not his first Christmas",
    },

    {
      img: "/IMG_3588.jpeg",
      date: "May 2020",
      description: "Double cheeked up",
    },

    {
      img: "/IMG_5356.jpeg",
      date: "May 2020",
      description: "Bench Warmer",
    },

    {
      img: "/IMG_7007.jpeg",
      date: "May 2020",
      description: "No Cap",
    },
    {
      img: "/IMG_8291.jpeg",
      date: "May 2020",
      description: "Forget me nots",
    },
    {
      img: "/IMG_9287.jpeg",
      date: "November 2021",
      description: "Do not disturb",
    },
    {
      img: "/IMG_9398.jpeg",
      date: "November 2021",
      description: "Robbie and Shadow",
    },
    {
      img: "/IMG_9628.jpeg",
      date: "June 2021",
      description: "Robbie and Ness",
    },
    {
      img: "/IMG_9885.jpeg",
      date: "October 2021",
      description: "Fall Vibes",
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