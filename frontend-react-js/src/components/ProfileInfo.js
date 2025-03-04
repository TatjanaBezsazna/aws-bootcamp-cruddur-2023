import './ProfileInfo.css';
import {ReactComponent as ElipsesIcon} from './svg/elipses.svg';
import React from "react";
import { useAuth } from "react-oidc-context";

export default function ProfileInfo(props) {
  const [popped, setPopped] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const auth = useAuth();
  
  const click_pop = (event) => {
    setPopped(!popped)
  }

  const signOut = () => {
    const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
    const logoutUri = "https://3000-tatjanabezs-awsbootcamp-8uqsd4528tg.ws-eu118.gitpod.io";
    const cognitoDomain = process.env.REACT_APP_COGNITO_DOMAIN;
    setUser(undefined)
    auth.removeUser()
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  const classes = () => {
    let classes = ["profile-info-wrapper"];
    if (popped == true){
      classes.push('popped');
    }
    return classes.join(' ');
  }

  return (
    <div className={classes()}>
      <div className="profile-dialog">
        <button onClick={() => signOut()}>Sign Out</button> 
      </div>
      <div className="profile-info" onClick={click_pop}>
        <div className="profile-avatar"></div>
        <div className="profile-desc">
          <div className="profile-display-name">{props.user.display_name || "My Name" }</div>
          <div className="profile-username">@{props.user.handle || "handle"}</div>
        </div>
        <ElipsesIcon className='icon' />
      </div>
    </div>
  )
}