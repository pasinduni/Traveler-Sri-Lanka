import "./Trip.css";
import TripData from "./TripData";
import Hero from "./Hero";

function Trip(props) {
    return (
        <>
            <div className="trip">
                <h1>Recent Trips</h1>
                <p>Choose Where You Want to go.</p>

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
                        image="https://media.timeout.com/images/103943968/750/422/image.jpg"
                        heading="Kandy"
                        text=""
                    />
                </div>
                <a href="./service">
                <button className="btn">See More</button></a>
            </div>
        </>
    );
}

export default Trip;