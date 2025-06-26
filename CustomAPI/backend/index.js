import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req,res)={})
app.get('/api/products',(req,res)=>{
    const products = [
        {
            id :1,
            name:"Product table 1",
            price:100,
            image : "https://images.unsplash.com/photo-1606814902920-1c8f2b3d4c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        },
        {
            id :2,
            name:"Product metal 1",
            price:200,
            image : "https://images.unsplash.com/photo-1606814902920-1c8f2b3d4c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        },
        {
            id :3,
            name:"Product wood 1",
            price:150,
            image : "https://images.unsplash.com/photo-1606814902920-1c8f2b3d4c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        },
        {
            id :4,
            name:"Product table 1",
            price:10,
            image : "https://images.unsplash.com/photo-1606814902920-1c8f2b3d4c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        },
        {
            id :5,
            name:"Product table 1",
            price:300,
            image : "https://images.unsplash.com/photo-1606814902920-1c8f2b3d4c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        },
    ]
    if(req.query.search){
        const filteredProduct = products.filter(product=>product.name.includes(req.query.search));
        res.send(filteredProduct)
        return;
    }

    setTimeout(() => {
        res.send(products)
    },2000);

})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
    
})