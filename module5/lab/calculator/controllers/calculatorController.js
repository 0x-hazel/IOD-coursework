function perform(req, callback) {
    let a = req.query?.a;
    let b = req.query?.b;
    if (a === undefined || b === undefined) {
        return { error: "Please provide arguments (a and b)" };
    }
    return { result: callback(a, b) };
}
