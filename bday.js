(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    var link = document.createElement("LINK");
    link.href="https://cdn.rawgit.com/jothamhernandez/snippetFiles/master/bday.css";
    link.type="text/css";
    link.rel="stylesheet";
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
        $(document).ready(function(){
          $.ajax({
            url: "https://cdn.rawgit.com/jothamhernandez/snippetFiles/master/message.json",
            method: "GET",
            dataType: "JSON",
            success: function(data){
                var content = $(".my_greeting > p").html(data.message);
            }
          })
        });

    };
    document.getElementsByTagName("head")[0].appendChild(script);
    document.getElementsByTagName("head")[0].appendChild(link);
})();
