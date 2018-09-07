const data = {
    "squadName": "QA Consulting",
    "secretBase": "Anchorage",
    "active": true,
    "members": [
        {
            "name": "Matt",
            "age": 29,
            "secretIdentity": "The flash-er",
            "skills": [
                "Java",
                "Testing",
                "JavaScript"
            ]
        },
        {
            "name": "Dev",
            "age": 32,
            "secretIdentity": "Dev Data",
            "skills": [
                "DevOps",
                "Linux",
                "Consultancy Skills"
            ]
        },
        {
            "name": "Shafeeq",
            "age": 32,
            "secretIdentity": "T H E S H A F E E Q",
            "skills": [
                "Databases",
                "Java",
                "JavaScript",
                "Chicken Cottage",
            ]
        }
    ]
}

var contract = function (id) {
    document.getElementById(id).children[1].style.visibility = "hidden";
}

var expand = function (id) {
    document.getElementById(id).children[1].style.visibility = "";
}

var hover = function (id) {
    var item = document.getElementById(id);
    item.style.backgroundColor = "yellow";
    item.children[0].text = "*" + item.children[0].text;
}

var unhover = function (id) {
    var item = document.getElementById(id);
    item.style.backgroundColor = "";
    item.children[0].text = item.children[0].text.slice(1);
}

var submitName = function () {
    event.preventDefault();
    search = document.getElementById("name").value;
    resHolder = document.getElementById("result");

    if (resHolder.children[0]) document.getElementById("reset").remove();


    var resGenerator = document.createElement("span");
    resGenerator.id = "reset";

    // name.textContent = "Name";
    // resHolder.appendChild(name);
    document.getElementById("result").re
    data.members[0].skills[0]

    for (var person in data) {
        for (var key in data[person]) {
            //name, age, secretIdentity
            if (data[person][key].name == search) {
                var name = document.createElement("p");
                var nameText = document.createTextNode("Name: " + data[person][key].name);
                name.appendChild(nameText);
                var age = document.createElement("p");
                var ageText = document.createTextNode("Age: " + data[person][key].age);
                age.appendChild(ageText);
                var identity = document.createElement("p");
                var identityText = document.createTextNode("Secret Identity: " + data[person][key].secretIdentity);
                identity.appendChild(identityText);
                resGenerator.appendChild(name);
                resGenerator.appendChild(age);
                resGenerator.appendChild(identity);
                //skills
                for (var skill in data[person][key].skills) {
                    // console.log(skill);
                    var skillHolder = document.createElement("p");
                    var skillText = document.createTextNode("Skill : " + data[person][key].skills[skill]);
                    skillHolder.id = "skill";
                    skillHolder.appendChild(skillText);
                    resGenerator.appendChild(skillHolder);

                }
            }
        }


    }

    resHolder.appendChild(resGenerator);

}

var submitSkill = function () {
    event.preventDefault();
    search = document.getElementById("skill").value;
    resHolder = document.getElementById("result");

    console.log(search);

    if (resHolder.children[0]) document.getElementById("reset").remove();


    var resGenerator = document.createElement("span");
    resGenerator.id = "reset";

    for (var person in data) {
        //name, age, secretIdentity
        for (var key in data[person]) {
            //skills
            for (var skill in data[person][key].skills) {
                if (data[person][key].skills[skill] == search) {
                    console.log(data[person][key].skills[skill] == search)
                    var name = document.createElement("p");
                    var nameText = document.createTextNode("Name: " + data[person][key].name);
                    name.appendChild(nameText);
                    resGenerator.appendChild(name);
                }
            }
        }
    }
    resHolder.appendChild(resGenerator);
}

var validation = function () {
    event.preventDefault();
    var name = document.forms["newTrainer"]["name"].value;
    var dob = document.forms["newTrainer"]["dob"].value; 
    var address = document.forms["newTrainer"]["address"].value; 
    var postcode = document.forms["newTrainer"]["postcode"].value; 
    var email = document.forms["newTrainer"]["email"].value;

    var nameRegEx = /([A-Z][a-z]+)\s([A-Z][a-z]+)/.test(name);
    var dobRegEx = /^\d{2}\/\d{2}\/\d{4}$/.test(dob);
    var addressRegEx = /[^:!"£$%^&*?|:]+/.test(address);
    var postcodeRegEx = /[^:!"£$%^&*?|:]{1,10}$/.test(postcode);
    var emailRegEx = /^\w+@[a]+?\.[a-zA-Z]{2,6}$/.test(email);
    
    if (!nameRegEx) {
        alert("Check name spelling. Format is [N]ame [S]urname");
    } else if (!dobRegEx ) {
        alert("Check date of birth. Format is DD/MM/YYYY");
    } else if (!addressRegEx) {
        alert("Check address. Format is (number) Street ?name");
    } else if (!postcodeRegEx) {
        alert("Check postcode. Format is Numbers and Letters including space< 10")
    } else if (!emailRegEx) {
        alert("Check your email. Format is (whatever)@a.{2,6}letters")
    } else {
        localStorage.setItem("name",name);
        localStorage.setItem("dob",dob);
        localStorage.setItem("address",address);
        localStorage.setItem("postcode",postcode);
        localStorage.setItem("email",email);

        document.open("formatdata.html");
    }
    
}