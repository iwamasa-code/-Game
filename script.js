const playerData = {
    name: "masato",
    hp: 100
}

const enemyData = {
    name: "スライム",
    hp: 50
}

function insertText(id, text) {
    document.querySelector(id).textContent = text;
}

//enemy
insertText("#enemyName", enemyData["name"]);
insertText("#currentEnemyHp", enemyData["hp"]);
insertText("#maxEnemyHp", enemyData["hp"]);

//player
insertText("#playerName", playerData["name"]);
insertText("#currentplayerHp", playerData["hp"]);
insertText("#maxplayerHp", playerData["hp"]);

document.querySelector("#attack").addEventListener("click", function() {
    let endGame = false;


    enemyData["hp"] -= 10;
    // enemyData["hp"] = enemyData["hp"] - 10;上の書き方でも同じ意味で省略記法である。
    //40                //50          //-10
     //現在のhpからダメージ分を引いて、もう一度再定義する。

     playerData["hp"] -= 10;
    //  playerData["hp"] = playerData["hp"] - 10;

     
     insertText("#currentEnemyHp", enemyData["hp"]);
     insertText("#currentplayerHp", playerData["hp"]);

     if(enemyData["hp"] <= 0) {
         alert("勝ち！！")
        endGame = true;

     }　else if (playerData["hp"] <= 0) {
         alert("負け...")
        endGame = true;
     }

     if(endGame) {
      // ↑　もし、endGameがtureだったら.
         this.classList.add("deactive");
       // ↑　document.querySelector("#attack") 
     } 
});



//.classList.add("~") →　新しくクラス要素を追加する。
//「deactive」 →　activeでは無いという意味。
