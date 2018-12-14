var fs = require('fs');

fs.readFile('./JSONExample.json', 'utf-8', function (err, data){
    if(err) console.log(err);
    // we log out the readFile results    
    console.log(data);
    // we then pass the data to our method json.parse
    let jsonContent= JSON.parse(data);
    //Edited email address as below
    jsonContent.email="new@email.com";
    //Converted Json to String
    let jsonString = JSON.stringify(jsonContent);
    console.log(jsonString);
    //Writing  edited JSON to new file
    fs.writeFile('JSONEdited.json', jsonString, function(err){
        if (err) console.log(err);
        console.log("successfully Edited and Written Json to file");
    })
});   