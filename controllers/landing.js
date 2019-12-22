exports.getLanding = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submitLead = function(req, res, next) {
    console.log("Lead Email: ", req.body.leadEmail);
    res.redirect('/');
}