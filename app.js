document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("show");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeBtn");

  showBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});

 


  const workLink = document.getElementById('workLink');
  const workBox = document.getElementById('workBox');


  workLink.addEventListener('mouseenter', () => {
    workBox.classList.add('show');
  });

  
  workLink.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!workBox.matches(':hover')) {
        workBox.classList.remove('show');
      }
    }, 200);
  });workLink.addEventListener('click', function (e) {
  e.preventDefault();
  workBox.classList.toggle('show');
});



  workBox.addEventListener('mouseleave', () => {
    workBox.classList.remove('show');
  });

  workBox.addEventListener('mouseenter', () => {
    workBox.classList.add('show');
  });
