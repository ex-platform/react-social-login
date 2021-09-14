import React, { useEffect } from "react";
import { naverService as NaverService } from "@ex-platform/social-login-service";

import "./NaverLogin.css";

interface NaverloginProps {
	clientId: string;
	callbackUrl: string;
	success: Function;
	fail: Function;
	isPopup?: boolean;
	buttonColor?: string;
	buttonType?: string;
	buttonHeight?: string;
}

export default function NaverLogin({
	clientId,
	callbackUrl,
	success,
	fail,
	isPopup = false,
	buttonColor = 'green',
	buttonType = '3',
	buttonHeight = '60',
}: NaverloginProps) {
	const buttonStyles = {
		buttonColor,
		buttonType,
		buttonHeight,
	};

	const naverService = NaverService.naverService();

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
		naverService.getUserInfo(success, fail);
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
