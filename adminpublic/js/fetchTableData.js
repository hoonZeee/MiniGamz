// js/fetchTableData.js

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#datatablesSimple tbody');

    // 데이터를 가져오는 함수
    async function fetchUserData() {
        try {
            // 데이터 가져오기
            const response = await fetch('/api/users');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // 테이블 내용 초기화
            tableBody.innerHTML = '';

            // 데이터를 테이블에 추가
            data.forEach(user => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.password}</td>
                    <td>${user.nickname}</td>
                    <td>${user.name}</td>
                `;

                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    // 초기 데이터 가져오기 호출
    fetchUserData();
});
