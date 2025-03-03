import './JoinSection.css';
import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

export default function JoinSection(props) {
  const auth = useAuth();
  return (
    <div className="join">
      <div className='join-title'>
        Join The Party!
      </div>
      <div className='join-content'>
        <p>
          Have something you want to say?
        </p>
        <p>
          Don't think about it, just crud it!
        </p>
        <p>
          Regret it? No worries, We'll forget it...
        </p>
        <Link to="/signup" className="action">
          Join Now!
        </Link>
        <button type='submit' onClick={() => {auth.signinRedirect()}}>Sign In!</button>
      </div>
    </div>
  );
}