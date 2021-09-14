declare global {
    interface Window {
        fbAsyncInit: any;
        FB: any;
    }
}
export declare function loadInitFacebook(appId: string): Promise<void>;
export declare function loginWithFacebook(success: Function, fail: Function): Promise<void>;
