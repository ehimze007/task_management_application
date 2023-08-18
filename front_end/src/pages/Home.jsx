import classes from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { FeaturedSection } from "../components/FeaturedSection";
import { LastSection } from "../components/LastSection";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <main className={classes.main}>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <LastSection />
      <Footer />
    </main>
  );
}
