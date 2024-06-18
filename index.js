// Intersection Observerでフェードインを制御する関数
function observeFadeIn(elements) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // 要素が30%以上表示されたら発動
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in'); // フェードイン用のクラスを追加
        observer.unobserve(entry.target); // 一度発動したら監視を停止する
      }
    });
  }, options);

  elements.forEach(element => {
    observer.observe(element);
  });
}

// ページのロード完了後に実行する
document.addEventListener('DOMContentLoaded', () => {
  const leadParagraph = document.querySelector('.lead p');
  if (leadParagraph) {
    observeFadeIn([leadParagraph]);
  }
});
