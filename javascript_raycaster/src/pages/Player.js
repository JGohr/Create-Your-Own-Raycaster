import './Player.css';
import img_1 from '../images/P_IC/Creating Our Player/carbon(18).png';
import img_2 from '../images/P_IC/Creating Our Player/carbon(19).png';
import img_3 from '../images/P_IC/Creating Our Player/carbon(20).png';
import img_4 from '../images/P_IC/Creating Our Player/carbon(21).png';
import img_5 from '../images/P_IC/Creating Our Player/carbon(22).png';
import img_6 from '../images/P_IC/Creating The Input Controller/IC_1.png';
import img_7 from '../images/P_IC/Creating The Input Controller/IC_2.png';
import img_8 from '../images/P_IC/Creating The Input Controller/IC_3.png';
import img_9 from '../images/P_IC/Creating The Input Controller/IC_4.png';
import img_10 from '../images/P_IC/Creating The Input Controller/IC_5.png';
import img_11 from '../images/P_IC/Creating The Input Controller/IC_6.png';
import img_12 from '../images/P_IC/Creating The Input Controller/IC_7.png';
import img_13 from '../images/P_IC/Creating The Input Controller/IC_8.png';
import img_14 from '../images/P_IC/Creating The Input Controller/IC_9.png';
import img_16 from '../images/P_IC/Creating The Input Controller/IC_11.png';
import img_17 from '../images/P_IC/Creating The Input Controller/IC_12.png';
import img_18 from '../images/P_IC/Creating The Input Controller/IC_13.png';
import img_19 from '../images/P_IC/Creating The Input Controller/IC_14.png';
import img_20 from '../images/P_IC/Creating The Input Controller/IC_15.png';
import img_21 from '../images/P_IC/Creating The Input Controller/IC_16.png';
import img_22 from '../images/P_IC/Creating The Input Controller/IC_17.png';
import img_23 from '../images/P_IC/Creating The Input Controller/IC_18.png';
import img_24 from '../images/P_IC/Creating The Input Controller/IC_19.png';
import img_25 from '../images/P_IC/Creating The Input Controller/IC_20.png';
import img_26 from '../images/P_IC/Creating The Input Controller/IC_21.png';
import img_27 from '../images/P_IC/Creating The Input Controller/IC_22.png';
import img_28 from '../images/P_IC/Creating The Input Controller/IC_23.png';
import img_29 from '../images/P_IC/Creating The Input Controller/IC_24.png';
import img_30 from '../images/P_IC/Creating The Input Controller/IC_25.png';
import img_31 from '../images/P_IC/Creating The Input Controller/IC_26.png';
import img_32 from '../images/P_IC/Creating The Input Controller/IC_27.png';
import img_33 from '../images/P_IC/Creating The Input Controller/IC_28.png';
import img_34 from '../images/P_IC/Creating The Input Controller/IC_29.png';
import img_35 from '../images/P_IC/Creating The Input Controller/IC_30.png';
import img_36 from '../images/P_IC/Creating The Input Controller/IC_31.png';
import matrix from '../images/P_IC/Creating The Input Controller/matrix.svg';

import Header from '../comps/Header.js';
/*

        <div className='learning-text-box'>
            <h1 className='learning-text-title'>Lesson Introduction</h1>
            <p></p>
        </div>
        <img src={} alt='' />

*/

function Player() {
    return (<div className="player">
        <Header />
        <div className='learning-text-box'>
            <h1 className='learning-text-title'>Lesson Introduction</h1>
            <p>By the end of this section you will have a player object setup as well as
            a input controller to handle funcitonality like player movement, rotation & cell drawing within
            our tile map.<br/><br/>

            We will touch on the topics of vectors and the rotation matrix.
            </p>
        </div>
        <div className='learning-text-box'>
            <h1 className='learning-text-title'>Creating Our Player</h1>
            <p>In comes our PLAYER. Unfortunately we're are not making any sprites for this project, but nonetheless our little dot of a player will do wonders for now.<br/><br/>

            If we recall, we need this player to move around our scene, as well as rotate the direction it's facing.
            I've experimented with a couple of approach's how I want the user to be able to interact with the player, and I decided to go with:<br/><br/>

            - WASD for directional movement<br/>
            - Left/Right arrow keys for rotation.<br/>
            - Left Click for drawing cells<br/>

            Feel free to try out other key binds to your liking!<br/><br/>

            Before we get into anything around input management though, let's create a player in our code and render it on the canvas.
            I'm going to represent our Player as an object literal, you could put this into a class of some sort but... this is 2022 come on now<br/><br/>

            Inside our player object, let's assign two properties: position & direction<br/><br/>

            These properties values will be represented as objects containing x and y values.
            One being the coordinate position in our canvas, the other being a UNIT VECTOR. Let’s default our players initial direction to 0, -1<br/><br/>

            We will touch on the topics of vectors and the rotation matrix.</p>
        </div>
        <img src={img_1} alt='player object creation' />
        <p className='learning-text-box'>Unit vectors are just fancy science man lingo for a vector having x and y 
        values shrunk down to a range of -1 to 1;<br/><br/>

        For example, x = 1, y = 0 just means the direction is pointing in the positive ‘direction’ along the x axis.<br/><br/>

        y = 1, x = 0 in our case would actually be pointing down since our 2D space origin is actually the top left corner of the screen!<br/><br/>

        I don't want to dive too deep into vectors too much since we already have more math down the road, I'd recommend looking for some resources of vectors if needed.<br/><br/>
        The <b>Coding Train</b>, <b>Javidx9</b>, <b>Organic Chemistry Tutor</b> & <b>3Blue1Brown</b> are all great resources.
        
        So we have a coordinate position and direction vector attached to our player. Let's try and get this object on the canvas!<br/><br/>

        We can create a drawPlayer function, and this will be pretty straight forward.<br/><br/>

        We're going to be using context.arc() which is just a method that will allow us to draw a circle.<br/><br/>

        Before actually making this method call, remember how we set the context.fillStyle previously in the drawMap call()?<br/><br/>

        This attribute will still be the same until we re-assign it something else, we want some contrast between
        our player and the scene, so let's assign it something that will stand out... I'm going with red.</p>
        <img src={img_2} alt='drawPlayer function fillStyle' />

        <p className='learning-text-box'>
        The next thing context.arc requires us to do is make a call to context.beginPath().<br/><br/>

        Don't worry about the underlying meaning for this now, just know we need to call beginPath() whenever we want to render something new like a line or arc in this instance.<br/>
        Check out <a href='https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath'>MDN Context.beginPath()</a> for more info.<br/><br/>

        Context.arc takes in 5 arguments: x, y, radius, startAngle, endAngle<br/><br/>

        To start, lets pass Player.position.x and Player.position.y.<br/><br/>

        For our radius we want the players size to scale with our cell size, so I’m gonna be doing 1/6 of the cellSize variable<br/><br/>

        The last two angles are going to take radian values which are just another representation of degrees.<br/><br/>

        StartAngle can be 0 and since we want a full circle we need a radian value to represent 360 degrees.
        This actually is easy to get, we just multiply 2 * Math.PI. More info on radians later.<br/><br/>

        After all our args are filled out, we just need to call context.fill() to draw the previously created arc.</p>
        <img src={img_3} alt='drawPlayer beginpath' />

        <p className='learning-text-box'>Let's put our drawPlayer function in the render function and see what happens 
        in our canvas.</p>
        <img src={img_4} alt='adding drawPlayer to render function' />

        <p className='learning-text-box'>As you see in the top left corner, we have a red circle starting at 0, 0.
        We can actually give our player some initial value in the object definition to spawn it in the middle of the screen.<br/><br/>

        We can make this dynamic by initializing our players x and y positions equal to (mapWidth * cellSize) / 2.<br/><br/>

        Let's put this in the start function</p>
        <img src={img_5} alt='adding dynamic player position to start function' />

        <p className='learning-text-box'>We should probably add some way for us to interact with this player object.
        Time to make a <b>input controller</b>.</p>

        <div className='learning-text-box'>
            <h1 className='learning-text-title'>Creating The Input Controller</h1>
            <p>Using eventListeners we can detect when a input happens from the user such as key presses, mouse clicks, etc...<br/><br/>

                The approach we are going to take to keeping all these inputs in order is by creating a inputController object literal. This object is gonna contain keys represented as strings, inside each key we can store two values:<br/><br/>

                        - Pressed: A boolean value to keep track if the key is pressed<br/>
                        - Fn: A function to execute if the relative pressed boolean is true.<br/><br/>

                We can use eventListeners to access events related to our inputs, identify what
                those inputs are and toggle the pressed value attached to our inputController key to make sure the desired function executes at our tick rate.<br/><br/>

                I initially attempted this by using solely event listeners but due to the way that they are processed in the eventloop, it doesn't allow for us to have
                smooth input detection.<br/><br/>

                At this point, we need to think about what inputs we need to detect.<br/><br/>

                For player movement we are going to need: W, A, S, D<br/>
                For player rotation we are going to need: ArrowLeft, ArrowRight<br/>
                For interacting with our map we are going to need: Mousedown (And mouseup but that WONT be stored in the inputController)<br/><br/>

                Before we try to implement any form of movement logic, let's setup a good structure for our inputController.<br/><br/>

                For our player movement and rotation keys, we are going to be using event.code, this just returns a string representing the button that is pressed.
                Key presses such as W, A, S, D, Left Arrow & Right Arrow, all can be listened for using keydown, keyup event listeners.<br/><br/>

                The mouse down event listener is literally called 'mousedown',
                Since mousedown doesn't actually have a .code property, we are going to be identifying a press by accessing event.type, which is also a string.<br/><br/>

                I won't make you guys go search for the codes yourself since I already know them so here's a list of the ones we will need.<br/><br/>

                Event.code:<br/>
                    - W: "KeyW"<br/>
                    - S: "KeyS"<br/>
                    - D: "KeyD"<br/>
                    - A: "KeyA"<br/>
                    - Left Arrow: "ArrowLeft"<br/>
                    - Right Arrow: "ArrowRight"<br/><br/>

                Event.type for mousedown = 'mousedown'<br/><br/>

                We want to store all these codes as the keys in our inputController with an attached object as the value 
                containing the pressed boolean and fn function.<br/><br/>

                Here's how it should look:
            </p>
        </div>
        <img src={img_6} alt="input controller object" />
        <p className='learning-text-box'>We now need a way to toggle the pressed booleans for both the key presses and our mousedown.<br/><br/>

        For key presses, we can add a keydown event listener and check if the event.code is listed as a key in our inputController. 
        If so, we toggle that pressed boolean.<br/><br/>

        We can use the same logic for the keyup event, this time setting pressed to false. Since we only need to assign the listeners once, 
        let’s put them in the start function.</p>
        <img src={img_7} alt="input controller keydown event listeners" />
        <p className='learning-text-box'>For mouse down, the syntax is almost identical, this time just switching the event.code for event.type.<br/><br/>
        And lastly for our mouseup listener, we want to make sure we are directly accessing our mousedown key in the input controller, 
        then setting it's pressed to false.</p>
        <img src={img_8} alt="input controller mouse event listeners" />
        <p className='learning-text-box'>Sweet, we have a way to toggle the pressed boolean attached to all our movement keys & mouse clicks.

        With all of our listeners in place how do we actually execute the functionality if a pressed value is true?<br/><br/>

        This is the easy part, we just create a function called callInputController.<br/><br/>

        Inside this function we can use a object method called Object.keys. This will return all the keys in a list for the passed object. 
        Then using forEach, we can iterate over that list of keys
        checking if the value of pressed for each given key is true and calling that function.</p>
        <img src={img_9} alt="call input controller function" />
        <p className='learning-text-box'>To finish this off, just place the callInputController function inside the update function.</p>
        <img src={img_10} alt="place callInputController in Update" />
        <p className='learning-text-box'>Nice! Input controller all setup. We can test this functionality works by adding some console.logs into our input 
        controller functionality and pressing all our desired bindings.<br/><br/>

        This system is scalable so feel free to perform the same code for whatever bindings you may think you need.<br/><br/>
        
        Onto our movement logic.<br/><br/>

        Let's start with some basic WASD movement, specifically moving forwards and backwards.
        Since the player will be interacting in a first person POV, we want to make sure whatever key we press is 
        going to move relative to the direction we are facing.<br/><br/>

        W - forward<br/>
        S - backwards<br/>
        A - (-90) degrees to the left of the players direction vector<br/>
        D - 90 degrees to the right of the players direction vector<br/><br/>

        Diagonal movement will automatically be handled by the way we are going to setup our movement system.<br/><br/>

        Starting small, let's tackle moving forwards and backwards.<br/><br/>
        
        <b>Moving Forwards:</b><br/>
        We want to calculate the projected position we are going to be, relative to our direction vector. There will be two total calculations for now, 
        projected X and projected Y.<br/><br/>

        We can get these projected positions by saying: Player.position + Player.direction, this will move us in the direction
        we are facing BUT since our direction vector is a unit vector, it's going to be VERY slow.<br/><br/>

        Let's give our player object a speed property to use as a multiplier to make things a bit faster.</p>
        <img src={img_11} alt="assigning player speed property" />
        <p className='learning-text-box'>Now all we need to do is store those projected positions within variables and assign our 
        Players position x/y values equal to our newly projected positions.</p>
        <img src={img_12} alt="KeyW object in input controller" />
        <p className='learning-text-box'>Head back over to the canvas and we should be able to move forwards using W!<br/><br/>
        
        <b>Moving Backwards:</b><br/><br/>
        
        Luckily the backwards direction is actually the exact same code, except this time we want to negate the direction to have us move backwards.</p>
        <img src={img_13} alt="KeyS object in input controller" />
        <p className='learning-text-box'><b>Moving Left & Right:</b><br/><br/>

        Moving A/D is simple as well, but we're gonna want a couple helper functions to make our life a lot easier.<br/><br/>

        Similar to how we projected the position we wanted to move using W and S. We want to move left and right relative to the way we 
        are facing. We need to cache a rotated version of our current direction. This will be what we use to calculate our projected X and Y values.<br/><br/>

        We will need two helper functions: degToRadians() and rotateVector()<br/><br/>

            <b>degToRadians</b>: Converts any given degree amount to a radian value<br/>
            <b>rotateVector</b>: Given a vector and rotation amount, returns the rotated vector object<br/><br/>

        We will be looking at some trig functions down the road as well so having this degree conversion function is super useful<br/><br/>

        Start with degToRadians, it's extremely simple.<br/><br/>

        Let the function take in a degree value, we just need to return degree * (PI / 180)</p>
        <img src={img_14} alt="degToRadian function creation" />
        <p className='learning-text-box'>Now we can implement our rotateVector function, this will take in two arguments:
        the vector object we want to rotate & a radian value to rotate the vector by.<br/><br/>
                
        This function is gonna be using something called a rotation matrix.</p>
        <img src={matrix} alt="rotation matrix" style={{background: 'white'}} />
    </div>
    );
}

export default Player;