import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "../components/Form";

export default function Contact() {
  return (
    <div>
      <h1 className='center'>Contact</h1>
      <p className='center h5 p-text'>
        Don't hesitate to reach out if you have any questions or would like to
        connect—I’d be happy to hear from you!
      </p>
      <div className= 'center'>
        <ContactForm />
      </div>
    </div>
  );
}