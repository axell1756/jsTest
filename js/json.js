for (var i in data.members) {
        for (person in data.members) {
            if (data.members[person].name == search) {
                document.getElementById("result").children[0].outerText = name;
                document.getElementById("result").children[1].text = age;
                document.getElementById("result").children[2].text = secretIdentity;
                document.getElementById("result").children[3].text = data.members[person].skills[0]
                document.getElementById("result").children[4].text = data.members[person].skills[1]
                document.getElementById("result").children[5].text = data.members[person].skills[2]
            }
        }
        break;

    }