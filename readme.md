# 필독<br/>
작업간에 소통 부재로 파일 충돌 시 문제가 커질 수 있으므로 프로젝트에서 꼭! in progress 해주시고 카톡방에 작업중이라는 카톡 남겨주세요~~~ 안했을 시 일어나는 오류는 본인책임!!<br/>
본인 작업한 후에 작업 결과는 readme.md에 계속 수정사항 추가작성 해야합니다!! 추후 보고서 작성 및 과제 평가 매우중요!~~!<br/><br/><br/>


## 수정사항<br/>
5/20<br/>
  - 이지훈 - 숫자야구 게임 구현<br/>
  - 황정인 - 로그인,회원가입 구현 및 db연동<br/>
  - 권진호,옥주헌 - 메인페이지 구현 및 aws서버 연동<br/>

5/27 이지훈<br/>
  - db, main, baseballgame 파일 합치기<br/>
  - server.js 업데이트<br/>
  - main에서 각각 페이지로 접속 구현 (과정에서 기존 진호,주헌이 만든 로그인및 회원가입페이지를 정인이 구현한 페이지로 대체)<br/>
    
5/28 권진호<br/>
  - 카탈로그 위치 변경
  - 게임이미지, 게임명 클릭시 게임으로 이동
  - 라이브채팅 홈html에 자바스크립트로 우측하단에 표시 접고열기 가능하게
  - 홈 index,css,js파일 업데이트<br/>  

5/30 황정인<br/>
  - 로그인 회원가입화면 꾸미기(이미지,애니메이션,효과음 사용)
  - 회원가입 시 본인확인 질문 추가
  - 아이디, 비밀번호찾기 기능 추가
    +로그인 미니언화면 고정
    +로그인 성공시 홈화면 이동<br/>

5/31 권진호<br/>
  - 서버에 데이터베이스 생성및 연동 그리고 회원가입 로그인 실행잘되는것까지 확인완료
  - server.js 변경한 파일 업데이트<br/>  
  - 문의게시판 생성

6/1 고태현<br/>
  - npm install express-session (세션 사용을 위해 패키지 설치)  
  - 간단한 프로필 페이지 생성(디자인 추후 예정), 비밀번호 변경기능 추가(db 데이터 변경)  
  - 비로그인 상태에서 프로필 눌렀을경우 로그인 화면 등장  
  - 로그인시 세션 유지하여 프로필 페이지에 유저 정보 확인가능 // 로그인 한 후 로그인, 회원가입란이 사라지고 로그아웃 으로 바뀜(누르면 로그아웃)  
  - server.js, index, login.html 변경한 파일 업데이트  
  - profile.html dbpublic에 추가 업데이트  

6.2 정현성<br/>
  - server.js, index 게임이미지 추가 및 변경한 파일 업데이트 
  - minion bird game 구현
  - main에서 미니언버드게임 페이지로 접속 업데이트
  - minion bird game 에 pause 및 restart 추가
  - 페이지 안에 뒤로가기 버튼 추가로 메인페이지로 이동 추가

6.3 옥주헌<br/>
  - package.json 버전 및 express-session 추가
  - adminpublic 폴더를 /admin 경로로 서빙하도록 설정을 추가
  - admin 경로에서 admin.html 파일을 서빙하도록 추가
  - adminPage 추가 (host:3000/admin)

6.3 황정인<br/>
  - 아이디 비밀번호(영어,숫자 허용 + 글자수 제한)
  - DB 쿼리수정 닉네임 UNIQUE 적용 + 실시간 중복 확인 기능
  - 회원가입 성공 시 폭죽 스크롤버그 없앰
  - DB이름 변경 test -> user

6.3 정현성<br/>
  - 미니언 버드 게임 난이도조절 스코어 20점 마다 속도증가 설정추가

6/4 이지훈<br/>
   - 슈팅 게임 추가(좌 우로 이동하며 내려오는 적을 피하거나 파괴하여 점수를 올리는 게임)
   - 총알 초기 설정은 2초당 한발
   - 적이 일정한 시간으로 y축 하강하면서 spaceship과 부딪히면 게임 오버되게 구현
   - 게임 시작시 Life가 3개 지급. 적에게 닿을 때 마다 life하나 감소
   - 15초마다 총알 아이템 낙하. 획득 시 발사 간격 1/2감소. 최대 2개까지 획득시 더이상 드랍 x
   - 30초마다 빨간물약 획득시 라이프 하나 증가 
   - 게임스코어는 시간이 지날수록 상승, 총알로 적 파괴 시 +20
   - 적은 시간이 지날 수록 점점 빠르게 내려옴
   - gameover시 retry(enter로도 시작가능) 구현

6/4 정현성<br/>
   - 점프점프게임 추가(좌 우로 이동하며 점프하여 플랫폼을 오르면서 점수를 올리는 게임)
   - 스코어 20점당 게임난이도 증가
   - 게임시작 버튼 누르고 스페이스바로 점프입력시 게임 시작 
   - 더블점프 기능   
   - 게임내 사운드 효과적용 
   - server.js파일 업데이트 및 index.html업데이트

6.4 황정인<br/>
   - 웹사이트 폰트변경
   - 메인화면 꾸미기(게임 아이콘 생성 + 커뮤니티,문의게시판 위치 변경)
   - 회원가입 이미지 추가

6.5 권진호<br/>
  - 라이브채팅 비로그인 채팅전송시 로그인이 필요함 팝업 및 로그인창으로 이동
  - 로그인시 세션에서 닉네임 가져오기 -> 문의게시판 및 라이브채팅
  - 문의게시판 데이터베이스 연동 및 자신이 작성한글만 수정 삭제가능하도록 비로그인시 버튼을 숨김, 로그인시 아이디가 동일해야 수정 삭제가능
  - 문의게시판은 완성, 커뮤니티 게시판 진행중...
  - quiry.html, script.js, server.js 업데이트

6/6 고태현<br/>
  - 프로필 페이지 수정(프로필 사진 추가) // 상단바 디자인 변경(의논 후 어떤걸로 할지 결정)  
  - 메인페이지, 프로필페이지, 문의게시판 페이지(mini gamz 디자인 변경 + 로그인시 프로필 사진 닉네임 우상단 표시)  
  - user db에 profileImage 추가 (프로필 사진 저장용)  
  - server.js, index, profile.html, inquiry.html, styles.css  업데이트  
  - public/images 폴더 추가 (프로필 사진)

 6.6 옥주헌<br/>
  - adminpublic 소스코드 리팩토링 ( 소스 분리 및 경로 정리 )
  - Dashboard - dataTable Frontend Changed

6/6 이지훈<br/>
  - shooting game 패치
  - 난이도 상향 조정, 아이템 크기 최적화, main 버튼 추가
  - 적이 겹쳐서 피격시 live 두개씩 감소되는 오류 수정
  - baseball game 패치
  - 중복숫자, 문자입력시 팝업창 대신 경고메세지로 뜨도록 ux/ui개선

6/6 황정인<br/>
  - index.html,stykes.css 필요없는 부분정리
  - 라이브채팅 모양 변경

6.6 권진호<br/>
  - 문의 글 클릭시 내용확인기능
  - 커뮤니티 페이지 생성 및 테이블생성
  - 커뮤니티 카테고리창 생성
  - 시험용 자유게시판(free.html) 생성
  - quiry.html,community.html, free.html, server.js 업데이트

6/7 이지훈<br/>
  - 2048게임 추가
  - 키보드 방향키로 크기가 같은 셀을 합쳐 높은 숫자를 만드는 게임 구현
  - 모든 게임 화면에 게임 규칙및 게임 조작법 추가
  - 접고 펴기 함수로 조작법 박스 구현


6/7 고태현<br/>
  - 프로필 페이지에 비밀번호 변경 문제점 수정 + 포인트란 추가 + 상단 레이아웃에 포인트점수 추가.  
  - 메인페이지, 프로필페이지, 문의게시판 페이지(상단 글자 클릭시 글자 배경 스타일 추가), 메인페이지, 문의페이지 상단 레이아웃 통일  
  - user db에 points 컬럼 추가 (포인트 저장)  
  - server.js, index.html, profile.html, inquiry.html, styles.css  업데이트  

6/7 정현성<br/>
  - 런 미니언 게임 추가
  - 스페이스바로 점프해서 장애물을 뛰어넘는 게임 구현
  - 20점마다 게임 속도증가 (난이도 상승)
  - 비로그인시 모든 게임 이용 불가능하게 설정
  - server.js 업데이트
  - index.html 업데이트

6/7 권진호<br/>
 - 사진게시판 추가
   사진업로드 및 제목입력 카테고리별보기
   업로드한 사진게시물에 평가기능(1~5점)
 - 커뮤니티 좌측 카테고리바수정
 - server.js 업데이트
 - pic 업로드

6/8 옥주헌<br/>
 - package.json multer define
   - [x] "multer": "^1.4.5-lts.1"
 - admin 대시보드에 접속시 가입된 DB 조회 기능 추가( ID,PW,Name,Nickname )
   - [x] added fetchTableData.js
   - [x] fixed admin.html
 - admin Dashboard에 접속된 userName 표시
   - [x] added displayUserNickname.js
 - fixed admin.html
   - error page 경로 변경

6/8 옥주헌<br/>
 - package.json multer define
   - [x] "multer": "^1.4.5-lts.1"
 - admin 대시보드에 접속시 가입된 DB 조회 기능 추가( ID,PW,Name,Nickname )
   - [x] added fetchTableData.js
   - [x] fixed admin.html
 - admin Dashboard에 접속된 userName 표시
   - [x] added displayUserNickname.js
 - fixed admin.html
   - error page 경로 변경

6/8 황정인<br/>
  - 아이디 자릿수 제한
  - 아이템샵에서 프로필 추가 구매 가능(이미지는 전부 임시)
  - 구매하지않은 프로필은 선택불가
  - 칭호 브론즈,실버,골드 잠궈놓음(추후결정)