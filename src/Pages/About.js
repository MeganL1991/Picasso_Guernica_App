import AboutGuernica from "../Images/about_guernica.jpg"
import "./About.css"

const About = () =>{
    return (
        <div className="About">
            <img className="aboutguernica" src={AboutGuernica}/>
            <h1>Did you know...</h1>
            <p>
            1. Picasso, who rarely mixed art and politics, painted Guernica as a reaction to the 1937 bombing of the town, situated within Basque Country, Spain, by the fascist Spanish army and its German and Italian allies.
            </p>
            <p>
            2. Women are the main characters in Guernica. One might suggest that women represent life and pain, and this could be why Picasso used women figures to convey the agony in Guernica.
            </p>
            <p>
            3. The painting was not always in greyscale. Using unadorned shades of grey, white and blue-black, Picasso expresses the despondency of the aftermath of the bombing.
            </p>
            <p>
            4. It inspired a biting exchange between Picasso and a Gestapo officer. A German Gestapo officer allegedly asked him, about a photograph of the painting, “Did you do that?” Picasso responded, “No, you did.”
            </p>
        </div>
    )
}

export default About;
