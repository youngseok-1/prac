import React from "react";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">회원가입</h2>
      <form className="signup-form">

        <div className="form-group">
          <label>이름</label>
          <input type="text" placeholder="홍길동" />
        </div>

        <div className="form-group">
          <label>아이디</label>
          <input type="text" placeholder="아이디 입력" />
        </div>

        <div className="form-group">
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" />
        </div>

        <div className="form-group">
          <label>비밀번호 확인</label>
          <input type="password" placeholder="비밀번호 재입력" />
        </div>

        <div className="form-group">
          <label>이메일</label>
          <input type="email" placeholder="이메일 입력" />
        </div>

        <button type="submit" className="signup-btn">가입하기</button>
      </form>
    </div>
  );
};

export default Signup;
