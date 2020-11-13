import React, {useState} from "react";
import TinderCard from "react-tinder-card"
import  "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Köttbullar',
            url: "https://assets.icanet.se/q_auto,f_auto/imagevaultfiles/id_101413/cf_259/klassiska-kottbullar-712807.jpg"
        },
        {
            name: "Surströmmning",
            url: "https://nordicwellness.se/media/2124595/surstromming.png"
        }
    ]);
    return <div className="tinderCards">
        <div className="tinderCards_cardContainer">
        {people.map(person => (
            <TinderCard
            className = "Swipe"
            key={character.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
            >

             <div
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
             >

                 <h3>{person.name}</h3>
             </div>

            </TinderCard>
        ))}
        </div>
    </div>

}

export default TinderCards;