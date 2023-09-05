// code your solution here

function superbowlWin(item){
    const winObj = item.find(isSuperbowlWin)
    if(winObj != null){
        return winObj.year
    }
}
const isSuperbowlWin = check => check.result === "W";
console.log(superbowlWin(record))

