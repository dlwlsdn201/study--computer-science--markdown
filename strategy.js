// 전략(정책) 패턴

/** (예시)
  하나의 동물을 input 으로 받아서 말을 가르치는 함수가 있다.
  그 동물은 고양이가 될 수도 있고 사자가 될 수도 있다.

  고양이일 경우 -> Meaw
  사자일 경우 -> Vow

  이 메인 기능 함수 안에서는 어떤 동물인지 판별하는 즉, if 문같은 코드는 존재하지 않는다.
  대신 동물의 유형은 '전략'이라고 불리는 인터페이스 함수로 정의한다.
  */

class Animal {
	static speak() {
		return true;
	}
}

class Cat extends Animal {
	speak() {
		console.log('meow');
	}
}

class Lion extends Animal {
	speak() {
		console.log('vow');
	}
}

// 뼈대 함수(핵심 함수)
function makeSpeak(animal) {
	animal.speak();
}

// 인터페이스 함수 ('전략' 이라고 부르는 캡슐화한 알고리즘)
function createAnimal(data) {
	if (data === 'cat') {
		return new Cat();
	} else if (data === 'lion') {
		return new Lion();
	}
}

const userInput = prompt('cat ? lion ? :');
const animal = createAnimal(userInput);
makeSpeak(animal);
