const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m
const urlParams = new URLSearchParams(queryString);
const project = urlParams.get("project");
console.log(project);
// shirt
if (project === "resume") {
  let all = document.querySelectorAll(".resume");
  all.forEach((item) => {
    item.classList.remove("d-none");
  });
} else if (project == "bank") {
  let all = document.querySelectorAll(".bank");
  all.forEach((item) => {
    item.classList.remove("d-none");
  });
} else if (project == "booking") {
  let all = document.querySelectorAll(".booking");
  all.forEach((item) => {
    item.classList.remove("d-none");
  });
}
