const emp_URL="https://curly-space-bassoon-wrx6x9jxgw9qhvv6j-6006.app.github.dev/emp";
fetch(emp_URL).then(response=>{
    if(!response.ok)
        throw new error("Failed to Fetch Employee data");
    return response.json();
}
).then(data=>{
    const tbody=document.querySelector("#Employeetable tbody");

    data.array.forEach(emp=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${emp.employee_id}</td>
        <td>${emp.employee_name}</td>
        <td>${emp.employee_salary}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.msg);
});