import React, { ComponentPropsWithoutRef } from "react";

const HeartIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.75 0C1.67894 0 0 1.67894 0 3.75C0 7.5 5.25 10.5 6.75 12C8.25 10.5 13.5 7.5 13.5 3.75C13.5 1.67894 11.8211 0 9.75 0C8.52031 0 7.43386 0.585577 6.75 1.5C6.06614 0.585577 4.9797 0 3.75 0ZM3.75 0.75C4.7416 0.75 5.60175 1.2174 6.14941 1.94971L6.75 2.75244L7.35059 1.94971C7.89824 1.2174 8.75841 0.75 9.75 0.75C11.4157 0.75 12.75 2.08427 12.75 3.75C12.75 5.275 11.6157 6.8201 10.1748 8.1709C8.92715 9.34057 7.67351 10.2192 6.75 11.0273C5.82649 10.2192 4.57285 9.34057 3.3252 8.1709C1.88435 6.8201 0.75 5.275 0.75 3.75C0.75 2.08427 2.08427 0.75 3.75 0.75Z"
      />
    </svg>
  );
};

export default HeartIcon;