import {
  BadgeContent,
  BulletIcon,
  BulletItem,
  BulletList,
  BulletText,
  ContentWrapper,
  Description,
  HeroContainer,
  LeftContent,
  RightBadge,
  RightContent,
  RightImage,
  StyledHero,
  TextGradient,
  Title,
} from "./styles"
import DclBullet from "../../img/about/bullet-icon.png"
import SubstreamImage from "../../img/about/substream.png"

const DCLMusicInfo = () => {
  return (
    <StyledHero id="about">
      <HeroContainer>
        <ContentWrapper>
          <LeftContent>
            <Title>
              EXPERIENCE
              <br />
              MUSIC FESTIVAL
            </Title>

            <Description>
              SUB/STREAM celebrates the rise of stream-native music, uniting
              VTubers, Twitch icons, digital-first musicians, and virtual bands
              in a full-scale performance experience.
            </Description>

            <BulletList>
              <BulletItem>
                <BulletIcon src={DclBullet} alt="" />
                <BulletText>
                  Discover <TextGradient>headline sets</TextGradient> from
                  stream-native stars on the Main and Live stages.
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletIcon src={DclBullet} alt="" />
                <BulletText>
                  Catch <TextGradient>8 digital fashion drops</TextGradient>{" "}
                  from the sky—collectible Wearables released live in sync with
                  epic light shows.
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletIcon src={DclBullet} alt="" />
                <BulletText>
                  Explore <TextGradient>12 immersive builds</TextGradient>{" "}
                  inspired by meme culture, fandoms, and the wild side of
                  streaming.
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletIcon src={DclBullet} alt="" />
                <BulletText>
                  Party in{" "}
                  <TextGradient>vibrant creator-built venues</TextGradient>,
                  hosted by the internet&apos;s most innovative music
                  communities.
                </BulletText>
              </BulletItem>
            </BulletList>
          </LeftContent>

          <RightContent>
            <RightImage src={SubstreamImage} alt="Substream" />
            <RightBadge>
              <BadgeContent>SUB/STREAM</BadgeContent>
            </RightBadge>
          </RightContent>
        </ContentWrapper>
      </HeroContainer>
    </StyledHero>
  )
}

export { DCLMusicInfo }
