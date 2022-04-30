
const createHTML = (myTeam) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css" />
    <script
      src="https://kit.fontawesome.com/7d3d72b2a8.js"
      crossorigin="anonymous"
    ></script>
    <title>My Team</title>
  </head>

  <body>
    <header class="header">
      <h1>
        My Team
        <i class="fa-solid fa-chalkboard-user">
          <i class="fa-solid fa-people-group"></i
        ></i>
      </h1>
    </header>
    <main class="container">

    </main>
  </body>
</html>`;
}
module.exports = createHTML;
