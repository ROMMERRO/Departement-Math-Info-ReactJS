import React from 'react';
import './avisCard.css'

const AvisCard =()=>{
    return(
        <div>
            <div className="avis-info_container">
                <div className="container">
                    <h1>Titre de l'avis</h1> <br />
                    <h4>Auteur : <a href="localhost:3000">Mohamed OUFRAD</a></h4>
                    <hr width="500px" /> <br />
                        <div className="discrption">
                        <p> La discrption de l'avis et le piece join :
                        Essay
                        As the corpse went past the flies left the restaurant table in a cloud
                        and rushed after it, but they came back a few minutes later.
                        The little crowd of mourners-all men and boys, no women--threaded
                        their way across the market-place between the piles of pomegranates
                        and the taxis and the camels, wailing a short chant over and over
                        again. What really appeals to the flies is that the corpses here
                        are never put into coffins, they are merely wrapped in a piece of
                        rag and carried on a rough wooden bier on the shoulders of four friends.
                        When the friends get to the burying-ground they hack an oblong hole a
                        foot or two deep, dump the body in it and fling over it a little of the
                        dried-up, lumpy earth, which is like broken brick. No gravestone, no
                        name, no identifying mark of any kind. The burying-ground is merely a
                        huge waste of hummocky earth, like a derelict building-lot. After a month
                        or two no one can even be certain where his own relatives are buried.
                        </p>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default AvisCard;