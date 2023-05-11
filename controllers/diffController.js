exports.calcDiff = function (req, res){
    const { num1, num2 } = req.query;
    res.status(200).json(Number(num1) - Number(num2));
};
