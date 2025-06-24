import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Server is ready")
// });

// get a list of 5 jokes

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id : 1,
            title: "first jokes",
            desc:"This was the first jokes",
        },
        {
            id : 2,
            title: "second jokes",
            desc:"This was the second jokes",
        },
        {
            id : 3,
            title: "third jokes",
            desc:"This was the third jokes",
        },
        {
            id : 4,
            title: "fourth jokes",
            desc:"This was the fourth jokes",
        },
        {
            id : 5,
            title: "fifth jokes",
            desc:"This was the fifth jokes",
        }
    ]
    res.send(jokes);

})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is at localhost:${port}`)
})