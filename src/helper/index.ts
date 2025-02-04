import HTML from "../assets/images/html.svg";
import Casl from "../assets/images/casl.svg";
import Router from "../assets/images/router.svg";
import Swiper from "../assets/images/swiper.svg";
import Framer from "../assets/images/framer.svg";
import MuiIcon from "../assets/images/mui.svg";
import EmailJs from "../assets/images/emailjs.svg";
import NextIcon from "../assets/images/next.svg";
import Tailwind from "../assets/images/tailwindcss.svg";
import ReactIcon from "../assets/images/react.svg";
import SocketsIcon from "../assets/images/Socket.svg";
import TanstackIcon from "../assets/images/reactquery.svg";
import HookFormsIcon from "../assets/images/hookforms.svg";
import TypeScriptIcon from "../assets/images/typescript.svg";
import JavaScriptIcon from "../assets/images/javascript.svg";
import StyledComponents from "../assets/images/styledComponent.svg";

export const getIcon = (name: string) => {
  switch (name) {
    case "React":
      return ReactIcon;
    case "Next":
      return NextIcon;
    case "JavaScript":
      return JavaScriptIcon;
    case "TypeScript":
      return TypeScriptIcon;
    case "HTML":
      return HTML;
    case "Tanstack":
      return TanstackIcon;
    case "Sockets":
      return SocketsIcon;
    case "React Hook Forms":
      return HookFormsIcon;
    case "Material UI":
      return MuiIcon;
    case "Casl":
      return Casl;
    case "Tailwind":
      return Tailwind;
    case "Router":
      return Router;
    case "Swiper":
      return Swiper;
    case "Framer":
      return Framer;
    case "StyledComponents":
      return StyledComponents;
    case "Email":
      return EmailJs;
    default:
      return null;
  }
};
