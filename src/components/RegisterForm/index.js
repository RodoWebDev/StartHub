import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import './styles.scss';

const RegisterForm = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <section id="register_form">
        <div className="form">
          <h3 className="title">Company Registration Application</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <input type="text" placeholder="First Name" {...register("firstname", { max: 20, min: 3, maxLength: 20 })} />
              {errors.firstname?.type === 'required' && "First Name is required"}
              <input type="text" placeholder="Last Name" {...register("lastname", { max: 20, min: 3, maxLength: 20 })} />
              {errors.lastname?.type === 'required' && "Last Name is required"}
            </div>
            <div className="row">
              <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
              {errors.email && "Email name is required"}
              <input type="tel" placeholder="Phone" {...register("number", { required: true, minLength: 6, maxLength: 12 })} />
              {errors.number && "Phone number is required"}
            </div>
            <div className="row">
              <div className="business">
                <select {...register("businesstype", { required: true })}>
                  <option value="none">Select Business Type</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div className="date-picker">
                <Controller
                  control={control}
                  name='date-input'
                  render={({ field }) => (
                    <ReactDatePicker
                      placeholderText='Application Date'
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                    />
                  )}
                />
              </div>
            </div>
            <div className="row upload">
              <div id="file_uploader">
                <input type="file" {...register("document", { required: true, minLength: 6, maxLength: 12 })} />
                <span id='val'></span>
                <span id='button'><i className="fas fa-cloud-download"></i> Drop Your Documents Here</span>
              </div>
            </div>
            <input className="btn submit" type="submit" value="APPLY NOW" />
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterForm;