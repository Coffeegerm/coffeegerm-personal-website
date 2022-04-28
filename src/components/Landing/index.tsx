import Image from "next/image";
import WorkHistory from "../WorkHistory";
import styles from "./Landing.module.css";

function SectionHeader({ title, index }: { title: string; index: number }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>{index}.</h1>
        <h2 style={{ marginLeft: "1rem" }}>{title}</h2>
      </div>
      <hr />
    </div>
  );
}

export default function Landing() {
  return (
    <main className={styles.container}>
      <section className={styles.aboutSectionContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SectionHeader title="About Me" index={1} />
          <h1 className="main-heading">
            Hello. I&apos;m David. A software engineer.
          </h1>
          <h2>
            &quot;The quieter you become, the more you can hear&quot; - Ram Dass
          </h2>
          <p>
            I&apos;m also a lover of good coffee, tattoos, metal music, and
            books.
          </p>
        </div>

        <div>
          <Image
            src="/assets/IMG_1631.png"
            height="500px"
            width="400px"
            alt="Me"
          />
        </div>
      </section>

      <section>
        <SectionHeader index={2} title="Places my code lives" />
      </section>

      <section>
        <SectionHeader index={3} title="Things I've built" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WorkHistory />
        </div>
      </section>
    </main>
  );
}
