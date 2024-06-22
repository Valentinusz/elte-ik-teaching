/* eslint-disable react/prop-types */
export function Track({ track, handleEdit, handleDelete }) {
  return (
    <tr>
      <td>
        <i className="user icon"></i> {track.artist}
      </td>
      <td>
        <i className="music icon"></i> {track.title}
      </td>
      <td className="right aligned collapsing">
        <button onClick={handleEdit} className="ui icon button">
          <i className="edit icon"></i>
        </button>
        <button onClick={handleDelete} className="ui icon button red">
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
}
