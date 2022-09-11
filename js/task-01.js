const ulRefs = document.querySelectorAll(".item");
console.log("Number of categories:", ulRefs.length);

ulRefs.forEach((element) => {
  const h2Refs = element.firstElementChild;
  const liRefs = element.lastElementChild;
  console.log("Category:", h2Refs.textContent);
  console.log("Elements:", liRefs.children.length);
});
