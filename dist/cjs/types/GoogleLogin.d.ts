/// <reference types="react" />
import "./GoogleLogin.css";
interface GoogleLoginProps {
    clientId: string;
    success: Function;
    fail: Function;
}
export default function GoogleLogin({ clientId, success, fail, }: GoogleLoginProps): JSX.Element;
export {};
