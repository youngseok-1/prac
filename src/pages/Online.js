import React, { useState } from "react";
import Navbar from "../components/Navbar"; // 기존 Navbar 사용
import Footer from "../components/Footer"; // 기존 Footer 사용
import "../styles/Online.css"; // 스타일 추가
import { FaHome, FaAngleRight } from "react-icons/fa"; // 🔹 아이콘 추가
import { FaUniversity } from "react-icons/fa"; // ✅ 아이콘 import



const ServingPage = () => {


  const [admissionFileName, setAdmissionFileName] = useState("선택된 파일이 없습니다.");
  const [proofFileName, setProofFileName] = useState("선택된 파일이 없습니다.");

  const handleFileChange = (e, type) => {
    const fileName = e.target.files[0]?.name || "선택된 파일이 없습니다.";
    if (type === "admission") {
      setAdmissionFileName(fileName);
    } else {
      setProofFileName(fileName);
    }
  };

  const triggerFileInput = (type) => {
    document.getElementById(type).click();
  };
  return (
    <div className="serving-container">
      <Navbar />
      
      {/* 🔹 배경 이미지 추가 */}
      <div className="serving-header">
      <img src={`${process.env.PUBLIC_URL}/assets/online.jpg`} alt="introheader" className="headerimage" />  
        <div className="serving-header-text">
          <span>온라인 지원</span>
        </div>
        <div className="serving-header-detail">
        <span>입학원서를 온라인을 통해 쉽고 편하게 작성하세요.</span>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="breadcrumb-container">
          {/* 홈 아이콘 */}
          <span className="breadcrumb-home">
            <FaHome className="home-icon" />
          </span>
          {/* 입학 안내 */}
          <span className="breadcrumb-current">입학 안내</span>
          {/* > 아이콘 */}
          <FaAngleRight className="breadcrumb-icon" />
          {/* 온라인 지원 */}
        </div>

        <div className="breadcrumb-container">
        <span className="breadcrumb-current">온라인 지원</span>
          {/* > 아이콘 */}
        </div>  
      </div>

      <div className="serving-content">
      <p className="p1">
        <FaUniversity className="university-icon" />  
        연세대학교 의과대학 의료산업 최고위자 과정 온라인 지원
      </p>

      <div className="application-form">
  {/* 🔹 지원자 인적사항 */}
  <div className="section">
    <div className="section-title">지원자 인적사항 <span className="required">*필수 사항입니다</span></div>
    
    <div className="form-group">
      <div className="input-box">
        <label>성명 <span className="required">*</span></label>
        <input type="text"/>
      </div>
      <div className="input-box">
        <label>생년월일 <span className="required">*</span></label>
        <input type="text" />
      </div>
    </div>

    <div className="form-group">
      <div className="input-box">
        <label>연락처</label>
        <input type="text"/>
      </div>
      <div className="input-box">
        <label>휴대전화 <span className="required">*</span></label>
        <input type="text" />
      </div>
    </div>

    <div className="form-group">
      <div className="input-box full-width">
        <label>E-mail <span className="required">*</span></label>
        <input type="email"  />
      </div>
    </div>

    
  </div>

  {/* 🔹 근무처 정보 */}
  <div className="section">
    <div className="section-title">근무처 정보 <span className="required">*필수 사항입니다</span></div>
    
    <div className="form-group">
      <div className="input-box">
        <label>기업명</label>
        <input type="text" />
      </div>
      <div className="input-box">
        <label>직위 <span className="required">*</span></label>
        <input type="text"  />
      </div>
    </div>

    <div className="form-group">
      <div className="input-box full-width">
        <label>주소</label>
        <input type="text"  />
      </div>
    </div>
  </div>
    {/* 🔹 제출 서류 */}
<div className="section">
  <div className="section-title">제출 서류 <span className="required">*필수 사항입니다</span></div>

  {/* 입학지원서 */}
  <div className="section">
            <div className="section-title">제출 서류 <span className="required">*필수 사항입니다</span></div>

            <div className="file-upload-group">
              <label className="file-label">입학지원서 <span className="required">*</span></label>
              <div className="file-input-box">
                <button type="button" className="file-button" onClick={() => triggerFileInput("admissionFile")}>파일 선택</button>
                <span className="file-text">{admissionFileName}</span>
                <input type="file" id="admissionFile" style={{ display: "none" }} onChange={(e) => handleFileChange(e, "admission")} />
              </div>
              <p className="file-description">
                ※ 입학지원서는 입학안내 페이지에서 다운로드 받으실 수 있습니다. <br />
                ※ 반드시 서명 후 PDF로 업로드 해주세요. <br />
                ※ 파일 크기는 50MB보다 작아야 합니다.
              </p>
            </div>

            <div className="file-upload-group">
              <label className="file-label">재직증명서 또는 경력증명서 또는 사업자등록증 <span className="required">*</span></label>
              <div className="file-input-box">
                <button type="button" className="file-button" onClick={() => triggerFileInput("proofFile")}>파일 선택</button>
                <span className="file-text">{proofFileName}</span>
                <input type="file" id="proofFile" style={{ display: "none" }} onChange={(e) => handleFileChange(e, "proof")} />
              </div>
              <p className="file-description">※ 파일 크기는 50MB보다 작아야 합니다.</p>
            </div>
          </div>
            </div>

{/* 🔹 개인정보 동의 */}
<div className="section">
  <div className="section-title">개인정보 수집 및 이용에 관한 동의</div>
  <div className="privacy-content">
    <textarea readonly>
    회사는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 방침을 두고 있습니다. 회사은 개인정보취급방침을 개정하는 경우 웹사이트 공지사항을 통해 공지할 것입니다.

○ 본 방침은 2018년 11월 14일부터 시행됩니다.

 

1. 수집하는 개인정보 항목 및 방법

① 회사는 다음의 개인정보 항목을 다음의 방법으로 수집하고 있습니다.

- 개인정보 항목 : 업체명, 이메일, 이름, 연락처

- 개인정보 수집 방법 : 홈페이지(견적문의)

 

2. 개인정보 수집 및 이용 목적

① 회사는 개인정보를 다음의 목적을 위해 활용합니다. 수집한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.

- 구매 상담 및 문의 답변을 위한 개인정보 습득

- 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계

 

3. 개인정보의 처리 및 보유 기간

① 회사는 법령에 따른 개인정보 보유/이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리 및 보유합니다.

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

- 보유기간 : 지체 없이 파기

- 관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년

 

4. 개인정보의 제3자 제공 및 위탁 관련 사항

① 회사는 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우는 예외로 합니다.

- 이용자들이 사전에 동의한 경우

- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우

② 회사은 개인의 동의 없이 개인정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.

 

5. 이용자 및 법정대리인의 권리 행사

① 귀하는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.

- 개인정보 열람요구

- 오류 등이 있을 경우 정정 요구

- 삭제요구

- 처리정지 요구

② 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사은 이에 대해 지체 없이 조치하겠습니다.

③ 귀하가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우 회사은 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.

④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.

 

 

6. 개인정보의 파기

① 회사는 원칙적으로 개인정보 처리목적이 달성된 경우 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.

- 파기절차 : 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다

- 파기기한 : 이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다

- 파기방법 : 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.

 

7. 개인정보의 안전성 확보 조치

① 회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.

-  개인정보 취급 직원의 최소화 및 교육 : 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.

- 내부관리계획의 수립 및 시행 : 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.

- 해킹 등에 대비한 기술적 대책 : 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신, 점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다

 

 

8. 개인정보 자동수집장치 설치 및 운영 및 그 거부에 관한 사항

① 회사은 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사은 다음과 같은 목적을 위해 쿠키를 사용합니다.

- 쿠키 등 사용 목적 : 회원과 비회원의 접속 빈도나 방문 시간 등 분석, 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공

② 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.

- 쿠키 설정 거부 방법 : 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다. 예) 인터넷 익스플로러 : 도구 > 인터넷 옵션 > 개인정보

 

9. 개인정보 보호책임 관련 사항

① 회사은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

- 개인정보 보호책임자 : 대표 조윤지 (연락처 : 02)715-6139, nycopy@naver.com)

② 귀하께서는 회사 홈페이지를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.

③ 귀하께서는 회사 홈페이지를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사은 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.

④ 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.

- 개인분쟁조정위원회 (http://www.1336.or.kr / 1366)

- 정보보호마크인증위원회 (http://www.eprivacy.or.kr / 02-580-0533~4)

- 대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr / 02-3480-3600)

- 경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330)
    </textarea>
  </div>
  <div className="checkbox-group">
    <input type="checkbox" id="privacy-consent" />
    <label for="privacy-consent">개인정보 수집에 동의 합니다.</label>
  </div>

  <p>본인은 연세대학교 의료산업 최고위자 과정에 입학하고자 지원합니다.</p>

  <div className="regist">지원서 등록</div>
</div>

























</div>




     
        


      </div>
  

    
      <Footer />
    </div>
  );
};

export default ServingPage;
