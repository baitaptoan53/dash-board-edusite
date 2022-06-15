import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
} from "react-admin";

export const listProducts = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="price" />
      <TextField source="description" />

      <EditButton basePath="/products" />
    </Datagrid>
  </List>
);

export const editProduct = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const createProduct = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
