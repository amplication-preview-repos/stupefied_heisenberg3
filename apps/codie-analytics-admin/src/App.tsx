import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SearchAnalyticsList } from "./searchAnalytics/SearchAnalyticsList";
import { SearchAnalyticsCreate } from "./searchAnalytics/SearchAnalyticsCreate";
import { SearchAnalyticsEdit } from "./searchAnalytics/SearchAnalyticsEdit";
import { SearchAnalyticsShow } from "./searchAnalytics/SearchAnalyticsShow";
import { SearchQueryList } from "./searchQuery/SearchQueryList";
import { SearchQueryCreate } from "./searchQuery/SearchQueryCreate";
import { SearchQueryEdit } from "./searchQuery/SearchQueryEdit";
import { SearchQueryShow } from "./searchQuery/SearchQueryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"codie-analytics"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SearchAnalytics"
          list={SearchAnalyticsList}
          edit={SearchAnalyticsEdit}
          create={SearchAnalyticsCreate}
          show={SearchAnalyticsShow}
        />
        <Resource
          name="SearchQuery"
          list={SearchQueryList}
          edit={SearchQueryEdit}
          create={SearchQueryCreate}
          show={SearchQueryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
