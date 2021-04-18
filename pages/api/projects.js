const fs = require('fs')

export default function handler(req, res) {
    var projects_data;
    
    // read projects.json file
    fs.readFile(process.cwd() + '/data/projects.json', 'utf8', function(err, data) {
        if(err) throw err;
        projects_data = JSON.parse(data);
    });
    
    res.status(200).json({
        data: projects_data
    })
}