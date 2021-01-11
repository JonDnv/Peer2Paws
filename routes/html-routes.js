let obj = {
    cats: "meow",
    dogs: "woof"
}


module.exports = function(app) {
    //Routes for different pages - NAV BAR
    app.get("/", (req, res) => {
        res.render("index")
    });

    app.get("/sign-in", (req, res) => {
        res.render("sign-in")
    });

    app.get("/contact", (req, res)=> {
        res.render("contact")
    });

    //Routes for different pages - SIDE BAR
    
    app.get("/see-all", (req, res)=> {
        res.render("see-all")
    });

    app.get("/post-pet", (req,res) => {
        res.render("post-pet")
    });

    app.get("/apply", (req,res) => {
        res.render("apply")
    });
}