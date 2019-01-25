function info() {
  return "Welcome to the game of connect4. The goal of the game is connect 4 tiles in a row"
}

async function game(parent, args, context, info) {
  const game = await context.prisma.game({ id: args.gameId })
  return game
}

async function users(parent, args, context, info) {
  const users = await context.prisma.users({
    first: args.first,
    orderBy: args.orderBy,
    skip: args.skip,
  })

  return users
}

async function games(parent, args, context, info) {
  const games = await context.prisma.games({
    first: args.first,
    orderBy: args.orderBy,
    skip: args.skip,
  })

  return games
}

module.exports = {
  game,
  games,
  info,
  users,
}
