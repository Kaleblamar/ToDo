// =======================================
//global Variables
// =======================================

const toDo = document.querySelector(`#toDo`);
const addBtn = document.querySelector(`#add`);
const toDoList = document.querySelector(`.toDoList`);
const trashCan = document.querySelector(`#delete`);
const ninja = document.querySelector(`#completed`);
const sideMenu = document.querySelector(`.sideMenu`);
let count = document.querySelector(`.totalCompleted `);
const output = document.querySelector(`#completedTasks`);
const clear = document.querySelector(`.clearCompleted `);
const captionCompleted = document.querySelector(`.captionComplete`);
const captionDelete = document.querySelector(`.captionDelete`);
let toDoItems = [];
let toDoCompleted = [];
const number = document.querySelector(`#number`);
const alertCustom = document.querySelector(`.alert`);

const okay = document.querySelector(`.okay`);

const container = document.querySelector(`.container`);
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
    // alert(`Enter a To Do`);

    alertCustom.classList.add(`showAlert`);
    container.classList.add(`blur`);
    okay.addEventListener(`click`, () => {
      alertCustom.classList.add(`fadeOut`);
      container.classList.remove(`blur`);
      function timeOut() {
        setTimeout(delay, 1000);
      }
      timeOut();
      function delay() {
        alertCustom.classList.remove(`showAlert`);
        alertCustom.classList.remove(`fadeOut`);
      }
    });
  } else {
    const newToDo = document.createElement(`li`);
    newToDo.classList.add(`newToDo`);
    newToDo.innerHTML =
      `<input type="radio" name="listItem" id="listItem" </input>` +
      toDo.value +
      `<button class = "trash"><i class="fa-solid fa-trash-can"></i></button>`;

    toDoList.appendChild(newToDo);
    toDo.value = ``;
    // number.innerText = toDoList.childElementCount - 2;
    for (i = 0; i <= toDoList.childElementCount - 2; i++) {
      number.innerText = i;
    }
    const inputRadio = newToDo.querySelector(`#listItem`);
    const remove = newToDo.querySelector(`.trash`);

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
        number.innerText = number.innerText - 1;
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

    remove.addEventListener(`click`, () => {
      newToDo.classList.add(`remove`);
      function deleteFunc() {
        setTimeout(rm, 1000);
      }
      deleteFunc();
      function rm() {
        toDoList.removeChild(newToDo);
        number.innerText = number.innerText - 1;
      }
    });

    trashCan.addEventListener(`click`, () => {
      newToDo.classList.add(`remove`);

      function deleteFunc2() {
        setTimeout(clear, 1000);
      }
      deleteFunc2();
      function clear() {
        number.innerText = `0`;
        toDoList.removeChild(newToDo);
      }
    });

    inputRadio.addEventListener(`mouseover`, () => {
      captionCompleted.classList.add(`test`);
    });
    inputRadio.addEventListener(`mouseout`, () => {
      captionCompleted.classList.remove(`test`);
    });

    remove.addEventListener(`mouseover`, () => {
      captionDelete.classList.add(`test`);
    });
    remove.addEventListener(`mouseout`, () => {
      captionDelete.classList.remove(`test`);
    });
  }
}
function addToDoKey(e) {
  if (e.key === `Enter`) {
    if (toDo.value === ``) {
      // alert(`Enter a To Do`);

      alertCustom.classList.add(`showAlert`);
      container.classList.add(`blur`);
      okay.addEventListener(`click`, () => {
        alertCustom.classList.add(`fadeOut`);
        container.classList.remove(`blur`);
        function timeOut() {
          setTimeout(delay, 1000);
        }
        timeOut();
        function delay() {
          alertCustom.classList.remove(`showAlert`);
          alertCustom.classList.remove(`fadeOut`);
        }
      });
    } else {
      const newToDo = document.createElement(`li`);

      newToDo.classList.add(`newToDo`);
      newToDo.innerText = toDo.value;

      newToDo.innerHTML =
        `<input type="radio" name="listItem" id="listItem" </input>` +
        toDo.value +
        `<button  class = "trash"><i class="fa-solid fa-trash-can"></i></button>`;

      // const completed = document.getElementById(`listItem`);

      toDoList.appendChild(newToDo);
      toDo.value = ``;

      for (i = 0; i <= toDoList.childElementCount - 2; i++) {
        number.innerText = i;
      }

      const inputRadio = newToDo.querySelector(`#listItem`);

      const remove = newToDo.querySelector(`.trash`);

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
            number.innerText = number.innerText - 1;
            toDoList.removeChild(newToDo);
          }
        }
      });

      console.dir(newToDo);

      remove.addEventListener(`click`, () => {
        newToDo.classList.add(`remove`);

        function deleteFunc() {
          setTimeout(rm, 1000);
        }
        deleteFunc();
        function rm() {
          number.innerText = number.innerText - 1;
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
          number.innerText = `0`;
          toDoList.removeChild(newToDo);
        }
      });

      inputRadio.addEventListener(`mouseover`, () => {
        captionCompleted.classList.add(`test`);
      });
      inputRadio.addEventListener(`mouseout`, () => {
        captionCompleted.classList.remove(`test`);
      });

      remove.addEventListener(`mouseover`, () => {
        captionDelete.classList.add(`test`);
      });
      remove.addEventListener(`mouseout`, () => {
        captionDelete.classList.remove(`test`);
      });
    }
  }
}

function showMenu() {
  sideMenu.classList.toggle(`side`);
}
