import { useNavigate } from 'react-router';
import './Intro.css';

function Intro() {

    let navigate = useNavigate();

    return(
        <div className="intro">
            <header className='intro-header'>
                <div className='intro-header-title'>
                    <h1>Create Your Own Raycaster</h1>
                    <h2>Direct questions to <a href='https://twitter.com/devByPura'>@devByPura</a></h2>
                </div>
                <div className='intro-header-links'>
                    <a href='https://github.com/JGohr/TileMap-Raycaster'>Github Repo</a>
                    <a onClick={() => {navigate('/demo')}} href=''>Demo</a>
                </div>
            </header>
            <div className='intro-body'>
                <div className='learning-nav-box'>
                    Nav Box
                    <ul className='nav-box-list'>

                    </ul>
                </div>
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
                    <ul className='learning-text-list'>
                        <li>Pythagorean Theorem || <a href=''>Youtube</a> or <a href="">Article</a></li>
                        <li>2D Vectors || <a href=''>Youtube</a> or <a href="">Article</a></li>
                        <li>Scalar Projection || <a href=''>Youtube</a> or <a href="">Article</a></li>
                        <li>Rotating Vectors w/ Rotation Matrix || <a href=''>Youtube</a> or <a href="">Article</a></li>
                        <li>DDA Line Drawing Algorithm || <a href=''>Youtube</a> or <a href="">Article</a></li>
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