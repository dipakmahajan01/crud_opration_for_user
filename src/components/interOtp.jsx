/* eslint-disable jsx-a11y/tabindex-no-positive */
import { useState } from 'react';

export default function InsertOtp() {
  const [error, setError] = useState(false);
  const [otpVal, setOtpVal] = useState({
    firstDig: '',
    secDig: '',
    thirdDig: '',
    fourtDig: '',
  });

  function verifyOtp(e) {
    e.preventDefault();
    const {
      firstDig, secDig, thirdDig, fourtDig,
    } = otpVal;
    if (
      typeof firstDig === 'number'
      && typeof secDig === 'number'
      && typeof thirdDig === 'number'
      && typeof fourtDig === 'number'
    ) {
      setError(false);
    } else {
      setError(true);
    }
    console.log(otpVal);
  }

  function inputChange(e) {
    if (e.target.name === 'firstDig') {
      setOtpVal({
        firstDig: parseInt(e.target.value, 10),
        secDig: otpVal.secDig,
        thirdDig: otpVal.thirdDig,
        fourtDig: otpVal.fourtDig,
      });
    }

    if (e.target.name === 'secdDig') {
      setOtpVal({
        firstDig: otpVal.firstDig,
        secDig: parseInt(e.target.value, 10),
        thirdDig: otpVal.thirdDig,
        fourtDig: otpVal.fourtDig,
      });
    }

    if (e.target.name === 'thirdDig') {
      setOtpVal({
        firstDig: otpVal.firstDig,
        secDig: otpVal.secDig,
        thirdDig: parseInt(e.target.value, 10),
        fourtDig: otpVal.fourtDig,
      });
    }

    if (e.target.name === 'fourtDig') {
      setOtpVal({
        firstDig: otpVal.firstDig,
        secDig: otpVal.secDig,
        thirdDig: otpVal.thirdDig,
        fourtDig: parseInt(e.target.value, 10),
      });
    }
  }

  function changeFocus(e) {
    const { tabIndex } = e.target;
    if (tabIndex >= 0 && tabIndex < 4) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (tabIndex > 0) {
          e.target.form.elements[tabIndex - 1].focus();
        }
      } else {
        e.target.form.elements[tabIndex + 1].focus();
      }
    }
  }

  return (
    <form>
      <div className="d-flex flex-nowrap justify-content-around mx-auto w-75 my-5">
        <input
          className="form-control border-1 border-dark otpInput text-center"
          type="text"
          onChange={inputChange}
          onKeyUp={changeFocus}
          tabIndex={0}
          name="firstDig"
        />
        <input
          className="form-control border-1 border-dark otpInput text-center"
          type="text"
          onChange={inputChange}
          onKeyUp={changeFocus}
          tabIndex={1}
          name="secdDig"
        />
        <input
          className="form-control border-1 border-dark otpInput text-center"
          type="text"
          onChange={inputChange}
          onKeyUp={changeFocus}
          tabIndex={2}
          name="thirdDig"
        />
        <input
          className="form-control border-1 border-dark otpInput text-center"
          type="text"
          onChange={inputChange}
          onKeyUp={changeFocus}
          tabIndex={3}
          name="fourtDig"
        />
      </div>
      {
        error
      && (
      <div
        className="invalid-feedback my-3"
      >
        <p>Please insert OTP</p>
      </div>
      )
      }
      <button type="submit" className="btn btn-lg btn-primary" tabIndex={4} onClick={verifyOtp}>
        Verify
      </button>
    </form>
  );
}
