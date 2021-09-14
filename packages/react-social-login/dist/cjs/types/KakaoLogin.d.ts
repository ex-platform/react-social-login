/// <reference types="react" />
import "./KakaoLogin.css";
interface KakaologinProps {
    apiKey: string;
    success: Function;
    fail: Function;
}
export default function KakaoLogin({ apiKey, success, fail, }: KakaologinProps): JSX.Element;
export {};
