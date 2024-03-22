

// menu toggle script
document.addEventListener('DOMContentLoaded', function() {
  const menuToggleOpen = document.querySelector('.menuToggleOpen');
  const menuToggleClose = document.querySelector('.menuToggleClose');
  const navigationList = document.querySelector('.navigationList');

  function openNavigation() {
    navigationList.style.display = 'flex';
    menuToggleOpen.style.display = 'none';
    menuToggleClose.style.display = 'block';
  }

  function closeNavigation() {
    navigationList.style.display = 'none';
    menuToggleOpen.style.display = 'block';
    menuToggleClose.style.display = 'none';
  }

  menuToggleOpen.addEventListener('click', openNavigation);
  menuToggleClose.addEventListener('click', closeNavigation);
});


// scrolling Progess

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(calcHeight);
    let scrollValue = Math.round((pos * 100)/calcHeight);
    // console.log(scrollValue);
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#2559a4 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = function() {
    // checkNavbar();
    calcScrollValue();
};






document.addEventListener('DOMContentLoaded', function() {
  setActiveNavigationItem();
});

function setActiveNavigationItem() {
  const navigationLinks = document.querySelectorAll('.navigationItem a');

  // 遍历每个链接元素
  navigationLinks.forEach(link => {
      // 监听链接的点击事件
      link.addEventListener('click', function(event) {
          // 移除所有导航项上的 'active' 类
          navigationLinks.forEach(link => {
              link.classList.remove('active');
          });

          // 将当前点击的链接添加 'active' 类
          this.classList.add('active');
      });

      // 检查当前页面 URL 是否与导航项的 href 相匹配
      if (window.location.href === link.href) {
          // 如果匹配，添加 'active' 类
          link.classList.add('active');
      }
  });
}
