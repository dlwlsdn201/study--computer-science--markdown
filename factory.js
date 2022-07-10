const resultSPAN = document.querySelector('#result');
let result;

// ===== 내용 정의 영역 =====

// 1. 자바스크립트 내장 클래스 Object 로 팩토리 패턴 이해하기
const num = new Object(42);
const str = new Object('abc');
num.constructor.name; // Number
str.constructor.name; // String
/**
    결론 -> 숫자를 전달하거나 문자열을 전달함에 따라 다른 타입의 객체를 생성하는 것을 볼 수 있다. 
            이는 즉, 전달받은 값(인자)에 따라 가른 객체를 생성하며 인스턴스의 타입 등을 정한다. 
  */

// 2. 커피 공장을 예시로 팩토리 패턴 이해하기
class Latte {
	constructor() {
		this.name = 'latte';
	}
}

class Espresso {
	constructor() {
		this.name = 'Espresso';
	}
}

class LatteFactory {
	// 하위 클래스 (객체 생성에 관한 구체적인 내용 결정)
	static createCoffee() {
		return new Latte();
	}
}

class EspressoFactory {
	// 하위 클래스 (객체 생성에 관한 구체적인 내용 결정)
	static createCoffee() {
		return new Espresso(); // 여기서 인스턴스 생성하여 상위 클래스로 전달 (의존성 주입)
	}
}

const factoryList = { LatteFactory, EspressoFactory };

class CoffeeFactory {
	// 상위 클래스 (뼈대 역할)
	static createCoffee(type) {
		const factory = factoryList[type];
		return factory.createCoffee(); // 의존성 주입
	}
}

const main = () => {
	// 라떼 커피를 주문한다
	const coffee = CoffeeFactory.createCoffee('EspressoFactory');
	result = `주문하신 ${coffee.name} 나왔습니다`;
	//  커피 이름을 부른다
	console.log(result);
};

main();

/**
    결론 -> CoffeeFactory 라는 상위 클래스가 중요한 뼈대를 결정하고, 하위 클래스인 EspressoFactory 가 구체적인 내용을 결정하고 있다.
        참고로 이는 의존성 주입이라고도 볼 수 있는데, CoffeeFactory 클래스(상위 클래스)에서 EspressoFactory 클래스(하위클래스)의 
        인스턴스를 생성하는 것이 아닌 EspressoFactory 클래스에서 생성한 인스턴스를 CoffeeFactory 클래스에 주입하고 있기 때문이다.
  */

// ===== 결과 출력 ======
console.log('결과:', result); // false
resultSPAN.textContent = String(result);
