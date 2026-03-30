console.log("hello from script.js!");

// Button 1
document.getElementById("btn1").onclick = function() {
    document.getElementById("oldtxt").innerHTML = "new text";
};

// Button 2
document.getElementById("btn2").onclick = function() {
    alert("button clicked");
};

// Button 3
document.getElementById("btn3").onclick = function() {
    document.getElementById("text").innerHTML = "Changed!";
};


$("#btn").on("click", function() {
    $("#text").html("Changed!");
});

