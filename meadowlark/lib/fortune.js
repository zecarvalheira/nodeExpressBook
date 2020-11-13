
var fortuneCookies = [
    "Conquer", 
    "Rivers",
    "do no t"
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
}