import { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  password: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}

const PasswordField = ({ password, onChange, error, setError }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };
  return (
    <TextField
      className='password-field'
      id='outlined-password-input'
      label='Password'
      type='password'
      autoComplete='current-password'
      margin='normal'
      value={password}
      onChange={handleChange}
      error={error}
      helperText={error ? 'Invalid username or password' : ''}
    />
  );
};

export default PasswordField;
