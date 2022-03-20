
function mform(id) {

    //Array of objects for sections details
    var information = {
        SecRow1: "Dynamic Table", MaxRow1: "20", SecRow2: "Intellij Usage",
        MaxRow2: "10", SecRow3: "CalendarControl", MaxRow3: "30", SecRow4: "Active Form",
        MaxRow4: "20", SecRow5: "Object Database", MaxRow5: "20"
    };
    // table header for columns names

    var markform = document.getElementById(id);
    var table = document.createElement("table");
    markform.appendChild(table);
    var thead = table.appendChild(document.createElement("thead"));
    var trow = thead.appendChild(document.createElement("tr"));
    var hcell = trow.appendChild(document.createElement("th"));
    hcell.appendChild(document.createTextNode("Section"));
    hcell = trow.appendChild(document.createElement("th"));
    hcell.appendChild(document.createTextNode("Max"));
    hcell = trow.appendChild(document.createElement("th"));
    hcell.appendChild(document.createTextNode("Comments"));
    hcell = trow.appendChild(document.createElement("th"));
    hcell.appendChild(document.createTextNode("Mark"));

    // The first row of body for marking form

    var tbody = table.appendChild(document.createElement("tbody"))
    trow = tbody.appendChild(document.createElement("tr"));
    var bcell = trow.appendChild(document.createElement("td"))
    bcell.appendChild(document.createTextNode(information.SecRow1));
    bcell = trow.appendChild(document.createElement("td"));
    bcell.appendChild(document.createTextNode(information.MaxRow1));
    bcell = trow.appendChild(document.createElement("textarea"));
    bcell.setAttribute("id", "textarea1");
    bcell = trow.appendChild(document.createElement("td"));
    var dropdown = bcell.appendChild(document.createElement("select"));
    dropdown.setAttribute('id', 'mark1');
    dropdown.setAttribute('onChange', 'Marks()');


    //maximum marks for this section
    for (var i = 0; i <= information.MaxRow1; i++) {
        var opt = dropdown.appendChild(document.createElement("option"));
        opt.setAttribute("value", i);
        opt.appendChild(document.createTextNode(i));
    }


    // The second row of body for marking form

    //var tbody = table.appendChild(document.createElement("tbody"))
    trow = tbody.appendChild(document.createElement("tr"));
    var bcell = trow.appendChild(document.createElement("td"))
    bcell.appendChild(document.createTextNode(information.SecRow2));
    bcell = trow.appendChild(document.createElement("td"));
    bcell.appendChild(document.createTextNode(information.MaxRow2));
    bcell = trow.appendChild(document.createElement("textarea"));
    bcell.setAttribute("id", "textarea2");
    bcell = trow.appendChild(document.createElement("td"));
    var dropdown = bcell.appendChild(document.createElement("select"));
    dropdown.setAttribute('id', 'mark2');
    dropdown.setAttribute('onChange', 'Marks()');



    //maximum marks for this section
    for (var i = 0; i <= information.MaxRow2; i++) {
        var opt = dropdown.appendChild(document.createElement("option"));
        opt.setAttribute("value", i);
        opt.appendChild(document.createTextNode(i));
    }
    // The third row of body for marking form

    //var tbody = table.appendChild(document.createElement("tbody"))
    trow = tbody.appendChild(document.createElement("tr"));
    var bcell = trow.appendChild(document.createElement("td"))
    bcell.appendChild(document.createTextNode(information.SecRow3));
    bcell = trow.appendChild(document.createElement("td"));
    bcell.appendChild(document.createTextNode(information.MaxRow3));
    bcell = trow.appendChild(document.createElement("textarea"));
    bcell.setAttribute("id", "textarea3");
    bcell = trow.appendChild(document.createElement("td"));
    var dropdown = bcell.appendChild(document.createElement("select"));
    dropdown.setAttribute('id', 'mark3');
    dropdown.setAttribute('onChange', 'Marks()');



    //maximum marks for this section
    for (var i = 0; i <= information.MaxRow3; i++) {
        var opt = dropdown.appendChild(document.createElement("option"));
        opt.setAttribute("value", i);
        opt.appendChild(document.createTextNode(i));
    }
    // The fourth row of body for marking form

    //var tbody = table.appendChild(document.createElement("tbody"))
    trow = tbody.appendChild(document.createElement("tr"));
    var bcell = trow.appendChild(document.createElement("td"))
    bcell.appendChild(document.createTextNode(information.SecRow4));
    bcell = trow.appendChild(document.createElement("td"));
    bcell.appendChild(document.createTextNode(information.MaxRow4));
    bcell = trow.appendChild(document.createElement("textarea"));
    bcell.setAttribute("id", "textarea4");
    bcell = trow.appendChild(document.createElement("td"));
    var dropdown = bcell.appendChild(document.createElement("select"));
    dropdown.setAttribute('id', 'mark4');
    dropdown.setAttribute('onChange', 'Marks()');

    //maximum marks for this section
    for (var i = 0; i <= information.MaxRow4; i++) {
        var opt = dropdown.appendChild(document.createElement("option"));
        opt.setAttribute("value", i);
        opt.appendChild(document.createTextNode(i));

    }
    // The fifth row of body for marking form

    //var tbody = table.appendChild(document.createElement("tbody"))
    trow = tbody.appendChild(document.createElement("tr"));
    var bcell = trow.appendChild(document.createElement("td"))
    bcell.appendChild(document.createTextNode(information.SecRow5));
    bcell = trow.appendChild(document.createElement("td"));
    bcell.appendChild(document.createTextNode(information.MaxRow5));
    bcell = trow.appendChild(document.createElement("textarea"));
    bcell.setAttribute("id", "textarea5");
    bcell = trow.appendChild(document.createElement("td"));
    var dropdown = bcell.appendChild(document.createElement("select"));
    dropdown.setAttribute('id', 'mark5');
    dropdown.setAttribute('onChange', 'Marks()');


    //maximum marks for this section
    for (var i = 0; i <= information.MaxRow5; i++) {
        var opt = dropdown.appendChild(document.createElement("option"));
        opt.setAttribute("value", i);
        opt.appendChild(document.createTextNode(i));
    }

}

function Marks() {
    //display total mark
    var x = document.getElementById('tm');
    x.innerHTML = "";
    var a = ['mark1', 'mark2', 'mark3', 'mark4', 'mark5'];
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        var s = document.getElementById(a[i]);
        var v = s.options[s.selectedIndex].text;
        var int = parseInt(v, 10);
        sum += int;
    }
    x.appendChild(document.createTextNode(sum));
}




function TotalMarks(Id) {
    //display total mark
    var tm = document.getElementById(Id);
    var label = document.createElement("label");
    tm.appendChild(label);
    label.setAttribute('id', 'label');
    label.appendChild(document.createTextNode("Total Marks: "));
    var tx = document.createElement("label");
    label.appendChild(tx);
    tx.setAttribute('id', 'tm');
    tx.setAttribute('class', 'visble');
    tx.appendChild(document.createTextNode('0'))
}



function ClearForm(id) {
    //add a clear button that clears comments and resets marks tp 0
    // css styling to be done
    var cbut = document.getElementById(id);
    var button = document.createElement("button");
    cbut.appendChild(button);
    button.append(document.createTextNode("Clear"));
    button.setAttribute("onclick", "ClearText(); ClearDropDown();ClearTotalMarks()")// complete
}

function ClearText() {
    //this clears the comments in the marking form
    var texta = ['textarea1', 'textarea2', 'textarea3', 'textarea4', 'textarea5'];
    for (var i = 0; i < texta.length; i++) {
        var a = document.getElementById(texta[i]);
        a.value = '';
    }
}

function ClearDropDown() {
    //this sets the mark back to 0 in the marking form
    var m = ['mark1', 'mark2', 'mark3', 'mark4', 'mark5'];
    for (var i = 0; i < m.length; i++)
        document.getElementById(m[i]).selectedIndex = 0;
}

function ClearTotalMarks() {
    //this set the total mark back to 0 
    var a = document.getElementById('tm');
    a.innerHTML = '0';
}