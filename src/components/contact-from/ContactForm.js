import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xjvjokll",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <section id="contact-section" className="section-base-layout bg-darkTan text-green font-primaryFont">
      <form onSubmit={handleOnSubmit}
        className="flex flex-col items-center bg-lightTan  border-4 border-green rounded-lg px-6 py-16 shadow-lg ">
        <h1 className="text-4xl">Contact Us</h1>
          <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between p-4">
            <div className="text-left p-2">
                <label htmlFor="fName">First Name:</label>
                <input id="fname" type="fnamel" name="fname" required className="border-2 border-green rounded-lg w-full"/>
            </div>
            <div className="text-left p-2">
                <label htmlFor="lName">Last Name:</label>
                <input id="lName" type="lName" name="lName" required className="border-2 border-green rounded-lg w-full"/>
            </div>
          </div>

          <div className="flex flex-col items-center w-full p-4">
            <div className="text-left w-full p-2">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" required className="border-2 border-green rounded-lg w-full "/>
            </div>
            <div className="text-left w-full p-2">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" className=" border-2 border-green rounded-lg w-full ">
              </textarea>
            </div>
          </div>
          <button type="submit" disabled={serverState.submitting}
            className="btn-hover-2 flex flex-row border-green border-6 border-double rounded-lg bg-green text-darkTan font-semibold text-2xl tracking-wider p-4 shadow-2xl">
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
            </p>
          )}
      </form>
    </section>
  );
};

export default ContactForm;

