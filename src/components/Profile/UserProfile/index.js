import { Container } from './styles';

import { ProfileForm } from '../ProfileForm';

export function UserProfile() {
  return (
    <Container>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </Container>
  );
};
