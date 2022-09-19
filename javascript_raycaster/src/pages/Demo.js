import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {timer} from "https://cdn.skypack.dev/d3-timer@3";
import Header from '../comps/Header.js';
import './Demo.css';

function Demo() {

    useEffect(() => {
        const canvas = document.getElementById('grid');
        const ctx = canvas.getContext('2d');
        let canvasRect;
        const renderCanvas = document.getElementById('render');
        const renderCtx = renderCanvas.getContext('2d');

        let worldMap;

        const cellSize = 40;
        const mapHeight = 12;
        const mapWidth = 15;
        const viewWidth = 720;
        const viewHeight = 480;

        let maxDist;
        let fov = degToRadians(60);

        let gameLoop;

        const Player = {
            position: { x: 0, y: 0 },
            direction: {x: 0, y: -1},
            speed: 0,
            rotSpeed: .07,
            mouseCell: { x: 0, y: 0 },
            currentCell: {x: 0, y: 0},
            rays: [],
            cellPosition: {x: 0, y: 0},
        };

        const inputController = {
            'KeyW': {pressed: false, fn: function(){
                let projectedX = Player.position.x + Player.direction.x * Player.speed;
                let projectedY = Player.position.y + Player.direction.y * Player.speed;
                let projCell = {x: parseInt(projectedX / cellSize), y: parseInt(projectedY / cellSize)};

                if(playerCollisionCheck(projCell))
                {
                    Player.position.x = projectedX;
                    Player.position.y = projectedY;
                }
            }},
            'KeyA': {pressed: false, fn: function(){
                let newDir = rotateVector(Player.direction, degToRadians(-90));
                let projectedX = Player.position.x + newDir.x * Player.speed;
                let projectedY = Player.position.y + newDir.y * Player.speed;
                let projCell = {x: parseInt(projectedX / cellSize), y: parseInt(projectedY / cellSize)};

                if(playerCollisionCheck(projCell))
                {
                    Player.position.x = projectedX;
                    Player.position.y = projectedY;
                }
            }},
            'KeyS': {pressed: false, fn: function(){
                let projectedX = Player.position.x - Player.direction.x * Player.speed;
                let projectedY = Player.position.y - Player.direction.y * Player.speed;
                let projCell = {x: parseInt(projectedX / cellSize), y: parseInt(projectedY / cellSize)};

                if(playerCollisionCheck(projCell))
                {
                    Player.position.x = projectedX;
                    Player.position.y = projectedY;
                }
            }},
            'KeyD': {pressed: false, fn: function(){
                let newDir = rotateVector(Player.direction, degToRadians(90));
                let projectedX = Player.position.x + newDir.x * Player.speed;
                let projectedY = Player.position.y + newDir.y * Player.speed;
                let projCell = {x: parseInt(projectedX / cellSize), y: parseInt(projectedY / cellSize)};

                if(playerCollisionCheck(projCell))
                {
                    Player.position.x = projectedX;
                    Player.position.y = projectedY;
                }

            }},
            'ArrowLeft': {pressed: false, fn: function(){

                let newDirection = {x: 0, y: 0};
                newDirection = rotateVector(Player.direction, -Player.rotSpeed);
                Player.direction = newDirection;
            }},
            'ArrowRight': {pressed: false, fn: function(){
                let newDirection = {x: 0, y: 0};
                newDirection = rotateVector(Player.direction, Player.rotSpeed);
                Player.direction = newDirection;
            }},
            'mousedown': {pressed: false, fn: function(){
                if( (Player.mouseCell.y >= 0 && Player.mouseCell.y < mapHeight) && (Player.mouseCell.x >= 0 && Player.mouseCell.x < mapWidth))
                    worldMap[Player.mouseCell.y * mapWidth + Player.mouseCell.x] = 1;
            }},
        }

        function playerCollisionCheck(projCell)
        {
            if(worldMap[projCell.y * mapWidth + projCell.x] != 1)
            {
                return true;
            }

            return false;
        }

        function generateMap() {

            let wm = Array(mapHeight * mapWidth).fill(0);

            for(let y = 0; y < mapHeight; y++)
            {
                for(let x = 0; x < mapWidth; x++)
                {
                    //Generate a border around the map
                    if(y == 0 || y == mapHeight - 1 || x == 0 || x == mapWidth - 1)
                    {
                        wm[y * mapWidth + x] = 1;
                    }
                }
            }

            return wm;
        }

        function createRay()
        {
            return {
                angleFromPlayer: 0,
                direction: { x: 0.0, y: 0.0 },
                unitStepSize: { x: 0, y: 0 },
                cellToCheck: { x: 0, y: 0 },
                travelDist: { x: 0, y: 0 },
                stepDirection: { x: 0, y: 0 },
                hit: false,
                hitDist: 0,
                sideHit: 0,
                renderDist: 0,
            };
        }

        function degToRadians(deg)
        {
            return deg * (Math.PI / 180);
        }

        function rotateVector(v, radian)
        {
            let newVector = {x: 0, y: 0};

            newVector.x = v.x * Math.cos(radian) - v.y * Math.sin(radian);
            newVector.y = v.x * Math.sin(radian) + v.y * Math.cos(radian);

            return newVector;
        }

        function updateRayProps() {
            let halfFOV = fov / 2;

            let initialAngleVector = rotateVector(Player.direction, -halfFOV);

            let rayDirStep = fov / viewWidth;

            for(let r in Player.rays)
            {
                let Ray = Player.rays[r];

                if(r == 0)
                {
                    Ray.direction = initialAngleVector; 
                    Ray.angleFromPlayer = -halfFOV; 
                }
                else
                {
                    let rotAmount = (rayDirStep * r)
                    Ray.direction = rotateVector(initialAngleVector, rotAmount);
                    Ray.angleFromPlayer = -halfFOV + rotAmount; 
                }

                Ray.cellToCheck.x = Player.currentCell.x;
                Ray.cellToCheck.y = Player.currentCell.y;

                Ray.unitStepSize.x = (Math.abs(1 / Ray.direction.x)) * cellSize;
                Ray.unitStepSize.y = (Math.abs(1 / Ray.direction.y)) * cellSize;
            
                if(Ray.direction.x < 0)
                {
                    Ray.stepDirection.x = -1;
                    Ray.travelDist.x = (Player.cellPosition.x) * Ray.unitStepSize.x;
                }
                else
                {
                    Ray.stepDirection.x = 1;
                    Ray.travelDist.x = (1.0 - Player.cellPosition.x) * Ray.unitStepSize.x;
                }
            
                if(Ray.direction.y < 0)
                {
                    Ray.stepDirection.y = -1;
                    Ray.travelDist.y = (Player.cellPosition.y) * Ray.unitStepSize.y;
                }
                else
                {
                    Ray.stepDirection.y = 1;
                    Ray.travelDist.y = (1.0 - Player.cellPosition.y) * Ray.unitStepSize.y;
                }
            
                checkForCollision(Ray);

                if(!Ray.hit)
                {
                    Ray.hitDist = 0;
                }
                else if(Ray.hit && Ray.hitDist > maxDist)
                {
                    Ray.hitDist = 0;
                    Ray.hit = false;
                }

                Ray.renderDist = Ray.hitDist * Math.cos(Ray.angleFromPlayer);
            }
        }

        function updatePlayerProps()
        {
            Player.currentCell.x = parseInt( Player.position.x / cellSize );
            Player.currentCell.y = parseInt( Player.position.y / cellSize );

            Player.cellPosition.x = ( Player.position.x - (cellSize * Player.currentCell.x) ) / cellSize;
            Player.cellPosition.y = ( Player.position.y - (cellSize * Player.currentCell.y) ) / cellSize;
        }

        function callInputController() {
            Object.keys(inputController).forEach(key => {
                if(inputController[key].pressed)
                    inputController[key].fn();
            });
        }

        function checkForCollision(Ray) 
        {
            Ray.hit = false;

            while(!Ray.hit && Ray.hitDist < maxDist)
            {
                if(Ray.travelDist.x < Ray.travelDist.y)
                {
                    Ray.hitDist = Ray.travelDist.x;
                    Ray.travelDist.x += Ray.unitStepSize.x;
                    Ray.cellToCheck.x += Ray.stepDirection.x;
                    Ray.sideHit = 0;
                }
                else
                {
                    Ray.hitDist = Ray.travelDist.y;
                    Ray.travelDist.y += Ray.unitStepSize.y;
                    Ray.cellToCheck.y += Ray.stepDirection.y;
                    Ray.sideHit = 1;
                }
            
                if(worldMap[Ray.cellToCheck.y * mapWidth + Ray.cellToCheck.x] == 1)
                    Ray.hit = true;
            }
        }

        function updateMousePosition(e) {
            let tmpMouseCell = {
                x: parseInt((e.clientX - canvasRect.left) / cellSize),
                y: parseInt((e.clientY - canvasRect.top) / cellSize),
            };

            Player.mouseCell = tmpMouseCell;
        }

        function renderRaycasts() 
        {
            for(let r in Player.rays)
            {
                renderCtx.fillStyle = '#042122';
                renderCtx.fillRect(r, 0, 1, viewHeight / 2);
                renderCtx.fillStyle = '#cac2b4';
                renderCtx.fillRect(r, viewHeight / 2, 1, viewHeight);

                let Ray = Player.rays[r];

                let lineHeight = (viewHeight / Ray.renderDist) * cellSize;

                if(lineHeight > viewHeight)
                lineHeight = viewHeight;
                

                if(Ray.hit)
                {
                    if(Ray.sideHit == 0)
                        renderCtx.fillStyle = '#ff3c3c';
                    else if(Ray.sideHit == 1)
                        renderCtx.fillStyle = '#00dddd';

                    renderCtx.fillRect(r, viewHeight / 2 - lineHeight / 2, 1, lineHeight);
                }
            }

            renderCtx.clearRect(0, 0, renderCtx.width, renderCtx.height);
        }

        function drawMap() {
            ctx.strokeStyle = '#FFFFFF';

            for (let y = 0; y < mapHeight; y++) {
                for (let x = 0; x < mapWidth; x++) {
                    switch (worldMap[y * mapWidth + x]) {
                        case 0:
                            ctx.fillStyle = '#220504';
                            break;
                        case 1:
                            ctx.fillStyle = '#d040e0';
                            break;
                    }

                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }

        function drawPlayer() {
            ctx.fillStyle = '#9734FF';
            ctx.beginPath();
            ctx.arc(Player.position.x, Player.position.y, cellSize / 6, 0, 2 * Math.PI);
            ctx.fill();
        }

        function drawRay() {
            ctx.strokeStyle = '#54ff00';
            for(let r in Player.rays)
            {
                let Ray = Player.rays[r];
            
                let x = Player.position.x;
                let y = Player.position.y;

                if(Ray.hitDist > 0)
                {
                    x += Ray.direction.x * Ray.hitDist;
                    y += Ray.direction.y * Ray.hitDist;
                }
                else
                {
                    x += Ray.direction.x * maxDist;
                    y += Ray.direction.y * maxDist;
                }
                
                ctx.beginPath();
                ctx.moveTo(Player.position.x, Player.position.y);
                ctx.lineTo(x, y);
                ctx.stroke();
            }
        }

        function drawCollision()
        {
            for(let r in Player.rays)
            {
                let Ray = Player.rays[r];

                if(Ray.hit)
                {
                    let colX = Player.position.x + (Ray.direction.x * Ray.hitDist);
                    let colY = Player.position.y + (Ray.direction.y * Ray.hitDist);
                
                    ctx.fillStyle = '#FE2836';
                    ctx.beginPath();
                    ctx.arc(colX, colY, 1, 0, 2 * Math.PI);
                    ctx.fill();
                }
            }
        }

        function keyDownHandler(e) { 
            if(inputController[e.code])
                inputController[e.code].pressed = true;
        }

        function keyUpHandler(e) { 
            if(inputController[e.code])
                inputController[e.code].pressed = false;
        }

        function mouseDownHandler(e) {
            if(inputController[e.type])
                inputController[e.type].pressed = true;
        }

        function mouseUpHandler(e) {
            inputController['mousedown'].pressed = false;
        }

        function Init() {
            canvas.width = cellSize * mapWidth;
            canvas.height = cellSize * mapHeight;

            renderCanvas.width = viewWidth;
            renderCanvas.height = viewHeight;

            Player.position.x = (mapWidth * cellSize) / 2;
            Player.position.y = (mapHeight * cellSize) / 2;

            Player.speed = cellSize / 20;
            
            worldMap = generateMap();

            maxDist = (mapHeight > mapWidth ? mapHeight * cellSize : mapWidth * cellSize);

            canvasRect = canvas.getBoundingClientRect();

            window.addEventListener('keydown', keyDownHandler);

            window.addEventListener('keyup', keyUpHandler);

            window.addEventListener('mousedown', mouseDownHandler);
            
            window.addEventListener('mouseup', mouseUpHandler);

            window.addEventListener('mousemove', updateMousePosition);

            document.getElementById('reset').addEventListener('click', () => {
                worldMap = generateMap();
            });

            for(let i = 0; i < viewWidth; i++)
            {
                Player.rays.push(createRay());
            }
        }

        function Update() {
            callInputController();
            updatePlayerProps();
            updateRayProps();
        }

        function Render() {
            drawMap();
            drawPlayer();
            drawRay();
            drawCollision();
            renderRaycasts();
        }

        Init();

        gameLoop = timer(() => {
            Update();
            Render();
        });

        return () => {
            window.removeEventListener('mousedown', mouseDownHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
            window.removeEventListener('keyup', keyUpHandler);
            window.removeEventListener('keydown', keyDownHandler);
            window.removeEventListener('mousemove', updateMousePosition);
            gameLoop.stop();
        }
    }, []);

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="demo">
            <div className="landing-content">
                <h1>Create Your Own Raycaster In Javascript</h1>
                <p>An educational article on the concepts and implementation of the
                rendering technique known as "Ray Casting”.
                Going into concepts such as scalar projection, re-working pythagorean theorem, DDA line drawing algorithm and more to bring a 
                resource for aspiring javascript developers to test their knowledge while creating a intriguing project.</p>
                <div className='demo-buttons'>
                    <button onClick={() => {window.open('https://github.com/JGohr/TileMap-Raycaster')}} id='source-btn'>View Source Code</button>
                    <button onClick={() => {navigate('/learning-intro')}} id='navLanding'>Build This Project</button>
                </div>
            </div>
            <div className="demo-screens">
                <div className='demo-controls'>
                    <div className='demo-text'>
                        <h1 id='demo-header'>Controls:</h1>
                        <p id='controls'>Movement: WASD | Rotation: Left & Right Arrows<br/>
                        Left Click/Drag to draw walls</p>
                    </div>
                    <div className="demo-buttons">
                        <button id='reset'>Reset Map</button>
                    </div>
                </div>
                <canvas id='grid'></canvas>
                <canvas id='render'></canvas>
            </div>
        </div>
    );
};

export default Demo;