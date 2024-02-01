import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Form = ({ title, date }) => {

  const notify = () => toast("Ticket Booked");

  const [formData, setFormData] = useState({
    movieName: title,
    premiereDate: date,
    name: '',
    city: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('userDetails', JSON.stringify(formData));

    setFormData({
      movieName: title,
      premiereDate: date,
      name: '',
      city: '',
    });
  };

  return (
    <>
      <div>
        <div className="content">
          <h4 style={{ fontFamily: 'sans-serif' }}>Movie Name - {title}</h4>
          <h6>Premier - {date}</h6>
        </div>
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder='your name'
              className="form-control"
              id="validationCustom01"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">
              City
            </label>
            <input
              type="text"
              placeholder='city '
              className="form-control"
              id="validationCustom03"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <br />
          <div >
           <p style={{color:"grey",}}> You don't have to worry about filling in details, just book a ticket.</p>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit" onClick={notify}>
              Book Ticket
            </button>
            <ToastContainer />

          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
