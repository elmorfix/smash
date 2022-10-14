const SmashApi = require("@natanbarbosa2/smashapi");
(async() => { 
    const user = {
        username: 'mfxuser123', 
        password: 'Andre25'
    }    
    const smash = new SmashApi(user);
    await smash.currentRollete();
    
    console.log("Chamou o que devia")
    
})()