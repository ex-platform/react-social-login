import React, { useEffect } from "react";
import { GoogleService } from "social-login-service";

import "./GoogleLogin.css";

interface GoogleLoginProps {
	clientId: string;
	success: Function;
	fail: Function;
}

export default function GoogleLogin({
	clientId,
	success,
	fail,
}: GoogleLoginProps) {
	const googleLoginButtonId = 'google-login-button';
	const googleLoginService = new GoogleService({
		clientId,
		elementId: googleLoginButtonId,
		success,
		fail,
	});

	googleLoginService.initiate();
	
	return (
		<div id={googleLoginButtonId} className="google-login">
			<span>구글 로그인</span>
		</div>
	);
}
