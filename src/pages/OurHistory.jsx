import "./OurHistory.css";
import historyHeroImg from '../images/history.jpg';
import historyHeritageImg from '../images/his.jpg';

function OurHistory() {
  const milestones = [
    {
      year: "1852",
      title: "The beginning",
      text: "During the California gold rush, Henry Wells and William Fargo founded Wells Fargo & Co., establishing the foundations of a long history in secure transportation and valuables handling.",
    },
    {
      year: "1905",
      title: "A new chapter",
      text: "Lee Loomis founded the Cleary Creek Commercial Company during the gold rush in Alaska.",
    },
    {
      year: "1925",
      title: "Loomis Armored Car Service",
      text: "Loomis Armored Car Service was formed, expanding specialist secure transportation services.",
    },
    {
      year: "1934",
      title: "Security expertise",
      text: "Erik Philip-Sorensen founded Helsingborgs Nattvakt in Helsingborg, Sweden.",
    },
    {
      year: "1960",
      title: "Wells Fargo Armored Services",
      text: "Wells Fargo Armored Services was established, strengthening the company's secure transportation capabilities.",
    },
    {
      year: "1972",
      title: "United under Securitas",
      text: "Companies owned by Erik Philip-Sorensen were united under the Securitas brand.",
    },
    {
      year: "1997",
      title: "Wells Fargo Armored",
      text: "Loomis acquired Wells Fargo Armored, further expanding its international security and transportation operations.",
    },
    {
      year: "2001",
      title: "Part of the Securitas Group",
      text: "Loomis, Fargo & Co. merged with the Securitas Group.",
    },
    {
      year: "2006",
      title: "The Loomis name",
      text: "Securitas separated its operations into independent security companies and Securitas Cash Handling Services took the name Loomis.",
    },
    {
      year: "2008",
      title: "Stock exchange listing",
      text: "Loomis was listed on the Nasdaq OMX Stockholm Stock Exchange and expanded through the acquisition of Keepway in France.",
    },
    {
      year: "2014",
      title: "International valuables logistics",
      text: "Loomis acquired VIA MAT Holding AG, expanding its service offering into international valuables logistics.",
    },
    {
      year: "2020",
      title: "Expanding cash solutions",
      text: "Loomis expanded into ATM outsourcing services and launched Loomis Pay in Denmark.",
    },
    {
      year: "2021",
      title: "Sustainability",
      text: "Loomis issued sustainability-linked bonds as part of its continued sustainability work.",
    },
    {
      year: "2022",
      title: "New strategy",
      text: "A new strategy and targets were established for the 2022–2024 period.",
    },
    {
      year: "2023",
      title: "Continued expansion",
      text: "Loomis expanded through several acquisitions, strengthening its automated solutions, third-party shipping and fintech capabilities.",
    },
    {
      year: "2024",
      title: "Moving forward",
      text: "Loomis continued expanding its technology and solutions through the acquisition of Hosteltáctil, a Spanish POS developer and solutions provider.",
    },
  ];

  return (
    <main className="history-page">

      {/* HERO — IMAGE */}
     
<section className="history-hero">

  <div
    className="history-hero-media"
    style={{ backgroundImage: `url(${historyHeroImg})` }}
  />

  <div className="history-container">

    <span className="history-label">
      OUR HISTORY
    </span>

    <h1>
      Moving
      <br />
      forward.
    </h1>

    <p>
      From our earliest beginnings to the operation
      we've built today, our story has always been
      about reliability, resilience and the people
      who move the world forward with us.
    </p>

  </div>
</section>
      {/* INTRO */}
     
<section className="history-intro">

  <div className="history-container history-intro-grid">

    <div
      className="history-intro-image"
      style={{ backgroundImage: `url(${historyHeritageImg})` }}
    />

    <div className="history-intro-content">

      <span className="history-side-label">
        OUR HERITAGE
      </span>

      <h2>
        A history of
        <br />
        moving things
        <br />
        forward.
      </h2>

      <p>
        Our history is built on more than a century
        of experience in secure transportation,
        valuables logistics and specialist services.
      </p>

      <p>
        From the early days of secure transportation
        to today's international logistics solutions,
        our business has continued to evolve with
        the needs of our customers.
      </p>

    </div>

  </div>

</section>


      {/* TIMELINE */}
      <section className="history-timeline">

        <div className="history-container">

          <div className="history-timeline-heading">

            <span className="history-label">
              OUR JOURNEY
            </span>

            <h2>
              Milestones.
            </h2>

          </div>


          <div className="history-list">

            {milestones.map((milestone, index) => (
              <article
                className="history-item"
                key={milestone.year}
              >

                <div className="history-year">
                  {milestone.year}
                </div>

                <div className="history-line">
                  <span></span>
                </div>

                <div className="history-item-content">

                  <span className="history-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {milestone.title}
                  </h3>

                  <p>
                    {milestone.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* CLOSING */}
      <section className="history-closing">

        <div className="history-container">

          <span className="history-label">
            OUR FUTURE
          </span>

          <h2>
            The journey
            <br />
            continues.
          </h2>

          <p>
            Built on experience and constantly adapting
            to a changing world, we continue to develop
            new solutions for the secure movement of
            valuable goods.
          </p>

        </div>

      </section>

    </main>
  );
}

export default OurHistory;