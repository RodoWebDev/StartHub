import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import { FaCloudDownloadAlt, FaCalendar } from 'react-icons/fa';
import api from 'utils/api';
import { ACTIVITIES_LIST } from 'utils/activities';
import { LoginContext } from 'contexts/LoginContextContainer';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const RegisterForm = (props) => {
  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const { type, formType, formTitle, submitButtonText, dropText } = props;
  const { setCompanyId } = useContext(LoginContext);
  const history = useHistory();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.document[0]);
    formData.append("businessType", data.businessType);
    formData.append("applicationDate", data.applicationDate);
    formData.append("email", data.email);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("phone", data.phone);
    formData.append("activityType", data.activityType);
    if (type === "business") {
      const response = await api.registerCompany(formData);
      if (response.success) {
        alert('Company registered!');
        setCompanyId(response.data);
        history.push('/details');
      } else {
        alert('Company register failure!');
      }
    }
  }

  return (
    <section id="register_form">
      <div className="form">
      <h3 className="title">{formTitle}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <input type="text" placeholder="First Name" {...register("firstName", { max: 20, min: 3, maxLength: 20 })} />
            {errors.firstName?.type === 'required' && "First Name is required"}
            <input type="text" placeholder="Last Name" {...register("lastName", { max: 20, min: 3, maxLength: 20 })} />
            {errors.lastName?.type === 'required' && "Last Name is required"}
          </div>
          <div className="row">
            <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
            {errors.email && "Email name is required"}
            <input type="tel" placeholder="Phone" {...register("phone", { required: true, minLength: 6, maxLength: 12 })} />
            {errors.phone && "Phone number is required"}
          </div>
          <div className="row">
            {formType === 'visa' && <div className="business">
              <select {...register("visa", { required: true })}>
                <option value="none">Visa</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>}
            {formType !== 'visa' && <div className="business">
              <select {...register("businessType", { required: true })}>
                <option value="none">Select Business Type</option>
                <option value="Technology">Technology</option>
                <option value="Non-Technology">Non-Technology</option>
              </select>
            </div>}
            {formType !== 'funding' && <div className="date-picker">
              <FaCalendar className="calendar-icon" />
              <Controller
                control={control}
                name='applicationDate'
                render={({ field }) => (
                  <ReactDatePicker
                    placeholderText='Application Date'
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
            </div>}
            {formType === 'funding' && <div className="business">
              <select {...register("fundRaising", { required: true })}>
                <option value="none">Are you actively fund raising for current or upcoming?</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>}
          </div>
          {formType === 'funding' && <div className="row">
            <div className="business">
              <select {...register("firstCrowdFunding", { required: true })}>
                <option value="none">Is this your first crowd funding?</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div className="business">
              <select {...register("loan", { required: true })}>
                <option value="none">How much do you want to loan now?</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
          </div>}
          {type === 'business' && <div className="row">
            <div className="activity">
              <select {...register("activityType", { required: true })}>
                {ACTIVITIES_LIST.map(activitiy => (
                  <option value={activitiy.name} key={activitiy.name}>{activitiy.name}</option>
                ))}
              </select>
            </div>
          </div>}
          {formType === 'original' && <div className="row upload">
            <div id="file_uploader">
              <input type="file" {...register("document", { required: true })} />
              <span id='val'></span>
              <span id='button'><FaCloudDownloadAlt />{dropText ? dropText : 'Drop Your Documents Here'}</span>
            </div>
          </div>}
          <input className="btn submit" type="submit" value={submitButtonText} />
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;