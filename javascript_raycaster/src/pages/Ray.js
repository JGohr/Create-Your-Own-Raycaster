import './Ray.css';

import Header from '../comps/Header.js';

import img_1 from '../images/RayProps/Section 4/CRD_1.png';
import img_2 from '../images/RayProps/Section 4/CRD_2.png';
import img_3 from '../images/RayProps/Section 4/CRD_3.png';
import img_4 from '../images/RayProps/Section 4/CRD_4.png';
import img_5 from '../images/RayProps/Section 4/CRD_5.png';
import img_6 from '../images/RayProps/Section 4/CRD_6.png';
import img_7 from '../images/RayProps/Section 4/CRD_7.png';
import img_8 from '../images/RayProps/Section 4/CRD_8.png';
import img_9 from '../images/RayProps/Section 4/CRD_9.png';
import img_10 from '../images/RayProps/Section 4/CRD_10.png';
import img_11 from '../images/RayProps/Section 4/CRD_11.png';
import img_12 from '../images/RayProps/Section 4/CRD_12.png';
import img_13 from '../images/RayProps/Section 4/CRD_13.png';
import img_14 from '../images/RayProps/Section 4/CRD_14.png';
import img_15 from '../images/RayProps/Section 4/CRD_15.png';
import img_16 from '../images/RayProps/Section 4/CRD_16.png';
import img_17 from '../images/RayProps/Section 4/CRD_17.png';
import img_18 from '../images/RayProps/Section 4/CRD_18.png';
import img_19 from '../images/RayProps/Section 4/CRD_19.png';
import img_20 from '../images/RayProps/Section 4/CRD_20.png';
import img_21 from '../images/RayProps/Section 4/CRD_21.png';
import img_22 from '../images/RayProps/Section 4/CRD_22.png';
import img_23 from '../images/RayProps/Section 4/CRD_23.png';
import uss from '../images/RayProps/Section 4/USS_demo.PNG';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Link } from 'react-scroll';

function Ray() {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className='ray'>
            <Header />
            <div className='learning-nav-box'>
                <ul className='nav-box-list'>
                    <li><Link to="intro" smooth={true} offset={-125}>Lesson Intro</Link></li>
                    <li><Link to="theory" smooth={true} offset={-125}>Theory</Link></li>
                    <li><Link to="ray_data" smooth={true} offset={-125}>Calculating Ray Data</Link></li>
                </ul>
            </div>
            <div name="intro" className='learning-text-box'>
                <h1 className='learning-text-title'>Section Introduction</h1>
                <p>If you've made it this far, congrats! If any of this instruction feels foreign or confusing, that's okay. 
                By the end, everything will come full circle.<br/><br/>

                This next section will be the most mentally challenging but I don't mean that in a discouraging manner! 
                We're going to cover a conceptual overview of what we are trying to achieve and then break it 
                down into small sub-problems to try and bring the bigger picture together.<br/><br/>

                When I initially created this project, I spent a ton of time wondering what in the world is going on.<br/><br/>

                Staying persistent and determined to learn, the outcome eventually came to.<br/><br/>

                I wanted to preface this section with that small comment, as well as some resources to help aid 
                in any confusion when talking about the DDA algorithm, vectors, Pythagorean theorem, etc...</p>
            </div>
            <div name="theory" className='learning-text-box'>
                <h1 className='learning-text-title'>Theory</h1>
                <p>
                Before jumping into any code, we need to make sure we understand exactly what our collision check is doing under the hood.<br/><br/>
                This implementation is only around 50 lines of code. The performance is remarkable but the underlying logic can take some time to grasp.<br/><br/>
                The beauty of ray casting lies behind how and when we are checking for collision.
                Technically, we could cast a ray in a direction and constantly call a function to check a minute distance and see if it's colliding.<br/><br/>
                This method is computationally harsh and really is leaving a lot on the table for performance/accuracy.
                Using a set constant to increment the check could result in a collision, but this collision may not be as accurate as we want.<br/><br/>
                Imagine the increment just barely misses the cell wall and collides within the cell.
                When we get to rendering the line heights, this can cause some odd looking graphics.<br/><br/>
                We want to approach this increment to check in a more intelligent way. Let's look at a overview of how we can do this.<br/><br/>
                Knowing our map is just an array of 0s and 1s, rendered as a grid of cells all equal in size.
                We have no need to check for collision by some small incremental value. Instead,
                if we consider that a index in our array with a value of 1 is our 'wall',
                we only need to increment up to the edge of any given cell = 1. This 'edge' is simply just the x or y axis that a single cell lies within.<br/><br/>
                We can achieve this by using a twist on the Pythagorean theorem. Let's jump into it.<br/><br/>
                Funny enough, I used to dread learning about this theorem in high school. I constantly told myself,
                "When will I ever need this!?".<br/><br/>
                Welp... here I am. I don't want this to turn into a math lesson, so I'm going to try and break this down without getting to deep into the weeds.<br/><br/>
                <b>Pythagorean theorem: a^2 + b^2 = c^2</b><br/>
                Given two sides of a right angled triangle (a & b), we can find the hypotenuse (c).<br/><br/>
                The 'hypotenuse' we are solving for in this application, is the distance from one edge of a cell to another.
                Being more precise, we need to find the distance our ray travels between our axis lines, in any given direction (our slope).<br/><br/>
                Let me present you with the final formula and then ill go into how this makes sense.<br/><br/>
                distanceAlongX = sqrt( 1 + Math.pow(Ray.direction.y, 2) / Math.pow(Ray.direction.x, 2) ) * cellSize<br/><br/>
                distanceAlongY = sqrt( 1 + Math.pow(Ray.direction.x, 2) / Math.pow(Ray.direction.y, 2) ) * cellSize<br/><br/>
                With no context, this can be daunting but it's simpler than it looks.<br/><br/>
                The square root is staying since this is just substituting values in for the previous a, b & c variables.<br/><br/>
                Starting with the value 1: We are looking for the distance our ray travels for a singular movement along a row or column of cells.
                This can be better grasped with a visualization.<br/><br/>
                Imagine there is a 1x3 set of cells, with a ray starting from the top left corner down to the bottom right.
                Drawing dots on each intersection of a grid line, blue for X and red for Y.
                </p>
            </div>
            <img src={uss} alt="" />
            <p className='learning-text-box'>
            From our starting point, to each nearest dot per color, we can see that the distance our ray travels along each axis is exactly the same. 
            This is because we are working within a cell based map, with all cells being equal in size.<br/><br/>

            This is the exact distance we are trying to find!<br/><br/>

            If we go to a larger scale view, and draw the same points along the intersections of our ray and the grid lines, 
            this distance will ALWAYS be the same as long as our rays direction or slope stays the same!<br/><br/>

            With that being said, we move onto the (Ray.direction.y)^2 / (Ray.direction.x)^2<br/>
            I'll be using the distanceAlongX for this example.<br/><br/>

            As stated before, our direction vector is just the slope of our line normalized in value.
            Our independent Ray.direction.x and Ray.direction.y values can be thought of as the change in x and y (delta X and delta Y).<br/><br/>

            If the concept of working with slopes and breaking them down into components of delta X and delta Y is foreign, 
            I recommend using this video as a resource to aid in this learning process.<br/><br/>
            <a href="https://www.youtube.com/watch?v=rpMu98yRk40&ab_channel=mathantics">https://www.youtube.com/watch?v=rpMu98yRk40&ab_channel=mathantics</a><br/><br/>

            Since we are getting the distance our ray travels per column of cells, we need to scale down the second variable as well.<br/><br/>

            By dividing our Ray.direction.y / Ray.direction.x, we can scale our y axis movement down to a singular movement per x axis movement.<br/><br/>

            After substituting these variables, we are left with a value that represents the distance our ray travels along each axis!<br/><br/>

            This calculation alone is great but we need to do one last thing to apply this to our own application. 
            This formula would get us the distance per pixel. To make this value work, we just multiply all of our previous math by our cellSize.<br/><br/>

            Now, given any slope of a ray, we can find the distance it travels per column or row in our grid!<br/><br/>

            I hope this is all making sense so far, having previous knowledge of how slopes work is pretty crucial to this understanding.<br/><br/>

            Now I throw a curve ball. During my research on ray casting I came across a wonderful article by lodev.org<br/>
            (<a href="https://lodev.org/cgtutor/raycasting.html#The_Basic_Idea_">https://lodev.org/cgtutor/raycasting.html#The_Basic_Idea_</a>)<br/><br/>

            This article goes in depth on how he approaches the ray casting implementation as well as the theory behind all his workings.<br/><br/>
            I place emphasis on this article since the author actually explains how we can optimize this formula!

            I'm no mathematician so if this is something that interests you, I'll let you do your own research.<br/><br/>
            Simply put he reduces it down to this:<br/><br/>

            distanceAlongX = abs(1 / Ray.direction.x)<br/>
            distanceAlongY = abs(1 / Ray.direction.y)<br/><br/>

            Now I can understand why you might be screaming at me through your monitor right now, 
            especially if you took alot of time to understand the last formula. 
            But this is a great opportunity to optimize our code! Square roots from a computation stand point are expensive, by
            removing them we can get a much cleaner looking snippet of code while reducing the amount of work our CPUs need to handle.<br/><br/>

            I haven't looked too deep into the proof behind this math and also I felt it was easier to use Pythagorean theorem as a 
            guideline to help give you some basic understanding of what we are trying to achieve!<br/><br/>

            Nonetheless, we will be using the simplified version in our code... or the Pythagorean version if you want out of spite.<br/><br/>

            <b>How we can use this in our program?</b><br/><br/>

            This calculation is the heart of this entire process. But how will it be applied in our context?<br/><br/>

            In our code, we left off with assigning individual angle offsets to each ray to create a field of view.
            We now also have a way to track the distance each one of these rays travels per each row and column relative to it's direction!<br/><br/>

            Conceptually, we are going to track the total individual distances traveled for each ray,
            starting from our players position and incrementing by distanceAlongX and distanceAlongY.<br/><br/>

            Storing these values, we can compare on each iteration which is shorter to find us the nearest cell to that ray.<br/><br/>

            Storing the cell to check to some kind of variable, we can check if that cells value in our mapArray = 1.<br/><br/>

            If so, we can break the loop because we found a collision! Otherwise we keep incrementing 
            and comparing until we reach a max distance or a collision happens.<br/><br/>

            Let's put this into code and hopefully it will start piecing together!
            </p>
            <div name="ray_data" className='learning-text-box'>
                <h1 className='learning-text-title'>Calculating Ray Data</h1>
                <p>We start by defining the distanceAlongX & distanceAlongY variables.<br/><br/>

                I'm going to be creating a object for each ray containing an x and y property to keep track of these distances, 
                feel free to store these in independent variables but just note that they have to be attached to each ray 
                since these distances will vary depending on the rays direction.<br/><br/>
                
                We'll call this object 'unitStepSize'.</p>
            </div>
            <img src={img_1} alt="" />
            <p className='learning-text-box'>
            We then need to calculate this value before any collision check happens in our updateRayProps.
            We can use the formula talked about above and place it directly below our angle assignment logic from last section.
            </p>
            <img src={img_2} alt="" />
            <p className='learning-text-box'>
            Next, we're going to need a way to track which cell to check for a value of 1. This will also be an individual object to each ray.<br/><br/>

            Since we are using the same indexing method as we've used previously, this object will also contain a x and y property.<br/><br/>
            </p>
            <img src={img_3} alt="" />
            <p className='learning-text-box'>
            Since these values are defaulted to 0, we need a way to update the coordinates at which our rays are currently in.<br/><br/>
 
            We could perform this calculation for each ray but, since our rays are always starting from our players position, 
            we should use the current cell property our player already has, then use those coordinates to initialize each rays cellToCheck object.<br/><br/>
            </p>
            <img src={img_4} alt="" />
            <p className='learning-text-box'>
            One last crucial step before we get into the actual collision check. We've been assuming that our rays are starting from some kind of origin, 
            perfectly aligned on our grid lines. As we can tell, this will not always be the case.<br/><br/>

            We want this calculation to be performed no matter where we are within our grid, and it's actually a pretty simple task.<br/><br/>

            Looking back at the core of our collision loop, we are comparing the distances 
            to each nearest grid axis for which is shorter, then incrementing our cellToCheck 
            coordinate in the direction of whatever axis we collide with first.<br/><br/>

            For example, if we are in a cell and our ray collides with columns edge before 
            it collides with the rows edge, we need to check the nearest cell along the x axis since it's the closest cell.<br/><br/>

            Knowing this, we just need to get the initial distances from our players position to the nearest cell wall 
            before incrementing by our unitStepSize. We are going to be constantly accumulating the distances we are comparing so we need a way to store them.<br/><br/>

            Once again we will create a object attached to our ray to store the accumulated distances for each iteration in our collision check.<br/><br/>

            We can call this travelDist.
            </p>
            <img src={img_5} alt="" />
            <p className='learning-text-box'>
            After the comparison of the two travelDist values, we need to update our cellToCheck object to the correct coordinates.<br/><br/>

            We can't just use hardcoded values to increment/decrement since we may need to move up/down/left/right. This all depends on the rays direction.<br/><br/>

            If our ray is pointing down to the right, we need to update our cellToCheck positively along the Y axis and positively in the X axis.<br/><br/>

            We can store these increments in a object for each ray called stepDirection.<br/><br/>
            </p>
            <img src={img_6} alt="" />
            <p className='learning-text-box'>
            Since our initial stepDirection and travelDist objects values are
            set to 0, we need to prime these values to prepare them for the actual collision check.<br/><br/>

            This itself is how we resolve starting within a cell. Since we already have the distance our ray per axis can travel (unitStepSize), 
            we need to get the distance from our starting position in the cell, to each axis boundary.<br/><br/>

            If we visualize our player within a single cell, our position within that cell can be 
            mapped as a floating point representing the percentage along each axis we lie within that single cell.<br/><br/>

            To go deeper, you can even think of the single cell as it's own mini grid, with each boundary being 0 or 1.
            Everything between these boundaries, is a floating point between 0 and 1, represented as a 
            decimal conversion of the percentage we stay within the cell.<br/><br/>

            Since we are going to be incrementing by a set amount (unitStepSize), we need to start our checks aligned with the nearest boundaries. 
            We can use this percentage and multiply it by our unitStepSize values to get the distance to the nearest boundary.<br/><br/>

            This realistically is no different than our actual collision check since technically a cell with a value of 1 
            could be directly next to our players position in space.<br/><br/>

            With that being said, let's create a way to track the position we lie within a cell!<br/><br/>

            Create another object with x and y values called cellPosition within our player object.
            </p>
            <img src={img_7} alt="" />
            <p className='learning-text-box'>
            We can find this percentage by getting our position in space and subtracting the starting position of the cell we lie in. 
            Dividing it all by our cellSize.<br/><br/>

            Let's throw this in our updatePlayerProps.
            </p>
            <img src={img_8} alt="" />
            <p className='learning-text-box'>
            Okay enough setup, let's get into actually priming these values.<br/><br/>

            What we do for the x values here we will do the exact same for y, this is partially why I setup my objects the way I did!<br/><br/>

            We want to make sure the direction we check (stepDirection) is the same as the direction our rays are pointing in.
            For example, if our ray is pointing down and to the right, we need to make sure our stepDirection x and y values are ready to go in those directions.<br/><br/>

            Start by adding our four conditionals, two for checking the x and y values in the negative direction and the remaining two for the positive.<br/><br/>
            </p>
            <img src={img_9} alt="" />
            <p className='learning-text-box'>
            Inside these statements we're going to prime both the stepDirection and travelDist objects.<br/><br/>

            Starting with the stepDirection, we can say if our rays direction is less than zero (going left for x or up for y):
            Assign the stepDirection to be -1<br/><br/>

            In the other case (going right for x and down for y), assign the stepDirection to be = 1
            </p>
            <img src={img_10} alt="" />
            <p className='learning-text-box'>
            Easy enough. Onto priming the Ray.travelDist values.<br/><br/>

            We have our Player.cellPosition object containing some floats for how much we lay in a given cell.
            We can use this float and multiply it by our unitStepSize to get the distance to the nearest cell boundary.<br/><br/>

            There's one catch though, depending on the direction our player is facing, we might want to alter that value slightly.<br/><br/>

            For example, if we are positioned on the bottom right corner of a cell and our rays direction are going up and left, we need
            the distance for the collision in that direction. Luckily this is really simple while using our Player.cellPosition object.<br/><br/>

            If our rays direction value is negative, we just get the percentage we lie within a cell multiplied by our unitStepSize.<br/><br/>

            If our rays direction value is positive, we want to get that distance but instead of using the percentage we lie within the cell
            we get the remaining percentage by subtracting 1.0 by our floats. Then multiplying by our unitStepSize.
            </p>
            <img src={img_11} alt="" />
            <p className='learning-text-box'>
            Awesome! With all our values primed, we can dive into implementing our actual collision check functionality.<br/><br/>

            Start by defining a checkForCollision function, that takes in an object 'Ray' as an argument.
            </p>
            <img src={img_12} alt="" />
            <p className='learning-text-box'>
            We're going to need three more properties attached to our ray object:<br/><br/>

            - hit: A boolean to track if the ray is colliding<br/>
            - hitDist: a number representing the distance it took to travel and collide with a wall<br/>
            - sideHit: A value being 0 or 1 to represent if the collision was hit along the x or y axis (0 = x, 1 = y)<br/><br/>

            Let's assign these to our Ray object now
            </p>
            <img src={img_13} alt="" />
            <p className='learning-text-box'>
            In psuedo code this is what our collision function might look like:<br/><br/>

            Reset the rays hit boolean<br/><br/>

            While ray.hit = false and Ray.hitDist greater than maxDist<br/>
                For the shorter travelDist value<br/><br/>

                Assign the rays hitDist = that travelDist value<br/><br/>

                Increment the travelDist value for that axis<br/><br/>

                Move the cell to check in the stepDirection for that axis<br/><br/>

                Assign the sideHit value for that axis<br/><br/>

                Check if the cellToCheck value is 1 (Collision)<br/><br/>

                    True? Ray.hit = true (breaks the loop)<br/>
                    False? Keep looping<br/><br/>


            Hopefully you can use that as guidance along this implementation but let's take it in chunks and explain along the way.<br/><br/>

            We start by setting our Ray.hit = false
            </p>
            <img src={img_14} alt="" />
            <p className='learning-text-box'>
            Next, we want to check for collision until we collide with something AND also while our hitDist is less than our maxDist. 
            Remember we made this maxDist value in the previous sections.<br/><br/>

            A while loop with these conditionals will work perfectly.
            </p>
            <img src={img_15} alt="" />
            <p className='learning-text-box'>
            Like we've talked about in the explanation, 
            this is all revolving around comparing our two travelDist values, 
            taking the shorter one and applying some logic. We can set those up like so:<br/><br/>
            </p>
            <img src={img_16} alt="" />
            <p className='learning-text-box'>
            Whichever travelDist (x or y) is the shorter length, we know is the distance to the closest cell.<br/><br/>

            We want to assign our rays hitDist variable to that length.<br/><br/>

            We can use this value to check the possible collision distance OR if we've reached the max distance
            </p>
            <img src={img_17} alt="" />
            <p className='learning-text-box'>
            On our first iteration of the collision check, that hitDist will actually just be the primed distance we setup before. 
            Now, since our distances are both aligned along cell walls, we can keep incrementing our travelDist value by our unitStepSize.<br/><br/>

            This is how we skip to the next cell wall!
            </p>
            <img src={img_18} alt="" />
            <p className='learning-text-box'>
            Whatever distance was shorter is the direction we want to check the next cell in, 
            we can increment our rays cellToCheck objects values by our rays stepDirection values.<br/><br/>
            </p>
            <img src={img_19} alt="" />
            <p className='learning-text-box'>
            In the next section we are going to be rendering our scene. 
            Part of that rendering proccess is going to render different shades depending on the side of the cell we hit.<br/><br/>

            The last part of our while loop will be assigning the side we hit
            </p>
            <img src={img_20} alt="" />
            <p className='learning-text-box'>
            We then want check the index of our world map using the cellToCheck variable. If it contains a value of 1, we assign Ray.hit = true.<br/><br/>
            </p>
            <img src={img_21} alt="" />
            <p className='learning-text-box'>
            That's all we needed for our checkForCollision function! 
            Now let's go back into updateRayProps and cell checkForCollision on each ray.<br/><br/>
            </p>
            <img src={img_22} alt="" />
            <p className='learning-text-box'>
            This last snippet will be useful for our next section (rendering), 
            but underneath the checkForCollision call, we're going to add a check if the current ray is hit, if not we want to reset the hitDist for that ray.<br/><br/>

            Also, our ray may register as hit but exceed the maxDist variable, 
            so we want to check for that and reset the hit and hitDist variables to avoid our rays stretching passed the desired maximum distance.<br/><br/>
            </p>
            <img src={img_23} alt="" />
            <p className='learning-text-box'>
            And that's wrap for this section! Now I know you are thinking 
            "I just went through all the headache of this section just to not see an end result?"<br/><br/>

            The answer to that is yes! This section is really the main part of this entire application 
            so I needed to separate it to clear confusion from any other material.<br/><br/>

            Don't worry though, the rendering section is the last page to read and you'll finally have your own ray caster, how exciting!<br/><br/>
            </p>
            <button className='learning-button' onClick={() => {navigate('/final')}}>Next Section {'>'}</button>
        </div>
    );
};

export default Ray;