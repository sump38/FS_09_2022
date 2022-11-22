const tasks = ["buy milk","call mom","third", "fourth", "fifth", "sixth", "seventh"]
const tasksList = document.getElementsByTagName('ul')[0]
for (const task of tasks){
    // task ="hello world"
    const liTask = document.createElement("li")
    liTask.innerHTML = task
    const btn = document.createElement("button")
    btn.innerHTML = "done"
    btn.onclick = function() {
        // liTask.classList.add("done")

        liTask.classList.toggle("done")
        if(liTask.classList.contains("done")){
             this.innerHTML = "restore"
        }else{
             this.innerHTML = "done"
        }
    }
    liTask.appendChild(btn)
    tasksList.appendChild(liTask)
}

