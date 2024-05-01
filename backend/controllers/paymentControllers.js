import asyncHandler from 'express-async-handler'


const createInvoice=asyncHandler(async(req,res)=>{
    res.send('creating invoice...')
})

export {createInvoice}