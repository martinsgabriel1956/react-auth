import { Container, Control, Action } from "./styles";

export function ProfileForm() {
  return (
    <Container>
      <Control>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />
      </Control>
      <Action>
        <button>Change Password</button>
      </Action>
    </Container>
  );
}
