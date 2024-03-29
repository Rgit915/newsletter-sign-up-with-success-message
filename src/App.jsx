import { useState } from "react";

import SignUp from "./components/SignUp";
import SuccessMessage from "./components/SuccessMessage";

import mobileImage from "./assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import icon from "./assets/images/icon-list.svg";

function App() {
  const [email, setEmail] = useState(""); //state variable to store email input
  const [showSuccessModal, setSuccessModal] = useState(false); // State variable to track success modal visibility

  return (
    <>
      <div>
        {/* Render SignUp component and pass props */}
        {!showSuccessModal && (
          <SignUp
            showSuccessModal={showSuccessModal}
            setEmail={setEmail}
            setSuccessModal={setSuccessModal}
            icon={icon}
            mobileImage={mobileImage}
            desktopImage={desktopImage}
          />
        )}
        {/* Success message modal */}
        {showSuccessModal && (
          <SuccessMessage
            email={email}
            setSuccessModal={setSuccessModal}
            icon={icon}
          />
        )}

      </div>
    </>
  );
}

export default App;
