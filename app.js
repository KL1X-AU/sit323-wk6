const express = require("express")
const res = require("express/lib/response")
const app = express()

//Take 2 numbers and return the sum.
const add = (num1,num2) => {
    return num1 + num2
}
//Take 2 numbers and return the difference.
const subtract = (num1,num2) => {
    return num1 - num2
}
//Take 2 numbers and returns the quotient.
const divide = (num1,num2) => {
    return num1 / num2
}
//Take 2 numbers and return the product.
const multiply = (num1, num2) => {
    return num1 * num2
}
//Take 2 numbers, return the first number to the power of the second.
const exponent = (num1,num2) => {
    return num1 ** num2
}
//Takes 2 numbers, return the remainder when dividing the first number by the second.
const modulo = (num1,num2) => {
    return num1 % num2
}


//Addition Endpoint
app.get("/add",(req,res) =>  {
    try {
        const num1 = parseFloat(req.query.num1)
        const num2 = parseFloat(req.query.num2)
        
        //Handles error handling for common errors between endpoints
        checkErrors(num1,num2)

        const result = add(num1,num2)
        res.status(200).json({statuscode: 200,data: result})
    }
    catch (error){
        console.log(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
})

//Subtraction Endpoint
app.get("/subtract",(req,res) =>  {
    try {
        const num1 = parseFloat(req.query.num1)
        const num2 = parseFloat(req.query.num2)
        
        checkErrors(num1,num2)

        const result = subtract(num1,num2)
        res.status(200).json({statuscode: 200,data: result})
    }
    catch (error){
        console.log(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
})

//Multiplication Endpoint
app.get("/multiply",(req,res) =>  {
    try {
        const num1 = parseFloat(req.query.num1)
        const num2 = parseFloat(req.query.num2)
        
        checkErrors(num1,num2)

        const result = multiply(num1,num2)
        res.status(200).json({statuscode: 200,data: result})
    }
    catch (error){
        console.log(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
})

//Division Endpoint
app.get("/divide",(req,res) =>  {
    try {
        const num1 = parseFloat(req.query.num1)
        const num2 = parseFloat(req.query.num2)

        checkErrors(num1,num2)

        //Additional error condition specific to division endpoint.
        if (num2 === 0) {
            throw new Error("Cannot Divide by 0")
        }

        const result = divide(num1,num2)
        res.status(200).json({statuscode: 200,data: result})
    }
    catch (error){
        console.log(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
})

//Exponent Endpoint
app.get("/exponent",(req,res) =>  {
    try {
        const num1 = parseFloat(req.query.num1)
        const num2 = parseFloat(req.query.num2)

        checkErrors(num1,num2)

        const result = exponent(num1,num2)

        res.status(200).json({statuscode: 200,data: result})
    }
    catch (error){
        console.log(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
})

//Modulo Endpoint
app.get("/modulo",(req,res) =>  {
    try {
        const num1 = parseFloat(req.query.num1)
        const num2 = parseFloat(req.query.num2)

        checkErrors(num1,num2)

        const result = modulo(num1,num2)
        
        res.status(200).json({statuscode: 200,data: result})
    }
    catch (error){
        console.log(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
})

//Square Root Endpoint
app.get("/squareroot",(req,res) =>  {
    try {
        const num1 = parseFloat(req.query.num1)

        checkErrors(num1,0)

        //Additional error condition specific to division endpoint.
        if (num1 < 0) {
            throw new Error("num1 cannot be negative.")
        }

        const result = exponent(num1,0.5)
        
        res.status(200).json({statuscode: 200,data: result})
    }
    catch (error){
        console.log(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
})

//Helper function to determine if number is valid.
const isValidNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

//Error handling code to reduce duplication of code.
const checkErrors = (num1,num2) => {
    if(!isValidNumber(num1)) {
        throw new Error("num1 is incorrectly defined.")
    }
    if(!isValidNumber(num2)) {
        throw new Error("num2 is incorrectly defiend")
    }
    if (num1 === NaN || num2 === NaN) {
        console.log()
        throw new Error("Parsing Error")
    }
}

//Port
const PORT = 3040

app.listen (PORT,() => {
    console.log(`Running on ${PORT}`)
})