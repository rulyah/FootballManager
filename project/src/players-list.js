const json = require('./players.json');

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'submit') {
        let playersCollection = document.getElementsByClassName("player-radio");
        
        let players = Array.prototype.slice.call(playersCollection);
        // console.log(`Players count: ${players.length}`);

        let activePlayers = players.filter(function(value, index, array) {
            return value.checked;
        });

        // console.log(`Active players: ${activePlayers.length}`);

        if(activePlayers.length !== 1) {
            console.error("Choose One");
        } else {
            // let idChoose = +activePlayers[0].value
            // console.log(idChoose)
            let name = activePlayers[0].parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerHTML;
            console.log(`Yours choose is: ${name.replace(/\s+/g, ' ').trim()}`);

            // let pl = json.players.find(element => element.idChoose)
            // console.log(pl)
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

document.getElementById("app").innerHTML = `
    <h1 class="app-title"> We have ${json.players.length} players </h1>
    ${getPlayersTable()}
    <button class="btn-small" type="submit" id="submit">Вперде!</button>
    
`