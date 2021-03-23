import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from '../components/layout/Landing'
import AdmissionForm from '../components/forms/AdmissionForm'
import Books from '../components/books/Books'
import Contact from '../components/contact/Contact'
import FeeSection from '../components/fee/FeeSection'

const Routing = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/admission" component={AdmissionForm} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/fee" component={FeeSection} />
        <Route exact path="*" ><h1>Error ! Not Found</h1></Route>
      </Switch>
    </Fragment>
  );
};

export default Routing;
