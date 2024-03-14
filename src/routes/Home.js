import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Destination from "../components/Destination"
import Footer from "../components/Footer"
import Trip from "../components/Trip"
import ContactForm from "../components/ContactForm"

function Home(props) {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://mrwallpaper.com/images/hd/sri-lanka-tangalle-beach-aerial-sj84qckd6uwxgwey.jpg"
                title="Travel in Sri Lanka"
                text="Choose your favourite destination in the pearl of Indian Ocean."
                btnText="Get Plan"
                url="/"
                btnClass="show"
            />
            <div className="hero-text">
                <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            </div>
            
            <Destination />
            <Trip />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home