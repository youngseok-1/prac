import "../styles/Footer.css"; // 스타일 적용

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🔹 로고 및 기관명 */}
        <div className="footer-logo">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.jpg`} alt="연세대학교 로고" />
          <div className="footer-text">
            <span className="footer-title">연세대학교</span>
            <span className="footer-subtitle">의료산업 최고위자 과정</span>
          </div>
        </div>

        {/* 🔹 주소 및 연락처 */}
        <div className="footer-info">
          <p>서울특별시 서대문구 연세로 상세 주소를 입력해주세요.</p>
          <p><strong>TEL.</strong> 02-0000-0000 &nbsp; <strong>FAX.</strong> 02-0000-0000</p>
        </div>

        {/* 🔹 저작권 정보 */}
        <div className="footer-copyright">
          <p>Copyright © 2024 YONSEI UNIVERSITY College of Science. All rights reserved. Designed by INNO-D</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
