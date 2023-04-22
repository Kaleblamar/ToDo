// =======================================
//global Variables
// =======================================

const toDo = document.querySelector(`#toDo`);
const addBtn = document.querySelector(`#add`);
const toDoList = document.querySelector(".toDoList");
const trashCan = document.querySelector("#delete");
const ninja = document.querySelector(`#completed`);
const sideMenu = document.querySelector(`.sideMenu`);
let count = document.querySelector(`.totalCompleted `);
const output = document.querySelector(`#completedTasks`);
const clear = document.querySelector(`.clearCompleted `);

// ======================================
// Event Listeners
// =====================================

addBtn.addEventListener(`click`, addToDo);
toDo.addEventListener(`keypress`, addToDoKey);
ninja.addEventListener(`click`, showMenu);

// ====================================
// Functions
// ===================================

function addToDo(event) {
  event.preventDefault();

  if (toDo.value === ``) {
    alert(`Enter a To Do`);
  } else {
    const newToDo = document.createElement(`li`);
    newToDo.classList.add(`newToDo`);
    newToDo.innerHTML =
      `<input type="radio" name="listItem" id="listItem" </input>` +
      toDo.value +
      `<button class = "trash"><i class="fa-solid fa-trash-can"></i></button>`;
    toDoList.appendChild(newToDo);
    toDo.value = ``;

    const inputRadio = newToDo.querySelector(`#listItem`);
    inputRadio.addEventListener(`input`, (event) => {
      console.log(event.target.checked);
      if (event.target.checked === true) {
        const completed = document.createElement(`li`);
        completed.innerText = newToDo.innerText;
        output.appendChild(completed);
        newToDo.classList.add(`slideUp`);

        for (i = 0; i <= output.childElementCount; i++) {
          count.innerText = i;
        }

        clear.addEventListener(`click`, () => {
          output.innerHTML = ``;
          count.innerText = ``;
        });

        function delay() {
          setTimeout(completeSlide, 1000);
        }

        delay();
        function completeSlide() {
          toDoList.removeChild(newToDo);
        }
      }
    });

    const remove = newToDo.querySelector(`.trash`);
    remove.addEventListener(`click`, () => {
      newToDo.classList.add(`remove`);
      function deleteFunc() {
        setTimeout(rm, 1000);
      }
      deleteFunc();
      function rm() {
        toDoList.removeChild(newToDo);
      }
    });

    trashCan.addEventListener(`click`, () => {
      newToDo.classList.add(`remove`);

      function deleteFunc2() {
        setTimeout(clear, 1000);
      }
      deleteFunc2();
      function clear() {
        toDoList.removeChild(newToDo);
      }
    });
  }
}
function addToDoKey(e) {
  if (e.key === `Enter`) {
    if (toDo.value === ``) {
      alert(`Enter a To Do`);
    } else {
      const newToDo = document.createElement(`li`);

      newToDo.classList.add(`newToDo`);
      newToDo.innerText = toDo.value;

      newToDo.innerHTML =
        `<input type="radio" name="listItem" id="listItem" </input>` +
        toDo.value +
        `<button  class = "trash"><i class="fa-solid fa-trash-can"></i></button>`;
      const completed = document.getElementById(`listItem`);
      toDoList.appendChild(newToDo);
      toDo.value = ``;

      const inputRadio = newToDo.querySelector(`#listItem`);
      inputRadio.addEventListener(`input`, (event) => {
        console.log(event.target.checked);
        if (event.target.checked === true) {
          const completed = document.createElement(`li`);
          completed.innerText = newToDo.innerText;
          output.append(completed);
          newToDo.classList.add(`slideUp`);

          for (i = 0; i <= output.childElementCount; i++) {
            count.innerText = i;
          }

          clear.addEventListener(`click`, () => {
            output.innerHTML = ``;
            count.innerText = ``;
          });

          function delay() {
            setTimeout(completeSlide, 1000);
          }

          delay();
          function completeSlide() {
            toDoList.removeChild(newToDo);
          }
        }
      });

      console.dir(newToDo);
      const remove = newToDo.querySelector(`.trash`);
      remove.addEventListener(`click`, () => {
        newToDo.classList.add(`remove`);

        function deleteFunc() {
          setTimeout(rm, 1000);
        }
        deleteFunc();
        function rm() {
          toDoList.removeChild(newToDo);
        }
      });
      trashCan.addEventListener(`click`, () => {
        newToDo.classList.add(`remove`);

        function deleteFunc2() {
          setTimeout(clear, 1000);
        }
        deleteFunc2();
        function clear() {
          toDoList.removeChild(newToDo);
        }
      });
    }
  }
}

function showMenu() {
  sideMenu.classList.toggle(`side`);
}