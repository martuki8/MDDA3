function fromArrayToString(array) {
    var resultString = ";";
    for (var i = 0; i < array.length; i++) {
        resultString = resultString + array[i] + ";";
    }
    return resultString;
}

var symptoms = ["HP:0012535", "HP:0012534"]
var diseasesList = [];

$.ajax({
    url: "http://127.0.0.1:5001/getdiseases",
    type: "POST",
    data: fromArrayToString(symptoms),
    contentType: "application/json",
    success: function (response) {
        diseasesList = $.parseJSON(response)
    },
    error: function (xhr, status, error) {
        console.error("Error:", status, error);
    }
});