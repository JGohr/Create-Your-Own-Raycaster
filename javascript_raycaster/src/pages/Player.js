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
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function Player() {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <p className='learning-text-box'>
        This may seem daunting at first but it can be mapped to code fairly easy.<br/><br/>

        All we are doing is taking our initial player direction values and multiplying them by either cosine or sin of the angle we want.<br/><br/>

        Our final product will be two rotated x and y values in coordiante space.<br/><br/>

        Let me show you the helper function in code so you can compare to the snippet above and hopefully see the resemblence.
        </p>
        <img src={img_16} alt="rotate vector function" />
        <p className='learning-text-box'>
        Since we don’t want to modify the existing vector passed in, we start by creating a newVector object to return on completion.<br/><br/>

        Paying close attention to the newVector assignment lines, we can see the arithmetic is identical to the right side of the rotation matrix snippet.<br/><br/>

        Given the initial values of our direction vector and a radian value to rotate by (theta), we multiply 
        both x and y by the corresponding matrix formula to retrieve a rotated version of the vector.<br/><br/>

        Imagine every time you want to rotate a vector you got to type out THAT, no thanks.<br/><br/>

        We got some helpers implemented so let's get back to the goal in mind.<br/><br/>

        Moving A and D will not differ that much from W and S.<br/><br/>

        With W and S we added our position and direction objects, then multiplied by a speed constant.<br/><br/>
        For A and D we can now cache a rotated version of our direction vector by either 90 degrees for right and -90 degrees for left.<br/><br/>

        Now we just do the same code as before, just substituting our current direction vector for the newly rotated version. 
        </p>
        <img src={img_17} alt="Key A and D input controller" />
        <p className='learning-text-box'>
        Head back over to our canvas and we should now be able to move in all directions, including diagonals!<br/><br/>

        Onto rotating our player.<br/><br/>

        We want to be able to rotate our player using our left and right arrow keys.<br/><br/>

        Pressing left will rotate the player direction in a negative angle increment. Pressing right will 
        perform the same exact way just swapping the signage of our increment to be positive.<br/><br/>

        Let's go to our player object and store this increment, I'll be calling it rotSpeed and giving it a value of .07<br/><br/>

        Remember, if that key is pressed this increment will be added 60 times per second, so keep that in mind when tweaking this program for your own use.
        </p>
        <img src={img_18} alt="player rotation speed property" />
        <p className='learning-text-box'>
        Heading back to our inputController, we should have two key values pairs with the following keycodes: ArrowLeft and ArrowRight<br/><br/>

        Since we don't want to directly interact with our Players direction vector when doing these calculations, let's create a newDirection vector object.<br/><br/>

        We then assign the rotated version of our direction vector (using our helper function) to our newDirection object.<br/><br/>

        Remember, when using the Player.rotSpeed property to assign the correct signage.<br/><br/>

        Assign the  new direction to our player direction and we’re done!
        </p>
        <img src={img_19} alt="player rotation speed property" />
        <p className='learning-text-box'>
        We can verify our rotation is working by using console.log().

        Later on when we render the rays being casted from the player it will become clear but for now just add a quick log inside each arrows function call.<br/><br/>

        Heading over to the canvas, we have the ability to move in all directions AND rotate our players direction smoothly! Awesome,
         we are really making some progress here.<br/><br/>

        There's one last thing we need to add to our input controller, which is having the ability to draw tiles.<br/><br/>

        We need a way to track the mouse position of our player. To be more specific, 
        we need to be able to track the exact cell in our map that our mouse is over.<br/><br/>

        This approach may be a bit hacky but it definitely gets the job done AND it's super easy to implement!<br/><br/>

        The objective here is to obtain a x and y coordinate related to the position of our cursor in the tile map. 
        This will allow us to index our array using the same method for our drawMap function.<br/><br/>

        <b>Overview of how we can achieve this:</b><br/>

        Using the ‘mousemove’ event listener, we can trigger a function call. Using IIFEs we can pass 
        the event object from that mouse move directly to the function.<br/><br/>

        This event object will give us the exact X and Y position of our mouse on the screen.<br/><br/>

        Here's where things get a little hackish.<br/><br/>

        We can then use a built in method on our canvas called getBoundingClientRect(), this will return a object that holds some useful values.<br/><br/>

        Such as: .left, .right. .top, .bottom. These are the space in pixels that our canvas is offset from the viewport.<br/><br/>

        For example, if our screen is 1000px wide and our canvas is centered and 500px wide.
        getBoundingClientRect() left and right values would be 250px each since there is 250px on either side of the canvas.<br/><br/>

        For a better understanding of getBoundingClientRect visit here: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect">MDN getBoundingClientRect</a><br/><br/>

        We can take our mouse position, subtract the canvas left and top values to get our position 
        within the actual tile map, assuming we are in it.<br/><br/>

        Lastly, like stated before we want to get the grid coordinates of our mouse position, 
        so we can divide both values by our cellSize and cast them to a int to remove any floating points.<br/><br/>

        We can then access any cell within our grid using the same indexing syntax as our drawMap, this time substituting for our mouseCell.
        worldMap[mouseCell.y * mapWidth + mouseCell.x]<br/><br/>

        Okay that was alot, let's try and put this into code.<br/><br/>

        Let's create a mouseCell property in our Player to keep track of what cell we're in.
        </p>
        <img src={img_20} alt="player mouse cell property" />
        <p className='learning-text-box'>
        We will need a function to call whenver this mousemove event happens so let’s tackle that first.<br/><br/>

        Start by creating a function called updateMousePosition. This will take receive a mousemove event from our event listener. We can call this ‘e’.
        </p>
        <img src={img_21} alt="update mouse position function" />
        <p className='learning-text-box'>
        We are going to need access to the object returned by canvas.getBoundingClientRect() 
        but we don’t need to re-call this method everytime our updateMousePosition is called.<br/><br/>

        Let’s declare a canvasRect variable at the top of our code and assign the returned object when our Init function is called.
        </p>
        <img src={img_22} alt="canvas rect declaration" />
        <p className='learning-text-box'>
        Time to implement our updateMousePosition function.<br/><br/>

        To start, let’s create a object name “tmpMouseCell” containing x and y properties,
         this will be the object we return to the player after calculations.<br/><br/>

        The event we passed to this function, represented as 'e' 
        has two values we can use to track our mouse position: clientX and clientY.<br/><br/>

        We can subtract canvasRect.left from our e.clientX & canvasRect.top 
        from our e.clientY to get the exact position within our map.<br/><br/>

        This results in our position in 2D space though, 
        we need these values to be converted down to coordinates in our grid.<br/><br/>

        Easy enough, if we just divide both values by cellSize we get a float with the exact coordinate
         for each axis. We can cast these to an integer to remove the remaining floating point (if any).<br/><br/>

        Assign this tmpMouseCell to Player.mouseCell and we're done!
        </p>
        <img src={img_23} alt="update mouse implementation" />
        <p className='learning-text-box'>
        With our mouse cell now being tracked, we can look back into our inputController
         and inside our mousedown key function we can index into our worldMap array. <br/><br/>

        We do need to perform one check though to avoid unwanted draws.<br/><br/>

        Based on the way we are tracking our mouse cell, we could get some x or y values
         that are greater or less than what our array can be indexed as.<br/><br/>

        We wouldn’t want to try and access worldMap[-15] or worldMap[478].<br/><br/>

        This can be resolved using a simple conditional before assigning the indexs value to 1.
        </p>
        <img src={img_24} alt="mousedown function" />
        <p className='learning-text-box'>
        Now going to our Init() function, assign an event listener for whenever the mouse moves.<br/><br/>
        Using IIFEs we can pass the event object into a updateMousePosition function like so:
        </p>
        <img src={img_25} alt="init function updatemouse position" />
        <p className='learning-text-box'>
        Let's head over to our canvas and see if everything's working. You should be able to click or even drag to paint cells into your tile map!<br/><br/>

        Initially, I could only click individual cells. Performing tile inserts this way just provides a better user experience.<br/><br/>

        Okay, having the ability to move, rotate and paint cells is great! But we definitely have some loose ends we need to tie up.<br/><br/>

        Three things:<br/>
            1. We need a way to reset the map whenever we want<br/>
            2. We want to create a border upon generating the map<br/>
            3. Since we are going to be rendering all of this into a 3D like view, we want a way for the player to collide with any cells.<br/><br/>

        We can handle the map reset and border generation fairly easy.<br/><br/>

        Since our world map is stored as an array, we can create a generateMap function which returns a newly created array.<br/><br/>

        Also within that same function, we can use some conditionals to ensure the map has a border on the outside no matter what size.<br/><br/>

        Lets create a function called generateMap.<br/>
        Inside this function we're gonna start by creating a new array called wm (short for world map) of size mapHeight * mapWidth.<br/><br/>

        We can also initialize all the indexs in this array to zero using .fill(0) at the end of this declaration.
        </p>
        <img src={img_26} alt="generate map function" />
        <p className='learning-text-box'>
        We're going to create a nested loop just like the one we used in our drawMap function.<br/><br/>

        Thinking about the problem at hand, we want to generate a border along our entire tile map.<br/>
        Diving deeper we need to assign all the tiles along the edges of our map to 1. We can achieve this by using some basic conditional statements.<br/><br/>

        If y == 0 meaning if we are on the top row.<br/>
        If y == mapHeight - 1 meaning if we are on the bottom row.<br/>
        If x == 0 meaning we are at the left most cell in a row.<br/>
        If x == mapWidth - 1 meaning we are at the last cell in a row.<br/><br/>

        Assign that value to 1 if any condition is met.<br/><br/>

        Lastly, return the new generated array.
        </p>
        <img src={img_27} alt="generate map function addition" />
        <p className='learning-text-box'>
        Now, instead of assigning our worldMap array to be filled with zeros, 
        we can call generateMap in our init function. Assigning the result to our worldMap variable.
        </p>
        <img src={img_28} alt="generate map function addition" />
        <p className='learning-text-box'>
        Refresh and we should see a newly generated map with all border cells being assigned to 1!<br/><br/>

        This works with all map sizes, feel free to mess around and test it out.<br/><br/>

        The reset functionality can be applied using the same function since it's returning an entire new array!<br/><br/>

        In our Start function, assign a click event listener to call generate map when our reset button is pressed. 
        Remember we gave this am ID of reset in the setup of the HTML.
        </p>
        <img src={img_29} alt="reset button set inside init" />
        <p className='learning-text-box'>
        Refresh, draw in some tiles and click our reset button. We can now generate a fresh map.<br/><br/>

        With map generation out of the way, the final step is to implement some form of collision detection for the player.
        We don't want our player to be able to run through walls as we're running around our scene.<br/><br/>

        Since our collision detection boils down to not having our player be able to walk through cells,
         we can get the projected cell that our player is going to enter by using our projected X and Y values.<br/><br/>

        Then check if that projected cells value != 1, if true we are clear to walk, if it's not true, 
        we don't update the players position at all which will halt movement.<br/><br/>

        To pull this off, we need to keep track of the current cell our player resides in.
        This can be achieved using the same approach as our mouse cell, just swapping the values a bit.<br/><br/>

        Go to our player object and create a new property called currentCell, this will be an object containing x and y properties.
        </p>
        <img src={img_30} alt="player current cell property" />
        <p className='learning-text-box'>
        Up to this point we haven't had any updating data within our player object. 
        Since we will want to track our cell position constantly, we need a function to update our player properties.<br/><br/>

        Let's call this updatePlayerProps.<br/><br/>

        Inside this function, we get the current cell coordinates by dividing our player position by our cell size, 
        then casting that result to an integer to remove floating points.
        </p>
        <img src={img_31} alt="updatePlayerProps function created" />
        <p className='learning-text-box'>
        Place this updatePlayerProps function underneath our callInputController call in Update().
        </p>
        <img src={img_32} alt="called updatePlayerProps in Update" />
        <p className='learning-text-box'>
        This currentCell property will be useful in future sections, but we can use the same logic to get a projected cell we are walking into.<br/><br/>

        Inside our movement logic we are currently projecting the x and y position we will be in our tile map.<br/><br/>

        We can use these values and check if they are valid before applying them to our player.<br/><br/>

        I'm going to be creating a temporary object in each function called projCell, 
        this will be the projected cell we are going to be in based on the x and y values calculated prior.<br/><br/>

        The code we are adding here is the exact same for all four movement binds.
        </p>
        <img src={img_33} alt="projected cell" />
        <p className='learning-text-box'>
        We now need a way to verify that our projectedCell is a valid cell to walk into. 
        This check is easy but for sematic reasons, I'm going to throw this in its own function.<br/><br/>

        Call it playerCollisionCheck.<br/><br/>

        We can let this function take in the projectedCell as a argument since that's what we will be checking.<br/><br/>

        Then we can check if the projectedCells value is not 1 by using the index syntax from drawMap once more.<br/><br/>

        We then just return a boolean to check if we are good to assign the projected position!
        </p>
        <img src={img_34} alt="player collision check function" />
        <p className='learning-text-box'>
        To top everything off, we now just wrap our Player.position assignments inside of a conditional,
        checking the return value of our function.<br/><br/>

        If it returns true, we can assign the new projected position. Else, the player doesn't move!.
        </p>
        <img src={img_35} alt="player collision check conditional" />
        <p className='learning-text-box'>
        Here’s a final view of our input controller for reference!<br/><br/>

        It was alot but this is the last we will deal with input managament in this instruction.
        </p>
        <img src={img_36} alt="inputController overview" />
        <p className='learning-text-box'>
        If all went well, you should be able to move the player, rotate the player, draw in and reset cells and also collide with those cells! Sick.<br/><br/>

        We have a lot more to cover but this is why I'm splitting this documentation into sections so you can take it piece by piece.
        </p>
        <button className='learning-button' onClick={() => {navigate('/fov')}}>Next Section {'>'}</button>
    </div>
    );
}

export default Player;