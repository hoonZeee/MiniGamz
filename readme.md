# 필독<br/>
작업간에 소통 부재로 파일 충돌 시 문제가 커질 수 있으므로 프로젝트에서 꼭! in progress 해주시고 카톡방에 작업중이라는 카톡 남겨주세요~~~ 안했을 시 일어나는 오류는 본인책임!!<br/>
본인 작업한 후에 작업 결과는 readme.md에 계속 수정사항 추가작성 해야합니다!! 추후 보고서 작성 및 과제 평가 매우중요!~~!<br/><br/><br/>


## 수정사항<br/>
5/20<br/>
이지훈 - 숫자야구 게임 구현<br/>
황정인 - 로그인,회원가입 구현 및 db연동<br/>
권진호,옥주헌 - 메인페이지 구현 및 aws서버 연동<br/>

5/27 이지훈<br/>
    -db, main, baseballgame 파일 합치기<br/>
    -server.js 업데이트<br/>
    -main에서 각각 페이지로 접속 구현 (과정에서 기존 진호,주헌이 만든 로그인및 회원가입페이지를 정인이 구현한 페이지로 대체)<br/>
    
5/28 권진호<br/>
  -카탈로그 위치 변경
  -게임이미지, 게임명 클릭시 게임으로 이동
  -라이브채팅 홈html에 자바스크립트로 우측하단에 표시 접고열기 가능하게
  -홈 index,css,js파일 업데이트<br/>  

5/30 황정인<br/>
-로그인 회원가입화면 꾸미기(이미지,애니메이션,효과음 사용)
-회원가입 시 본인확인 질문 추가
-아이디, 비밀번호찾기 기능 추가
+로그인 미니언화면 고정
+로그인 성공시 홈화면 이동<br/>

5/31 권진호<br/>
  -서버에 데이터베이스 생성및 연동 그리고 회원가입 로그인 실행잘되는것까지 확인완료
  -server.js 변경한 파일 업데이트<br/>  

6/1 고태현<br/>
  -npm install express-session (세션 사용을 위해 패키지 설치)  
  -간단한 프로필 페이지 생성(디자인 추후 예정), 비밀번호 변경기능 추가(db 데이터 변경)  
  -비로그인 상태에서 프로필 눌렀을경우 로그인 화면 등장  
  -로그인시 세션 유지하여 프로필 페이지에 유저 정보 확인가능 // 로그인 한 후 로그인, 회원가입란이 사라지고 로그아웃 으로 바뀜(누르면 로그아웃)  
  -server.js, index, login.html 변경한 파일 업데이트  
  -profile.html dbpublic에 추가 업데이트  

6.2 정현성<br/>
   -server.js, index 게임이미지 추가 및 변경한 파일 업데이트 
   -minion bird game 구현
   -main에서 미니언버드게임 페이지로 접속 업데이트
   -minion bird game 에 pause 및 restart 추가
   -페이지 안에 뒤로가기 버튼 추가로 메인페이지로 이동 추가
