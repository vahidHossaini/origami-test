module.exports = class captchatestservice
{
    constructor(config,dist)
    { 
        this.statics=config.statics
        this.context=config.context
    }
    async test(msg,func,self)
    { 
		var a = await global.captcha.validate(msg.data.id)
		console.log(a)
		if(a)
		{
			return func(null,{m:"accepted"})
		} 
        return func(null,{m:"not accepted"})
    }
}
