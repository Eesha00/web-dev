$(document).ready(function(){

    // ✅ GET request (fetch data)
    $("#getBtn").click(function(){

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "GET",
            success: function(data){
                $(".result").html(
                    "<p>" + data.title  + data.body + "</p>"
                );
            },
            error: function(){
                $(".result").html("Error loading data");
            }
        });

    });


    // ✅ POST request (send data)
    $("#postBtn").click(function(){

        let postData = {
            title: "Test Title",
            body: "This is test data",
            userId: 1
        };

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: postData,
            success: function(response){
                $(".result").html(
                    "<p>Data sent successfully!</p><pre>" +
                    JSON.stringify(response, null, 2) +
                    "</pre>"
                );
            },
            error: function(){
                $(".result").html("Error sending data");
            }
        });

    });

});