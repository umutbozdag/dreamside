import React, { ComponentPropsWithoutRef } from "react";

const NextIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 2.65506C0 0.506052 2.41213 -0.749556 4.15978 0.489752L22.979 13.8347C24.468 14.8906 24.468 17.1093 22.979 18.1653L4.15978 31.5103C2.41213 32.7496 0 31.4938 0 29.3449V2.65506Z"
      />
      <path
        d="M32 2.08547C32 0.987639 31.114 0.0976562 30.0212 0.0976562C28.9284 0.0976562 28.0425 0.987639 28.0425 2.08547V29.9148C28.0425 31.0126 28.9284 31.9026 30.0212 31.9026C31.114 31.9026 32 31.0126 32 29.9148V2.08547Z"
      />
    </svg>
  );
};

export default NextIcon;
