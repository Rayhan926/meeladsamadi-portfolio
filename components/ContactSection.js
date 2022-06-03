import React, { useEffect } from "react";
import Button from "./Button";
import SectionTitleSubtitle from "./SectionTitleSubtitle";
import { IoLocationSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import Globe from "./Icons/Globe";
import { Formik } from "formik";
import FormikInput from "./FormikInput";
import * as Yup from "yup";
import FormikErrorMessage from "./FormikErrorMessage";
import axios from "axios";
import { gsap } from "gsap";
import { toast } from "react-toastify";
import CircularProgress from "./CircularProgress";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone"),
  message: Yup.string().required().label("Message"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactOptions = [
  {
    icon: <IoLocationSharp size={65} />,
    title: "23 Pallock Hill Way,",
    subtitle: "Whitby ON L1R 0N5, Canada",
  },
  {
    icon: <Globe />,
    title: "MeeladSamadi@hotmail.com",
    subtitle: "MeeladSamadi.com",
  },
  {
    icon: <FaMobileAlt size={65} />,
    title: "+1(905) 922-1737",
  },
];

const ContactSection = () => {
  useEffect(() => {
    gsap.to("#flower6", {
      scrollTrigger: {
        trigger: "#flower6",
        start: "top bottom",
      },
      scale: 1,
    });
  }, []);

  return (
    <section
      className="pt-[100px] xl:pt-[150px] pb-[60px] relative"
      id="hire-me"
    >
      <img
        id="flower6"
        src="/img/Flower1.png"
        alt="Flower"
        className="w-[250px] xl:w-[650px] absolute top-0 scale-0 right-0 translate-y-[450px] xl:translate-y-0 rotate-[90deg] translate-x-[10%] bottom-0 z-[-1]"
      />

      <div className="container">
        <SectionTitleSubtitle
          title={"Contact Me"}
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quasi tempore atque, natus ex ut voluptate eaque reiciendis sapiente! Eaque!"
        />

        <div className="mt-20 grid-cols-1 grid lg:grid-cols-2 xl:grid-cols-[55%,auto] gap-y-14 gap-x-14">
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                axios
                  .post("/api/contact", values)
                  .then((res) => {
                    actions.resetForm();
                    console.log({ res });
                    toast.success("Message sent successfully");
                  })
                  .catch((err) => {
                    toast.error("Failed to sent message");
                  })
                  .finally(() => {
                    actions.setSubmitting(false);
                  });
              }}
            >
              {({
                handleSubmit,
                values,
                setFieldValue,
                isSubmitting,
                setFieldTouched,
              }) => {
                return (
                  <form
                    className="space-y-7"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <FormikInput type="text" placeholder="Name" name="name" />
                    <FormikInput
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                    <FormikInput type="text" placeholder="Phone" name="phone" />
                    <div>
                      <textarea
                        value={values["message"]}
                        onChange={(e) =>
                          setFieldValue("message", e.target.value)
                        }
                        onBlur={() => setFieldTouched("message")}
                        className="__input rounded-[25px] resize-none"
                        cols="30"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                      <FormikErrorMessage name="message" />
                    </div>
                    <div>
                      <Button
                        disabled={isSubmitting}
                        className="relative overflow-hidden"
                      >
                        Message Me
                        {isSubmitting && (
                          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-primary z-[2] disabled:pointer-events-none">
                            <CircularProgress size={23} />
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>

          <div className="rounded-md overflow-hidden h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4078828986003!2d114.17631091529671!3d22.30040878532345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8cd3564f2088f666!2zMjLCsDE4JzAxLjUiTiAxMTTCsDEwJzQyLjYiRQ!5e0!3m2!1sen!2sbd!4v1646553246131!5m2!1sen!2sbd"
              width={"100%"}
              height={"100%"}
              style={{ border: 0, filter: "invert(90%)" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-10 mt-28">
          {contactOptions.map(({ icon, title, subtitle }, i) => (
            <div className="flex flex-col items-center" key={i}>
              <div className="text-primary">{icon}</div>
              <p className="text_sm text-base text-white mt-8">{title}</p>
              {subtitle && (
                <p className="text_sm text-base text-white">{subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
