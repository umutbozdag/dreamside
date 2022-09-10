import React, { ComponentPropsWithoutRef } from "react";

const PrevIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.9999 29.3451C31.9999 31.494 29.5551 32.7495 27.7839 31.5102L8.71101 18.1653C7.2018 17.1094 7.2018 14.8907 8.71101 13.8347L27.7839 0.489752C29.5551 -0.749556 31.9999 0.506052 31.9999 2.65506V29.3451Z"
      />
      <path
        d="M0 29.9146C0 31.0124 0.897873 31.9024 2.00543 31.9024C3.11299 31.9024 4.01087 31.0124 4.01087 29.9146V2.08523C4.01087 0.987396 3.11299 0.0974121 2.00543 0.0974121C0.897873 0.0974121 0 0.987396 0 2.08523V29.9146Z"
      />
    </svg>
  );
};

export default PrevIcon;
