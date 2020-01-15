var origami=require("origamicore")
global.path=__dirname
var config=require("./config.js")
var ori=new origami(config,()=>{  delete require.cache[require.resolve("./config.js")]; var r=require("./config.js"); return r})
ori.start()