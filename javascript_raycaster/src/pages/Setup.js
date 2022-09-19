import './Setup.css';
import Header from "../comps/Header.js";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import IMG_HTMLSETUP from '../images/Setup/Setting Up Our HTML/carbon(4).png';
import img_2 from '../images/Setup/Creating A Game Loop/js.png';
import img_3 from '../images/Setup/Creating A Game Loop/carbon(5).png';
import img_4 from '../images/Setup/Creating A Game Loop/carbon(6).png';
import img_5 from '../images/Setup/Creating A Game Loop/carbon(7).png';
import img_6 from '../images/Setup/Rendering The Tile Map/carbon(8).png';
import img_7 from '../images/Setup/Rendering The Tile Map/carbon(9).png';
import img_8 from '../images/Setup/Rendering The Tile Map/carbon(10).png';
import img_9 from '../images/Setup/Rendering The Tile Map/carbon(11).png';
import img_10 from '../images/Setup/Rendering The Tile Map/carbon(13).png';
import img_11 from '../images/Setup/Rendering The Tile Map/carbon(14).png';
import img_12 from '../images/Setup/Rendering The Tile Map/carbon(16).png';
import img_13 from '../images/Setup/Rendering The Tile Map/carbon(17).png';

function Setup() {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className='setup'>
            <Header />
            <div className='learning-nav-box'>
                <ul className='nav-box-list'>
                    <li style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Section Breakdown</li>
                    <li><Link to="intro" smooth={true} offset={-125}>Lesson Intro</Link></li>
                    <li><Link to="html" smooth={true} offset={-125}>HTML Setup</Link></li>
                    <li><Link to="game_loop" smooth={true} offset={-125}>Creating The Game Loop</Link></li>
                    <li><Link to="tile_map" smooth={true} offset={-125}>Rendering The Tile Map</Link></li>
                </ul>
            </div>
            <div name="intro" className='learning-text-box'>
                <h1 className='learning-text-title'>Lesson Introduction</h1>
                <p className='learning-text-body'>By the end of this section you will have a simple HTML document setup,
                a proper game loop structure & functionality to create and render a tilemap into the scene.</p>
            </div>
            <div name="html" className='learning-text-box'>
                <h1 className='learning-text-title'>Setting Up Our HTML</h1>
                <p className='learning-text-body'>There wont be much HTML in this course so I’m just going to give you the few
                elements we need now. All we have is a emmet generated HTML skeleton with:</p>
                <ul className='learning-text-list' id='setup-list'>
                    <li>Two Canvas Elements w/ IDs of “grid” and “render”</li>
                    <li>One Button Element w/ an ID of “reset”</li>
                    <li>Two scripts: One is for the actual raycasting operation, the second is optional if you want to 
                    do any other logic within the site.</li>
                </ul>
            </div>
            <img src={IMG_HTMLSETUP} alt="HTML SETUP IMAGE" />
            <div name="game_loop" className='learning-text-box'>
                <h1 className='learning-text-title'>Creating A Game Loop</h1>
                <p className='learning-text-body'>Since we will be constantly needing to update data and render graphics based on that data, 
                we're gonna need some kind of structure to control the flow.
                Let's set up a basic game loop to handle everything accordingly.<br/><br/>
                
                Game loops for anyone unfamiliar, are just a set of functions executed on startup 
                and then constantly executed on a defined tick rate.<br/><br/>
                
                Let's setup a basic game loop in our raycaster.js!<br/><br/>
                
                Now there's alot of opinions on how a game loop should be structured, for our purposes we really only need 
                three functions.<br/><br/>
                
                - Init<br/>
                - Update<br/>
                - Render<br/><br/>
                
                Start will be a single function call to setup any data we need that should only be called once.<br/>
                Update & Render will be the functions being called on a defined interval. 
                They are gonna handle updating all the data and displaying graphics.<br/><br/>
                
                To start, let's just define these three main functions.</p>
            </div>
            <img src={img_2} alt="setting up three core functions" />
            <p className='learning-text-box'>Now, let's setup a load event listener on our window object. 
            AddEventListener will take an IIFE (Immediately Invoked Function Expression) as the second argument.<br/><br/>
            
            Inside this function, let's first make a single call to our Init() function. 
            This will make sure the functions only being executed once on load.
            </p>
            <img src={img_3} alt="load event listener" />
            <p className='learning-text-box'>Next, we can take advantage of the setInterval() function to call our Update and 
            Render functions at any rate we want.<br/><br/>
            
            This rate is usually referred to as the 'Tick Rate' in game engines. This can really be any value we want but stepping
            back to think, we want to find a good balance between creating a smooth animation on our screen for the user, 
            while keeping the function calls to a minimum to maximize performance.<br/><br/>
            
            Feel free to use whatever values you want but for this explanation, we're gonna stick with 60 frames per second.
            Let’s define a fps variable now.</p>
            <img src={img_4} alt="fps variable assignment" />
            <p className='learning-text-box'>setInterval takes in a function and a time in milliseconds to repeatedly call that function.
            <br/><br/>
            
            We can use an IIFE again to call our Update and Render functions.<br/><br/>
            
            Then for the second argument, we can pass 1000 divided by our fps variable. 
            This is how we can execute these functions 60 times per second.</p>

            <img src={img_5} alt="game loop creation" />

            <div name="tile_map" className='learning-text-box'>
                <h1 className='learning-text-title'>Rendering The Tile Map</h1>
                <p>Having a game loop is useful but only if we have stuff to process in this loop!<br/><br/>

                Looking back at the concept of what we're trying to achieve, let's break this down into smaller pieces and handle things one by one.<br/><br/>

                The map.<br/><br/>
                
                We know we're going to be using an array to store values of either 0 or 1. 
                Advanced versions of ray casters can use more values for textures and other interesting variations, 
                but that's well out of scope for this video.<br/><br/>

                We want to represent each array index as it's own cell, and organize these cells in a tile map.<br/><br/>
                
                With this approach in mind, we're gonna need a few variables to allow us to bring this map to life.<br/><br/>

                We will need a variable for the maps width and height, we can call these mapWidth & mapHeight.<br/><br/>

                We can envision these as the number of columns and rows for our map.<br/><br/>

                And since we are going to be creating cells we need some kind of metric for that cell size, keep it simple and call this cellSize.</p>
            </div>
            <img src={img_6} alt='setting cellsize and map variables' />
            <p className='learning-text-box'>Okay, we have our maps dimensions and a metric to size our cells, 
            we need a way to access our canvas element.<br/><br/>

            We can do this by using getElementById.<br/><br/>

            Canvas elements handle manipulation through a 'context', we can get that by using the getContext method as well.
            Since we are working in a 2D space, we pass the string ‘2d’ into the getContext method.</p>
            <img src={img_7} alt="getting canvas elements" />
            <p className='learning-text-box'>Lets set our canvas dimensions using dot notation.<br/><br/>

            Since these properties are also pixel values, we want to make sure we are multiplying our mapWidth and mapHeight 
            by cellSize.<br/><br/>

            This will ensure we have enough total canvas space to fit our cells! We can do this within our start 
            function since we only need to assign it on the initial load</p>
            <img src={img_8} alt="setting canvas dimensions using dot notation" />
            <p className='learning-text-box'>Our map is going to be based on an array of 0s and 1s so we should probably
            create that now as well.<br/><br/>

            Create a worldMap variable in the global scope with no assignment.</p>
            <img src={img_9} alt="creating worldMap variable" />
            <p className='learning-text-box'>In the Start() function, let's just initialize our worldMap array mapWidth * mapHeight in size and to be 
            filled with 0s.<br/><br/>

            We can use the array .fill() method.</p>
            <img src={img_10} alt="initializing the world map array" />
            <p className='learning-text-box'>Now let's make a function to actually render our map to the canvas!

            We can call this function drawMap(), this function is going to loop through every index in our array, 
            check the value and draw a cell with the corresponding color.<br/><br/>

            Inside drawMap(), let's put a for loop that loops to mapHeight - 1<br/>
            We then can nest another for loop, this time looping to mapWidth - 1<br/><br/>

            We use a nested loop approach instead of a single loop since we are rendering this array in two dimensions.<br/><br/>

            We could achieve the same result using a single for loop, but it would result in some nasty looking syntax.</p>
            <img src={img_11} alt="nested for loop" />
            <p className='learning-text-box'>For beginners the way we are accessing each cell can be confusing but its alot 
            simpler than you think.<br/><br/>

            We are going to be checking every cell inside of the nested loop, the way we want to identify which cell to access is by 
            using <b>worldMap[y * mapWidth + x]</b><br/><br/>

            We start by checking y * mapWidth, this is going to get use the start of the current row, then adding x to that result can get us any cell within that row.<br/><br/>

            Using this method to check any cell in a given row, we can use a switch statement to define two cases: 0 & 1<br/><br/>

            You can use if statements and get the exact same result, I decided with a switch statement since I plan to scale this project in the future.<br/><br/>
            
            Inside of each switch case, we define the desired color for that value. I'm going with black for 0 and purple for 1. 
            We can assign these colors using the context fillStyle property. This is just a property to define the color to use for the next fill call to
            our canvas.<br/><br/>

            If using the switch statement, be sure to break out of each case after assigning the fillStyle.</p>
            <img src={img_12} alt="accessing each cell in nested loop" />
            <p className='learning-text-box'>Now that we changed the color based on the cells value, we can draw each cell to the screen!<br/><br/>

            To finish off this function, we call context.fillRect() inside of our nested loop to access each cell.<br/><br/>

            This takes in 4 args: x, y, w, h
            We already have everything we need to pass to this function so let's start with the x and y.<br/><br/>

            Knowing our canvas is dynamically scaled to our cellSize, mapWidth & mapHeight variables, we can start by saying x * cellSize, y *cellSize<br/><br/>

            These are pixel values, and since we are drawing a cell of cellSize, we don't just want to increment by 1 or we will get a smashed mess of squares sitting in the top left corner.<br/><br/>

            Then for our width and height dimensions, we can pass cellSize to each one since we are just rendering a square.<br/><br/>

            We also want to add one more call directly underneath context.fillRect which is context.strokeRect.<br/><br/>

            This will draw a outline around each cell to help us identify individual spaces better.
            We can define this stroke color at the start of our function.</p>
            <img src={img_13} alt="changing color of the tile map cells" />
            <p className='learning-text-box'>Let's test to make sure our color assignment works by placing our drawMap function inside our Render function.<br/><br/>

            Save and head over to the console and assigning a random number to one in our array.<br/><br/>

            Great, we now can fill in cells... well not really just yet. If you recall we need a way to interact with this grid to draw cells in whatever index we want.

            This leads us into the next segment of this instruction: <b>Player & Input Controller</b></p>
            <button onClick={() => {navigate('/player_input')}} className='learning-button'>Next Section {'>'}</button>
        </div>
        
    );
};

export default Setup;