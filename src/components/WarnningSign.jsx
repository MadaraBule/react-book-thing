import {Alert} from 'react-bootstrap';
function AlertDismissibleExample() {
        const [show] = (true);
      
        if (show) {
          return (
            <Alert variant="danger" >
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          );
        }
      }
      render(<AlertDismissibleExample />);

export default MyFooter;