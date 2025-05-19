
$(document).ready(function () {
  // Load tasks from localStorage
  if (localStorage.getItem("tasks")) {
    $("#taskList").html(localStorage.getItem("tasks"));
  }

  // Make list sortable
  $("#taskList").sortable({
    update: function () {
      saveTasks();
    }
  });

  // Add new task
  $("#addTask").click(function () {
    const taskText = $("#taskInput").val().trim();
    if (taskText !== "") {
      const newTask = $("<li></li>").text(taskText);
      const delBtn = $("<button>Delete</button>").click(function () {
        $(this).parent().fadeOut(300, function () {
          $(this).remove();
          saveTasks();
        });
      });

      newTask.append(delBtn);

      newTask.click(function () {
        $(this).toggleClass("completed");
        saveTasks();
      });

      $("#taskList").append(newTask.hide().fadeIn(300));
      $("#taskInput").val("");
      saveTasks();
    }
  });

  // Save to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", $("#taskList").html());
  }
});

