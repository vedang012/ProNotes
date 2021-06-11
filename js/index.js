function editNote(noteNumber){
    let title = prompt("Please give a title to your note", document.getElementById(noteNumber+"title").innerHTML);
    let subtitle = prompt("please give a subtitle to your note", document.getElementById(noteNumber+"subtitle").innerHTML);
    let content = prompt("Enter the text you wanted to store in the note", document.getElementById(noteNumber+"content").innerHTML);
    document.getElementById(noteNumber+"title").innerHTML = title;
    document.getElementById(noteNumber+"subtitle").innerHTML = subtitle;
    document.getElementById(noteNumber+"content").innerHTML = content;
    localStorage.setItem(noteNumber, title+"::::"+subtitle+"::::"+content);

    }



function newNote(){
    let rowNumber = document.getElementsByClassName('mainlist').length;
    let noteId = document.getElementsByClassName('card').length ;
    let newNoteId = document.getElementsByClassName('card').length + 1;

    if(noteId % 4 == 0){
        rowNumber = rowNumber + 1;
        document.getElementById('body').innerHTML += "<div class='mainlist' id = '"+rowNumber+"row'>" + "<div class='card' id="+newNoteId+" style='width: 25rem;'><div class='card-body'><h5 class='card-title' id='"+newNoteId+"title'>Note title</h5><h6 class='card-subtitle mb-2 text-muted m' id='"+newNoteId+"subtitle'>Note subtitle</h6><p class='card-text' id='"+newNoteId+"content'>This is your note content. To edit this content click on edit option below.</p><span class='material-icons md-24' onclick='editNote("+newNoteId+")'>mode_edit</span><span class = 'material-icons md-24' onclick='deleteNote("+newNoteId+")'>delete</span></div></div></div>"
        localStorage.setItem(newNoteId, "Note title::::Note subtitle::::This is your note content. To edit this content click on edit option below.");
    } else {
        console.log(rowNumber)
        document.getElementById(rowNumber+"row").innerHTML += "<div class='card' id='"+newNoteId+"'style='width: 25rem;'><div class='card-body'><h5 class='card-title' id='"+newNoteId+"title'>Note title</h5><h6 class='card-subtitle mb-2 text-muted m' id='"+newNoteId+"subtitle'>Note subtitle</h6><p class='card-text' id='"+newNoteId+"content'>This is your note content. To edit this content click on edit option below.</p><span class='material-icons md-24' onclick='editNote("+newNoteId+")'>mode_edit</span><span class='material-icons md-24'onclick='deleteNote("+newNoteId+")'>delete</span></div></div>"
        localStorage.setItem(newNoteId, "Note title::::Note subtitle::::This is your note content. To edit this content click on edit option below.");

    }
}


function deleteNote(noteId){
    let elem = document.getElementById(noteId);
    elem.parentNode.removeChild(elem);
    localStorage.removeItem(noteId);
    location.reload();
}

function copyNote(){
    let note = document.getElementById('1element');
    note.select();
    note.setSelectionRange(0, 99999);
    document.execCommand('copy')
}

function makeResponsive(){
    let screenWidth = screen.availWidth;
    if (screenWidth <= 500){
        let i = 0;
        while(i < document.getElementsByClassName('mainlist').length){
            document.getElementsByClassName('mainlist')[i].style.flexDirection = "column";
        }
    }
}

    


function deleteAllNotes(){
    let confirmation = prompt("Type 'Confirm' without quotes to delete your all notes also note that this action is permanant and after deliting you will not be able to undo this.", "")
    if(confirmation == "Confirm"){
        localStorage.clear();
        location.reload();
    }
}

function getDataFromLocalStorage(){
    let i = 0;
    let rowNumber = document.getElementsByClassName('mainlist').length;
    let newNoteId = document.getElementsByClassName('card').length + 1;
    while(i < localStorage.length){
        let key = localStorage.key(i);
        let keys = localStorage.getItem(localStorage.key(i))
        console.log(keys)
        if(i % 4 == 0){
            rowNumber = rowNumber + 1;
            document.getElementById('body').innerHTML += "<div class='mainlist' id = '"+rowNumber+"row'>" + "<div class='card' id="+localStorage.key(i)+" style='width: 25rem;'><div class='card-body'><h5 class='card-title' id='"+localStorage.key(i)+"title'>"+localStorage.getItem(key).split('::::')[0]+"</h5><h6 class='card-subtitle mb-2 text-muted m' id='"+localStorage.key(i)+"subtitle'>"+localStorage.getItem(key).split('::::')[1]+"</h6><p class='card-text' id='"+localStorage.key(i)+"content'>"+localStorage.getItem(key).split('::::')[2]+"</p><span class='material-icons md-24' onclick='editNote("+localStorage.key(i)+")'>mode_edit</span><span class = 'material-icons md-24' onclick='deleteNote("+localStorage.key(i)+")'>delete</span></div></div></div>"
        } else {
            console.log(rowNumber)
            document.getElementById(rowNumber+"row").innerHTML += "<div class='card' id="+localStorage.key(i)+" style='width: 25rem;'><div class='card-body'><h5 class='card-title' id='"+localStorage.key(i)+"title'>"+localStorage.getItem(key).split('::::')[0]+"</h5><h6 class='card-subtitle mb-2 text-muted m' id='"+localStorage.key(i)+"subtitle'>"+localStorage.getItem(key).split('::::')[1]+"</h6><p class='card-text' id='"+localStorage.key(i)+"content'>"+localStorage.getItem(key).split('::::')[2]+"</p><span class='material-icons md-24' onclick='editNote("+localStorage.key(i)+")'>mode_edit</span><span class = 'material-icons md-24' onclick='deleteNote("+localStorage.key(i)+")'>delete</span></div></div></div>"
        }
        i++;
    }
}



getDataFromLocalStorage();

makeResponsive()
