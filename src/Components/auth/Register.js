import { useDispatch } from 'react-redux';
import { REGISTER } from '../../redux/user/actions';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = () => {
    // Your registration logic
    dispatch(REGISTER(/* registration data */));
  };

  return (
   <>
    {/* Register jsx */}
   </>
  )
}

export default Register;
