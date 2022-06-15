import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
} from "react-admin";

export const listUsers = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <EditButton basePath="/users" />
    </Datagrid>
  </List>
);

export const editUser = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <EmailField source="email" />
    </SimpleForm>
  </Edit>
);

export const createUser = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);
