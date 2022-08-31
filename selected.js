const playerArray = [];

function display (cartplayer){

    const tableBody = document.getElementById("cart-players");
    tableBody.innerHTML = " ";

    for (let i = 0; i < cartplayer.length; i++){
        const name = playerArray[i].playerName;
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;

        tableBody.appendChild(tr);
    }
}

function addToPlayer(player){
    
      const playerName = player.parentNode.parentNode.children[0].innerText;

    const playerObject = {
        playerName: playerName,
    }

    playerArray.push(playerObject);
    

    document.getElementById('total-player').innerText = playerArray.length;
    display(playerArray);

}
 