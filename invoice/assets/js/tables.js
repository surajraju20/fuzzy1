function addField(argument) {
    var count = 1
    var i;
    for (i = 0; i < document.getElementById("copy").value; i++) {
        count=count + 1;
        var myTable = document.getElementById("myTable");
        var currentIndex = myTable.rows.length-1;
        var currentRow = myTable.insertRow(-1);

        var dateBox = document.createElement("input");
        dateBox.setAttribute("name", "date" + currentIndex);
        dateBox.setAttribute("id", "date" + currentIndex);
        dateBox.setAttribute("type", "date");
        console.log(currentIndex);
        var data = document.getElementById("date"+String(currentIndex-1)).value;
        var got_date = new Date(data);
        var today = new Date(got_date.getTime() + 86400000);
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
          dd='0'+dd
        }
        if(mm<10) {
          mm='0'+mm
        }
        today = yyyy+'-'+mm+'-'+dd;
        console.log(today)
        dateBox.setAttribute('value', today)

        var feesBox = document.createElement("input");
        feesBox.setAttribute("name", "fees" + currentIndex);
        feesBox.setAttribute("id", "fees" + currentIndex);
        feesBox.setAttribute("type", 'number');
        var data = document.getElementById("fees"+String(currentIndex-1)).value;
        feesBox.setAttribute("value", data);

        var travelBox = document.createElement("input");
        travelBox.setAttribute("name", "travel" + currentIndex);
        travelBox.setAttribute("id", "travel" + currentIndex);
        travelBox.setAttribute("type", 'number');
        var data = document.getElementById("travel"+String(currentIndex-1)).value;
        travelBox.setAttribute("value", data);

        var foodBox = document.createElement("input");
        foodBox.setAttribute("id", "food" + currentIndex);
        foodBox.setAttribute("name", "food" + currentIndex);
        foodBox.setAttribute("type", 'number');
        var data = document.getElementById("food"+String(currentIndex-1)).value;
        foodBox.setAttribute("value", data);

//        var addRowBox = document.createElement("input");
//        addRowBox.setAttribute("type", "button");
//        addRowBox.setAttribute("value", "Add another line");
//        addRowBox.setAttribute("onclick", "addField();");
////        addRowBox.setAttribute("class", "button btn btn-primary");

        var currentCell = currentRow.insertCell(-1);
        currentCell.appendChild(dateBox);


        currentCell = currentRow.insertCell(-1);
        currentCell.appendChild(feesBox);

        currentCell = currentRow.insertCell(-1);
        currentCell.appendChild(travelBox);

        currentCell = currentRow.insertCell(-1);
        currentCell.appendChild(foodBox);

//        currentCell = currentRow.insertCell(-1);
//        currentCell.appendChild(addRowBox);


        document.createElement("br");
    }
    document.getElementById('rowcount').value = count;
}
