import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Trip from "../components/Trip"
import TripData from "../components/TripData"

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://donkaz.com/public/uploads/all/K4BHZBRJyfckr5uIleDXhb0Qfxlrrt7GX8KNHuti.png"
                title="Services"
                text=""
                url="/"

            />

            <Trip />

            <div className="trip">
                <div className="tripcard">
                    <TripData
                        image="https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.jpg?s=612x612&w=0&k=20&c=vcgZUUaLWpzdFg9Rw4hUTx5g1evILmY-CYtCe1G7SPc="
                        heading="Ella"
                        text=""
                    />
                    <TripData
                        image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/cover-for-trincomalee-tourist-attractions.jpg"
                        heading="Trincomalee"
                        text=""
                    />
                    <TripData
                        image="https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.jpg?s=612x612&w=0&k=20&c=vcgZUUaLWpzdFg9Rw4hUTx5g1evILmY-CYtCe1G7SPc="
                        heading="Ella"
                        text=""
                    />
                </div>
            </div>
        </>
    )
}

export default Service