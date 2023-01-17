function cardCreator(data){
    var tag = ""
    var officeGitSchool = ""
    if(data.officeNumber !== undefined){tag = "Manager"} else if(data.Github !== undefined){tag = "Engineer"} else if(data.school !== undefined){tag = "Intern"}
    if(data.officeNumber !== undefined){officeGitSchool = "Office Number " + data.officeNumber} else if(data.Github !== undefined){officeGitSchool = "GitHub: " + data.Github} else if(data.school !== undefined){officeGitSchool = "School: " + data.school}
    return `<div class = card > 
        <h2 class = head > ${tag} </h2>
        <ul>
            <li class = name> ${data.name}</li>
            <li class = info> EmployeeID: ${data.employeeID} </li>
            <li class = info> Email: ${data.email} </li>
            <li class = info> ${officeGitSchool} </li>
        </ul>
    </div>`
}
function generateIndex(input){ 
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/reset.css" />
    <link rel="stylesheet" href="./assets/style.css" />
</head>
<body>
    <main>
        ${input}
    </main>
</body>
</html>`};

exports.method = cardCreator;
exports.method2 = generateIndex