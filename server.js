var express= require('express');
var multer=require("multer");
var upload = multer({ dest: './uploads/' });

var app=express();
var size=0;
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.get('/',function(req,res){
    res.render('app.html');
});
app.post('/',upload.single('upload'),function(req,res,next){
    size=req.file.size;
    res.redirect('/FileSize');
    next();
});
app.get('/FileSize',function(req,res){
    res.json({size:size});
})

app.listen(8080);