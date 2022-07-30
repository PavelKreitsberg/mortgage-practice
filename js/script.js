const banks = [
  {
    id: '435tr34wrt',
    name: 'Mono',
    interestRate: 5,
    maxLoan: 500000,
    minPayment: 1000,
    loanTerm: 12,
  },
  {
    id: 'asdfw342rew5',
    name: 'Privat',
    interestRate: 7,
    maxLoan: 1000000,
    minPayment: 5000,
    loanTerm: 50,
  },
];

const root = document.querySelector('#root');

const banksList = document.createElement('div');
banksList.classList.add('fields__item');
banksList.classList.add('bank__list');

const bankBtn = document.createElement('button');
bankBtn.classList.add('button');
bankBtn.textContent = 'Create new bank';

const bankListUl = document.createElement('ul');
bankListUl.classList.add('banks');

banksList.append(bankListUl, bankBtn);

const banksInformation = document.createElement('div');
banksInformation.classList.add('fields__item');
banksInformation.classList.add('feature__list');

root.append(banksList, banksInformation);

function createBankList(banks) {
  bankListUl.insertAdjacentHTML(
    'afterbegin',
    banks
      .map((bank, index) => {
        return `<li class="bank__item">
        <p>${index + 1}. <span>${bank.name}</span></p>
        <button type="button" class="button--edit">Edit</button>
        <button type="button" class="button--delete">Delete</button>
      </li>`;
      })
      .join('')
  );

  const titleList = document.querySelectorAll('.bank__item span');
  console.log(titleList);
  titleList.forEach(elem => {
    elem.addEventListener('click', elementClickFinder);
  });
}

function elementClickFinder(event) {
  const currentBank = banks.find(bank => bank.name === event.target.textContent);
  console.log(currentBank);
}

createBankList(banks);
