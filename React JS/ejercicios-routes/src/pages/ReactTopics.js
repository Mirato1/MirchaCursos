import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
        voluptate voluptatibus harum facere facilis quibusdam, voluptatem
        deserunt aspernatur iure quaerat odit sapiente laudantium non iste eum
        amet voluptatum reprehenderit aliquam!
      </p>
    </div>
  );
};

const ReactTopics = () => {
  // "path" nos permite construir rutas relativas <Route> mientras que "url" nos permite construir enlaces relativos <Link> <Navlink>
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            excepturi quisquam laborum sed iste numquam magni quo fuga?
            Doloribus asperiores nostrum expedita veniam, ad quod perspiciatis.
            Ipsam praesentium ab doloribus!
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
