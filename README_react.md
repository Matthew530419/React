### 1. Project name: Learning React

### 2. Period : 1 week

### 3. What is React

- `React` is one of libraries with javascript using components. `React` is developed to creat UI(User Interface) and operate callback functions per event easily. `React` is launched in 2013 and the popularity increases rapidly from developers. `React` is used at not only facebook but also other big companies such as uber, netflix, instagram. Most of web application maybe are created with `React`. In case of complicated web application, ususally use MVC pattern. MVC is one of design patterns and application could be defined as model, view, controller. `React` could be classified to veiw layer.

#### 3-1. Difference between framework and library

- In case of framework, it takes a long time to learn framework and developer could learn once again when framework has some of large changes with new concept. In contrast, in case of library, developer could build up function freely because library has not fixed structure such as framework. So, developer could learn library more fun and more easily than framework.

#### 3-2. good things regarding React

- `React` is compatible with previous version when it has new revision. Since huge community was already formed, `React` has updated well-arranged documents continueously. There is possibility that other developers already solved the problem and shared their solution when you face the problem. In addtion, the developer could creat a variety of applications with `React`. In case of using `React`, web application could be created. In case of `React Native`, mobile application could be created. In case of using `React` and `Electron`, desktop application could be created.

- Components have `state()` and `render()`. `state()` contains objects of data. `render()` defines how to display somethings to user. Classified components should be reused and independent. The components of `React` has virtual DOM Tree. In case some of child components are called by `render()` because current component has changes, `React` compares between virtual DOM Tree on his own and current DOM Tree on browser at first and updates necessary changes at DOM Tree on browser. So, speed of operating application is not slow even though many components are called on virtual DOM Tree. However, in case data should be updated on certain condition and continuous re-rendering does not need, if you use Component, unnecessary flashing screen maybe occur. So, it would be better to use purecomponent rather than component for optimized memory and preventing malfunction. In addition, `React` calls correct function automatically on each of condition after each of lifecycle functions is configured. For example, use `componentDidMount()` if you function implements when registered component. Use `componentWillUnmount()` if you function implements when canceled component.

- <img src="./img/react.png" width="700" height="400">
  <img src="./img/dom.png" width="700" height="400">

#### 3-3. Components with class and function

- `state()` is vessel that can hold datas of state. It seems like `constructor()` of class on `javascript`. Updated data should be displayed to user with `render()` when changed `state()`. In case of defined functions on `React`, `lifecycle method` could be used to call the functions on his own when events. The event contains to update/finish DOM Tree and render.

- `React` is components. The components could be created with `class` and `function`. In case of `class`, components could be extended to append their property to other child component. In case of `function`, components could be used when not only any data is not related to state() but also there is on static condition. The designers have had difficulty to cooperate with developers using `React` because principle of `class` was so difficult to the designers. `React hook` was launched on 16.8 version of `React` to improve designer's difficulty and increase work efficiency. In case of `React hook`, components could use state() when dynamic condition such as class. However, the launch date was on 6th Jan in 2019. The prior projects already was created with `class` of `React`. So, developer should learn `React hook`, `class` and have ability to creat project with both of them.

- <img src="./img/component.png" width="700" height="400">

### 4. Programs needed to operate React

#### 4-1. Node.js

- Javascript runtime environment(framework) that executes javascript code outside a web browser. Thanks to `node.js`, javascript could be operated on everywhere. In addition, `node.js` would be used not only to creat back-end server but also to update server-side rendering.

#### 4-2. npm and yarn

- `npm` means program of package manager that could download and update libraries. The developer could install, uninstall and update libraries with `package.json`. `package.json` includes information of libraries such as version, scripts, and so on.

- `yarn` is also program of package manager. It was launched to resolve some of npm's shortcomings. `yarn` is faster, higher performance, more secure than `npm`. In addition, `yarn` operates on `npm` protocol with `package.json`.

- In case of `npm`, type `npm create react-app <folder name>` on current node. And then, move to folder name and `npm start` to operate `React`. In case of `yarn`, type `yarn global add create-react-app` and `create-react-app <folder name>` on current node. And then, move to folder name and `yarn start` to operate `React`.

- To apply fontawesome to `React`, library should be installed on local. In case of `npm`, use `npm install --save @fortawesome/fontawesome-free`. In case of `yarn`, use `yarn add @fortawesome/fontawesome-free`. And then, add import on `index.jsx`. In case of between `npm` and `yarn`, use `import '@fortawesome/fontawesome-free/js/all.js'`.

### 5. React basic

#### 5-1. Difference of React

- There are 4 differences as below.
  1. Javascript code that includes tags formed HTML. To highlight react component file, use extension of file as `.jsx` instead of `.js`.
  2. Code block '{}' should be covered between tags to display values of not only variable but also array. In case value is undefined, `React` can not display output related to undefined. In case of adding conditional operator `&&`, code block '{}' is also covered. The variable and `&&` would be displayed on window tab itself if not code block '{}'.
  3. Use `<React.Frangment></React.Fragment>` to use binary nodes at the same time instead of `<div></div>`. `<></>` is also same as `<React.Frangment></React.Fragment>`. There would be `module build failed` if you do not use `<React.Frangment></React.Fragment>`.
  4. keyword `return()` should be typed within function to display values on window tab.

#### 5-2. Connection with React-DOM

- Browser can understand `HTML`, `CSS`, `vanilla javascript` except for `React`. So, `React` should be translated to `vanilla javascript` with `Babel`. `React-DOM` makes `HTML` connected with translated `vanilla javascript` for browser's good understanding. So, browser can display output on window tab according to connection `element of root` with `components` using `React-DOM`. `element of root` is `HTML`. `components` contains `HTML` and `javascript`. `javascript` could be translated to `vanilla javascript` using `Babel`.

#### 5-3. Connection with files

- In case you want to use class from other component file connecting these files, please use `return <tag></tag>;`. For example, use `return <Habit></Habit>;` within App() on `app.jsx` to use class named `Habit` from `habit.jsx`. `return <Habit></Habit>` is equal to `return <Habit />`. In case you use vecode, import should be created automatically.

#### 5-4. chrome developer tool

- chrome browser offers components tab which user could check structure of elements among components such as elements tab. This would help user understand relationship between components of `React`. Please install `react developer tools` and set up default browser as chrome.

### 6. Commands

#### 6-1. On Terminal

- ctrl + c: come back to terminal after finishing the rendering of React.

- cp -R `A folder` `B foler`: creat `B folder` and copy `A folder` to `B folder`.

#### 6-2. On visual studio code

- rcc + Tab: basic component structure is created if you install `Reactjs code snippets` from extension marketplace.

- ctrl + p: current display could be moved to where you want with typing keyword simply.

### 7. Habit Tracker

#### 7-1. Concept of Habit Tracker

- Type habit name on input tab and then output should be displayed on window tab when entering or clicking add button. The list of habits are displayed on window tab with habit name, count, plus/minus buttons, transh icon. The counter should be changed when clicking plus/minus buttons. The one of list could be deleted when clicking trash icon. In addtion, in case you want to clean all lists, click reset all button.

- <img src="./img/concept.png" width="700" height="400">

#### 7-2. The one list of habit tracker

- Use `ReactDOM.render()` to display `<App />` on document tab with id named `root`.

- In case of index.jsx,
  `import React from 'react';`
  `import ReactDOM from 'react-dom';`
  `import './index.css';`
  `import App from './app';`
  `import reportWebVitals from './reportWebVitals';`
  `ReactDOM.render`(
  `<React.StrictMode>`
  `<App />`
  `</React.StrictMode>`,
  `document.getElementById('root')`
  );
  `reportWebVitals();`

- Use `return <Habit />;` within `App()` to apply `class Habit` on `app.jsx`. I used `app.css` to decorate styling of list.
- In case of all codes, please refer `src/app.css`.

- In case of app.jsx,
  `import './app.css';`
  `import Habit from './components/habit';`
  `function App()` {
  `return` (
  `<Habit />`
  );
  }
  `export default App;`

- In case you want to save any change and display that, use `state` and `setState()` according to synthetic event. `React` can not recognize changes if not used `setState()` such as `this.state.count ++;`. So, please use `this.setState({count: this.state.count + 1});`. In addition, code block {} should be covered on `count: this.state.count + 1` to display value of count.

- In case of habit.jsx,
  `import React, { Component } from 'react';`
  `import '@fortawesome/fontawesome-free/js/all.js'`
  `class Habit extends Component` {
  `state` = {
  `count: 0`
  };
  `handleIncrement = () => {`
  `this.setState({count: this.state.count + 1});`
  };
  `handleDecrement = () => {`
  `const count = this.state.count - 1;`
  `this.setState({count: count < 0 ? 0 : count});`
  };
  `render()` {
  `return`(
  `<li className="habit">`
  `<span className="habit-name">Reading</span>`
  `<span className="habit-count">0</span>`
  `<button className="habit-button habit-increase" onClick={this.handleIncrement}>`
  `<i className="fa-solid fa-square-plus"></i>`
  `</button>`
  `<button className="habit-button habit-decrease" onClick={this.handleDecrement}>`
  `<i className="fa-solid fa-square-minus"></i>`
  `</button>`
  `<button className="habit-button habit-delete">`
  `<i className="fa-solid fa-trash"></i>`
  `</button>`
  `</li>`
  );
  }
  }
  `export default Habit;`

- In case of semi-output,

- <img src="./img/output1.gif" width="700" height="200">

#### 7-3. The list of habits tracker

##### 7-3-1. State and props

- In case you want to get output using `Habit class` within render of `Habits class` and want to use `state` within `Habits class`, please use `props` within `Habit class`. The use of not only `state` but also `props` depends on the situation. First, please use `state` to set up inputs within current class. Second, please use `props` to set up inputs from other class and outside current class. For example, configuring keys and values on `state` in `Habits class`, in case of using the keys and values within render in `Habit class`, please use `const { name, count } = this.props.habit;` within render in `Habit class`. And then, `<Habit habit={habit} />` within render in `Habits class`. In this case, `Habit class` returns output to `Habits class` according to callback. And then, `Habits class` should return the output to browser to display the output correctly on window tab. In addition, `React` recommends to use `id` per key when using list type of input such as array. The warning message would display on console tab if not used `id`.

- In case of habits.jsx,
  `import React, { Component } from 'react';`
  `import Habit from './habit';`
  `class Habits extends Component` {
  `state = {`
  `habits: [`
  `{id: 1, name: 'Reading', count: 0},`
  `{id: 2, name: 'Running', count: 0},`
  `{id: 3, name: 'coding', count: 0}`
  ],
  };
  `render() {`
  `return (`
  `<ul>`
  `{this.state.habits.map(habit => (`
  `<Habit key={habit.id} habit={habit} />`
  ))}
  `</ul>`
  );
  }
  }
  `export default Habits;`

- In case of habit.jsx,
  `import React, { Component } from 'react';`
  `class Habit extends Component` {
  `render()` {
  `const { name, count } = this.props.habit;`
  `return(`
  `<li className="habit">`
  `<span className="habit-name">{name}</span>`
  `<span className="habit-count">{count}</span>`
  `<button className="habit-button habit-increase" onClick={this.handleIncrement}>`
  `<i className="fa-solid fa-square-plus"></i>`
  `</button>`
  `<button className="habit-button habit-decrease" onClick={this.handleDecrement}>`
  `<i className="fa-solid fa-square-minus"></i>`
  `</button>`
  `<button className="habit-button habit-delete" onClick={this.handleDelete}>`
  `<i className="fa-solid fa-trash"></i>`
  `</button>`
  `</li>`
  );
  }
  }
  `export default Habit;`

##### 7-3-2. Processing datas

- Class should process the datas with state within the class itself generally instead of processing the datas on other class. In addition, use other class with props as role of component offering only callback to display correct output with `React` if it needed. Data flows down generally. The component could pass its state down as props to its child component.

- `<Habit onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelte={this.handleDelete} />` means to use `onIncrement`, `onDecrement`, `onDelete` as `props` of `Habit class`. handleIncrement, handleDecrement, handleDelete would be implemented with state of `Habits class` at first. Inputs of `Habit class` should be applied with props to use objects of `Habits class` on `Habit class`. For example, in case you want to use keys and values of handleIncrement of `Habits class` using `<Habit onIncrement={this.handleIncrement} />`, use `handleIncrement = () => {this.props.onIncrement(this.props.habit)};` within `Habit class` according to callback. `this.props.onIncrement` means to use onIncrement as props. `this.props.habit` means to use habit as parameter of onIncrement.

- In case of `this.setState({habits: habits});` on `Habits class`, forward of habits means key of const habits per event. Backward of habits means value of const habits per event. this.setState({habits}) is equal when same name between key and value of const habits per event.

- In case of habits.jsx,
  `class Habits extends Component` {
  `handleIncrement = (habit) => {`
  `const habits = [...this.state.habits];`
  `const index = habits.indexOf(habit);`
  `habits[index].count++;`
  `this.setState({habits: habits});`
  `//habit.count++;`
  `//this.setState(this.state);`
  };
  `handleDecrement = (habit) => {`
  `const habits = [...this.state.habits];`
  `const index = habits.indexOf(habit);`
  `const count = habits[index].count -1;`
  `habits[index].count = count < 0 ? 0 : count;`
  `this.setState({habits});`
  };
  `handleDelete = (habit) => {`
  `const habits = this.state.habits.filter(item => item.id !== habit.id);`
  `this.setState({habits});`
  };
  `render()` {
  `return` (
  `<ul>`
  `{this.state.habits.map(habit => (`
  `<Habit`
  `onIncrement={this.handleIncrement}`
  `onDecrement={this.handleDecrement}`
  `onDelete={this.handleDelete} />`
  ))}
  `</ul>`
  );
  }
  }
  `export default Habits;`

- In case of habit.jsx,
  `class Habit extends Component` {
  `handleIncrement = () => {`
  `this.props.onIncrement(this.props.habit);`
  };
  `handleDecrement = () => {`
  `this.props.onDecrement(this.props.habit);`
  };
  `handleDelete = () => {`
  `this.props.onDelete(this.props.habit);`
  };
  }
  `export default Habit;`

- In case of semi-output,

- <img src="./img/output2.gif" width="700" height="200">

#### 7-4. Add Navbar

- In case you want to add navbar, you should consider more complicated the structure of components than before. The data processing should be operated on `App` component. The App component is parent component of between `navbar` and `body`. The `body` component could be parent component of `list of habits`, `input`, `reset buttons`. The one of reason why data processing should implement on App component is that counts of between navbar and body are operated with correlation. So, `App` class would use `state` and calculate with data processing. `Habits class` just has role of callback with props like `Habit class`. There is difference between `Habits class` and `Habit class`. The role of `Habits class` is to creat list of habit tracker within unorder list but the role of `Habit class` is to creat the one of list with name, count, buttons. The callback of `Habits class` is needed because `<ul>` is parent node of `<li>`.

- My concept of application is to increase count of `navbar` according to amount of lists which increases count. I used filter such as onDelte. `filter` API could creat new array according to certain condition among objects of `state`.

- In case of app.jsx,
  `import React, { Component } from 'react';`
  `import './app.css';`
  `import Habits from './components/habits';`
  `import Navbar from './components/navbar';`
  `class App extends Component` {
  `state = {`
  `habits: [`
  `{id: 1, name: 'Reading', count: 0},`
  `{id: 2, name: 'Running', count: 0},`
  `{id: 3, name: 'coding', count: 0}`
  ],
  };
  `handleIncrement = (habit) => {`
  `const habits = [...this.state.habits];`
  `const index = habits.indexOf(habit);`
  `habits[index].count++;`
  `this.setState({habits: habits});`
  };
  `handleDecrement = (habit) => {`
  `const habits = [...this.state.habits];`
  `const index = habits.indexOf(habit);`
  `const count = habits[index].count -1;`
  `habits[index].count = count < 0 ? 0 : count;`
  `this.setState({habits});`
  };
  `handleDelete = (habit) => {`
  `const habits = this.state.habits.filter(item => item.id !== habit.id);`
  `this.setState({habits});`
  };
  `render()` {
  `return`(
  `<>`
  `<Navbar`
  `totalCount={this.state.habits.filter(item => item.count > 0).length} />`
  `<Habits`
  `habits={this.state.habits}`
  `onIncrement={this.handleIncrement}`
  `onDecrement={this.handleDecrement}`
  `onDelete={this.handleDelete} />`
  `</>`
  );
  }
  }
  `export default App;`

- In case of navbar.jsx,
  `import React, { Component } from 'react';`
  `class Navbar extends Component` {
  `render()` {
  `return` (
  `<div className="navbar">`
  `<i className="navbar-logo fa-solid fa-leaf"></i>`
  `<span>Habit Tracker</span>`
  `<span className="navbar-count">{this.props.totalCount}</span>`
  `</div>`
  );
  }
  }
  `export default Navbar;`

- In case of habits.jsx,
  `import React, { Component } from 'react';`
  `import Habit from './habit';`
  `class Habits extends Component` {
  `handleIncrement = habit => {`
  `this.props.onIncrement(habit);`
  };
  `handleDecrement = habit => {`
  `this.props.onDecrement(habit);`
  };
  `handleDelete = habit => {`
  `this.props.onDelete(habit);`
  };
  `render()` {
  `return` (
  `<ul>`
  `{this.props.habits.map(habit => (`
  `<Habit`
  `key={habit.id}`
  `habit={habit}`
  `onIncrement={this.handleIncrement}`
  `onDecrement={this.handleDecrement}`
  `onDelete={this.handleDelete} />`
  ))}
  `</ul>`
  );
  }
  }
  `export default Habits;`

- In case of semi-output,

- <img src="./img/output3.gif" width="700" height="250">

#### 7-5. Add Input and Reset Btn

##### 7-5-1. Add Input

- In case you want to display data user inputs, use `inputRef = React.createRef();` to creat object which could refer other element. And then, use `ref = {this.inputRef}` for connection between object and certain element. So, data user inputs should be assigned on object named inputRef. Use `this.inputRef.current.value` to check the data. Use `this.inputRef.current.value = '';` to initialize the value after using data. The reason why we use Ref is that `React` uses DOM nodes with Ref to refer the reference rather than modifies DOM directly.

- There is submit event when clicking button within `<form>`. You could get output with onSubmit. However, browser operates refresh per submit event because the browser expects display whether to be refresh or to be changed to next page. Use `event.preventDefault();` to prevent automatical refresh per submit event.

- In case of habitAddform.jsx,
  `import React, { Component } from 'react';`
  `class HabitAddform extends Component` {
  `inputRef = React.createRef();`
  `onSubmit = (event) => {`
  `event.preventDefault();`
  `const name = this.inputRef.current.value;`
  `name && this.props.onAdd(name);`
  `this.inputRef.current.value = '';`
  }
  `render()` {
  `return` (
  `<form className="add-form" onSubmit={this.onSubmit}>`
  `<input`
  `ref={this.inputRef}`
  `type="text"`
  `className="add-input"`
  `placeholder="Habit" />`
  `<button className="add-button">Add</button>`
  `</form>`
  );
  }
  }
  `export default HabitAddform;`

- In case of habits.jsx,
  `import HabitAddform from './habitAddform';`
  `class Habits extends Component {`
  `handleAdd = name => {`
  `this.props.onAdd(name);`
  }
  `render()` {
  `return` (
  `<>`
  `<HabitAddform onAdd={this.handleAdd} />`
  `</>`

- In case of app.jsx,
  `class App extends Component {`
  `handleAdd = (name) => {`
  `const habits = [...this.state.habits, {id:Date.now(), name: name, count: 0}];`
  `this.setState({habits});`
  }
  `render()` {
  `return` (
  `<Habits`
  `onAdd={this.handleAdd} />`
  )
  }

- In case of semi-output,

- <img src="./img/output4.gif" width="700" height="300">

##### 7-5-2. Add Reset Btn

- In case of using this function only on applied component such as `Habits class`, you could use tag within render of `Habits class` rather than creat other component. In case of `handleReset()`, `button tag` is defined within render of `Habits class`. Because the `button tag` is only used on `Habits class` such as `static function of javascript`, `handleReset()` does not need parameter on `app.jsx`. In case of `handleIncrement()`, `handleAdd()`, inputs are inserted from other components such as `Habit class`, `HabitAddform class`. So, `handleIncrement()`, `handleAdd()` need parameter such as habit, name on `app.jsx`.

- In case of habits.jsx,
  `class Habits extends Component {`
  `render()` {
  `return` (
  `<>`
  `<button className="habits-reset" onClick={this.props.onReset}>Reset All</button>`
  `</>`
  );
  }
  }

- In case of app.jsx,
  `class App extends Component {`
  `handleReset = () => {`
  `const habits = this.state.habits.map(habit => {`
  `habit.count = 0;`
  `return habit;`
  })
  `this.setState({habits});`
  };
  `render()` {
  `return` (
  `<>`
  `<Habits`
  `onReset={this.handleReset} />`
  `</>`
  );
  }
  }

- In case of output,

- <img src="./img/output5.gif" width="700" height="300">

#### 7-6. Purecomponent to prevent unnecessary malfunction

- `React` updates virtual DOM per render at first and necessary somethings would be updated on DOM of browser after comparison between updated virtual DOM and current DOM of browser. However, in case of adding list of input and continuous re-rendering does not need when clicking plus/minus count button, use `PureComponent`. So, in case continous re-rendering does not need, it would be better to use `PureComponent` rather than `Component` for optimized memory a little bit and preventing malfunction different from developer intends.

- `PureComponent` implements `shouldComponentUpdate()`, not `Component`. `shouldComponentUpdate()` means to check whether or not component should be updated. In case top level data is changed on state and props, render would be called. However, in case under level data is changed on state and props, render would not be called according to shallow comparison.

- `Chrome` has highlight function regarding updates when components render. Please check the checking box like picture below.

- <img src="./img/checkbox.gif" width="700" height="200">

- In case of using components,

- <img src="./img/render.gif" width="700" height="200">

##### 7-6-1. PureComponent with under level data

- The components implement with under level data independently regarding count. Use `const { count } = this.props.habit;` within render of `Habit class` to creat variable. Use `<Habit count = {habit.count} />` within render of `Habits class` to use input as count of `Habit class`.

- In case of habits.jsx,
  `class Habits extends Component {`
  `render()` {
  `return` (
  `<>`
  `<ul>`
  `{this.props.habits.map(habit => (`
  `<Habit`
  `count={habit.count} />`
  ))}
  `</ul>`
  `</>`
  );
  }
  }

- In case of habit.jsx,
  `import React, { PureComponent } from 'react';`
  `class Habit extends PureComponent {`
  `render()` {
  `const { count } = this.props.habit;`
  }
  }

- In case of semi-output,

- <img src="./img/render2.gif" width="700" height="200">

##### 7-6-2. PureComponent with top level data

- Component could know how to implement data of object through UI as defined within render. Only `PureComponent` is declared on `Habit class`, `Habits class`.

- In case concurrency occurs on multi-thread condition, it would be better to creat object rather than data is changed on child component directly. Use `this.state.habits.map` on handleIncrement to creat new array with all element within habits object of state on `App class`. If matched id, use `{...habit, count: habit.count + 1}` to creat new object and copy from habit objects and to overwrite count among keys.

- In app.jsx,
  `import React, { PureComponent } from 'react';`
  `class App extends PureComponent {`
  `handleIncrement = (habit) => {`
  `const habits = this.state.habits.map(item => {`
  `if(item.id === habit.id) {`
  `return {...habit, count: habit.count + 1};`
  } `else {`
  `return item;`
  }
  });
  `this.setState({habits});`
  };
  `handleDecrement = (habit) => {`
  `const habits = this.state.habits.map(item => {`
  `if(item.id === habit.id) {`
  `const count = habit.count - 1;`
  `return {...habit, count: count < 0 ? 0 : count};`
  } `else {`
  `return item;`
  }
  });
  `this.setState({habits});`
  };
  `handleReset = () => {`
  `const habits = this.state.habits.map(habit => {`
  `if(habit.count !== 0) {`
  `return {...habit, count: 0};`
  } `else {`
  `return habit;`
  }
  });
  `this.setState({habits});`
  };
  }

- In case of semi-output,

- <img src="./img/render3.gif" width="700" height="200">

##### 7-6-3. Miss use PureComponent

- In case only `Habit class` defined `PureComponent`, each of habit list is not changed when clicking increase count button.
  `Habit class` can not call render because span tag of count is changed within habits and habits object is not changed when clicking plus count button. habits is top level data. The span tag of count is under level data. `React` determines there is not necessary update according to shallow comparison of virtual DOM.

- <img src="./img/render4.gif" width="700" height="200">

#### 7-7. Lifecycle function

- `React` could call correct function automatically on each of condition after each of lifecycle functions is configured. Use `componentDidMount()` to implement function when habit is added on `Habit class`. Use `componentWillUnmount()` to implement function when habit is canceled on `Habit class`.

- In case of habit.jsx,
  `class Habit extends PureComponent {`
  `componentDidMount() {`
  `console.log(`habit: ${this.props.habit.name} mounted`);`
  }
  `componentWillUnmount() {`
  `console.log(`habit: ${this.props.habit.name} unmounted`);`
  }
  }

- In case of semi-output,

- <img src="./img/output6.gif" width="700" height="300">

### 8. Resolution of failures

#### 8-1.

- symptom: `npm create react-app test` is installed completely, but I received error message when `npm start` on incorrect path. The incorrect path is `C:\Users\PARK MIN KYU\Downloads\cmder\projects\git\React\basic`. The correct path is `C:\Users\PARK MIN KYU\Downloads\cmder\projects\git\React\basic\test` because `react-app` was installed `test` depository. `package.json` should be needed when react loading. In case of incorrect path, there is no package.json which has `scripts` of start.

- <img src="./img/error1.png" width="700" height="250">

- countermeasure: type `npm start` on correct path : `C:\Users\PARK MIN KYU\Downloads\cmder\projects\git\React\basic\test`.

#### 8-2.

- symptom: `yarn create react-app test1` is not installed with error `commnad failed`. `package.json` can not be created.

- <img src="./img/error2.png" width="700" height="250">

- countermeasure: `yarn create react-app test1` could be divided to `yarn global add create-react-app` and `create-react-app test1`. Please type commands in sequence. And then, type `yarn start` when path of cmder moves to directory named `test1`.

- <img src="./img/yarn.png" width="700" height="250">

#### 8-3.

- symptom: error message occurred such as `Module not found: Can't resolve path of library` when I deleted `reportWebVitals.js`. `reportWebVitals()` on `index.jsx` could not refer the reference of `reportWebVitals()` on reportWebVital.js.

- countermeasure: restore `reportWebVital.js` on folder named `src` after exiting `React`. And then, `yarn start` once again.

#### 8-4.

- symptom: error message occurred such as `Reading is not defined no-undef`. The value of key should be applied string type.

- <img src="./img/error3.png" width="700" height="250">

- countermeasure: use `state = {habits: [{id:1, name: 'Reading', count:0}]}` instead of `name: Reading`.

#### 8-5.

- symptom: warning message occurred such as `Each child in a list should have a unique key prop`. In case you use state as array, `React` needs id per key.

- <img src="./img/error4.png" width="700" height="250">

- countermeasure: use unique id on each of objects such as `state = {habits: [{id:1, name: 'Reading', count:0}]}`. And then, use `key={habit.id}` of `<Habit key={habit.id} habit={habit} />` within render on `Habits class`.

#### 8-6.

- symptom: typeError message occurred on console tab such as `Cannot read properties of null (reading: 'habits')` when `state` and `functions` are moved from `Habits class` to `App class`. In addtion, there is no output on window tab. `state` is defined on `app.jsx`. However, I used `this.state.habits.map` of `render(){return({this.state.habits.map(habit => (...) )})}` instead of `this.props.habits.map`.

- <img src="./img/error5.png" width="700" height="400">

- countermeasure: use `render(){return(this.props.habits.map(habit => (<Habit />)))}` instead of `this.state.habits.map`.

#### 8-7.

- symptom: ReferenceError message occurred on console tab such as `Cannot access 'habits' before initialization` when return habits instead of return habit within `handleReset` on `app.jsx`. The whole habit objects are checked and implemented with `this.state.habits.map`. However, habits suddenly returned during `map`. So, habits and this.state.habits.map are concurrency and habits can not access.

- <img src="./img/error6.gif" width="700" height="250">

- countermeasure: please use return habit within `const habits = this.state.habits.map(habit => {});`.
