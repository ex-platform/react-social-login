declare global {
    interface Window {
        Kakao: any;
    }
}
declare type KakaoServiceProps = {
    apiKey: string;
    success: Function;
    fail: Function;
};
interface IKakaoService {
    initiate: Function;
    login: Function;
}
export default class KakaoService implements IKakaoService {
    props: KakaoServiceProps;
    constructor(props: KakaoServiceProps);
    initiate(): void;
    login(): Promise<void>;
    private getUserInfo;
}
export {};
