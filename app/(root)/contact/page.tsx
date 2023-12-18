"use client";
import React, { useState } from "react";
import Display from "./display";
import { contactInfoType, formEventType } from "@/app/types/formTypes";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<contactInfoType>({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (event: formEventType) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form className="mx-auto max-w-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="name"
            name="name"
            className="w-full rounded-md border px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Email
          </label>
          <input
            onChange={onChangeHandler}
            type="email"
            id="email"
            name="email"
            className="w-full rounded-md border px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Message
          </label>
          <textarea
            onChange={onChangeHandler}
            id="message"
            name="message"
            className="w-full rounded-md border px-3 py-2"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <Display contactInfo={contactInfo} />
    </>
  );
};

export default Contact;
