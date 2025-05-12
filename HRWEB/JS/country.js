const country_URL="https://curly-space-bassoon-wrx6x9jxgw9qhvv6j-6006.app.github.dev/country";
fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new error("Failed to Fetch Country data");
    return response.json();
}
).then(data=>{
    const tbody=document.querySelector("#countrytable tbody");

    data.array.forEach(country=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${country.country_id}</td>
        <td>${country.country_name}</td>
        <td>${country.region_id}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.msg);
});