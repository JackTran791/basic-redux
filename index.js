var store = Redux.createStore(combineReducers);
var valueEl = document.getElementById('value');
var valueSUm = document.getElementById('value2');

function render() {
  valueEl.innerHTML = store.getState().count;
  valueSUm.innerHTML = store.getState().sum;
}
render();
store.subscribe(render);
