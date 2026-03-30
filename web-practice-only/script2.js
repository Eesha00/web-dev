$(document).ready(function(){
//------read - load
    $("#getbtn").click(function(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts/1",
            method: "GET",
            success: function(data){
                $("#content").html(
                    data.title
                );
            }
        })
    })

//----------create - add
    $("#addBtn").click(function(){
        let newPost = { title: "new post", body: "this a new post", userId: 1};
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data:newPost,
            success:function(response){
                $("#content").html(
                    "<p>post added </p>"
                )
            }
        })

    })
//---------update - edit
$("#updateBtn").click(function(){
    let updatePost = {title:"updated post",body:"this is updated post", userId:1};
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PUT",
        data: updatePost,
        success:function(response){
            $("#content").html(
                "<p>post updated<p>" 
            )
        }
    })
})
    

 // ---------------- DELETE
    $("#deleteBtn").click(function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "DELETE",
            success: function(){
                $(".result").html("<p>Post deleted!</p>");
            },
            error: function(){ $(".result").html("Error deleting post"); }
        });
    });


})