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

const Employment = () => {
  return (
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
  )
}

export default Employment;
