const blockAcard = document.querySelectorAll(".info-block-acard");
const btnOpenAcard = document.querySelectorAll(".btnArrow");
const contentBlock = document.querySelectorAll(".content-block");
btnOpenAcard.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dataAddOpenAcard = e.target.dataset;
    blockAcard.forEach((el) => {
      contentBlock.forEach((item) => {
        if (
          dataAddOpenAcard.addOpenAcard === el.dataset.openAcard &&
          el.dataset.openAcard === item.dataset.style
        ) {
          el.classList.toggle("noactive");
          btn.classList.toggle("animbtn");
          btn.classList.toggle("rotate-arrow");
          item.classList.toggle("active-content-block");
          console.log("item >>??", item);
        }
      });
    });
  });
});
