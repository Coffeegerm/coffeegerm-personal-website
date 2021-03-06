import { useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  margin: 2rem;
`;

const EmployerNameListItem = styled.div`
  cursor: pointer;
  padding: 0.25rem 2rem 0.25rem 1rem;

  &:hover {
    background-color: #2c4463;
  }
`;

const data = [
  {
    employer: "Pingboard",
    timeframe: "May 2022 - Present",
    title: "Front end developer",
    achievements: [
      "Help improve company culture with facilitated conversation about our values and what we as a company want to represent.",
    ],
  },
  {
    employer: "CarLotz",
    timeframe: "Sept 2021 - April 2022",
    title: "Front end developer",
    achievements: [
      "Lead mobile development team in building a React Native application for users to browse and purchase vehicles",
      "Mentor junior engineers with paired programming sessions to assist in their growth and learning.",
    ],
  },
  {
    employer: "Cloudfit",
    timeframe: "May 2019 - Sept 2021",
    title: "Full stack developer",
    achievements: [
      "Moved a 70 year old pest company from using an IBM mainframe as their central place of data to the Cloud using Azure.",
      "Created a React Native application to allow field techs to track their work while servicing a location.",
      "Created a framework that used time signatures and layers to build server mutations so allow for a fully offline mobile application",
    ],
  },
];

export default function WorkHistory() {
  const [selectedEmployer, setSelectedEmployer] = useState<string>(
    data[0].employer
  );
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
            style={{
              color: selectedEmployer === val.employer ? "#9BC4BC" : "white",
            }}
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
