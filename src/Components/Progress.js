export const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];


let total = () => {
  let amount = 0
  for(const donation of donations) {
    amount += Number(donation.amount)
  }
  return amount
}


const targetAmount = 1000;

export default function Progress() {
  return <section className="progress">
  <h2>
    Raised <span className="secondary">{'$'+335}</span> of
    <span className="secondary"> ${targetAmount}</span>
  </h2>
</section>;
}
