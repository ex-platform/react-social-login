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

export { GoogleLogin, KakaoLogin };
