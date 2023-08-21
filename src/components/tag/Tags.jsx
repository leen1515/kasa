import GetDataContext from '../../utils/GetDataContext';
import { useContext } from 'react';
import { getByIdTags } from './getByIdTag';

function Tags ({ logementID }) {
  const { data } = useContext(GetDataContext);
  const getTags = getByIdTags(data, logementID);
  return <div className="tags-container">{getTags.map((tag, i) => (
      <div key={tag + i} className="tag"><p>{tag}</p></div>))}
      </div>;
}
export default Tags;
