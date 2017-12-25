({
    doHandleCompEvent : function(component, event, helper){
        alert('App Event')
        var eventParam = event.getParam('testWord');
        alert(eventParam);
        // getParams is used to get the parameters that we have passed from the child component
        
    },
})