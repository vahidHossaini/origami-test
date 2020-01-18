module.exports = class testservice
{
    constructor(config,dist)
    { 
        this.statics=config.statics
        this.context=config.context
    }
    async test(msg,func,self)
    { 
        try{
            //var x = await global.notification.send('publicsms','loginsms',{code:'1234',to:"09378092520"});
            console.log('----->',global.ori.RandomInt())
            
        }catch(exp){
            console.log('----->',exp)
            
        }
        return func(null,{m:"hello."})
    }
}
