'use strict'
var item_id
var a = 0
var popup = `
	<div class="popup">
		<div popup_content>
			<img src="img/eblan.jpeg"></img>
		</div>
		<div class="footer_popup">
			<button onclick="exit()">ОК</button>
			<button onclick="exit()">Закрыть</button>
		</div>
	</div>
	`

	var create_content_item =`
	<div class="content_item">
		<div class="header_item_edit">
			<input class="input_item" type="text" placeholder="Введите название" value=""/>
		</div>
		<div class="body_item">
			<input name="desc_todo" type="text" class="input_item" placeholder="Что-то" value=""/>
			<textarea cols="30" rows="4" class="input_item" name="desc_todo_more" id="" placeholder="Описание задания" value=""></textarea>
		</div>
		<div class="footer_item">
			<button class="edit">Сохранить</button>
			<button class="delete">Отмена</button>
		</div>	
	</div>
	`

	var content_item = `
	<div class="content_item">
		<div class="header_item_create">
			<h3 class="h3_item">Название задания</h3>
		</div>
		<div class="body_item">
			<input type="text" class="input_item" placeholder="Что-то" value="" readonly="readonly"/>
			<textarea cols="30" rows="4" class="input_item" name="Введите описание" id="" placeholder="Описание задания" value="" readonly="readonly"></textarea>
		</div>
		<div class="footer_item">
			<button class="edit">Р</button>
			<button class="delete">У</button>
		</div>	
	</div>
	`

function create_item(id){
	a++
	item_id = 'item'+a
	var new_item = document.createElement('div')
	new_item.setAttribute('id', item_id)
	new_item.setAttribute('class', 'item')
	new_item.innerHTML = create_content_item
	document.getElementById("shop").appendChild(new_item)

	var input_item = document.getElementById(item_id)
	input_item.getElementsByTagName("input")[0].setAttribute('name', 'name_todo'+a)
	input_item.getElementsByTagName("input")[1].setAttribute('name', 'desc_todo'+a)

	var but_create = document.getElementById(item_id).getElementsByTagName('button')[0]
	but_create.setAttribute('onclick', 'item(id)')
	but_create.setAttribute('id', a)

	var but_canc = document.getElementById(item_id).getElementsByTagName('button')[1]
	but_canc.setAttribute('onclick', 'del(id)')
	but_canc.setAttribute('id', a)
	// var div_class = document.getElementById(item_id).getElementsByTagName('div')[0]
	// div_class.setAttribute('class', 'footer_item')
}

function item(id){

	//Получение данных
	var edit_data_name = document.getElementsByName("name_todo"+id)[0]
	var data_name = edit_data_name.value
	var edit_data_desc = document.getElementsByName("desc_todo"+id)[0]
	var data_desc = edit_data_desc.value
	console.log(data_name, data_desc)

	if(data_name!="" && data_desc!=""){
		item_id = 'item'+id
		var test = document.getElementById('item'+id)
		test.innerHTML = content_item

		var name = document.getElementById(item_id).getElementsByTagName('h3')[0]
		name.innerHTML = data_name
		var desc = document.getElementById(item_id).getElementsByTagName('input')[0]
		desc.value = data_desc
		var create = document.getElementById(item_id).getElementsByTagName('button')[0]
		create.setAttribute('onclick', 'edit_item(id)')
		create.setAttribute('id', id)
		var del = document.getElementById(item_id).getElementsByTagName('button')[1]
		del.setAttribute('onclick', 'del(id)')
		del.setAttribute('id', id)
	}
	else{
		alert("Введите данные!")
	}

}

function edit_item(id){
	item_id = 'item'+id
	var edit_item = document.getElementById(item_id)
	edit_item.setAttribute('id', item_id)
	edit_item.setAttribute('class', 'item')
	edit_item.innerHTML = create_content_item

	var input_item = document.getElementById(item_id)
	input_item.getElementsByTagName("input")[0].setAttribute('name', 'name_todo'+id)
	input_item.getElementsByTagName("input")[1].setAttribute('name', 'desc_todo'+id)

	var but_edit_set = document.getElementById(item_id).getElementsByTagName('button')[0]
	but_edit_set.setAttribute('onclick', 'item(id)')
	but_edit_set.setAttribute('id', id)

	var but_canc = document.getElementById(item_id).getElementsByTagName('button')[1]
	but_canc.setAttribute('onclick', 'del(id)')
	but_canc.setAttribute('id', id)
}


function del(id){
	//document.getElementById('item'+id).remove()
	var test = document.getElementById('item'+id)
	$(test).hide('show', function(){
		$(this).remove()
	})
}

function del_all(){
	var popup_block = document.createElement('div') 
	popup_block.setAttribute('class', 'cont_popup')
	popup_block.innerHTML = popup
	document.getElementsByClassName('popup_item')[0].appendChild(popup_block)
}

function exit(){
	document.getElementsByClassName('cont_popup')[0].remove()
}