document.addEventListener('DOMContentLoaded', () => {
    // 각 Table define
    const adminTableBody = document.querySelector('#datatablesSimple tbody');
    const userTableBody = document.querySelector('#userTable tbody');

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
            if (adminTableBody) {
                adminTableBody.innerHTML = '';
            }
            if (userTableBody) {
                userTableBody.innerHTML = '';
            }

            // 데이터를 테이블에 추가
            data.forEach(user => {
                if (adminTableBody) {
                    // admin.html 테이블에 데이터 추가
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.password}</td>
                        <td>${user.name}</td>
                        <td>${user.nickname}</td>
                    `;
                    adminTableBody.appendChild(row);
                } else if (userTableBody) {
                    // user-list.html 테이블에 데이터 추가
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.nickname}</td>
                        <td>${user.password}</td>
                        <td>${user.highschool}</td>
                        <td>${user.person}</td>
                        <td>${user.alias}</td>
                        <td>${user.travel}</td>
                        <td>${user.movie}</td>
                        <td><img src="${user.profileImage}" alt="Profile Image" width="50"></td>
                        <td>${user.points}</td>
                    `;
                    userTableBody.appendChild(row);
                }
            });

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    
    // 초기 데이터 가져오기 호출
    fetchUserData();
});
