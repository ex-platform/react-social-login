import React from "react";
import { KakaoService } from "social-login-service";

import "./KakaoLogin.css";

interface KakaologinProps {
	apiKey: string;
	success: Function;
	fail: Function;
}

export default function KakaoLogin({
	apiKey,
	success,
	fail,
}: KakaologinProps) {
	const kakaoService = new KakaoService({
		apiKey,
		success,
		fail,
	});

	kakaoService.initiate();

	return (
		<div className="kakao-login" onClick={() => kakaoService.login()}>
			<span>카카오 로그인</span>
		</div>
	);
}
