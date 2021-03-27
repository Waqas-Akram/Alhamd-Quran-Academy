import React, { Fragment } from "react";
import Moment from 'react-moment'
import {Link} from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';

const StudentTable = ({studentName,date,id}) => {
  return (
    <Fragment>
     
        <tbody>
          <tr>
            <td>{studentName}</td>
            <td><Moment format='DD MMMM YYYY'>{date}</Moment></td>
            <td><Link to={`/admin/students/${id}`}><VisibilityIcon/></Link></td>
          </tr>
        </tbody>
    </Fragment>
  );
};

export default StudentTable;
