
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default;
const vtsu = document.getElementById("vtsu");
const d = document.createElement("div");

let result = null;
axios.get('https://new.vyatsu.ru/').then((response: { data: any; }) => {
    result = response.data;
    // document.getElementById('vtsu').innerHTML = result;
    d.innerHTML = result;
    vtsu?.appendChild(d);
});



