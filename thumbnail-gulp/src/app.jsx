var React = require('react');
var ThumbnailList = require('./thumbnaillist')

var options = {
  thumbnailData: [{
    title: "Inbox",
    number: 32,
    header: "Learn React",
    description: "React is a fantastic library for making fast dynamic pages. React is a fantastic library for making fast dynamic pages. ",
    imageUrl: 'http://formatjs.io/img/react.svg'
  },{
    title: "Sent",
    number: 14,
    header: "Learn Gulp",
    description: "Gulp will speed up your development workflow. Gulp will speed up your development workflow. ",
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
}
console.log('hey');
// ask react to render the class
var element = React.createElement(ThumbnailList, options);

// tell it where to place the rendered element in the DOM
React.render(element, document.querySelector('.container'))
