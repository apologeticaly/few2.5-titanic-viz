import titanicdata from './titanic-passengers.js';




titanicdata.sort((a,b) => {
    if(a.fields.survived > b.fields.survived) {
        return -1
    } else if (a.fields.survived < b.fields.survived) {
        return 1
    }
    return 0
})

titanicdata.sort((a,b) => {
    if(a.fields.pclass < b.fields.pclass) {
        return -1
    } else if (a.fields.pclass > b.fields.pclass) {
        return 1
    }
    return 0
})


const titanic = document.querySelector('#titanic')

const passengers = titanicdata.map(passenger => {
	return document.createElement('div')
})

passengers.forEach(p => {
    titanic.appendChild(p)
  })
  
// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
    p.className = 'passenger'
    p.style.width = '25px'
    p.style.height = '25px'
    if (titanicdata[i].fields.pclass === 1) {
        p.style.border  = '3px solid red'
    } else if (titanicdata[i].fields.pclass === 2) {
        p.style.border  = '3px solid gold'
    }if (titanicdata[i].fields.pclass === 3) {
        p.style.border  = '3px solid black'
    }
    p.style.backgroundColor = titanicdata[i].fields.survived ===  'No' ? '#bbb' : 'white'
    p.style.backgroundImage = titanicdata[i].fields.sex === 'female' ? "url('female.png')" : "url('male.png')"
    p.style.backgroundSize = titanicdata[i].fields.sex ===  'female' ? '18px 25px' : '25px 25px'
    p.style.backgroundRepeat = "no-repeat" 
})


console.log(passengers)

module.exports.getAllValuesForProperty = getAllValuesForProperty
module.exports.filterByProperty = filterByProperty
module.exports.filterNullForProperty = filterNullForProperty
module.exports.sumAllProperty = sumAllProperty
module.exports.countAllProperty = countAllProperty
module.exports.makeHistogram = makeHistogram
module.exports.normalizeProperty = normalizeProperty