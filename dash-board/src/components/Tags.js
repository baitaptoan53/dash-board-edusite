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

} from "react-admin";

export const listTags = (props) => (
  <List {...props}>
  <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Tags list
    </h2>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />

      <EditButton basePath="/tags" />
      <DeleteButton basePath="/tags" />
    </Datagrid>
  </List>
);

export const editTags = (props) => (
  <Edit {...props}>
  <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Tags Edit
    </h2>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const createTags = (props) => (
  <Create {...props}>
  <h2 className="mb-2">
      <i className="me-2 p-1"></i>
      Tags Create
    </h2>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
