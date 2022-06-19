import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
  DeleteButton,
} from "react-admin";

export const listUsers = (props) => (
  <List {...props}>
    <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Users list
    </h2>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="Course purchased" />

      <EditButton basePath="/users" />
      <DeleteButton basePath="/users" />
    </Datagrid>
  </List>
);

export const editUser = (props) => (
  <Edit {...props}>
    <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Users Edit
    </h2>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="Course purchased" />
    </SimpleForm>
  </Edit>
);

export const createUser = (props) => (
  <Create {...props}>
    <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Users Create
    </h2>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="Course purchased" />
    </SimpleForm>
  </Create>
);
