liClickHandler = (list) => {
    let li = document.getElementById(list)
    if(li.style.textDecoration === "line-through red 3px"){
        li.setAttribute('style','text-decoration:none')
    }else{
        li.setAttribute('style','text-decoration:line-through red 3px')
    }

}

inputHandler = (indexAwal) => { // add parameter (indeks i array)
    let liSelector = document.querySelectorAll('li')
    let inputTodo = document.getElementById(`input-todo-${indexAwal}`).value

    if (inputTodo.length === 0) {
        return alert(`Column can't be empty`)
    }
    let createLi = document.createElement(`li`)
    let createButtonUpdate = document.createElement(`button`)
    let createButtonDelete = document.createElement(`button`)
    let br = document.createElement(`br`)
    let ul = document.getElementById(`ul-${indexAwal}`)
    let lengthLiSelector = '' + liSelector.length

    createLi.appendChild(document.createTextNode(`${inputTodo}`))
    createButtonUpdate.appendChild(document.createTextNode('Update'))
    createButtonDelete.appendChild(document.createTextNode('Delete'))

    createLi.setAttribute(`id`, `list-${indexAwal}-${lengthLiSelector}`)
    createLi.setAttribute(`onClick`, `liClickHandler('list-${indexAwal}-${lengthLiSelector}')`)
    createButtonUpdate.setAttribute(`id`, `button-update-${indexAwal}-${lengthLiSelector}`)
    createButtonUpdate.setAttribute(`class`, `input-padding-UpdateDelete`)
    createButtonUpdate.setAttribute(`onclick`, `updateHandler('update-todo-${indexAwal}','list-${indexAwal}-${lengthLiSelector}')`)
    createButtonDelete.setAttribute(`id`, `button-delete-${indexAwal}-${lengthLiSelector}`)
    createButtonDelete.setAttribute(`onclick`, `deleteHandler('list-${indexAwal}-${lengthLiSelector}','button-update-${indexAwal}-${lengthLiSelector}','button-delete-${indexAwal}-${lengthLiSelector}')`)
    createButtonDelete.setAttribute(`class`, `input-padding-UpdateDelete`)

    // add css (to add whitespace)
    createButtonUpdate.setAttribute(`style`, `margin-right:5px`)

    ul.appendChild(createLi)
    createLi.appendChild(br)
    ul.appendChild(createButtonUpdate)
    ul.appendChild(createButtonDelete)
    // console.log(liSelector)
    document.getElementById(`input-todo-${indexAwal}`).value = ''
}

updateHandler = (update, list) => {
    let updateTodo = document.getElementById(`${update}`).value
    if (updateTodo.length == 0) {
        return alert(`Column can't be empty`)
    } else {
        // console.log(document.getElementById(`${update}`).value)
        document.getElementById(list).innerHTML = updateTodo
        // setelah selesai di reset kembali
        document.getElementById(`${update}`).value = ''
    }
}

deleteHandler = (list, buttonUpdate, buttonDeleteTodo) => {
    let deletLi = {
        list: document.getElementById(list),
        buttonUpdate: document.getElementById(buttonUpdate),
        buttonDeleteTodo: document.getElementById(buttonDeleteTodo)
    }
    const arrKeyDeleteLi = Object.keys(deletLi)
    // console.log(arrKeyDeleteLi)
    arrKeyDeleteLi.forEach((element) => {
        deletLi[element].remove()
    });
}

newScheduleHandler = () => {
    let newSchedule = document.getElementById('input-newSchedule').value
    if (newSchedule.length === 0) {
        return alert(`Column can't be empty`)
    }else if(newSchedule.length <= 1){
        return alert('Input min 2 character')
    }

    const obj = {
        // deklarasi
        container: document.getElementById('container'),
        newBox: document.createElement('div'),
        span: document.createElement('span'),
        box: document.getElementsByClassName('box'),
        ul: document.createElement('ul'),
        inputAdd: document.createElement('input'),
        br: document.createElement('br'),
        inputUpdate: document.createElement('input'),
        button: document.createElement('button'),
        divNewSchedule: document.createElement('div'),
        spanNewSchedule: document.createElement('span'),
        inputNewSchedule: document.createElement('input'),
        buttonNewSchedule: document.createElement('button'),
        br2: document.createElement('br'),
        // attribute
        attributeInputAdd: function () {
            let attribute = ['type', 'text', 'placeholder', 'Add New Todo', 'class', 'input-padding', 'id', `input-todo-${this.box.length}`, 'style', 'margin-right:5px']
            attribute.map((items, i) => {
                if (i % 2 === 1) {
                    this.inputAdd.setAttribute(attribute[i - 1], items)
                }
            })
            return this.inputAdd
        },
        attributeUpdateAdd: function () {
            let attribute = ['type', 'text', 'placeholder', 'Update Todo', 'class', 'input-padding', 'id', `update-todo-${this.box.length}`]
            attribute.map((items, i) => {
                if (i % 2 === 1) {
                    this.inputUpdate.setAttribute(attribute[i - 1], items)
                }
            })
            return this.inputUpdate
        },
        attributeButton: function () {
            let attribute = ['class', 'input-padding', 'id', `button-addTodo-${this.box.length}`, 'onClick', `inputHandler(${this.box.length})`]
            attribute.map((items, i) => {
                if (i % 2 === 1) {
                    this.button.setAttribute(attribute[i - 1], items)
                }
            })
            this.button.innerHTML = 'Add New Todo'
            return this.button
        },
        attributeInputNewSchedule: function () {
            let attribute = ['placeholder', 'Add New Schedule', 'class', 'input-padding', 'id', 'input-newSchedule', 'style', 'margin-right:5px']
            attribute.map((items, i) => {
                if (i % 2 === 1) {
                    this.inputNewSchedule.setAttribute(attribute[i - 1], items)
                }
            })
            this.inputNewSchedule.innerHTML = 'Add New Schedule'
            return this.inputNewSchedule
        },
        attributeButtonNewSchedule: function () {
            let attribute = ['class', 'input-padding', 'id', 'button-addTodo', 'onclick', 'newScheduleHandler()']
            attribute.map((items, i) => {
                if (i % 2 === 1) {
                    this.buttonNewSchedule.setAttribute(attribute[i - 1], items)
                }
            })
            obj.buttonNewSchedule.innerHTML = 'Add New Schedule'
            return this.buttonNewSchedule
        }
    }

    let fontI = document.createElement('i') // ==============================================
    fontI.setAttribute('class', 'fas fa-times-circle')
    fontI.setAttribute('onclick', `deleteBoxHandler('box-${obj.box.length}')`)
    obj.span.innerHTML = newSchedule
    obj.newBox.setAttribute('class', `box box-${obj.box.length}`)
    obj.ul.setAttribute('id', `ul-${obj.box.length}`)
    let arr = [fontI, obj['br'], obj.span, obj.br, obj.ul, obj.attributeInputAdd(), obj.attributeButton(), obj['br'], obj.attributeUpdateAdd()]
    arr.forEach((item) => {
        obj.newBox.appendChild(item)
    })
    container.appendChild(obj.newBox)
    document.getElementById('input-newSchedule').value = ''
    obj.divNewSchedule.setAttribute('class', 'box-newSchedule')
    obj.spanNewSchedule.innerHTML = 'Add New Schedule'
    let arr2 = [obj.spanNewSchedule, obj.br2, obj.attributeInputNewSchedule(), obj.attributeButtonNewSchedule()]
    arr2.forEach((item) => { obj.divNewSchedule.appendChild(item) })
    container.appendChild(obj.divNewSchedule)
    // Delete addNewSchedule agar terlihat geser ke kiri
    let divSchedule = document.getElementsByClassName('box-newSchedule')
    divSchedule[0].remove()
}

let deleteBoxHandler = (box) => {
    let classBox = document.getElementsByClassName(box)
    console.log(classBox)
    classBox[0].remove()
}