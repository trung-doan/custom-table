const KucText = document.createElement("input");
KucText.value = 'kuc input';

const textColumn = {
  header: {
    text: 'kuc text'
  },
  cell: KucText
};

const  customCell = (cellData) => {
  const element = document.createElement('div');

  const elementInput1 = document.createElement('input');
  elementInput1.value = cellData[0];
  element.appendChild(elementInput1);

  const elementInput2 = document.createElement('input');
  elementInput2.value = cellData[1];
  element.appendChild(elementInput2);

  return element;
}

const customColumn = {
  header: {
    text: 'custom column'
  },
  cell: customCell
};

const table = new window.CustomTable({
  columns: [
    textColumn,
    textColumn,
    customColumn
  ],
  data: [
    ['kuc text 1', 'kuc text 2.1', ['custom 1', 'custom 2']],
    ['kuc text 2', 'kuc text 2.2', ['custom 1', 'custom 2']],
    ['kuc text 3', 'kuc text 2.3', ['custom 1', 'custom 2']]
  ],
});

window.addEventListener('DOMContentLoaded', (event) => {
  document.body.appendChild(table);
});
