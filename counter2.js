
var createCounter = function(init) {
    let n= init
    return{
        increment: function(){
            return ++n

        },

        decrement: function(){
            return --n
            
        },
        reset: function(){
            return n=init
        }

    }       
    
}

