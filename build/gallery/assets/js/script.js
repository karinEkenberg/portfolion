var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var closeBtn = document.getElementById("closeFullImg");
var galleryImages = document.querySelectorAll(".gallery-img");

// Lägg till klickhändelse till varje bild i galleriet
galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    openFullImg(image.src);
  });
});

closeBtn.addEventListener("click", closeFullImg);

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}
