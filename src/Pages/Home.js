import HomeGuernica from "../Images/home_guernica.jpg"
import "./Home.css"

const Home = () =>{
    return (
        <div className="Home">
            <h1>Hello</h1>
            <h2>Welcome to the Pablo Picasso, Guernica, 1937 app.</h2>
            <h3>Use this app to learn interesting information about the famous artwork and to test your - potentially - newly acquired knowledge through a short quiz.</h3>
            <h3>Click on 'About' to read the information and then click on 'Quiz' to test your knowledge.</h3>
            <img className="me" src={HomeGuernica}/>
        </div>
    )
}

export default Home;