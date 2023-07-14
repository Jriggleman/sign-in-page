import TextField from '@mui/material/TextField';

interface Props {
  username: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UsernameField = ({ username, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };
  return (
    <TextField
      className='username-field'
      id='outlined-required'
      label='Username'
      margin='normal'
      value={username}
      onChange={handleChange}
    />
  );
};

export default UsernameField;
