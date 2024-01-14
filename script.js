const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function (e) {
    // console.log(e.clientY);
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

