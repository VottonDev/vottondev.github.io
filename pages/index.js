import React from "react";
import Head from "next/head";

const icons = [
  { sizes: "57x57", href: "/apple-icon-57x57.png" },
  { sizes: "60x60", href: "/apple-icon-60x60.png" },
];

const videoUrl = "https://www.youtube.com/embed/JZjpkJ_A3Jo?autoplay=1";

const Home = () => (
  <div>
    <Head>
      <title>Votton's Personal Website</title>
      <meta name="title" content="Votton's Personal Website" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="/css/styles.css" />
      {icons.map((icon, index) => (
        <link
          rel="apple-touch-icon"
          sizes={icon.sizes}
          href={icon.href}
          key={index}
        />
      ))}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="Votton's Personal Website." />
      <meta
        name="keywords"
        content="votton, programming, software development, system administration"
      />
      <meta name="author" content="Votton" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://votton.pw/" />
      <meta property="og:title" content="Votton's Personal Website" />
      <meta
        property="og:description"
        content="Contact details and other relevant information found here."
      />
    </Head>
    <header>
      <h1>Votton's Personal website</h1>
      <h2>servers, anonymity, and freedom</h2>
      <p>
        I'm a Linux system administrator and a software developer. This website
        is for my contact details and the personal websites I host.
      </p>
    </header>
    <main>
      <h3>sites</h3>
      <ul>
        <li>
          <a href="https://willard.network">Willard Networks</a>
        </li>
        <li>
          <a href="https://koalabot.uk">KoalaBot</a>
        </li>
        <li>
          <a href="https://top.gg/user/3553584536979439616">
            Two Discord bots (12K+ servers)
          </a>
        </li>
      </ul>

      <h3>contact information</h3>

      <ul>
        <li>
          e-mail &mdash; <a href="mailto:me@votton.pw">me@votton.pw</a>
        </li>
        <li>
          twitter &mdash; <a href="https://twitter.com/Votton">Votton</a>
        </li>
        <li>
          telegram &mdash; <a href="https://telegram.me/@Votton">@Votton</a>
        </li>
        <li>discord &mdash; Votton#3331</li>
        <li>
          ppg &mdash;{" "}
          <a href="https://votton.pw/pgp.txt">
            E498 4B0F AF77 E368 E372 AE3E C0A7 4994 265D 16D6
          </a>
        </li>
        <li>
          keybase &mdash; <a href="https://keybase.io/Votton">Votton</a>
        </li>
        <li>
          github &mdash; <a href="https://github.com/VottonDev">VottonDev</a>
        </li>
        <li>
          patreon &mdash; <a href="https://patreon.com/Votton">Votton</a>
        </li>
      </ul>
    </main>
    <footer>
      <div className="video-container">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </footer>
  </div>
);

export default Home;