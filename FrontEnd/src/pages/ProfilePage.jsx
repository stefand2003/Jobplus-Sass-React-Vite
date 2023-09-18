import React from 'react';
import Nav from '../components/nav/nav';
import Hero from '../components/hero/hero';
import Container from '../components/container/container';
import Cookie from '../components/cookie/cookie';
import Footer from '../components/footer/footer';
import Profile from '../components/profile/profile';

export default function HomePage() {
  return (
    <>
      <section>
        <Nav />
        <Container>
          <Profile />
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
