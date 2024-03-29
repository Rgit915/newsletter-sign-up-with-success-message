import { useFormik } from "formik";

// validation function to check the email field
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Valid email required"; // Error message if email is empty
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Valid email required"; // Error message if email format is invalid
  }
  return errors;
};

function SignUp(props) {
  //Initialize Formik with inital values, validation function and submit handler
  const formik = useFormik({
    initialValues: {
      email: "", // Initial value for the email field
    },
    validate, // validation function to validate form fields
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2)); //show form values in an alert
      props.setSuccessModal(true); //update state to show success modal
      props.setEmail(values.email); // Update email state with user input
    },
  });

  return (
    <div className="flex flex-col md:h-screen justify-center items-center">
      <div
        className="bg-white md:rounded-[2.5rem] md:w-[700px] md:border
      md:flex md:flex-row-reverse md:items-center lg:w-[900px] md:p-4"
      >
        <div className="md:hidden">
          <img src={props.mobileImage} alt="Illustration mobile Image" />
        </div>
        <div className="hidden md:block">
          <img src={props.desktopImage} alt="Illustration desktop Image" />
        </div>
        <div className="text-left p-4 md:flex md:flex-col md:justify-center">
          <div className="space-y-8 md:p-4">
            <h1 className="font-bold text-[40px]">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="space-y-4">
              <li className="flex space-x-4 items-start">
                <img src={props.icon} alt="icon-list" />
                <p>Product discovery and building what matters</p>
              </li>
              <li className="flex space-x-4 items-start">
                <img src={props.icon} alt="icon-list" />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className="flex space-x-4 items-start">
                <img src={props.icon} alt="icon-list" />
                <p>And much more!</p>
              </li>
            </ul>
          </div>
          <div className="md:p-4">
            <form onSubmit={formik.handleSubmit} autoComplete="off ">
              <div className="text-[12px] font-bold flex justify-between mt-4">
                <label htmlFor="email">Email address</label>
                {/* Display error message if email field is touched and has an error */}
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-redish ">{formik.errors.email}</span>
                ) : null}
              </div>
              <input
                name="email"
                id="email"
                type="email"
                className={`w-full p-4 border rounded-lg my-2 outline:none focus:border-slate-700 ${
                  formik.touched.email && formik.errors.email
                    ? "bg-rose-100 border-rose-400"
                    : ""
                }`}
                placeholder="email@company.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              <button
                className="border mt-2 bg-darkSlateGrey w-full p-4 rounded-md text-white text-center
                font-bold leading-6 cursor-pointer hover:shadow-hsla-shadow hover:bg-gradient-to-b from-tomato via-redish to-red-500"
                type="submit"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
