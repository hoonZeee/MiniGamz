document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/profile', {
            method: 'GET',
            credentials: 'include' // 세션 쿠키 포함
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userData = await response.json();
        const userNicknameElement = document.getElementById('userNickname');
        userNicknameElement.textContent = userData.nickname;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});
