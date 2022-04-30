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
        <a><b>Email: </b>${myTeam.email}</a>
      </section>
`;
    case "Engineer":
      return `      <section class="card engineer">
        <header class="title">
          <h2>${myTeam.name}</h2>
          <h3>Engineer <i class="fa-solid fa-computer"></i></h3>
        </header>
        <p><b>ID: </b>${myTeam.id}</p>
        <p><b>Github: </b><a href="https://github.com/${myTeam.github}"></a>${myTeam.github}</p>
        <a><b>Email: </b>${myTeam.email}</a>
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
        <p><b>Email: </b>${myTeam.email}</p>
      </section>
`;
  }
  // let jobStr = "";
  // const cardStr = `         <section class="card ${myTeam.role.toLowerCase()}">
  //           <header class="title">
  //             <h2>${myTeam.name}</h2>
  //             <h3>${myTeam.role} <i class="fa-solid fa-bullhorn"></i></h3>
  //           </header>
  //           <p><b>ID: </b>${myTeam.id}</p>
  //           ${jobStr}
  //           <a><b>Email: </b>${myTeam.email}</a>
  //         </section>`;

  // switch (myTeam.role) {
  //   case "Manager":
  //     jobStr = `<p><b>Office Number: </b>${myTeam.officeNumber}</p>`;
  //     break;
  //   case "Engineer":
  //     jobStr = `<p><b>Github: </b><a href="https://github.com/${myTeam.github}"></a>${myTeam.github}</p>`;
  //   case "Intern":
  //     jobStr = `<p><b>School: </b>${myTeam.school}</p>`;
  // }
  // return cardStr;
};

module.exports = createCard;
//data.forEach();
//const mainEl = document.querySelector;
