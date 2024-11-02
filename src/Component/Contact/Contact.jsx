import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import ProductNAv from "../../Utils/Constant/ProductNAv";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <div className="fullScreen">
        <div className="ContactWrapper">
          <div className="ContactForm">
            <h1>Contact Us</h1>

            <h3>
              Got Any questions or suggestions?Fill out this form to reach out{" "}
            </h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="First name"
                {...register("First name", { required: true, maxLength: 80 })}
              />
              <input
                type="text"
                placeholder="Last name"
                {...register("Last name", { required: true, maxLength: 100 })}
              />
              <input
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />

              <div className="contactBtn">
                <button>Submit</button>
              </div>

              {/* <input type="submit" /> */}
            </form>
          </div>

          <div className="ContactImage">
            <img src="./assets/images/image4.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
