import React from 'react';
import Nav from '../components/nav/nav';
import Container from '../components/container/container';
import Cookie from '../components/cookie/cookie';
import Footer from '../components/footer/footer';
import Register from '../components/register/register';
import HeroSimple from '../components/hero/hero_simple';

export default function HomePage() {
  return (
    <>
      <section>
        <HeroSimple title="Register" />
        <Container>
          <Register />
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
