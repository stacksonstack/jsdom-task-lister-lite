document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  let newTask = document.getElementById("new-task-description")
  let taskList = document.getElementById("tasks")



  form.addEventListener("submit", (e) => {
      e.preventDefault()
      const li = document.createElement("li")
      li.textContent = newTask.value  
      taskList.append(li)
  })
});
