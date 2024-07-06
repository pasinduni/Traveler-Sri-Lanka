import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

function Contact(props) {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://media.istockphoto.com/id/1181382649/photo/colombo-sri-lanka-december-05-2018-view-of-the-colombo-city-skyline-with-modern-architecture.jpg?s=612x612&w=0&k=20&c=XIS9COAwhGXkQYqGKHcabMEpc64B_uwT2utuonAoWl0="
                title="Contact Us for More Details"
                text=""
                btnText="Get Plan"
                url="/"
                btnClass="show"
            />
            <div className="hero-text">
                <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            </div>

            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact