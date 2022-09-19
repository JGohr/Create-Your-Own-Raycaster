import { useNavigate } from "react-router";

function Header() {

    let navigate = useNavigate();

    return (
        <header>
        <div className='header-title'>
            <h1 onClick={() => {navigate('/')}} style={{cursor: 'pointer'}}>Create Your Own Raycaster</h1>
            <h2>Direct questions to <a href='https://twitter.com/devByPura'>@devByPura</a></h2>
        </div>
        <div className='header-links'>
            <a href='https://github.com/JGohr/TileMap-Raycaster'>Github Repo</a>
            <a onClick={() => {navigate('/demo')}} href=''>Demo</a>
        </div>
    </header>
    );
}

export default Header;