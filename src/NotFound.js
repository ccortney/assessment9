import { Card, CardBody, CardTitle } from "reactstrap";

// if webpage is not found, display a 404 message
// note: does not sent a 404 error
function NotFound() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              404: Page Not Found
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default NotFound;