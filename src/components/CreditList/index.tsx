import { styled } from "styled-components"
import { artistsAndCurators, studios } from "./data"
import creditBg from "../../img/credit-list/bg.webp"
import { breakpoints, theme } from "../../utils/theme"

const CreditListContainer = styled.div`
  width: 100%;
  padding: 72px 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  background: #3b3b3b;
  background-image: linear-gradient(
      135deg,
      rgba(10, 9, 44, 1) 0%,
      rgba(10, 9, 44, 0.1) 50%,
      rgba(10, 9, 44, 1) 100%
    ),
    url(${creditBg});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  * {
    color: ${theme.white};
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 72px 48px;
    gap: 72px;
  }
`

const CreditListContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: 80px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Headline = styled.h2`
  font-size: 3rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: 600;
  /* soft glow similar to the mock */
  text-shadow:
    0 0 8px rgba(255, 255, 255, 0.45),
    0 0 16px rgba(255, 255, 255, 0.35),
    0 0 32px rgba(255, 255, 255, 0.25);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.1));

  @media (max-width: 768px) {
    font-size: 38px !important;
    margin-bottom: 0 !important;
  }
`

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
  /* soft glow to match headline */
  text-shadow:
    0 0 6px rgba(255, 255, 255, 0.4),
    0 0 12px rgba(255, 255, 255, 0.3),
    0 0 24px rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.1));
`

const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${breakpoints.s}) {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }

  /* On mobile, make the first column (the section title) span both columns */
  @media (max-width: 768px) {
    &:first-child {
      grid-column: 1 / -1;
    }
  }
`

const Name = styled.div`
  font-size: 18px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${theme.white};

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`

const CreditListDescription = styled.p`
  text-transform: none !important;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  grid-column: span 2;
`

const CreditList = () => {
  // Split artists and curators into two columns
  const artistsColumn1 = artistsAndCurators.slice(
    0,
    Math.ceil(artistsAndCurators.length / 2)
  )
  const artistsColumn2 = artistsAndCurators.slice(
    Math.ceil(artistsAndCurators.length / 2)
  )

  // Split studios into two columns
  const studiosColumn1 = studios.slice(0, Math.ceil(studios.length / 2))
  const studiosColumn2 = studios.slice(Math.ceil(studios.length / 2))

  return (
    <CreditListContainer>
      <Headline>Credit List</Headline>
      <CreditListContent>
        <Section>
          <ColumnsContainer>
            <Column>
              <SectionTitle>Artists & Curators</SectionTitle>
            </Column>
            <Column>
              {artistsColumn1.map((name, index) => (
                <Name key={index}>{name}</Name>
              ))}
            </Column>
            <Column>
              {artistsColumn2.map((name, index) => (
                <Name key={index}>{name}</Name>
              ))}
            </Column>
          </ColumnsContainer>
        </Section>

        <Section>
          <ColumnsContainer>
            <Column>
              <SectionTitle>Studios</SectionTitle>
            </Column>
            <Column>
              {studiosColumn1.map((name, index) => (
                <Name key={index}>{name}</Name>
              ))}
            </Column>
            <Column>
              {studiosColumn2.map((name, index) => (
                <Name key={index}>{name}</Name>
              ))}
            </Column>
          </ColumnsContainer>
          <ColumnsContainer>
            <Column>
              <SectionTitle>(ﾉ◕ヮ◕)ﾉ:･ﾟ✧</SectionTitle>
            </Column>
            <CreditListDescription>
              Alongside the artists and studios listed here, Music Festival is
              made possible by the creativity and contributions of the
              Decentraland community.
            </CreditListDescription>
          </ColumnsContainer>
        </Section>
      </CreditListContent>
    </CreditListContainer>
  )
}

export { CreditList }
