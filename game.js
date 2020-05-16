const { Game } = require('./db/models/Game')
const { Player } = require('./db/models/Player')
const { Sheet } = require('./db/models/Sheet')
const { getPlayers } = require('./player')

const initGame = async (opts) => {
  const game = await Game.create()
  const player = await Player.create({
    'game_id': game.uuid,
    isHost: true
  })
  return {
    player,
    game: {
      ...game.toJSON(),
      players: [player]
    }
  }
}

const getGame = async (id, opts) => {
  // get model by id from sequelize
  const game = Game.findById(id)
  const players = getPlayers(id)
  await Promise.all([game, players])
  return { game, players }
}

const startGame = async (id, opts) => {
  const game = await Game.findByPk(id)
  if (!game) throw new Error('game not found')
  // set status to active
  game.set({ status: 'active' })

  // start a sheet for each player
  const players = await getPlayers(id)

  const fullPlayers = []
  for (const player of players) {
    const createSheet = async player => {
      const sheet = await Sheet.create({
        game_id: id,
        active_player_id: player.uuid
      })
      fullPlayers.push({ ...player.toJSON(), queue: [sheet] })
    }
    await createSheet(player)
  }
  return { game, players: fullPlayers }
}

module.exports = { initGame, getGame, startGame }