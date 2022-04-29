import { useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border: 1px solid red;
  justify-content: center;
  margin: 2rem;
`;

const EmployerNameListItem = styled.div`
  cursor: pointer;
  padding: 0.25rem 2rem;

  &:hover {
    background-color: #2c4463;
  }
`;

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
    achievements: [
      "Lead mobile development team in building a React Native application for users to browse and purchase vehicles",
    ],
  },
  {
    employer: "Cloudfit",
    timeframe: "May 2019 - Sept 2021",
    title: "Full Stack Developer",
    achievements: [],
  },
];

export default function WorkHistory() {
  const [selectedEmployer, setSelectedEmployer] = useState(data[0].employer);
  const employer = useMemo(
    () => data.find((val) => val.employer === selectedEmployer),
    [selectedEmployer]
  );
  return (
    <Container>
      <div style={{ flex: 1 }}>
        {data.map((val) => (
          <EmployerNameListItem
            key={val.employer}
            onClick={() => setSelectedEmployer(val.employer)}
          >
            <p>{val.employer}</p>
          </EmployerNameListItem>
        ))}
      </div>

      {employer && (
        <div style={{ flex: 3, padding: "1rem" }}>
          <p>
            {employer.title} at {employer.employer}
          </p>
          <p>{employer.timeframe}</p>
          <ul>
            {employer.achievements.map((val, i) => (
              <li key={i}>
                <p>{val}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}
