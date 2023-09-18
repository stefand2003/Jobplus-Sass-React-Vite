import '../styles/form.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import parseErrors from '../../utils/parseErrors';
import Alert from '../../alert/Alert';

export default function reset_password() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [alert, setAlert] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      password,
      passwordConfirmation,
      code,
    };

    try {
      await axios.post('http://localhost:1337/api/auth/reset-password', data);
      setPassword('');
      setPasswordConfirmation('');
      navigate('/login');
    } catch (error) {
      setAlert(parseErrors(error));
    }
  };

  return (
    <>
      <Alert data={alert} />
      <form className='form form--page' onSubmit={handleSubmit}>
        <div className='form__group form__group--page'>
          <label className='form__label'>Choose password</label>
          <input
            className='form__field'
            type='password'
            placeholder='Choose password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='form__group form__group--page'>
          <label className='form__label'>Confirm Password</label>
          <input
            className='form__field'
            type='password'
            placeholder='Confirm Password'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>

        <div className='form__group form__group--page'>
          <input className='form__btn' type='submit' value='Reset Password' />
        </div>
      </form>
    </>
  );
}
