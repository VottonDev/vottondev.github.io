import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Votton's Personal Website</title>
        <meta name="title" content="Votton's Personal Website" />
        <meta charset="utf8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="css/styles.css" />
        <link
  rel = "apple-touch-icon"
  sizes = "180x180"
  href = "apple-touch-icon.png" / > {" "} < link
  rel = "icon"
  type = "image/png"
  sizes = "32x32"
  href = "favicon-32x32.png" / > {" "} < link
  rel = "icon"
  type = "image/png"
  sizes = "16x16"
  href = "favicon-16x16.png" / >
         <link rel = "manifest" href = "site.webmanifest" />
         <meta name = "description" content = "Votton's Personal Website." /><
         meta
  name = "keywords"
  content =
      "votton, programming, software development, system administration" / >
      <meta name = "author" content = "Votton" />
      <meta property = "og:type" content = "website" />
      <meta property = "og:url" content = "https://votton.pw/" />
      <meta property = "og:title" content = "Votton's Personal Website " />
      <meta property = "og:description" content =
           "Votton's Personal Website." /><
      /Head>
      <main>
        <img
          src="img/anime - left.png "
  class = " anime - left " / >
          <img src = "img/anime-right.png" class = "anime-right" /><header>
          <h1>Votton's Personal website</h1>{" "} <h2>servers,
  anonymity,
  and freedom<
      /h2>
          <p>
            I'm a Linux system administrator and a software developer. This
            website is for my contact details and the personal websites I host.
          </p>
          </header>
        <h3>sites</h3><ul><li>
          <a href = "https://kyouko.se">Kyouko.se /
          Kyot.me &
      mdash;
      Private file hosting</a>
          </li><li>
          <a href = "https://willard.network">Willard
              Network</a>
          </li><li>
          <a href = "https://top.gg/user/3553584536979439616">Two Discord bots(
              12K + servers)</a>
          </li>
          </ul>

        <h3>contact information</h3>

          <ul><li>e - mail &
      mdash;
      <a href = "mailto:me@votton.pw">me
      @votton.pw</a>
          </li><li>twitter &
      mdash;
      <a href = "https://twitter.com/Votton">Votton</a>
          </li>
      <li>telegram & mdash;
      <a href = "https://telegram.me/@Votton">@Votton</a>
          </li>
      <li>discord & mdash;
      Votton #3331 <
          /li>
          <li>
            ppg &mdash;{" "}
            <a
              href="https:/ /
              votton.pw / pgp.txt "
          >
          E498 4B0F AF77 E368 E372 AE3E C0A7 4994 265D 16D6 {
              " "}</a>
          </li>{" "}<li>keybase &
      mdash;
      <a href = "https://keybase.io/Votton">Votton</a>
          </li>
      <li>patreon & mdash;
      <a href = "https://patreon.com/Votton">Votton</a>
          </li>
      </ul>

        <video id="video" class="video" autoplay controls loop>
          <source
            id="video-src"
            src="audio/jojo
           .webm "
       type = " video /
              webm "
              />
      <source id = "video-src" src = "audio/jojo.mp4" type = "video/mp4" />
      </video>
      </main>< /div>
  );
}
