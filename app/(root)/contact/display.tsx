import { contactInfoPropType } from "@/app/types/formTypes";
import React from "react";

const Display = (props: contactInfoPropType) => {
  return (
    <>
      <h1>Name: {props.contactInfo.name}</h1>
      <h2>Email: {props.contactInfo.email}</h2>
      <h2>Message: {props.contactInfo.message}</h2>
    </>
  );
};

export default Display;
