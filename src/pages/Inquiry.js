import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHome} from "react-icons/fa";
import "../styles/Inquiry.css";

const AlumniGreeting = () => {
  return (
    <div className="alumni-container">
      <Navbar />
      <div className="main-content">
      {/* 🔹 헤더 영역 */}
      <div className="serving-header">
        <img src={`${process.env.PUBLIC_URL}/assets/inquiry.jpg`} alt="headerimg" className="headerimage" />
        <div className="serving-header-text">문의하기</div>
        <div className="serving-header-detail">도움이 필요하신가요? 문의사항을 남겨주시면 담당자가 안내드립니다.</div>
      </div>

      {/* 🔹 Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home"><FaHome className="home-icon" /></span>
          <span className="breadcrumb-current">문의하기</span>
        </div>
      </div>

      <p className="helpp"><strong>도움이 필요하신가요? </strong>
        <br />
       <strong> 문의사항을 남겨주시면 담당자가 안내드립니다.</strong>
      </p>

      <div className="agree-container">
      <div className="agree-header">
        <div className="agree-text">
            <strong>개인정보 수집 및 이용에 대한 동의 <span className="required-star">*</span></strong>
        </div>
        <div className="require-text">
            <span className="required-star">*</span>필수 사항 입니다
        </div>
        </div>
  <hr className="gray-line" />

  <div className="agree-text-detail">
    <strong>1. 처리하는 개인정보 항목</strong><br />
    <p className="gray-text">
    당 기관은 문의 접수 및 안내를 위해 다음의 개인정보를 수집합니다.<br />
    - 성명, 전화번호, 이메일 주소, 문의 내용 등<br /><br />
    </p>

    <strong>2. 개인정보 수집 및 이용 목적</strong><br />
    <p className="gray-text">
    수집한 개인정보는 다음의 목적을 위해 사용됩니다.<br />
    - 문의에 대한 답변 제공<br />
    - 본인 확인 및 원활한 의사소통을 위한 기록 보존<br /><br />
    </p>

    <strong>3. 개인정보 보유 및 이용 기간</strong><br />
    <p className="gray-text">
    수집된 개인정보는 문의 처리 완료 후 최대 1년간 보관되며, 이후 즉시 파기됩니다.<br /><br />
    </p>

    <strong>4. 동의 거부 권리 및 불이익</strong><br />
    <p className="gray-text">
    이용자는 개인정보 수집에 대해 동의를 거부할 권리가 있으며, 동의 거부 시 문의 접수가 제한될 수 있습니다.<br />
    </p>


    <strong>5. 추가 안내사항</strong><br />
    <p className="gray-text">
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
        아래는 스크롤 테스트용 더미 텍스트입니다. 아래는 스크롤 테스트용 더미 텍스트입니다.<br />
     </p>   
  </div>

  {/* 🔽 동의 하시겠습니까? + 체크박스 영역 */}
  <div className="agree-check-row">
    <span className="check-label">위의 개인정보 수집 및 이용에 동의하십니까?</span>
    <label className="checkbox-wrapper">
      <input type="checkbox" />
      <span>동의합니다.</span>
    </label>
  </div>
</div>

<div className="inquiry-container">
  <div className="agree-header">
    <div className="agree-text">
      <strong>문의하기</strong>
    </div>
    <div className="require-text">
      <span className="required-star">*</span>필수 사항 입니다
    </div>
  </div>
  <hr className="gray-line" />

  {/* 🔽 작성자 */}
  {/* 🔽 작성자 */}
<div className="inquiry-field">
  <label className="inquiry-label">작성자 <span className="required-star">*</span></label>
  <input type="text" className="input-writer" placeholder="홍길동" />
</div>

{/* 🔽 연락처 */}
<div className="inquiry-field">
  <label className="inquiry-label">연락처 <span className="required-star">*</span></label>
  <div className="input-phone-group">
    <select className="input-phone-select" defaultValue="010">
      <option value="010">010</option>
      <option value="011">011</option>
      <option value="016">016</option>
      <option value="017">017</option>
      <option value="018">018</option>
      <option value="019">019</option>
    </select>
    <input type="text" className="input-phone" maxLength="4" />
    <input type="text" className="input-phone" maxLength="4" />
  </div>
</div>

{/* 🔽 이메일 */}
<div className="inquiry-field">
  <label className="inquiry-label">이메일 <span className="required-star">*</span></label>
  <div className="input-email-group">
    <input type="text" className="input-email"/>
    <span className="at-symbol">@</span>
    <input type="text" className="input-email"/>
    <select className="input-email-select">
      <option value="">직접입력</option>
      <option value="naver.com">naver.com</option>
      <option value="gmail.com">gmail.com</option>
    </select>
  </div>
</div>

{/* 🔽 제목 */}
<div className="inquiry-field">
  <label className="inquiry-label">제목 <span className="required-star">*</span></label>
  <input type="text" className="inquiry-input" />
</div>

{/* 🔽 내용 */}
<div className="inquiry-field">
  <label className="inquiry-label">내용 <span className="required-star">*</span></label>
  <textarea className="inquiry-textarea-large" rows="6" />
</div>
</div>


<div className="inquiry-button-wrapper">
  <button className="inquiry-submit-button">문의 등록</button>
</div>

    
      
  

</div>  
<Footer />
    </div>
  );
};

export default AlumniGreeting;
