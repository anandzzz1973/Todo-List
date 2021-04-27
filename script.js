window.onload = () => {

let listTask=$('#ulTask');
let btnAdd=$('#btnAdd');
let btnReset=$('#btnReset');
let btnSort=$('#btnSort');
let btnClear=$('#btnClear');
let inputNewTask=$('#inputNewTask');

function addItem()
{
    let listitem=$('<li>',{
        'class' : 'list-group-item',
        'text' : inputNewTask.val(),
    })
    listTask.append(listitem);
    inputNewTask.val('');

    btnSort.prop('disabled',false);
    btnClear.prop('disabled',false);
}

function toggelInputButton(ev)
{
    if(!ev)
    {
        btnReset.prop('disabled',false);
        btnAdd.prop('disabled',false);
    }
    else
    {
        btnReset.prop('disabled',true);
        btnAdd.prop('disabled',true);
    }
}

function clear_done()
{
    $('#ulTask .done').remove();

    if($('#ulTask')[0].children.length<1)
    {
        toggelInputButton(true);

        btnSort.prop('disabled',true);
        btnClear.prop('disabled',true);
    }
}

function sort_item()
{
    // console.log($('#ulTask. done'));
    $('#ulTask .done').appendTo(listTask);
}

inputNewTask.keypress((e)=>{
    
    if(e.which == 13)
    {
        addItem();
    }
});

btnAdd.click(()=> {
    addItem();
});

listTask.click((event)=>{
    $(event.target).toggleClass('done');
});

btnReset.click(()=>{
    inputNewTask.val('');

    toggelInputButton(true);
});

btnClear.click(()=>{
    
    clear_done();
});

btnSort.click(()=>{
    sort_item();
});

inputNewTask.on('input',()=>{

    if(inputNewTask.val() == '')
    toggelInputButton(true);
    else
    toggelInputButton(false);
});































};