import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";
import GitHub from "../components/github/GitHub";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const Home = () => {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <GitHub />
                <FAQ />
                 <Contact />
                 <Footer />
            </main>
        </>
    );
};

export default Home;