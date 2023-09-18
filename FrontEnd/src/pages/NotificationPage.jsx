import React from 'react';
import Nav from '../components/nav/nav';
import Hero from '../components/hero/hero';
import Container from '../components/container/container';
import Cookie from '../components/cookie/cookie';
import Footer from '../components/footer/footer';
import ListingFilter from '../components/listings_filter/listings_fillter';
import Listings from '../components/listings/listings';
import Filter from '../components/filter/filter';

export default function NotificationPage() {
  return (
    <>
      <section>
        <Nav />
        <Hero />
        <Container>
          <ListingFilter>
            <Filter />
            <Listings />
          </ListingFilter>
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
