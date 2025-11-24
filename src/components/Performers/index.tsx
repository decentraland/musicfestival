import {
  LeftContent,
  LeftContentDescription,
  LeftContentImage,
  LeftContentLogo,
  LeftContentTitle,
  LeftContentTitleSection,
  LineupName,
  LineupOverlay,
  LineupRow,
  LineupSeparator,
  PerformersContainer,
  PerformersContent,
  RightContent,
  RightContentImage,
} from "./styles"
import dclLogo from "../../img/music-festival/DCL_LOGO_25.png"
import performersDateImage from "../../img/performers/date.svg"
import performersImage from "../../img/performers/performers.webp"
import separatorIcon from "../../img/performers/separator.svg"

export const Performers = () => {
  const lineup = [
    "OfficeDrummer",
    "Vlouue",
    "OhhClaire",
    "Sarah Coponat",
    "Thug Shells",
    "MiaMakesMusic",
    "Steve Sai",
    "Stoney Eye",
    "MEMBA",
    "Henny",
    "DJ aKIDcalledMAKE",
    "Coppola",
    "NaNa The Ape",
    "Dr. Jaffle aka Billyteacoin",
    "Borg Music",
    "MetaDJ",
    "Dúo Dø",
    "Bully Meow",
    "YangMusic",
    "Crypt0m1notaur",
    "Austin De Chêne",
    "Silvio De Candia",
    "Dario Lotti & Sandro Sax",
    "Mike Russi",
  ]
  const rowSizes = [3, 2, 3, 3, 2, 2, 3, 3, 2, 2]
  const rows: string[][] = []
  let offset = 0
  rowSizes.forEach((size) => {
    rows.push(lineup.slice(offset, offset + size))
    offset += size
  })
  return (
    <PerformersContainer>
      <PerformersContent>
        <LeftContent>
          <LeftContentTitleSection>
            <LeftContentTitle>Meet the Performers</LeftContentTitle>
            <LeftContentDescription>
              These are the streamers, musicians, and virtual artists who are
              taking SUB/STREAM to the next level.
            </LeftContentDescription>
          </LeftContentTitleSection>
          <LeftContentLogo src={dclLogo} alt="Performers" />
          <LeftContentImage src={performersImage} alt="Performers" />
        </LeftContent>
        <RightContent>
          <LineupOverlay aria-hidden="true">
            {rows.map((row, rIdx) => (
              <LineupRow key={rIdx}>
                {row.map((name, i) => (
                  <span key={`${rIdx}-${i}`}>
                    <LineupName>{name}</LineupName>
                    {i < row.length - 1 && (
                      <LineupSeparator src={separatorIcon} alt="" />
                    )}
                  </span>
                ))}
              </LineupRow>
            ))}
          </LineupOverlay>
          <RightContentImage src={performersDateImage} />
        </RightContent>
      </PerformersContent>
    </PerformersContainer>
  )
}
