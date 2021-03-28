import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
const FeatureArray = [
  {
    id: 1,
    title: "24/7 Availability",
    icon: <AccessTimeIcon style={{fontSize:"70px"}} className="text-success"/>,
  },
  {
    id: 2,
    title: "3 days free trial",
    icon: <OfflineBoltIcon style={{fontSize:"70px"}} className="text-info"/>,
  },
  {
    id: 3,
    title: "Access any where ",
    icon: <LocationOnIcon style={{fontSize:"70px"}} className="text-primary"/>,
  },
];

export default FeatureArray;
