const Task = require("../models/task")

const taskIndex = (req, res) => {
    Task.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            const msg = req.session.mgs
            const errors = req.session.errors ? req.session.errors : {}
            delete req.session.mgs;
            delete req.session.errors;
            res.render('index', { title: 'Task management system', activeB: true, tasks: result, msg, errors })
        })
        .catch((err) => {
            console.log(err);
        })
}


const taskSave = (req, res) => {
    const task = new Task(req.body)
    task.save()
        .then((result) => {
            let sessionDatas = req.session;
            sessionDatas.mgs = 'You have added task successfully.';
            res.redirect('/');

        })
        .catch((err) => {
            if (err.name === "ValidationError") {
                let errors = {};

                Object.keys(err.errors).forEach((key) => {
                    errors[key] = err.errors[key].message;
                });
                let sessionDatas = req.session;
                sessionDatas.errors = errors;
                return res.redirect('/');
            }
            return res.redirect('/');
        })

}

const taskUpdate = (req, res) => {
    if (req.body.content.trim().length > 0) {
        
    
    Task.findByIdAndUpdate(req.body.task_id, { content: req.body.content })
        .then((result) => {
            let sessionDatas = req.session;
            sessionDatas.mgs = 'Task updated successfully.';
            return res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
    } else {
        let sessionDatas = req.session;
        sessionDatas.mgs = 'New value of task cant be empty';
        return res.redirect('/');
    }
}

const taskDelete = (req, res) => {
    const id = req.query.id
    console.log(id);
    console.log(1);
    Task.findByIdAndDelete(id)
        .then((result) => {
            let sessionDatas = req.session;
            sessionDatas.mgs = 'You successfully deleted task.';
            return res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
}

const taskDeleteAll = (req, res) => {
    Task.deleteMany({})
        .then((result) => {
            let sessionDatas = req.session;
            sessionDatas.mgs = 'All tasks deleted.';
            return res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
}


module.exports = {
    taskIndex,
    taskSave,
    taskUpdate,
    taskDelete,
    taskDeleteAll
}