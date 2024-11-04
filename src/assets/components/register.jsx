import { Button, Card, CardBody, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function Register() {
    return (
    <Card>
        <CardBody>
    <Form>
  <FormGroup>
    <Label for="ad">
      Ad:
    </Label>
    <Input
      id="ad"
      name="ad"
      placeholder="Adınızı giriniz"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="soyad">
      Soyad:
    </Label>
    <Input
      id="soyad"
      name="soyad"
      placeholder="Soyadınızı giriniz"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="email">
      email:
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="Email adresinizi giriniz"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="password">
      Password
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="Güçlü bir parola giriniz"
      type="password"
    />
  </FormGroup>
  
  
  <Button>
    Kayıt ol
  </Button>
</Form>
</CardBody>
        </Card>
    );
}