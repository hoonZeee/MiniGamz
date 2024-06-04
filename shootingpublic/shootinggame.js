const now = Date.now(); // 현재 시간 가져오기
if (now - lastEnemySpawn > enemySpawnInterval) { // 적 생성 간격이 지났을 경우
  for (let i = 0; i < 3; i++) { // 한 번에 여러 적 생성
    let x, y = 0, width = 60, height = 60, dy = 2;
    let collision;
    do {
      collision = false;
      x = Math.random() * (canvas.width - width); // 적의 x 위치 랜덤 설정
      for (let j = 0; j < enemies.length; j++) {
        let other = enemies[j];
        if (x < other.x + other.width && x + width > other.x && y < other.y + other.height && y + height > other.y) {
          collision = true;
          break;
        }
      }
    } while (collision);
    
    enemies.push({ x, y, width, height, dy }); // 새로운 적 추가
  }
  lastEnemySpawn = now; // 마지막 적 생성 시간 업데이트
  gameSpeed += 0.1; // 게임 속도 증가
}
