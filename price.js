function mOver(){
    document.getElementById("c1").innerHTML="50% Discount";
}
function mOut(){
    document.getElementById("c1").innerHTML="$340";
}

$(document).ready(function(){
    $("#c1").on({
        mouseenter:function(){
            $(this).css("background-color","black");
            $(this).css("color","yellow");
        },
        mouseleave:function(){
            $(this).css("background-color","white");
            $(this).css("color","black");
        }
    });
});

function mOver1(){
    document.getElementById("c2").innerHTML="25% Discount";
}
function mOut1(){
    document.getElementById("c2").innerHTML="$150";
}

$(document).ready(function(){
    $("#c2").on({
        mouseenter:function(){
            $(this).css("background-color","black");
            $(this).css("color","yellow");
        },
        mouseleave:function(){
            $(this).css("background-color","white");
            $(this).css("color","black");
        }
    });
});

function mOver2(){
    document.getElementById("c3").innerHTML="10% Discount";
}
function mOut2(){
    document.getElementById("c3").innerHTML="$200";
}

$(document).ready(function(){
    $("#c3").on({
        mouseenter:function(){
            $(this).css("background-color","black");
            $(this).css("color","yellow");
        },
        mouseleave:function(){
            $(this).css("background-color","white");
            $(this).css("color","black");
        }
    });
});

function mOver3(){
    document.getElementById("c4").innerHTML="60% Discount";
}
function mOut3(){
    document.getElementById("c4").innerHTML="$1530";
}

$(document).ready(function(){
    $("#c4").on({
        mouseenter:function(){
            $(this).css("background-color","black");
            $(this).css("color","yellow");
        },
        mouseleave:function(){
            $(this).css("background-color","white");
            $(this).css("color","black");
        }
    });
});


function mOver4(){
    document.getElementById("c5").innerHTML="40% Discount";
}
function mOut4(){
    document.getElementById("c5").innerHTML="$2435";
}

$(document).ready(function(){
    $("#c5").on({
        mouseenter:function(){
            $(this).css("background-color","black");
            $(this).css("color","yellow");
        },
        mouseleave:function(){
            $(this).css("background-color","white");
            $(this).css("color","black");
        }
    });
});