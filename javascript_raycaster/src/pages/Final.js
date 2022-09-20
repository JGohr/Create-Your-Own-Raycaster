import './Final.css';
import Header from '../comps/Header';

import { useEffect } from 'react';
import { Link } from 'react-scroll';

import img_1 from '../images/Final/Drawing Collision/DC_1.png';
import img_2 from '../images/Final/Drawing Collision/DC_2.png';
import img_3 from '../images/Final/Drawing Collision/DC_3.png';
import img_4 from '../images/Final/Drawing Collision/DC_4.png';
import img_5 from '../images/Final/Rendering The Scene/RS_1.png';
import img_6 from '../images/Final/Rendering The Scene/RS_2.png';
import img_7 from '../images/Final/Rendering The Scene/RS_3.png';
import img_8 from '../images/Final/Rendering The Scene/RS_4.png';
import img_9 from '../images/Final/Rendering The Scene/RS_5.png';
import img_10 from '../images/Final/Rendering The Scene/RS_6.png';
import img_11 from '../images/Final/Rendering The Scene/RS_7.png';
import img_12 from '../images/Final/Rendering The Scene/RS_8.png';
import img_13 from '../images/Final/Rendering The Scene/RS_9.png';
import img_14 from '../images/Final/Rendering The Scene/RS_10.png';
import img_15 from '../images/Final/Rendering The Scene/RS_11.png';

function Final() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='final'>
            <Header />
            <div className='learning-nav-box'>
                <ul className='nav-box-list'>
                    <li style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Section Breakdown</li>
                    <li><Link to="intro" smooth={true} offset={-125}>Lesson Intro</Link></li>
                    <li><Link to="draw_col" smooth={true} offset={-125}>Drawing Collision</Link></li>
                    <li><Link to="render_scene" smooth={true} offset={-125}>Rendering The Scene</Link></li>
                    <li><Link to="conclusion" smooth={true} offset={-125}>Conclusion</Link></li>
                </ul>
            </div>
            <div name="intro" className='learning-text-box'>
                <h1 className='learning-text-title'>Section Introduction</h1>
                <p>By the end of this section we will be able to see the points of collision along our rays & 
                render our final product to the screen!
                </p>
            </div>
            <div name="draw_col" className='learning-text-box'>
                <h1 className='learning-text-title'>Drawing Collision</h1>
                <p>Let's create a drawCollision function and call it in our render method</p>
            </div>
            <img src={img_1} alt ="" />
            <p className='learning-text-box'>Simply put, we loop through every ray and draw a dot at the point of collision if any.
            Inside our drawCollision, put a for in loop and access each ray using the index r as done before<br/><br/>

            We only want to draw a collision if the rays hit value is true, so let's put a simple conditional checking for that as well</p>
            <img src={img_2} alt ="" />
            <p className='learning-text-box'>
            Getting the point of collision is simple using the hitDist property stored within the ray object.
            We can take our player starting position, then add our ray.direction multiplied by our ray.hitDist to get our desired point in space.<br/><br/>

            We can store these in variables for easier access, I'll be naming mine colX and colY.<br/><br/>

            Lastly, we just draw a dot using context.arc() at that point in space. 
            I'm using red as the fillStyle but feel free to tweak it to whatever color you my want!<br/><br/>

            Remember ctx.arc takes 5 arguments: x, y, radius, startAngle, endAngle
            </p>
            <img src={img_3} alt ="" />
            <p className='learning-text-box'>
            Saving and heading back over to our canvas, you should be able to see any collision points that your ray is contacting!<br/><br/>

            There's one bug though that we need to tweak, your ray should stop drawing after the point of collision.<br/><br/>

            We can change this by going back to our drawRay function and adding a check to see if the hitDist is {'>'} 0<br/><br/>

            If so, we draw the ray up to that hitDist, if not we continue to draw to the maxDist
            </p>
            <img src={img_4} alt ="" />
            <p className='learning-text-box'>That's really all there is to drawing the collision in our 2D space. Onto rendering our walls!</p>
            <div name="render_scene" className='learning-text-box'>
                <h1 className='learning-text-title'>Rendering The Scene</h1>
                <p>Moving onto the rendering of our walls.<br/><br/>

                Looking at the larger picture at hand, we are going to be drawing a single line for each ray to a separate canvas.<br/><br/>

                This won't be too complicated but before I even head into this section we are going to be using something known as 'Vector Projection'.<br/><br/>

                If this concept is unknown to you, go spend some time watching the video listed below to get a better understanding.<br/><br/>

                Coding Train Vector Projection: 
                <a href="https://www.youtube.com/watch?v=_ENEsV_kNx8&ab_channel=TheCodingTrain"> YouTube Video</a></p>
            </div>
            <p className='learning-text-box'>
            We need to be able to access the canvas element and the context it's using.<br/><br/>

            We can perform the same lines of code as we did for the initial canvas.<br/><br/>

            I'm going to be calling the canvas element renderCanvas and its context renderCtx.
            </p>
            <img src={img_5} alt ="" />
            <p className='learning-text-box'>
            Now, we need to define some dimensions for this canvas. Although I'd love to have 1920x1080 view,
             we're going to stick to a smaller view to see a side by side comparison of what is happening in the 2D space as well as our rendered product.<br/><br/>

            For this exmaple ill be going with 720 x 480, ill store these in viewWidth and viewHeight variables<br/><br/>

            We can set these dimensions the same way as our original canvas using dot notation inside of our init function.
            </p>
            <img src={img_6} alt ="" />
            <p className='learning-text-box'>
            We can now get into the actual rendering of each line that our ray is colliding with!<br/><br/>

            Let's make a function called renderRaycasts, and call it within our render function.
            </p>
            <img src={img_7} alt ="" />
            <p className='learning-text-box'>
            We're going to need to do some calculations to actually get the proper line heights to render,
             but first let's have our canvas draw a background of some sort.<br/><br/>

            In ray casters, the background is really just an illusion, 
            drawing the top half (ceiling) of the screen one color and the bottom half (floor) another. 
            We can achieve these by drawing two rectangles, one starting at the top going half way down, 
            then another starting at the half way point going down to the end of the canvas.<br/><br/>

            We are going to have to redraw these rectangles for every ray,
             so we can put these fillRect calls inside a for in loop.<br/><br/>

            Make sure to change the colors for these two rectangles so we can actually differentiate which is which.
            </p>
            <img src={img_8} alt ="" />
            <p className='learning-text-box'>
            Also, at the end of our renderRaycasts call, we need to clear the screen prepare the canvas for the next render.<br/><br/>

            We can do this by using the context clearRect method like so:
            </p>
            <img src={img_9} alt ="" />
            <p className='learning-text-box'>
            Okay, with this all setup we can move onto calculating line heights.<br/><br/>

            Our line heights are extremely important from a user experience.
            I want you to look at how close the monitor you're on is to your face, now I want you to envision your monitor was
            an extra 100ft away. It would appear smaller! This concept needs to apply to our program as well.<br/><br/>

            To summarize, things that are further away from us look smaller, things that are closer look bigger.<br/><br/>

            Remember that angleFromPlayer variable we setup in the FOV section? This is why we need it.<br/><br/>

            Right now our rays are shooting out in slightly different directions within our given FOV degree range.
            This is great but there's one slight issue with this.<br/><br/>

            Imagine we have two lines, one pointing straight up from the player and one pointing 20 degrees to the right of the player.
            Even if they both travel the same distance, the ray on a angle will appear to end shorter than the one pointing straight up.<br/><br/>

            This is because we aren't getting the distance directly perpendicular to our player.
            This is typically thought of as the 'camera plane'.<br/><br/>

            And since we are using the exact hitDist that the ray gets relative to it's angle, this will cause some unwanted warping in our scene.
            This is actually a common issue amongst ray casters, better known as the 'Fisheye effect'.<br/><br/>

            Easily enough for us, we already have what we need to fix this issue!<br/><br/>

            All we need to do is multiply our rays hitDist variable by cosine(angleFromPlayer) property.<br/><br/>

            This concept is known as vector projection and it's a really interesting topic. If you have interest in
            computer graphics or game development and are not aware of vector projection, check out these videos:<br/><br/>

            <a target={"_blank"} href="https://www.youtube.com/watch?v=fqPiDICPkj8&ab_channel=FireflyLectures">FireflyLectures</a> - 2D Projection<br/><br/>

            <a target={"_blank"} href="https://www.youtube.com/watch?v=Rw70zkvqEiE&ab_channel=TheOrganicChemistryTutor">TheOrganicChemistryTutor</a> - 3D/Orthogonal Components<br/><br/>

            Multiplying these two values will give us the final distance we need to calculate our line height!<br/><br/>

            Head over to our createRay function and add a renderDist property with a init value of 0.
            </p>
            <img src={img_10} alt ="" />
            <p className='learning-text-box'>
            Now, at the end of our updateRayProps function, 
            we can assign the new distance by using Math.cos() to get the projected distance along our players direction.
            </p>
            <img src={img_11} alt ="" />
            <p className='learning-text-box'>
            Alright, with everything in place let's finish up this renderRaycasts function!<br/><br/>

            As we previously mentioned, our line height needs to grow as our distance shrinks. 
            We can achieve this by simply dividing our viewHeight by our rays render distance.<br/><br/>

            The only issue is this will return a fairly small variable so we will want to multiply it to some scale, 
            we can just use cellSize for now OR feel free to test individual constants!
            </p>
            <img src={img_12} alt ="" />
            <p className='learning-text-box'>
            We need to ensure the line height gets capped to our viewHeight so we can do that using a conditional right after.
            </p>
            <img src={img_13} alt ="" />
            <p className='learning-text-box'>
            All it takes to render our final product is checking if a ray is hit, then rendering based on the line height!<br/><br/>

            Each line will actually be draw using fillRect but the width will be 1px.<br/><br/>

            We do need to position this rect properly though, remember fillRect takes in 4 args: x, y, w, h<br/><br/>

            - X: We will use the index r since this will be a value from 0 - viewWidth - 1<br/>
            - Y: (viewHeight / 2) - (lineHeight / 2) I believe this was also pulled from lodev.org<br/>
            - W: 1 since we want it to be 1px wide<br/>
            - H: Our lineHeight variable
            </p>
            <img src={img_14} alt ="" />
            <p className='learning-text-box'>
            Before you head back over to the canvas, we have a detail we can add to really make our rendering stand out.<br/><br/>

            We are currently keeping track of what side we are hitting on our cells, 
            so above our fillRect call we can switch the fillStyle based on what side our ray is hitting!<br/><br/>
            </p>
            <img src={img_15} alt="" />
            <p className='learning-text-box'>
            Save and head back over to the browser to see the final result!
            You should be able to move around, draw cells and see them render in real time.<br/><br/>
            </p>
            <div id="conclusion" name="conclusion" className='learning-text-box'>
                <h1 className='learning-text-title'>Conclusion</h1>
                <p>If you’ve made it to the end of this article I’d like to start by saying<br/><br/>

                THANK YOU!<br/><br/>

                This was my first attempt at creating an educational resource for public use. 
                Knowing I can help people learn something knew while doing something I love is what keeps me going.<br/><br/>

                I’d also like to shoutout some creators that helped aid in the learning proccess of this project.<br/><br/>

                TheCodingTrain<br/>
                Javidx9<br/>
                3Blue1Brown<br/>
                TheOrganicChemistryTutor<br/>

                These individuals are wonderful creators and are major inspirations behind my desire to teach.<br/><br/>

                With that being said, this wraps up the article.<br/><br/>

                I hope you gained alot of new knowledge along the way and always remember to never stop learning!</p>
            </div>
        </div>
    );
};

export default Final;