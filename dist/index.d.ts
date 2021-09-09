/// <reference types="react" />
interface KakaologinProps {
    apiKey: string;
    success: Function;
    fail: Function;
}
declare function KakaoLogin({ apiKey, success, fail, }: KakaologinProps): JSX.Element;

interface GoogleLoginProps {
    clientId: string;
    success: Function;
    fail: Function;
}
declare function GoogleLogin({ clientId, success, fail, }: GoogleLoginProps): JSX.Element;

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
declare function NaverLogin({ clientId, callbackUrl, success, fail, isPopup, buttonColor, buttonType, buttonHeight, }: NaverloginProps): JSX.Element;

export { GoogleLogin, KakaoLogin, NaverLogin };
