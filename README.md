## 요구사항

필수 요구사항은 꼭 달성해야 하는 목표로, 수정/삭제는 불가하고 추가는 가능합니다.  
선택 요구사항은 단순 예시로, 자유롭게 추가/수정/삭제해서 구현해보세요.  
각 요구사항은 달성 후 마크다운에서 `- [x]`로 표시하세요.

### ❗ 필수

- [x] start, stop, reset 기능이 있는 타이머를 구현해주세요.
- [x] 현재 시간에 맞게 기능이 움직이도록 시간을 구현해주세요.
- [x] 추가,삭제 기능이 가능한 to-list를 구현해주세요.
- [x] 각자 개성에 맞게 UI를 꾸며주시고 nav bar가 사라지고 나타나도록 구현해주세요.

### ❔ 선택

- [x] 타이머와, 시계를 구현 하실 때 한 자리 숫자 앞에는 0이 붙도록 해보세요.(예시: 12:03:06)
- [x] 23시가 지나고 24시는 00시가 될 수 있도록 표현해보세요.
- [ ] 시간을 표현 할 때 클론(:)이 깜빡거릴 수 있도록 구현해보세요.
- [ ] 시간에 날짜도 추가해보는 것도 좋아요!
- [ ] 세션 스토리지를 이용하여 todo-list에 작성한 목록이 새로고침해도 계속 남아있도록 구현해보세요.
- [ ] nav bar가 나타나고 메뉴 글자에 마우스를 hover했을 때, 네 방향(위,아래,오른쪽,왼쪽) 중 한 곳에서부터 반대쪽까지 글자의 색이 채워지는 UI를 구현해보세요.
      (오른쪽을 기준으로 잡았다면, hover 했을 때 오른쪽에서 왼쪽으로 점차 색이 채워지는 animation을 이야기합니다. 위를 기준을 잡았다면 위에서 아래겠죠!)

## 결과물

### 1. STOP WATCH

<img src="https://user-images.githubusercontent.com/92071025/213617155-beb9458c-a3dd-4afa-84a5-381ccd1aef2c.gif" />

<br />

- <code>setInterval</code>과 <code>clearInterval</code> 함수를 사용하여 구현하였습니다.
- 0부터 9까지는 한자릿수가 나오기 때문에 이 구간에서는 앞에 0이 붙도록 구현하였습니다.
- Start 버튼을 연속 클릭시 속도가 빠르게 증가하는 문제가 있었는데 <code>clearInterval</code> 함수를 사용해 초기화 시키고 다시 <code>setInerval</code> 되도록하여 해결했습니다.

<br />

### 2. CLOCK

<img src="https://user-images.githubusercontent.com/92071025/213617169-06ae2d44-a927-4b27-afd7-8dae0a09734b.gif" />

<br />

- <code>new Date()</code>를 사용하여 구현하였는데 이를 이용하면 <strong>시(0~23), 분(0~59), 초(0~59)가 반환</strong>이 되기 때문에 두 자릿수로 맞추기 위해 한 자릿수일 경우 앞에 0이 붙도록 구현했습니다.
- <code>setInterval</code> 함수로 매초 실행시켜 실제 시간을 구현하였습니다.

<br />

### 3. TODO LIST

<br />

<img src="https://user-images.githubusercontent.com/92071025/213617177-c17a9fb2-4fd0-45e9-a3e0-c4578f6dcb8e.gif" />

<br />

- 버튼을 클릭하면 추가/삭제가 되고 아이템이 일정 개수가 넘어가면 스크롤 되도록 구현하였습니다.

<br />

### 4. NAV TOGGLE

<img src="https://user-images.githubusercontent.com/92071025/213617506-3c802c74-460d-4719-b96b-b7b5480b9073.gif" />

- 메뉴 버튼을 클릭하면 왼쪽에 사이드바가 나타나 프로젝트 스위칭을 할 수 있습니다.
- 원본 프로젝트에서는 애니메이션으로 진행되지만 구현에 어려움을 겪어서 일단은 사이드바로 구현한 상태입니다.

<br />

## 회고

시작 전에는 간단한 프로젝트 같았지만 팀원의 도움이나 구글링을 통해 도움을 받으며 진행을 하게됐고, 개인적으로는 현업 실무자가 되기 위해서 위 프로젝트들은 쉽게 구현해야 한다고 생각하기 때문에 반복 학습을 통해 이러한 것들을 응용해야 하는 상황이 나와도 잘 구현할 수 있도록 많은 노력이 필요하다고 느꼈습니다.
