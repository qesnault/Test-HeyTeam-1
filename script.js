var values = [[180,161,102,31,31,46,175,199,106,89,137,200,199,126,159,114,184,198,10,183,30,150,47,187,35,126,131,159,173,178,174,69,87,157,75,190,181,122,65,19,63,67,56,115,65,162,159,144,77,36],[195,31,102,148,119,28,190,197,145,190,84,91,62,101,72,178,81,92,119,103,183,57,122,47,170,12,19,193,196,199,47,43,85,152,158,151,42,26,112,44,163,186,50,121,152,49,169,136,198,98], [26,98,102,120,105,153,47,167,188,41,121,109,16,199,83,196,188,101,122,121,193,59,77,27,43,55,70,186,24,118,185,63,122,68,119,0,16,44,181,135,102,43,134,91,180,152,94,169,110,96]];

// Count the number of increments of the value
var counter = new Object()

// Main function
function initTab() {
    let tab = document.getElementById('table')

    counterValues()

    let current = new Object()
    values.forEach(column => {
        let td = document.createElement("td")
        column.forEach(value => {
            let tr = document.createElement("tr")
            tr.textContent = value

            incrementToArray(current, value)

            if(value < 100 && current[value] == counter[value]) {
                tr.style.backgroundColor = "red"
            } else if(value > 100 && current[value] <= 2) {
                tr.style.backgroundColor = "green"
            }

            td.appendChild(tr)
        })
        tab.appendChild(td)
    })
}

// Count the number of times the value has been viewed
function counterValues() {
    values.forEach(column => {
        column.forEach(value => {
            incrementToArray(counter, value)
        })
    })
}

// Count the number of times the value has been viewed
function incrementToArray(array, key) {
    if(array[key]) {
        array[key] += 1
    } else {
        array[key] = 1
    }
}

initTab()