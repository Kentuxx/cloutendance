
exports.loginUser = (request, response) => {

    /// SEND FOR PURE STRING
    /// JSON FOR JSON DATA/FORMAT

    if(request.username == "Tezada"){
        if(request.password == "seanpogy01"){
            response.json({
                status: "200",
                user: {
                    id: "7gSD5kJ3kh9Ds3e9x",
                    username: "Tezada"
                }
            });
        }
    } else {
        response.json({
            status: "404",
            message: "404 account not found"
        });
    }

}
