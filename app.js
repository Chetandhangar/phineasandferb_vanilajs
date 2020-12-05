var btnoutput = document.querySelector('#btn-translate');
var txtinput = document.querySelector("#txt-input");
var txtoutput = document.querySelector("#output");

var url = "	https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationUrl (input){
    return url + "?" + "text=" + input; 
}

function getTranslation() {
    var input = txtinput.value;
    fetch(getTranslationUrl(input))
    .then(res => res.json())
    .then(data => {
        var outputdata = data.contents.translated;
        txtoutput.innerHTML = outputdata;
        console.log("successfully translated");
    })
    .catch(err =>{
        alert("There is error from Server Side do not panic");
        console.log(err);
    })
};

btnoutput.addEventListener('click',getTranslation);
