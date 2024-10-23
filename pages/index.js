import React from "react";
import Head from "next/head";

const icons = [
  { sizes: "57x57", href: "/apple-icon-57x57.png" },
  { sizes: "60x60", href: "/apple-icon-60x60.png" },
];

const videoUrl = "https://www.youtube.com/embed/8jpJM6nc6fE?autoplay=1";

const Home = () => (
  <div className="nier-container">
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
      <link href="https://fonts.googleapis.com/css2?family=Helvetica+Neue&display=swap" rel="stylesheet" />
    </Head>
    <header>
      <div className="machine-code">SYSTEM://root/home/votton</div>
      <h1>VOTTON INTERFACE v1.0</h1>
      <div className="loading-bar"></div>
      <h2>SYSTEM STATUS: ONLINE</h2>
      <p>
        [INITIALIZING PROFILE DATA...]<br/>
        {'>'} Linux system administrator and software developer<br/>
        {'>'} Primary function: Contact interface and personal network hub<br/>
        {'>'} Status: Operational
      </p>
    </header>
    <main>
      <h3>NETWORK NODES</h3>
      <div className="loading-bar"></div>
      <ul>
        <li>
          <a href="https://willard.network"> WILLARD_NETWORKS</a>
        </li>
      </ul>

      <h3>COMMUNICATION CHANNELS</h3>
      <div className="loading-bar"></div>
      <ul>
        <li>
          <a href="mailto:me@votton.pw"> E-MAIL_PROTOCOL :: me@votton.pw</a>
        </li>
        <li>
          TWITTER_LINK :: <a href="https://twitter.com/Votton">Votton</a>
        </li>
        <li>
          TELEGRAM_ID :: <a href="https://telegram.me/@Votton">@Votton</a>
        </li>
        <li>DISCORD_TAG :: Votton#3331</li>
        <li>
          GITHUB_REPO :: <a href="https://github.com/VottonDev">VottonDev</a>
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
    <div className="geometric-pattern"></div>
    <div className="noise"></div>
    <div className="corner corner-tl"></div>
    <div className="corner corner-tr"></div>
    <div className="corner corner-bl"></div>
    <div className="corner corner-br"></div>
  </div>
);

export default Home;
