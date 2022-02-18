### 1. Project name: Learning React

### 2. What is React

- `React` is one of libraries with javascript using components. `React` is developed to creat UI(User Interface) and operate callback functions per event easily. `React` is launched in 2013 and the popularity increases rapidly from developers. `React` is used at not only facebook but also other big companies such as uber, netflix, instagram. Most of web application maybe are created with `React`. In case of complicated web application, ususally use MVC pattern. MVC is one of design patterns and application could be defined as model, view, controller. `React` could be classified to veiw layer.

#### 2-1. Difference between framework and library

- In case of framework, it takes a long time to learn framework and developer could learn once again when framework has some of large changes with new concept. In contrast, in case of library, developer could build up function freely because library has not fixed structure such as framework. So, developer could learn library more fun and more easily than framework.

#### 2-2. good things regarding React

- `React` is compatible with previous version when it has new revision. Since huge community was already formed, `React` has updated well-arranged documents continueously. There is possibility that other developers already solved the problem and shared their solution when you face the problem. In addtion, the developer could creat a variety of applications with `React`. In case of using `React`, web application could be created. In case of `React Native`, mobile application could be created. In case of using `React` and `Electron`, desktop application could be created.

- Components have `state()` and `render()`. `state()` contains objects of data. `render()` defines how to display somethings to user. Classified components should be reused and independent. The components of `React` has virtual DOM Tree. In case some of child components are called by `render()` because current component has changes, `React` compares between virtual DOM Tree on his own and previous DOM Tree on browser at first and updates necessary changes at DOM Tree on browser. So, speed of operating application is not slow even though many components are called on virtual DOM Tree.

- <img src="./img/react.png" width="700" height="400">
  <img src="./img/dom.png" width="700" height="400">

### 2-3. Components with class and function

- `state()` is vessel that can hold datas of state. It seems like `constructor()` of class on `javascript`. Updated data should be displayed to user with `render()` when changed `state()`. In case of defined functions on `React`, `lifecycle method` could be used to call the functions on his own when events. The event contains to update/finish DOM Tree and render.

- `React` is components. The components could be created with class and function. In case of class, components could be extended to append their property to other child component. In case of function, components could be used when data has no state on static condition. The designers have had difficulty to cooperate with developers using `React` because principle of class was so difficult to the designers. `React hook` was launched on 16.8 version of `React` to improve designer's difficulty and increase work efficiency. However, the launch date was on 6th Jan in 2019. The prior projects already was created with class of `React`. So, developer should learn `React hook`, class and have ability to creat project with both of them.

- <img src="./img/component.png" width="700" height="400">

### 3. Period : 2 day

### 4. Programs needed to operate React

#### 4-1. Node.js

- Javascript runtime environment(framework) that executes javascript code outside a web browser. Thanks to `node.js`, javascript could be operated on everywhere. In addition, `node.js` would be used not only to creat back-end server but also to update server-side rendering.

#### 4-2. npm and yarn

- `npm` means program of package manager that could download and update libraries. The developer could install, uninstall and update libraries with `package.json`. `package.json` includes information of libraries such as version, scripts, and so on.

- `yarn` is also program of package manager. It was launched to resolve some of npm's shortcomings. `yarn` is faster, higher performance, more secure than `npm`. In addition, `yarn` operates on `npm` protocol with `package.json`.

- To apply fontawesome to `React`, library should be installed on local. In case of `npm`, use `npm install --save @fortawesome/fontawesome-free`. In case of `yarn`, use `yarn add @fortawesome/fontawesome-free`. And then, add import on `index.jsx`. In case of between `npm` and `yarn`, use `import '@fortawesome/fontawesome-free/js/all.js'`.

### 5. React basic

#### 5-1. Difference of React

- There are 4 difference as below.
  1. Javascript code that includes tags formed HTML.
  2. Code block '{}' should be covered between tags to display values of not only variable but also array. In case value is undefined, `React` can not display output related to undefined. In case of adding conditional operator `&&`, code block '{}' is also covered. The variable and `&&` would be displayed on window tab if not code block '{}'.
  3. Use `<React.Frangment></React.Fragment>` to use binary nodes at the same time instead of `<div></div>`. `<></>` is also same as `<React.Frangment></React.Fragment>`. There would be `module build failed` if you do not use `<React.Frangment></React.Fragment>`.
  4. keyword `return()` should be typed within function to display values on window tab.

#### 5-2. Connection with React-DOM

- Browser can understand `HTML`, `CSS`, `vanilla javascript` except for `React`. So, `React` should be translated to `vanilla javascript` with `Babel`. `React-DOM` makes `HTML` connected with translated `vanilla javascript` for browser's good understanding.So, browser can display output on window tab according to connect `element of root` with `components` using `React-DOM`. `element of root` is `HTML`. `components` contains `HTML` and `javascript`. `javascript` could be translated to `vanilla javascript` using `Babel`.

### 6. Commands

- ctrl + c: come back to terminal after finishing the rendering of React.

- cp -R `A folder` `B foler`: creat `B folder` and copy `A folder` to `B folder`.

### 6. Resolution of failures

#### 6-1.

- symptom: `npm create react-app test` is installed completely, but I received error message when `npm start` on incorrect path. The incorrect path is `C:\Users\PARK MIN KYU\Downloads\cmder\projects\git\React\basic`. The correct path is `C:\Users\PARK MIN KYU\Downloads\cmder\projects\git\React\basic\test` because `react-app` was installed `test` depository. `package.json` should be needed when react loading. In case of incorrect path, there is no package.json which has `scripts` of start.

- <img src="./img/error1.png" width="700" height="250">

- countermeasure: type `npm start` on correct path : `C:\Users\PARK MIN KYU\Downloads\cmder\projects\git\React\basic\test`.

#### 6-2.

- symptom: `yarn create react-app test1` is not installed with error `commnad failed`. `package.json` can not be created.

- <img src="./img/error2.png" width="700" height="250">

- countermeasure: `yarn create react-app test1` could be divided to `yarn global add create-react-app` and `create-react-app test1`. Please type commands in sequence. And then, type `yarn start` when path of cmder moves to directory named `test1`.

- <img src="./img/yarn.png" width="700" height="250">
