import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "Mis on sinu nimi?"
    },
    {
      type: "password",
      name: "password",
      message: "Sisesta parool:"
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Kas oled kindel?",
      default: false
    },
    {
      type: "number",
      name: "age",
      message: "Mitme aastane oled?"
    },
    {
      type: "list",
      name: "color",
      message: "Vali värv:",
      choices: ["Punane", "Sinine", "Roheline"]
    },
    {
      type: "rawlist",
      name: "pet",
      message: "Vali lemmikloom:",
      choices: ["Koer", "Kass", "Papagoi"]
    },
    {
      type: "expand",
      name: "expandTest",
      message: "Täpsusta valik:",
      choices: [
        { key: "a", name: "Valik A", value: "A" },
        { key: "b", name: "Valik B", value: "B" }
      ]
    },
    {
      type: "checkbox",
      name: "hobbies",
      message: "Vali hobid:",
      choices: ["Sport", "Joonistamine", "Koodimine", "Muusika"]
    },
    {
      type: "editor",
      name: "bio",
      message: "Kirjelda ennast tekstina (avab süsteemi tekstiredaktori)"
    }
  ])
  .then((answers) => {
    console.log("Vastused:", answers);
  });
