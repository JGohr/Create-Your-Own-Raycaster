import '../pages/Fov.css';
import Header from '../comps/Header.js';
import img_1 from '../images/FOV/Creating A FOV/FOV_1.png';
import img_2 from '../images/FOV/Creating A FOV/FOV_2.png';
import img_3 from '../images/FOV/Creating A FOV/FOV_3.png';
import img_4 from '../images/FOV/Creating A FOV/FOV_4.png';
import img_5 from '../images/FOV/Creating A FOV/FOV_5.png';
import img_6 from '../images/FOV/Creating A FOV/FOV_6.png';
import img_7 from '../images/FOV/Creating A FOV/FOV_7.png';
import img_8 from '../images/FOV/Creating A FOV/FOV_8.png';
import img_9 from '../images/FOV/Creating A FOV/FOV_9.png';
import img_10 from '../images/FOV/Creating A FOV/FOV_10.png';
import img_11 from '../images/FOV/Creating A FOV/FOV_11.png';

import img_12 from '../images/FOV/Drawing Rays/DR_1.png';
import img_13 from '../images/FOV/Drawing Rays/DR_2.png';
import img_14 from '../images/FOV/Drawing Rays/DR_3.png';
import img_15 from '../images/FOV/Drawing Rays/DR_4.png';
import img_16 from '../images/FOV/Drawing Rays/DR_5.png';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Link } from 'react-scroll';

function Fov() {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className='fov'>
            <Header />
            <div className='learning-nav-box'>
                <ul className='nav-box-list'>
                    <li><Link to="intro" smooth={true} offset={-125}>Lesson Intro</Link></li>
                    <li><Link to="fov" smooth={true} offset={-125}>Making The FOV</Link></li>
                    <li><Link to="draw_rays" smooth={true} offset={-125}>Drawing The Rays</Link></li>
                </ul>
            </div>
            <div name="intro" className='learning-text-box'>
                <h1 className='learning-text-title'>Section Introduction</h1>
                <p>By the end of this section we will have a way to draw rays within a given field of view.</p>
            </div>
            <div name="fov" className='learning-text-box'>
                <h1 className='learning-text-title'>Creating A FOV</h1>
                <p>We're going to start by creating the ray factory function, fov variable & drawRay function.<br/><br/>

                Raycasting is essentially casting a line for every column of pixels on your screen. Then drawing a line based on
                some calculations to give the illusion of a 3D space.<br/><br/>

                Knowing this, we're going to need a way to generate a lot of rays! Luckily, we can create a factory function for this case.
                There's multiple ways of generating objects, I just went this route to keep it simple.<br/><br/>

                Let's make a 'createRay' function, this function will just return a newly created ray everytime we call it.
                Each ray in this tutorial, will have quite a few properties so I'm going to try and keep this as organized as possible.<br/><br/>

                For now just have it return a empty object.</p>
            </div>
            <img src={img_1} alt="createRay function" />
            <p className='learning-text-box'>The first conflict to overcome is create our players FOV. Humans have roughly a FOV of 180 degrees.<br/><br/>
            We definitely don't need that large of a range, after some research I've found 60 degrees is a sweet spot for FPS.<br/><br/>
            Let's define this variable as a global variable since we only need to assign this once.
            We should also convert it to radians now as well.</p>
            <img src={img_2} alt="fov variable" />
            <p className='learning-text-box'>When researching ray casting, I've found people use a multitude of methods to generate this field of view.<br/><br/>

            For this instruction, we're going to be taking a simple yet effective approach for ease of mind. I encourage you
            to research on your own and see if there's another method that sticks out to you! After all, this is all a learning experience.<br/><br/>

            We know we are going to have a set amount of rays, to be precise, we’re going to have a ray for every column of pixels in our rendered product.<br/><br/>

            As of right now, we haven’t touched anything in regards to the final products canvas, 
            but for now we can define two variables for it’s dimensions to help us setup our application.<br/><br/>

            I’ll call these viewWidth and viewHeight. I’ll be sizing our second canvas to 640 x 480 so these will be my values for these variables.</p>
            <img src={img_3} alt="viewWidth and Height variables" />
            <p className='learning-text-box'> Now we also need a place to store these rays, 
            let's create a rays property on our players object that stores an array of ray objects.</p>
            <img src={img_4} alt="player object creation" />
            <p className='learning-text-box'>And since we have a function to generate rays for us, 
            let's go to our start function and make a loop to push viewWidth rays to our players rays array.</p>
            <img src={img_5} alt="push rays inside init function" />
            <p className='learning-text-box'>
            Easy enough. You can verify this is working by entering 'Player.rays' in your developer console.<br/><br/>

            We have our rays all nicely stored within our player.rays array, nice! Let me break down how I plan to approach this fov problem.<br/><br/>

            So far we have a FOV (a degree amount converted to radians) and viewWidth amount of rays.<br/><br/>

            Knowing the amount of rays we have, we want to find the angle offset for each ray given it's index in our player.rays array.<br/><br/>

            <b>For exmaple (Assuming our FOV is 60):</b><br/>
                - Player.rays[0] should be rotated -30 degrees to our players direction<br/><br/>
                - Player.rays[viewWidth - 1] should be rotated 30 degrees to our players direction<br/><br/>
                - Any ray in between will have a calculated angle offset to be from the players direction<br/><br/>

            Also, with all our rays pointing in slight offsets from the players direction, we're going to want to store 
            that angle amount from the player, in some kind of variable. I won't touch too much on this now, 
            just know it's going to be important for calculating our line heights!<br/><br/>

            Let's create a direction vector and angleFromPlayer property inside our createRay functions return object.
            </p>
            <img src={img_6} alt="angleFromPlayer and direction props" />
            <p className='learning-text-box'>
            Now we need a way to iterate over each ray, constantly updating the data to that ray.<br/><br/>
            Create a function called updateRayProps, and call this function inside our update method.<br/><br/>

            NOTE: THE ORDER IN WHICH YOU CALL THESE FUNCTIONS IS IMPORTANT! 
            If a rays calculations is dependent on some kind of input. 
            We want to make sure we update the players input before trying to update the rays data.
            </p>
            <img src={img_7} alt="updatePlayerProps in Update function" />
            <p className='learning-text-box'>
            Inside our updateRayProps function, we want to loop through every ray within our Player.rays array.<br/><br/>

            Let's put a for in loop, storing the index as r.<br/><br/>

            We don't want to have to type out Player.rays[r] every time we want to access the ray, so store each index in a variable called Ray like so:
            </p>
            <img src={img_8} alt="selecting ray as index r" />
            <p className='learning-text-box'>Stepping out of the for loop, there's a couple variables we can define at the start of our updateRayProps function.
            These will be the big three pieces we need to create our FOV. Let me break them down.<br/><br/>

            Our first variable will be called halfFOV, this is going to be used to assign the initial ray offset from our player direction.
            All our rays after Player.rays[0], will rotate a set amount from this initial direction.<br/><br/>

            To be clear, this initial direction is simply just our players direction, rotated -halfFOV degrees.<br/><br/>

            Let's define our halfFOV variable and also a variable for that initial direction. I'm going to call it 'initialAngleVector'.</p>
            <img src={img_9} alt="init angle vector creation" />
            <p className='learning-text-box'>
            For all our rays after Player.rays[0], we need to find the angle increment that will allow us to fit
            all viewWidth rays within a given degree range. This is easier than it sounds, we just divide our desired FOV
            by the amount of rays we have (in this case viewWidth rays) to get a very small but useful number.<br/><br/>

            Since our FOV is already converted to radians we don't need to worry about conversion.<br/><br/>
            Let's store this in a variable called rayDirStep.
            </p>
            <img src={img_10} alt="ray dir step creation" />
            <p className='learning-text-box'>
            Time to tie everything together. We have a initialAngleVector and the amount we need to increment for each vector.<br/><br/>

            Starting with the first ray, we can assign it's direction as our initialAngleVector and it's angleFromPlayer value to -halfFOV.<br/><br/>

            For every ray after the first, we need to get the amount to rotate from our initialAngleVector,
             this can be achieved by multiplying the index of each ray by our rayDirStep variable. 
             We can store this in it's own variable called rotAmount<br/><br/>

            Since we are rotating directly from the initialAngleVector, this will gradually increase
            the angle offset as the index grows higher. To be exact, 
            this will gradually increment all the way until the last ray which will be halfFOV to the right of the players direction.<br/><br/>

            We can easily get the angleFromPlayer variable for each ray by adding -halfFOV + rotAmount.<br/><br/>

            Just assign each rays direction equal to a rotated version of the initialAngleVector.
            Then store the angleFromPlayer directly after.
            </p>
            <img src={img_11} alt="assign rotation amount" />
            <p className='learning-text-box'>
            And that's all the logic for creating a FOV! Pretty simple looking back but we still need to see all these rays somehow.<br/><br/>

            This leads us into the next problem at hand.
            </p>
            <div name="draw_rays" className='learning-text-box'>
                <h1 className='learning-text-title'>Drawing Rays</h1>
                <p>Let's create a drawRay function to visualize that our rays direction are being calculated properly!<br/><br/>

                Define our drawRay function and call it within our render function.</p>
            </div>
            <img src={img_12} alt="drawRay function" />
            <p className='learning-text-box'>
            We don't want our rays to just be tiny pixels, so we're gonna need some kind of distance our rays can cast to.<br/><br/>

            Later in the instruction we will be storing the collision distance, but in the case of no collision we need our rays to stop.<br/><br/>

            Instead of picking some random number, I'm gonna take a dynamic approach.<br/><br/>

            Using a ternary operator, we can compare the mapHeight and mapWidth distances. Whichever is greater we can store as the maxDist.<br/><br/>

            We want to multiply these by cellSize as well to get the pixel amount.
            We can declare our variable in the global scope and assign it in our start function to stay organized.
            </p>
            <img src={img_13} alt="maxDist variable" />
            <p className='learning-text-box'>
            Our drawRay function is realistically just drawing a line from the player, in the relative ray direction multiplied by some distance.<br/><br/>

            At the top of our drawRay implementaion, let's setup a strokeStyle to give our rays a color.
            I'm choosing green (#54ff00) in this example. It almost reminds me of a radar of some sort.<br/><br/>

            Also similar to our updateRayProps, we want to perform this draw on every ray.
            We can use the same for in loop, storing each index in a variable 'Ray' for easier access.
            </p>
            <img src={img_14} alt="drawRay function" />
            <p className='learning-text-box'>
            Drawing lines using the canvas context is easy, we just need two x and y values each.
            We can use the player.position values for the start of our line, but we need to get the x and y ending points.<br/><br/>

            We can get these endpoints by taking the Player.position values and adding the rays direction multiplied by our maxDist. Looks something like this:
            </p>
            <img src={img_15} alt="drawRay function addition" />
            <p className='learning-text-box'>
            We can now call beginPath and assign our start and end points for our lines. The canvas context uses .moveTo() and .lineTo().<br/><br/>

            - moveTo() is the origin of where we want our line to start<br/><br/>

            - lineTo() is the endpoint for our line<br/><br/>

            We have all the information we need to do this, so let's place these function calls at the bottom of our drawRay function.<br/><br/>

            Also, to tell the canvas we want to render the actual line, we call .stroke().
            </p>
            <img src={img_16} alt="drawRay beginPath" />
            <p className='learning-text-box'>
            Heading over to our canvas, we can now see the field of view rendered in a nice bright green.<br/><br/>

            You probably have some overlap on your tiles, this will be solved with the next step.<br/><br/>

            After we implement collision, we will account for the collision distance and draw the rays at their that distance if possible.
            </p>
            <button onClick={() => {navigate('/rays')}} className='learning-button'>Next Section {'>'}</button>
        </div>
    );
};

export default Fov;