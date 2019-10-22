const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        var li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function () { makePlayer(person.id) })
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    })
}