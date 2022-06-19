import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import {
  listProducts,
  editProduct,
  createProduct,
} from "./components/Products";
import { listUsers, editUser, createUser } from "./components/Users";
import { listTags, editTags, createTags } from "./components/Tags";
import { listPost, editPost, createPost } from "./components/Post";
import AdminPanel from "./components/AdminPanel";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import StyleIcon from "@mui/icons-material/Style";
import PostAddIcon from "@mui/icons-material/PostAdd";
import "bootstrap/dist/css/bootstrap.min.css";
import authProvider from './authProvider';
function App() {
  return (
    <div className="App">
      <Admin
      authProvider={authProvider}
        title={"Admin Edusite"}
        dashboard={AdminPanel}
        dataProvider={simpleRestProvider("http://localhost:3000")}
      >
        <Resource
          name="Courses"
          icon={BookIcon}
          list={listProducts}
          edit={editProduct}
          create={createProduct}
        />
        <Resource
          name="Users"
          icon={PeopleIcon}
          list={listUsers}
          edit={editUser}
          create={createUser}
        />
        <Resource
          name="Tags"
          icon={StyleIcon}
          list={listTags}
          edit={editTags}
          create={createTags}
        />
        <Resource
          name="Post"
          icon={PostAddIcon}
          list={listPost}
          edit={editPost}
          create={createPost}
        />
      </Admin>
    </div>
  );
}

export default App;
