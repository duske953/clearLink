/* eslint-disable react/no-unknown-property */
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Navbar from './components/Navbar';
import { pagePadding } from './styles/Base';
import { HeroCss } from './styles/Hero';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import Cta from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <section css={[pagePadding.mainPadding, HeroCss.mainSection]}>
        <header>
          <Navbar />
        </header>
        <Hero />
      </section>
      <SocialProof />
      <Testimonial />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
