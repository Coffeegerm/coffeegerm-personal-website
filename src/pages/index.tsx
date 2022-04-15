import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const PROJECTS = [
  {
    id: "1",
    url: "https://github.com/Coffeegerm/portfolio",
    name: "Portfolio",
    description: "This very website! I used Gatsby and React to build it!",
    label: "Repository",
  },
  {
    id: "2",
    url: "https://github.com/Coffeegerm/GlucoseGuide",
    name: "Glucose Guide",
    description:
      "Android Application to assist Diabetics in keeping track of their blood sugars and insulin intake.",
    label: "Repository",
  },
  {
    id: "3",
    url: "https://github.com/Coffeegerm/BetterBarista",
    name: "Better Barista",
    description:
      "A simple application to show users the beauty of making well crafted coffee at home.",
    label: "Repository",
  },
  {
    id: "4",
    url: "http://www.randdiron.com",
    name: "R and D Iron",
    description:
      "A single page application built for a local welding company to allow clients to contact them via a form entry and to display photos of previous work.",
    label: "Site",
  },
  {
    id: "5",
    url: "https://github.com/Coffeegerm/sarcasti-ball",
    name: "Sarcasti Ball",
    description:
      "Silly application using Express Node server and React to give you a sarcastic response from a magic 8 ball",
    label: "Repository",
  },
];

const idCount = 0;

const EMPLOYMENT_HISTORY = [
  {
    id: idCount + 1,
    timeFrame: "May, 2022 - Present",
    company: "Pingboard",
    jobTitle: "Mobile Development Engineer",
    description: "",
  },
  {
    id: idCount + 1,
    timeFrame: "Sept, 2019 - April 2022",
    company: "CarLotz",
    jobTitle: "Software Development Engineer",
    description: "",
  },
  {
    id: idCount + 1,
    timeFrame: "May, 2019 - August, 2021",
    company: "CloudFit Software",
    jobTitle: "Software Development Engineer",
    description:
      "Working on a team of developers we used React Native, React, and C# to create incredibly looking applications for multiple clients and implemented ways to help bring them from the days of paper management to the modern day cloud solution.",
  },
  {
    id: idCount + 1,
    timeFrame: "January, 2019 - May, 2019",
    company: "Belcan",
    jobTitle: "Supervisor of Windows 10 Migration",
    description:
      "I supervised the migration of a Volvo plant from using Windows 7 to Windows 10. With one other individual we migrated 963 desktops and laptops to Windows 10.",
  },
  {
    id: idCount + 1,
    timeFrame: "June, 2018 - December, 2018",
    company: "Virginia Tech Transportation Institute",
    jobTitle: "IT Support",
    description:
      "Provided support for researchers and staff at the Virginia Tech Transportation Institute with any technical problems that they may come across. This ranged from software issues to full computer or component replacements.",
  },
];

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <section id="one">
        <header className="major">
          <h2>
            &quot;The quieter you become,
            <br />
            the more you can hear&quot; - Ram Dass
          </h2>
        </header>

        <p>
          I started programming when I was 15 years old and never stopped
          breaking and fixing, reading and writing, and most importantly;
          learning. Programming has become more of a way of life than simply a
          job or a hobby, it&apos;s become a focal point of who I am as a
          person.
          <br />
          Besides programming I do other things too! (Shocking, I know) I enjoy
          playing Magic: The Gathering, reading, playing a few games here and
          there, searching for new beers to try, as well as for the perfect Tom
          Collins.
        </p>

        <ul className="actions">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/uses">Uses</Link>
          </li>
        </ul>
      </section>

      <section id="two">
        <h2>Personal Projects</h2>

        <div className="row">
          {PROJECTS.map(({ name, description, url, label }) => (
            <>
              <article className="6u 12u$(xsmall) work-item">
                <h3>{name}</h3>
                <p>{description}</p>
                <a
                  className="fit button slightMarginToTop"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </article>
            </>
          ))}
        </div>

        <ul className="actions">
          <li>
            <a
              href="https://github.com/Coffeegerm"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Full Portfolio
            </a>
          </li>
        </ul>
      </section>

      <section id="three">
        <h2>Employment History</h2>
        <div className="row">
          {EMPLOYMENT_HISTORY.map(
            ({ company, timeFrame, jobTitle, description }) => (
              <>
                <article className="6u 12u$(xsmall) work-item">
                  <h2>
                    <strong>{company}</strong>
                  </h2>
                  <p>{timeFrame}</p>
                  <h3>{jobTitle}</h3>
                  <p>{description}</p>
                </article>
              </>
            )
          )}
        </div>
      </section>

      <section id="four">
      <h2>Talk to Me</h2>
      <p>
        If interested in communicating with me, feel free to send me a message
        through Twitter or an email. I&apos;m always willing to chat about code
        or other things!
      </p>
      <div className="row">
        <div className="8u 12u$(small)">
          <form
            action={`mailto:dyarzebinski97@gmail.com?subject=Let's Talk!`}
            method="POST"
            encType="text/plain"
          >
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  value={name}
                />
              </div>
              <div className="6u 12u$(xsmall)">
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                />
              </div>
              <div className="12u">
                <textarea
                  name="Message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  value={message}
                />
              </div>
            </div>
            <ul className="actions slightMarginToTop">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </div>

        <div className="4u 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
              Virginia
              <br />
              United States
            </li>
            <li>
              <h3 className="icon fa-mobile">
                <span className="label">Phone</span>
              </h3>
              434-426-5270
            </li>
            <li>
              <h3 className="icon fa-envelope-o">
                <span className="label">Email</span>
              </h3>
              <a href="mailto:dyarzebinski97@gmail.com">
                dyarzebinski97@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
