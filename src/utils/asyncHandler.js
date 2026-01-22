import { response } from "express";

//using promises
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//using async await -> here in this file we just take fn as param and then wrap it in a try catch

//const asyncHandler = () => {}
//const asyncHandler = (fn) => {()=>{}}
//const asyncHandler = (fn) => ()=>{}

// const asyncHandler = (fn) => async () => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     response.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
