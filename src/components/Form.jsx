import React from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ee13d4e3-0e20-4e92-a3df-b293d62d7e07");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form">
        <div className="form-group">
          <h4>Full Name</h4>
          <input
            className="form-control round"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <h4>Email</h4>
          <input
            className="form-control round"
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <h4>Message</h4>
          <textarea
            className="form-control textbox"
            name="message"
            required
          ></textarea>
        </div>
        <button className="form-control submit" type="submit">
          Submit
        </button>
      </div>
      <span>{result}</span>
    </form>
  );
}