var todoList

$(document).ready(function() {
	
todoList = {
	
	'tasks': {
		'list' : [],
		'show' : function(task) {
			if (task.complete) {
				return '<li class="complete">' + task.name + '</li>';
			} else {
				if(task.urgent) {
					return '<li class="urgent">' + task.name + '</li>'
				} else {
					return '<li>' + task.name + '</li>';
				}
			}
		}
	},
		
	'add': function(name, due) {
		this.tasks.list.push(new Task(name, due));
	 },
        
	 'remove': function() {
        $('li').remove('complete');	 
	 },
	 
	 'display': function() {
		 $('body').append('<h2>My To Do List</h2>');
		 $('body').append('<ul>');
			 for(var i= 0; i < this.tasks.length; i++) {
			   this.tasks.show(this.tasks[i]);
			   }
		 $('body').append('</ul>');
	  },
	  
	  'init': function() {
			this.add('Go shopping', moment(2013-07-30));  
			this.add('Do homework', moment(2013-08-02)); 
			this.add('Project due', moment(2013-08-05)); 
			this.add('Go running', moment(2013-08-10)); 
			this.add('Kristen Wedding', moment(2013-09-02)); 
	   },
	}
	todoList.init();
});

var Task = function(name, due) {
	this.name = name;
	this.due = moment();
	this.urgent = moment.subract('days', 5);
}