import { Card, CardBody, CardTitle } from "reactstrap";

// Displays the welcome message with the number of snacks and drinks available
function Home({counts}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <p style={{"textAlign": "center"}}>
              Our menu consists of {counts.snack_count} snacks and {counts.drink_count} drinks!
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
