let attempts = 10; // 남은 횟수를 저장하는 변수
let guessCount = 0; // 추측 횟수를 저장하는 변수

// 로그인 상태를 확인하는 함수
function checkLoginStatus() {
    fetch('/api/check-login')
        .then(response => response.json())
        .then(data => {
            if (!data.loggedIn) {
                // 로그인하지 않은 경우 게임 시작 버튼과 입력 필드 비활성화
                document.getElementById('guessButton').disabled = true;
                document.getElementById('guessInput').disabled = true;
                document.getElementById('errorMessage').textContent = '로그인 필요: 게임을 시작하려면 로그인해야 합니다.';
                document.getElementById('errorMessage').style.display = 'block';
                alert('게임을 시작하려면 로그인해야 합니다.');
                // 필요시 로그인 페이지로 리디렉션
                // window.location.href = '/login.html';
            } else {
                // 로그인된 경우 게임 시작 버튼과 입력 필드를 활성화
                document.getElementById('guessButton').disabled = false;
                document.getElementById('guessInput').disabled = false;
            }
        })
        .catch(err => {
            console.error('Error checking login status:', err);
        });
}

// 페이지 로드 시 로그인 상태 확인
window.onload = function() {
    checkLoginStatus();
};
function toggleInstructions() {
    const content = document.getElementById('instructionsContent');
    const button = document.getElementById('toggleButton');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.innerHTML = '&#9660;'; // 아래삼각형
    } else {
        content.style.display = 'none';
        button.innerHTML = '&#9650;'; // 윗삼각형
    }
}

// "추측하기" 버튼 클릭 시 makeGuess 함수를 호출하도록 이벤트 리스너 추가
document.getElementById('guessButton').addEventListener('click', () => {
    makeGuess();
});

// 입력 필드에서 Enter 키를 눌렀을 때 makeGuess 함수를 호출하도록 이벤트 리스너 추가
document.getElementById('guessInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        makeGuess();
    }
});

// 중복된 숫자가 있는지 확인하는 함수
function hasDuplicateDigits(number) {
    const digits = new Set();
    for (let i = 0; i < number.length; i++) {
        if (digits.has(number[i])) {
            return true;
        }
        digits.add(number[i]);
    }
    return false;
}

// 사용자의 추측을 처리하는 함수
function makeGuess() {
    const guess = document.getElementById('guessInput').value; // 입력된 추측 값을 가져옴
    const errorMessage = document.getElementById('errorMessage'); // 오류 메시지 요소를 가져옴

    // 오류 메시지를 초기화
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if (guess.length !== 4 || !/^\d+$/.test(guess)) { // 입력 값이 4자리 숫자인지 확인
        errorMessage.textContent = '4자리 숫자를 입력하세요'; // 4자리 숫자가 아니면 오류 메시지 설정
        errorMessage.style.display = 'block';
        return;
    }
    
    if (hasDuplicateDigits(guess)) { // 중복된 숫자가 있는지 확인
        errorMessage.textContent = '중복된 숫자가 있습니다. 다시 입력하세요'; // 중복된 숫자가 있으면 오류 메시지 설정
        errorMessage.style.display = 'block';
        return;
    }

    // 서버에 추측 값을 POST 요청으로 보내고 응답을 처리
    fetch('/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ guess }) // JSON 형식으로 추측 값을 서버로 보냄
    })
    .then(response => response.json()) // 서버 응답을 JSON 형식으로 변환
    .then(data => {
        attempts--; // 남은 횟수를 하나 줄임
        guessCount++; // 추측 횟수를 하나 증가
        document.getElementById('attemptsLeft').textContent = `남은 횟수: ${attempts}`; // 남은 횟수를 화면에 업데이트
        
        const resultDiv = document.getElementById('result'); // 결과를 표시할 요소를 가져옴
        const history = document.getElementById('history'); // 추측 기록을 표시할 요소를 가져옴
        const listItem = document.createElement('li'); // 새로운 리스트 아이템을 생성
        
        if (data.strikes === 0 && data.balls === 0) { // 스트라이크와 볼이 모두 0인 경우
            resultDiv.textContent = `아웃!`; // "아웃" 메시지 표시
            listItem.textContent = `추측 ${guessCount}: ${guess} - 아웃!`; // 추측 결과를 리스트 아이템에 설정
        } else {
            resultDiv.textContent = `스트라이크: ${data.strikes}, 볼: ${data.balls}`; // 서버로부터 받은 결과를 표시
            listItem.textContent = `추측 ${guessCount}: ${guess} - 스트라이크: ${data.strikes}, 볼: ${data.balls}`; // 추측 결과를 리스트 아이템에 설정
        }
        
        history.appendChild(listItem); // 리스트 아이템을 추측 기록에 추가

        if (data.strikes === 4) { // 사용자가 정답을 맞춘 경우
            alert('축하합니다! 숫자를 맞추셨습니다!'); // 축하 메시지 표시
            resultDiv.textContent = ''; // 결과를 초기화
            history.innerHTML = ''; // 추측 기록을 초기화
            attempts = 10; // 남은 횟수를 초기화
            guessCount = 0; // 추측 횟수를 초기화
            document.getElementById('attemptsLeft').textContent = `남은 횟수: ${attempts}`; // 남은 횟수를 화면에 업데이트
            fetch('/newgame', { // 새로운 게임을 시작하도록 서버에 요청
                method: 'POST'
            });
        } else if (attempts === 0) { // 남은 횟수가 0이 된 경우
            alert(`실패했습니다! 정답은 ${data.targetNumber}입니다.`); // 실패 메시지와 정답을 표시
            resultDiv.textContent = ''; // 결과를 초기화
            history.innerHTML = ''; // 추측 기록을 초기화
            attempts = 10; // 남은 횟수를 초기화
            guessCount = 0; // 추측 횟수를 초기화
            document.getElementById('attemptsLeft').textContent = `남은 횟수: ${attempts}`; // 남은 횟수를 화면에 업데이트
            fetch('/newgame', { // 새로운 게임을 시작하도록 서버에 요청
                method: 'POST'
            });
        }
    });
}