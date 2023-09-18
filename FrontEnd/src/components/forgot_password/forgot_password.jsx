import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.scss';
import Alert from '../../alert/Alert';
import parseErrors from '../../utils/parseErrors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function forgot_password() {
  const [email, setEmail] = useState('');

  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault('');

    const data = {
      email,
    };

    try {
      await axios.post('http://localhost:1337/api/auth/forgot-password', data);
      setAlert({
        message: 'Check your email for a reset link',
        type: 'success',
      });
      setEmail('');
    } catch (error) {
      setAlert(parseErrors(error));
    }
  };

  return (
    <>
      <Alert data={alert} />
      <form class='form form--page' onSubmit={handleSubmit}>
        <div class='form__group form__group--page'>
          <label class='form__label'>Email</label>
          <input
            class='form__field'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class='form__group form__group--page'>
          <input class='form__btn' type='submit' value='Request' />
        </div>

        <footer>
          Remembered your password? <Link to='/login'>Login</Link>
        </footer>
      </form>
    </>
  );
}
