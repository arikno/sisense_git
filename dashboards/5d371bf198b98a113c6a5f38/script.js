/*
Welcome to your Dashboard's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://developer.sisense.com/pages/viewpage.action?pageId=557127
*/

//prism.$ngscope.sizing.leftpane.collapsed = true;

setTimeout(() => {
	
	if(window.parent) {

	//debugger;
	
	window.parent.postMessage({ size: $('DASHBOARD > .has-scrollbar > .content')[0].scrollHeight }, '*');

}
	
	
}, 10000);




