import { GrGithub } from "react-icons/gr";
const MoreInfo = (props) => {
  return (
    <div className='more-info'>
     <a href={props.demo} target="_blank"rel="noreferrer">
        <div className="btn btn-primary">Demo</div>
      </a>
      <a href={props.repo} target="_blank" rel="noreferrer">
        <div className="btn"> <GrGithub/> Repo</div>
      </a>
    </div>
  );
}
export default MoreInfo;