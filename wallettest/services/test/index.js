module.exports = class testservice
{
    constructor(config,dist)
    { 
        this.statics=config.statics
        this.context=config.context
    }
    async test(msg,func,self)
    {
        var logs=[]
        try{
            logs.push(await global.wallet.request('test1','rial',1200,"1234")) 
            logs.push(await global.wallet.request('test2','rial',-200,"1234")) 
            logs.push(await global.wallet.request('test3','rial',-1200,"1234")) 
            
        }catch(exp){
            console.log('--->',exp)
        }
        
        return func(null,logs)
    }
}
