/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/


widget.on("processresult", function(scope, args) {
	
 var maxDate = args.rawResult.values[0].data;
	
 var year = maxDate.substring(0, 4);
 var month = maxDate.substring(5, 7);
 var day = maxDate.substring(8, 10);

 args.result.value.text = month + '/' + day + '/' + year;
})


