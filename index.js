var idCount = 1;
const data = [];

document.addEventListener("DOMContentLoaded",()=>{
    const formulario = document.getElementById("formulario");

    const taskInput = document.getElementById("task"); 
    const taskDescriptionInput = document.getElementById("task-description");
    const listaDatos = document.getElementById("hero");

    formulario.addEventListener("submit",(e)=>{
        e.preventDefault();
        const task = taskInput.value.trim();
        const description = taskDescriptionInput.value.trim();

        const newTask = {
            id: idCount++,
            task:task,
            description:description,
            status:false,
        };

        data.push(newTask);

        data.map((taskItem)=>{
            const nuevoElemento = taskItem.status?
            `<div class="hero-card hero-card--complete">
                <div class="card_task">
                    <p>${taskItem.task}</p>
                    <span>${taskItem.description}</span>
                </div>
                <div class="card_buttons">
                    <button class="check"><i class="bi bi-check-circle"></i></button>
                    <button ><i class="bi bi-trash"></i></button>
                </div>
            </div>`:
            `<div class="hero-card">
                <div class="card_task">
                    <p>${taskItem.task}</p>
                    <span>${taskItem.description}</span>
                </div>
                <div class="card_buttons">
                    <button class="check"><i class="bi bi-check-lg"></i> </button>
                    <button><i class="bi bi-trash"></i></button>
                </div>
            </div>`;
            listaDatos.innerHTML+=nuevoElemento;

        });
    })

})