console.log("OnlineSevaUpdate Loaded Successfully");
function searchWebsite() {

    let value = document.getElementById("searchInput").value.toLowerCase().trim();

    if (value.includes("job") || value.includes("police") || value.includes("vacancy")) {

        window.location.href = "jobs.html";

    }

    else if (value.includes("result")) {

        window.location.href = "results.html";

    }

    else if (value.includes("admit")) {

        window.location.href = "admit-card.html";

    }

    else if (value.includes("yojana")) {

        window.location.href = "yojana.html";

    }

    else if (value.includes("samagra")) {

        window.location.href = "samgra.html";

    }

    else if (value.includes("csc")) {

        window.location.href = "csc.html";

    }

    else if (value == "") {

        alert("Please enter something to search.");

    }

    else {

        alert("No matching page found.");

    }

}
// Back To Top Button

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
