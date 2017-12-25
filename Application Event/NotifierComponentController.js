({
	handleClick : function(component, event, helper) {
        alert('Test');
        var appEvent = $A.get('e.c:applicationEvent');
        appEvent.setParams({
            "testWord" : 'Value From Application Event'
        });
        alert('Fire ')
        appEvent.fire();
        alert('Fired ')
	},
})