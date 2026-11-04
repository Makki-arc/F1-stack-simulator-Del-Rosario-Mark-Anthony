$(document).ready(function(){
  let queue = [];
  function render(){
    $("#queueDisplay").empty();
    queue.forEach((val,index)=>{
      let cls = "block";
      if(index===0) cls+=" front";
      $("#queueDisplay").append(`<div class="${cls}">${val}</div>`);
    });
  }
  $("#enqBtn").click(function(){
    let val = $("#inputVal").val().trim();
    if(val===""){ $("#message").text("Blank input not allowed!"); return; }
    $("#message").text(""); queue.push(val); render(); $("#inputVal").val("");
  });
  $("#deqBtn").click(function(){
    if(queue.length===0){ $("#message").text("Queue is empty! Cannot Dequeue."); return; }
    $("#message").text(""); let removed = queue.shift();
    render(); $("#deletedDisplay").html(`<div class="block">${removed}</div>`);
  });
  $("#peekBtn").click(function(){
    if(queue.length===0){ $("#message").text("Queue is empty! Nothing to Peek."); return; }
    $("#message").text(""); $(".block").removeClass("peek");
    $("#queueDisplay .block:first").addClass("peek");
  });
  $("#clearBtn").click(function(){ queue=[]; render(); $("#deletedDisplay").empty(); $("#message").text("Queue cleared."); });
});
