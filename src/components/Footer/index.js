import React from 'react';
import { useForm } from 'react-hook-form';
import logo from 'assets/images/logo-light.png';
import api from 'utils/api';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const response = await api.sendEmail(data);
    if (response.success) {
      alert('Email was sent successfully!')
    } else {
      alert('Email sending is failure!')
    }
  }

  return(
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="address">
          <div className="logo">
            <img src={logo} alt="logo" width="192"/>
          </div>
          <br />
          <address>
            <div className="location">
              <span className="icon"><FaMapMarkerAlt /></span>
              <p>14th Floor, 1 Boulevard Plaza Tower, Sheikh Mohammed Bin Rashid Boulevard Downtown, Dubai, Arab Emirates</p>
            </div>
            <br />
            <br />
            <div className="phonenumber">
              <span className="icon"><FaPhoneAlt /></span>
              <p>+971 4 368 0833 +971 4 455 8556</p>
            </div>
          </address>
        </div>
        <div className="contactus">
          <h2>SEND US A MESSAGE</h2>
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="user-info">
                <div className="input-container">
                  <input type="text" placeholder="Name" {...register("name", {required: true, max: 20, min: 3, maxLength: 20})} />
                  {errors.name?.type === 'required' && <p>"Name is required"</p>}
                </div>
                <div className="input-container">
                  <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
                  {errors.Email && <p>Email name is required</p>}
                </div>
              </div>
              <div className="message">
                <textarea placeholder="Your message here..." {...register("message", { min: 18, max: 99 })} />  
              </div>
              <input className="btn submit" type="submit" value="SEND"/>
            </form>
          </div>
        </div>
      </div>
      <div className="title">
        <h4>StartHub Agency © 2023 by ISAP Solutions</h4>
      </div>
    </footer>
  )
}

export default Footer;