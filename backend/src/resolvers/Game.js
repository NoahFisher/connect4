function playerOne(parent, args, context) {
  return context.prisma.game({ id: parent.id }).playerOne();
}

function playerTwo(parent, args, context) {
  return context.prisma.game({ id: parent.id }).playerTwo();
}

module.exports = {
  playerOne,
  playerTwo,
};
