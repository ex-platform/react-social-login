declare global {
    interface Window {
        naver: any;
    }
}
interface ButtonStyles {
    buttonColor: string;
    buttonType: string;
    buttonHeight: string;
}
export declare function naverService(): {
    initNaver: (clientId: string, callbackUrl: string, isPopup: boolean, success: Function, fail: Function, buttonStyles: ButtonStyles) => void;
    setNaver: () => void;
    getUserInfo: (success: any, fail: any) => void;
};
export {};
