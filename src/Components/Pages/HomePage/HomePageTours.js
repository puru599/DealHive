import classes from "./HomePageTours.module.css";

const HomePageTours = () => {
  const Albums = [
    {
      date: "JUL 16",
      place: "DETROIT",
      location: "MI DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 20",
      place: "CONCORD, CA",
      location: "BUDWEISER STAGE",
    },
    {
      date: "JUL 16",
      place: "LAS VEGAS, NV",
      location: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 16",
      place: "PHOENIX, AZ",
      location: "AK-CHIN PAVILION",
    },
    {
      date: "JUL 16",
      place: "BRISTOW, VA",
      location: "T-MOBILE ARENA",
    },
    {
      date: "JUL 16",
      place: "TORONTO,ON",
      location: "CONCORD PAVILION",
    },
  ];
  return (
    <ul className={classes.ul}>
      {Albums.map((item) => {
        return (
          <li key={item.place}>
            <span>{item.date}</span>
            <span>{item.place}</span>
            <span>{item.location}</span>
            <button>Book Tickets</button>
          </li>
        );
      })}
    </ul>
  );
};

export default HomePageTours;
