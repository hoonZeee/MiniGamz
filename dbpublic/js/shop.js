document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

// 로그인 상태 확인
function checkLoginStatus() {
    fetch('/api/profile')
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    document.getElementById('authMenu').innerHTML = `
                        <li class="auth-profile">
                            <img src="${data.profileImage}" alt="Profile Image">
                            <span>${data.nickname} (${data.points} 점)</span>
                        </li>
                        <li><a href="#" id="logoutLink">로그아웃</a></li>
                    `;
                    document.getElementById('logoutLink').addEventListener('click', logout);
                    document.getElementById('userName').innerText = data.name;
                    document.getElementById('userId').innerText = data.id;
                    document.getElementById('userNickname').innerText = data.nickname;
                    document.getElementById('userPoints').innerText = data.points;
                    document.getElementById('profileImage').src = data.profileImage;
                    updateButtons(data.points); // 포인트에 따라 버튼 상태 업데이트
                });
            } else {
                document.getElementById('authMenu').innerHTML = `
                    <li><a href="login.html" id="loginLink">로그인</a></li>
                    <li><a href="signup.html" id="signupLink">회원가입</a></li>
                `;
            }
        })
        .catch(error => {
            console.error('Error checking login status:', error);
        });
}

// 로그아웃
function logout() {
    fetch('/logout', { method: 'POST' })
        .then(response => {
            if (response.ok) {
                window.location.href = '/';
            } else {
                console.error('Logout failed');
            }
        })
        .catch(error => {
            console.error('Error logging out:', error);
        });
}


// 아이템 구매
function purchaseItem(type, value, cost) {
    fetch('/api/purchase-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, value, cost })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('아이템이 성공적으로 구매되었습니다.');
        } else {
            alert(data.error); // 아이템 실패 메시지 서버 문구로 대체
        }
    })
    .catch(error => console.error('Error:', error));
}


// 버튼 상태 업데이트
function updateButtons(userPoints) {
    const buttons = document.querySelectorAll('.nickname-color-selector button');

    buttons.forEach(button => {
        const cost = parseInt(button.getAttribute('data-cost'), 10);
        if (userPoints >= cost) {
            button.disabled = false;
            button.style.cursor = 'pointer';
        } else {
            button.disabled = true;
            button.style.cursor = 'not-allowed';
        }
    });
}

//아이템 구매시 상황 전달
function purchaseItem(type, value, cost) {
fetch('/api/purchase-item', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ type, value, cost })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        alert('아이템이 성공적으로 구매되었습니다.');
    } else {
        alert(data.error); //아이템 실패 지움 서버 문구 바로 뜨게 바꿈
    }
})
.catch(error => console.error('Error:', error));
}


// 로그인 상태 확인
function checkLoginStatus() {
    fetch('/api/profile')
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    document.getElementById('authMenu').innerHTML = `
                        <li class="auth-profile">
                            <img src="${data.profileImage}" alt="Profile Image">
                            <span>${data.nickname} (${data.points} 점)</span>
                        </li>
                        <li><a href="#" id="logoutLink">로그아웃</a></li>
                    `;
                    document.getElementById('logoutLink').addEventListener('click', logout);
                    document.getElementById('userName').innerText = data.name;
                    document.getElementById('userId').innerText = data.id;
                    document.getElementById('userNickname').innerText = data.nickname;
                    document.getElementById('userPoints').innerText = data.points;
                    document.getElementById('profileImage').src = data.profileImage;
                    updateButtons(data.points); // 포인트에 따라 버튼 상태 업데이트
                });
            } else {
                document.getElementById('authMenu').innerHTML = `
                    <li><a href="login.html" id="loginLink">로그인</a></li>
                    <li><a href="signup.html" id="signupLink">회원가입</a></li>
                `;
            }
        })
        .catch(error => {
            console.error('Error checking login status:', error);
        });
}


   
    
