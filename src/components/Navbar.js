import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "../styles/Navbar.css";

function Navbar() {

  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimeout = useRef(null); // 닫기 딜레이용 ref

  const toggleDropdown = (menu) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms 후에 닫기
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 🔹 로고 */}
        <Link to="/" className="logo">
  <img src={`${process.env.PUBLIC_URL}/assets/logo.jpg`} alt="연세대학교 로고" />
  <div className="logo-text">
    <span>연세대학교</span>
    <span>의료산업 최고위자 과정</span>
  </div>
</Link>

        {/* 🔹 네비게이션 메뉴 */}
        <ul className="nav-menu">
          <li className={`nav-item ${location.pathname === "/serving" ? "active" : ""}`}>
            <Link to="/serving" className="nav-link">모시는 글</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/introduce" ? "active" : ""}`}>
            <Link to="/introduce" className="nav-link">과정 소개</Link>
          </li>
          <li
  className="nav-item dropdown"
  onMouseEnter={() => handleMouseEnter("admission")}
  onMouseLeave={handleMouseLeave}
>
  <Link to="/entrance" className="nav-link">입학안내</Link>
  {openDropdown === "admission" && (
    <ul className="dropdown-menu admission">
      <li><Link to="/entrance">입학 안내</Link></li>
      <li><Link to="/online">온라인 지원</Link></li>
    </ul>
  )}
</li>
<li
  className="nav-item dropdown"
  onMouseEnter={() => handleMouseEnter("alumni")}
  onMouseLeave={handleMouseLeave}
>
  <Link to="/alumni1" className="nav-link">총동문회</Link>
  {openDropdown === "alumni" && (
    <ul className="dropdown-menu alumni">
      <li><Link to="/alumni1">동문회장 인사말</Link></li>
      <li><Link to="/alumni2">조직도 및 분야</Link></li>
      <li><Link to="/alumni3">동문 회칙</Link></li>
      <li><Link to="/alumni4">동문 소개</Link></li>
    </ul>
  )}
</li>
          <li className="nav-item">
          <Link to="/sound" className="nav-link">연세소리</Link>
          </li>
          <li className="nav-item">
          <Link to="/inquiry" className="nav-link">문의하기</Link>
          </li>
        </ul>

        {/* 🔹 로그인 & 회원가입 */}
        <div className="auth-links">
          <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
