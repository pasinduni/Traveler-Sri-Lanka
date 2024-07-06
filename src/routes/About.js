import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://yeadimtours.com/wp-content/uploads/2020/01/%D7%A7%D7%95%D7%9C%D7%90%D7%96-%D7%A1%D7%A8%D7%99-%D7%9C%D7%A0%D7%A7%D7%94-1.jpg"
                title="Why You Visit Us?"
                text="A Land Worth Visiting"
                btnText="Get Plan"
                url="/"
                btnClass="show"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About