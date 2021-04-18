const fs = require('fs')

export default function handler(req, res) {
    var personal_data;
    
    // read personal_data.json file
    fs.readFile(process.cwd() + '/data/personal_data.json', 'utf8', function(err, data) {
        if(err) throw err;
        personal_data = data;
    });
    
    res.status(200).json({
        data: personal_data
    })
}