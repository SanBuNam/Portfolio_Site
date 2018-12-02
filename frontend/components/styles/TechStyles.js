import styled from "styled-components";

const TechDiv = styled.div`
  z-index: 2;
  grid-row: 4;
  grid-column: 1 / span 4;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  background: linear-gradient(rgba(33, 100, 244, 0.5), rgba(33, 100, 244, 0.5));
`;

const TechTitle = styled.div`
  z-index: 3;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 4;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  background-color: ${props => props.theme.offWhite};
`;

const IconsDiv = styled.div`
  z-index: 3;
  padding: 4rem 0;
  margin: 5rem auto;
  grid-row: 2;
  grid-column: 1 / span 4;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FrontDiv = styled.div`
  width: 100%;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const BackDiv = styled.div`
  width: 100%;
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  .prisma {
    width: 50%;
  }
`;

export { TechDiv, TechTitle, IconsDiv, FrontDiv, BackDiv };