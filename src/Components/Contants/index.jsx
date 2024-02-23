import { FaUserLarge } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
export const signUpConstants = [
    {
        className : 'loginInput',
        label : 'Name',
        icon : FaUserLarge

    },
    {
        className : 'loginInput',
        label : 'Email',
        icon : MdEmail

    },
    {
        className : 'loginInput',
        label : 'Phone',
        icon : FaPhoneFlip

    },
    {
        className : 'loginInput',
        label : 'Password',
        icon : RiLockPasswordFill

    },
]