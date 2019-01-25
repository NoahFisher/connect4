const BusinessLogic = require('./BusinessLogic');


async function createUser(parent, args, context) {
  const user = await context.prisma.createUser({});
  return user;
}

async function createGame(parent, args, context) {
  const game = await context.prisma.createGame({
    playerOne: { connect: { id: args.userId } },
    playerMove: { connect: { id: args.userId } },
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


async function createMove(parent, args, context) {
  // TODO:
  // gameComplete = Businesslogic.isGameComplete(board);
  const game = await context.prisma.updateGame({
    data: {
      playerMove: {
        connect: {
          id: args.nextUserIdsMove,
        },
      },
      board: args.board,
    },
    where: {
      id: args.gameId,
    },
  });
  return game;
}

module.exports = {
  createGame,
  createMove,
  createUser,
  joinGame,
};
