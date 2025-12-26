const N = 40;

for (let i = 0; i < N; i++) {
  const snow = document.createElement('div');
  snow.innerHTML = '❄';
  snow.style.cssText = `
    position: fixed;
    top: ${-Math.random() * 1000}px;
    left: ${Math.random() * 100}vw;
    font-size: ${12 + Math.random() * 8}px;
    color: white;
    text-shadow: 0 0 5px rgba(0,0,0,0.6);
    opacity: 0.85;
    pointer-events: none;
    z-index: 999999;
    animation: fall ${4 + Math.random() * 6}s linear infinite;
  `;
  document.body.appendChild(snow);
}

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);

