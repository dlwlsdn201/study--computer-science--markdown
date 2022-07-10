const resultSPAN = document.querySelector('#result');
let result;

const obj = {
	a: 27
};

const obj2 = {
	a: 27
};

result = obj === obj2;

// ===== 결과 출력 ======
console.log('결과:', result); // false
resultSPAN.textContent = String(result);
