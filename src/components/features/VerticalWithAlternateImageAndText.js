import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import appleBadgeImageSrc from "images/download-on-the-app-store.png";
import googleBadgeImageSrc from "images/google-play-badge.png"
import colorSortImg from "images/color_sort_1.png";
import scrambleImg from "images/wordscramble1.jpg";
import blastImg from "images/blast1.jpg";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-200`;
const Title = tw.h4`text-3xl font-bold text-blue-800`;
const Description = tw.p`mt-2 text-sm leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center sm:block`
const Link = styled.a`
  img {
    ${tw`inline-block h-12 mr-3`}
  }
`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: colorSortImg,
      subtitle: "Puzzle",
      title: "COLOR SORT",
      description:
        "Combine rings with the same color to win! A simple yet challenging puzzle game that can be enjoyed by everyone. Can you solve it?",
      url: "https://timerse.com"
    },

    {
      imageSrc: scrambleImg,
      subtitle: "Word",
      title: "WORD SCRAMBLE",
      description:
        "Unscramble words to crack the phrase, name the tune and more! This game will test your knowledge and puzzle solving abilities. If you love word games and puzzles, Word Scramble is the perfect brain tease for you.",
      url: "https://timerse.com"
    },

    {
      imageSrc: blastImg,
      subtitle: "Casual",
      title: "ADVENTURE BLAST",
      description:
        "Meet Jimmy, an adorable hand-drawn character. Jump from platform to platform, blast or dodge silly monsters and collect stars to unlock new exciting worlds. Reach new heights by blasting on rockets, propeller hats and more! How high can you jump?",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle id="games">Featured Games</HeadingTitle>
          <HeadingDescription>
            Here are some of our latest releases.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <LinksContainer>
                  <Link>
                    <img src={appleBadgeImageSrc} alt="" />
                  </Link>
                  <Link>
                    <img src={googleBadgeImageSrc} alt="" />
                  </Link>
                </LinksContainer>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
