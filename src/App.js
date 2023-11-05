import "./App.css";

import { Formik } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "male",
          hobbies: [],
          country: "Azerbaijan",
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} onChange={handleChange} />
            <br />
            <br />
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />
            <div>
              <input
                type="checkbox"
                name="hobbies"
                value="Football"
                onChange={handleChange}
              />
              Football
            </div>
            <div>
              <input
                type="checkbox"
                name="hobbies"
                value="Cinema"
                onChange={handleChange}
              />
              Cinema
            </div>
            <div>
              <input
                type="checkbox"
                name="hobbies"
                value="Photography"
                onChange={handleChange}
              />
              Photography
            </div>

            <br />
            <br />

            <select
              name="country"
              onChange={handleChange}
              value={values.country}
            >
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Turkey">Turkey</option>
              <option value="England">England</option>
            </select>

            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
