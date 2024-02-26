let myfriends: string[] =['Ali','waqar','Nabeel','moiz','ukashah'];

console.log(`I am inviting ${myfriends.length} number of friends to my dinner which are following\n`)
for(let i =0; i< myfriends.length; i++){
    console.log(`${i + 1}.${myfriends[i]}`)
}