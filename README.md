# 1.1 디자인 패턴

## 디자인 패턴이란🔎
```jsx
 프로그램을 설계할 때 발생했던 문제점들을 객체 간 상호 관계 등을 이용하여 해결할 수 있도록 하나의 '규약' 형태로 만들어 놓은 것.
```

## 디자인 패턴 요약
### 🚩 **생성**

1) `Builder` : 생산 단계를 캡슐화 하여 구축 공정을 동일하게 이용하도록 하는 패턴

2) `Prototype` : 복사하여 새 개체를 생성할 수 있도록 하는 패턴

3) `Factory Method` : 객체를 생성하기 위한 인터페이스를 정의하여 어떤 클래스가 인스턴스화 될 것인지는 서브 클래스가 결정하도록 하는 패턴

4) `Abstract Method` : 생성군들을 하나의 모아놓고 팩토리 중에서 선택하게 하는 패턴

5) `Singleton` : 유일한 하나의 인스턴스를 보장하도록 하는 패턴

### 🚩 **구조**

1) `Bridge` : 추상과 구현을 분리하여 결합도를 낮춘 패턴

2) `Decorator` : 소스를 변경하지 않고 기능을 확장하도록 하는 패턴

3) `Facade` : 하나의 인터페이스를 통해 느슨한 결합을 제공하는 패턴

4) `Flyweight` : 대량의 작은 객체들을 공유하는 패턴

5) `Proxy` : 대리인이 대신 그 일을 처리하는 패턴

6) `Composite` : 개별 객체와 복합 객체를 클라이언트에서 동일하게 사용하도록 하는 패턴

7) `Adapter` : 인터페이스로 인해 함께 사용하지 못하는 클래스를 함께 사용하도록 하는 패턴

### 🚩 **행위**

1) `Interpreter` : 언어 규칙 클래스를 이용하는 패턴

2) `Template Method` : 알고리즘 골격의 구조를 정의한 패턴

3) `Chain of Responsibility` : 객체들끼리 연결 고리를 만들어 내부적으로 전달하는 패턴

4) `Command` : 요청 자체를 캡슐화하여 파라미터로 넘기는 패턴

5) `Iterator` : 내부 표현은 보여주지 않고 순회하는 패턴

6) `Mediator` : 객체 간 상호작용을 캡슐화한 패턴

7) `Memento` : 상태 값을 미리 저장해 두었다가 복구하는 패턴

8) `Observer` : 상태가 변할 때 의존자들에게 알리고, 자동 업데이트하는 패턴

9) `State` : 객체 내부 상태에 따라서 행위를 변경하는 패턴

10) `Strategy` : 다양한 알고리즘 캡슐화하여 알고리즘 대체가 가능하도록 한 패턴

11) `Visitor` : 오퍼레이션을 별도의 클래스에 새롭게 정의한 패턴

 ---
# 디자인 패턴 유형
## 1. 싱글톤 패턴

>### 설명

- 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴
- 보통 DB 연결 모듈에 많이 사용하며, 이외에도 도메인 관점에서 인스턴스가 한 개만 존재하는 것을 보증하고 싶은 경우에도 사용함.

> ### 특징
 
 - 인스턴스 생성할 때 발생하는 비용 즉, **소모 메모리를 줄일 수 있음**. 
 ( → 하나의 인스턴스를 만들어놓고, 해당 인스턴스를 다른 모듈들이 공유하며 사용하기 때문)
 - **접근 속도 향상**
 ( → 이미 생성된 인스턴스를 활용하기 때문)
 - **의존성이 높아진다는 단점**
 - 싱글톤 패턴을 구현하는 코드 자체가 많이 필요하다. 
 앞서 소개한 구현 방법외에도 정적 팩토리 메서드에서 객체 생성을 확인하고 생성자를 호출하는 경우에 멀티스레딩 환경에서 발생할 수 있는 동시성 문제 해결을 위해 **syncronized** 키워드를 사용해야 한다.
 - **테스트하기 어렵다.**
 싱글톤 인스턴스는 자원을 공유하고 있기 때문에 테스트가 결정적으로 격리된 환경에서 수행되려면 매번 인스턴스의 상태를 초기화시켜주어야 한다. 그렇지 않으면 어플리케이션 전역에서 상태를 공유하기 때문에 테스트가 온전하게 수행되지 못한다.
 - 의존 관계상 **클라이언트가 구체 클래스에 의존**하게 된다.
  `new` 키워드를 직접 사용하여 클래스 안에서 객체를 생성하고 있으므로, 이는 SOLID 원칙 중 DIP를 위반하게 되고 OCP 원칙 또한 위반할 가능성이 높다.
 - 그 외 **자식클래스를 만들수 없다는 점** 과, **내부 상태를 변경하기 어렵다는 점** 등 여러가지 문제들이 존재한다. *결과적으로 이러한 문제들을 안고있는 싱글톤 패턴은 **유연성이 많이 떨어지는 패턴***이라고 할 수 있다.
> 
> ```jsx
> const obj = {
>   a: 27
> }
> 
> const obj2 = {
>   a: 27
> }
> 
> console.log(obj === obj2); // false
> ```
> 
 위에서 obj, obj2 각각 객체는 **서로 다른 인스턴스**를 가진다. 그 이유는, 자바스크립트에서는 리터럴 `{}` 또는 `new Object`로 객체를 생성하게 되면 다른 어떤 객체와도 같지 않기 때문이다.
 
 따라서, 리터럴 {} 또는 new Object **자체만으로도** **싱글톤 패턴을 구현할 수 있다**.

## 2. 팩토리 패턴
>
>### 설명

- 객체를 사용하는 코드에서 객체 생성 부분을 떼어내 추상화한 패턴이자 상속 관계에 있는 두 클래스에서 **상위 클래스가 중요한 뼈대를 결정**하고, **하위 클래스에서 객체 생성에 관한 구체적인 내용을 결정**하는 패턴이다.
- 자바스크립트에서 팩토리 패턴을 구현한다면 간단하게 `new Object()`  로 구현할 수 있다.
>    
>    ```jsx
>    const num = new Object(42);
>    const str = new Object('abc');
>    
>    num.constructor.name; // Number
>    str.constructor.name; // String
>    ```
    
- 숫자를 전달하거나 문자열을 전달함에 따라 다른 타입의 객체를 생성하는 것을 볼 수 있다. 이는 즉, 전달받은 값(인자)에 따라 가른 객체를 생성하며 인스턴스의 타입 등을 정한다.
- 예를 들어 라떼 레시피와 아메리카노 레시피, 우유 레시피라는 구체적인 내용이 들어있는 하위 클래스가 컨베이어 벨트를 통해 전달되고, 상위 클래스인 바리스타 공장에서 이 레시피들을 토대로 우유 등을 생상하는 생상 공정을 생각하면 된다.
>    
>    ```jsx
>    class Latte {
>      constructor() {
>        this.name = "latte"
>      }
>    }
>    
>    class Espresso {
>      constructor() {
>        this.name = "Espresso"
>      }
>    }
>    
>    class LatteFactory { // 하위 클래스 (객체 생성에 관한 구체적인 내용 결정)
>      static createCoffee() {
>        return new Latte();
>      }
>    }
>    
>    class EspressoFactory { // 하위 클래스 (객체 생성에 관한 구체적인 내용 결정)
>      static createCoffee() {
>        return new Espresso();  // 여기서 인스턴스 생성하여 상위 클래스로 전달 (의존성 주입)
>      }
>    }
>    
>    const factoryList = { LatteFactory, EspressoFactory }
>    
>    class CoffeeFactory { // 상위 클래스 (뼈대 역할)
>      static createCoffee(type) {
>        const factory = factoryList[type]
>        return factory.createCoffee() // 의존성 주입
>      }
>    }
>    
>    const main = () => {
>      // 라떼 커피를 주문한다 
>      const coffee = CoffeeFactory.createCoffee('EspressoFactory')
>      //  커피 이름을 부른다
>      console.log(`주문하신 ${coffee.name} 나왔습니다`)
>    }
>    
>    main();
>    ```
    
>    &#160;&#160;위의 예시 코드에서 CoffeeFactory 라는 상위 클래스가 **중요한 뼈대**를 결정하고, 하위 클래스인 EspressoFactory 가 **구체적인 내용**을 결정하고 있다.
    참고로 이는 의존성 주입이라고도 볼 수 있는데, CoffeeFactory 클래스(상위 클래스)에서 EspressoFactory 클래스(하위클래스)의 인스턴스를 생성하는 것이 아닌 **EspressoFactory 클래스에서 생성한 인스턴스를 CoffeeFactory 클래스에 주입하고 있기 때문**이다.
    

>### 특징

- 보다 뛰어난 유연성을 가진다.
( → **상위 클래스와 하위 클래스가 분리되기 때문에 느슨한 결합을 가지며** 상위 클래스에서는 인스턴스 생성 방식에 대해 전혀 알 필요가 없기 때문)
- 유지보수성이 뛰어나다.
( → 객체 생성 로직이 따로 떼어져 있기 때문에 **코드를 리팩터링하더라도 한 곳만 고칠 수 있게 되기 때문**이다)
 ## 의존성 주입 ( DI, Dependency Injection)
>   ### 설명
   
   ![image](https://user-images.githubusercontent.com/53039583/178137136-19484b8b-6269-4a75-8f88-cd602ffa6ac6.png)
   
   - 위의 그림처럼 메인 모듈이 ‘직접' 다른 하위 모듈에 대한 의존성을 주기보다는 중간에 의존성 주입자(dependency injector) 가 이 부분을 가로채 메인 모듈이 ‘간접'적으로 의존성을 주입하는 방식.
   - 이를 통해 메인 모듈(상위 모듈)은 하위 모듈에 대한 의존성이 떨어지게 되는데, 이를 ‘디커플링이 된다' 라고도 한다.
   - 참고로 의존성이란, 종속성이라고도 하며 `A가 B에 의존성이 있다` 라는 것은 B의 변경 사항에 대해 A 또한 변해야 된다는 것을 의미한다.
   
>   ### 특징
   
   - 테스팅과 마이그레이션이 비교적 쉽다.
   ( → 모듈들을 쉽게 교체할 수 있는 구조이기 때문)
   - 애플리케이션 의존성 방향이 일관적이고, 애플리케이션을 쉽게 추론할 수 있으며 모듈 간의 관계들이 조금 더 명확해진다.
   ( → 구현할 때 추상화 레이어를 넣고 이를 기반으로 구현체를 넣어주기 때문)
   - 복잡성 ⇧, 약간의 런타임 페널티가 발생할 수 있다.
   ( → 모듈들이 더욱 더 분리되어 클래스 수가 늘어나므로)
   
>  ### 의존성 주입 원칙
  - 의존성 주입은 **의존성 주입 원칙**을 준수하며 만들어야 한다. 원칙은 아래와 같다.
      - *상위 모듈은 하위 모듈에서 어떠한 것도 가져오지 않아야 한다. 둘 다 추상화에 의존해야 하며, 이때 추상화는 세부 사항에 의존하지 말아야 한다.*
  - 위의 원칙을 이해하기 쉽게 조명 램프를 예를 들어보도록 하자.
>   ```
>   이번에 당신이 아주 고급진 램프를 하나 구매했다고 가정한다. 
>   이 램프를 침대 옆에 두고 밤이 되면 램프를 끄고 잠에 들 것인데, 우리가 흔히 사용하는 램프의 사용패턴은 
>   **스위치를 활용하여** 램프를 끄는 방식일 것이다.
>   ```   
>   ![image](https://user-images.githubusercontent.com/53039583/178137158-5e4dfd39-2133-41ef-9b36-3163595b58b3.png)
>   ```
>   그런데 시간이 지나서 이제 스위치뿐만 아니라 리모콘이나 스마트폰으로도 램프를 켜고 끌 수 있는 
>   램프가 출시되었다고 생각을 해보자. 
>   위와 같이 버튼에만 의존하여,즉 버튼만을 활용하는 램프는 
>   새로 나온 램프의 기능(리모콘으로 램프를 켜고 끌 수 있는 기능)을 추가할 수 없을 것이다. 
>   만약 추가한다고 하더라도  Lamp의 일부분을 뜯어 고쳐서 개조를 해야할 것이다.
>   
>   하지만 만약에 램프를 만들 때부터 "**켜고 끄는 기능**"을 **따로 모듈화 했었으면** 어땠을까? 
>   그 켜고 끄는 기능을 현재는 버튼을 통해 구현을 했지만, 이후 더 좋은 기능이 나온다면 이는 
>   리모콘, 스마트폰으로도 램프를 켜고 끄는 기능을 동작시킬 수 있을 것이다.
>   ```
   
 ![image](https://user-images.githubusercontent.com/53039583/178137163-a9e15683-9428-41b0-9c1c-9f33e046ac3e.png)
 
> ```
> 자 그렇다면 위의 설명이 이제 조금 이해가 갈 수도 있을 것이다.
> 현재 상위 모듈(램프를 켜고 끌 수 있는 버튼)은 하위 모듈(램프)를 직접 참조 하지 않고 켜고 끌 수 있는 
> 기능(Switchable)을 참조하여 기능을 구현하고 있다. 마찬가지로 Lamp도 Switchable을 참조하고 있다.
> 
> 이와 같이 상위 모듈/하위 모듈 간 참조 관계를 **인터페이스로 분리한다면 변동성이 큰 실제 구현체를 참조하지 
> 않기에 상위 모듈에서 큰 코드 변경 없이 기능 변경을 할 수 있게 된다**.
> ```

## 3.  전략 패턴

>### 설명

- 정책 패턴이라고도 하며 객체의 행위를 바꾸고 싶은 경우 ‘직접' 수정하지 않고 전략이라고 부르는 ‘캡슐화한 알고리즘'을 컨텍스트 안에서 바꿔주면서 상호 교체가 가능하게 만드는 패턴이다.

![image](https://user-images.githubusercontent.com/53039583/180637347-9b031a2e-4129-4f2d-b2d4-9be1bd37d69a.png)

>```jsx
>/** (예시)
>  하나의 동물을 input 으로 받아서 말을 가르치는 함수가 있다.
>  그 동물은 고양이가 될 수도 있고 사자가 될 수도 있다.
>
>  고양이일 경우 -> Meaw
>  사자일 경우 -> Vow
>
>  이 메인 기능 함수 안에서는 어떤 동물인지 판별하는 즉, if 문같은 코드는 존재하지 않는다.
>  대신 동물의 유형은 '전략'이라고 불리는 인터페이스 함수로 정의한다.
>  */
>
>class Animal {
>	static speak() {
>		return true;
>	}
>}
>
>class Cat extends Animal {
>	speak() {
>		console.log('meow');
>	}
>}
>
>class Lion extends Animal {
>	speak() {
>		console.log('vow');
>	}
>}
>
>// 뼈대 함수(핵심 함수)
>function makeSpeak(animal) {
>	animal.speak();
>}
>
>// 인터페이스 함수 ('전략' 이라고 부르는 캡슐화한 알고리즘)
>function createAnimal(data) {
>	if (data === 'cat') {
>		return new Cat();
>	} else if (data === 'lion') {
>		return new Lion();
>	}
>}
>
>const userInput = prompt('cat ? lion ? :');
>const animal = createAnimal(userInput);
>makeSpeak(animal);
>```
>
## 4. 옵저버 패턴

>### 설명

- 주체가 어떤 객체(subject)의 상태 변화를 관찰하다가 상태 변화가 있을 때마다 메서드 등을 통해 옵저버 목록에 있는 옵저버들에게 변화를 알려주는 디자인 패턴이다.
    - **주체** : 객체의 상태 변화를 보고 있는 관찰자
    - **옵저버** : 이 객체의 상태 변화에 따라 전달되는 메서드 등을 기반으로 ‘추가 변화 사항'이 생기는 객체
    
- 옵저버 패턴은 크게 두 가지 방식이 있다.
    - 객체와 주체가 분리되어 있는 옵저버 패턴
    - 객체와 주체가 합쳐진 옵저버 패턴

![image](https://user-images.githubusercontent.com/53039583/180637359-d1331a4d-ee91-4691-abe3-11a7f4b4d9d4.png)
![image](https://user-images.githubusercontent.com/53039583/180637367-414f6adf-28a0-4a97-bede-18ade2d530b3.png)

- 옵저버 패턴을 활용한 서비스의 예로는 **트위터**, **인스타그램** 등이 있다.
    - 내가 어떤 사람인 주체를 ‘팔로우' 했다면 주체가 포스팅을 올리게 되었을 때 알림이 ‘팔로워' 에게 간다.

![image](https://user-images.githubusercontent.com/53039583/180637375-bb4b5c23-7447-4bc5-9561-d69a7a1b5d3d.png)

- 옵저버 패턴은 주로 **이벤트 기반 시스템**에 사용하며 **MVC(Model-View-Controller)** 패턴에도 사용된다. 
예를 들어 주체라고 볼 수 있는 모델(M)에서 변경사항이 생겨 `update()` 메서드로 옵저버인 뷰(V)에 알려주고 이를 기반으로 컨트롤러(C)등이 작동하는 것이다.

![image](https://user-images.githubusercontent.com/53039583/180637380-d9ce416d-8687-4944-b23d-5b161df6b31c.png)


## 5. 프록시 패턴과 프록시 서버
>### 설명
- 대상 객체(subject)에 접근하기 전 그 접근에 대한 흐름을 가로채 대상 객체 앞단의 인터페이스 역할을 하는 디자인 패턴

![image](https://user-images.githubusercontent.com/53039583/182016212-c40ff5e0-b388-4092-b6a0-33ad10223f27.png)

>### 특징
- 객체의 속성, 변환 등을 보완할 수 있음
- `보안`, `데이터 검증`, `캐싱`, `로깅` 등에 사용
- **프록시 서버에서의 캐싱** 
: ****캐시 안에 정보를 담아두고 캐시 안에 있는 정보를 요구하는 요청에 대해 다시 저 멀리 있는 원격 저버에 요청하지 않고 캐시 안에 있는 데이터를 활용하는 것을 말한다. 이를 통해 **불필요하게 외부와의 연결을 방지함으로서 트래픽을 줄일 수 있다는 장점**이 있다.

>### 프록시 서버

- 서버와 클라이언트 사이에서 클라이언트가 자신을 통해 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템이나 응용 프로그램을 가리킨다.
- 프록시 서버로 사용되는 대표적인 소프트웨어는 nginx, CloudFlare 가 있다.
    - **nginx**
        - 비동기 이벤트 기반의 구조와 다수의 연결을 효과적으로 처리 가능한 웹 서버
        - 주로  Node.js 서버 앞단의 프록시 서버로 활용됨 → **익명 사용자의 직접적인 서버 접근을 차단**하고 **간접적으로 한 단계를 더 거침으로써** **보안성 ⇧**
            
            ![image](https://user-images.githubusercontent.com/53039583/182016221-f969895a-146b-4c50-a068-4aa86d9dc879.png)
            
    - **CloudFlare**
        - 전 세계적으로 분산된 서버가 있고 이를 통해 어떠한 시스템의 콘텐츠 전달을 빠르게 할 수 있는 CDN  서비스
        - CDN 말고도 DDOS 공격 방어, HTTPS 구축 등의 장점을 얻을 수 있다. → 웹서버 앞단에 두어 ‘프록시 서버'로 쓰기 때문에 가능한것
            
            ![image](https://user-images.githubusercontent.com/53039583/182016226-2110010f-7e63-4b9a-a1cf-e1eff1a654cd.png)
            

>### CORS와 프론트엔드의 프록시 서버

- 프론트엔드 개발 시 프론트엔드 서버를 만들어서 백엔드 서버와 통신할 때 주로 ***CORS** 에러를 마주치는데, 이를 해결하기 위해 프론트엔드에서 프록시 서버를 만들기도 한다.
- 예를 들어 프론트엔드에서는 127.0.0.1:3000 으로 Testing을 하는데 백엔드 서버는 127.0.0.1:12010 이라면 Port 번호가 다르기 때문에 CORS 에러가 나타난다. 이때 프록시 서버를 둬서 프론트엔드 서버에서 요청되는 오리진을 127.0.0.1:12010 으로 바꾸는 것이다.
참고로 127.0.0.1 이란 루프백 IP로, 본인 PC의 IP 를 뜻한다. localhost나 127.0.0.1 을 입력하면 DNS 를 타지 않고 바로 본인 PC 로 연결되는 것이다.

## 6. 이터레이터 패턴
>### 설명

- **이터레이터(iterator)** 를 사용하여 Collection 의 요소들에 접근하는 디자인 패턴.
- 순회할 수 있는 여러 가지 자료형의 구조와는 상관없이 이터레이터라는 하나의 인터페이스로 순회 가능.
    
>    ```jsx
>    const mp = new Map();
>    mp.set('a', 1);
>    mp.set('b', 2);
>    mp.set('c', 3);
>    
>    const st = new Set();
>    st.add(1);
>    st.add(2);
>    st.add(3);
>    
>    for (let a of mp) console.log(a);
>    for (let a of st) console.log(a);
>    
>    /*
>    ----result----
>    
>    ['a', 1]
>    ['b', 2]
>    ['c', 3]
>    1
>    2
>    3
>    
>    --------------
>    */
>    ```
>    
>    - 분명히 다른 자료구조인 `set` 과 `map` 임에도 똑같은 `for a of b` 라는 이터레이터 프로토콜을 통해 순회하는 것을 볼 수 있다.
>
## 7. 노출 모듈 패턴

>### 설명
- 즉시 실행 함수를 통해 `private`, `public` 과 같은 접근 제어자를 만드는 패턴을 말한다.
- JS는 `private`, `public` 과 같은 접근 제어자가 존재하지 않고 전역 범위에서 스크립트가 실행되기 때문에 노출모듈 패턴을 통해 `private`, `public` **접근 제어자를 직접 구현** 하기도 한다.
>    
>    ```jsx
>    const example = (() => {
>    	const a = 1;
>    	const b = () => 2;
>    	const public = {
>    		c: 2, 
>    		d: () => 3
>    	};
>    	return public;
>    })();
>    
>    console.log(example);
>    console.log(example.public);
>    
>    /*
>    -----result-----
>    
>    {c: 2, d: [Function: d]}
>    undefined
>    
>    ----------------
>    */
>    ```
    
    - a, b 는 다른 모듈에서 사용할 수 없는 변수나 함수인 `private` 범위를 가진다. 다른 모듈에서 접근할 수 없고 c, d 는 다른 모듈에서 사용할 수 있는 변수나 함수인 `public` 범위를 가진다.
    - 참고로 이 원리를 기반으로 만든 JS 모듈 방식으로는 CJS(CommonJS) 모듈 방식이 있다.
## 8. MVC 패턴
>### 설명

- 모델(Model), 뷰(View), 컨트롤러(Controller)로 이루어진 디자인 패턴
    - 모델 : 애플리케이션의 데이터인 DB, 상수, 변수 등을 뜻한다. 뷰에서 데이터를 생성하거나 수정하면 컨트롤러를 통해 모델을 생성하거나 갱신한다.
    - 뷰 : inputbox, checkbox, textarea 등 사용자 인터페이스 요소를 나타낸다. 즉, 모델을 기반으로 사용자가 볼 수 있는 화면을 뜻한다. 모델이 가지고 있는 정보를 따로 저장하지 않아야 하며 단순히 사각홍 모양 등 화면에 표시하는 정보만 가지고 있어야 한다. 또한, 변경이 일어나면 컨트롤러에 이를 전달해야 한다.
    - 컨트롤러: 하나 이상의 모델과 하나 이상의 뷰를 잇는 다리 역할을 하며, 이벤트 등 메인 로직을 담당한다. 또한, 모델과 뷰의 생명주기도 관리하며, 모델이나 뷰의 변경 통지를 받으면 이를 해석하여 각각의 구성 요소에 해당 내용에 대해 알려준다.
- 애플리케이션의 구성 요소를 세 가지 역할로 구분하여 개발 프로세스에서 각각의 구성 요소에만 집중해서 개발할 수 있다.
    
    ![image](https://user-images.githubusercontent.com/53039583/182016234-4e51b85a-a1e2-40c3-832b-574992dec8b2.png)
    
- MVC 패턴의 예로 React 라이브러리가 있다.

>### 특징

- 재사용성 ⇧, 확장성 ⇧
- 애플리케이션이 복잡해질수록 모델(M)과 뷰(V)의 관계가 복잡해지는 단점이 있다.

## 9. MVP 패턴

> ### 설명

- MVC 패턴으로부터 파생되었으며 MVC에서  C에 해당하는 컨트롤러가 프레젠터로 교체된 패턴이다.
- 뷰와 프레젠터는 1:1 관계이기 때문에 MVC 패턴보다 비교적 더 강한 결합을 지닌 디자인 패턴이라고 볼 수 있다.
    
    ![image](https://user-images.githubusercontent.com/53039583/182016242-56d65afb-3b8f-4f5c-9ece-80356cc04e00.png)
    

## 10. MVVM 패턴

>### 설명

- MVC 패턴의 C에 해당하는 컨트롤러가 뷰모델(view model)로 바뀐 패턴이다.
- MVVM 패턴의 예로 Vue 라이브러리가 있다.
- 뷰모델 : 뷰를 더 추상화한 계층
    
    ![image](https://user-images.githubusercontent.com/53039583/182016245-e0fd28cd-17e8-449a-9a9b-5a17ce6b9daf.png)
  

> ### 특징
- MVC 패턴과는 다르게 *커맨드와 *데이터 바인딩을 가지는 것이 특징이다.
- **뷰 — 뷰모델 사이의 양방향 데이터 바인딩을 지원함** → UI를 별도의 코드 수정 없이 재사용 가능, 단위 테스팅하기 쉬움
---
## 디자인 패턴은 만병통치약이 아니다

- 패턴은 반복적으로 발생하는 문제의 일반적인 해결책이다. 그리고 수많은 개발자가 오랫동안 검증한 해결책이라는 장점도 있다. 그래서 일단 패턴이 필요하다는 결론을 내리면 다른 개발자들도 비슷한 문제를 겪었고, 비슷한 기법을 적용해서 그 문제를 해결했다고 생각하면 마음이 편해진다.
하지만, 패턴이 결코 만병통치약은 아니다. 그냥 패턴을 넣고 컴파일한다고 해서 기적같이 문제가 해결되진 않기 때문에, 사용할 때는 그 패턴이 설계한 디자인에 미칠 영향과 결과를 주의깊게 생각해봐야 한다.

## 패턴이 필요할 때는 언제일까?

- 그러면 패턴은 어떤 경우에 사용해야할까? 그건 바로 디자인을 할 때, 지금 디자인 상의 문제에 적합하다는 확신이 든다면 패턴을 도입해야 한다. 만약 패턴을 적용하기 전에 더 간단한 해결책이 있다면 오히려 패턴을 사용하지 않는게 더 효율적일 수도 있다.
- 언제 패턴을 적용할 지를 올바르게 결정하려면 상당한 경험과 지식이 축척되어야 한다.
- 패턴을 잘 알고 있다면 가장 적합한 패턴을 찾을 수 있다. 만약 어떤 패턴을 써야할 지 잘 모르겠다면 문제 해결에 도움이 될만한 패턴이 있는지 훑어봐야 한다.
- 간단한 해결책으로 문제가 해결되었는데도 시스템의 어떤 부분이 변경될 거라고 예측되는 상황에는 디자인 패턴을 적용해야 한다. 하지만 발생 가능성이 높은 실질적인 변경에 대비해서 패턴을 적용해야지, 가능성이 그리 높지 않은 가상적인 변경에 대비해서 패턴을 적용하는 일은 바람직하지 않다.

## 리팩터링과 패턴

- 리팩터링이란 코드를 변경해서 코드 구조를 개선하는 과정을 뜻한다. **리팩터링 목적** 은 행동 변경이 아니라 **구조 개선** 에 있다. 패턴을 사용하면 구조가 더 개선될 수 있을 지 검토해 볼 수 있는 아주 좋은 기회라고도 할 수 있다. 예를 들어, 조건문이 아주 많은 코드가 있다면 **상태 패턴** 적용도 고려해 볼만하다. 또한, **팩토리 패턴** 을 써서 구상 클래스의 의존성을 말끔하게 정리할 수도 있을 것이다.

## 최대한 단순하게 해결하는 방법을 찾아라

- 디인을 할 때 무엇보다도 중요한 원칙은 ‘ **최대한 단순한 방법으로 문제 해결하기** ' 이다. “이 문제에 어떻게 패턴을 적용할 수 있을까?” 가 아니라, “어떻게 하면 단순하게 해결할 수 있을까?” 에 초점을 맞춰야 한다.
- 패턴을 사용하지 않고 문제를 해결한다고 해서 훌륭한 개발자로 인정 받지 못하는 건 절대 아니다. 정말 단순하게 잘 만들 수 있다면, 다른 개발자들도 당신의 능력을 인정하고 존경할 것이다. 가장 단순하고 유연한 디자인을 만들 때 패턴이 있어야 한다면 그때 패턴을 적용하면 돤다.

---
# 1.2 프로그래밍 패러다임

## 프로그래밍 패러다임이란?

```jsx
프로그래머에게 프로그래밍의 관점을 갖게 해주는 역할을 하는 개발 방법론
```

## 프로그래밍 패러다임의 분류

![image](https://user-images.githubusercontent.com/53039583/197643804-b1b50100-9575-4651-8f37-6b93049e416e.png)

## 1.2.1 선언형과 함수형 프로그래밍

> ### 선언형 프로그래밍

- ‘무엇을’ 풀어내는가에 집중하는 패러다임.
- “프로그램은 함수로 이루어진 것이다” 라는 명제가 담겨져 있음.

> ### 함수형 프로그래밍

- 선언형 패러다임의 일종

> ### 함수형 프로그래밍 예시

- 자연수로 이루어진 배열에서 최댓값을 찾는 코드를 선언형 프로그래밍으로 구현하는 경우
    
    ```jsx
    const numbers = [1, 2, 3, 5, 12, 7];
    const result = numbers.reduce((max, num) => num > max ? num : max, 0);
    
    console.log(result); // 12
    ```
    

앞에 코드에서 `reduce()` 는 ‘배열’만 받아서 누적한 결괏값을 반환하는 순수 함수이다.

즉, 함수형 프로그래밍은 이와 같은 작은 ‘순수 함수’ 들을 블록처럼 쌓아 로직을 구현하고 ‘고차 함수’를 통해 재사용성을 높인 프로그래밍 패러다임이다.

> ### 순수 함수

- **출력**이 **오직 입력에만 의존**하는 함수를 의미함.
    
    ```jsx
    const calculate = (a, b) => a + b;
    ```
    
    `calculate()` 함수는 오직 a,b 매개변수만 출력값에 영향을 줄 수 있으며, 그 외 데이터는 출력값에 영향을 주지 않으므로, **순수 함수라고 할 수 있다**.
    

> ### 고차 함수

- **함수가 함수를 값처럼** **매개변수**로 받아 로직을 생성하는 함수.
- 고차 함수를 사용하기 위해서는 해당 언어가 **일급 객체** 라는 특징을 가져야 한다.
    - ******************일급 객체******************
        - 변수나 메서드에 함수를 할당할 수 있음.
        - 함수 안에 함수를 매개변수로 담을 수 있음.
        - 함수가 함수를 반환할 수 있음.

## 1.2.2 객체지향 프로그래밍 (OOP)

> ### 객체지향 프로그래밍

- 객체들의 집합을 프로그램의 상호작용을 표현하며 데이터를 객체로 취급하여 객체 내부에 선언된 메서드를 활용하는 방식
- 설계 소요시간 **⇡**
- 처리 속도 **⇣**

> ### 특징

- 객체지향 프로그래밍은 **추상화, 캡슐화, 상속성, 다형성**이라는 특징이 있다.
    - **추상화** : 복잡한 시스템으로부터 핵심 개념 또는 기능만을 간추려내는 것.
    - **캡슐화** : 객체의 속성과 메서드를 하나로 묶고 일부를 외부에 감추어 은닉하는 것
    - **상속성** : 상위 클래스의 특성을 하위 클래스가 이어받아 재사용하거나 추가, 확장하는 것.
        - **코드의 재사용 측면, 계층적 관계 생성, 유지 보수성** 측면에서 중요함.
    - **다형성** : 하나의 메서드나 클래스가 다양한 방법으로 동작하는 것. (오버로딩, 오버라이딩)
        - **오버로딩** : 같은 이름을 가진 메서드를 여러 개 두는 것.
            
            위의 코드처럼 오버로딩 메서드들은 매개변수의 형식으로 구분뒤어 호출된다.
            
        - **오버라이딩** : 주로 메서드 오버라이딩을 말하며, 상위 클래스로부터 상속받은 메서드를 하위 클래스가 **재정의**하는 것.
        - 
> ### 설계 원칙

1. **단일 책임 원칙**
    - SRP, SIngle Responsibility Principle
    - 모든 클래스는 각각 하나의 책임만 가져야 한다는 원칙
    - 예를 들어 A라는 로직이 존재한다면 어떠한 클래스는 A에 관한 클래스이어야 하고 이를 수정한다고 했을 때도  A와 관련된 수정이어야 함.
2. **********개방-폐쇄 원칙**********
    - OCP, Open Closed Principle
    - 유지 보수 사항이 생긴다면 코드를 쉽게 확장할 수 있도록 하고, 수정할 때는 닫혀 있어야 하는 원칙
3. **리스코프 치환 원칙**
    - LSP, Liskov Substitution Principle
    - 프로그램의 객체(Object)는 프로그램의 **정확성**을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 하는 것.
    - 부모 객체에 자식 객체를 넣어도 시스템이 문제없이 작동해야함.
4. **인터페이스 분리 원칙**
    - ISP, Interface Segregation Principle
    - 하나의 일반적인 인터페이스보다 ******************구체적인 여러 개의 인터페이스를 만들어야 한다는 원칙.**
5. **의존 역전 원칙**
    - DIP, Dependency Inversion Principle
    - 자신보다 변하기 쉬운 것에 의존 하던 것을 **추상화된 인터페이스나 상위 클래스를 두어 변하기 쉬운 것의 변화에 영향받지 않게** 하는 원칙.
    - 예를 들어, 타이어를 갈아끼울 수 있는 틀을 만들어 놓은 후 당야한 타이어를 교체할 수 있어야 한다.
    - 즉, 상위 계층은 하위 계층의 변화에 대한 구현으로부터 독립해야 한다.

## 1.2.3 절차형 프로그래밍

 - 절차형 프로그래밍은 로직이 수행되어야 할 **연속적인 계산 과정**으로 이루어져 있다.
 - 작업이 진행되는 순서대로 코드를 구현함 → 가독성 ⇧, 실행속도 ⇧
 - 대표적으로 ******포트란(fortran)******을 이용한 **대기 과학 관련 연산 작업, 머신 러닝의 배치 작업** 등이 있다.
 - **************************단점은 모듈화⇩, 유지보수성⇩**
 - 사용 예시를 코드로 구현하면 아래와 같다.
    - Q) 자연수로 이루어진 배열에서 최댓값 찾기
        
        ```tsx
        const numberArray: Array<number> = [1, 2, 3, 4, 5, 12, 7, 6];
        let number = 0;
        
        for (let i = 0; i < numberArray.length; i++) {
        	number = Math.max(numberArray[i], number);
        } 
        console.log(number); // 12
        ```
        

## 1.2.4 결론 (패러다임의 혼합)

- 대표적인 패러다임들을 쭉 알아봤을 때, 가장 좋은 패러다임은 어떤 것일까? 답은 ‘없음’ 이다. 패러다임은 각각의 특성이 뚜렷하기 때문에 **비즈니스 로직**이나 **서비스의 특징**을 고려해서 정하는 것이 > 좋다.
- 하나의 패러다임을 기반으로 통일하여 서비스를 구축하는 것도 좋은 생각이지만 **여러 패러다임을 조합하여 상황과 맥락에 따라 패러다임 간의 장점만 취하여 개발하는 것**이 가장 바람직하다. 예를 들어, 백> 엔드에 **머신 러닝 파이프라인과 거래 관련 로직이 있다면 머신 러닝 파이프라인**은 **절차지향형 패러다임**, **거래 관련 로직**은 **함수형 프로그래밍**을 적용하는 것이 좋을 것이다.


이 글에서는 하드웨어와 소프트웨어를 관리하는 운영체제와 CPU, 메모리 등으로 이루어진 컴퓨터에 대해 알아보도록 한다.
---

# 운영체제 - 운영체제와 컴퓨터

## 운영체제의 역할과 구조

> ### 운영체제의 역할

운영체제(OS)의 역할은 크게 아래와 같이 네 가지가 있다.

	1. CPU 스케줄링과 프로세스 관리
    2. 메모리 관리
    3. 디스크 파일 관리
    4. I/O 디바이스 관리
    
> ### 운영체제의 구조 

운영체제의 구조는 유저 프로그램, GUI, 시스템콜, 커널, *드라이버, 하드웨어로 구성된다.
![](https://velog.velcdn.com/images/ljw4536/post/cb6aef99-a771-4381-a19b-1b9ff4621fd8/image.png)

##### *드라이버 : 하드웨어를 제어하기 위한 소프트웨어

#### 시스템콜
: 운영체제가 커널에 접근하기 위한 인터페이스이며 유저 프로그램이 운영체제의 서비스를 받기 위해 커널 함수를 호출할 때 사용된다.
![](https://velog.velcdn.com/images/ljw4536/post/a3782094-16eb-4dab-bb8a-9064b82c833d/image.png)

#### modebit
: 1 또는 0의 값을 가지는 **플래그 변수**이다. 시스템콜이 작동될 때 modebit을 참고해서 **유저 모드**와 **커널 모드**를 구분한다.

- 유저 모드 : **유저가 접근할 수 있는 영역을 제한**하여 컴퓨터 자원에 함부로 침범하지 못하는 모드. 
즉, 시스템콜을 못하게 막아서 한정된 기능만 사용 가능하게 한다.
- 커널 모드 : **모든 컴퓨터 자원에 접근**할 수 있는 모드

> ### 컴퓨터의 구성요소

컴퓨터는 **CPU, DMA 컨트롤러, 메모리, 타이머, 디바이스 컨트롤러** 등으로 이루어져 있다.

#### CPU
Central Processing Unit의 약어이며, 산술논리연산장치, 제어장치, 레지스터로 구성되어 있는 컴퓨터 장치를 말한다. 인터럽트에 의해 단순히 메모리에 존재하는 명령어를 해석해서 실행하는 **일꾼** 역할을 한다.

#### 제어장치(CU)
Control Unit 의 약어이며 **프로세스 조작을 지시**하는 역할을 하는 CPU의 한 부품이다.

#### 레지스터
CPU 안에 있는 **매우 빠른 임시기억장치**를 가리킨다. CPU는 자체적으로 데이터를 저장할 수 없기 때문에 레지스터를 거쳐 데이터를 전달한다.

#### 산술논리연산장치(ALU)
Arthmetic Logic Unit 의 약어이며, 덧셈, 뺄셈 같은 두 숫자의 산술 연산과 배타적 논리합, 논리곱 같은 논리 연산을 계산하는 디지털 회로이다.

#### CPU의 연산처리 
![](https://velog.velcdn.com/images/ljw4536/post/efb2b2ce-b3b6-4227-b321-c436769895fc/image.png)

#### 인터럽트
어떤 신호가 들어왔을 때 CPU를 잠깐 정지시키는 것

#### DMA 컨트롤러
I/O 디바이스가 **메모리에 직접 접근할 수 있도록**하는 하드웨어 장치를 의미한다.

#### 메모리 
전자회로에서 데이터나 상태, 명령어 등을 기록하는 장치를 의미한다. 보통 RAM을 일컫어 메모리라고도 한다.

#### 타이머
몇 초 안에는 작업이 끝나야 한다는 것을 정하고 특정 프로그램에 시간제한을 다는 역할을 한다.

#### 디바이스 컨트롤러
컴퓨터와 연결되어 있는 **IO 디바이스들의 작은 CPU**를 말한다.

---

## 메모리 계층
메모리 계층은 **레지스터, 캐시(L1,L2), 메모리(RAM), 저장장치(HDD/SDD)**로 구성된다.

- 속도 : 레지스터 > 캐시 > 메모리 > 저장장치
- 용량 : 레지스터 < 캐시 < 메모리 < 저장장치

> ### 캐시(cache)

: 데이터를 미리 복사해 놓는 임시 저장소이자 빠른 장치와 느린 장치에서 속도 차이에 따른 병목 현상을 줄이기 위한 메모리를 말한다.
실제로 메모리와 CPU 사이의 속도 차이가 너무 크기 때문에 그 중간에 레지스터 계층을 둬서 속도 차이를 해결한다. 이렇게 속도 차이를 해결하기 위해 계층과 계층 사이에 있는 계층을 **캐싱 계층** 이라고 한다.

#### 지역성의 원리
만약 캐시 계층을 두는 것이 아닌 직접 캐시를 설정해야할 경우, **자주 사용하는 데이터**를 기반으로 설정해야 한다. 자주 사용하는 데이터에 대한 근거가 되는 것은 **지역성**인데 이는 ***시간 지역성***과 ***공간 지역성***으로 나뉜다.

- **시간 지역성** : 최근 사용한 데이터에 다시 접근하려는 특성을 뜻함.
- **공간 지역성** : 최근 접근한 데이터를 이루고 있는 **공간** 이나 **그 가까운 공간**에 접근하려는 특성을 뜻함.

> ### 캐시히트와 캐시미스

![](https://velog.velcdn.com/images/ljw4536/post/3c5ed657-a3ca-4729-ae19-cf81e057c800/image.png)

- 캐시히트 : 캐시에서 **원하는 데이터를 찾은 상황**. CPU 내부 버스를 기반으로 작동하기 때문에 **속도가 빠름**.
- 캐시미스 : 캐시에 **원하는 데이터가 없어서 주 메모리로 가서 데이터를 찾아오는 상황**. 시스템 버스를 기반으로 작동하기 때문에 **속도가 느림**.


#### 캐시매핑
캐시가 히트되기 위해 매핑하는 방법을 말하며 종류는 직접 매핑 | 연관 매핑 | 집합 연관 매핑이 있다.

#### 웹 브라우저의 캐시
소프트웨어적인 대표적 캐시로는 웹 브라우저의 **작은 저장소 쿠키, 로컬 스토리지, 세션 스토리지** 가 있다. 이러한 것들은 보통 사용자의 ***커스텀 정보, 인증 모듈 관련 사항***들을 웹 브라우저에 저장해서 추후 서버 요청 시 자신을 나타내는 아이덴티티나 중복 요청 방지를 위해 쓰인다.

- **쿠키** : **만료기한이 있는** 키-값 저장소이다. 쿠키 설정 시 document.cookie로 쿠키를 볼 수 없게 **httponly** 옵션을 설정하는 것이 중요하다.
- **로컬 스토리지** : **만료기한이 없는** 키-값 저장소이다. 웹 브라우저를 닫아도 유지되고 **도메인 단위**로 저장 및 생성된다. HTML5를 지원하지 않는 웹 브라우저에서는 사용할 수 없다.
- **세션 스토리지** : **만료기한이 없는** 키-값 저장소이다. 탭 단위로 세션 스토리지를 생성하며, 탭을 닫을 때 해당 데이터가 삭제된다. HTML5를 지원하지 않는 웹 브라우저에서는 사용할 수 없다.

#### 데이터베이스의 캐싱 계층
데이터베이스 시스템을 구축할 때도 메인 데이터베이스 위에 **레디스(redis)** 데이터베이스 계층을 '캐싱 계층'으로 둬서 성능을 향상시키기도 한다.
![](https://velog.velcdn.com/images/ljw4536/post/ae702672-b232-49d9-9d0e-17d8e748e16c/image.png)

## 메모리 관리

> ### 가상 메모리

메모리 관리 기법 중 하나로 컴퓨터가 실제로 이용 가능한 메모리 자원을 추상화하여 이를 사용하는 사용자들에게 **매우 큰 메모리로 보이게 만드는 것**.
가상 메모리는 가상주소와 실제주소가 **매핑**되어 있고 프로세스의 주소 정보가 들어있는 **'페이지 테이블'**로 관리되는데, 이 때 **속도 향상을 위해 *TLB를 사용**한다.

	TLB : 메모리와 CPU 사이에 있는 주소 변환을 위한 캐시. 
          페이지 테이블에 있는 리스트를 보관하여 CPU가 페이지 테이블까지 가지 않도록 해 속도를 향상시킬 수 있는 
          캐시 계층이다.
    
#### 스와핑
당장 사용하지 않는 가상 메모리 영역을 하드디스크로 옮겨 필요할 때 다시 RAM으로 불러와 올리고, 사용하지 않으면 다시 하드디스크로 내림을 반복하여 RAM을 효과적으로 관리하는 것. 
(페이지 폴트를 방지하기 위함.)

#### 페이지 폴트(page fault)
프로세스의 주소 공간에는 존재하지만 **지금 이 컴퓨터의 RAM에는 없는 데이터에 접근했을 경우**에 발생한다.

	페이지 : 가상 메모리를 사용하는 최소 크기 단위
	프레임 : 실제 메모리를 사용하는 최소 크기 단위
    
> ### 스레싱

메모리의 **페이지 폴트율이 높은 것**을 의미하며, 이는 컴퓨터의 심각한 성능 저하를 초래한다.
![](https://velog.velcdn.com/images/ljw4536/post/fe0c550a-8efa-47f4-abb5-502b1648db38/image.png)

이를 해결하기 위해 아래와 같은 방법들이 있다.
- 메모리 증설
- HDD 사용할 경우, SDD로 대체
- 운영체제에서 **작업 세트** 또는 **PFF** 사용

#### 작업 세트
프로세스의 과거 사용 이력인 **지역성**을 통해 결정된 페이지 집합을 만들어서 **미리 메모리에 로드하는 것.** 미리 메모리에 로드하면 탐색 비용을 줄일 수 있기 때문에 스와핑 또한 줄일 수 있다.

#### PFF(Page Fault Frequency)
페이지 폴트 빈도를 조절하는 방법으로 상한선과 하한선을 만든다.
**상한선**에 도달한다면 **페이지를 늘리고** **하한선**에 도달한다면 **페이지를 줄인다**.

> ### 메모리 할당

메모리에 프로그램을 할당할 때는 시작 메모리 위치, 메모리의 할당 크기를 기반으로 할당하며 **연속 할당** 과 **불연속 할당**으로 나뉜다.

#### 연속 할당
메모리에 **연속적으로 공간을 할당**하는 것을 말하며, ***고정 분할방식***과 ***가변 분할 방식***이 있다.

- 고정 분할 방식 : 메모리를 미리 나누어 관리하는 방식. 메모리가 미리 나뉘어 있기 때문에 **융통성**이 없으며, ***내부 단편화**가 발생할 수 있음.
- 가변 분할 방식 : 매 시점 프로그램의 크기에 맞게 **동적을 메모리를 나눠 사용**하는 방식. ***외부 단편화**가 발생할 수 있음.

	내부 단편화: 메모리를 나눈 크기보다 프로그램이 작아서 들어가지 못하는 공간이 많이 발생하는 현상
    외부 단편화: 메모리를 나눈 크기보다 프로그램이 커서 들어가지 못하는 공간이 많이 발생하는 현상. 예를 들어 100MB 를 55MB, 45MB로 나눴지만 프로그램의 크기는 70MB일 때 들어가지 못하는 것.
    
#### 불연속 할당
메모리를 **연속적으로 할당하지 않는 것**을 말하며, 현대 운영체제가 쓰는 방법이다.

- 페이징 : 동일한 크기의 페이지 단위로 나누어 **메모리의 서로 다른 위치에 프로세스를 할당하는 것**
- 세그멘테이션 : 페이지 단위가 아닌 의미 단위인 **세그먼트**로 나누는 방식.
- 페이지드 세그멘테이션 : 공유나 보안을 위미 단위의 세그먼트로 나누고 물리적 메모리는 페이지로 나누는 것.

> ### 페이지 교체 알고리즘

#### 오프라인 알고리즘
먼 미래에 참조되는 페이지와 현재 할당하는 페이지를 바꾸는 알고리즘이며, 가장 추천하는 방법이다.

#### FIFO(First In First Out)
가장 먼저 온 페이지를 교체 영역에 가장 먼저 놓는 방법.

#### LRU(Least Recentle Used)
참조가 가장 오래된 페이지를 바꾸는 것.

#### LFU(Least Frequently Used)
가장 참조 횟수가 적은 페이지를 바꾸는 것.
