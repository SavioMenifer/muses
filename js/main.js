var options = {
  valueNames: [ 'model-name', 'model-desc' ]
};

var modelList = new List('model-select', options);

$('.list-item').click(function(e) { 
	$('.selected').removeClass('selected');
    $(this).addClass('selected');
 });

var myCodeMirror = CodeMirror(document.getElementById("json-input"), {
  value: "function myScript(){return 100;}\n",
  mode:  "javascript",
  theme: "night"
});

var myCodeMirror = CodeMirror(document.getElementById("output"), {
  value: "Output shows up here\n",
  mode:  "javascript",
  theme: "night"
});

var myCodeMirror = CodeMirror(document.getElementById("api_code"), {
  value: "API code shows up here\n",
  mode:  "javascript",
  theme: "night"
});