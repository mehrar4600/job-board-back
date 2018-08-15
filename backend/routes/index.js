
module.exports = function(app){

app.use('/student', require('./student'));
app.use('/employer', require('./employer'));

app.use(require('../middleware/validate-session'));
app.use ('/job', require('./job-routes'));
app.use('/smedia', require('./smedia'));
}