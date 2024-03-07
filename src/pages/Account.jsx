import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1" type="account">
        Update your account
      </Heading>

      <Row>
        <Heading as="h3" type="updates">
          Update user data
        </Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3" type="updates">
          Update password
        </Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
