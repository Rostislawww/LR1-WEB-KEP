var imagesArray = [
  {
    path: "images/1.jpg",
    title: "Планшет",
    descrip: "Планшет Apple",
  },
  {
    path: "images/2.jpg",
    title: "Планшет",
    descrip: "Планшет SAMSUNG SM-T225N",
  },
  {
    path: "images/3.jpg",
    title: "Планшет",
    descrip: "Планшет Samsung Galaxy Tab A8",
  },
];
var currentPage = 0;
function showImage() {
  document.getElementById("image").src = imagesArray[currentPage].path;
  document.getElementById("title").innerHTML = imagesArray[currentPage].title;
  document.getElementById("descrip").innerHTML =
    imagesArray[currentPage].descrip;

  if (currentPage === 0) {
    document.getElementById("back").innerHTML = "";
    document.getElementById("back").classList.add("unclickable-column");
  } else {
    document.getElementById("back").innerHTML = "Назад";
    document.getElementById("back").classList.remove("unclickable-column");
  }

  if (currentPage === imagesArray.length - 1) {
    document.getElementById("next").innerHTML = "";
    document.getElementById("next").classList.add("unclickable-column");
  } else {
    document.getElementById("next").innerHTML = "Вперед";
    document.getElementById("next").classList.remove("unclickable-column");
  }
}

showImage();
document.getElementById("back").addEventListener("click", function () {
  if (currentPage > 0) {
    currentPage = currentPage - 1;
    showImage();
  }
});

document.getElementById("next").addEventListener("click", function () {
  if (currentPage < imagesArray.length - 1) {
    currentPage = currentPage + 1;
    showImage();
  }
});
