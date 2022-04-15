import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import background from '../../images/background.png';

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks, AnchorNavLink } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${DesktopNavLinks} ${AnchorNavLink}, ${LogoLink} {
    ${tw`text-blue-900 hover:border-blue-700 hover:text-blue-700`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-blue-900`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("${background}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-10`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-6xl xl:text-6xl font-black text-blue-900 leading-snug -mt-24`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <AnchorNavLink href="#games">
        GAMES
      </AnchorNavLink>
      <AnchorNavLink href="#about">
        ABOUT US
      </AnchorNavLink>
      <AnchorNavLink href="#contact">
        SUPPORT
      </AnchorNavLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
          {/* <Heading style={{fontFamily: 'StopBullying'}}> */}
              WELCOME TO
              <br />
              BO BEAR GAMES
          </Heading>
        </Content>
      </HeroContainer>
    </Container>
  );
};
