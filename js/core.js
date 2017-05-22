function loadJSON(callback, json_file) {
    console.log(json_file)
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', json_file, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}

function myinit(json_file) {
    console.log(json_file);
    loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        //console.log(actual_JSON)
        for (var key in actual_JSON) {
            var value = actual_JSON[key];
            // Use `key` and `value`
            var embedSpec = {
                mode: "vega-lite",  // Instruct Vega-Embed to use the Vega-Lite compiler
                spec: value,
                actions: {'export' : false, 'source': false, 'editor' : false}
            };
            vg.embed("#".concat("", key), embedSpec, function(error, result) {});
        }
    }, json_file);
    componentHandler.upgradeDom();
}

function get_language() {
    var lang = window.location.pathname.split('/')[1].split('_')[0]
    //console.log(lang)
    var supported_languages = ['fa', 'en', 'fr', "ru", "zh", "es"]
    lang_index = supported_languages.indexOf(lang)
    //console.log(lang_index)
    if (lang_index == -1) {
        return 'en'
    } else {
        return supported_languages[lang_index]
    }
}

function get_data(type, lang) {
    myinit('data/'.concat(type, '_', lang, '.json'))
}

function region() {
    get_data('region', get_language());
}

function age() {
    get_data('age', get_language());
}

function experience() {
    get_data('years', get_language());
}
