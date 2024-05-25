import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    Name: "", age: "", temporaryAddress: "", permanentAddress: "", ownershipType: "INDIVIDUAL",
    registrationDate: "", registrationNo: "", mobileNumber: "", validityUpto: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function submitHandler(event) {
    event.preventDefault();

    // Compare current date with validityUpto date
  const currentDate = new Date();
  const validityDate = new Date(formData.validityUpto);

  if (validityDate < currentDate) {
    alert("please upgrade your validity Date.");
    return;
  }

    axios.post('http://localhost:4000/api/formdata', formData)
      .then(response => {
        console.log(response.data);
        alert('Form submitted successfully');
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="Name">Full name</label>
        <br/>
        <input
          type="text"
          name="Name"
          id="Name"
          placeholder="Navnit"
          value={formData.Name}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="age">Age</label>
        <br/>
        <input
          type="text"
          name="age"
          id="age"
          placeholder="18"
          value={formData.age}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="temporaryAddress">Temporary address</label>
        <br/>
        <input
          type="text"
          name="temporaryAddress"
          id="temporaryAddress"
          placeholder="Temporary Address"
          value={formData.temporaryAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="permanentAddress">Permanent address</label>
        <br/>
        <input
          type="text"
          name="permanentAddress"
          id="permanentAddress"
          placeholder="Permanent Address"
          value={formData.permanentAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="ownershipType">Ownership type</label>
        <br/>
        <select
          id="ownershipType"
          name="ownershipType"
          value={formData.ownershipType}
          onChange={changeHandler}
          className="outline"
        >
          <option value="AUTONOMOUS BODY">AUTONOMOUS BODY</option>
          <option value="CENTRAL GOVERNMENT">CENTRAL GOVERNMENT</option>
          <option value="EDUCATIONAL INSTITUTE">EDUCATIONAL INSTITUTE</option>
          <option value="INDIVIDUAL">INDIVIDUAL</option>
          <option value="OTHERS">OTHERS</option>
        </select>
        <br/>
        <label htmlFor="registrationDate">Date of registration</label>
        <br/>
        <input
          type="date"
          name="registrationDate"
          id="registrationDate"
          value={formData.registrationDate}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="registrationNo">Registration No.</label>
        <br/>
        <input
          type="text"
          name="registrationNo"
          id="registrationNo"
          placeholder="B25C235235"
          value={formData.registrationNo}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="validityUpto">Validity upto</label>
        <br/>
        <input
          type="date"
          name="validityUpto"
          id="validityUpto"
          value={formData.validityUpto}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="mobileNumber">Valid Mobile Number</label>
        <br/>
        <input
          type="text"
          name="mobileNumber"
          id="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
