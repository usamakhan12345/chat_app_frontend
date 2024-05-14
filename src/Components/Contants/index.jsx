import { FaUserLarge } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
export const signUpConstants = [
  {
    className: "loginInput",
    label: "Name",
    icon: FaUserLarge,
    name: "name",
    rules: {
      required: {
        value: true,
        message: "Field cannot be empty",
      },
    },
  },
  {
    className: "loginInput",
    label: "Email",
    icon: MdEmail,
    name: "email",
    rules: {
      required: {
        value: true,
        message: "Field cannot be empty",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Please Enter Correct Email Id",
      },
    },
  },
  {
    className: "loginInput",
    label: "Phone",
    icon: FaPhoneFlip,
    name: "phone",
    rules: {
      required: {
        value: true,
        message: "Field cannot be empty",
      },
    },
  },
  {
    className: "loginInput",
    label: "Password",
    icon: RiLockPasswordFill,
    name: "password",
    rules: {
      required: {
        value: true,
        message: "Field cannot be empty",
      },
    },
  },
];
