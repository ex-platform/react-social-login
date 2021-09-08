/// <reference types="react" />
interface KakaologinProps {
    apiKey: string;
    success: Function;
    fail: Function;
}
declare function KakaoLogin({ apiKey, success, fail, }: KakaologinProps): JSX.Element;

export { KakaoLogin };
