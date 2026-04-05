async function fetchData() {
   try {
     const charName = document.getElementById("char-name").value.toLowerCase()
    const response = await fetch(`https://dragonball-api.com/api/characters?name=${charName}`)

    
    // throw error and print message if resource not found still unsolved to satisfaction 
    if (!response.ok || response.length === 0) {
        document.getElementById('person').innerText =  `we could not find the resource`
        throw new Error("we could not find the resource"); 
    }
    const data = await response.json()
    console.log(data);
    console.log(data[0].name);
    document.getElementById('person').style.display = `block`
    document.getElementById("db-character").src = data[0].image
    document.getElementById('name').innerText = data[0].name
    document.getElementById('gender').innerText = data[0].gender
    document.getElementById('race').innerText = data[0].race
    document.getElementById('ki').innerText = data[0].ki
    document.getElementById('maxki').innerText = data[0].maxKi
}
 catch (error) {
    console.error(error);
   }
}