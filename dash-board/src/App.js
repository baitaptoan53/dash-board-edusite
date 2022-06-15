import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import {
  listProducts,
  editProduct,
  createProduct,
} from "./components/Products";
import { listUsers, editUser, createUser } from "./components/Users";
import { listTags, editTags, createTags } from "./components/Tags";
import AdminPanel from "./components/AdminPanel";
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import StyleIcon from '@mui/icons-material/Style';
function App() {
  return (
    <div className="App">
      <Admin
       
    
        title={"Admin Edusite"}
        dashboard={AdminPanel}
        dataProvider={simpleRestProvider("http://localhost:3000")}
      >
        <Resource
          name="products"
          icon={BookIcon}
          list={listProducts}
          edit={editProduct}
          create={createProduct}
        />
        <Resource
          name="users"
          icon={PeopleIcon}
          list={listUsers}
          edit={editUser}
          create={createUser}
        />
        <Resource
          name="tags"
          icon={StyleIcon}
          list={listTags}
          edit={editTags}
          create={createTags}
        />
      </Admin>
    </div>
  );
}

export default App;
