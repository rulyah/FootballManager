const json = require('./players.json');

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'submit') {
        let playersCollection = document.getElementsByClassName("player-radio");
        
        let players = Array.prototype.slice.call(playersCollection);

        let activePlayers = players.filter(function(value, index, array) {
            return value.checked;
        });

        if(activePlayers.length !== 1) {
            console.error("Choose One");

        } else {
            let name = activePlayers[0].parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerHTML;
            console.log(`Yours choose is: ${name.replace(/\s+/g, ' ').trim()}`);
            
            let idChoose = +activePlayers[0].value
            console.log(`id chosen player: ${idChoose}`)
    
            let skillChoosePlayer = json.players[`${idChoose-1}`].skillScore
            console.log(`Skill score chosen player: ${skillChoosePlayer}`)
        }
    }
 });


function getPlayersTable() {
    let html = `
        <table border="1">
            <tbody>
    `;

    json.players.forEach(player => {
        html += `
            <tr>
                <div class="player">
                    <td>
                        <img class="photo" src="${player.photo}">
                    </td>
                       <td valign="top">
                          <table border="1" width="100%" height="100%">
                            <tbody>
                                <tr>
                                    <td>
                                    <input class="player-radio" type="checkbox" value="${player.id}">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        ${player.firstName} ${player.lastName}
                                    </td>
                                 </tr>
                                <tr>
                                    <td>
                                        Skill: ${player.skillScore}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </div>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    return html;
}

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'create') {
        event.preventDefault()
        let nameField = document.getElementById("name").value;
        let surnameField = document.getElementById("surname").value;
        let skillField = document.getElementById("skill").value;
        let url = document.getElementById("url").value;
        let res = `First name: ` + nameField +` `+ `Last name: `+surnameField + ' ' + `Skill:` +skillField;
        
        console.log(res);
    }
})

document.getElementById("form").innerHTML = `
    <h1> Create your player <br> or select from the list </h1>

        <form action="#" method="GET">
        Имя: <input type="text" id="name" value=""/>
        <br>
        Фамилия: <input type="text" id="surname" value=""/>
        <br>
        Навык: <input type="number" id="skill" value=""/>
        <br>
        Фото: <input type="url" id="url" value=""/>
        <br>

        Пгнали? <button id="create" name="GO">Create!</button>
        <hr>
        </form>
`;
document.getElementById("app").innerHTML = `
    <h2> We have ${json.players.length} players </h2>
    ${getPlayersTable()}
    <button class="btn-small" type="submit" id="submit">Вперде!</button>
`;