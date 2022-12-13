let observer = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    } else {
      box.target.style.opacity = 0;
    }
  });
});

let subContents = document.querySelectorAll(".sub-contents");
observer.observe(subContents[0]);
observer.observe(subContents[1]);
observer.observe(subContents[2]);
