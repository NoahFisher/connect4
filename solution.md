Architecture:
  Use facebook's create-react-app to scaffold the front end of the application.
  Use a Node.js backend to host the application
  Use postgres as a database layer.

For the front end... (7x6) gameboard.

  | | | | | | |
  | | | | | | |
  | | | | | | |
  | | | | | | |
  | | | | | | |
  | | | | | | |
  | | | | | | |

Models:
  - User
    - id: integer
    - username: string
    - cookie_id: string
    - created_at:
  - GameBoard
    - id: integer
    - board: jsonb
    - user_id: integer (the user who's turn it is)
  - GameBoardUser (joins GameBoards and Users)
    - id: integer
    - user_id: integer
    - game_board_id: integer
    - position: integer

Components:
  - GameCell (controlled, can be filled in or not)
  - GameBoard
  - GameLogic

Routes for the backend: (use cookies to determine which user is which?)
  - /connect4 -> shows all games that have been played (for observing?)
  - /connect4/new (POST) -> initialize a new game
  - /connect4/:game_id/moves (POST) -> post a move to this endpoint
  - /connect4/id/
  -
  - (alternatively, use a graphQl approach?)


Unknowns:
  - how to keep track of anonymous users. Cookies?
  - learning GraphQL.
  - User matching, just get the most recent users and match them?
