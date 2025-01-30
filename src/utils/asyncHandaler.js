const asyncHandaler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err));
    };
};
export default asyncHandaler;
/*
const asyncHandaler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
