function IncomeGrid() {

    const jessica = 6000;
    const andre = 1600;

    

function profit() {

    const total = jessica + andre;
    return total;
}

    const total = profit();

  return (
  <div>
    <h2>TOTAL: R$ {total} </h2>
    <ul>
        <li>Andre: R$ {andre}</li>
        <li>Jessica: R$ {jessica}</li>
    </ul>
  </div> )
}

export default IncomeGrid;