import React from "react";
import { Table } from "reactstrap";

export default props => {
  const { favoriteList } = props;

  return (
    <div>
      <div>
        <Table>
          <thead>
              <th  className="favorite">I-<img className="like" src="https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/like-512.png" alt="heart"/>-List</th>
          </thead>
        </Table>
      </div>
      <div>
        <Table>
          <tbody>
            <tr>
              {favoriteList.map(item => {
                return (
                  <div>
                    <a key={item.id} href={item.link}>
                      <td>
                        <img
                          src={item.img}
                          alt={item.title}
                        />
                      </td>
                      <td>{item.title}</td>
                    </a>
                  </div>
                );
              })}
            </tr>
          </tbody>
        </Table>
      </div>  
    </div>
  );
};