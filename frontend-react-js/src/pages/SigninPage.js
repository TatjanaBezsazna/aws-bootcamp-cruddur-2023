import './SigninPage.css';
import React from "react";
import {ReactComponent as Logo} from '../components/svg/logo.svg';
import { useAuth } from "react-oidc-context";

export default function SigninPage() {
  const auth = useAuth();

  return (
    <article className="signin-article">
      <div className='signin-info'>
        <Logo className='logo' />
      </div>
      <div className='signin-wrapper'>
          <div>
            <button onClick={() => auth.signinRedirect()}>Sign In</button>
          </div>
      </div>

    </article>
  );
}