import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import IconButton from "@mui/material/IconButton";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Dashlead 🎉🎉🎊⭐</h1>
      <Analysis />
      <LongBoard />
    </div>
  );
};
const Analysis = () => {
  const data = [
    {
      title: "Number Of Sales",
      icon1: "fa-solid fa-chart-line",
      value: 568,
      // icon2: "fa-solid fa-angle-up",
      icon2: <ArrowDropUpIcon />,
      percentage: 0.7,
      color: "#8760fb",
    },
    {
      title: "New Revenue",
      icon1: "fa-solid fa-coins",
      value: "$12,897",
      icon2: <ArrowDropDownIcon />,
      percentage: -0.43,
      color: "#eb7033",
    },
    {
      title: "Total Cost",
      icon1: "sign",
      value: "$11,234",
      icon2: <ArrowDropDownIcon />,
      percentage: -1.44,
      color: "#03c994",
    },
    {
      title: "Profit By Sale",
      icon1: "fa-solid fa-signal",
      value: "$789",
      icon2: <ArrowDropUpIcon />,
      percentage: 0.9,
      color: "#00b7ff",
    },
  ];

  return (
    <div className="App">
      {data.map((item, index) => (
        <StackBoard key={index} {...item} />
      ))}
    </div>
  );
};

function StackBoard({ title, icon1, value, icon2, percentage, color }) {
  return (
    <div className="stackboard-container">
      <div className="title">
        <h3>{title}</h3>
        <i className={icon1} style={{ color }}></i>
      </div>
      <h1>{value}</h1>
      <div className="progress-clr">
        <div className="first-value" style={{ backgroundColor: color }}></div>
        <div className="second-value"></div>
      </div>
      <div className="month">
        <h2>Last Month</h2>
        <div className="icon-percentage">
          <IconButton sx={{ color: color }}>{icon2}</IconButton>
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default App;

function LongBoard() {
  return (
    <div className="monthly-profits">
      <div>
        <h3>Monthly Profits</h3>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
      </div>
      <br />
      <h2>$22,534</h2>
      <br />
      <div className="right">
        <p>This Month</p>
        <h5>75%</h5>
      </div>
      <div className="join">
        <div className="this-month-1"></div>
        <div className="this-month-2"></div>
      </div>
      <div className="right">
        <p>Last Month</p>
        <h5>50%</h5>
      </div>
      <div className="join2">
        <div className="last-month-1"></div>
        <div className="last-month-2"></div>
      </div>
    </div>
  );
}
