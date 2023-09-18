import React from 'react';
import Container from '../components/container/container';
import Cookie from '../components/cookie/cookie';
import Footer from '../components/footer/footer';
import Login from '../components/login/login';
import HeroSimple from '../components/hero/hero_simple';

export default function LoginPage() {
  return (
    <>
      <section>
        <HeroSimple title="Login" />
        <Container>
          <Login />
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
