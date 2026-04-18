const btn = document.getElementById("btn");
const output = document.getElementById("output");
const input = document.getElementById("ask");


btn.addEventListener("click", function(){

    let cityName = input.value;

    if(cityName === ""){
        alert("Write something here...");
    } 

    apiFetch(cityName)
});



const conflig = {
    Api_Key : "cd851230bea235529f7744f8392af909",
}
    
    

 async function apiFetch(cityName){
    try{
        output.innerText = "Loding...... ";

        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`,
        {
            method: "POST",
            header: {
                'content-Type': "application/json"
            },
            body: JSON.stringify(data)
        });

        console.log(data);

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;


        output.innerText = text;


        // output.innerText = `temperature in ${result.name}:${result.main.temp}`;
    
    } catch(error){
        output.innerText = "Here is have some error.."
    }
}
