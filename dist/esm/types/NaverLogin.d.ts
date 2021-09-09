/// <reference types="react" />
import "./NaverLogin.css";
interface NaverloginProps {
    clientId: string;
    callbackUrl: string;
    success: Function;
    fail: Function;
    isPopup: boolean;
    buttonColor: string;
    buttonType: number;
    buttonHeight: number;
}
export default function NaverLogin({ clientId, callbackUrl, success, fail, isPopup, buttonColor, buttonType, buttonHeight, }: NaverloginProps): JSX.Element;
export {};
