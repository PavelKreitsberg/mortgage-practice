const root = document.querySelector('#root')
console.log(root)

const banksList = document.createElement('div')
banksList.classList.add('fields__item')
banksList.classList.add('bank__list')
console.log(banksList)

const banksInformation = document.createElement('div')
banksInformation.classList.add('fields__item')
banksInformation.classList.add('feature__list')
console.log(banksInformation)

root.append(banksList, banksInformation)
console.log(root)