import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h2>
          &quot;The quieter you become, the more you can hear&quot; - Ram Dass
        </h2>
      </header>

      <main
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          marginTop: "4rem",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>Hello. I&apos;m David. A software engineer.</h1>

          <p>
            I&apos;m also a lover of good coffee, tattoos, metal music, and
            books.
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
    </div>
  );
};

export default Home;
