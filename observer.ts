/**
  예시)

  고양이, 강아지 -> 옵져버
  주인 -> 이벤트

  주인이 집합 명령을 내리면 동물들이 반응하는 상황을
  예시로 하여 코드를 구현해본다.
 */

interface Observer {
	update(): any;
}

// 고양이 반응
class Cat {
	update() {
		console.log('Meow');
	}
}

// 강아지 반응
class Dog {
	update() {
		console.log('bow');
	}
}

// 주인
class Owner {
	animals: Array<Observer>;
	constructor() {
		this.animals = [];
	}

	// 동물의 주인 설정
	register(animal: Observer) {
		this.animals.push(animal);
	}

	// 동물들에게 신호 보내기
	notify() {
		this.animals.forEach((animal) => animal.update());
	}
}

const owner = new Owner();
const cat = new Cat();
const dog = new Dog();

owner.register(cat);
owner.register(dog);

owner.notify();
