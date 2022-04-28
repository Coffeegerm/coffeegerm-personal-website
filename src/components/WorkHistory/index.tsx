const data = [
  {
    employer: "Pingboard",
    timeframe: "May 2022 - Present",
    title: "Front end Developer",
    achievements: [],
  },
  {
    employer: "CarLotz",
    timeframe: "Sept 2021 - April 2022",
    title: "Front end Developer",
    achievements: [],
  },
  {
    employer: "Cloudfit",
    timeframe: "May 2019 - Sept 2021",
    title: "Full Stack Developer",
    achievements: [],
  },
];

export default function WorkHistory() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>List</div>
      <div>Details</div>
    </div>
  );
}
