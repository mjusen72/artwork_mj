document.addEventListener("DOMContentLoaded", function() {
  const htmlFiles = [
    './index.html',
    './login.html',
    './guide.html'
  ];
    
    const createLink = (element, url) => {
  const a = document.createElement('a');
  a.href = url;  // 클릭 가능한 텍스트 추가
  // CSS 설정
  a.style.display = 'block';
  a.style.width = '100%';
  a.style.height = '100%';
  a.style.position = 'absolute';  // 위치 유형을 'absolute'로 설정
  a.style.top = '0';  // 상단으로부터의 위치를 0으로 설정
  a.style.left = '0';  // 왼쪽으로부터의 위치를 0으로 설정
  element.appendChild(a);
  return a;
};


  const logo = document.getElementById('logo');
  createLink(logo, htmlFiles[0]);

  const logout = document.getElementById('login-logout');
  createLink(logout, htmlFiles[1]);

  const help = document.getElementById('help');
  createLink(help, htmlFiles[2]);
});