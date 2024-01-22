var ques1 = "Tổng các số dương trong mảng";
var ques2 = "Đếm có bao nhiêu số dương trong mảng";

var arrSoN = [];

function themSoNVaoMang() {
    if(document.getElementById("txt-arraynum").value != ""){
        var SoN = document.getElementById("txt-arraynum").value * 1;
        arrSoN.push(SoN);
        document.querySelector(".render_arr").innerHTML = arrSoN;
    }
    else {
        alert("Vui lòng không để trống và nhập số nguyên có giá trị lớn hơn hoặc bằng 0");
    }
}

document.getElementById("themN").onclick = themSoNVaoMang;
document.getElementById("txt-arraynum").addEventListener("keypress", function(e) {
    if(e.key === "Enter")
        themSoNVaoMang();
});

document.getElementById("java01").onclick = function () {
    var timeout;
    var sum = 0;
    for(var i = 0; i < arrSoN.length; i++)
    {
        if(arrSoN[i] >= 0){
            sum += parseFloat(arrSoN[i]);
        }
    }
    document.getElementById("kq1").innerHTML = `Tổng các số dương trong mảng là ${sum}`;

    changeText("kq1", ques1, timeout);

}

document.getElementById("java02").onclick = function () {
    var timeout;
    var count = 0;
    for(var i = 0; i < arrSoN.length; i++)
    {
        if(arrSoN[i] >= 0){
            count++;
        }
    }
    document.getElementById("kq2").innerHTML = `Có <b>${count} số dương</b> trong mảng`;

    changeText("kq2", ques2, timeout);

}


function changeText(id, ques, timeout) {
    var paragraph = document.getElementById(`${id}`);

    clearTimeout(timeout);
    timeout = setTimeout(function() {
    paragraph.innerHTML = ques;
    }, 5000);
};