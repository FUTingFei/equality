import equality from 'ic:canisters/equality';

equality.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
