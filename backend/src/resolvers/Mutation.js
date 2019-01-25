async function createUser(parent, args, context) {
  const user = await context.prisma.createUser({});
  return user;
}

async function createGame(parent, args, context) {
  const game = await context.prisma.createGame({
    playerOne: { connect: { id: args.userId } },
    board: '[[]]',
  });
  return game;
}

async function joinGame(parent, args, context) {
  const game = await context.prisma.updateGame({
    data: {
      playerTwo: {
        connect: {
          id: args.userId,
        },
      },
    },
    where: {
      id: args.gameId,
    },
  });
  return game;
}

module.exports = {
  createGame,
  createUser,
  joinGame,
};
