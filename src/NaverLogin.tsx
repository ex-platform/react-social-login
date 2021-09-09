import React, { useEffect } from "react";
import { naverService as NaverService } from "social-login-service";

import "./NaverLogin.css";

interface NaverloginProps {
	clientId: string;
	callbackUrl: string;
	success: Function;
	fail: Function;
	isPopup?: boolean;
	buttonColor?: string;
	buttonType?: number;
	buttonHeight?: number;
}

export default function NaverLogin({
	clientId,
	callbackUrl,
	success,
	fail,
	isPopup = false,
	buttonColor = 'green',
	buttonType = 3,
	buttonHeight = 60,
}: NaverloginProps) {
	const buttonStyles = {
		buttonColor,
		buttonType,
		buttonHeight,
	};

	const naverService = NaverService.default();

	useEffect(() => {
		naverService.initNaver(
			clientId, 
			callbackUrl, 
			isPopup, 
			success,
			fail,
			buttonStyles,
		);
	})

	function onClickNaver() {
		const naverLogin = document.getElementById("naverIdLogin_loginButton");
		return naverLogin!.click();
	}

	return (
		<div>
			<div id="naverIdLogin" style={{display: "none"}}/>
			<div className="naver-login" onClick={onClickNaver}>
				<span>네이버 로그인</span>
			</div>
		</div>

	);
}
