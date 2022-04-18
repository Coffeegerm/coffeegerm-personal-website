import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        marginTop: "7rem",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="main-heading">
          Hello. I&apos;m David. A software engineer.
        </h1>
        <h2>
          &quot;The quieter you become, the more you can hear&quot; - Ram Dass
        </h2>
        <p>
          I&apos;m also a lover of good coffee, tattoos, metal music, and books.
        </p>
      </section>

      <section>
        <Image
          src="/assets/IMG_1631.png"
          height="500px"
          width="400px"
          alt="Me"
        />
      </section>
    </main>
  );
};

export default Home;
