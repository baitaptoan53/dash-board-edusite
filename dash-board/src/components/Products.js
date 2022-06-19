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
  SearchInput,
} from "react-admin";
const postFilters = [
  <SearchInput source="id" alwaysOn />
];
export const listProducts = (props) => (
  <List {...props} filters={postFilters}>
    <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Products list
    </h2>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="price" />
      <TextField source="description" />

      <EditButton basePath="/products" />
      <DeleteButton basePath="/products" />
    </Datagrid>
  </List>
);

export const editProduct = (props) => (
  <Edit {...props}>
  <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Products Edit
    </h2>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const createProduct = (props) => (
  <Create {...props}>
  <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Products Create
    </h2>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
