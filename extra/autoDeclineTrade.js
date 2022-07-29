socket.on('request', (user) => {
  let sentuser = `${user}`;
  console.log(sentuser + ' attempted to send a request but was blocked.');
  $(".tradeRequest").remove();
  socket.emit('decline');
});
