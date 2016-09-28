function add(){
	var task = document.getElementById('task').value;
	var todo_array = get_todo();
	todo_array.push(task);
	localStorage.setItem('todo',JSON.stringify(todo_array));
	show();
	return false;
}

function remove(){
	var id = this.getAttribute('id');
	var todo_array = get_todo();
	todo_array.splice(id,1);
	localStorage.setItem('todo',JSON.stringify(todo_array));
	show();
	return false;

}

function get_todo(){
	var todo_array = new Array;
	var todo_string = localStorage.getItem('todo');
	if(todo_string!==null)
	todo_array = JSON.parse(todo_string);
     return todo_array;

}

function show(){
	 var todos=get_todo();
     if(todos.length>0){

     var html='';
     html += '<ul>';
 
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 }
 else
 {
    var html="<p>No Pendings..</p>";
}
 document.getElementById('todos').innerHTML = html;

 var buttons=document.getElementsByClassName('remove');
 for(var i=0;i<buttons.length;i++){

buttons[i].addEventListener('click',remove);

}
}
 document.getElementById('add').addEventListener('click',add);
show();