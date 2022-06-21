class CustomTable extends HTMLElement {
  _tableEl;
  _headerEl;
  _headerRowEl;
  _bodyEl;

  constructor(props) {
    super();
    this.columns = props.columns;
    this.data = props.data;
    this._initLayout();
    this._renderHeader();
    this._renderBody();
  }

  _initLayout() {
    this._tableEl = document.createElement('table');
    this.appendChild(this._tableEl);

    this._headerEl = document.createElement('thead');
    this._tableEl.appendChild(this._headerEl);

    this._headerRowEl = document.createElement('tr');
    this._headerEl.appendChild(this._headerRowEl);

    this._bodyEl = document.createElement('tbody');
    this._tableEl.appendChild(this._bodyEl);
  }

  _renderHeader() {
    this.columns.forEach(column => {
      this._headerRowEl.appendChild(this._createHeaderCell(column.header));
    });
  }

  _renderBody() {
    this.data.forEach(cells => {
      const bodyRowEl = document.createElement('tr');
      this._bodyEl.appendChild(bodyRowEl);
      cells.forEach((cellData, columnIndex) => {
        bodyRowEl.appendChild(this._createBodyRowCell(cellData, columnIndex));
      })
    });
  }

  _createHeaderCell(header) {
    const headerCell = document.createElement('th');
    headerCell.textContent = header.text;
    return(headerCell);
  }

  _createBodyRowCell(cellData, columnIndex) {
    const bodyRowCell = document.createElement('td');

    let renderCell;
    if (typeof this.columns[columnIndex].cell === 'function') {
      renderCell = this.columns[columnIndex].cell(cellData);
    } else {
      renderCell = this.columns[columnIndex].cell.cloneNode(true);
      renderCell.value = cellData;
    }

    bodyRowCell.appendChild(renderCell);
    return bodyRowCell;
  }
}

customElements.define('custom-table', CustomTable);
window.CustomTable = CustomTable;
