module.exports = function(router) {
    //renders homepage
    router.get("/", function(req, res){
        res.render("home");
    });
    //renders the saved handlebars page
    router.get("/saved", function(req, res){
        res.render("saved");
    });
}