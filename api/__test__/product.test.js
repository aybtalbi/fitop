const app = require("../index.js");
supertest = require('supertest');
describe('product', () => {
    describe('get product ' , () => {
        describe('given product does not exist ' ,() => {
            it('should return a 500', async() =>{
                const productID= 'product_1'
                await supertest(app).get(`/api/products/find/${productID}`)
                .expect(500);
            })
        })
    })
})
describe('product', () => {
    describe('get product ' , () => {
        describe('given exist product' ,() => {
            it('should return a 200 and the product', async() =>{
            const ID= '622e09616a9b0960453b3a31'
            const {body , statusCode} = await supertest(app).get(`/api/products/find/${ID}`);
            expect(statusCode).toBe(200);
            expect(body._id).toBe(ID);     
            })
        })
    })
})

describe('product', () => {
    describe('get all products ' , () => {
            it('should return a 200', async() =>{
            const {body , statusCode} = await supertest(app).get(`/api/products/`);
            expect(statusCode).toBe(200);   
            })        
    })
})

describe('product', () => {
    describe('create product by admin ' , () => {
        it('should return a 200 and the product', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
        const addproduct = {
            title: "NIKE T-shirt For Women ",
            desc: "any",
            img: "any",
            categories: "homme",
            size: "XL",
            color: "white",
            type: "T-shirt",
            price: 30,
            inStock: "yes",
            brand: "Nike"
          }
        const {body , statusCode} = await supertest(app).post(`/api/products`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(addproduct);
        expect(statusCode).toBe(500);
        })        
    })
})
describe('product', () => {
    describe('create product by random user ' , () => {
        it('should return a 403', async() =>{
        const tokenJWT= 'randomToken'
        const addproduct = {
            title: "NIKE T-shirt for Women",
            desc: "any",
            img: "any",
            categories: "femme",
            size: "XL",
            color: "white",
            type: "T-shirt",
            price: 30,
            inStock: "yes",
            brand: "Nike"
          }
        const {body , statusCode} = await supertest(app).post(`/api/products`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(addproduct);
        expect(statusCode).toBe(403);  
        })        
    })
})

describe('product', () => {
    describe('update product by admin ' , () => {
        it('should return a 200 and the product', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
        const IDproduct= '623b5244add94578cf674a69'
        const addproduct ={
            title: "T-shirt",
            desc: "any",
            img: "any",
            categories: "femme",
            size: "L",
            color: "white",
            type: "t-shirt",
            price: 88,
            inStock: "yes",
            brand: "Nike"
          }
        const {body , statusCode} = await supertest(app).put(`/api/products/${IDproduct}`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(addproduct);
        expect(statusCode).toBe(200); 
        expect(body.title).toBe(addproduct.title); 
        })        
    })
})

describe('product', () => {
    describe('delete product by admin ' , () => {
        it('should return a 200', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
        const Idproduct= '623b58554292051861f97635'
        //623b588a4292051861f97637
        const {body , statusCode} = await supertest(app).delete(`/api/products/${Idproduct}`)
        .set('token',`Bearer ${tokenJWT}`);
        expect(statusCode).toBe(200); 
        })        
    })
})

describe('product', () => {
    describe('delete product by random user ' , () => {
        it('should return a 401', async() =>{
        const tokenJWT= 'randomToken'
        const Idproduct= '623b58554292051861f97635'
        const {body , statusCode} = await supertest(app).delete(`/api/products/${Idproduct}`)
        .set('token',`Bearer ${tokenJWT}`);
        expect(statusCode).toBe(403); 
        })        
    })
})