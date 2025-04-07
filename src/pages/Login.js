import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력하세요" />
        </div>

        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력하세요" />
        </div>

        <button type="submit" className="login-button">로그인</button>
      </form>
    </div>
  );
}

export default Login;