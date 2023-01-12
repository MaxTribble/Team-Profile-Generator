let card = ""
function cardCreator(data){
    return `<div> 
        <h2 class = head > ${data.name} </h2>
        <ul>
            <li> ${data.managerID} </li>
            <li> ${data.email} </li>
            <li> ${data.officeNumber} </li>
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