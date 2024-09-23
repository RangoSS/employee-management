import React, { useState } from 'react';
import './../Components/Mystyles/style.css'

const Form = ({ addItem }) => {
  const [name,setName]=useState('');
  const [surname,setSurname]=useState('');
  const [ idnumber, setIdnumber ]=useState('');
  const [email,setEmail]=useState('');
  const [position,setPosition]=useState('');
  const [contact,setContact]=useState('');
  const [start_date, setStart_date ]=useState('');
  const [image, setImage] = useState(null);

  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && name && surname && idnumber && email && position && contact && start_date) {
      {/*object declared here*/}
      const newItem = {image,name,surname,idnumber,email,position,contact,start_date };
      addItem(newItem);
       
      setName('');
      setSurname('');
      setIdnumber('');
      setEmail('');
      setPosition('');
      setContact('');
      setStart_date('');
      setImage(null);
    }
  };

  return (

    <div className="row">
      <div className="col-md-4 col-sm-12">
        <h3>Enter Employee details</h3>
        <form onSubmit={handleSubmit} className="mb-4 border-3">
          <div className="form-group">
          <input
              type="text"
              className="form-control mb-2"
              placeholder="first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
             <input
              type="text"
              className="form-control mb-2"
              placeholder="last name"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
             <input
              type="text"
              className="form-control mb-2"
              placeholder="id number"
              value={idnumber}
              onChange={(e) => setIdnumber(e.target.value)}
              required
            />
             <input
              type="text"
              className="form-control mb-2"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             <input
              type="text"
              className="form-control mb-2"
              placeholder="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
             <input
              type="text"
              className="form-control mb-2"
              placeholder="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
             <input
              type="date"
              className="form-control mb-2"
              placeholder="contact"
              value={start_date}
              onChange={(e) => setStart_date(e.target.value)}
              required
            />
           
            <input
              type="file"
              className="form-control mb-2"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-6 col-sm-12">
        <h3>Wellcome to the Team</h3>
        <p>“Welcome to the team, ! We only hire people we believe will
          make a difference here, and we’re proud to count you among that number. We look forward to
          helping you make waves.”
          <br></br>
          “Welcome! We’re thrilled to have you with us. We had a lot of applicants, and we chose you because we
          believe that your skills, experience and creativity will have a real impact on our team. We're so excited to have you be part of our team, and we can’t wait to see what you do!”

        </p>
      </div>
    </div>
  );
};

export default Form;
