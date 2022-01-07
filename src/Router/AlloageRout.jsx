import {Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import NoMatch from '../Pages/NoMatch';
import ProductDetails from '../Pages/ProductDetails';
 export default function AllpageRouts() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                {/* <Route>
                    <NoMatch/>
                </Route> */}
                <Route exact path="/:id">
                    <ProductDetails/>
                </Route>
            </Switch>
        </div>
    )
}