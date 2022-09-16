import { useNavigate } from 'react-router';
import './Intro.css';
import Header from '../comps/Header';

function Intro() {

    let navigate = useNavigate();

    return(
        <div className="intro">
            <Header />
            <div className='intro-body'>
                <div className="learning-text-box">
                    <h1 className='learning-text-title'>A Brief Overview On Raycasting</h1>
                    <p className='learning-text-body'>Raycasting: A computer graphics rendering technique used to bring 2D maps alive 
                    into a psuedo-3D perspective<br/><br/>
                    
                    The power of raycasting was first showcased in the early days of game developement by a well known project called
                    "Wolfenstein3D". Opening the eyes for computer fanatics and video game lovers to what was possible as well as
                    setting a path for future developments down the road.<br/><br/>
                    
                    Conceptually, raycasting is casting a single ray in a given direction searching for collision. In the case of 
                    collision, it renders a column of pixels onto the screen. This technique was extremely useful for developers 
                    to minimize computation in the early days of computers.<br/><br/>
                    
                    Note this concept is not to be confued with "Ray Tracing", the more advanced version of this operation typically
                    used in high end development we see in modern games today.</p>
                </div>
                <div className="learning-text-box">
                    <h1 className='learning-text-title'>Concepts Used In This Article</h1>
                    <p className='learning-text-body'>We're going to be covering a few basic math concepts within this tutorial. If any of these
                    concepts seem unknown, I'd reccomend using these resources as a refresher.<br/><br/></p>
                    <ul className='learning-text-list'>
                        <li>Pythagorean Theorem - <a href="https://www.youtube.com/watch?v=uthjpYKD7Ng&ab_channel=MathHelp.com" target={"_blank"}>Youtube</a> or <a href="https://byjus.com/maths/pythagoras-theorem/" target={"_blank"}>Article</a></li>
                        <li>2D Vectors - <a href='https://www.youtube.com/watch?v=wXI9_olSrqo&ab_channel=Brackeys' target={"_blank"}>Youtube</a> or <a href="https://www.gamedev.net/articles/programming/math-and-physics/practical-use-of-vector-math-in-games-r2968/" target={"_blank"}>Article</a></li>
                        <li>Scalar Projection - <a href='https://www.youtube.com/watch?v=_ENEsV_kNx8&ab_channel=TheCodingTrain' target={"_blank"}>Youtube</a> or <a href="https://www.nagwa.com/en/explainers/792181370490/" target={"_blank"}>Article</a></li>
                        <li>Rotating Vectors w/ Rotation Matrix - <a href='https://www.youtube.com/watch?v=a59YQ4qe7mE&ab_channel=Udacity' target={"_blank"}>Youtube</a> or <a href="https://en.wikipedia.org/wiki/Rotation_matrix" target={"_blank"}>Article</a></li>
                        <li>DDA Line Drawing Algorithm - <a href='https://www.youtube.com/watch?v=W5P8GlaEOSI&ab_channel=AbdulBari' target={"_blank"}>Youtube</a> or <a href="https://medium.com/geekculture/dda-line-drawing-algorithm-be9f069921cf" target={"_blank"}>Article</a></li>
                    </ul>
                </div>
                <div className='learning-text-box'>
                    <h1 className='learning-text-title'>Techniques For Solving Complex/New Problems</h1>
                    <p className='learning-text-body'>
                    Learning new material can be extremely difficult. The way I’m going to approach this
                    material is broken up into different sections to help ease some of that headache.<br/><br/>
                    The most important thing I can say is to split your problems into smaller problems!<br/><br/>

                    Don’t understand something? Find out exactly what it is you don’t understand and hyperfocus on that.<br/>

                    Once you get that knowledge concrete in your mind, move onto the next sub-problem.
                    This method has helped me so much along my self-learning  journey and I know it will for you too!</p>
                </div>
                <button onClick={() => {navigate('/setup')}} className='learning-button'>Next Section</button>
            </div>
        </div>
    );
};

export default Intro;