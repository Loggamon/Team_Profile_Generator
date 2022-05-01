const createCard = (myTeam) => {
  switch (myTeam.role) {
    case "Manager":
      return `      <section class="card manager">
        <header class="title">
          <h2>${myTeam.name}</h2>
          <h3>Manager <i class="fa-solid fa-bullhorn"></i></h3>
        </header>
        <p><b>ID: </b>${myTeam.id}</p>
        <p><b>Office Number: </b>${myTeam.officeNumber}</p>
        <p><b>Email: </b><a href="mailto:${myTeam.email}">${myTeam.email}</a></p>
      </section>
`;
    case "Engineer":
      return `      <section class="card engineer">
        <header class="title">
          <h2>${myTeam.name}</h2>
          <h3>Engineer <i class="fa-solid fa-computer"></i></h3>
        </header>
        <p><a>ID: </b>${myTeam.id}</p>
        <p><b>Github: </b><a href="https://github.com/${myTeam.github}">${myTeam.github}</a></p>
        <p><b>Email: </b><a href="mailto:${myTeam.email}">${myTeam.email}</a></p>
      </section>
`;
    case "Intern":
      return `      <section class="card intern">
        <header class="title">
          <h2>${myTeam.name}</h2>
          <h3>Intern <i class="fa-solid fa-glasses"></i></h3>
        </header>
        <p><b>ID: </b>${myTeam.id}</p>
        <p><b>School: </b>${myTeam.school}</p>
        <p><b>Email: </b><a href="mailto:${myTeam.email}">${myTeam.email}</a></p>
      </section>
`;
  }
};

module.exports = createCard;
