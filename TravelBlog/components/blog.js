import React from "react"

export default function Blog(props){
    console.log(props)
    return(
        <section className="blog--entry">
         <img className ="blog--img"
                src={`../images/${props.image}`} 
            />
            <div className="blog--desc">
            <img src="./images/location.svg" className="blog--logo" />
            <h3 className="blog--location">{props.location}</h3>
            <a href={props.googleMapsUrl} className="blog--link">View it on Google maps</a>
            <h1 className="blog--title">{props.title}</h1>
            <h4 className="blog--date">{props.startDate} - {props.endDate}</h4>
            <p className="blog--description">{props.description}</p>
            </div>
            </section>
    )
}