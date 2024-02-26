function sandwich(...items: string[]): void{
    console.log("Sandwich order:")
    for(let i =0; i< items.length; i++){
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich ,Maaz Hasan")

sandwich('capcicum','tomato','chicken')
sandwich('chicken','cheese')
sandwich('Chicken fajita','extra cheese','spicy')
