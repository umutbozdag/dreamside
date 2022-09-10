import React, { ComponentPropsWithoutRef } from "react";

const PlaylistAddIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 5H14V7H2V5Z" fill="currentColor" />
      <path d="M2 9H14V11H2V9Z" fill="currentColor" />
      <path d="M10 13H2V15H10V13Z" fill="currentColor" />
      <path d="M16 9H18V13H22V15H18V19H16V15H12V13H16V9Z" fill="currentColor" />
    </svg>
  );
};

export default PlaylistAddIcon;
