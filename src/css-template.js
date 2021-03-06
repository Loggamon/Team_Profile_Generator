const createStyles = () => {
    return `* {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
      }
      
      .header {
        background-color: rgb(2, 110, 43);
        margin: auto;
        padding: 25px;
        display: flex;
        justify-content: center;
        color: white;
        text-shadow: 2px 2px rgb(3, 68, 17);
      }
      
      .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        margin: 5px;
      }
      
      .title {
        font-size: larger;
        color: white;
        margin-bottom: 50px;
        text-shadow: 2px 2px black;
      }
      .card {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding: 35px;
        margin: 20px;
        border: 1px solid black;
        border-style: solid;
        border-radius: 10px;
        box-shadow: 10px 10px 5px 0 grey;
      }
      
      .manager {
        background: linear-gradient(rgb(23, 56, 165) 50%, white 50%);
      }
      .engineer {
        background: linear-gradient(rgb(104, 55, 14) 50%, white 50%);
      }
      .intern {
        background: linear-gradient(rgb(202, 98, 0) 50%, white 50%);
      }`
}

module.exports = createStyles;