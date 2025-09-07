const asyncHandler = (requestHandler) =>{
    (req,res,next) => {
        Promises.resolve(requestHandler(req,res,next)).
        catch((err)=> next(err))
    }
}


export {asyncHandler}


// Using try catch 

// const asyncHandler1 = (func) => async (req,res,next) => {
//     try {
//         await func(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.messsage
//         })
//     }
// }