import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.css";
import Services from "./../components/Services";
import { data } from "./../data";
import Testimonials from "./../components/Testimonials";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Muhammad UFO</title>
        <meta name="description" content="Special Force!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
