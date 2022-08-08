import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <svg viewBox="0 0 36 37" fill="none" width={36} height={37} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 15L18.4154 13.8116C18.1651 13.6238 17.825 13.6094 17.5596 13.7752L14.212 15.8675C14.0801 15.9499 14 16.0945 14 16.25V16.25C14 16.4055 14.0801 16.5501 14.212 16.6325L18 19L21.5 17V17C21.7761 17 22 17.2239 22 17.5V20.8095C22 20.9294 21.9435 21.0423 21.8476 21.1143L20 22.5"
        stroke="white"
        stroke-width="0.7"
      />
      <path
        d="M18 19V22.7579C18 22.9129 17.9384 23.0616 17.8288 23.1712V23.1712C17.6363 23.3637 17.3365 23.3978 17.1057 23.2536L13.97 21.2938C13.6776 21.111 13.5 20.7905 13.5 20.4458V19"
        stroke="white"
        stroke-width="0.7"
      />
      <path d="M1.5 13.5L14 1H22.5L35 13.5L32 18.5L35 23.5L22.5 36H14L1.5 23.5L4.5 18.5L1.5 13.5Z" stroke="white" />
      <path d="M14 1L26.5 13.5H35" stroke="white" />
      <path d="M26 18.5H31.5" stroke="white" />
      <path d="M20.5 26L22 27.5L26 23.5H34.5" stroke="white" />
      <path d="M16 11L14 9.5L10 13.5H1.5" stroke="white" />
      <path d="M4.5 18.5H10" stroke="white" />
      <path d="M1 23.5H10L22.5 36" stroke="white" />
    </svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
