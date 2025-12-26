const N = 50;

for (let i = 0; i < N; i++) {
  const snow = document.createElement('div');
  snow.innerHTML = '❄';
  snow.style.cssText = `
    position: fixed;
    top: ${-Math.random() * 1000}px;
    left: ${Math.random() * 100}vw;
    font-size: ${10 + Math.random() * 10}px;
    opacity: ${0.5 + Math.random() * 0.5};
    pointer-events: none;
    z-index: 999999;
    animation: fall ${3 + Math.random() * 5}s linear infinite;
  `;
  document.body.appendChild(snow);
}

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    to { transform: translateY(100vh) rotate(360deg); }
  }
`;
document.head.appendChild(style);

