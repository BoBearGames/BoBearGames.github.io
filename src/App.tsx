import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Home } from './components/Home';
import { PageNotFound } from './components/PageNotFound';
import { PrivacyComponent } from './components/PrivacyComponent';
import { globalCss, styled } from './stitches.config';
import { DarkModeButton } from './ui/DarkModeButton';

const AppContainer = styled('div', {
  maxWidth: '540px',
  padding: '12px 15px 25px',
  margin: '0 auto',
});

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '18px',
});

const H1 = styled('h1', {
  fontSize: '26px',
  marginRight: '16px',
});

const HeaderIconContainer = styled('span', {
  width: '78px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  gap: '12px',
});

const BreadcrumbsNav = styled('nav', {
  margin: '18px 0',
});

export const App: React.VFC = () => {
  globalCss();

  return (
    <AppContainer>
      <HeaderContainer>
        <H1>Welcome to Bo Bear Games</H1>
        <HeaderIconContainer>
          <DarkModeButton />
        </HeaderIconContainer>
      </HeaderContainer>

      <BreadcrumbsNav>
        <Breadcrumbs />
      </BreadcrumbsNav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy" component={PrivacyComponent} />
        <Route component={PageNotFound} />
      </Switch>
    </AppContainer>
  );
};
