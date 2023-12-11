import React, { useState } from "react";
import { Fade, Slide } from "react-reveal";

const Contact = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (formData) => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!formData.subject.trim()) return "Subject is required.";
    if (!formData.message.trim()) return "Message is required.";
    return "";
  };

  const handleSubmit = async (e) => {
    console.log('you clicked submit')
    e.preventDefault();
    setLoading(true);
    setMessageSent(false);
    setErrorMessage('');

    // Assuming you want to send the form data as JSON
    const formData = {
      name: e.target.contactName.value,
      email: e.target.contactEmail.value,
      subject: e.target.contactSubject.value,
      message: e.target.contactMessage.value
    };

    const validationError = validateForm(formData);
    if (validationError) {
      setErrorMessage(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://l9gyalwwmd.execute-api.us-east-2.amazonaws.com/contactStage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("api output:")
      console.log(data)
      if (data === 'success') {
        console.log("YEP")
        setMessageSent(true);
      } else {
        setErrorMessage('An error occurred.');
      }
    } catch (error) {
      setErrorMessage('Failed to send message: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  if (!data) return null;

  const { name, address, email, contactmessage } = data;
  const { street, city, state, zip } = address;

  const handleChange = (e) => {
    // Your change handling logic here
  };

  

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{contactmessage}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject<span className="required">*</span></label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  <button className="submit" type="submit" disabled={loading} >Submit</button>
                  <span id="image-loader" style={{ display: loading ? 'block' : 'none' }}>
                    <img alt="Loading..." src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
            {loading && <p style={{ fontSize: '20px', color: 'white' }}>Loading...</p>}
{messageSent && <p style={{ fontSize: '20px', color: 'white' }}>Your message was sent, thank you!</p>}
{errorMessage && <p style={{ fontSize: '20px', color: 'red' }}>{errorMessage}</p>}


          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Contact</h4>
              <p className="address">
                {/* <span>{phone}</span> */}
                <span>{email}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Connect With Me</h4>
              <ul id="twitter">
                <li>
                  <span>
                  Interested in my work or have a question? Don't hesitate to reach out!
                  </span>
                </li>
                <h4 className="widget-title">Fun Fact</h4>
                <li>
                  <span>
                    Interested in building out projects, currently working on some blockchain & AI applications. Would love to collaborate on ideas within the crypto sphere!
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;