import { useState } from 'react';
import Axios from 'axios';
import UsernameField from './components/UsernameField';
import PasswordField from './components/PasswordField';
import SignInButton from './components/SignInButton';
import Stack from '@mui/material/Stack';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);

  //update state when username is being typed
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    checkDisabled();
  };

  //update state when password is being typed
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    checkDisabled();
  };

  //disable sign in button if username and password fields have no text
  const checkDisabled = () => {
    if (username === '' || password === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  //go to server and check if username and password
  //are equal to values that already exist
  const handleSignIn = () => {
    Axios.get('http://localhost:5000/users', {
      params: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        setError(false);
        const users = response.data;
        if (users.username === username && users.password === password) {
          console.log('Login Successful');
          setUsername('');
          setPassword('');
        } else {
          console.log('Login Failed');
          setError(true);
          setPassword('');
          setDisabled(true);
        }
      })
      .catch((error) => console.log('Problem signing in'));
  };

  return (
    <Stack alignItems='center'>
      <UsernameField username={username} onChange={handleUsername} />
      <PasswordField
        password={password}
        onChange={handlePassword}
        error={error}
        setError={setError}
      />
      <SignInButton onClick={handleSignIn} disabled={disabled} />
    </Stack>
  );
}

export default App;
