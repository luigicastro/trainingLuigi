
var HelloWorld = function() {
	return {
		myVariable: null,

		init: function() {
			alert("HelloWorld.init()");

//			// attach an event to an HTML element
//			var self = this;
//			jQuery(".HelloWorld .myElementClass").click(function() {
//				self.myMethod();
//				// do something
//				...
//			});
		},
		
		myMethod: function() {
			alert("HelloWorld.myMethod()");
		}
		// no comma after last method
	};
}();

//jQuery(HelloWorld.init()); // Run after page loads