import React from "react";
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
  DateTimeInput,
  DateField,
} from "react-admin";
export const listPost = (props) => (
  <List {...props}>
    <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Post list
    </h2>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="content" />
      <TextField source="user_id" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <EditButton basePath="/post" />
      <DeleteButton basePath="/post" />
    </Datagrid>
  </List>
);

export const editPost = (props) => (
  <Edit {...props}>
    <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Post Edit
    </h2>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="content" />
      <TextInput source="user_id" />
      <DateTimeInput source="created_at" />
      <DateTimeInput source="updated_at" />
    </SimpleForm>
  </Edit>
);
export const createPost = (props) => (
  <Create {...props}>
    <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Post Create
    </h2>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="content" />
      <TextInput source="user_id" />
      <DateTimeInput source="created_at" />
      <DateTimeInput source="updated_at" />
    </SimpleForm>
  </Create>
);
