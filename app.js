const express = require('express');
const app=express();
app.use(express.json());


app.post("/bfhl", (req, res) => {
    const {data} = req.body;
    const num = [];
    const character = [];
    const characterRegex = /^[a-zA-Z]{1,}$/;
    const numberRegex = /^[0-9]{1,}$/;
    
        data.map((item) => {
            if(numberRegex.test(item)) {
                num.push(item);
            } else if(characterRegex.test(item)){
                character.push(item);
            }
        });
    
        const result = {
            isSuccess: "true",
            user_id: "anirudh_sharma_05052001",
            email: "anirudh1138.cse19@chitkara.edu.in",
            roll_number:"1910991138" ,
            numbers: num,
            alphabets: character
        };
    
        res.status(200).send(result);
    
});

const port = 8000;
app.listen(port,()=> {
    console.log(`app running on port ${port}`);
});