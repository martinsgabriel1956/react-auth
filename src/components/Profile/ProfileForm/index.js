import { useContext, useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";

import { Container, Control, Action } from "./styles";

export function ProfileForm() {
  const newPasswordInputRef = useRef();
  const { token } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();

    const newPassword = newPasswordInputRef.current.value;

    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBIfWrde8TkiZmWittDscqthJfUMkVswIU', {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        password: newPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {

    })

  };

  return (
    <Container onSubmit={handleSubmit}>
      <Control>
        <label htmlFor="new-password">New Password</label>
        <input ref={ newPasswordInputRef } type="password" minLength={7} id="new-password" />
      </Control>
      <Action>
        <button>Change Password</button>
      </Action>
    </Container>
  );
}
