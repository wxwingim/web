"use strict";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import axios from 'https://cdn.skypack.dev/axios';
const vtsu = document.getElementById("vtsu");
const d = document.createElement("div");
let result = null;
axios.get('https://new.vyatsu.ru/').then((response) => {
    result = response.data;
    // document.getElementById('vtsu').innerHTML = result;
    d.innerHTML = result;
    vtsu === null || vtsu === void 0 ? void 0 : vtsu.appendChild(d);
});
