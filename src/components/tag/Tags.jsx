import { getByIdTags } from './getBIdTags';

function Tags ({ liste, id }) {
  return <div className="tags-container">{getByIdTags(liste, id).map((tag, i) => (
      <div key={tag + i} className="tag"><p>{tag}</p></div>))}
      </div>;
}
export default Tags;
