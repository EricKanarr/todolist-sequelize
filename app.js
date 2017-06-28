const express = require('express');
const app = express();
const models = require('./models');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
const routes = require("./routes");

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache')
app.set('views', './views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);


const todolist = models.todolist.build({
  name: 'sleep',
  description: 'reboot brain battery',
  priority: 3
})

todolist.save().then(function(todolist){
  console.log(todolist.id);
})

// edit action for link
router.post("/links/:linkId", getLink, function (req, res) {
    req.checkBody("title", "You must include a title.").notEmpty();
    req.checkBody("url", "Your URL is invalid.").isURL();

    const linkData = {
        title: req.body.title,
        url: req.body.url,
        descr: req.body.descr
    };

    req.getValidationResult().then(function (result) {
        if (result.isEmpty()) {
            req.link.update(linkData).then(function (newLink) {
                res.redirect("/");
            });
        } else {
            const errors = result.mapped();
            res.render("form", {
                link: linkData,
                errors: errors,
                action: "/links/" + req.link.id,
                buttonText: "Update link"
            });
        }
    });
});

// delete action for link
router.post("/links/:linkId/delete", getLink, function (req, res) {
    req.link.destroy().then(function () {
        res.redirect("/");
    });
});
