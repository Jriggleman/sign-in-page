import Button from '@mui/material/Button';

interface Props {
  disabled: boolean;
  onClick: () => void;
}

const SignInButton = ({ disabled, onClick }: Props) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <Button
      className='sign-in-button'
      variant='contained'
      onClick={handleClick}
      disabled={disabled}
      style={{ minWidth: '225px' }}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
