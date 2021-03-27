import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../components/layout/Landing";
import AdmissionForm from "../components/forms/AdmissionForm";
import Books from "../components/books/Books";
import FeeSection from "../components/fee/FeeSection";
import Admin from "../components/admin/Admin";
import NotFound from "../components/error/NotFound";
import SingleStudent from "../components/admin/SingleStudent";

const Routing = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/admission" component={AdmissionForm} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/fee" component={FeeSection} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/students/:id" component={SingleStudent} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routing;
