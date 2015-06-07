function SendRequest () {
/*        var xmlhttp = new XMLHttpRequest();
        var url = "http://sigy-c4bg.rhcloud.com/request.php";
        xmlhttp.open("POST", url);
        xmlhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        */
        
        var signal = PrepareRequest();
        var data = JSON.stringify(signal);
        
        
        console.log(data);
//xmlhttp.send(data);
        
        
        
        $.ajax({
		  method: "GET",
		  url: "http://sigy-c4bg.rhcloud.com/request.php",
		  data: data
		})
		  .done(function( msg ) {
			alert( "Data Saved: " + msg );
		  });
		  
		  
 };

    
function PrepareRequest () {

        var index = 0;
        var date = $.now();
        var first = $("#first").val();
        var last = $("#last").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var Data = {UID: index,
			first: first,
			last: last,
			email: email,
			phone: phone,
			date: date};
        
        index++;
        return Data;
 
};

