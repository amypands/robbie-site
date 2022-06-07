import React from "react";
import Nav from "../components/nav";
import Head from "next/head";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import shopping from "../styles/shopping.module.css";

const shoppingItems = [
  {
    image: "https://m.media-amazon.com/images/I/717RcBICv4L._AC_SL1500_.jpg",
    name: "Mad Scientist Toy for Dogs",
    link: "https://www.amazon.ca/Trixie-32019-Scientist-Level-White/dp/B003TOKTEG/ref=sr_1_3?keywords=mad+scientist+dog+toy&qid=1642354915&sprefix=mad+scientist+%2Caps%2C85&sr=8-3",
  },
  {
    image:
      "https://www.petvalu.ca/ccstore/v1/images/?source=/file/v6930023513947813529/products/SCM06619CA.1.jpg&height=475&width=475",
    name: "Large Crate",
    link: "https://www.petvalu.ca/product/midwest-solutions-series-54-double-door/SCM06619CA",
  },
  {
    image:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=1514697-894&recipeName=680",
    name: "Large Cozy Bed",
    link: "https://www.costco.ca/kirkland-signature-round-pet-bed%2c-taupe.product.100801209.html",
  },
  {
    image: "https://m.media-amazon.com/images/I/71YL9JSj47L._AC_SL1500_.jpg",
    name: "Slow Feeder",
    link: "https://www.amazon.ca/IMHAPO-Feeder-Feeding-Interactive-Choking/dp/B08RCVJX7F/ref=sr_1_7?crid=3VYIRUG14023X&keywords=slow+feeder&qid=1642356942&sprefix=slow+feeder%2Caps%2C88&sr=8-7%20Food%20https://www.petvalu.ca/product/performatrin-ultra-lamb-brown-rice-adult-recipe-dog-food/FCM00671CA",
  },
  {
    image: "https://m.media-amazon.com/images/I/61fFhCFCybL._AC_SL1000_.jpg",
    name: "Stella and Chewy Weenies",
    link: "https://www.amazon.ca/Stella-ChewyS-Ww-Bf-3-25-Freeze-Dried-Treats/dp/B07G3KR916/ref=sr_1_31?crid=1TEY5TH4RPSBK&keywords=stella+and+chewy&qid=1642357023&sprefix=stella+and+chewy%2Caps%2C97&sr=8-31",
  },
  {
    image:
      "https://www.petvalu.ca/ccstore/v1/images/?source=/file/v3054354935204476721/products/FCM00671CA.1.jpg&height=475&width=475",
    name: "PerformaTrin Ultra Dog Food",
    link: "hhttps://www.petvalu.ca/product/performatrin-ultra-lamb-brown-rice-adult-recipe-dog-food/FCM00671CA",
  },
];

export default function Favourites() {
  return (
    <div>
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
      <main className={shopping.main}>
        <Card.Group>
          {shoppingItems.map((item, index) => {
            return (
              <Card key={index}>
                <a href={item.link}>
                  <Image
                    className={shopping.shoppingImage}
                    src={item.image}
                    wrapped
                    ui={false}
                  />
                </a>

                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </main>
    </div>
  );
}
