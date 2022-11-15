import Card from "../atoms/card";

const Dashboard = () => {
  return (
    <div className="col-sm-9 card-detail">
      <div className="row m-3">
        <Card
          title="Account Balance"
          text="$30,211.28"
          icon="bi bi-reception-4 m-2 h4"
        />
        <Card
          title="Pending"
          text="$200,21.78"
          icon="bi bi-arrow-repeat m-2 h4"
        />
        <Card
          title="Processed"
          text="$40,22.34"
          icon="bi bi-geo-alt-fill m-2"
        />
        <Card title="Net Worth" text="$201,33.78" icon="bi bi-bank m-2 h4" />
        <Card
          title="Investments"
          text="$300,21.67"
          icon="bi bi-bag-check m-2 h4"
        />
        <Card title="Cash" text="$23,345.11" icon="bi bi-cash m-2 h4" />
      </div>
    </div>
  );
};
export default Dashboard;
