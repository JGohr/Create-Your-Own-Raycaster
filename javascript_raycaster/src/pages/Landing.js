import './Landing.css';
import { useNavigate } from 'react-router-dom';

function Landing() {

  let navigate = useNavigate();

  return (
    <div className="Landing">
      <div className="landing-content">
        <h1>Create Your Own Raycaster In Javascript</h1>
        <p>An educational article on the concepts and implementation of the
        rendering technique known as "Ray Casting”</p>
        <div className='landing-buttons'>
          <button onClick={() => {navigate('demo')}} id="demo-button">Demo</button>
          <button onClick={() => {navigate('learning-intro')}} id="learn-button">Learn</button>
        </div>
      </div>
      <footer className='footer'>
        <a href='https://github.com/JGohr/Create-Your-Own-Raycaster'>View Github Repo</a>
        <p>Direct questions to <a href='https://twitter.com/devByPura'><b>@devByPura</b></a></p>
      </footer>
    </div>
  );
}

export default Landing;
