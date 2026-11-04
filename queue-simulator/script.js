$(document).ready(function(){
  let stack = [];
  
  function render(){
    $("#stackDisplay").empty();
    stack.forEach(val => {
      $("#stackDisplay").append(`<div class="block">${val}</div>`);
    });
  }

  $("#pushBtn").click(function(){
    let val = $("#inputVal").val().trim();
    if(val === ""){
      $("#message").text("Blank input not allowed!");
      return;
    }
    $("#message").text("");
    stack.push(val);
    render();
    $("#inputVal").val("");
  });

  $("#popBtn").click(function(){
    if(stack.length === 0){
      $("#message").text("Stack is empty! Cannot Pop.");
      return;
    }
    $("#message").text("");
    let removed = stack.pop();
    render();
    $("#deletedDisplay").html(`<div class="block">${removed}</div>`);
    $(".block").removeClass("peek");
  });

  $("#peekBtn").click(function(){
    if(stack.length === 0){
      $("#message").text("Stack is empty! Nothing to Peek.");
      return;
    }
    $("#message").text("");
    $(".block").removeClass("peek");
    $("#stackDisplay .block:last").addClass("peek");
  });

  $("#clearBtn").click(function(){
    stack = [];
    render();
    $("#deletedDisplay").empty();
    $("#message").text("Stack cleared.");
    $("#inputVal").val("");
  });
});
