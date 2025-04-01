import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHome, FaAngleRight } from "react-icons/fa";
import "../styles/Alumni3.css";

const AlumniGreeting = () => {
  return (
    <div className="alumni-container">
      <Navbar />

      {/* 🔹 헤더 영역 */}
      <div className="serving-header">
        <img src={`${process.env.PUBLIC_URL}/assets/alumni3.jpg`} alt="headerimg" className="headerimage" />
        <div className="serving-header-text">동문회칙</div>
        <div className="serving-header-detail">연세대학교 의과대학 ‘의료산업최고위자 과정’ 동문 회칙을 소개합니다.</div>
      </div>

      {/* 🔹 Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home"><FaHome className="home-icon" /></span>
          <span className="breadcrumb-current">총동문회</span>
          <FaAngleRight className="breadcrumb-icon" />
          <span className="breadcrumb-current">동문 회칙</span>
        </div>
      </div>




        
<div className="rule-section">
         <h2 className="chapter-title">제 1 장 총칙</h2>

             <div className="article">
                <h3 className="article-title">● 제 1 조 (명칭)</h3>
                <p className="article-content">
                 본회는 연세대학교 의과대학 의료산업 최고위자과정 동문회라 칭한다.
                 </p>
             </div>

  <div className="article">
    <h3 className="article-title">● 제 2 조 (목적)</h3>
    <p className="article-content">
      본회는 의료산업분야의 학문 및 관련 산업 연구를 통하여 자기개발과 회원 상호간의 친목을 도모하며,
      긴밀한 인적 네트워크를 통하여 소셜 커뮤니티 형성과 발전을 목적으로 한다.
    </p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 3 조 (활동과 사업)</h3>
    <p className="article-content">본회는 목적을 달성하기 위하여 다음과 같은 활동과 사업을 할 수 있다.</p>
    <p className="article-list">
      1. 회원 상호간의 친목 및 우의증진을 도모하기 위한 활동과 사업 <br />
      2. 회원들의 자질연구를 통한 자기개발을 도모하기 위한 활동과 사업 <br />
      3. 의료산업의 발전을 위한 네트워크 형성하기 위한 활동과 사업 <br />
      4. 회원 상호간의 지원을 위한 활동과 사업 <br />
      5. 동문회 발전 및 지원을 위한 활동과 사업 <br />
      6. 기타 본회 목적 달성을 위해 필요하다고 판단한 활동과 사업 <br />
    </p>



    
  </div> 
  

   
</div>

<div className="rule-section">
  <h2 className="chapter-title">제 2 장 회원</h2>

  <div className="article">
    <h3 className="article-title">● 제 4 조 (회원의 자격)</h3>
    <p className="article-content">
    본 연세대학교 의과대학 의료산업 최고위자과정을 수료한 자로서 제5조 “회원의 권리와 의무”를 가진다.
    </p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 5 조 (회원의 권리와 의무)</h3>
    <p className="article-content">본회의 회원은 총회에서 의결권 및 선거권과 피선거권을 가지며 본회의 자치활동에 참여할 권리를 가지며 회비 납부 및 회칙 준수의 의무를 가진다.</p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 6 조 (회비)</h3>
    <p className="article-list">
      1. 입회비 : 50만원 <br />
      2. 년회비 : 30만원 <br />
      3.  특별회비 : 재원 부족 시 별도로 회비를 징수할 수 있다. <br />
      4.  찬조금 : 동문회 위상 제고와 건실한 재정을 위해 찬조금을 모금할 수 있다. <br />
    </p>
  </div>
</div>



<div className="rule-section">
         <h2 className="chapter-title">제 3 장 총회</h2>

             <div className="article">
                <h3 className="article-title">● 제 7 조 (회의)</h3>
                <p className="article-content">
                  1. 총회는 정기총회 와 임시총회 <br />
                  2. 회원들의 자질연구를 통한 자기개발을 도모하기 위한 활동과 사업 <br />
                </p>
             </div>

  <div className="article">
    <h3 className="article-title">● 제 8 조 (총회의 소집)</h3>
    <p className="article-content">
    1. 정기총회는 매년 1회 실시하며, 임시총회는 회장단회의 2/3이상 또는 동문회원 1/3 이상의 요구가 있을 시 동문회장이 소집할 수 있다. <br />
    <br />
    2. 총회의 소집은 15일 전에 그 회의의 목적 및 사유를 기재한 문서나 전신으로 총회 구성원에게 통지하여야 한다. <br />
     ex) cafe에 공지, e-mail, 문자 메시지 등으로 대체 가능  <br />
     다만, 긴급한 상황이 발생할 시는 예외로 할 수 있다.
    </p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 9  조 (의결)</h3>
    <p className="article-content">총회 의결은 참석회원 과반수 찬성으로 의결하고 가부 동수인 경우 동문회장이 결정권을 가진다.</p>
  </div> 

  <div className="article">
    <h3 className="article-title">● 제 10  조 (의결 사항)</h3>
    <p className="article-content">
      1. 총회는 본회의 의결 기구로서 다음 사항을 의결한다.
      <br />
      가. 감사보고 <br />
      나. 감사보고 <br />
      다. 사업 계획 및 예산 승인 <br />
      라. 회칙 개정 및 임원 선출 <br />
      마. 특별회비 징수에 관한 사항 <br />
      바. 기타 중요하다고 판단되는 사항 <br />
      <br />
      2. 회장은 천재지변 및 기타 긴급한 사항 발생할 시 총회를 생략하고 운영위원회로 하여금 총회의 권한을 대행할 수 있다.
      </p>


  </div>
  
   

</div>

<div className="rule-section">
  <h2 className="chapter-title">제 4 장 임원</h2>

  <div className="article">
    <h3 className="article-title">● 제 11 조 (명칭 및 구성)</h3>
    <p className="article-list">
    본회는 다음과 같은 임원을 둔다. <br />
    1. 고문 : 1인 이상 (사회적인 명망을 가진 동문 중 회장단 회의에서 초빙 결정하고 직전 명예회장을 고문으로 함) <br />
    2. 명예회장 : 1인 (직전 임기를 마친 동문회장) <br />
    3. 회장 : 1인  <br />
    4. 부회장 : 선출직 부회장 (1인) 및 당연직 부회장 (동문 각 기수 회장) <br />
    5. 감사 : 1인 <br />
    6. 사무총장 : 1인 (재무, 행사, 홍보 담당 책임자 겸임) <br />
    7. 총무 : 1인 (재무, 행사, 홍보 담당 실무 겸임) <br />
    </p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 12 조 (임원의 선임)</h3>
    <p className="article-list">
    1. 동문회장, 사무총장 및 감사는 회장단회의에서 추천하고 총회에서 선출한다. <br />
    2. 선출직 부회장은 회장단회의에서 선임하고 당연직 부회장은 각 기수 회장으로 선임한다. <br />
    3. 총무는 동문회장이 선임한다.
    </p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 13 조 (위원회)</h3>
    <p className="article-list">
    동문회의 원활한 운영을 위하여 운영위원회를 둘 수 있다. <br />
    운영회원회 : 동문회장, 선출직 부회장, 당연직 부회장, 사무총장, 총무로 하며 명예회장과 고문으로 부터 운영의 자문을 받는다. (위원장은 동문회장으로 한다)
    </p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 14 조 (임원의 임기)</h3>
    <p className="article-list">
    1. 총회에서 선출한 동문회장, 사무총장, 감사 등의 임기는 1년으로 하고 한번 연임할 수 있다.<br />
    2. 선출직 부회장의 임기는 1년으로 하고 한번 연임할 수 있다.
    </p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 15 조 (임원의 불신임 및 회원의 자격 상실)</h3>
    <p className="article-list">
    1. 총회에서 선출된 임원은, 회장단회의 과반수 제청에 의해 총회 또는 임시총회에서 과반수 찬성으로 불신임을 결의할 수 있다.<br />
    2. 동문회의 명예를 실추시키거나 동문회원으로써 활동이 불가능 하다고 판단되는 회원은, 동문회장 또는 부회장의 발의에 의해 회장단회의 과반수 찬성으로 자격을 상실토록 할 수 있다.
    </p>
  </div>

  <div className="article">
  <h3 className="article-title">● 제 16 조 (감사의 직무)</h3>
  <p className="article-list">1. 감사의 직무는 다음과 같다.</p>
  <div className="article-sub">
    <p><span className="indent">가.</span> 본회의 재산 사항에 대한 감사.</p>
    <p><span className="indent">나.</span> 업무수행에 대한 감사.</p>
    <p><span className="indent">다.</span> 재산사항 또는 업무집행에 관하여 부적당한 점이 발견될 시 총회 소집을 요청하고 이를 총회에 보고하는 일.</p>
  </div>
  <p className="article-list">
    2. 감사는 정기 감사와 수시 감사로 구분한다. <br />
    3. 정기 감사는 매년 1회, 수시 감사는 수시로 행할 수 있다.
    </p>
  </div>

  <div className="article">
  <h3 className="article-title">● 제 17 조 (임원의 임무)</h3>
  <p className="article-list">
    1. 고문은 사회적인 명망을 가진 동문 및 직전 명예회장으로서 본회 발전을 위한 자문을 한다. <br />
    2. 명예회장은 직전 임기를 마친 동문회장으로 하며 동문회의 발전을 위하여 노력한다. <br />
    3. 동문회장은 본회를 대표하여 동문회 전반을 총괄한다. <br />
    4. 선출직 부회장과 당연직 부회장의 임무는 다음과 같다.
  </p>
  <div className="article-sub">
    <p><span className="indent">가.</span> 선출직 부회장 : 동문회 운영전반에 대하여 주요 의결에 참여하고, 동문회 발전에 필요한 회의 참석 및 활동에 적극적으로 참여한다.</p>
    <p><span className="indent">나.</span> 당연직 부회장 : 각 기수 회장으로 선출되면 동문회 당연직 부회장으로 활동하고, 동문회 주요 내용에 대한 의결권을 가지며, 각 기수와 동문회의 원활한 소통이 이루어지도록 노력한다.</p>
    <p><span className="indent">다.</span> 재산사항 또는 업무집행에 관하여 부적당한 점이 발견될 시 총회 소집을 요청하고 이를 총회에 보고하는 일.</p>

    <p className="muted-bullet">• 회장단회의에서 선임한 임원은 동문회 운영의 필요에 따라 임기 중 보직 변경 또는 해임을 할 수 있다.</p>
  </div>
    <p className="article-list">
    5. 사무총장은 동문회 전반에 대해 업무의 집행 및 조율을 한다. <br />
    <span className="gray-indent">
    회장을 보좌하며 본 회의 사업 전반을 담당하고, 운영위원회 또는 회장단 회의에서 의결된 내용을 본회 활동에 반영되도록 한다. 또한, 본회 관련 내용 및 해당사항 등을 동문들과 공유토록 한다.
    </span> <br />
    <span className="gray-indent">
    동문회 운영위원회의에 참여하며 의결권을 갖는다.
    </span>
  </p>
  <p className="article-list">
    6. 총무는 아래와 같은 사항들의 실무적인 담당 활동을 한다. <br />
    <span className="gray-indent">
    학술 관련업무(학술행사 기획, 주관, 후원, 준비), 재무 관련업무(본회의 회계업무, 자금운용, 회원관리, 경조사 관리), 행사 관련업무(본회의 각종 행사 및 사업을 공지하고 그 행사를 담당),
    </span> <br />
    <span className="gray-indent">
    홍보 업무관련(본회의 활동을 대내외에 홍보하고, 카페 등 홍보활동의 운영을 담당하며 동문회 활동의 모든 기록물을 관리하고 운영한다.
    </span>
  </p>
  <p className="article-list">
  7. 회장단 회의에서는 원활한 동문회 활동을 위하여 부서 및 해당 인원을 추가, 폐기 또는 감원할 수 있다.
    </p>
  
  </div>


  
</div>

<div className="rule-section">
         <h2 className="chapter-title">제 5 장 운영 위원회</h2>

             <div className="article">
                <h3 className="article-title">● 제 18 조 (구성 및 운영위원)</h3>
                <p className="article-list">
                  1. 구성 : 본회는 본회의 업무를 추진하기 위하여 운영위원회를 두고 위원장은 동문회장이 한다. <br />
                  2. 본회의 운영위원은 고문, 동문회장, 선출직 부회장, 당연직 부회장, 사무총장 및 총무로 한다. <br />
                </p>
             </div>

  <div className="article">
    <h3 className="article-title">● 제 19 조 (운영위원회 의결사항 및 소집)</h3>
    <p className="article-list">
    1. 운영위원회의 의결 사항은 다음과 같다. <br />
    </p>
    <div className="article-sub">
    <p><span className="indent">가.</span> 총회에 부의할 사항.</p>
    <p><span className="indent">나.</span> 총회로부터 위임 받은 사항.</p>
    <p><span className="indent">다.</span> 기타 본회의 업무 집행에 필요한 사항.</p>
    <p><span className="indent">라.</span> 동문회 발전에 필요한 주요사항에 대한 발의 또는 의결.</p>
    </div>
    <p className="article-list">
    2. 위원회의 의결은 위원 과반수 출석 2/3 이상 찬성을 원칙으로 한다. <br />
    3. 소집 : 회의는 년 4회 정기 모임으로 하고, 회장이 필요하다고 인정할 때 또는, 위원 2/3 이상의 요구가 있을 경우에 회장이 소집한다. <br />
    </p>
  </div>



  

  

 
  
   

</div>


<div className="rule-section">
         <h2 className="chapter-title">제 6 장 회계</h2>

             <div className="article">
                <h3 className="article-title">● 제 21 조 (회계 년도)</h3>
                <p className="article-list">
                본회의 회계 년도는 1월 1일부터 12월 31일 까지로 한다.
                </p>
             </div>

  <div className="article">
    <h3 className="article-title">● 제 22 조 (운영위원회 의결사항 및 소집)</h3>
    <p className="article-list">
    본회의 재정은 다음과 같은 수입으로 한다. <br />
    1. 원우 회비(입회비, 년회비)  <br />
    2. 특별회비 <br />
    3. 찬조금 및 기타 수입
    </p>
  </div>

  <div className="article">
    <h3 className="article-title">● 제 23 조 (기금의 관리)</h3>
    <p className="article-list">
    본회의 기금은 금융기관에 예입하며 동문회 명의로 통장을 개설하여 사무총장 책임하에 총무가 관리한다. <br />
    본회의 기금운용에 관하여, 감사의 요구가 있을 때에는 관련 자료를 제출한다.
    </p>
  </div>



  

  

 
  
   

</div>

<div className="rule-section">
         <h2 className="chapter-title">제 7 장 경조사에 관한 사항</h2>

             <div className="article">
                <h3 className="article-title">● 제 24 조 (경조사 지출규정)</h3>
                <p className="article-list">
                1. 근조기 운영 : 동문회원과 재학생에게 지원한다. <br />
                2. 본인 및 배우자상 : 1백만원 및 근조기 <br />
                3. 자녀 상 : 50만원 및 근조기 <br />
                4. 본인 및 배우자 부모 상 : 30만원 및 근조기 <br />
                5. 본인 및 자녀 결혼 : 30만원 및 화환 <br />
                6. 승진, 영전, 개업 등 경사 발생 시 : 10만원 상당의 난 <br />
                7. 상기외 지원이 필요한 경우 운영위원회에서 결정하여 지원한다. <br />
                8. 상기 규정에 의한 집행은 운영위원회에서 집행한다.
                </p>
             </div>

  

  



  

  

 
  
   

</div>

<div className="rule-section">
         <h2 className="chapter-title">제 8 장 부칙</h2>

             <div className="article">
                <h3 className="article-title">● 제 25 조 (기부 활동)</h3>
                <p className="article-list">
                1. 본회는 사회적 자선사업이나 공공사업을 돕기 위한 공익 목적의 기부활동을 할 수 있다.<br />
                2. 기부금(품)의 지원은 회장단 회의 과반수가 발의하고, 회장단 회의 2/3이상 찬성으로 집행할 수 있다.
                </p>
             </div>
             <div className="article">
                <h3 className="article-title">● 제 26 조 (기타)</h3>
                <p className="article-list">
                본 회칙에 규정되지 아니한 사항은 일반 관례에 따르고, 필요시 운영위원회에서 결정한다.
                </p>
             </div>
             <div className="article">
                <h3 className="article-title">● 제 27 조 (회칙의 변경)</h3>
                <p className="article-list">
                1. 주요 회칙의 변경은, 운영위원회 회의에서 발의하고 총회에서 승인을 받을 수 있다. <br />
                2. 회칙의 변경 및 보완은 운영위원회 과반수 찬성으로 발의를 하고 운영위원회 회의 2/3 이상 찬성으로 변경할 수 있다.
                </p>
             </div>
             <div className="article">
                <h3 className="article-title">● 제 28 조 (시행)</h3>
                <p className="article-list">
                본 회칙은 통과된 날부터 시행한다.
                </p>
             </div>

          


</div>

<div className="rule-section">
         <h2 className="chapter-title">제 9 장 세칙</h2>

             <div className="article">
                <h3 className="article-title">● 제 29 조 (찬조금 및 물품 등 발생 보고)</h3>
                <p className="article-list">
                찬조금 및 찬조물품 발생 시 운영위원회에 보고하고 총회에 최종 보고한다.
                </p>
             </div>
             <div className="article">
                <h3 className="article-title">● 제 30 조 (모임 및 총회)</h3>
                <p className="article-list">
                정기총회는 연 1회로 한다. 임시총회는 의결에 의해 동문 회장이 소집할 수 있다. <br />
                정기모임은 연 1회 이상(동문회 입회식 외)으로 하며, 의결에 의해 동문회장이 소집한다.
                </p>
             </div>
             

          


</div>


      <Footer />
    </div>
    
  );
};

export default AlumniGreeting;
