var galleryTab = document.getElementById("galleryNav");
var quoteTab = document.getElementById("quoteNav");
var galleryContent = document.getElementById("galleryTab");
var quoteContent = document.getElementById("quoteTab");

galleryTab.addEventListener("click", () => {
    galleryTab.classList.add("active");
    quoteTab.classList.remove("active");
    galleryContent.classList.add("active");
    quoteContent.classList.remove("active");
});
quoteTab.addEventListener("click", () => {
    quoteTab.classList.add("active");
    galleryTab.classList.remove("active");
    quoteContent.classList.add("active");
    galleryContent.classList.remove("active");
});

const firstImg = document.getElementById("firstImg");
const galleryQuote = document.getElementById("galleryQuote");
const galleryAuthor = document.getElementById("galleryAuthor");
const authorInput = document.getElementById("authorInput");
const quoteInput = document.getElementById("quoteInput");
const imgUpload = document.getElementById("imgUpload");
const previewQuote = document.getElementById("previewQuote");
const previewAuthor = document.getElementById("previewAuthor");
const previewImg = document.getElementById("previewImg");
const btnAdd = document.getElementById("btnAdd");

imgUpload.addEventListener("change", (event) => {
    const { files } = event.target;
    const newPic = files[0].name;
    previewImg.setAttribute("src", "img/" + newPic);
});

function validateForm(a,b) {
    a=0; b=0;
    if(previewAuthor.innerHTML != "") { a = 1 }
    if(previewQuote.innerHTML.split(" ").length > 3) { b = 1 }
    return a,b;
}
function submitForm() {
    if(validateForm(1,1)) {
        firstImg.setAttribute("src", previewImg.getAttribute("src"));
        galleryQuote.innerHTML = previewQuote.innerHTML;
        galleryAuthor.innerHTML = previewAuthor.innerHTML;
        galleryTab.classList.add("active");
        quoteTab.classList.remove("active");
        galleryContent.classList.add("active");
        quoteContent.classList.remove("active");
    }
}
quoteInput.addEventListener("blur", () => {
    previewQuote.innerHTML = quoteInput.value;
});
authorInput.addEventListener("blur", () => {
    previewAuthor.innerHTML = "- " + authorInput.value + " -";
});
btnAdd.addEventListener("click", validateForm);
btnAdd.addEventListener("click", submitForm);