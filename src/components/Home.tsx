import * as React from 'react';
import { styled } from '../stitches.config';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

export const Home: React.VFC = () => (
  <div>
    <P>Coming soon!</P>
    <P>
      <LinkContainer>
        <InteractiveLink to="/privacy">Privacy Policy</InteractiveLink>
      </LinkContainer>
    </P>
  </div>
);
