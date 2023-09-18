import React from 'react';
import Nav from '../components/nav/nav';
import Hero from '../components/hero/hero';
import Container from '../components/container/container';
import Sector from '../components/sector/sector';
import Cookie from '../components/cookie/cookie';
import Footer from '../components/footer/footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Container>
        <Sector />
      </Container>
      <Cookie />
      <Footer />
    </>
  );
}
