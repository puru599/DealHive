import { useRef } from "react";

const ContactUs = () => {
  const nameValue = useRef("");
  const phoneValue = useRef("");
  const emailValue = useRef("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    const userDetails = {
      name: nameValue.current.value,
      phoneNumber: phoneValue.current.value,
      email: emailValue.current.value,
    };

    const response = await fetch(
      "https://react-frontend-5-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" ref={nameValue}></input>
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" ref={phoneValue}></input>
      </div>
      <div>
        <label htmlFor="email">Email-ID</label>
        <input id="email" ref={emailValue}></input>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ContactUs;
