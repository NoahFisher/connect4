function playerOne(parent, args, context) {
  return context.prisma.game({ id: parent.id }).playerOne();
}

function playerTwo(parent, args, context) {
  return context.prisma.game({ id: parent.id }).playerTwo();
}

function playerMove(parent, args, context) {
  return context.prisma.game({ id: parent.id }).playerMove();
}

module.exports = {
  playerMove,
  playerOne,
  playerTwo,
};
