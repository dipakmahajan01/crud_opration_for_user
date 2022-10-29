import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InsertOtp from './interOtp';

export default function EmailComform() {
  // eslint-disable-next-line react/prop-types
  const emailID = useLocation().state.email;
  const [email] = useState(emailID);

  const [otpSend, setOptSend] = useState(false);

  function sendOTP() {
    setOptSend(true);
  }
  return (
    <div className="h-100vh text-center d-flex justify-content-center align-items-center">
      <div>
        <h3>Email validation</h3>
        <p>
          Please check your email
          {' '}
          <strong>{email}</strong>
          {' '}
          and click below on send OTP
        </p>
        {
          !otpSend
            ? <button type="button" className="btn btn-primary" onClick={sendOTP}>Send OTP</button>
            : <InsertOtp />

        }
      </div>
    </div>
  );
}
