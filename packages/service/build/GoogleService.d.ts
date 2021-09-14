declare global {
    interface Window {
        gapi: any;
    }
}
declare type GoogleServiceProps = {
    clientId: string;
    elementId: string;
    success: Function;
    fail: Function;
};
interface IGoogleService {
    initiate: Function;
}
export default class GoogleService implements IGoogleService {
    props: GoogleServiceProps;
    constructor(props: GoogleServiceProps);
    initiate(): void;
    private loadAndAttachLoginFunc;
    private successCallback;
    private failCallback;
}
export {};
