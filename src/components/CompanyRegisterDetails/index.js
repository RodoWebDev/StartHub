import React, { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import api from 'utils/api';
import { FaCalendar } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { VisaPackage } from 'utils/utils';
import { LoginContext } from 'contexts/LoginContextContainer';
import './styles.scss';

const CompanyRegisterDetails = () => {
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm();
  const { companyId } = useContext(LoginContext);
  const [member, setMember] = useState(1);
  const history = useHistory();

  const handleMemberChange = (e) => {
    setMember(e.target.value);
  }
  const onSubmit = async (data) => {
    const payload = {...data, companyId: companyId}
    const response = await api.registerCompanyDetails(payload);
    if (response.success) {
      alert('Company registered!');
      history.push('/details');
    } else {
      alert('Company register failure!');
    }
  }
  const values = watch();
  const required = () => {
    return <p>Required</p>;
  }
  let members = [];
  for (let i=0;i<member;i++) {
    members.push(i+1);
  }
  return (
    <section id="company_details_form">
      <div className="form">
        <h3 className="title">Company Registration Details</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="input-container">
              <input type="text" placeholder="Agent/Partner Name" {...register("partnerName", { required: true })} />
              {errors.partnerName?.type === 'required' && required()}
            </div>
          </div>
          <h3 className="sub-title">Set Your Company Name</h3>
          <div className="row">
            <div className="input-container">
              <select {...register("applicationType", { required: true })}>
                <option value="none">Application Type</option>
                <option value="New">New</option>
                <option value="Migration">Migration</option>
                <option value="Renewal">Renewal</option>
                <option value="Renewal with Amendment(s)">Renewal with Amendment(s) (Additional fees may apply)</option>
                <option value="Branch">Branch</option>
              </select>
              {values.applicationType === 'none' && required()}
            </div>
            <div className="input-container">
              <input type="text" placeholder="Company Name (in case of Branch)" {...register("companyName", { required: true })} />
              {errors.companyName?.type === 'required' && required()}
            </div>
            <div className="input-container">
              <input type="text" placeholder="Country of Registration of the Parent Company" {...register("countryOfRegistration", { required: true })} />
              {errors.countryOfRegistration?.type === 'required' && required()}
            </div>
            <div className="input-container">
              <input type="text" placeholder="Address of the Parent Company" {...register("addressOfParentCompany", { required: true })} />
              {errors.addressOfParentCompany?.type === 'required' && required()}
            </div>
          </div>
          <h3 className="small-title">English Company Name</h3>
          <div className="row">
            <div className="input-container">
              <input type="text" placeholder="Option 1" {...register("enCompanyName1")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Option 2" {...register("enCompanyName2")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Option 3" {...register("enCompanyName3")} />
            </div>
          </div>
          <h3 className="small-title">Arabic Company Name</h3>
          <div className="row">
            <div className="input-container">
              <input type="text" placeholder="Option 1" {...register("enCompanyName1")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Option 2" {...register("enCompanyName2")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Option 3" {...register("enCompanyName3")} />
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <select {...register("franchisee", { required: true })}>
                <option value="none">Are you going to operate as a franchisee?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              {values.franchisee === 'none' && required()}
            </div>
            {values.franchisee === "true" && <div className="input-container">
              <input type="text" placeholder="Trade Name" {...register("tradeName")} />
            </div>}
          </div>
          <h3 className="sub-title">Select Your Business Activities</h3>
          <div className="row">
            <div className="input-container">
              <select {...register("licenseType", { required: true })}>
                <option value="none">License Type</option>
                <option value="Commercial">Commercial (Includes Trade)</option>
                <option value="Professional">Professional (Includes Services & Consultancy)</option>
                <option value="Combination">Combination (Additional AED 2,000)</option>
              </select>
              {values.licenseType === 'none' && required()}
            </div>
            <div className="input-container">
              <select {...register("visaPackage", { required: true })}>
                <option value="none">Visa Package</option>
                {VisaPackage.map(item => (
                  <option value={item.value} key={item.name}>{item.name}</option>
                ))}
              </select>
              {values.visaPackage === 'none' && required()}
            </div>
            <div className="input-container">
              <select {...register("establishmentCard", { required: true })}>
                <option value="none">Do you want to apply for an Establishment Card?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              {values.establishmentCard === 'none' && required()}
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <input type="text" placeholder="Activity Number 1" {...register("activityNumber1")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Activity Name 1" {...register("activityName1")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Activity Number 2" {...register("activityNumber2")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Activity Name 2" {...register("activityName2")} />
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <input type="text" placeholder="Activity Number 3" {...register("activityNumber3")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Activity Name 3" {...register("activityName3")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Activity Number 4" {...register("activityNumber4")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Activity Name 4" {...register("activityName4")} />
            </div>
          </div>
          <h3 className="sub-title">Shareholding Type</h3>
          <div className="row">
            <div className="input-container">
              <input type="text" placeholder="Shareholding Type" {...register("shareholdingType")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Proposed Share Capital" {...register("proposedShareCaptial")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Share Value" {...register("shareValue")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Total Number of Shares" {...register("totalNumberOfShares")} />
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <input type="text" placeholder="General Manager Name:" {...register("generalManagerName")} />
            </div>
            <div className="input-container">
              <input type="text" placeholder="General Manager Signature:" {...register("generalManagerSignature")} />
            </div>
            <div className="input-container">
              <select {...register("terms", { required: true })}>
                <option value="none">I hereby confirm that I have read and I accept the attached Terms and Conditions</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              {values.establishmentCard === 'none' && required()}
            </div>
          </div>
          <h3 className="title">Add Company Members (Individual)</h3>
          <div className="row">
            <div className="input-container">
              <select value={member} onChange={handleMemberChange}>
                <option value={1}>1 Member</option>
                <option value={2}>2 Member</option>
                <option value={3}>3 Member</option>
                <option value={4}>4 Member</option>
                <option value={5}>5 Member</option>
              </select>
            </div>
          </div>
          {members.map(item => (
            <>
              <h3 className="sub-title">Company Member {item}</h3>
              <div className="row">
                <div className="input-container">
                  <select {...register(`role${item}`, { required: true })}>
                    <option value="none">Role(s)</option>
                    <option value="General Manager">General Manager/Representative</option>
                    <option value="Secretary">Secretary</option>
                    <option value="Director">Director</option>
                    <option value="Shareholder">Shareholder</option>
                  </select>
                  {values[`role${item}`] === 'none' && required()}
                </div>
                {values[`role${item}`] === "Shareholder" && <div className="input-container">
                  <input type="text" placeholder="If Shareholder, please indicate how many shares" {...register(`shares${item}`)} />
                </div>}
              </div>
              <div className="row">
                <div className="input-container">
                  <select {...register(`gender${item}`, { required: true })}>
                    <option value="none">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {values[`gender${item}`] === 'none' && required()}
                </div>
                <div className="input-container">
                  <select {...register(`salutation${item}`, { required: true })}>
                    <option value="none">Salutation</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                  {values[`salutation${item}`] === 'none' && required()}
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Mobile Phone" {...register(`mobilePhone${item}`)} />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Passport Number" {...register(`passportNumber${item}`)} />
                </div>
              </div>
              <div className="row">
                <div className="date-picker">
                  <FaCalendar className="calendar-icon" />
                  <Controller
                    control={control}
                    name={`passportIssueDate${item}`}
                    render={({ field }) => (
                      <ReactDatePicker
                        placeholderText='Passport Issue Date'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                </div>
                <div className="date-picker">
                  <FaCalendar className="calendar-icon" />
                  <Controller
                    control={control}
                    name={`passportExpiryDate${item}`}
                    render={({ field }) => (
                      <ReactDatePicker
                        placeholderText='Passport Expiry Date'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Place of Issue" {...register(`placeOfIssue${item}`)} />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Passport Country of Issue" {...register(`placeCountryOfIssue${item}`)} />
                </div>
              </div>
              <div className="row">
                <div className="date-picker">
                  <FaCalendar className="calendar-icon" />
                  <Controller
                    control={control}
                    name={`countryOfBirth${item}`}
                    render={({ field }) => (
                      <ReactDatePicker
                        placeholderText='Country of Birth'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                </div>
                <div className="date-picker">
                  <FaCalendar className="calendar-icon" />
                  <Controller
                    control={control}
                    name={`dateOfBirth${item}`}
                    render={({ field }) => (
                      <ReactDatePicker
                        placeholderText='Date of Birth'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Current Nationality" {...register(`currentNationality${item}`)} />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Previous Nationality (if applicable)" {...register(`previousNationality${item}`)} />
                </div>
              </div>
              <div className="row">
                <div className="input-container">
                  <select {...register(`foreignPassport${item}`, { required: true })}>
                    <option value="none">Are you an Arab holding a foreign passport?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  {values.foreignPassport === 'none' && required()}
                </div>
                <div className="input-container">
                  <select {...register(`isResidentOfUAE${item}`, { required: true })}>
                    <option value="none">Is resident of UAE?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  {values.isResidentOfUAE === 'none' && required()}
                </div>
              </div>
              {values.isResidentOfUAE === "true" && <div className="row">
                <div className="input-container">
                  <input type="text" placeholder="Provide UID Number" {...register(`uidNumber${item}`)} />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Provide Emirates ID Number" {...register(`emiratesIdNumber${item}`)} />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="File Number" {...register(`fileNumber${item}`)} />
                </div>
              </div>}
              {values.isResidentOfUAE === "false" && <div className="row">
                <div className="input-container half">
                  <select {...register(`visitOrResidLast5Years${item}`, { required: true })}>
                    <option value="none">If Not, have you visited/resided in the UAE within the last 5 years?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  {values.visitOrResidLast5Years === 'none' && required()}
                </div>
                <div className="input-container half">
                  <input type="text" placeholder="If you know your UID number, please provide" {...register(`uidNumber5Years${item}`)} />
                </div>
              </div>}
              <h3 className="small-title">Full Address</h3>
              <div className="row">
                <div className="input-container">
                  <input type="text" placeholder="Address Line 1" {...register(`addressLine1${item}`, { required: true })} />
                  {errors[`addressLine1${item}`]?.type === 'required' && required()}
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Address Line 2" {...register(`addressLine2${item}`)} />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="PO Box" {...register(`poBox${item}`)} />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Postal Code" {...register(`postalCode${item}`)} />
                </div>
              </div>
              <div className="row">
                <div className="input-container">
                  <input type="text" placeholder="City" {...register(`city${item}`, { required: true })} />
                  {errors[`city${item}`]?.type === 'required' && required()}
                </div>
                <div className="input-container">
                  <input type="text" placeholder="State Province" {...register(`state${item}`, { required: true })} />
                  {errors[`state${item}`]?.type === 'required' && required()}
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Country" {...register(`country${item}`, { required: true })} />
                  {errors[`country${item}`]?.type === 'required' && required()}
                </div>
              </div>
              <h3 className="small-title">Representative’s Father’s Full Name</h3>
              <div className="row">
                <div className="input-container">
                  <input type="text" placeholder="First Name" {...register(`fatherFirstName${item}`, { required: true })} />
                  {errors[`fatherFirstName${item}`]?.type === 'required' && required()}
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Middle Name" {...register(`fatherMiddleName${item}`, { required: true })} />
                  {errors[`fatherMiddleName${item}`]?.type === 'required' && required()}
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Last Name" {...register(`fatherLastName${item}`, { required: true })} />
                  {errors[`fatherLastName${item}`]?.type === 'required' && required()}
                </div>
              </div>
              <div className="row">
                <div className="input-container">
                  <input type="text" placeholder="General Manager Name" {...register(`generalManagerName${item}`, { required: true })} />
                  {errors[`generalManagerName${item}`]?.type === 'required' && required()}
                </div>
                <div className="input-container">
                  <input type="text" placeholder="General Manager Signature:" {...register(`generalManagerSignature${item}`)} />
                </div>
              </div>
            </>
          ))}
          <input className="btn submit" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

export default CompanyRegisterDetails;