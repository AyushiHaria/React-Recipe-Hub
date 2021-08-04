import React from 'react'
import "./recipeTile.css"

export default function recipeTile({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|png|gif)$/) != null &&         
        (          //this means that if the img matches any of these types then the below div will run, && is written to show that if it doesn't match with these types then below div won't run.
        <div className="recipeTile" onClick={() => {
            window.open(recipe["recipe"]["url"]);
        }}>
            <img className="recipeTile__img" src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]} />
            <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
        </div>
        )
    )
}
