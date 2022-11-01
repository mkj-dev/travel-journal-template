import React from "react"
import "../css/Journal.css"
import locationPin from '../images/location_pin.svg'

export default function Journal(props) {
    return (
        <section className="journal">
                <img className="journal-photo" src={props.photo} />
                <div className="journal-post">
                    <div className="journal-location">
                        <img src={locationPin} alt="Location pin" className="location-pin"/>
                        <h3 className="location-country">{props.country}<a href="#" className="location-link"> View on Google Maps</a></h3>
                    </div>
                    <h2 className="location-place">{props.place}</h2>
                    <span className="visit-date">{props.visitDate}</span>
                    <p className="journal-information">{props.information}</p>
                </div>
        </section>
    )
}