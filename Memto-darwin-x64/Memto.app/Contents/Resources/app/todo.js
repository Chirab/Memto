function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    var nmb = document.getElementById('task');

    if (task === "")
        return (1);
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();

        var html = '<ul>';
        for (var i = 0; i < todos.length; i++) {
            html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
        }
        ;
        html += '</ul>';

        document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

const createNewEvent1 = () => {

   var date = new Date;
    date.setDate(date.getDate() + 3);


    var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = date - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                var task = document.getElementById("task");

                document.getElementById("demo1").innerHTML = "";
                let myNotification = new Notification('Memto', {
                    body: 'Rappel'
                })
            }
        },
        1000);
    return (true);
}

function noTimer() {
    if (add() === 1) {
        document.getElementById("ok").innerHTML = ""
    }
    else {
        createNewEvent1();
       return false;
    }
}

const createNewEvent2 = () => {

    var date = new Date;
    date.setDate(date.getDate() + 5);

    var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = date - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                var task = document.getElementById("task");

                document.getElementById("demo2").innerHTML = "";
                let myNotification = new Notification('Memto', {
                    body: 'Rappel'
                })
            }
        },
        1000);
    return (true);
}

function noTimer1() {
    if (add() === 1) {
        document.getElementById("ok").innerHTML = ""
    }
    else {
        createNewEvent2();
        return false;
    }
}

const createNewEvent3 = () => {

    var date = new Date;
    date.setDate(date.getDate() + 7);

    var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = date - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("demo3").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                var task = document.getElementById("task");

                document.getElementById("demo3").innerHTML = "";
                let myNotification = new Notification('Memto', {
                    body: 'Rappel'
                })
            }
        },
        1000);
    return (true);
}

function noTimer2() {
    if (add() === 1) {
        document.getElementById("ok").innerHTML = ""
    }
    else {
        createNewEvent3();
        return false;
    }
}

const createNewEvent0 = () => {

    var date = new Date;
    date.setDate(date.getDate() + 1);


    var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = date - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                var task = document.getElementById("task");

                document.getElementById("demo0").innerHTML = "";
                let myNotification = new Notification('Memto', {
                    body: 'Rappel'
                })
            }
        },
        1000);
    return (true);
}

function noTimer0() {
    if (add() === 1) {
        document.getElementById("ok").innerHTML = ""
    }
    else {
        createNewEvent0();
        return false;
    }
}



let date = new Date;
date.setDate(date.getDate());

let date1 = new Date;
date1.setDate(date.getDate() + 3);

if (add() === false) {
    let doing = document.getElementById("task").value;
    document.getElementById("ok1").innerHTML = doing;
}

let myCalendar = createCalendar({
    options: {
        class: 'my-class',

        // You can pass an ID. If you don't, one will be generated for you
        id: 'task'
    },
    data: {
        // Event title
        title: 'ok',

        // Event start date
        start: new Date(),

        duration: 120,

        // You can also choose to set an end time
        // If an end time is set, this will take precedence over duration
        end: date1,

        // Event Address
        address: '',

        // Event Description
        description: 'Rappel Application Memto'
    }
});

document.querySelector('.add1').appendChild(myCalendar);